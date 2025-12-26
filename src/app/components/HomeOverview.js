export default function HomeOverview() {
  return (
    <section className="space-y-32 max-w-5xl">
      {/* -------------------------------- */}
      {/* WHAT I WORK ON */}
      {/* -------------------------------- */}
      <section className="max-w-3xl space-y-12">
        <div>
          <h2 className="section-title">What I work on</h2>
          <p className="mt-4 text-[var(--muted)] max-w-2xl">
            These are the kinds of frontend problems I spend most of my time
            thinking about — especially in production systems.
          </p>
        </div>

        <div className="space-y-10">
          <div className="pl-6 border-l border-[var(--surface-border)]">
            <h3 className="font-semibold text-lg">
              Frontend as a long-running system
            </h3>
            <p className="mt-2 text-[var(--muted)] leading-relaxed">
              Treating UI as stateful infrastructure that evolves over hours or
              days — not just a tree of components rendered once and forgotten.
            </p>
          </div>

          <div className="pl-6 border-l border-[var(--surface-border)]">
            <h3 className="font-semibold text-lg">
              Debugging production-only UI failures
            </h3>
            <p className="mt-2 text-[var(--muted)] leading-relaxed">
              Bugs that never reproduce locally — race conditions, stale
              references, timing issues, and assumptions that break under real
              user behavior.
            </p>
          </div>

          <div className="pl-6 border-l border-[var(--surface-border)]">
            <h3 className="font-semibold text-lg">
              State, re-renders, and reference equality
            </h3>
            <p className="mt-2 text-[var(--muted)] leading-relaxed">
              Understanding how identity, memoization, and object lifetimes
              affect correctness and performance in large React applications.
            </p>
          </div>

          <div className="pl-6 border-l border-[var(--surface-border)]">
            <h3 className="font-semibold text-lg">
              Performance regressions that look like UX bugs
            </h3>
            <p className="mt-2 text-[var(--muted)] leading-relaxed">
              Slow renders, unnecessary work, and cascading updates that
              manifest as broken interactions rather than obvious performance
              problems.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl space-y-16">
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Unify Chat */}
          <div className="surface p-6 hover:shadow-lg transition-shadow duration-150">
            <h3 className="text-xl font-semibold text-[var(--foreground)]">
              Unify Chat
            </h3>
            <p className="mt-2 text-[var(--muted)]">
              A real-time customer communication platform that brings SMS,
              WhatsApp, and Email into a single inbox. Designed to help teams
              manage customer conversations efficiently across channels with a
              clean, responsive interface.
            </p>

            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/badman-returns/unify-chat"
                target="_blank"
                className="text-sm font-medium text-[var(--accent)] hover:underline"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Photosplash */}
          <div className="surface p-6 hover:shadow-lg transition-shadow duration-150">
            <h3 className="text-xl font-semibold text-[var(--foreground)]">
              Photosplash
            </h3>
            <p className="mt-2 text-[var(--muted)]">
              A photo discovery application built with React and powered by the
              Unsplash API. It allows users to search, explore, and browse
              high-quality images seamlessly, with infinite scrolling and a
              fast, intuitive user experience.
            </p>

            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/badman-returns/photosplash"
                target="_blank"
                className="text-sm font-medium text-[var(--accent)] hover:underline"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Chat App */}
          <div className="surface p-6 hover:shadow-lg transition-shadow duration-150">
            <h3 className="text-xl font-semibold text-[var(--foreground)]">
              Chat App
            </h3>
            <p className="mt-2 text-[var(--muted)]">
              A multi-user chat application focused on real-time messaging and
              message history. Built to explore chat UI patterns, state
              management, and data synchronization using a simple backend and
              polling-based updates.
            </p>

            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/badman-returns/chat-app"
                target="_blank"
                className="text-sm font-medium text-[var(--accent)] hover:underline"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl space-y-5">
        <div className="max-w-2xl">
          <h2 className="section-title">Skills & tools</h2>
          <p className="mt-4 text-[var(--muted)]">
            I optimize for depth in a few areas rather than shallow familiarity
            across many tools.
          </p>
        </div>

        <div className="border-t border-[var(--surface-border)] pt-12 grid grid-cols-1 lg:grid-cols-3 gap-14">
          {[
            {
              title: "Frontend",
              items: [
                "React",
                "TypeScript",
                "JavaScript (ES6+)",
                "HTML",
                "CSS",
                "Tailwind CSS",
              ],
            },
            {
              title: "Backend",
              items: [
                "Node.js",
                "PostgreSQL",
                "Redis",
                "WebSockets",
                "REST APIs",
              ],
            },
            {
              title: "Infrastructure & tooling",
              items: [
                "Docker",
                "Git & GitHub",
                "CI/CD pipelines",
                "Sanity CMS",
              ],
            },
          ].map((col) => (
            <div key={col.title} className="relative pl-4">
              <span className="absolute left-0 top-0 h-full w-px bg-[var(--surface-border)]" />

              <div className="flex items-center gap-3 mb-4">
                <span className="h-2 w-2 bg-[var(--accent)] rounded-sm" />
                <h3 className="font-semibold tracking-tight">{col.title}</h3>
              </div>

              <ul className="space-y-2 text-[var(--muted)]">
                {col.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------- */}
      {/* HOW I THINK */}
      {/* -------------------------------- */}
      <section className="max-w-5xl space-y-12">
        <div>
          <h2 className="section-title">How I think</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Core belief */}
          <div className="relative pl-6">
            <span className="absolute left-0 top-1 h-full w-px bg-[var(--surface-border)]" />
            <p className="text-lg font-medium leading-relaxed">
              Frontend systems are long-running, stateful machines — not just
              collections of components.
            </p>
          </div>

          {/* Expansion */}
          <div className="text-[var(--muted)] space-y-4 leading-relaxed">
            <p>
              Most serious UI failures I’ve debugged were not visual issues.
              They emerged from performance regressions, unstable references, or
              incorrect assumptions about state and timing.
            </p>

            <p>
              These problems often surface as broken UX, even though the root
              cause lives deep in rendering behavior, data flow, or lifecycle
              management.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------- */}
      {/* CURRENT FOCUS */}
      {/* -------------------------------- */}
      <section className="max-w-5xl space-y-12">
        <div>
          <h2 className="section-title">Current focus</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ul className="space-y-6 text-[var(--muted)]">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]/60" />
              <span>Writing deeper frontend debugging stories</span>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]/60" />
              <span>Learning Go to reason about systems more clearly</span>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]/60" />
              <span>Building mental health technology with real users</span>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]/60" />
              <span>Improving architectural clarity in complex UIs</span>
            </li>
          </ul>

          {/* Context panel */}
          <div className="surface p-8 h-fit">
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              This focus reflects where I’m currently investing time — writing,
              learning, and building in areas that sharpen my understanding of
              long-running systems and real-world constraints.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
