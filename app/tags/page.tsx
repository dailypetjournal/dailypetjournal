import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tags | Daily Pet Journal",
  description: "Browse articles by topic.",
};

function getAllTags(): string[] {
  const set = new Set<string>();
  for (const post of allPosts) {
    if (post.tags) for (const tag of post.tags) set.add(tag);
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
        <h1 className="text-4xl font-bold text-dark">Tags</h1>
        <p className="mt-2 text-foreground">
          Browse articles by topic.
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <li key={tag}>
              <Link
                href={`/tags/${encodeURIComponent(tag)}`}
                className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/20"
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
        {tags.length === 0 && (
          <p className="mt-6 text-foreground">No tags yet.</p>
        )}
        <div className="mt-10">
          <Link href="/blog" className="text-primary font-medium hover:underline">
            ← All Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
