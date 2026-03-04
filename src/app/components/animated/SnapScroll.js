"use client";

import { useEffect, useRef } from "react";

export default function SnapScroll({ children }) {
  const containerRef = useRef(null);
  const isSnapping = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const heroSection = containerRef.current?.querySelector('[data-snap="hero"]');
    const contentSection = containerRef.current?.querySelector('[data-snap="content"]');
    if (!heroSection || !contentSection) return;

    const handleWheel = (e) => {
      if (isSnapping.current) {
        e.preventDefault();
        return;
      }

      const heroRect = heroSection.getBoundingClientRect();
      const heroBottom = heroRect.bottom;
      const heroTop = heroRect.top;

      // Scrolling DOWN while hero is still mostly visible
      if (e.deltaY > 0 && heroTop <= 0 && heroBottom > window.innerHeight * 0.3) {
        e.preventDefault();
        isSnapping.current = true;
        contentSection.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          isSnapping.current = false;
        }, 1000);
      }

      // Scrolling UP while content section is at top
      if (e.deltaY < 0) {
        const contentRect = contentSection.getBoundingClientRect();
        if (contentRect.top >= -10 && contentRect.top <= 80) {
          e.preventDefault();
          isSnapping.current = true;
          window.scrollTo({ top: 0, behavior: "smooth" });
          setTimeout(() => {
            isSnapping.current = false;
          }, 1000);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
