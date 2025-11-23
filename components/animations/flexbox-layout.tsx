'use client'

export function FlexboxLayout() {
  return (
    <div className="flex items-center justify-center py-8">
      <svg width="500" height="220" viewBox="0 0 500 220" className="max-w-full">
        <defs>
          <style>{`
            @keyframes flex-grow { 0% { width: 40px; } 100% { width: 120px; } }
            .flex-item { animation: flex-grow 2s ease-in-out infinite alternate; }
            @keyframes flex-shrink { 0% { width: 120px; } 100% { width: 40px; } }
            .flex-item-2 { animation: flex-shrink 2s ease-in-out infinite alternate; }
          `}</style>
        </defs>

        {/* Container */}
        <rect x="30" y="20" width="440" height="100" rx="4" fill="#60a5fa" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="2"/>
        <text x="50" y="45" className="text-xs font-semibold" fill="#1f2937">flex-grow: 1</text>

        {/* Flex items */}
        <rect x="50" y="60" width="40" height="60" rx="4" fill="#10b981" stroke="#059669" strokeWidth="2" className="flex-item"/>
        <text x="70" y="95" textAnchor="middle" className="text-xs" fill="white">1</text>

        <rect x="100" y="60" width="40" height="60" rx="4" fill="#ec4899" stroke="#db2777" strokeWidth="2"/>
        <text x="120" y="95" textAnchor="middle" className="text-xs" fill="white">2</text>

        <rect x="150" y="60" width="40" height="60" rx="4" fill="#f59e0b" stroke="#d97706" strokeWidth="2" className="flex-item-2"/>
        <text x="170" y="95" textAnchor="middle" className="text-xs" fill="white">3</text>

        {/* Main axis */}
        <line x1="30" y1="165" x2="470" y2="165" stroke="var(--brand-accent)" strokeWidth="2" strokeDasharray="5,5"/>
        <text x="250" y="185" textAnchor="middle" className="text-xs font-semibold" fill="var(--brand-accent)">Main Axis (flex-direction: row)</text>

        {/* Legend */}
        <text x="30" y="220" className="text-xs" fill="currentColor">Items grow/shrink based on flex-grow, flex-shrink properties</text>
      </svg>
    </div>
  )
}
