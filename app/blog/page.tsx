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
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:px-8 md:py-12">
      <div className="mb-10 text-center md:mb-12">
        <h1 className="text-2xl font-bold text-dark sm:text-3xl md:text-4xl">
          Finding Comfort in Faith
        </h1>
        <p className="mt-2 text-base text-foreground sm:text-lg">
          Biblical wisdom and compassionate guidance for those grieving the loss of a beloved pet
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post._id}
            className="rounded-xl border border-border bg-white p-4 shadow-sm transition hover:border-primary/30 hover:shadow-md sm:p-6"
          >
            <Link href={post.url} className="group block">
              <h2 className="text-xl font-semibold text-dark group-hover:text-primary sm:text-2xl">
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
