import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import HomeTabs from "./components/HomeTabs";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 space-y-32">

      {/* ================= HERO ================= */}
      <section className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-16 items-center max-w-5xl">
        {/* LEFT */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              Hey, I’m Trish
            </h1>
            <p className="mt-2 text-xl text-[var(--muted)]">
              Building frontend systems. Debugging where they break.
            </p>
          </div>

          <div className="space-y-4 max-w-xl">
            <p className="text-lg leading-relaxed">
              I build and debug performance-critical, real-time frontend
              systems. My work lives where state, rendering, and correctness
              collide — trading platforms, healthcare products, and long-running
              UIs that fail in non-obvious ways.
            </p>

            <p className="text-[var(--muted)]">
              I write about frontend engineering the way it actually behaves in
              production — not the way tutorials describe it.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex gap-4 pt-2">
            <Link
              href="/writing"
              className="rounded-md bg-[var(--accent)] px-5 py-2.5 text-white font-medium hover:opacity-90"
            >
              Read essays
            </Link>

            <Link
              href="/work"
              className="rounded-md border border-[var(--surface-border)] px-5 py-2.5 hover:border-[var(--accent)]"
            >
              Explore work
            </Link>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-6 pt-4">
            <a href="https://github.com/badman-returns" target="_blank">
              <Github className="text-[#a12c2c]" size={20} />
            </a>
            <a href="https://linkedin.com/in/trishnangshugoswami" target="_blank">
              <Linkedin className="text-[#a12c2c]" size={20} />
            </a>
            <a href="https://x.com/ts_goswami" target="_blank">
              <Twitter className="text-[#a12c2c]" size={20} />
            </a>
            <a href="mailto:trishnangshugoswami@gmail.com">
              <Mail className="text-[#a12c2c]" size={20} />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <img
            src="/dp.png"
            alt="Trishnangshu Goswami (Trish) — Frontend Engineer"
            className="rounded-2xl aspect-[6/8] object-cover border border-[var(--surface-border)]"
          />
        </div>
      </section>

      {/* ================= TABS ================= */}
      <HomeTabs />

    </main>
  );
}
