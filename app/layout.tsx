import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'DRAGOPUMP | The Ancient Power Awakens',
  description: 'Dragopump (DGP) is a revolutionary Solana token powered by ancient forces. Join the greatest pump in crypto history with lightning-fast transactions and deflationary tokenomics.',
  generator: 'Next.js',
  applicationName: 'Dragopump',
  keywords: ['Dragopump', 'DGP', 'Solana', 'Cryptocurrency', 'Token', 'Defi', 'Crypto'],
  authors: [{ name: 'Dragopump Team' }],
  creator: 'Dragopump Team',
  publisher: 'Dragopump',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dragopump.com'),
  openGraph: {
    title: 'DRAGOPUMP | The Ancient Power Awakens',
    description: 'Join the greatest pump in crypto history. The dragon has awakened.',
    url: 'https://dragopump.com',
    siteName: 'Dragopump',
    images: [
      {
        url: '/dragopump-logo.jpeg',
        width: 800,
        height: 800,
        alt: 'Dragopump Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DRAGOPUMP | The Ancient Power Awakens',
    description: 'Join the greatest pump in crypto history. The dragon has awakened.',
    images: ['/dragopump-logo.jpeg'],
    creator: '@dragopump',
    site: '@dragopump',
  },
  icons: {
    icon: [
      { url: '/dragopump-logo.jpeg', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/dragopump-logo.jpeg' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#00FF00',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <link rel="icon" href="/dragopump-logo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/dragopump-logo.jpeg" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  )
}
