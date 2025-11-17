'use client'

import { useState, useEffect } from 'react'
import { HomePage } from '@/components/home-page'
import { SlideViewer } from '@/components/slide-viewer'
import { courseData } from '@/lib/course-data'

export default function Page() {
  const [currentModule, setCurrentModule] = useState<number | null>(null)
  const [progress, setProgress] = useState<Record<number, number>>({})

  useEffect(() => {
    // Load progress from localStorage
    const saved = localStorage.getItem('browserCourseProgress')
    if (saved) {
      setProgress(JSON.parse(saved))
    }
  }, [])

  const saveProgress = (moduleId: number, slide: number) => {
    setProgress((prevProgress) => {
      const newProgress = { ...prevProgress, [moduleId]: slide }
      localStorage.setItem('browserCourseProgress', JSON.stringify(newProgress))
      return newProgress
    })
  }

  const handleModuleSelect = (moduleId: number) => {
    setCurrentModule(moduleId)
  }

  const handleBackToHome = () => {
    setCurrentModule(null)
  }

  if (currentModule !== null) {
    return (
      <SlideViewer
        moduleId={currentModule}
        slides={courseData[currentModule - 1]?.slides || []}
        moduleName={courseData[currentModule - 1]?.name || ''}
        onBack={handleBackToHome}
        onProgress={(slide) => saveProgress(currentModule, slide)}
        savedSlide={progress[currentModule] || 0}
      />
    )
  }

  return <HomePage modules={courseData} onModuleSelect={handleModuleSelect} progress={progress} />
}
