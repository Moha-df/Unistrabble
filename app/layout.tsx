import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Unistrabble',
  description: 'Le jeu de Scrabble réinventé par les étudiants de l\'Unistra',
  generator: 'v0.dev',
  icons: {
    icon: '/unistrabble_icon.png',
  },
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
