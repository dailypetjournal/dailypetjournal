import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Comments } from '@/app/components/Comments'
import { MDXContent } from './MDXContent'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = allPosts.find((post) => post.slug === slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Daily Pet Journal`,
    description: post.summary,
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-8">
      <Link
        href="/blog"
        className="mb-8 inline-block text-sm font-medium text-primary hover:underline"
      >
        ← Back to Articles
      </Link>
      <header className="mb-8 border-b border-border pb-8">
        <h1 className="text-4xl font-bold text-dark">{post.title}</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-foreground">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
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
      </header>

      <div className="prose prose-lg max-w-none text-foreground
  [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:text-dark
  [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:text-dark
  [&_p]:text-lg [&_p]:leading-8 [&_p]:mb-6
  [&_strong]:font-semibold [&_strong]:text-dark
  [&_a]:text-primary [&_a]:no-underline hover:[&_a]:underline
  [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-6 [&_blockquote]:text-light
  [&_ul]:my-6 [&_ul]:space-y-2
  [&_ol]:my-6 [&_ol]:space-y-2
  [&_li]:text-lg [&_li]:leading-relaxed">
        <MDXContent code={post.body.code} />
      </div>

      <Comments
        appId={process.env.NEXT_PUBLIC_CUSDIS_APP_ID}
        pageId={post.slug}
        pageUrl={`${process.env.NEXT_PUBLIC_SITE_URL ?? ''}/blog/${post.slug}`}
        pageTitle={post.title}
      />
    </article>
  )
}
