'use client'

import { Slide } from '@/lib/course-data'
import { BrowserArchitecture } from '@/components/animations/browser-architecture'
import { TCPHandshake } from '@/components/animations/tcp-handshake'
import { StorageAnimation } from '@/components/animations/storage-animation'
import { DOMTree } from '@/components/animations/dom-tree'
import { CSSParsing } from '@/components/animations/css-parsing'
import { RenderTree } from '@/components/animations/render-tree'
import { FlexboxLayout } from '@/components/animations/flexbox-layout'
import { V8Pipeline } from '@/components/animations/v8-pipeline'
import { EventLoop } from '@/components/animations/event-loop'
import { BoxModel } from '@/components/animations/box-model'
import { EventPropagation } from '@/components/animations/event-propagation'

const animationMap: Record<string, React.ComponentType> = {
  'browser-architecture': BrowserArchitecture,
  'tcp-handshake': TCPHandshake,
  'storage': StorageAnimation,
  'dom-tree': DOMTree,
  'css-parsing': CSSParsing,
  'render-tree': RenderTree,
  'flexbox-layout': FlexboxLayout,
  'v8-pipeline': V8Pipeline,
  'event-loop': EventLoop,
  'box-model': BoxModel,
  'event-propagation': EventPropagation,
}

interface DiagramSlideProps {
  slide: Slide
}

export function DiagramSlide({ slide }: DiagramSlideProps) {
  const contentArray = typeof slide.content === 'string' 
    ? slide.content.split('\n').filter(line => line.trim())
    : Array.isArray(slide.content) ? slide.content : []

  const AnimationComponent = slide.animationId ? animationMap[slide.animationId] : null

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-foreground mb-8 animate-slide-up">
        {slide.title}
      </h2>
      
      {/* Animated diagram area */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary rounded-lg p-8 mb-8 min-h-80 flex items-center justify-center">
        {AnimationComponent ? (
          <AnimationComponent />
        ) : (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <p className="text-muted-foreground text-sm">Visual diagram will be rendered here</p>
          </div>
        )}
      </div>

      {/* Description */}
      {contentArray.length > 0 && (
        <div className="space-y-3 animate-slide-up" style={{ animationDelay: '200ms' }}>
          {contentArray.map((item, index) => (
            <div key={index} className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold text-primary">
                {index + 1}
              </div>
              <p className="text-foreground leading-relaxed pt-0.5">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
