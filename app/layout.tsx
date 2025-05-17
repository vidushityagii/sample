import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vidushi Tyagi',
  description: 'Vidushi Tyagi',
  generator: 'Vidushi Tyagi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
