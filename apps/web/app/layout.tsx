import { Analytics } from '@vercel/analytics/react'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import { Providers } from '@/components/providers'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'

import '@/styles/globals.css'

export const metadata = {
  title: 'CodeVenger - Advanced AI-Powered UI Generation',
  description: 'Generate beautiful, type-safe, and accessible UI components with AI',
  metadataBase: new URL('https://codevenger.vercel.app'),
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <Providers>
          {children}
          <Toaster />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}