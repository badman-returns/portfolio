export const metadata = {
  title: "Work Experience",
  description:
    "Trishnangshu Goswami's (Trish Goswami) professional experience — building AI products and large-scale software systems at Agentic Private Markets, Delta Exchange, Flipkart, and more.",
  openGraph: {
    title: "Work — Trish Goswami",
    description:
      "End-to-end software engineering across AI, trading, consumer, and healthcare products.",
  },
};

import ExperienceGraph from "./ExperienceGraph";

const experiences = [
  {
    period: "Apr 2026 – Present",
    company: "Agentic Private Markets",
    role: "Senior Software Engineer (Lead Engineer)",
    domain: "AI due-diligence platform · Remote",
    gradient: "from-[#CDFF52] to-[#a3e635]",
    summary:
      "Lead engineer on an AI due-diligence platform. I build the layer between the models and the people who use them — voice and text agents, streaming agent chat, MCP tools, LLM cost control, and the React library that renders model output.",
    highlights: [
      { text: "Built live **voice and text interview agents** over WebSocket — PCM16 audio in 100 ms chunks, server interrupts that clear queued audio, and a reconnect policy per close code. Root-caused an audible beep to an audio-buffer underrun; fixed with a 250 ms buffer and device-rate resampling." },
      { text: "Built **streaming agent chat** on an SSE event stream — named events, a typed event union, token renewal before expiry, resume from the last event id — with agent step streaming on three assistants and a text interview that survives socket drops." },
      { text: "Generated **65 MCP tool definitions** (JSON Schema from Zod) from the component library for the team's Python MCP server, plus a single-file render host, so agents render charts and tables through tool calls." },
      { text: "Built the **per-user LLM usage report** (cost and token drill-down, Excel export) and per-model MCP tool cost with the prompt-cache read/write split; fixed Anthropic pause_turn stop reasons that ended streams early." },
      { text: "Published a **65-component React 19 + TypeScript library** for AI-generated output (1,498 tests, PowerPoint export) and migrated a 1,500-file Next.js product onto it with no feature freeze. Built ARC, an AI-assisted performance-review product, from empty repository to QA in **5 weeks**." },
    ],
    stack: ["Next.js", "React 19", "TypeScript", "Python", "WebSockets", "SSE", "MCP", "Zod", "Playwright"],
  },
  {
    period: "Aug 2024 – Sep 2026",
    company: "DilSayCare",
    role: "Technical Advisor (AI and Platform)",
    domain: "AI mental-health platform · part-time",
    gradient: "from-[#CDFF52] to-[#a3e635]",
    summary:
      "Advised an AI mental-health platform across architecture, backend, clients, and AI, part-time, and built large parts of it.",
    highlights: [
      { text: "Co-designed **MoM**, the AI clinical-notes pipeline, under a provisional patent application — voice ingestion, ICD-11 coding via hybrid RAG + BPE scoring, routing between two small language models by complexity, and clinician edits as a fine-tuning signal." },
      { text: "Built the backend on **Node.js, Express, Knex, and PostgreSQL** — 150+ REST endpoints, 57 schema migrations, JWT with OTP sign-in, Razorpay payments with GST invoices, and a booking scheduler with race-safe slots (FOR UPDATE SKIP LOCKED)." },
      { text: "Built the **React 19 + TypeScript** web client, a Refine admin dashboard, and the **Expo** mobile app with a WebView bridge, FCM push, and native Razorpay payments." },
      { text: "Deployed the **observability stack** — OpenTelemetry, Prometheus alert rules, Grafana dashboards, Loki, and Tempo." },
    ],
    stack: ["React", "Expo", "Node.js", "PostgreSQL", "Redis", "Socket.IO", "OpenTelemetry", "Docker"],
  },
  {
    period: "Jul 2026 – Sep 2026",
    company: "Freelance (2026)",
    role: "Software Engineer",
    domain: "Two client builds · part-time",
    gradient: "from-[#CDFF52] to-[#a3e635]",
    summary:
      "Two part-time client builds, each delivered from scaffold to production in about five weeks.",
    highlights: [
      { text: "An **offline-first Android app** for rural community health workers — Kotlin, Jetpack Compose, Room, CameraX. On-device face recognition with ML Kit and MobileFaceNet TFLite embeddings (NNAPI), FHIR records synced to a HAPI FHIR server, Keycloak sign-in, LiveKit telemedicine calls, **440 tests**." },
      { text: "**BongBrix**, a wellness platform for a leading Indian engineering institute — React 19 staff and student apps, an Express + Knex API, institute OAuth SSO, two PostgreSQL databases isolating clinical data, and **831 API tests**." },
    ],
    stack: ["Kotlin", "Jetpack Compose", "TFLite", "FHIR", "React 19", "Express", "PostgreSQL", "Docker"],
  },
  {
    period: "Jan 2024 – Mar 2026",
    company: "Delta Exchange",
    role: "Frontend Engineer",
    domain: "Global crypto derivatives platform",
    gradient: "from-[#CDFF52] to-[#a3e635]",
    summary:
      "Worked on a high-traffic, real-time trading platform used by hundreds of thousands of active traders globally. The frontend acted as a long-running system handling live market data, compliance rules, and performance-sensitive workflows.",
    highlights: [
      { text: "Root-caused a **1GB memory leak** on the trading page — a useEffect with an incorrect dependency was re-subscribing to every WebSocket tick, cascading re-renders across the order book. Reduced heap to **400MB**." },
      { text: "Restructured Sentry SDK integration — replaced wildcard imports with tree-shakeable named imports, moved initialization to first paint. Cut monitoring bundle from **400KB to 70KB** gzipped (**82% reduction**)." },
      { text: "Led migration of **500K+ existing users** to the India-specific platform by designing geo-based routing, compliance gating, and seamless fallback flows — **zero downtime**." },
      { text: "Built position analytics dashboards consumed by **100K+ active traders**, optimized for frequent market data updates with minimal re-renders." },
      { text: "Routed **600K+ new sign-ups** across platforms based on jurisdiction using location-aware onboarding, reducing manual intervention and support load." },
    ],
    stack: ["React", "TypeScript", "WebSockets", "Sentry", "Webpack", "Style Dictionary"],
  },
  {
    period: "Apr 2023 – Jan 2024",
    company: "Grapevine",
    role: "Founding Engineer",
    domain: "Salary insights platform",
    gradient: "from-[#CDFF52] to-[#a3e635]",
    summary:
      "Set up the engineering team at a consumer-facing salary insights platform where SEO, performance, and rendering correctness directly impacted growth.",
    highlights: [
      { text: "Built the salary data visualisation product on Next.js, React Native, and Apache ECharts; it reached **20K+** users in its first 6 months." },
      { text: "Designed the hybrid native + WebView architecture with stateless JWT auth and silent token refresh." },
      { text: "Brought landing pages to **sub-1s** FCP and LCP with a **100** Lighthouse SEO score." },
      { text: "Built REST APIs on Node.js, Express, and PostgreSQL for salary search by company, role, and level, with Redis caching on the busiest company pages." },
    ],
    stack: ["React", "Next.js", "React Native", "ECharts", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    period: "Oct 2021 – Apr 2023",
    company: "Flipkart",
    role: "Frontend Engineer",
    domain: "Large-scale e-commerce platform",
    gradient: "from-[#CDFF52] to-[#a3e635]",
    summary:
      "Frontend engineering at India's largest e-commerce platform, operating at massive scale with a strong emphasis on SEO, SSR, and analytics accuracy.",
    highlights: [
      { text: "Built server-side-rendered ratings-and-reviews widgets for the mobile site and a React web component inside React Native for the Browse page, both for Google's mobile-first indexing." },
      { text: "Built the internal SEO management tool (meta tags, canonical URLs, category sitemaps) adopted by **5+** business teams." },
      { text: "Migrated the 4 core tracking events from Omniture to the Flipkart Data Platform." },
    ],
    stack: ["React", "SSR", "React Native", "Analytics", "Internal Tooling"],
  },
];

export default function Work() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:px-12 md:py-14">
      <header className="space-y-6 max-w-4xl">
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Work
        </span>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl md:leading-[1.05]">
          Experience graph
        </h1>
        <p className="text-[var(--foreground)]/60 leading-relaxed">
          A one-by-one progression of roles where I built and debugged production software systems.
        </p>
      </header>

      <ExperienceGraph experiences={experiences} />

      <div className="mt-14 border-t border-[var(--surface-border)] pt-8">
        <p className="max-w-3xl text-sm text-[var(--foreground)]/50 leading-relaxed">
          Pattern across all steps: stabilize state flow, keep the system honest under concurrent edits, and make
          production behavior observable enough to debug quickly.
        </p>
      </div>
    </section>
  );
}
