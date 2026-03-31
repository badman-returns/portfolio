import Link from "next/link";
import { client } from "@/sanity/client";
import { allPostsQuery } from "@/sanity/queries";

export const revalidate = 60;

export const metadata = {
  title: "Writing",
  description:
    "Essays by Trishnangshu Goswami (Trish) on frontend architecture, production debugging, real-time systems, JavaScript internals, and engineering trade-offs.",
  openGraph: {
    title: "Writing — Trish Goswami",
    description:
      "Frontend engineering essays — architecture, debugging, and real-time systems.",
  },
};

export default async function Writing() {
  const posts = await client.fetch(allPostsQuery);

  const postsByYear = posts.reduce((acc, post) => {
    const year = post.publishedAt
      ? new Date(post.publishedAt).getFullYear().toString()
      : "Unscheduled";

    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  const years = Object.keys(postsByYear).sort((a, b) => {
    if (a === "Unscheduled") return 1;
    if (b === "Unscheduled") return -1;
    return Number(b) - Number(a);
  });

  return (
    <section className="mx-auto max-w-3xl px-4 py-8 space-y-10 sm:px-6 sm:py-12 sm:space-y-14">
      <header className="space-y-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Writing
        </span>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          Essays &amp; notes
        </h1>
        <p className="text-[var(--muted)] max-w-xl leading-relaxed">
          Production debugging stories, frontend architecture decisions, and
          lessons from building real-time systems.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-[var(--muted)]">No published posts yet.</p>
      ) : (
        <div className="space-y-12">
          {years.map((year) => (
            <div key={year}>
              <div className="sticky top-0 z-10 -mx-2 mb-1 flex items-center gap-3 backdrop-blur-sm bg-[var(--background)]/80 px-2 py-3">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--muted-light)]">
                  {year}
                </span>
                <div className="h-px flex-1 bg-[var(--surface-border)]" />
              </div>

              <div>
                {postsByYear[year].map((post, i) => (
                  <Link
                    key={post.slug}
                    href={`/writing/${post.slug}`}
                    className="group -mx-4 flex gap-5 rounded-lg px-4 py-5 transition-colors duration-200 hover:bg-[color:color-mix(in_srgb,var(--surface)_40%,transparent)]"
                  >
                    {/* Date column */}
                    <div className="hidden w-24 shrink-0 pt-1 sm:block">
                      <time className="text-xs text-[var(--muted-light)] tabular-nums">
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString(
                              "en-US",
                              { month: "short", day: "numeric" }
                            )
                          : "—"}
                      </time>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1 space-y-1.5">
                      <div className="flex items-center gap-2">
                        {post.featured && (
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                        )}
                        <h2 className="text-base font-semibold leading-snug tracking-tight transition-colors duration-200 group-hover:text-[var(--accent)]">
                          {post.title}
                        </h2>
                      </div>

                      {post.excerpt && (
                        <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-1">
                          {post.excerpt}
                        </p>
                      )}

                      {post.categories?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-0.5">
                          {post.categories.map((cat) => (
                            <span
                              key={cat.title}
                              className="text-[10px] font-medium uppercase tracking-wider text-[var(--muted-light)]"
                            >
                              {cat.title}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Arrow */}
                    <svg
                      className="mt-1 h-4 w-4 shrink-0 text-[var(--muted-light)]/0 transition-all duration-200 group-hover:text-[var(--accent)] group-hover:translate-x-0.5"
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
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
