import { Metadata } from 'next'
import { Chat } from '@/components/chat'
import { Shell } from '@/components/shell'

export const metadata: Metadata = {
  title: 'CodeVenger - AI-Powered UI Generation',
  description: 'Generate beautiful, type-safe, and accessible UI components with AI',
}

export default function HomePage() {
  return (
    <Shell>
      <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-background">
        <main className="flex flex-col items-center flex-1 px-4 sm:px-20 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            CodeVenger
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Generate beautiful, type-safe, and accessible UI components with AI. Built with Next.js 14,
            Tailwind CSS, and Radix UI.
          </p>
          <div className="w-full max-w-4xl mt-8">
            <Chat />
          </div>
        </main>
      </div>
    </Shell>
  )
}