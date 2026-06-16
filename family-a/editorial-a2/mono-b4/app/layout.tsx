import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const anton = Anton({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Apex Painting | No Nonsense. Perfect Finish.',
  description:
    'Maximum-contrast professional painting. NYC-grade discipline, Chicago-area service. Residential and commercial coatings done right.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
