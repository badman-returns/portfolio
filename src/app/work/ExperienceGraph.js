"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function renderBold(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));
}

export default function ExperienceGraph({ experiences }) {
  const HEADER_OFFSET = 88;
  const containerRef = useRef(null);
  const progressFillRef = useRef(null);
  const chapterRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

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

      chapters.forEach((chapter, index) => {
        gsap.fromTo(
          chapter,
          { opacity: index === 0 ? 1 : 0.55, y: index === 0 ? 0 : 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: chapter,
              start: "top 58%",
              end: "top 24%",
              toggleActions: "play reverse play reverse",
              onEnter: () => setActiveStep(index),
              onEnterBack: () => setActiveStep(index),
            },
          }
        );

        const evidenceCards = chapter.querySelectorAll("[data-evidence-card]");
        if (evidenceCards.length) {
          gsap.fromTo(
            evidenceCards,
            { y: 18, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.45,
              stagger: 0.06,
              ease: "power2.out",
              scrollTrigger: {
                trigger: chapter,
                start: "top 50%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        }
      });
    }, container);

    return () => ctx.revert();
  }, [prefersReducedMotion, experiences.length]);

  const handleStepClick = (index) => {
    setActiveStep(index);
    const target = chapterRefs.current[index];
    if (!target) return;
    const targetY = window.scrollY + target.getBoundingClientRect().top - HEADER_OFFSET;
    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: prefersReducedMotion ? "auto" : "smooth",
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
              <p className="mt-2 text-sm font-medium text-[var(--foreground)]">{experiences[activeStep]?.company}</p>
              <p className="text-xs text-[var(--muted)]">{experiences[activeStep]?.role}</p>
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
          <div className="absolute bottom-6 left-4 top-3 w-px bg-[color:color-mix(in_srgb,var(--surface-border)_72%,transparent)]" />
          <div
            ref={progressFillRef}
            className="absolute bottom-6 left-4 top-3 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/65 to-transparent"
            style={{ transformOrigin: "top top", willChange: "transform" }}
          />

          <ol className="space-y-20 md:space-y-24">
        {experiences.map((exp, index) => {
          const isActive = activeStep === index;

          return (
            <motion.li
              key={exp.company}
              ref={(el) => {
                chapterRefs.current[index] = el;
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative scroll-mt-24 pl-14 pb-2 md:scroll-mt-28"
            >
              <motion.span
                animate={{
                  scale: isActive ? 1.08 : 1,
                  boxShadow: isActive
                    ? "0 0 0 8px color-mix(in_srgb,var(--background)_82%,transparent), 0 0 24px color-mix(in_srgb,var(--accent)_35%,transparent)"
                    : "0 0 0 7px color-mix(in_srgb,var(--background)_86%,transparent)",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 22, duration: prefersReducedMotion ? 0 : undefined }}
                className={`absolute left-0 top-1 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r ${exp.gradient} text-[10px] font-bold text-white [will-change:transform]`}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--muted-light)]">{exp.period}</p>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl">{exp.company}</h2>
                    <span className="text-sm text-[var(--muted)]">{exp.role}</span>
                  </div>
                  <p className="text-sm text-[var(--muted)]/80">{exp.domain}</p>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.55 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.45, delay: prefersReducedMotion ? 0 : 0.08 }}
                  className="max-w-4xl text-[15px] leading-relaxed text-[var(--muted)]"
                >
                  {exp.summary}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.55 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : 0.12 }}
                  className="flex flex-wrap gap-2"
                >
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--surface-border)]/85 bg-[color:color-mix(in_srgb,var(--surface)_42%,transparent)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-[var(--muted-light)]"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                <ul className="space-y-2 pt-2">
                  {exp.highlights.map((item, j) => (
                    <li
                      key={j}
                      data-evidence-card
                      className="pb-2"
                    >
                      <div className="flex items-start gap-3 text-sm leading-relaxed text-[var(--muted)]">
                        <span className="mt-1.5 h-5 w-0.5 shrink-0 rounded-full bg-[var(--accent)]/65" />
                        <span>{renderBold(item.text)}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          );
        })}
          </ol>
        </div>
      </div>
    </div>
  );
}
