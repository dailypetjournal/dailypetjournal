import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Comments } from '@/app/components/Comments'
import { MDXContent } from './MDXContent'

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://dailypetjournal.com'
const SITE_NAME = 'Daily Pet Journal'

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

  const url = `${BASE}/blog/${post.slug}`
  const title = post.title
  const description = post.summary
  const publishedTime = new Date(post.date).toISOString()

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      publishedTime,
      siteName: SITE_NAME,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

function buildArticleSchema(post: (typeof allPosts)[0]) {
  const url = `${BASE}/blog/${post.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE,
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  const articleSchema = buildArticleSchema(post)

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 md:px-8 md:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Link
        href="/blog"
        className="mb-6 inline-block py-2 text-sm font-medium text-primary hover:underline md:mb-8"
      >
        ← Back to Articles
      </Link>
      <header className="mb-6 border-b border-border pb-6 md:mb-8 md:pb-8">
        <h1 className="text-2xl font-bold leading-tight text-dark sm:text-3xl md:text-4xl">{post.title}</h1>
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
        appId={
          process.env.NEXT_PUBLIC_CUSDIS_APP_ID ||
          'd435766a-3770-45d7-8ba2-eb8161ce9d7e'
        }
        pageId={post.slug}
        pageUrl={`${process.env.NEXT_PUBLIC_SITE_URL ?? ''}/blog/${post.slug}`}
        pageTitle={post.title}
      />
    </article>
  )
}
