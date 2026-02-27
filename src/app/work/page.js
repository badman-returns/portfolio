export const metadata = {
  title: "Work Experience",
  description:
    "Trishnangshu Goswami’s (Trish Goswami) professional experience — building and debugging large-scale frontend systems at Delta Exchange, Practo, and more.",
  openGraph: {
    title: "Work — Trish Goswami",
    description:
      "End-to-end frontend engineering across trading, consumer, and healthcare domains.",
  },
};

export default function Work() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-5 ">
      {/* Header */}
      <header className="max-w-2xl space-y-4">
        <h1 className="text-3xl font-bold">Work Experience</h1>
        <p className="text-[var(--muted)]">
          End-to-end experience building and debugging large-scale frontend
          systems across trading, consumer, and healthcare domains.
        </p>
      </header>

      {/* Timeline */}
      <div className="relative space-y-20">
        <span className="absolute left-0 top-0 h-full w-px bg-[var(--surface-border)]" />

        {/* DELTA EXCHANGE */}
        <section className="relative pl-8">
          <span className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-[var(--accent)]" />

          <header className="space-y-1">
            <h2 className="text-xl font-semibold">Delta Exchange</h2>
            <p className="text-sm text-[var(--muted)]">
              Frontend Engineer · Global crypto derivatives platform
            </p>
          </header>

          <div className="mt-6 space-y-4 max-w-3xl leading-relaxed">
            <p>
              Worked on a high-traffic, real-time trading platform used by
              hundreds of thousands of active traders globally. The frontend
              acted as a long-running system handling live market data,
              compliance rules, and performance-sensitive workflows.
            </p>

            <ul className="space-y-3">
              <li>
                Led migration of <strong>500k+</strong> existing users to the
                India-specific platform by designing geo-based routing,
                compliance gating, and seamless fallback flows.
              </li>
              <li>
                Built and maintained location-aware onboarding that routed
                <strong> 600k+ </strong> new sign-ups across platforms based on
                jurisdiction, reducing manual intervention and support load.
              </li>
              <li>
                Designed trading analytics dashboards consumed by
                <strong> 100k+ </strong> active traders, optimized for frequent
                data updates and minimal re-renders.
              </li>
              <li>
                Debugged production-only issues caused by rendering loops,
                unstable references, and state churn under real market load.
              </li>
              <li>
                Collaborated closely with backend and compliance teams to ensure
                correctness under regulatory constraints without sacrificing
                UX responsiveness.
              </li>
            </ul>
          </div>
        </section>

        {/* DILSAYCARE */}
        <section className="relative pl-8">
          <span className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-[var(--accent)]" />

          <header className="space-y-1">
            <h2 className="text-xl font-semibold">DilSayCare</h2>
            <p className="text-sm text-[var(--muted)]">
              Founder & Engineer · Mental health platform
            </p>
          </header>

          <div className="mt-6 space-y-4 max-w-3xl leading-relaxed">
            <p>
              Built an AI-assisted mental health platform from scratch, owning
              frontend architecture, backend systems, infrastructure, and
              product flows.
            </p>

            <ul className="space-y-3">
              <li>
                Designed chat-based mental health assessments that behave like
                stateful conversations rather than static forms.
              </li>
              <li>
                Implemented real-time WebSocket flows for assessments,
                follow-ups, doctor recommendations, and session booking.
              </li>
              <li>
                Architected backend systems using Node.js, PostgreSQL, and Redis,
                with strong guarantees around correctness, ordering, and data
                recovery.
              </li>
              <li>
                Designed slot-based scheduling logic for therapists and
                institutions, supporting both online and offline sessions.
              </li>
              <li>
                Focused heavily on failure handling — dropped connections,
                partial submissions, retries, and reconnection logic.
              </li>
            </ul>
          </div>
        </section>

        {/* GRAPEVINE */}
        <section className="relative pl-8">
          <span className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-[var(--accent)]" />

          <header className="space-y-1">
            <h2 className="text-xl font-semibold">Grapevine</h2>
            <p className="text-sm text-[var(--muted)]">
              Frontend Engineer · Salary insights platform
            </p>
          </header>

          <div className="mt-6 space-y-4 max-w-3xl leading-relaxed">
            <p>
              Worked on a consumer-facing salary insights platform where SEO,
              performance, and rendering correctness directly impacted growth.
            </p>

            <ul className="space-y-3">
              <li>
                Built salary and compensation insights features used by
                <strong> 20k+ </strong> users.
              </li>
              <li>
                Improved Core Web Vitals to achieve
                <strong> sub-1s </strong> FCP and LCP through bundle splitting,
                rendering optimization, and SSR tuning.
              </li>
              <li>
                Achieved consistent <strong>100</strong> SEO scores across
                critical landing pages.
              </li>
              <li>
                Worked closely with content and growth teams to ensure frontend
                architecture supported SEO-heavy use cases at scale.
              </li>
            </ul>
          </div>
        </section>

        {/* FLIPKART */}
        <section className="relative pl-8">
          <span className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-[var(--accent)]" />

          <header className="space-y-1">
            <h2 className="text-xl font-semibold">Flipkart</h2>
            <p className="text-sm text-[var(--muted)]">
              Frontend Engineer · Large-scale e-commerce platform
            </p>
          </header>

          <div className="mt-6 space-y-4 max-w-3xl leading-relaxed">
            <p>
              Early experience working on frontend systems operating at massive
              scale, with a strong emphasis on SEO, SSR, and analytics accuracy.
            </p>

            <ul className="space-y-3">
              <li>
                Built SSR and SEO features serving
                <strong> millions </strong> of monthly users.
              </li>
              <li>
                Migrated analytics pipelines to improve data correctness and
                reduce reporting inconsistencies.
              </li>
              <li>
                Developed internal SEO tooling adopted by multiple teams to
                standardize optimization practices.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}
