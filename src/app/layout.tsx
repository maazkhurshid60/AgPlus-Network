import type { Metadata } from 'next'
import { Geist, Geist_Mono, Grape_Nuts } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const grapeNuts = Grape_Nuts({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-grape-nuts-var',
})

export const metadata: Metadata = {
  title: 'AgPlus Network — The Pulse on Fresh Produce',
  description:
    'Access reliable USDA verified data, daily reports, and real-time market movements all simplified into one powerful dashboard.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${grapeNuts.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
