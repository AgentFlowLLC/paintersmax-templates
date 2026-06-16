import type { Metadata } from 'next'
import { Fraunces, Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

const fraunces = Fraunces({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
  // Fraunces is a variable font — no weight array needed
})

export const metadata: Metadata = {
  title: 'Atelier Painting Co. — Fine Interior & Exterior Painting',
  description:
    'Museum-quality craftsmanship for the discerning homeowner. Interior, exterior, cabinet, and specialty painting services delivered with the precision of fine art restoration.',
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
      className={`${archivo.variable} ${fraunces.variable} bg-white`}
    >
      <body className="font-sans antialiased bg-white text-[#111111]">{children}</body>
    </html>
  )
}
