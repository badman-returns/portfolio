"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function renderBold(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) => (i % 2 === 1 ? <strong key={i} className="font-semibold text-[var(--foreground)]">{part}</strong> : part));
}

export default function ExperienceGraph({ experiences }) {
  const HEADER_OFFSET = 88;
  const containerRef = useRef(null);
  const progressFillRef = useRef(null);
  const chapterRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const chapters = chapterRefs.current.filter(Boolean);
    const progressFill = progressFillRef.current;

    if (!container || !chapters.length || !progressFill) return;

    const ctx = gsap.context(() => {
      gsap.set(progressFill, {
        scaleY: 0,
        transformOrigin: "top top",
      });

      gsap.to(progressFill, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top+=100",
          end: "bottom bottom-=120",
          scrub: true,
        },
      });

      // Only track active step for sidebar — no opacity/visibility changes
      chapters.forEach((chapter, index) => {
        ScrollTrigger.create({
          trigger: chapter,
          start: "top 58%",
          end: "top 24%",
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });
      });
    }, container);

    return () => ctx.revert();
  }, [experiences.length]);

  const handleStepClick = (index) => {
    setActiveStep(index);
    const target = chapterRefs.current[index];
    if (!target) return;
    const targetY = window.scrollY + target.getBoundingClientRect().top - HEADER_OFFSET;
    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: "smooth",
    });
  };

  return (
    <div ref={containerRef} className="relative mt-12 md:mt-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[240px_1fr] md:gap-12">
        <aside className="hidden md:block">
          <div className="sticky top-20">
            <div className="mb-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--muted-light)]">Current chapter</p>
              <div className="mt-2 flex items-end gap-3">
                <span className="text-4xl font-bold tracking-tight text-[var(--foreground)]">
                  {String(activeStep + 1).padStart(2, "0")}
                </span>
                <span className="pb-1 text-xs text-[var(--muted)]">/ {String(experiences.length).padStart(2, "0")}</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">{experiences[activeStep]?.company}</p>
              <p className="text-xs text-[var(--foreground)]/55">{experiences[activeStep]?.role}</p>
            </div>

            <ol className="space-y-3">
              {experiences.map((exp, index) => {
                const isActive = activeStep === index;
                return (
                  <li key={exp.company}>
                    <button
                      type="button"
                      onClick={() => handleStepClick(index)}
                      className={`w-full rounded-lg px-3 py-2 text-left transition-colors ${
                        isActive
                          ? "bg-[color:color-mix(in_srgb,var(--surface)_55%,transparent)] text-[var(--foreground)]"
                          : "text-[var(--muted)] hover:bg-[color:color-mix(in_srgb,var(--surface)_35%,transparent)]"
                      }`}
                    >
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-light)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="block text-sm font-medium leading-tight">{exp.company}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </aside>

        <div className="relative">
          <div className="absolute bottom-6 left-2 top-3 w-px bg-[color:color-mix(in_srgb,var(--surface-border)_72%,transparent)] sm:left-4" />
          <div
            ref={progressFillRef}
            className="absolute bottom-6 left-2 top-3 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/65 to-transparent sm:left-4"
            style={{ transformOrigin: "top top", willChange: "transform" }}
          />

          <ol className="space-y-20 md:space-y-24">
        {experiences.map((exp, index) => {
          return (
            <li
              key={exp.company}
              ref={(el) => {
                chapterRefs.current[index] = el;
              }}
              className="relative scroll-mt-24 pl-10 pb-2 sm:pl-14 md:scroll-mt-28"
            >
              <span
                className={`absolute -left-1 top-1 z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r sm:left-0 sm:h-9 sm:w-9 ${exp.gradient} text-[10px] font-bold text-black`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]/70">{exp.period}</p>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl md:text-4xl">{exp.company}</h2>
                    <span className="text-sm font-medium text-[var(--foreground)]/60">{exp.role}</span>
                  </div>
                  <p className="text-sm text-[var(--foreground)]/50">{exp.domain}</p>
                </div>

                <p
                  className="max-w-4xl text-[15px] leading-[1.8] text-[var(--foreground)]/65"
                >
                  {exp.summary}
                </p>

                <div
                  className="flex flex-wrap gap-2"
                >
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--surface-border)] bg-[color:color-mix(in_srgb,var(--surface)_60%,transparent)] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.08em] text-[var(--foreground)]/55"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 pt-3">
                  {exp.highlights.map((item, j) => (
                    <li
                      key={j}
                      data-evidence-card
                      className="pb-2"
                    >
                      <div className="flex items-start gap-3 text-[13px] leading-[1.75] text-[var(--foreground)]/55">
                        <span className="mt-1.5 h-5 w-0.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{renderBold(item.text)}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
          </ol>
        </div>
      </div>
    </div>
  );
}
