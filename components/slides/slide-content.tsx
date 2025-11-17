'use client'

import { Slide } from '@/lib/course-data'
import { TitleSlide } from './title-slide'
import { ContentSlide } from './content-slide'
import { CodeSlide } from './code-slide'
import { DiagramSlide } from './diagram-slide'
import { StepsSlide } from './steps-slide'

interface SlideContentProps {
  slide: Slide
}

export function SlideContent({ slide }: SlideContentProps) {
  switch (slide.type) {
    case 'Title':
      return <TitleSlide slide={slide} />
    case 'Content':
      return <ContentSlide slide={slide} />
    case 'Code':
      return <CodeSlide slide={slide} />
    case 'Diagram':
      return <DiagramSlide slide={slide} />
    case 'Steps':
      return <StepsSlide slide={slide} />
    default:
      return <div>Unknown slide type</div>
  }
}
