import { type Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import BaseLayout from '@/components/BaseLayout'

export function generateStaticParams () {
  return routing.locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: {
    template: '%s - I’m Passakon, A Software Engineer & Full Stack Developer',
    default:
      'Passakon Puttasuwan - Software Engineer & Full Stack Developer',
  },
  description:
    'I’m Passakon, Experienced Full Stack Engineer with extensive expertise in backend development using Golang and frontend development with Vue.js/Nuxt.js. Proven track record in implementing DevOps practices and building scalable enterprise solutions. Strong focus on system architecture, code quality, and automated deployment pipelines.',
}

export default async function RootLayout ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale || 'en')

  return (
    <BaseLayout locale={locale}>{children}</BaseLayout>
  )
}
