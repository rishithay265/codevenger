'use client'

import * as React from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { IconGitHub } from '@/components/ui/icons'

interface ShellProps {
  children: React.ReactNode
}

export function Shell({ children }: ShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">CodeVenger</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/rishithay265/codevenger"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconGitHub />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="sticky bottom-0 z-50 w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Built by{' '}
            <a
              href="https://github.com/rishithay265"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              rishithay265
            </a>
          </p>
          <p className="text-sm text-muted-foreground">
            Powered by{' '}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Next.js
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}