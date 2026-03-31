"use client";

import { useEffect } from "react";

export default function HomeScrollBehavior() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const prevHtmlScrollBehavior = html.style.scrollBehavior;
    const prevBodyScrollBehavior = body.style.scrollBehavior;

    html.style.scrollBehavior = "smooth";
    body.style.scrollBehavior = "smooth";

    return () => {
      html.style.scrollBehavior = prevHtmlScrollBehavior;
      body.style.scrollBehavior = prevBodyScrollBehavior;
    };
  }, []);

  return null;
}
