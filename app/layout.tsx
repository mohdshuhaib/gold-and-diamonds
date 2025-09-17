// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'

// Font configuration
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aethelred Jewels - Exquisite Gold & Diamonds',
  description: 'Discover timeless elegance with our handcrafted gold and diamond jewelry.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  )
}