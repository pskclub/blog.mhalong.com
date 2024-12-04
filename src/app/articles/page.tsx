import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'
import { ArticleList } from '@/components/ArticleList'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my thoughts on full-stack development, DevOps practices, and software engineering experiences, collected in chronological order.',
}

export default async function ArticlesIndex () {
  return (
    <SimpleLayout
      title="Writing about software development, system architecture, and tech experiences."
      intro="All of my thoughts on full-stack development, DevOps practices, and software engineering experiences, collected in chronological order."
    >
      <div
        className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          <ArticleList isMain={true}/>
        </div>
      </div>
    </SimpleLayout>
  )
}
