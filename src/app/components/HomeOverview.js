"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const workItems = [
  {
    title: "Frontend as a long-running system",
    text: "Treating UI as stateful infrastructure that evolves over hours or days — not just a tree of components rendered once and forgotten.",
  },
  {
    title: "Debugging production-only UI failures",
    text: "Bugs that never reproduce locally — race conditions, stale references, timing issues, and assumptions that break under real user behavior.",
  },
  {
    title: "State, re-renders, and reference equality",
    text: "Understanding how identity, memoization, and object lifetimes affect correctness and performance in large React applications.",
  },
  {
    title: "Performance regressions that look like UX bugs",
    text: "Slow renders, unnecessary work, and cascading updates that manifest as broken interactions rather than obvious performance problems.",
  },
];

const projects = [
  {
    name: "Unify Chat",
    desc: "A real-time customer communication platform that brings SMS, WhatsApp, and Email into a single inbox.",
    href: "https://github.com/badman-returns/unify-chat",
    tags: ["React", "WebSockets", "Node.js"],
  },
  {
    name: "Photosplash",
    desc: "A photo discovery application with infinite scrolling, powered by the Unsplash API.",
    href: "https://github.com/badman-returns/photosplash",
    tags: ["React", "REST API", "Infinite Scroll"],
  },
  {
    name: "Chat App",
    desc: "A multi-user chat application focused on real-time messaging and state synchronization.",
    href: "https://github.com/badman-returns/chat-app",
    tags: ["React", "Socket.io", "Express"],
  },
];

const skills = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript (ES6+)", "HTML", "CSS", "Tailwind CSS"],
    gradient: "from-[#4f6d99] to-[#9fb7d8]",
  },
  {
    title: "Backend",
    items: ["Node.js", "PostgreSQL", "Redis", "WebSockets", "REST APIs"],
    gradient: "from-[#6b8cbe] to-[#b8cfe8]",
  },
  {
    title: "Infrastructure & Tooling",
    items: ["Docker", "Git & GitHub", "CI/CD pipelines", "Sanity CMS"],
    gradient: "from-[#5a7ba8] to-[#a8c4e0]",
  },
];

const currentFocus = [
  "Writing deeper frontend debugging stories",
  "Learning Go to reason about systems more clearly",
  "Building mental health technology with real users",
  "Improving architectural clarity in complex UIs",
];

export default function HomeOverview() {
  const containerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Use the scrollable parent as scroller for ScrollTrigger
    const scroller = container.closest("[data-scroll-inner]") || window;

    const ctx = gsap.context(() => {

      /* ===== SECTION 1: DEEP WORK ===== */
      /* Heading wipes in from left */
      const s1Head = section1Ref.current?.querySelector("[data-head]");
      if (s1Head) {
        gsap.set(s1Head, { opacity: 1 });
        gsap.from(s1Head, {
          x: -60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section1Ref.current,
            scroller,
            start: "top 85%",
          },
        });
      }

      /* Cards stagger in from below with slight tilt */
      const s1Cards = section1Ref.current?.querySelectorAll("[data-work-card]");
      if (s1Cards?.length) {
        gsap.set(s1Cards, { opacity: 1 });
        gsap.from(s1Cards, {
          y: 60,
          opacity: 0,
          rotation: 2,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: section1Ref.current,
            scroller,
            start: "top 70%",
          },
        });
      }

      /* ===== SECTION 2: WORK + STACK ===== */
      /* Projects heading clips in */
      const s2Head = section2Ref.current?.querySelector("[data-head]");
      if (s2Head) {
        gsap.set(s2Head, { opacity: 1 });
        gsap.from(s2Head, {
          clipPath: "inset(0 100% 0 0)",
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          clearProps: "clipPath",
          scrollTrigger: {
            trigger: section2Ref.current,
            scroller,
            start: "top 80%",
          },
        });
      }

      /* Project cards pop up with elastic ease */
      const s2Cards = section2Ref.current?.querySelectorAll("[data-project]");
      if (s2Cards?.length) {
        gsap.set(s2Cards, { opacity: 1 });
        gsap.from(s2Cards, {
          scale: 0.85,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "back.out(1.4)",
          clearProps: "transform",
          scrollTrigger: {
            trigger: s2Cards[0]?.parentElement,
            scroller,
            start: "top 80%",
          },
        });
      }

      /* Skills heading */
      const s2SkillHead = section2Ref.current?.querySelector("[data-skill-head]");
      if (s2SkillHead) {
        gsap.set(s2SkillHead, { opacity: 1 });
        gsap.from(s2SkillHead, {
          x: -40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: s2SkillHead,
            scroller,
            start: "top 85%",
          },
        });
      }

      /* Skill pills cascade in like a wave */
      const s2Pills = section2Ref.current?.querySelectorAll("[data-pill]");
      if (s2Pills?.length) {
        gsap.set(s2Pills, { opacity: 1 });
        gsap.from(s2Pills, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: s2Pills[0]?.parentElement?.parentElement,
            scroller,
            start: "top 80%",
          },
        });
      }

      /* ===== SECTION 3: PHILOSOPHY + NOW ===== */
      /* Section heading */
      const s3Head = section3Ref.current?.querySelector("[data-head]");
      if (s3Head) {
        gsap.set(s3Head, { opacity: 1 });
        gsap.from(s3Head, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section3Ref.current,
            scroller,
            start: "top 80%",
          },
        });
      }

      /* Blockquote sweeps in from left */
      const s3Quote = section3Ref.current?.querySelector("[data-quote]");
      if (s3Quote) {
        gsap.set(s3Quote, { opacity: 1 });
        gsap.from(s3Quote, {
          x: -40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: s3Quote,
            scroller,
            start: "top 85%",
          },
        });
      }

      /* Expansion text floats in from right */
      const s3Expansion = section3Ref.current?.querySelector("[data-expansion]");
      if (s3Expansion) {
        gsap.set(s3Expansion, { opacity: 1 });
        gsap.from(s3Expansion, {
          x: 40,
          opacity: 0,
          duration: 1,
          delay: 0.15,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: s3Quote,
            scroller,
            start: "top 85%",
          },
        });
      }

      /* Focus heading */
      const s3FocusHead = section3Ref.current?.querySelector("[data-focus-head]");
      if (s3FocusHead) {
        gsap.set(s3FocusHead, { opacity: 1 });
        gsap.from(s3FocusHead, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: s3FocusHead,
            scroller,
            start: "top 85%",
          },
        });
      }

      /* Focus items slide in from right, staggered */
      const s3Items = section3Ref.current?.querySelectorAll("[data-focus-item]");
      if (s3Items?.length) {
        gsap.set(s3Items, { opacity: 1 });
        gsap.from(s3Items, {
          x: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: s3Items[0]?.parentElement,
            scroller,
            start: "top 85%",
          },
        });
      }

      /* Context panel scales in */
      const s3Panel = section3Ref.current?.querySelector("[data-panel]");
      if (s3Panel) {
        gsap.set(s3Panel, { opacity: 1 });
        gsap.from(s3Panel, {
          scale: 0.9,
          opacity: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: s3Items?.[0]?.parentElement,
            scroller,
            start: "top 85%",
          },
        });
      }

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="max-w-5xl">

      {/* ============ SECTION 1: DEEP WORK ============ */}
      <div ref={section1Ref} className="space-y-10 pb-20 snap-start min-h-[calc(100vh-4rem)]">
        <div data-head style={{ opacity: 0 }}>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">Deep work</span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">What I work on</h2>
          <p className="mt-3 max-w-2xl text-[var(--muted)] leading-relaxed">
            The kinds of frontend problems I spend most of my time thinking about — especially in production systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          {workItems.map((item, i) => (
            <div
              key={item.title}
              data-work-card
              className="group relative border-b border-[var(--surface-border)] py-6 md:py-8 md:odd:border-r md:odd:pr-8 md:even:pl-8"
              style={{ opacity: 0 }}
            >
              <span className="mb-3 inline-block text-[11px] font-bold tracking-[0.15em] text-[var(--accent)]/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold leading-snug transition-colors duration-300 group-hover:text-[var(--accent)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient divider */}
      <div className="mx-auto mb-20 h-px w-2/3 bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />

      {/* ============ SECTION 2: WORK + STACK ============ */}
      <div ref={section2Ref} className="space-y-20 pb-20 snap-start min-h-[calc(100vh-4rem)]">

        {/* Projects */}
        <div className="space-y-10">
          <div data-head style={{ opacity: 0 }}>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">Work</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">Projects</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                data-project
                className="group relative flex flex-col justify-between rounded-2xl border border-[var(--surface-border)] bg-[color:color-mix(in_srgb,var(--surface)_50%,transparent)] p-6 transition-all duration-300 hover:border-[var(--accent)]/40 hover:-translate-y-1"
                style={{ opacity: 0 }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_right,rgba(79,109,153,0.08),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold tracking-tight">{project.name}</h3>
                    <svg className="h-4 w-4 text-[var(--muted)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{project.desc}</p>
                </div>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-[var(--surface)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--muted-light)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Skills & Tools */}
        <div className="space-y-10">
          <div data-skill-head style={{ opacity: 0 }}>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">Stack</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">Skills &amp; tools</h2>
            <p className="mt-3 max-w-2xl text-[var(--muted)] leading-relaxed">
              I optimize for depth in a few areas rather than shallow familiarity across many tools.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {skills.map((col) => (
              <div key={col.title} className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${col.gradient}`} />
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em]">{col.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {col.items.map((item) => (
                    <span
                      key={item}
                      data-pill
                      className="rounded-lg border border-[var(--surface-border)] bg-[color:color-mix(in_srgb,var(--surface)_60%,transparent)] px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:border-[var(--accent)]/30 hover:text-[var(--foreground)]"
                      style={{ opacity: 0 }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient divider */}
      <div className="mx-auto mb-20 h-px w-2/3 bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />

      {/* ============ SECTION 3: PHILOSOPHY + NOW ============ */}
      <div
        ref={section3Ref}
        data-snap-stop
        className="space-y-20 pb-10 snap-start min-h-[calc(100vh-4rem)]"
      >

        {/* How I think */}
        <div className="space-y-10">
          <div data-head style={{ opacity: 0 }}>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">Philosophy</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">How I think</h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_1fr]">
            <blockquote data-quote className="relative pl-6" style={{ opacity: 0 }}>
              <span className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-gradient-to-b from-[#4f6d99] to-[#9fb7d8]" />
              <p className="text-lg font-medium leading-relaxed">
                Frontend systems are long-running, stateful machines — not just collections of components.
              </p>
            </blockquote>

            <div data-expansion className="space-y-4 text-sm text-[var(--muted)] leading-relaxed" style={{ opacity: 0 }}>
              <p>
                Most serious UI failures I&apos;ve debugged were not visual issues. They emerged from performance regressions, unstable references, or incorrect assumptions about state and timing.
              </p>
              <p>
                These problems often surface as broken UX, even though the root cause lives deep in rendering behavior, data flow, or lifecycle management.
              </p>
            </div>
          </div>
        </div>

        {/* Current focus */}
        <div className="space-y-10">
          <div data-focus-head style={{ opacity: 0 }}>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">Now</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">Current focus</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              {currentFocus.map((item, i) => (
                <div key={i} data-focus-item className="group flex items-start gap-4 rounded-xl border border-transparent px-4 py-3 transition-colors hover:border-[var(--surface-border)] hover:bg-[color:color-mix(in_srgb,var(--surface)_40%,transparent)]" style={{ opacity: 0 }}>
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-[#4f6d99] to-[#9fb7d8] text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm text-[var(--muted)] leading-relaxed group-hover:text-[var(--foreground)] transition-colors">{item}</span>
                </div>
              ))}
            </div>

            <div data-panel className="flex items-start" style={{ opacity: 0 }}>
              <div className="rounded-2xl border border-[var(--surface-border)] bg-[color:color-mix(in_srgb,var(--surface)_50%,transparent)] p-6">
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  This focus reflects where I&apos;m currently investing time — writing, learning, and building in areas that sharpen my understanding of long-running systems and real-world constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
