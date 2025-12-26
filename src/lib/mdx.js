import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blogs");

export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const fullPath = path.join(BLOG_DIR, file);
      const source = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(source);

      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title || "Untitled",
        date: data.date || null,
      };
    })
    .sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date) - new Date(a.date);
    });
}
