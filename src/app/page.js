import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import StatsSection from "./components/animated/StatsSection";
import HomeOverview from "./components/HomeOverview";
import OrbitHero from "./components/animated/OrbitHero";
import WaveBackground from "./components/animated/WaveBackground";
import HomeScrollBehavior from "./components/animated/HomeScrollBehavior";
import {
  GStagger,
  GStaggerItem,
  GPhotoReveal,
  GTechStrip,
  GMagnetic,
  GCardGrid,
  GSectionReveal,
} from "./components/animated/GSAPAnimations";

const focusCards = [
  {
    title: "Realtime Interface Engineering",
    text: "Designing long-running UIs where market data, state updates, and correctness must stay stable under load.",
    tag: "Systems thinking",
    num: "01",
    accent: "#4f6d99",
    accentLight: "#9fb7d8",
    gradient: "from-[#4f6d99] to-[#9fb7d8]",
  },
  {
    title: "Production Debugging",
    text: "Tracing failures that appear only in real user traffic: stale references, race conditions, and render churn.",
    tag: "Failure analysis",
    num: "02",
    accent: "#6b8cbe",
    accentLight: "#b8cfe8",
    gradient: "from-[#6b8cbe] to-[#b8cfe8]",
  },
  {
    title: "Performance Architecture",
    text: "Keeping large React surfaces fast by reducing wasted renders, tightening state boundaries, and profiling continuously.",
    tag: "Render economics",
    num: "03",
    accent: "#5a7ba8",
    accentLight: "#a8c4e0",
    gradient: "from-[#5a7ba8] to-[#a8c4e0]",
  },
];

export default function Home() {
  return (
    <div className="relative">
      <HomeScrollBehavior />
      <WaveBackground className="inset-x-[-8rem] top-0 h-[120vh]" />

        {/* ================= SECTION 1: HERO ================= */}
        <section
          data-section
          className="relative flex min-h-[calc(100vh-3.5rem)] snap-start flex-col mx-auto max-w-6xl px-6 md:px-12"
        >
          {/* Main hero content — centered in available space */}
          <div className="flex flex-1 items-center">
            <div className="relative z-10 grid w-full grid-cols-1 items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT */}
            <GStagger className="space-y-8">
              <GStaggerItem>
                <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                  Hey, I&apos;m Trish
                </h1>

                <p className="mt-3 text-lg font-medium text-[var(--muted)]">
                  Building frontend systems. Debugging where they break.
                </p>
              </GStaggerItem>

              <GStaggerItem className="max-w-xl space-y-4">
                <p className="text-[var(--muted)] leading-relaxed">
                  I build and debug performance-critical, real-time frontend systems. My
                  work lives where state, rendering, and correctness collide — trading
                  platforms, healthcare products, and long-running UIs that fail in non-obvious ways.
                </p>

                <p className="text-[var(--muted)] leading-relaxed">
                  I write about frontend engineering the way it actually behaves in production —
                  not the way tutorials describe it.
                </p>
              </GStaggerItem>

              {/* SOCIALS */}
              <GStaggerItem className="flex gap-6 pt-4">
                <a href="https://github.com/badman-returns" target="_blank" rel="noreferrer" className="transition-colors hover:text-[var(--foreground)]">
                  <Github className="text-[var(--accent)]" size={20} />
                </a>
                <a href="https://linkedin.com/in/trishnangshugoswami" target="_blank" rel="noreferrer" className="transition-colors hover:text-[var(--foreground)]">
                  <Linkedin className="text-[var(--accent)]" size={20} />
                </a>
                <a href="https://x.com/ts_goswami" target="_blank" rel="noreferrer" className="transition-colors hover:text-[var(--foreground)]">
                  <Twitter className="text-[var(--accent)]" size={20} />
                </a>
                <a href="mailto:trishnangshugoswami@gmail.com" className="transition-colors hover:text-[var(--foreground)]">
                  <Mail className="text-[var(--accent)]" size={20} />
                </a>
              </GStaggerItem>

              {/* CTAs */}
              <GStaggerItem className="flex flex-wrap items-center gap-3 pt-3">
                <GMagnetic>
                  <Link
                    href="/writing"
                    className="inline-flex min-w-[132px] items-center justify-center rounded-xl bg-[var(--accent)] px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90"
                  >
                    Read essays
                  </Link>
                </GMagnetic>

                <GMagnetic>
                  <Link
                    href="/work"
                    className="inline-flex min-w-[132px] items-center justify-center rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-5 py-2.5 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    Explore work
                  </Link>
                </GMagnetic>
              </GStaggerItem>
            </GStagger>

            {/* RIGHT */}
            <GPhotoReveal>
              <OrbitHero />
            </GPhotoReveal>
          </div>
          </div>

          {/* Tech strip pinned at bottom */}
          <GTechStrip className="relative z-10 pb-8 pt-6">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--muted-light)]">
              Technologies I work with
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Node.js", "WebSockets", "Redux", "Tailwind CSS", "GraphQL"].map((tech) => (
                <span
                  key={tech}
                  data-pill
                  className="rounded-lg bg-[color:color-mix(in_srgb,var(--surface)_70%,transparent)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </GTechStrip>
        </section>

        {/* ================= SECTION 2: STATS + FOCUS ================= */}
        <section
          data-section
          className="relative flex min-h-[calc(100vh-3.5rem)] snap-start flex-col justify-center mx-auto max-w-6xl px-6 py-20 md:px-12"
        >
          <StatsSection />

          <div className="mt-20 space-y-10">
            <GSectionReveal>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">Approach</span>
                <div className="mt-2 flex items-center gap-6">
                  <h2 className="shrink-0 text-3xl font-bold tracking-tight md:text-4xl">What I optimize for</h2>
                  <div className="hidden h-px flex-1 bg-gradient-to-r from-[var(--surface-border)] to-transparent md:block" />
                </div>
              </div>
            </GSectionReveal>

            <GCardGrid className="grid grid-cols-1 gap-0 md:grid-cols-3">
              {focusCards.map((card, i) => (
                <article
                  key={card.title}
                  data-card
                  className="group relative flex flex-col overflow-hidden border-b border-[var(--surface-border)] py-8 md:border-b-0 md:border-r md:px-8 md:py-0 md:last:border-r-0"
                  style={{ opacity: 0 }}
                >
                  {/* Top gradient bar on hover */}
                  <div
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 md:inset-x-auto md:inset-y-0 md:left-0 md:h-full md:w-px md:origin-top md:scale-x-100 md:scale-y-0 md:group-hover:scale-y-100"
                    style={{ background: `linear-gradient(to bottom, ${card.accent}, ${card.accentLight})` }}
                  />

                  {/* Large number watermark */}
                  <span
                    className={`select-none bg-gradient-to-r ${card.gradient} bg-clip-text text-[5rem] font-black leading-none tracking-tighter text-transparent md:text-[6rem]`}
                  >
                    {card.num}
                  </span>

                  {/* Content */}
                  <div className="-mt-4 space-y-3">
                    <span
                      className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300"
                      style={{ color: card.accentLight }}
                    >
                      {card.tag}
                    </span>

                    <h3 className="text-xl font-semibold tracking-tight leading-snug transition-colors duration-300 group-hover:text-[var(--foreground)]">
                      {card.title}
                    </h3>

                    <p className="text-sm text-[var(--muted)] leading-relaxed">{card.text}</p>
                  </div>


                </article>
              ))}
            </GCardGrid>
          </div>
        </section>

        <section className="relative mx-auto max-w-6xl px-6 py-12 md:px-12">
          <HomeOverview />
        </section>

    </div>
  );
}
