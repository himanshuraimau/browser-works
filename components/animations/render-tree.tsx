'use client'

export function RenderTree() {
  return (
    <div className="flex items-center justify-center py-8">
      <svg width="500" height="280" viewBox="0 0 500 280" className="max-w-full">
        <defs>
          <style>{`
            @keyframes merge { 0% { opacity: 0.3; } 100% { opacity: 1; } }
            .merge-node { animation: merge 1s ease-out forwards; }
            @keyframes glow { 0%, 100% { filter: drop-shadow(0 0 0px #fbbf24); } 50% { filter: drop-shadow(0 0 8px #fbbf24); } }
            .glow { animation: glow 1.5s infinite; }
          `}</style>
        </defs>

        {/* DOM on left, CSSOM on right */}
        <text x="80" y="20" className="text-xs font-semibold" fill="currentColor">DOM</text>
        <rect x="30" y="30" width="100" height="80" rx="4" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2"/>
        <text x="80" y="50" textAnchor="middle" className="text-xs font-mono" fill="#1f2937">html</text>
        <text x="80" y="70" textAnchor="middle" className="text-xs font-mono" fill="#1f2937">div</text>
        <text x="80" y="90" textAnchor="middle" className="text-xs font-mono" fill="#1f2937">button</text>

        <text x="400" y="20" className="text-xs font-semibold" fill="currentColor">CSSOM</text>
        <rect x="350" y="30" width="100" height="80" rx="4" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2"/>
        <text x="400" y="50" textAnchor="middle" className="text-xs font-mono" fill="#1f2937">div: blue</text>
        <text x="400" y="70" textAnchor="middle" className="text-xs font-mono" fill="#1f2937">button:</text>
        <text x="400" y="90" textAnchor="middle" className="text-xs font-mono" fill="#1f2937">padding</text>

        {/* Arrows */}
        <g className="glow">
          <line x1="130" y1="70" x2="350" y2="70" stroke="#fbbf24" strokeWidth="3" opacity="0.6"/>
          <polygon points="350,70 340,65 340,75" fill="#fbbf24"/>
        </g>

        {/* Render Tree in center */}
        <g className="merge-node" style={{ animationDelay: '0.5s' }}>
          <rect x="150" y="150" width="200" height="90" rx="4" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
          <text x="250" y="165" textAnchor="middle" className="text-sm font-bold" fill="#1f2937">Render Tree</text>
          <line x1="160" y1="175" x2="340" y2="175" stroke="#f59e0b" opacity="0.3" strokeWidth="1"/>
          <text x="250" y="190" textAnchor="middle" className="text-xs" fill="#1f2937">RenderView</text>
          <text x="250" y="210" textAnchor="middle" className="text-xs" fill="#1f2937">RenderBlockFlow</text>
          <text x="250" y="230" textAnchor="middle" className="text-xs" fill="#1f2937">RenderButton</text>
        </g>
      </svg>
    </div>
  )
}
