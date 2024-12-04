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
      <Card.Eyebrow as="time" dateTime={article.published_at} decorate>
        {formatDate(article.published_at)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      {article.tag_list && <div className={'flex flex-wrap gap-3 mt-3 relative'}>
        {(article.tag_list || []).map((v) => <span
          className="inline-flex items-center text-xs font-medium">#{v}</span>)
        }
      </div>}
      <div className={'flex justify-between items-end w-full'}>
        <Card.Cta>Read article</Card.Cta>
        <p className={'text-xs text-zinc-600 dark:text-zinc-400 relative'}>{article.reading_time_minutes} min read</p>
      </div>
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
          dateTime={article.published_at}
          className="md:hidden"
          decorate
        >
          {formatDate(article.published_at)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        {article.tag_list && <div className={'flex gap-3 mt-3 flex-wrap relative'}>
          {(article.tag_list || []).map((v) => <span
            className="inline-flex items-center text-xs font-medium">#{v}</span>)
          }
        </div>}
        <div className={'flex justify-between items-end w-full'}>
          <Card.Cta>Read article</Card.Cta>
          <p className={'text-xs text-zinc-600 dark:text-zinc-400 relative'}>{article.reading_time_minutes} min read</p>
        </div>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.published_at}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.published_at)}
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
