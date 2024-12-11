import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { Noto_Sans_Thai } from 'next/font/google'
import { Providers } from '@/app/[locale]/providers'
import { Layout } from '@/components/Layout'

const inter = Noto_Sans_Thai({
  subsets: ['latin'],
  display: 'swap',
})

export default async function BaseLayout ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale} className={'h-full antialiased ' + inter.className}
          suppressHydrationWarning>
    <body className="flex h-full bg-zinc-50 dark:bg-black">
    <NextIntlClientProvider messages={messages}>
      <Providers>
        <div className="flex w-full">
          <Layout>{children}</Layout>
        </div>
      </Providers>
    </NextIntlClientProvider>
    </body>
    </html>
  )
}
