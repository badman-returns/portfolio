import Link from "next/link";
import { client } from "@/sanity/client";
import { allPostsQuery } from "@/sanity/queries";

export default async function Writing() {
  const posts = await client.fetch(allPostsQuery);

  return (
    <section className="mx-auto max-w-4xl px-6 py-20 space-y-14">
  {/* HEADER */}
  <header className="space-y-3">
    <h1 className="text-4xl font-bold tracking-tight">Writing</h1>
    <p className="text-[var(--muted)] max-w-2xl">
      Essays on frontend architecture, production debugging,
      real-time systems, and engineering trade-offs.
    </p>
  </header>

  {/* DIVIDER */}
  <div className="border-t border-[var(--surface-border)]" />

  {/* POSTS */}
  <div className="space-y-10">
    <div className="text-xs font-medium tracking-widest uppercase text-[var(--muted)]">
      2022
    </div>

    <ul className="space-y-8">
      <li className="flex items-start gap-4">
        {/* Bullet */}
        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />

        {/* Content */}
        <div className="space-y-1">
          <Link
            href="/writing/prototypal-inheritance"
            className="text-2xl font-semibold tracking-tight hover:text-[var(--accent)] transition-colors"
          >
            Prototypal Inheritance in Javascript — Easy and Practical Way
          </Link>

          <p className="text-sm text-[var(--muted)]">
            April 13, 2022
          </p>
        </div>
      </li>
    </ul>
  </div>
</section>

  );
}
