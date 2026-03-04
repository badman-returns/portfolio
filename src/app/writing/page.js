import Link from "next/link";
import { client } from "@/sanity/client";
import { allPostsQuery } from "@/sanity/queries";

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
    <section className="mx-auto max-w-4xl px-6 py-20 space-y-14">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Writing</h1>
        <p className="text-[var(--muted)] max-w-2xl">
          Essays on frontend architecture, production debugging,
          real-time systems, and engineering trade-offs.
        </p>
      </header>

      <div className="border-t border-[var(--surface-border)]" />

      {posts.length === 0 ? (
        <p className="text-[var(--muted)]">No published posts yet.</p>
      ) : (
        <div className="space-y-12">
          {years.map((year) => (
            <div key={year} className="space-y-10">
              <div className="text-xs font-medium tracking-widest uppercase text-[var(--muted)]">
                {year}
              </div>

              <ul className="space-y-8">
                {postsByYear[year].map((post) => (
                  <li key={post.slug} className="flex items-start gap-4">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />

                    <div className="space-y-1">
                      <Link
                        href={`/writing/${post.slug}`}
                        className="text-2xl font-semibold tracking-tight hover:text-[var(--accent)] transition-colors"
                      >
                        {post.title}
                      </Link>

                      <p className="text-sm text-[var(--muted)]">
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })
                          : "No publish date"}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>

  );
}
