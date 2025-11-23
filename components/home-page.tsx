'use client'

import { Module } from '@/lib/course-data'
import { ModuleCard } from './module-card'
import { ModeToggle } from './mode-toggle'

interface HomePageProps {
  modules: Module[]
  onModuleSelect: (moduleId: number) => void
  progress: Record<number, number>
}

export function HomePage({ modules, onModuleSelect, progress }: HomePageProps) {
  const totalSlides = modules.reduce((acc, mod) => acc + mod.slides.length, 0)
  const completedSlides = Object.entries(progress).reduce((acc, [moduleId, slideIndex]) => {
    const module = modules.find(m => m.id === Number(moduleId))
    if (!module) return acc
    const viewed = Math.min(slideIndex + 1, module.slides.length)
    return acc + viewed
  }, 0)

  const overallProgress = totalSlides > 0 ? Math.round((completedSlides / totalSlides) * 100) : 0

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-4 border-foreground relative">
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="animate-slide-down">
            <h1 className="text-5xl sm:text-7xl font-retro text-foreground mb-4">
              How Browsers Work
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              From your code to pixels on screen. A deep dive into the modern browser.
            </p>
            {/* Overall Progress */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-full max-w-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-foreground">Course Progress</span>
                  <span className="text-sm font-bold text-primary">{overallProgress}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-4 border-2 border-foreground">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-300"
                    style={{ width: `${overallProgress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Modules Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div key={module.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-slide-up">
                <ModuleCard
                  module={module}
                  progressIndex={progress[module.id]}
                  onSelect={() => onModuleSelect(module.id)}
                />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}