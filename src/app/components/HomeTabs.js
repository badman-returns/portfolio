import HomeOverview from "./HomeOverview";
import HomeExperience from "./HomeExperience";

export default function HomeTabs() {
  return (
    <div className="space-y-12 pt-4">
      <div className="space-y-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">Career narrative</span>
        <p className="max-w-2xl text-sm text-[var(--muted)] leading-relaxed">
          A linear walkthrough: how I think about frontend systems, then where I applied those ideas in production.
        </p>
      </div>

      <HomeOverview />

      <div className="mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-[var(--surface-border)] to-transparent" />

      <HomeExperience />
    </div>
  );
}
