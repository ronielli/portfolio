import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from './providers'
import './globals.css'

const roboto = localFont({
  src: [
    { path: './fonts/roboto-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/roboto-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/roboto-700.woff2', weight: '700', style: 'normal' },
    { path: './fonts/roboto-900.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-roboto',
  display: 'swap',
})

const favicon =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' style='stop-color:%2322D3EE'/><stop offset='100%25' style='stop-color:%2310B981'/></linearGradient></defs><rect width='100' height='100' rx='22' fill='url(%23g)'/><text x='50' y='68' font-family='Segoe UI,Arial,sans-serif' font-size='42' font-weight='700' fill='white' text-anchor='middle'>RJ</text></svg>"

const siteUrl = 'https://ronielli.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Ronielli — Engenheiro de Software Full Stack',
  description:
    'Ronielli Oliveira de Jesus — Engenheiro de Software Full Stack em Vitória da Conquista, BA. Da placa embarcada ao app: produtos para a indústria e o varejo.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: { url: favicon, type: 'image/svg+xml' },
  },
  openGraph: {
    title: 'Ronielli — Engenheiro de Software Full Stack',
    description:
      'Da placa embarcada ao app: construo produtos completos para a indústria e o varejo.',
    url: siteUrl,
    siteName: 'Ronielli',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ronielli — Engenheiro de Software Full Stack',
    description:
      'Da placa embarcada ao app: construo produtos completos para a indústria e o varejo.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B1120',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={roboto.variable} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
