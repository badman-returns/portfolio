import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { client } from "@/sanity/client";
import { featuredPostsQuery } from "@/sanity/queries";
import StatsSection from "./components/animated/StatsSection";
import HomeOverview from "./components/HomeOverview";
import FeaturedWriting from "./components/FeaturedWriting";
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
    text: "Root-caused a 1GB memory leak on a live trading platform — incorrect useEffect dependency causing cascading re-renders on every WebSocket tick.",
    tag: "Systems thinking",
    num: "01",
    accent: "#CDFF52",
    accentLight: "#d4ff70",
    gradient: "from-[#CDFF52] to-[#a3e635]",
  },
  {
    title: "Production Debugging",
    text: "Restructured Sentry SDK initialization and tree-shook wildcard imports to cut monitoring bundle from 400KB to 70KB — an 82% reduction.",
    tag: "Failure analysis",
    num: "02",
    accent: "#CDFF52",
    accentLight: "#d4ff70",
    gradient: "from-[#CDFF52] to-[#a3e635]",
  },
  {
    title: "Performance Architecture",
    text: "Led geo-based routing and compliance gating for 500K+ existing users and 600K+ new sign-ups across jurisdictions — zero downtime migration.",
    tag: "Scale",
    num: "03",
    accent: "#CDFF52",
    accentLight: "#d4ff70",
    gradient: "from-[#CDFF52] to-[#a3e635]",
  },
];

export const revalidate = 60;

export default async function Home() {
  const featuredPosts = await client.fetch(featuredPostsQuery);

  return (
    <div className="relative">
      <HomeScrollBehavior />
      <WaveBackground className="inset-x-[-8rem] top-0 h-[120vh]" />

        {/* ================= SECTION 1: HERO ================= */}
        <section
          data-section
          className="relative mx-auto flex flex-col px-4 sm:px-6 md:min-h-[calc(100vh-3.5rem)] md:max-w-6xl md:px-12"
        >
          {/* Main hero content — centered in available space */}
          <div className="flex flex-1 items-center py-4 sm:py-6 md:py-0">
            <div className="relative z-10 grid w-full grid-cols-1 items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
            {/* PHOTO */}
            <GPhotoReveal className="pt-2 sm:pt-4 md:pt-0">
              <OrbitHero />
            </GPhotoReveal>

            {/* CONTENT */}
            <GStagger className="space-y-7 md:space-y-8">
              <GStaggerItem>
                <h1 className="text-[2.25rem] font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
                  Hey, I&apos;m Trish
                </h1>

                <p className="mt-2 text-base font-medium text-[var(--muted)] sm:mt-3 sm:text-lg">
                  Building frontend systems. Debugging where they break.
                </p>
              </GStaggerItem>

              <GStaggerItem className="max-w-xl space-y-4">
                <p className="text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-relaxed">
                  I build and debug performance-critical, real-time frontend systems. My
                  work lives where state, rendering, and correctness collide — trading
                  platforms, healthcare products, and long-running UIs that fail in non-obvious ways.
                </p>

                <p className="text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-relaxed">
                  I write about frontend engineering the way it actually behaves in production —
                  not the way tutorials describe it.
                </p>
              </GStaggerItem>

              {/* SOCIALS */}
              <GStaggerItem className="flex gap-4 pt-2 sm:gap-5 sm:pt-4">
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
              <GStaggerItem className="flex flex-col items-stretch gap-3 pt-3 sm:flex-row sm:items-center">
                <GMagnetic className="w-full sm:w-auto">
                  <Link
                    href="/writing"
                    className="inline-flex w-full min-w-[132px] items-center justify-center rounded-xl bg-[var(--accent)] px-5 py-2.5 font-medium text-black transition-opacity hover:opacity-90 sm:w-auto"
                  >
                    Read essays
                  </Link>
                </GMagnetic>

                <GMagnetic className="w-full sm:w-auto">
                  <Link
                    href="/work"
                    className="inline-flex w-full min-w-[132px] items-center justify-center rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-5 py-2.5 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] sm:w-auto"
                  >
                    Explore work
                  </Link>
                </GMagnetic>
              </GStaggerItem>
            </GStagger>

          </div>
          </div>

          {/* Tech strip pinned at bottom */}
          <GTechStrip className="relative z-10 pb-6 pt-4 sm:pb-8 sm:pt-6">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--muted-light)]">
              Technologies I work with
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "React Native", "Next.js", "TypeScript", "Node.js", "WebSockets", "Redux", "Tailwind CSS", "Docker"].map((tech) => (
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
          className="relative mx-auto px-4 py-16 sm:px-6 md:max-w-6xl md:px-12 md:py-20"
        >
          <StatsSection />

          <div className="mt-14 space-y-8 md:mt-20 md:space-y-10">
            <GSectionReveal>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">Approach</span>
                <div className="mt-2 flex items-center gap-4 md:gap-6">
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
                    className={`select-none bg-gradient-to-r ${card.gradient} bg-clip-text text-[4rem] font-black leading-none tracking-tighter text-transparent sm:text-[5rem] md:text-[6rem]`}
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

        <section
          data-section
          className="relative mx-auto px-4 py-16 sm:px-6 md:max-w-6xl md:px-12 md:py-20"
        >
          <FeaturedWriting posts={featuredPosts} />
        </section>

        {/* Gradient divider */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-12">
          <div className="mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
        </div>

        <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-12 md:py-20">
          <HomeOverview />
        </section>

    </div>
  );
}
