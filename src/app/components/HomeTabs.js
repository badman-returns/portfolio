"use client";

import { useState } from "react";
import HomeOverview from "./HomeOverview";
import HomeExperience from "./HomeExperience";

export default function HomeTabs() {
  const [active, setActive] = useState("overview");

  return (
    <section className="space-y-12">
      {/* Tabs */}
      <div className="flex gap-8 border-b border-[var(--surface-border)]">
        <button
          onClick={() => setActive("overview")}
          className={`pb-3 text-sm font-medium ${
            active === "overview"
              ? "border-b-2 border-[var(--accent)] text-[var(--foreground)]"
              : "text-[var(--muted)]"
          }`}
        >
          Overview
        </button>

        <button
          onClick={() => setActive("experience")}
          className={`pb-3 text-sm font-medium ${
            active === "experience"
              ? "border-b-2 border-[var(--accent)] text-[var(--foreground)]"
              : "text-[var(--muted)]"
          }`}
        >
          Experience
        </button>
      </div>

      {/* Content */}
      {active === "overview" && <HomeOverview />}
      {active === "experience" && <HomeExperience />}
    </section>
  );
}
