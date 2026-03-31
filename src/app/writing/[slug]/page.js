import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
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
    <article className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-[720px] prose prose-neutral dark:prose-invert">
        {/* Title */}
        <h1 className="text-4xl font-bold">{post.title}</h1>

        {/* Meta */}
        <p className="meta mt-2">
          {post.publishedAt
            ? new Date(post.publishedAt).toDateString()
            : "No publish date"}
          {post.author?.name ? ` · ${post.author.name}` : ""}
        </p>

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
    </article>
  );
}
