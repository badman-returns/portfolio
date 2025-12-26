import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { postBySlugQuery } from "@/sanity/queries";
import { portableTextComponents } from "@/sanity/portableText";

export default async function PostPage({ params }) {
  const post = await client.fetch(postBySlugQuery, {
    slug: params.slug,
  });

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-[720px] prose prose-neutral dark:prose-invert">
        {/* Title */}
        <h1 className="text-4xl font-bold">{post.title}</h1>

        {/* Meta */}
        <p className="meta mt-2">
          {new Date(post.publishedAt).toDateString()} · {post.author.name}
        </p>

        {/* Body */}
        <div className="mx-auto max-w-[720px] prose prose-neutral dark:prose-invert">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>
      </div>
    </article>
  );
}
