'use client'

import { Slide } from '@/lib/course-data'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface CodeSlideProps {
  slide: Slide
}

export function CodeSlide({ slide }: CodeSlideProps) {
  const [copied, setCopied] = useState(false)
  const code = slide.code || slide.content

  const handleCopy = () => {
    navigator.clipboard.writeText(String(code))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-foreground mb-4 animate-slide-up">
        {slide.title}
      </h2>
      {slide.content && (
        <p className="text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
          {slide.content}
        </p>
      )}
      <div className="relative animate-slide-up" style={{ animationDelay: '200ms' }}>
        <button
          onClick={handleCopy}
          className="absolute right-4 top-4 p-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
        <pre className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto font-mono text-sm leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}
