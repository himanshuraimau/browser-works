'use client'

import { Module } from '@/lib/course-data'
import { Button } from '@/components/ui/button'

interface ModuleCardProps {
  module: Module
  progressIndex?: number
  onSelect: () => void
}

export function ModuleCard({ module, progressIndex, onSelect }: ModuleCardProps) {
  const hasProgress = typeof progressIndex === 'number'
  const visitedSlides = hasProgress ? Math.min(progressIndex + 1, module.slides.length) : 0
  const progressPercent = Math.round((visitedSlides / module.slides.length) * 100)
  const isComplete = hasProgress && visitedSlides >= module.slides.length
  const ctaLabel = isComplete ? 'Review' : hasProgress ? 'Continue' : 'Start'

  return (
    <div className="group h-full cursor-pointer" onClick={onSelect}>
    <div className="bg-card rounded-lg border border-border overflow-hidden h-full flex flex-col transition-all duration-300 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] group-hover:shadow-[8px_8px_0px_0px_rgba(37,99,235,0.2)] group-hover:-translate-x-1 group-hover:-translate-y-1">
        {/* Module Header */}
        <div className="bg-primary px-6 py-4 border-b-4 border-foreground">
          <div className="text-primary-foreground text-sm font-bold">Module {module.id}</div>
          <h3 className="text-primary-foreground text-2xl font-retro mt-2">{module.name}</h3>
        </div>

        {/* Module Content */}
        <div className="flex-1 px-6 py-4">
          <p className="text-foreground/80 text-base mb-4">{module.description}</p>

          {/* Stats */}
          <div className="flex gap-6 mb-6 text-base">
            <div>
              <span className="font-bold text-foreground">{module.slides.length}</span>
              <span className="text-foreground/80 ml-1">slides</span>
            </div>
            <div>
              <span className="font-bold text-foreground">{module.duration}</span>
              <span className="text-foreground/80 ml-1">min</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-foreground">Progress</span>
              <span className="text-sm font-bold text-primary">{progressPercent}%</span>
            </div>
            <div className="w-full bg-border rounded-full h-3 border-2 border-foreground">
              <div
                className="bg-primary h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="px-6 pb-6 pt-2">
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-3 border-2 border-foreground shadow-md"
              onClick={onSelect}
            >
              {ctaLabel}
            </Button>
        </div>
      </div>  
    </div>
  )
}
