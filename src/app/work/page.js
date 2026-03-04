export const metadata = {
  title: "Work Experience",
  description:
    "Trishnangshu Goswami's (Trish Goswami) professional experience — building and debugging large-scale frontend systems at Delta Exchange, Practo, and more.",
  openGraph: {
    title: "Work — Trish Goswami",
    description:
      "End-to-end frontend engineering across trading, consumer, and healthcare domains.",
  },
};

const experiences = [
  {
    company: "Delta Exchange",
    role: "Frontend Engineer",
    domain: "Global crypto derivatives platform",
    gradient: "from-[#4f6d99] to-[#9fb7d8]",
    summary:
      "Worked on a high-traffic, real-time trading platform used by hundreds of thousands of active traders globally. The frontend acted as a long-running system handling live market data, compliance rules, and performance-sensitive workflows.",
    highlights: [
      { text: "Led migration of **500k+** existing users to the India-specific platform by designing geo-based routing, compliance gating, and seamless fallback flows." },
      { text: "Built and maintained location-aware onboarding that routed **600k+** new sign-ups across platforms based on jurisdiction, reducing manual intervention and support load." },
      { text: "Designed trading analytics dashboards consumed by **100k+** active traders, optimized for frequent data updates and minimal re-renders." },
      { text: "Debugged production-only issues caused by rendering loops, unstable references, and state churn under real market load." },
      { text: "Collaborated closely with backend and compliance teams to ensure correctness under regulatory constraints without sacrificing UX responsiveness." },
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
      { text: "Designed chat-based mental health assessments that behave like stateful conversations rather than static forms." },
      { text: "Implemented real-time WebSocket flows for assessments, follow-ups, doctor recommendations, and session booking." },
      { text: "Architected backend systems using Node.js, PostgreSQL, and Redis, with strong guarantees around correctness, ordering, and data recovery." },
      { text: "Designed slot-based scheduling logic for therapists and institutions, supporting both online and offline sessions." },
      { text: "Focused heavily on failure handling — dropped connections, partial submissions, retries, and reconnection logic." },
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
      { text: "Built salary and compensation insights features used by **20k+** users." },
      { text: "Improved Core Web Vitals to achieve **sub-1s** FCP and LCP through bundle splitting, rendering optimization, and SSR tuning." },
      { text: "Achieved consistent **100** SEO scores across critical landing pages." },
      { text: "Worked closely with content and growth teams to ensure frontend architecture supported SEO-heavy use cases at scale." },
    ],
  },
  {
    company: "Flipkart",
    role: "Frontend Engineer",
    domain: "Large-scale e-commerce platform",
    gradient: "from-[#4f6d99] to-[#9fb7d8]",
    summary:
      "Early experience working on frontend systems operating at massive scale, with a strong emphasis on SEO, SSR, and analytics accuracy.",
    highlights: [
      { text: "Built SSR and SEO features serving **millions** of monthly users." },
      { text: "Migrated analytics pipelines to improve data correctness and reduce reporting inconsistencies." },
      { text: "Developed internal SEO tooling adopted by multiple teams to standardize optimization practices." },
    ],
  },
];

function renderBold(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function Work() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      {/* Header */}
      <header className="max-w-2xl space-y-4">
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
          Career
        </span>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Work Experience
        </h1>
        <p className="text-[var(--muted)] leading-relaxed">
          End-to-end experience building and debugging large-scale frontend
          systems across trading, consumer, and healthcare domains.
        </p>
      </header>

      {/* Experience entries */}
      <div className="mt-16 space-y-0">
        {experiences.map((exp, i) => (
          <article
            key={exp.company}
            className="group grid grid-cols-1 gap-8 border-b border-[var(--surface-border)] py-12 first:pt-0 last:border-b-0 md:grid-cols-[240px_1fr]"
          >
            {/* Left column */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <span
                  className={`h-2 w-2 rounded-full bg-gradient-to-r ${exp.gradient}`}
                />
                <h2 className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)]">
                  {exp.company}
                </h2>
              </div>
              <p className="text-sm text-[var(--muted)]">{exp.role}</p>
              <p className="text-xs text-[var(--muted)]/60">{exp.domain}</p>
            </div>

            {/* Right column */}
            <div className="space-y-5">
              <p className="text-[var(--muted)] leading-relaxed">
                {exp.summary}
              </p>

              <ul className="space-y-3">
                {exp.highlights.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                  >
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]/50" />
                    <span>{renderBold(item.text)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
