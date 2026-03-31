"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedWriting({ posts }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    const scroller = container.closest("[data-scroll-inner]") || window;

    const ctx = gsap.context(() => {
      const head = container.querySelector("[data-writing-head]");
      if (head) {
        gsap.set(head, { opacity: 1 });
        gsap.from(head, {
          x: -60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: container, scroller, start: "top 85%" },
        });
      }

      const cards = container.querySelectorAll("[data-writing-card]");
      if (cards?.length) {
        gsap.set(cards, { opacity: 1 });
        gsap.from(cards, {
          y: 50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: { trigger: container, scroller, start: "top 70%" },
        });
      }

      const cta = container.querySelector("[data-writing-cta]");
      if (cta) {
        gsap.set(cta, { opacity: 1 });
        gsap.from(cta, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: { trigger: container, scroller, start: "top 60%" },
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  if (!posts?.length) return null;

  return (
    <div ref={sectionRef} className="space-y-10">
      <div data-writing-head style={{ opacity: 0 }}>
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
          Writing
        </span>
        <div className="mt-2 flex items-center gap-4 md:gap-6">
          <h2 className="shrink-0 text-2xl font-bold tracking-tight md:text-3xl">
            Latest essays
          </h2>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-[var(--surface-border)] to-transparent md:block" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            data-writing-card
            className="group relative flex flex-col justify-between rounded-2xl border border-[var(--surface-border)] bg-[color:color-mix(in_srgb,var(--surface)_50%,transparent)] p-6 transition-all duration-300 hover:border-[var(--accent)]/40 hover:-translate-y-1"
            style={{ opacity: 0 }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(205,255,82,0.06),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative space-y-3">
              <p className="text-xs font-medium text-[var(--muted-light)]">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>

              <h3 className="text-lg font-semibold leading-snug tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)]">
                {post.title}
              </h3>

              {post.excerpt && (
                <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              )}
            </div>

            <div className="relative mt-5 flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1">
              Read essay
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      <div data-writing-cta className="text-center" style={{ opacity: 0 }}>
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          View all essays
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
