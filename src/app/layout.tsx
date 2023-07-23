import '../styles/global.scss'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { siteConfig } from "../config/site"
import { Header } from '@/components/Header/header'
import { Footer } from '@/components/Footer/footer'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["400", "500", "700"]
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`
  },
  description: siteConfig.description,
  keywords: [
    "TBB",
    "Store",
  ],
  authors: [
    {
      name: "felipeboliveira",
      url: "https://felipe-b-oliveira.github.io/",
    },
  ],
  creator: "felipeboliveira",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon-16x16.svg",
    apple: "/apple-touch-icon.svg",
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/favicon/favicon.svg" type="image/svg" />
      </head>
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
