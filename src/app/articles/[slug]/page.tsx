import React from 'react'
import type { Article } from '@/lib/articles'
import { ArticleLayout } from '@/components/ArticleLayout'
import { notFound } from 'next/navigation'
import type { Metadata, ResolvingMetadata } from 'next'

interface PageProps {
  params: {
    slug: string
  }
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

// Fetch article data
async function getArticle (slug: string): Promise<Article> {
  try {
    const res = await fetch(
      `https://dev.to/api/articles/pskclub/${slug}`,
      { cache: 'no-store' },
    )

    if (!res.ok) {
      throw new Error('Article not found')
    }

    return res.json()
  } catch (error) {
    console.error('Failed to fetch article:', error)
    throw error
  }
}

// Generate metadata for the page
export async function generateMetadata (
  { params }: PageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  try {
    const article = await getArticle(params.slug)

    return {
      title: article.title,
      description: article.description,
      openGraph: {
        title: article.title,
        description: article.description,
        type: 'article',
        publishedTime: article.published_at,
        authors: ['Passakon Puttasuwan'],
        images: [
          {
            url: article.cover_image || '',
            width: 1200,
            height: 630,
            alt: article.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: article.title,
        description: article.description,
        images: [article.cover_image || ''],
      },
    }
  } catch (error) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found',
    }
  }
}

export default async function ArticlePage ({ params }: PageProps) {
  try {
    const article = await getArticle(params.slug)
    return <ArticleLayout article={article} isLoading={false}/>
  } catch (error) {
    return notFound()
  }
}
