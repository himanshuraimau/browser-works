'use client'

interface TransitionIndicatorProps {
  type: 'process-flow' | 'network' | 'storage' | 'parsing'
  show: boolean
}

export function TransitionIndicator({ type, show }: TransitionIndicatorProps) {
  if (!show) return null

  return (
    <div className="py-6 px-4">
      <div className="flex justify-center items-center gap-2 mb-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"/>
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Transition</span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"/>
      </div>
    </div>
  )
}
