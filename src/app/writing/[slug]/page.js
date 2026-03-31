import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { client } from "@/sanity/client";
import { postBySlugQuery } from "@/sanity/queries";
import { portableTextComponents } from "@/sanity/portableText";
import { urlFor } from "@/sanity/image";

export const revalidate = 60;

export default async function PostPage({ params }) {
  const { slug } = await params;

  const post = await client.fetch(postBySlugQuery, {
    slug,
  });

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-[720px]">
        {/* Back link */}
        <Link
          href="/writing"
          className="group mb-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
        >
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
          Back to writing
        </Link>

        <div className="prose prose-neutral dark:prose-invert">
          {/* Title */}
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">{post.title}</h1>

          {/* Meta */}
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--muted)]">
            <span>
              {post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : "No publish date"}
            </span>
            {post.author?.name && (
              <>
                <span className="text-[var(--surface-border)]">·</span>
                <span>{post.author.name}</span>
              </>
            )}
          </div>

          {/* Categories */}
          {post.categories?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.categories.map((cat) => (
                <span
                  key={cat.title}
                  className="rounded-md border border-[var(--surface-border)] px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-[var(--muted-light)]"
                >
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          {/* Main Image */}
          {post.mainImage ? (
            <img
              src={urlFor(post.mainImage).width(1400).quality(90).url()}
              alt={post.mainImage?.alt || post.title}
              className="mt-8 w-full rounded-2xl border border-[var(--surface-border)]"
            />
          ) : null}

          {/* Body */}
          <div className="mx-auto max-w-[720px] prose prose-neutral dark:prose-invert">
            <PortableText value={post.body} components={portableTextComponents} />
          </div>
        </div>
      </div>
    </article>
  );
}
