'use client'

import type { Article } from '@/lib/articles'
import useSWR from 'swr'
import { fetcher } from '@/hooks/fetcher'
import { Card } from '@/components/Card'
import { formatDate } from '@/lib/formatDate'

function Article ({ article }: { article: Article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.created_at} decorate>
        {formatDate(article.created_at)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function ArticleMain ({ article }: { article: Article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.created_at}
          className="md:hidden"
          decorate
        >
          {formatDate(article.created_at)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.created_at}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.created_at)}
      </Card.Eyebrow>
    </article>
  )
}

export function ArticleList ({ max, isMain }: {
  max?: number,
  isMain?: boolean
}) {
  const { data, error, isLoading } = useSWR<Article[]>(
    'https://dev.to/api/articles?username=pskclub',
    fetcher,
  )
  return isMain ? (data || []).
    map((article) => (
      <ArticleMain key={article.slug} article={article}/>
    )) : (data || []).slice(0, max || (data || []).length).map((article) => (
    <Article key={article.slug} article={article}/>
  ))

}
