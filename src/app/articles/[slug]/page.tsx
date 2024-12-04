import React from 'react'
import { Article } from '@/lib/articles'
import { ArticleLayout } from '@/components/ArticleLayout'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    slug: string
  }
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function ArticlePage ({ params }: PageProps) {
  try {
    const res = await fetch(
      `https://dev.to/api/articles/pskclub/${params.slug}`,
      { cache: 'no-store' },
    )

    if (!res.ok) {
      return notFound()
    }

    const article: Article = await res.json()

    return <ArticleLayout article={article} isLoading={false}/>
  } catch (error) {
    console.error('Failed to fetch article:', error)
    return notFound()
  }
}
