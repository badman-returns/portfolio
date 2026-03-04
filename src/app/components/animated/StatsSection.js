"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock3, Activity, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    label: "Experience",
    value: "5+",
    suffix: "years",
    detail: "Shipping production frontend systems",
    icon: Clock3,
    gradient: "from-[#4f6d99] to-[#9fb7d8]",
    glow: "rgba(79,109,153,0.4)",
  },
  {
    label: "Core Domain",
    value: "Realtime",
    suffix: "UIs",
    detail: "Low-latency, long-running interfaces",
    icon: Activity,
    gradient: "from-[#6b8cbe] to-[#b8cfe8]",
    glow: "rgba(107,140,190,0.4)",
  },
  {
    label: "Focus",
    value: "Debug",
    suffix: "at scale",
    detail: "Root-cause analysis in live traffic",
    icon: ShieldCheck,
    gradient: "from-[#5a7ba8] to-[#a8c4e0]",
    glow: "rgba(90,123,168,0.4)",
  },
];

export default function StatsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const fpScroller = document.querySelector("[data-fullpage-scroller]");

    // Set all hidden elements to visible before animating
    const columns = section.querySelectorAll("[data-stat]");
    const icons = section.querySelectorAll("[data-stat-icon]");
    const values = section.querySelectorAll("[data-stat-value]");
    gsap.set([...columns, ...icons, ...values], { opacity: 1 });

    const ctx = gsap.context(() => {
      gsap.from(columns, {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
          ...(fpScroller && { scroller: fpScroller }),
        },
      });

      gsap.from(icons, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.18,
        delay: 0.2,
        ease: "back.out(1.7)",
        clearProps: "transform",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
          ...(fpScroller && { scroller: fpScroller }),
        },
      });

      gsap.from(values, {
        scale: 0.7,
        opacity: 0,
        duration: 0.7,
        stagger: 0.18,
        delay: 0.3,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
          ...(fpScroller && { scroller: fpScroller }),
        },
      });

      // Hover animations for icons
      icons.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, { scale: 1.12, rotation: 5, duration: 0.3, ease: "power2.out" });
        });
        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, { scale: 1, rotation: 0, duration: 0.4, ease: "elastic.out(1, 0.5)" });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      {/* Ambient glow behind entire section */}
      <div className="pointer-events-none absolute inset-x-0 -top-12 bottom-0 bg-[radial-gradient(ellipse_85%_50%_at_50%_50%,rgba(79,109,153,0.12),transparent)]" />

      <div className="relative grid grid-cols-1 gap-0 md:grid-cols-3">
        {stats.map((stat, i) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              data-stat
              className="group relative flex flex-col items-center px-6 py-10 text-center md:py-14"
              style={{ opacity: 0 }}
            >
              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 50% 40%, ${stat.glow}, transparent 70%)`,
                }}
              />

              {/* Vertical divider */}
              {i > 0 && (
                <span className="absolute left-0 top-[15%] hidden h-[70%] w-px bg-gradient-to-b from-transparent via-[var(--surface-border)] to-transparent md:block" />
              )}

              {/* Icon */}
              <span
                data-stat-icon
                className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.gradient} text-white shadow-lg cursor-default`}
                style={{ boxShadow: `0 8px 24px -6px ${stat.glow}`, opacity: 0 }}
              >
                <Icon size={22} />
              </span>

              {/* Value */}
              <div className="relative mb-2">
                <span
                  data-stat-value
                  className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl`}
                  style={{ opacity: 0 }}
                >
                  {stat.value}
                </span>
                <span className="ml-2 text-lg font-medium text-[var(--foreground)]/80">
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted-light)]">
                {stat.label}
              </p>

              {/* Detail */}
              <p className="max-w-[200px] text-sm text-[var(--muted)]">
                {stat.detail}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom gradient line */}
      <div className="mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />
    </section>
  );
}
