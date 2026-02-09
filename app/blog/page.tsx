import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Link from 'next/link'

export const metadata = {
  title: 'Articles | Daily Pet Journal',
  description: 'Comfort, guidance, and hope for Christian pet owners navigating grief and loss.',
}

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-dark">
          Finding Comfort in Faith
        </h1>
        <p className="mt-2 text-lg text-foreground">
          Biblical wisdom and compassionate guidance for those grieving the loss of a beloved pet
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post._id}
            className="rounded-xl border border-border bg-white p-6 shadow-sm transition hover:border-primary/30 hover:shadow-md"
          >
            <Link href={post.url} className="group block">
              <h2 className="text-2xl font-semibold text-dark group-hover:text-primary">
                {post.title}
              </h2>
              <time className="mt-2 block text-sm text-light">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <p className="mt-3 text-foreground leading-relaxed">{post.summary}</p>
              {post.tags && post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
