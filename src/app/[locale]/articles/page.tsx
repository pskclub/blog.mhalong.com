import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'
import { ArticleList } from '@/components/ArticleList'
import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my thoughts on full-stack development, DevOps practices, and software engineering experiences, collected in chronological order.',
}

export default function ArticlesIndex ({ params: { locale } }: {
  params: { locale: string }
}) {
  setRequestLocale(locale)
  const t = useTranslations('articles')
  return (
    <SimpleLayout
      title={t("title")}
      intro={t("intro")}
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          <ArticleList isMain={true}/>
        </div>
      </div>
    </SimpleLayout>
  )
}
