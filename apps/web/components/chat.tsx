'use client'

import * as React from 'react'
import { useChat } from 'ai/react'
import { Button } from '@/components/ui/button'
import { IconSend } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: { role: 'user' | 'assistant'; content: string }[]
  id?: string
}

export function Chat({ className, id, initialMessages, ...props }: ChatProps) {
  const inputRef = React.useRef<HTMLTextAreaElement>(null)
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    append
  } = useChat({
    id,
    initialMessages,
    api: '/api/chat',
    onResponse(response) {
      if (response.status === 401) {
        // Handle unauthorized error
      }
    },
    onFinish() {
      // Handle chat finish
      if (!inputRef.current) return
      inputRef.current.focus()
    }
  })

  React.useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.focus()
  }, [])

  return (
    <div className={cn('flex flex-col space-y-4', className)} {...props}>
      <div className="flex-1 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              'flex w-full items-start gap-4 rounded-lg px-4 py-2',
              message.role === 'user'
                ? 'bg-muted/50'
                : 'bg-primary/5 dark:bg-primary/10'
            )}
          >
            <div className="flex-1 space-y-2 overflow-hidden">
              <div className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0">
                {message.content}
              </div>
            </div>
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center space-x-2"
      >
        <div className="relative flex flex-1">
          <textarea
            ref={inputRef}
            tabIndex={0}
            rows={1}
            value={input}
            onChange={handleInputChange}
            placeholder="Send a message"
            spellCheck={false}
            className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
          />
          <div className="absolute right-0 top-4 sm:right-4">
            <Button
              type="submit"
              size="icon"
              disabled={isLoading || input === ''}
            >
              <IconSend className="h-5 w-5" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}