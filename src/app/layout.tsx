import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - I’m Passakon, A Software Engineer & Full Stack Developer',
    default:
      'Passakon Puttasuwan - Software Engineer & Full Stack Developer',
  },
  description:
    'I’m Passakon, Experienced Full Stack Engineer with extensive expertise in backend development using Golang and frontend development with Vue.js/Nuxt.js. Proven track record in implementing DevOps practices and building scalable enterprise solutions. Strong focus on system architecture, code quality, and automated deployment pipelines.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
    <body className="flex h-full bg-zinc-50 dark:bg-black">
    <Providers>
      <div className="flex w-full">
        <Layout>{children}</Layout>
      </div>
    </Providers>
    </body>
    </html>
  )
}
