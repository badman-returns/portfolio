#!/usr/bin/env node
/**
 * Publish MDX blog posts to Sanity CMS.
 *
 * Usage:
 *   SANITY_WRITE_TOKEN=<token> node scripts/publish-to-sanity.mjs [filename...]
 *
 * Examples:
 *   SANITY_WRITE_TOKEN=sk... node scripts/publish-to-sanity.mjs assessment-engine
 *   SANITY_WRITE_TOKEN=sk... node scripts/publish-to-sanity.mjs   # publishes all new posts
 */

import { createClient } from "@sanity/client";
import matter from "gray-matter";
import { readFileSync, readdirSync } from "fs";
import { join, basename } from "path";
import crypto from "crypto";

const PROJECT_ID = "2a5ceujm";
const DATASET = "production";
const API_VERSION = "2024-01-01";

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error("Error: SANITY_WRITE_TOKEN env var is required.");
  console.error(
    "Create one at: https://www.sanity.io/manage/project/2a5ceujm/api#tokens"
  );
  process.exit(1);
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: API_VERSION,
  token,
  useCdn: false,
});

const BLOGS_DIR = join(
  new URL(".", import.meta.url).pathname,
  "../content/blogs"
);

// ── Category mapping ──

const CATEGORY_MAP = {
  "assessment-engine": ["Architecture", "WebSockets", "System Design"],
  "observability-stack": ["Infrastructure", "Monitoring", "System Design"],
  "payment-flow": ["Payments", "React Native", "Architecture"],
  "retry-aware-api-client": ["Architecture", "TypeScript", "Frontend"],
  "chat-message-types": ["Frontend", "React", "System Design"],
  "otp-auth-rate-limiting": ["Backend", "Security", "Node.js"],
  "doctor-scheduling": ["Backend", "PostgreSQL", "System Design"],
  "dashboards-on-a-spreadsheet": ["Frontend", "System Design", "React"],
  "syncing-a-live-grid-an-llm-is-editing": ["Frontend", "State Management", "Real-Time"],
  "the-data-that-lied": ["Frontend", "Real-Time", "System Design"],
};

const EXCERPT_MAP = {
  "assessment-engine":
    "How we built a real-time clinical assessment engine using Socket.IO, Redis state machines, and config-driven scoring — with emergency short-circuits for risk detection.",
  "observability-stack":
    "Deploying Prometheus, Grafana, Loki, Tempo, and Alertmanager for a Node.js backend. What actually caught production issues and what was overkill.",
  "payment-flow":
    "Building a Razorpay payment flow that works across web, React Native, and WebView — with a postMessage bridge, HMAC verification, and webhook reconciliation.",
  "retry-aware-api-client":
    "Building an Axios-based HTTP client with linear backoff retries, a subscriber queue for silent token refresh, server-down detection via CustomEvents, and forced logout after repeated failures.",
  "chat-message-types":
    "Rendering 20 message types in a single chat UI with a switch statement, the isLastMessage single-active-step pattern, and three hooks pushing to one Redux store.",
  "otp-auth-rate-limiting":
    "Phone-based OTP auth with crypto-safe generation, cookie-only JWT delivery, escalating rate limits across six tiers, and full refresh token rotation with bcrypt verification.",
  "doctor-scheduling":
    "RRule-based recurring availability, lazy slot generation with IST-UTC conversion, FOR UPDATE SKIP LOCKED for race-safe booking, and payment locking with cron-based cleanup.",
  "dashboards-on-a-spreadsheet":
    "Turning a talk-to-it data grid into a one-glance surface — and why the dashboard, not the widget, is the fundamental unit.",
  "syncing-a-live-grid-an-llm-is-editing":
    "A live data grid an LLM edits while a user does too — and the silent concurrency bugs I fixed by making the client defer to the server.",
  "the-data-that-lied":
    "A live grid kept showing changes that weren't saved yet, so they vanished on page change. The fix lived between two systems.",
};

// ── Markdown → Portable Text ──

function generateKey() {
  return crypto.randomBytes(6).toString("hex");
}

function parseInlineMarks(text) {
  // Convert inline markdown (bold, italic, inline code, links) to Portable Text spans
  const spans = [];
  const markDefs = [];

  // Regex to find **bold**, *italic*, `code`, and [text](url)
  const tokenRegex =
    /(\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\))/g;
  let lastIndex = 0;
  let match;

  while ((match = tokenRegex.exec(text)) !== null) {
    // Add plain text before this match
    if (match.index > lastIndex) {
      const plain = text.slice(lastIndex, match.index);
      if (plain) {
        spans.push({
          _type: "span",
          _key: generateKey(),
          text: plain,
          marks: [],
        });
      }
    }

    if (match[2]) {
      // **bold**
      spans.push({
        _type: "span",
        _key: generateKey(),
        text: match[2],
        marks: ["strong"],
      });
    } else if (match[3]) {
      // *italic*
      spans.push({
        _type: "span",
        _key: generateKey(),
        text: match[3],
        marks: ["em"],
      });
    } else if (match[4]) {
      // `inline code` — render as strong (Sanity blockContent doesn't have a code decorator)
      spans.push({
        _type: "span",
        _key: generateKey(),
        text: match[4],
        marks: ["strong"],
      });
    } else if (match[5] && match[6]) {
      // [text](url)
      const linkKey = generateKey();
      markDefs.push({
        _type: "link",
        _key: linkKey,
        href: match[6],
      });
      spans.push({
        _type: "span",
        _key: generateKey(),
        text: match[5],
        marks: [linkKey],
      });
    }

    lastIndex = match.index + match[0].length;
  }

  // Remaining plain text
  if (lastIndex < text.length) {
    const remaining = text.slice(lastIndex);
    if (remaining) {
      spans.push({
        _type: "span",
        _key: generateKey(),
        text: remaining,
        marks: [],
      });
    }
  }

  // If no spans found, return the whole text as a plain span
  if (spans.length === 0) {
    spans.push({
      _type: "span",
      _key: generateKey(),
      text: text,
      marks: [],
    });
  }

  return { spans, markDefs };
}

function markdownToPortableText(markdown) {
  const blocks = [];
  const lines = markdown.split("\n");
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines and horizontal rules
    if (line.trim() === "" || line.trim() === "---") {
      i++;
      continue;
    }

    // Fenced code block
    if (line.trim().startsWith("```")) {
      const langMatch = line.trim().match(/^```(\w*)/);
      const language = langMatch?.[1] || "text";
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```

      blocks.push({
        _type: "code",
        _key: generateKey(),
        language: language === "json" ? "json" : language === "yaml" ? "yaml" : language === "typescript" ? "typescript" : language === "text" ? "text" : language,
        code: codeLines.join("\n"),
      });
      continue;
    }

    // Headings
    const headingMatch = line.match(/^(#{1,3})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const { spans, markDefs } = parseInlineMarks(headingMatch[2]);
      blocks.push({
        _type: "block",
        _key: generateKey(),
        style: `h${level}`,
        markDefs,
        children: spans,
      });
      i++;
      continue;
    }

    // Unordered list items (-, *, or numbered with specific markers)
    if (line.match(/^\s*[-*]\s+/)) {
      const listItems = [];
      while (i < lines.length && lines[i].match(/^\s*[-*]\s+/)) {
        const itemText = lines[i].replace(/^\s*[-*]\s+/, "");
        const { spans, markDefs } = parseInlineMarks(itemText);
        listItems.push({
          _type: "block",
          _key: generateKey(),
          style: "normal",
          listItem: "bullet",
          level: 1,
          markDefs,
          children: spans,
        });
        i++;
      }
      blocks.push(...listItems);
      continue;
    }

    // Numbered list items
    if (line.match(/^\s*\d+\.\s+/)) {
      const listItems = [];
      while (i < lines.length && lines[i].match(/^\s*\d+\.\s+/)) {
        const itemText = lines[i].replace(/^\s*\d+\.\s+/, "");
        const { spans, markDefs } = parseInlineMarks(itemText);
        listItems.push({
          _type: "block",
          _key: generateKey(),
          style: "normal",
          listItem: "number",
          level: 1,
          markDefs,
          children: spans,
        });
        i++;
      }
      blocks.push(...listItems);
      continue;
    }

    // Blockquote
    if (line.startsWith(">")) {
      const quoteText = line.replace(/^>\s*/, "");
      const { spans, markDefs } = parseInlineMarks(quoteText);
      blocks.push({
        _type: "block",
        _key: generateKey(),
        style: "blockquote",
        markDefs,
        children: spans,
      });
      i++;
      continue;
    }

    // Image / diagram — ![alt](src) on its own line → diagram block (static /public asset)
    const imageMatch = line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)\s*$/);
    if (imageMatch) {
      blocks.push({
        _type: "diagram",
        _key: generateKey(),
        alt: imageMatch[1] || "",
        src: imageMatch[2],
      });
      i++;
      continue;
    }

    // Table — convert to text paragraph (Sanity blockContent doesn't support tables)
    if (line.includes("|") && line.trim().startsWith("|")) {
      // Collect all table lines
      const tableLines = [];
      while (
        i < lines.length &&
        lines[i].includes("|") &&
        lines[i].trim().startsWith("|")
      ) {
        // Skip separator line (| --- | --- |)
        if (!lines[i].match(/^\|\s*[-:]+\s*\|/)) {
          tableLines.push(lines[i]);
        }
        i++;
      }
      // Convert table rows to bullet list
      for (const tl of tableLines) {
        const cells = tl
          .split("|")
          .map((c) => c.trim())
          .filter(Boolean);
        const text = cells.join(" — ");
        const { spans, markDefs } = parseInlineMarks(text);
        blocks.push({
          _type: "block",
          _key: generateKey(),
          style: "normal",
          listItem: "bullet",
          level: 1,
          markDefs,
          children: spans,
        });
      }
      continue;
    }

    // Normal paragraph — collect consecutive non-empty, non-special lines
    const paraLines = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      lines[i].trim() !== "---" &&
      !lines[i].trim().startsWith("```") &&
      !lines[i].match(/^#{1,3}\s+/) &&
      !lines[i].match(/^\s*[-*]\s+/) &&
      !lines[i].match(/^\s*\d+\.\s+/) &&
      !lines[i].startsWith(">") &&
      !lines[i].trim().match(/^!\[([^\]]*)\]\(([^)]+)\)\s*$/) &&
      !(lines[i].includes("|") && lines[i].trim().startsWith("|"))
    ) {
      paraLines.push(lines[i]);
      i++;
    }

    if (paraLines.length > 0) {
      const text = paraLines.join(" ");
      const { spans, markDefs } = parseInlineMarks(text);
      blocks.push({
        _type: "block",
        _key: generateKey(),
        style: "normal",
        markDefs,
        children: spans,
      });
    }
  }

  return blocks;
}

// ── Category helper ──

async function ensureCategory(title) {
  const slug = title.toLowerCase().replace(/\s+/g, "-");
  const existing = await client.fetch(
    `*[_type == "category" && slug.current == $slug][0]._id`,
    { slug }
  );
  if (existing) return existing;

  const doc = await client.create({
    _type: "category",
    title,
    slug: { _type: "slug", current: slug },
  });
  console.log(`  Created category: ${title} (${doc._id})`);
  return doc._id;
}

// ── Author helper ──

async function ensureAuthor() {
  const existing = await client.fetch(
    `*[_type == "author" && name == "Trishnangshu Goswami"][0]._id`
  );
  if (existing) return existing;

  const doc = await client.create({
    _type: "author",
    name: "Trishnangshu Goswami",
    slug: { _type: "slug", current: "trishnangshu-goswami" },
  });
  console.log(`  Created author: ${doc._id}`);
  return doc._id;
}

// ── Publish a single post ──

async function publishPost(filename) {
  const slug = filename.replace(/\.mdx?$/, "");
  const filePath = join(BLOGS_DIR, filename);
  const raw = readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(raw);

  console.log(`\nPublishing: ${frontmatter.title}`);
  console.log(`  Slug: ${slug}`);
  console.log(`  Date: ${frontmatter.date}`);

  // Check if already exists
  const existingId = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]._id`,
    { slug }
  );

  // Convert markdown body to Portable Text
  const body = markdownToPortableText(content);

  // Resolve categories
  const categoryTitles = CATEGORY_MAP[slug] || [];
  const categoryRefs = [];
  for (const cat of categoryTitles) {
    const catId = await ensureCategory(cat);
    categoryRefs.push({
      _type: "reference",
      _ref: catId,
      _key: generateKey(),
    });
  }

  // Resolve author
  const authorId = await ensureAuthor();

  const doc = {
    _type: "post",
    title: frontmatter.title,
    slug: { _type: "slug", current: slug },
    publishedAt: new Date(frontmatter.date).toISOString(),
    body,
    excerpt: EXCERPT_MAP[slug] || "",
    featured: false,
    author: { _type: "reference", _ref: authorId },
    categories: categoryRefs,
  };

  if (existingId) {
    await client.patch(existingId).set(doc).commit();
    console.log(`  Updated existing post: ${existingId}`);
  } else {
    const created = await client.create(doc);
    console.log(`  Created new post: ${created._id}`);
  }
}

// ── Main ──

async function main() {
  const args = process.argv.slice(2);

  let filenames;
  if (args.length > 0) {
    filenames = args.map((a) => (a.endsWith(".mdx") ? a : `${a}.mdx`));
  } else {
    filenames = readdirSync(BLOGS_DIR).filter((f) => f.endsWith(".mdx"));
  }

  console.log(`Publishing ${filenames.length} post(s) to Sanity...`);

  for (const filename of filenames) {
    await publishPost(filename);
  }

  console.log("\nDone!");
}

main().catch((err) => {
  console.error("Failed:", err.message);
  process.exit(1);
});
