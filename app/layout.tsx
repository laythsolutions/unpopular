import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Unlettrd | Philosophy and Poetry for the Present Moment',
  description: 'Examining current and historical events through the lens of accessible philosophy, distilling complex truths into poetry that resonates.',
  keywords: ['philosophy', 'poetry', 'magazine', 'current events', 'literary'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
