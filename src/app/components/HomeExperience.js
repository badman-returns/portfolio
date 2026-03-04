export default function HomeExperience() {
  const experiences = [
    {
      company: "Delta Exchange",
      role: "Frontend Engineer",
      domain: "Global crypto derivatives platform",
      gradient: "from-[#4f6d99] to-[#9fb7d8]",
      summary:
        "Worked on a high-traffic, real-time trading platform used by hundreds of thousands of active traders globally. The frontend acted as a long-running system handling live market data, compliance rules, and performance-sensitive workflows.",
      highlights: [
        <>Led migration of <strong>500k+</strong> existing users to the India-specific platform with geo-based routing and compliance gating.</>,
        <>Built location-aware onboarding routing <strong>600k+</strong> new sign-ups across platforms based on jurisdiction.</>,
        <>Designed trading analytics dashboards for <strong>100k+</strong> active traders, optimized for frequent data updates.</>,
        "Debugged production-only issues caused by rendering loops, unstable references, and state churn under real market load.",
        "Collaborated with backend and compliance teams to ensure correctness under regulatory constraints.",
      ],
    },
    {
      company: "DilSayCare",
      role: "Founder & Engineer",
      domain: "Mental health platform",
      gradient: "from-[#6b8cbe] to-[#b8cfe8]",
      summary:
        "Built an AI-assisted mental health platform from scratch, owning frontend architecture, backend systems, infrastructure, and product flows.",
      highlights: [
        "Designed chat-based assessments that behave like stateful conversations rather than static forms.",
        "Implemented real-time WebSocket flows for assessments, follow-ups, and session booking.",
        "Architected backend with Node.js, PostgreSQL, and Redis with strong correctness guarantees.",
        "Designed slot-based scheduling logic supporting both online and offline sessions.",
        "Focused on failure handling — dropped connections, partial submissions, retries, and reconnection.",
      ],
    },
    {
      company: "Grapevine",
      role: "Frontend Engineer",
      domain: "Salary insights platform",
      gradient: "from-[#5a7ba8] to-[#a8c4e0]",
      summary:
        "Worked on a consumer-facing salary insights platform where SEO, performance, and rendering correctness directly impacted growth.",
      highlights: [
        <>Built salary and compensation features used by <strong>20k+</strong> users.</>,
        <>Improved Core Web Vitals to <strong>sub-1s</strong> FCP and LCP through bundle splitting and SSR tuning.</>,
        <>Achieved consistent <strong>100</strong> SEO scores across critical landing pages.</>,
        "Ensured frontend architecture supported SEO-heavy use cases at scale.",
      ],
    },
    {
      company: "Flipkart",
      role: "Frontend Engineer",
      domain: "Large-scale e-commerce platform",
      gradient: "from-[#4f6d99] to-[#9fb7d8]",
      summary:
        "Early experience working on frontend systems at massive scale, with emphasis on SEO, SSR, and analytics accuracy.",
      highlights: [
        <>Built SSR and SEO features serving <strong>millions</strong> of monthly users.</>,
        "Migrated analytics pipelines to improve data correctness and reduce reporting inconsistencies.",
        "Developed internal SEO tooling adopted by multiple teams.",
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-5xl space-y-10 pb-10">
      <div className="space-y-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">Career</span>
        <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">Experience</h2>
        <p className="max-w-2xl text-sm text-[var(--muted)] leading-relaxed">
          Selected roles where I built and debugged long-running frontend systems under real-world constraints.
        </p>
      </div>

      <div className="space-y-5">
        {experiences.map((exp, i) => (
          <div
            key={exp.company}
            className="group relative grid grid-cols-1 gap-6 rounded-2xl border border-[var(--surface-border)] bg-[color:color-mix(in_srgb,var(--surface)_60%,transparent)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/30 md:grid-cols-[220px_1fr] md:p-8"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_right,rgba(79,109,153,0.08),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Left column */}
            <div className="relative space-y-2">
              <div className="flex items-center gap-2.5">
                <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${exp.gradient}`} />
                <h3 className="text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)]">
                  {exp.company}
                </h3>
              </div>
              <p className="text-sm text-[var(--muted)]">{exp.role}</p>
              <p className="text-xs text-[var(--muted)]/60">{exp.domain}</p>
              <span className="pt-1 inline-block text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted-light)]">
                Role {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Right column */}
            <div className="relative space-y-4">
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {exp.summary}
              </p>

              <ul className="space-y-2.5">
                {exp.highlights.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]/50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
