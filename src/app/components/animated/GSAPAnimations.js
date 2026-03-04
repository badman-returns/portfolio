"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── Hero text reveal: clip-path wipe + y translate ─── */
export function HeroReveal({ children, className, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    gsap.set(el, { opacity: 1 });

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay,
        ease: "power3.out",
        clearProps: "transform",
      });
    }, ref);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

/* ─── Stagger container: children animate in sequence ─── */
export function GStagger({ children, className, stagger = 0.12, delay = 0.1 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const items = el.querySelectorAll("[data-stagger-item]");
    gsap.set(items, { opacity: 1 });

    const ctx = gsap.context(() => {
      gsap.from(items, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger,
        delay,
        ease: "power3.out",
        clearProps: "transform",
      });
    }, ref);

    return () => ctx.revert();
  }, [stagger, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ─── Stagger item marker (just adds data attribute) ─── */
export function GStaggerItem({ children, className }) {
  return (
    <div data-stagger-item className={className}>
      {children}
    </div>
  );
}

/* ─── Fade-in on scroll (ScrollTrigger) ─── */
export function GFadeIn({ children, className, delay = 0, y = 30, duration = 0.8 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const fpScroller = document.querySelector("[data-fullpage-scroller]");
    gsap.set(el, { opacity: 1 });

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y,
        opacity: 0,
        duration,
        delay,
        ease: "power2.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
          ...(fpScroller && { scroller: fpScroller }),
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [y, delay, duration]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

/* ─── Photo entrance: scale + fade with slight rotation ─── */
export function GPhotoReveal({ children, className, delay = 0.15 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    // Set final state first so gsap.from() knows the target
    gsap.set(el, { opacity: 1 });

    const ctx = gsap.context(() => {
      gsap.from(el, {
        scale: 0.85,
        opacity: 0,
        rotation: 3,
        duration: 1.4,
        delay,
        ease: "power3.out",
        clearProps: "transform",
      });
    }, ref);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

/* ─── Tech pills slide-up reveal ─── */
export function GTechStrip({ children, className, delay = 0.6 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    gsap.set(el, { opacity: 1 });

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay,
        ease: "power2.out",
        clearProps: "transform",
      });

      const pills = el.querySelectorAll("[data-pill]");
      gsap.from(pills, {
        y: 12,
        opacity: 0,
        duration: 0.5,
        delay: delay + 0.2,
        stagger: 0.05,
        ease: "power2.out",
        clearProps: "transform",
      });
    }, ref);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

/* ─── ScrollTrigger stagger for cards ─── */
export function GCardGrid({ children, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const fpScroller = document.querySelector("[data-fullpage-scroller]");
    const cards = el.querySelectorAll("[data-card]");
    gsap.set(cards, { opacity: 1 });

    const ctx = gsap.context(() => {
      gsap.from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
          ...(fpScroller && { scroller: fpScroller }),
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ─── Section header reveal on scroll ─── */
export function GSectionReveal({ children, className, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const fpScroller = document.querySelector("[data-fullpage-scroller]");
    gsap.set(el, { opacity: 1 });

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: 24,
        opacity: 0,
        duration: 0.7,
        delay,
        ease: "power2.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
          ...(fpScroller && { scroller: fpScroller }),
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

/* ─── Magnetic hover (kept as CSS/JS — no Framer needed) ─── */
export function GMagnetic({ children, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleEnter = () => {
      gsap.to(el, { scale: 1.04, y: -2, duration: 0.3, ease: "power2.out" });
    };

    const handleLeave = () => {
      gsap.to(el, { scale: 1, y: 0, duration: 0.4, ease: "elastic.out(1, 0.5)" });
    };

    const handleDown = () => {
      gsap.to(el, { scale: 0.97, duration: 0.1 });
    };

    const handleUp = () => {
      gsap.to(el, { scale: 1.04, duration: 0.2 });
    };

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);
    el.addEventListener("mousedown", handleDown);
    el.addEventListener("mouseup", handleUp);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
      el.removeEventListener("mousedown", handleDown);
      el.removeEventListener("mouseup", handleUp);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
