import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ tag: string }> };

function getAllTags(): string[] {
  const set = new Set<string>();
  for (const post of allPosts) {
    if (post.tags) for (const tag of post.tags) set.add(tag);
  }
  return Array.from(set);
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({ tag: encodeURIComponent(tag) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  return {
    title: `${decoded} | Tags | Daily Pet Journal`,
    description: `Articles tagged with "${decoded}".`,
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const tags = getAllTags();
  if (!tags.includes(decoded)) notFound();

  const posts = allPosts
    .filter((p) => p.tags && p.tags.includes(decoded))
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
        <h1 className="text-4xl font-bold text-dark">Tag: {decoded}</h1>
        <p className="mt-2 text-foreground">
          {posts.length} article{posts.length !== 1 ? "s" : ""} with this tag.
        </p>
        <ul className="mt-8 space-y-4">
          {posts.map((post) => (
            <li key={post._id}>
              <Link
                href={post.url}
                className="block rounded-lg border border-border bg-white p-4 transition hover:border-primary/30 hover:shadow-sm"
              >
                <span className="font-semibold text-dark hover:text-primary">
                  {post.title}
                </span>
                <time className="mt-1 block text-sm text-light">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex gap-4">
          <Link href="/tags" className="text-primary font-medium hover:underline">
            ← All tags
          </Link>
          <Link href="/blog" className="text-primary font-medium hover:underline">
            All articles
          </Link>
        </div>
      </div>
    </div>
  );
}
