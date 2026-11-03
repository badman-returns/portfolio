export default function HomeExperience() {
  const experiences = [
    {
      company: "Agentic Private Markets",
      role: "Senior Software Engineer (Lead Engineer)",
      domain: "AI due-diligence platform",
      gradient: "from-[#CDFF52] to-[#a3e635]",
      summary:
        "Lead engineer on an AI due-diligence platform. I build the layer between the models and the people who use them — voice and text agents, streaming agent chat, MCP tools, LLM cost control, and the React library that renders model output.",
      highlights: [
        "Built live voice and text interview agents over WebSocket, with server interrupts and a reconnect policy per close code.",
        "Built streaming agent chat on an SSE event stream with token renewal and resume from the last event id.",
        <>Generated <strong>65</strong> MCP tool definitions from the component library so agents render charts and tables through tool calls.</>,
        "Built the per-user LLM usage report and per-model MCP tool cost with the prompt-cache read/write split.",
        <>Published a <strong>65-component</strong> React 19 library for AI-generated output and migrated a 1,500-file product onto it with no feature freeze.</>,
      ],
    },
    {
      company: "DilSayCare",
      role: "Technical Advisor (AI and Platform)",
      domain: "AI mental-health platform · part-time",
      gradient: "from-[#CDFF52] to-[#a3e635]",
      summary:
        "Advised an AI mental-health platform across architecture, backend, clients, and AI, and built large parts of it.",
      highlights: [
        "Co-designed the MoM clinical-notes pipeline under a provisional patent application: ICD-11 coding via hybrid RAG + BPE scoring and routing between two small language models.",
        <>Built the backend on Node.js, Express, Knex, and PostgreSQL — <strong>150+</strong> REST endpoints, JWT with OTP sign-in, Razorpay payments, race-safe scheduling.</>,
        "Built the React 19 web client, a Refine admin dashboard, and the Expo mobile app.",
        "Deployed the observability stack: OpenTelemetry, Prometheus, Grafana, Loki, and Tempo.",
      ],
    },
    {
      company: "Freelance (2026)",
      role: "Software Engineer",
      domain: "Two client builds · part-time",
      gradient: "from-[#CDFF52] to-[#a3e635]",
      summary:
        "Two part-time client builds, each delivered from scaffold to production in about five weeks.",
      highlights: [
        <>An offline-first Android app for rural community health workers with on-device face recognition, FHIR sync, Keycloak sign-in, and LiveKit calls — <strong>440</strong> tests.</>,
        <>BongBrix, a wellness platform for a leading Indian engineering institute — React 19 apps, an Express + Knex API, institute OAuth SSO, and <strong>831</strong> API tests.</>,
      ],
    },
    {
      company: "Delta Exchange",
      role: "Frontend Engineer",
      domain: "Global crypto derivatives platform",
      gradient: "from-[#CDFF52] to-[#a3e635]",
      summary:
        "Worked on a high-traffic, real-time trading platform used by hundreds of thousands of active traders globally. The frontend acted as a long-running system handling live market data, compliance rules, and performance-sensitive workflows.",
      highlights: [
        <>Led migration of <strong>500k+</strong> existing users to the India-specific platform with geo-based routing and compliance gating.</>,
        <>Built location-aware onboarding routing <strong>600k+</strong> new sign-ups across platforms based on jurisdiction.</>,
        <>Designed trading analytics dashboards for <strong>100k+</strong> active traders, optimized for frequent data updates.</>,
        "Cut trade-page memory from 1GB+ to 400MB and the Sentry bundle from 400KB to 70KB gzipped.",
        "Collaborated with backend and compliance teams to ensure correctness under regulatory constraints.",
      ],
    },
    {
      company: "Grapevine",
      role: "Founding Engineer",
      domain: "Salary insights platform",
      gradient: "from-[#CDFF52] to-[#a3e635]",
      summary:
        "Set up the engineering team at a consumer-facing salary insights platform where SEO, performance, and rendering correctness directly impacted growth.",
      highlights: [
        <>Built the salary data visualisation product that reached <strong>20k+</strong> users in its first 6 months.</>,
        <>Brought landing pages to <strong>sub-1s</strong> FCP and LCP.</>,
        <>Achieved a <strong>100</strong> Lighthouse SEO score on critical landing pages.</>,
        "Designed the hybrid native + WebView architecture with stateless JWT auth and silent token refresh.",
      ],
    },
    {
      company: "Flipkart",
      role: "Frontend Engineer",
      domain: "Large-scale e-commerce platform",
      gradient: "from-[#CDFF52] to-[#a3e635]",
      summary:
        "Early experience working on frontend systems at massive scale, with emphasis on SEO, SSR, and analytics accuracy.",
      highlights: [
        "Built server-side-rendered ratings-and-reviews widgets and a React web component inside React Native for Google's mobile-first indexing.",
        "Migrated the 4 core tracking events from Omniture to the Flipkart Data Platform.",
        <>Built the internal SEO management tool adopted by <strong>5+</strong> business teams.</>,
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-5xl space-y-10 pb-10">
      <div className="space-y-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">Career</span>
        <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">Experience</h2>
        <p className="max-w-2xl text-sm text-[var(--muted)] leading-relaxed">
          Selected roles where I built and debugged long-running software systems under real-world constraints.
        </p>
      </div>

      <div className="space-y-5">
        {experiences.map((exp, i) => (
          <div
            key={exp.company}
            className="group relative grid grid-cols-1 gap-6 rounded-2xl border border-[var(--surface-border)] bg-[color:color-mix(in_srgb,var(--surface)_60%,transparent)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/30 md:grid-cols-[220px_1fr] md:p-8"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_right,rgba(205,255,82,0.06),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

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
