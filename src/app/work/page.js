export const metadata = {
  title: "Work Experience",
  description:
    "Trishnangshu Goswami's (Trish Goswami) professional experience — building and debugging large-scale frontend systems at Delta Exchange, Flipkart, and more.",
  openGraph: {
    title: "Work — Trish Goswami",
    description:
      "End-to-end frontend engineering across trading, consumer, and healthcare domains.",
  },
};

import ExperienceGraph from "./ExperienceGraph";

const experiences = [
  {
    period: "Jan 2024 – Mar 2025",
    company: "Delta Exchange",
    role: "Frontend Engineer",
    domain: "Global crypto derivatives platform",
    gradient: "from-[#CDFF52] to-[#a3e635]",
    summary:
      "Worked on a high-traffic, real-time trading platform used by hundreds of thousands of active traders globally. The frontend acted as a long-running system handling live market data, compliance rules, and performance-sensitive workflows.",
    highlights: [
      { text: "Root-caused a **1GB memory leak** on the trading page — a useEffect with an incorrect dependency was re-subscribing to every WebSocket tick, cascading re-renders across the order book. Reduced heap to **400MB**." },
      { text: "Restructured Sentry SDK integration — replaced wildcard imports with tree-shakeable named imports, moved initialization to first paint. Cut monitoring bundle from **400KB to 70KB** gzipped (**82% reduction**)." },
      { text: "Led migration of **500K+ existing users** to i the India-specific platform by designing geo-based routing, compliance gating, and seamless fallback flows — **zero downtime**." },
      { text: "Built position analytics dashboards consumed by **100K+ active traders**, optimized for frequent market data updates with minimal re-renders using Apache ECharts." },
      { text: "Routed **600K+ new sign-ups** across platforms based on jurisdiction using location-aware onboarding, reducing manual intervention and support load." },
    ],
    stack: ["React", "TypeScript", "WebSockets", "Sentry", "Webpack", "Apache ECharts"],
  },
  {
    period: "Jan 2025 – Present",
    company: "DilSayCare",
    role: "Founder & Full-Stack Engineer",
    domain: "Mental health platform",
    gradient: "from-[#CDFF52] to-[#a3e635]",
    summary:
      "Built an AI-assisted mental health platform from scratch, owning frontend architecture, backend systems, mobile app, infrastructure, and product flows.",
    highlights: [
      { text: "Built a **React Native + Expo** mobile app wrapping the web frontend in a WebView with native bridges for **FCM push notifications** and **Razorpay payments**." },
      { text: "Designed chat-based mental health assessments that behave like stateful conversations — **24+ message types** with real-time Socket.IO events." },
      { text: "Architected backend with **Node.js, PostgreSQL, Redis**, and **47 Knex migrations** — strong guarantees around correctness, ordering, and data recovery." },
      { text: "Deployed full **observability stack** — Prometheus, Grafana, Loki, Tempo — with alerting on unhandled exceptions, high latency, and memory usage." },
      { text: "Set up **Docker-based infrastructure** on Coolify with staging/production environments and EAS cloud builds for mobile." },
    ],
    stack: ["React", "React Native", "Expo", "Node.js", "PostgreSQL", "Redis", "Docker", "Socket.IO"],
  },
  {
    period: "Apr 2023 – Jan 2024",
    company: "Grapevine",
    role: "Frontend Engineer",
    domain: "Salary insights platform",
    gradient: "from-[#CDFF52] to-[#a3e635]",
    summary:
      "Worked on a consumer-facing salary insights platform where SEO, performance, and rendering correctness directly impacted growth.",
    highlights: [
      { text: "Built salary and compensation insights features used by **20K+** users with interactive **ECharts** visualizations." },
      { text: "Improved Core Web Vitals to achieve **sub-1s** FCP and LCP through bundle splitting, rendering optimization, and SSR tuning." },
      { text: "Achieved consistent **100** SEO scores across critical landing pages." },
      { text: "Built an internal **design system** using Amazon Style Dictionary with custom transforms, adopted across React Native and web teams." },
    ],
    stack: ["React", "Next.js", "React Native", "ECharts", "SSR", "SEO"],
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
      { text: "Built SSR and SEO features serving **millions** of monthly users on Flipkart's web platform." },
      { text: "Migrated analytics pipelines to improve data correctness and reduce reporting inconsistencies across teams." },
      { text: "Developed internal SEO tooling adopted by multiple teams to standardize optimization practices." },
    ],
    stack: ["React", "SSR", "Analytics", "Internal Tooling"],
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
          A one-by-one progression of roles where I built and debugged production frontend systems.
        </p>
      </header>

      <ExperienceGraph experiences={experiences} />

      <div className="mt-14 border-t border-[var(--surface-border)] pt-8">
        <p className="max-w-3xl text-sm text-[var(--foreground)]/50 leading-relaxed">
          Pattern across all steps: stabilize state flow, reduce hidden render cost, and make production behavior
          observable enough to debug quickly.
        </p>
      </div>
    </section>
  );
}
