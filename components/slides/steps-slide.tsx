'use client'

import { Slide } from '@/lib/course-data'

interface StepsSlideProps {
  slide: Slide
}

export function StepsSlide({ slide }: StepsSlideProps) {
  const contentArray = typeof slide.content === 'string' 
    ? slide.content.split('\n').filter(line => line.trim())
    : Array.isArray(slide.content) ? slide.content : []

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-foreground mb-8 animate-slide-up">
        {slide.title}
      </h2>
      
      <div className="relative animate-slide-up" style={{ animationDelay: '100ms' }}>
        {/* Steps */}
        <div className="space-y-6">
          {contentArray.map((step, index) => (
            <div key={index} className="flex gap-6">
              {/* Step Number and Connector */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                {index < contentArray.length - 1 && (
                  <div className="w-1 h-12 bg-primary/30 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <p className="text-foreground leading-relaxed text-lg">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
