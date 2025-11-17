'use client'

import { Slide } from '@/lib/course-data'

interface ContentSlideProps {
  slide: Slide
}

export function ContentSlide({ slide }: ContentSlideProps) {
  const contentArray = typeof slide.content === 'string' 
    ? slide.content.split('\n').filter(line => line.trim())
    : Array.isArray(slide.content) ? slide.content : []

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-foreground mb-8 animate-slide-up">
        {slide.title}
      </h2>
      <div className="space-y-4 animate-slide-up" style={{ animationDelay: '100ms' }}>
        {contentArray.map((item, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
            style={{ animationDelay: `${200 + index * 50}ms` }}
          >
            <p className="text-foreground leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
