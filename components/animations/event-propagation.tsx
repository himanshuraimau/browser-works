'use client'

export function EventPropagation() {
  return (
    <div className="flex items-center justify-center py-8">
      <svg width="500" height="280" viewBox="0 0 500 280" className="max-w-full">
        <defs>
          <style>{`
            @keyframes down { 0% { cy: 40; } 33% { cy: 120; } 66% { cy: 120; } 100% { cy: 40; } }
            @keyframes up { 0% { cy: 120; } 33% { cy: 120; } 66% { cy: 40; } 100% { cy: 40; } }
            .capture-arrow { animation: down 3s infinite; }
            .bubble-arrow { animation: up 3s infinite; }
          `}</style>
        </defs>

        {/* Phase labels */}
        <text x="50" y="30" className="text-xs font-bold" fill="var(--brand-accent)">1. CAPTURE</text>
        <text x="210" y="30" className="text-xs font-bold" fill="#fbbf24">2. TARGET</text>
        <text x="350" y="30" className="text-xs font-bold" fill="#10b981">3. BUBBLE</text>

        {/* Window */}
        <rect x="30" y="50" width="440" height="160" rx="4" fill="none" stroke="#64748b" strokeWidth="2" opacity="0.5"/>
        <text x="50" y="70" className="text-xs font-semibold" fill="#64748b">window</text>

        {/* Document */}
        <rect x="60" y="80" width="380" height="100" rx="4" fill="none" stroke="#3b82f6" strokeWidth="2"/>
        <text x="80" y="100" className="text-xs font-semibold" fill="#3b82f6">document</text>

        {/* Element */}
        <rect x="100" y="110" width="300" height="50" rx="4" fill="none" stroke="#ec4899" strokeWidth="2"/>
        <text x="120" y="135" className="text-xs font-semibold" fill="#ec4899">target element</text>

        {/* Arrows showing flow */}
        {/* Capture phase - down arrow */}
        <circle cx="450" cy="60" r="4" fill="var(--brand-accent)" className="capture-arrow"/>
        
        {/* Bubble phase - up arrow */}
        <circle cx="50" cy="140" r="4" fill="#10b981" className="bubble-arrow"/>

        {/* Legend */}
        <text x="30" y="220" className="text-xs" fill="currentColor">1. Event travels DOWN from window to target (Capture)</text>
        <text x="30" y="237" className="text-xs" fill="currentColor">2. Event fires on the target element (Target)</text>
        <text x="30" y="254" className="text-xs" fill="currentColor">3. Event travels UP from target to window (Bubble)</text>
      </svg>
    </div>
  )
}
