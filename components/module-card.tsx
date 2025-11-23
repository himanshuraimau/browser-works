'use client'

import { Module } from '@/lib/course-data'
import { Button } from '@/components/ui/button'

interface ModuleCardProps {
  module: Module
  progress: number
  onSelect: () => void
}

export function ModuleCard({ module, progress, onSelect }: ModuleCardProps) {
  const progressPercent = Math.round(((progress + 1) / module.slides.length) * 100)
  const isComplete = progress >= module.slides.length - 1

  return (
    <div className="group h-full cursor-pointer transition-all duration-300 hover:-translate-y-1" onClick={onSelect}>
      <div className="bg-card rounded-lg shadow-md border-l-4 border-primary overflow-hidden h-full flex flex-col transition-shadow duration-300 group-hover:shadow-lg">
        {/* Module Header */}
        <div className="bg-primary px-6 py-4">
          <div className="text-white text-sm font-semibold">Module {module.id}</div>
          <h3 className="text-white text-lg font-bold mt-2">{module.name}</h3>
        </div>

        {/* Module Content */}
        <div className="flex-1 px-6 py-4">
          <p className="text-muted-foreground text-sm mb-4">{module.description}</p>

          {/* Stats */}
          <div className="flex gap-4 mb-6 text-sm">
            <div>
              <span className="font-semibold text-foreground">{module.slides.length}</span>
              <span className="text-muted-foreground ml-1">slides</span>
            </div>
            <div>
              <span className="font-semibold text-foreground">{module.duration}</span>
              <span className="text-muted-foreground ml-1">min</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium text-foreground">Progress</span>
              <span className="text-xs font-semibold text-primary">{progressPercent}%</span>
            </div>
            <div className="w-full bg-border rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="px-6 pb-4">
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            onClick={onSelect}
          >
            {isComplete ? 'Review' : progress > 0 ? 'Continue' : 'Start'}
          </Button>
        </div>
      </div>
    </div>
  )
}
