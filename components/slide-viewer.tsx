'use client'

import { useState, useEffect, useRef } from 'react'
import { Slide, getSlideDetails } from '@/lib/course-data'
import { SlideContent } from './slides/slide-content'
import { ProcessFlowAnimation } from './animations/process-flow-animation'
import { NetworkJourneyAnimation } from './animations/network-journey-animation'
import { FileStorageAnimation } from './animations/file-storage-animation'
import { ParsingAnimation } from './animations/parsing-animation'
import { ProcessArchitecture } from './animations/process-architecture'
import { RendererInternals } from './animations/renderer-internals'
import { BrowserArchitecture } from './animations/browser-architecture'
import { DOMTree } from './animations/dom-tree'
import { CSSParsing } from './animations/css-parsing'
import { RenderTree } from './animations/render-tree'
import { BoxModel } from './animations/box-model'
import { FlexboxLayout } from './animations/flexbox-layout'
import { V8Pipeline } from './animations/v8-pipeline'
import { EventLoop } from './animations/event-loop'
import { EventPropagation } from './animations/event-propagation'
import { TransitionIndicator } from './animations/transition-indicator'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface SlideViewerProps {
  moduleId: number
  slides: Slide[]
  moduleName: string
  onBack: () => void
  onProgress: (slide: number) => void
  savedSlide: number
}

const AnimationComponent = ({ animationId }: { animationId?: string }) => {
  if (!animationId) return null

  switch (animationId) {
    case 'process-flow':
      return <ProcessFlowAnimation />
    case 'process-architecture':
      return <ProcessArchitecture />
    case 'renderer-internals':
      return <RendererInternals />
    case 'browser-architecture':
      return <BrowserArchitecture />
    case 'network':
      return <NetworkJourneyAnimation />
    case 'storage':
      return <FileStorageAnimation />
    case 'parsing':
      return <ParsingAnimation />
    case 'dom-tree':
      return <DOMTree />
    case 'css-parsing':
      return <CSSParsing />
    case 'render-tree':
      return <RenderTree />
    case 'box-model':
      return <BoxModel />
    case 'flexbox-layout':
      return <FlexboxLayout />
    case 'v8-pipeline':
      return <V8Pipeline />
    case 'event-loop':
      return <EventLoop />
    case 'event-propagation':
      return <EventPropagation />
    default:
      return null
  }
}

export function SlideViewer({
  moduleId,
  slides,
  moduleName,
  onBack,
  onProgress,
  savedSlide,
}: SlideViewerProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(savedSlide || 0)
  const [showStudyMode, setShowStudyMode] = useState(false)
  const prevIndexRef = useRef(currentSlideIndex)

  useEffect(() => {
    if (prevIndexRef.current !== currentSlideIndex) {
      onProgress(currentSlideIndex)
      prevIndexRef.current = currentSlideIndex
    }
  }, [currentSlideIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentSlideIndex((i) => Math.min(i + 1, slides.length - 1))
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlideIndex((i) => Math.max(i - 1, 0))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [slides.length])

  const currentSlide = slides[currentSlideIndex]
  const isFirst = currentSlideIndex === 0
  const isLast = currentSlideIndex === slides.length - 1
  const animationId = currentSlide.animationId

  return (
    <main className="min-h-screen bg-background pb-32">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <button
                onClick={onBack}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="text-center flex-1">
              <h2 className="text-lg font-semibold text-foreground text-primary">{moduleName}</h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">Study Mode</span>
                <Button
                  variant={showStudyMode ? "default" : "outline"}
                  size="sm"
                  onClick={() => setShowStudyMode(!showStudyMode)}
                  className={showStudyMode ? "bg-primary text-primary-foreground" : ""}
                >
                  {showStudyMode ? "ON" : "OFF"}
                </Button>
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                {currentSlideIndex + 1} / {slides.length}
              </div>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-border rounded-full h-1">
            <div
              className="bg-primary h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentSlideIndex + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>
      </header>

      {/* Slide Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        {animationId && currentSlide.type !== 'Diagram' && (
          <>
            <TransitionIndicator type={animationId as any} show={true} />
            <div className="mb-8 bg-card rounded-lg border border-border p-6">
              <AnimationComponent animationId={animationId} />
            </div>
          </>
        )}

        <div key={currentSlideIndex} className="min-h-[500px] animate-fade-in">
          <SlideContent slide={currentSlide} />

          {/* Detailed Content (Study Mode) */}
          {(() => {
            const slideDetails = getSlideDetails(currentSlide.id)
            const detailedContent = currentSlide.detailedContent || slideDetails.detailedContent
            const keyTerms = currentSlide.keyTerms || slideDetails.keyTerms

            return showStudyMode && detailedContent ? (
              <div className="mt-12 pt-8 border-t border-border animate-slide-up">
                <h3 className="text-2xl font-bebas text-primary mb-6">Detailed Explanation</h3>
                <div
                  className="prose dark:prose-invert max-w-none prose-headings:font-bebas prose-p:font-sans prose-p:text-lg prose-li:font-sans"
                  dangerouslySetInnerHTML={{ __html: detailedContent }}
                />

                {keyTerms && (
                  <div className="mt-8 bg-muted/30 rounded-xl p-6 border border-border">
                    <h4 className="text-xl font-bebas text-foreground mb-4">Key Terms</h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {keyTerms.map((term, index) => (
                        <div key={index} className="bg-background/50 rounded-lg p-4">
                          <dt className="font-bebas text-lg text-primary mb-1">{term.term}</dt>
                          <dd className="text-sm text-muted-foreground font-sans">{term.definition}</dd>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : null
          })()}
        </div>
      </section>

      {/* Navigation - Fixed at bottom */}
      <footer className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between gap-4">
            <Button
              onClick={() => setCurrentSlideIndex((i) => Math.max(i - 1, 0))}
              disabled={isFirst}
              variant="outline"
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex-1 max-w-xs">
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlideIndex(i)}
                    className={`flex-1 h-1 rounded-full transition-all ${i === currentSlideIndex ? 'bg-primary' : 'bg-border hover:bg-muted'
                      }`}
                  />
                ))}
              </div>
            </div>

            <Button
              onClick={() => setCurrentSlideIndex((i) => Math.min(i + 1, slides.length - 1))}
              disabled={isLast}
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="mt-4 text-center text-sm text-muted-foreground">
            Use arrow keys to navigate slides
          </div>
        </div>
      </footer>
    </main>
  )
}
