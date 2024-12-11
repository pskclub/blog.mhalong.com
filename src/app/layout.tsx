import { ReactNode } from 'react'
import { Noto_Sans_Thai } from 'next/font/google'
import '@/styles/tailwind.css'

const inter = Noto_Sans_Thai({
  subsets: ['latin'],
  display: 'swap',
})

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout ({ children }: Props) {
  return <html lang={'en'} className={'h-full antialiased ' + inter.className}
               suppressHydrationWarning>
  <body className="flex h-full bg-zinc-50 dark:bg-black">
  {children}
  </body>
  </html>
}
