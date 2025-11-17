'use client'

import { Module } from '@/lib/course-data'
import { ModuleCard } from './module-card'

interface HomePageProps {
  modules: Module[]
  onModuleSelect: (moduleId: number) => void
  progress: Record<number, number>
}

export function HomePage({ modules, onModuleSelect, progress }: HomePageProps) {
  const totalSlides = modules.reduce((acc, mod) => acc + mod.slides.length, 0)
  const completedSlides = Object.values(progress).filter((p) => {
    const module = modules.find((m) => m.id === Object.keys(progress).indexOf(String(m.id)))
    return module && p >= module.slides.length - 1
  }).length

  const overallProgress = Math.round((completedSlides / modules.length) * 100)

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-slide-down">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
              How Browsers Work
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              From your code to pixels on screen. A deep dive into the modern browser.
            </p>
            {/* Overall Progress */}
            <div className="flex items-center gap-4">
              <div className="flex-1 max-w-xs">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">Course Progress</span>
                  <span className="text-sm font-semibold text-primary">{overallProgress}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div key={module.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-slide-up">
              <ModuleCard
                module={module}
                progress={progress[module.id] || 0}
                onSelect={() => onModuleSelect(module.id)}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
