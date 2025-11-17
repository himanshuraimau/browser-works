'use client'

import { Slide } from '@/lib/course-data'
import { Book } from 'lucide-react'

interface TitleSlideProps {
  slide: Slide
}

export function TitleSlide({ slide }: TitleSlideProps) {
  return (
    <div className="min-h-[500px] flex flex-col items-center justify-center text-center py-12">
      <div className="mb-6 animate-slide-up">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Book className="w-10 h-10 text-primary" />
        </div>
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
        {slide.title}
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl animate-slide-up" style={{ animationDelay: '200ms' }}>
        {slide.content}
      </p>
    </div>
  )
}
