"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const workItems = [
  {
    title: "Memory leaks under live WebSocket traffic",
    text: "Traced a 1GB heap bloat on a trading page to an incorrect useEffect dependency causing cascading re-renders on every market tick. Reduced to 400MB.",
  },
  {
    title: "Monitoring bundles that silently break observability",
    text: "Sentry SDK was loading 400KB gzipped due to wildcard imports and late initialization. Restructured to tree-shakeable named imports — 70KB, error tracking from first paint.",
  },
  {
    title: "State accumulation in long-running chart surfaces",
    text: "Options analytics page crashing for 15% of users. Root cause: unbounded state growth in chart re-renders under sustained market data updates.",
  },
  {
    title: "Cross-platform consistency at scale",
    text: "Built a design system using Amazon Style Dictionary with custom transforms, adopted 100% across React Native and web teams, cutting design-to-code drift by 60%.",
  },
];

const skills = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Redux", "Zustand", "Tailwind CSS", "Framer Motion", "Radix UI"],
    gradient: "from-[#CDFF52] to-[#a3e635]",
  },
  {
    title: "Mobile",
    items: ["React Native", "Expo", "Reanimated", "FCM", "EAS Build"],
    gradient: "from-[#CDFF52] to-[#a3e635]",
  },
  {
    title: "Backend & Infra",
    items: ["Node.js", "Express", "PostgreSQL", "Redis", "WebSockets", "Socket.IO", "Docker", "GCP"],
    gradient: "from-[#CDFF52] to-[#a3e635]",
  },
  {
    title: "Tooling & Monitoring",
    items: ["Vite", "Webpack", "Sentry", "Apache ECharts", "Recharts"],
    gradient: "from-[#CDFF52] to-[#a3e635]",
  },
];

const currentFocus = [
  "Shipping a mental health platform to production users",
  "Writing deep technical essays on frontend failure modes",
  "Building cross-platform React Native experiences",
  "Exploring WebSocket reliability under unstable networks",
];

export default function HomeOverview() {
  const containerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scroller = container.closest("[data-scroll-inner]") || window;

    const ctx = gsap.context(() => {

      /* ===== SECTION 1: DEEP WORK ===== */
      const s1Head = section1Ref.current?.querySelector("[data-head]");
      if (s1Head) {
        gsap.set(s1Head, { opacity: 1 });
        gsap.from(s1Head, {
          x: -60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: section1Ref.current, scroller, start: "top 85%" },
        });
      }

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
          scrollTrigger: { trigger: section1Ref.current, scroller, start: "top 70%" },
        });
      }

      /* ===== SECTION 2: SKILLS ===== */
      const s2SkillHead = section2Ref.current?.querySelector("[data-skill-head]");
      if (s2SkillHead) {
        gsap.set(s2SkillHead, { opacity: 1 });
        gsap.from(s2SkillHead, {
          x: -40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: s2SkillHead, scroller, start: "top 85%" },
        });
      }

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
          scrollTrigger: { trigger: s2Pills[0]?.parentElement?.parentElement, scroller, start: "top 80%" },
        });
      }

      /* ===== SECTION 3: PHILOSOPHY + NOW ===== */
      const s3Head = section3Ref.current?.querySelector("[data-head]");
      if (s3Head) {
        gsap.set(s3Head, { opacity: 1 });
        gsap.from(s3Head, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: section3Ref.current, scroller, start: "top 80%" },
        });
      }

      const s3Quote = section3Ref.current?.querySelector("[data-quote]");
      if (s3Quote) {
        gsap.set(s3Quote, { opacity: 1 });
        gsap.from(s3Quote, {
          x: -40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: { trigger: s3Quote, scroller, start: "top 85%" },
        });
      }

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
          scrollTrigger: { trigger: s3Quote, scroller, start: "top 85%" },
        });
      }

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
          scrollTrigger: { trigger: s3Items[0]?.parentElement, scroller, start: "top 85%" },
        });
      }

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="max-w-5xl">

      {/* ============ SECTION 1: DEEP WORK ============ */}
      <div ref={section1Ref} className="space-y-8 pb-14 md:space-y-10 md:pb-16">
        <div data-head style={{ opacity: 0 }}>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">Deep work</span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">What I work on</h2>
          <p className="mt-3 max-w-2xl text-[var(--muted)] leading-relaxed">
            The kinds of production problems I spend most of my time solving — real incidents, not hypotheticals.
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
      <div className="mx-auto mb-14 h-px w-2/3 bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent md:mb-16" />

      {/* ============ SECTION 2: SKILLS ============ */}
      <div ref={section2Ref} className="space-y-10 pb-14 md:pb-16">
        <div data-skill-head style={{ opacity: 0 }}>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">Stack</span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">Skills &amp; tools</h2>
          <p className="mt-3 max-w-2xl text-[var(--muted)] leading-relaxed">
            I optimize for depth in a few areas rather than shallow familiarity across many tools.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
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

      {/* Gradient divider */}
      <div className="mx-auto mb-14 h-px w-2/3 bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent md:mb-16" />

      {/* ============ SECTION 3: PHILOSOPHY + NOW ============ */}
      <div ref={section3Ref} className="space-y-14 pb-8 md:space-y-16 md:pb-10">

        {/* How I think */}
        <div className="space-y-10">
          <div data-head style={{ opacity: 0 }}>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">Philosophy</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">How I think</h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1fr_1fr] md:gap-10">
            <blockquote data-quote className="relative pl-6" style={{ opacity: 0 }}>
              <span className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-gradient-to-b from-[#CDFF52] to-[#a3e635]" />
              <p className="text-base font-medium leading-relaxed sm:text-lg">
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
        <div className="space-y-8">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">Now</span>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {currentFocus.map((item, i) => (
              <div key={i} data-focus-item className="group flex items-start gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-colors hover:border-[var(--surface-border)] hover:bg-[color:color-mix(in_srgb,var(--surface)_40%,transparent)] md:gap-4 md:px-4 md:py-3" style={{ opacity: 0 }}>
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-[#CDFF52] to-[#a3e635] text-[10px] font-bold text-black">
                  {i + 1}
                </span>
                <span className="text-sm text-[var(--muted)] leading-relaxed group-hover:text-[var(--foreground)] transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
