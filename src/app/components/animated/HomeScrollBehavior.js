"use client";

import { useEffect } from "react";

export default function HomeScrollBehavior() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const SNAP_PADDING_TOP = 56;

    const prevHtmlScrollBehavior = html.style.scrollBehavior;
    const prevBodyScrollBehavior = body.style.scrollBehavior;
    const prevHtmlSnap = html.style.scrollSnapType;
    const prevBodySnap = body.style.scrollSnapType;
    const prevHtmlSnapPaddingTop = html.style.scrollPaddingTop;
    const prevBodySnapPaddingTop = body.style.scrollPaddingTop;

    const setSnapEnabled = (enabled) => {
      const snapType = enabled ? "y mandatory" : "none";
      html.style.scrollSnapType = snapType;
      body.style.scrollSnapType = snapType;
    };

    html.style.scrollBehavior = "smooth";
    body.style.scrollBehavior = "smooth";
    setSnapEnabled(true);
    html.style.scrollPaddingTop = "3.5rem";
    body.style.scrollPaddingTop = "3.5rem";

    let snapDisabledAfterStop = false;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const isScrollingUp = currentY < lastScrollY;
      const isScrollingDown = currentY > lastScrollY;
      lastScrollY = currentY;

      const snapStop = document.querySelector("[data-snap-stop]");
      if (!snapStop) return;

      const snapStopTop = window.scrollY + snapStop.getBoundingClientRect().top - SNAP_PADDING_TOP;

      if (!snapDisabledAfterStop && isScrollingDown && currentY >= snapStopTop) {
        setSnapEnabled(false);
        snapDisabledAfterStop = true;
        return;
      }

      if (snapDisabledAfterStop && isScrollingUp) {
        setSnapEnabled(true);
        snapDisabledAfterStop = false;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      html.style.scrollBehavior = prevHtmlScrollBehavior;
      body.style.scrollBehavior = prevBodyScrollBehavior;
      html.style.scrollSnapType = prevHtmlSnap;
      body.style.scrollSnapType = prevBodySnap;
      html.style.scrollPaddingTop = prevHtmlSnapPaddingTop;
      body.style.scrollPaddingTop = prevBodySnapPaddingTop;
    };
  }, []);

  return null;
}
