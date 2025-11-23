'use client'

import { useState, useEffect, useRef } from 'react'
import { Slide } from '@/lib/course-data'
import { SlideContent } from './slides/slide-content'
import { ProcessFlowAnimation } from './animations/process-flow-animation'
import { NetworkJourneyAnimation } from './animations/network-journey-animation'
import { FileStorageAnimation } from './animations/file-storage-animation'
import { ParsingAnimation } from './animations/parsing-animation'
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

const getAnimationType = (moduleId: number, currentSlideIndex: number) => {
  if (moduleId === 1 && currentSlideIndex === 2) return 'process-flow'
  if (moduleId === 2 && currentSlideIndex === 8) return 'network'
  if (moduleId === 3 && currentSlideIndex === 17) return 'storage'
  if (moduleId === 4 && currentSlideIndex === 22) return 'parsing'
  return null
}

const AnimationComponent = ({ type }: { type: string | null }) => {
  if (!type) return null
  switch (type) {
    case 'process-flow':
      return <ProcessFlowAnimation />
    case 'network':
      return <NetworkJourneyAnimation />
    case 'storage':
      return <FileStorageAnimation />
    case 'parsing':
      return <ParsingAnimation />
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
  const animationType = getAnimationType(moduleId, currentSlideIndex)

  return (
    <main className="min-h-screen bg-background">
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
              <h2 className="text-lg font-semibold text-foreground">{moduleName}</h2>
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              {currentSlideIndex + 1} / {slides.length}
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
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-32">
        {animationType && (
          <>
            <TransitionIndicator type={animationType as any} show={true} />
            <div className="mb-8 bg-card rounded-lg border border-border p-6">
              <AnimationComponent type={animationType} />
            </div>
          </>
        )}

        <div key={currentSlideIndex} className="min-h-[500px] animate-fade-in">
          <SlideContent slide={currentSlide} />
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
