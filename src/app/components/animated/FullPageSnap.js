"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function FullPageSnap({ children }) {
  const containerRef = useRef(null);
  const currentSection = useRef(0);
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);
  const touchStartInnerScrollTop = useRef(0);
  const touchStartInnerAtTop = useRef(false);
  const touchStartInnerAtBottom = useRef(false);
  const touchStartInnerEl = useRef(null);
  const sectionsRef = useRef([]);
  const wheelAccumulator = useRef(0);
  const wheelTimer = useRef(null);

  const scrollToSection = useCallback((index) => {
    const sections = sectionsRef.current;
    const container = containerRef.current;
    if (index < 0 || index >= sections.length || isAnimating.current || !container) return;

    isAnimating.current = true;
    currentSection.current = index;

    gsap.to(container, {
      scrollTo: { y: sections[index], offsetY: 0, autoKill: false },
      duration: 1.4,
      ease: "power3.out",
      onComplete: () => {
        setTimeout(() => {
          isAnimating.current = false;
        }, 100);
      },
    });
  }, []);

  const findCurrentSection = useCallback(() => {
    const sections = sectionsRef.current;
    const container = containerRef.current;
    if (!container) return 0;

    const containerRect = container.getBoundingClientRect();
    const containerH = containerRect.height;

    for (let i = sections.length - 1; i >= 0; i--) {
      const rect = sections[i].getBoundingClientRect();
      // Position relative to container top
      const relativeTop = rect.top - containerRect.top;
      if (relativeTop <= containerH * 0.4) {
        return i;
      }
    }
    return 0;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Collect all snap sections
    sectionsRef.current = Array.from(container.querySelectorAll("[data-section]"));

    const handleWheel = (e) => {
      if (isAnimating.current) {
        e.preventDefault();
        return;
      }

      const current = findCurrentSection();
      const section = sectionsRef.current[current];
      if (!section) return;

      const isScrollable = section.dataset.scrollable === "true";

      if (isScrollable) {
        const scrollableContent = section.querySelector("[data-scroll-inner]");
        if (scrollableContent) {
          const { scrollTop, scrollHeight, clientHeight } = scrollableContent;
          const atTop = scrollTop <= 1;
          const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

          if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) {
            wheelAccumulator.current = 0;
            return;
          }
        }
      }

      const isFirstSection = current === 0;
      const isLastSection = current === sectionsRef.current.length - 1;

      // Allow natural container scroll at boundaries (footer / header)
      if (isFirstSection && e.deltaY < 0) {
        wheelAccumulator.current = 0;
        return;
      }
      if (isLastSection && e.deltaY > 0) {
        wheelAccumulator.current = 0;
        return;
      }

      // Accumulate wheel deltas so light trackpad gestures don't snap instantly
      wheelAccumulator.current += e.deltaY;
      if (wheelTimer.current) clearTimeout(wheelTimer.current);
      wheelTimer.current = setTimeout(() => { wheelAccumulator.current = 0; }, 200);

      const WHEEL_THRESHOLD = 60; // px of accumulated delta before we snap

      if (wheelAccumulator.current > WHEEL_THRESHOLD) {
        e.preventDefault();
        wheelAccumulator.current = 0;
        scrollToSection(current + 1);
      } else if (wheelAccumulator.current < -WHEEL_THRESHOLD) {
        e.preventDefault();
        wheelAccumulator.current = 0;
        scrollToSection(current - 1);
      }
    };

    // Touch support
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;

      const current = findCurrentSection();
      const section = sectionsRef.current[current];
      const isScrollable = section?.dataset.scrollable === "true";

      touchStartInnerEl.current = null;
      touchStartInnerScrollTop.current = 0;
      touchStartInnerAtTop.current = false;
      touchStartInnerAtBottom.current = false;

      if (!isScrollable) return;

      const scrollableContent = section.querySelector("[data-scroll-inner]");
      if (!scrollableContent) return;

      const { scrollTop, scrollHeight, clientHeight } = scrollableContent;
      touchStartInnerEl.current = scrollableContent;
      touchStartInnerScrollTop.current = scrollTop;
      touchStartInnerAtTop.current = scrollTop <= 1;
      touchStartInnerAtBottom.current = scrollTop + clientHeight >= scrollHeight - 1;
    };

    const handleTouchEnd = (e) => {
      if (isAnimating.current) return;

      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      const threshold = 50;

      if (Math.abs(deltaY) < threshold) return;

      const current = findCurrentSection();
      const section = sectionsRef.current[current];
      const isScrollable = section?.dataset.scrollable === "true";

      if (isScrollable && touchStartInnerEl.current) {
        const scrollableContent = touchStartInnerEl.current;
        const didInnerScroll = Math.abs(scrollableContent.scrollTop - touchStartInnerScrollTop.current) > 2;

        if (didInnerScroll) return;

        if (deltaY > 0 && !touchStartInnerAtBottom.current) return;
        if (deltaY < 0 && !touchStartInnerAtTop.current) return;
      }

      if (deltaY > 0) {
        scrollToSection(current + 1);
      } else {
        scrollToSection(current - 1);
      }
    };

    // Keyboard support
    const handleKeyDown = (e) => {
      if (isAnimating.current) return;

      const current = findCurrentSection();

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        scrollToSection(current + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollToSection(current - 1);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    // Lock body scroll so no browser scrollbar appears
    document.body.style.overflow = "hidden";
    // Hide layout footer since we have our own inside the container
    const layoutFooter = document.querySelector("body > footer, main + footer");
    if (layoutFooter) layoutFooter.style.display = "none";

    ScrollTrigger.refresh();

    return () => {
      document.body.style.overflow = "";
      if (layoutFooter) layoutFooter.style.display = "";
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [scrollToSection, findCurrentSection]);

  return (
    <div
      ref={containerRef}
      data-fullpage-scroller
      className="h-[calc(100vh-3.5rem)] overflow-x-hidden overflow-y-auto scrollbar-hide"
    >
      {children}
    </div>
  );
}
