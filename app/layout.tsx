import type { Metadata, Viewport } from 'next'
import { Providers } from './providers'
import './globals.css'

const favicon =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' style='stop-color:%2322D3EE'/><stop offset='100%25' style='stop-color:%2310B981'/></linearGradient></defs><rect width='100' height='100' rx='22' fill='url(%23g)'/><text x='50' y='68' font-family='Segoe UI,Arial,sans-serif' font-size='42' font-weight='700' fill='white' text-anchor='middle'>RJ</text></svg>"

export const metadata: Metadata = {
  title: 'Ronielli — Engenheiro de Software Full Stack',
  description:
    'Ronielli Oliveira de Jesus — Engenheiro de Software Full Stack em Vitória da Conquista, BA. Da placa embarcada ao app: produtos para a indústria e o varejo.',
  icons: {
    icon: { url: favicon, type: 'image/svg+xml' },
  },
  openGraph: {
    title: 'Ronielli — Engenheiro de Software Full Stack',
    description:
      'Da placa embarcada ao app: construo produtos completos para a indústria e o varejo.',
    type: 'website',
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
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
