import type { Metadata } from 'next'
import { Libre_Caslon_Text, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const sourceSans = Source_Sans_3({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600', '700'],
})

const libreCaslon = Libre_Caslon_Text({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Manor Painting Co. — Three Generations of Fine Craftsmanship',
  description:
    'Heritage-quality interior and exterior painting by a family firm trusted for three generations. Fine surface preparation, premium materials, and work that endures.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${libreCaslon.variable} bg-[#F5EFE0]`}
    >
      <body className="font-sans antialiased bg-[#F5EFE0] text-[#1F3B2C]">{children}</body>
    </html>
  )
}
