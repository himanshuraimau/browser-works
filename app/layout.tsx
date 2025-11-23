import type { Metadata } from 'next'
import { Patrick_Hand, Roboto } from 'next/font/google' // Removed Space_Mono, added Patrick_Hand
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

const patrickHand = Patrick_Hand({ // New font import
  subsets: ['latin'],
  weight: ['400'], // Patrick Hand only has 400 weight
  variable: '--font-patrick-hand',
})

export const metadata: Metadata = {
  title: 'How Browsers Work - Interactive Learning',
  description: 'Explore the browser processes, network journey, and disk-to-browser architecture with interactive slides'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${patrickHand.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
