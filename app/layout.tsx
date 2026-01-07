import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })

export const metadata: Metadata = {
  title: 'Vidushi Tyagi | Video Editor',
  description: 'Creative Video Editor Portfolio. Ads, Motion, Social, Stories.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="bg-[#0a0a0a] text-white antialiased selection:bg-white selection:text-black" suppressHydrationWarning>{children}</body>
    </html>
  )
}
