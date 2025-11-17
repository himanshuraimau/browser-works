'use client'

export function DOMTree() {
  return (
    <div className="flex items-center justify-center py-8">
      <svg width="500" height="300" viewBox="0 0 500 300" className="max-w-full">
        <defs>
          <style>{`
            @keyframes appear { 0% { opacity: 0; } 100% { opacity: 1; } }
            .tree-node { animation: appear 0.5s ease-out forwards; }
            .tree-line { stroke: #94a3b8; stroke-width: 2; opacity: 0.5; }
          `}</style>
        </defs>

        {/* Root */}
        <g className="tree-node" style={{ animationDelay: '0s' }}>
          <rect x="185" y="10" width="130" height="40" rx="4" fill="#ea580c" stroke="#ea580c" strokeWidth="2"/>
          <text x="250" y="35" textAnchor="middle" className="text-xs font-semibold" fill="white">&lt;html&gt;</text>
        </g>

        {/* Lines to children */}
        <line x1="250" y1="50" x2="120" y2="90" className="tree-line"/>
        <line x1="250" y1="50" x2="380" y2="90" className="tree-line"/>

        {/* Head and Body */}
        <g className="tree-node" style={{ animationDelay: '0.2s' }}>
          <rect x="50" y="90" width="140" height="40" rx="4" fill="#3b82f6" stroke="#3b82f6" strokeWidth="2"/>
          <text x="120" y="115" textAnchor="middle" className="text-xs font-semibold" fill="white">&lt;head&gt;</text>
        </g>

        <g className="tree-node" style={{ animationDelay: '0.3s' }}>
          <rect x="310" y="90" width="140" height="40" rx="4" fill="#10b981" stroke="#10b981" strokeWidth="2"/>
          <text x="380" y="115" textAnchor="middle" className="text-xs font-semibold" fill="white">&lt;body&gt;</text>
        </g>

        {/* Head children */}
        <line x1="120" y1="130" x2="80" y2="170" className="tree-line"/>
        <line x1="120" y1="130" x2="160" y2="170" className="tree-line"/>

        <g className="tree-node" style={{ animationDelay: '0.4s' }}>
          <rect x="30" y="170" width="100" height="35" rx="4" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2"/>
          <text x="80" y="192" textAnchor="middle" className="text-xs font-semibold" fill="#1f2937">&lt;title&gt;</text>
        </g>

        <g className="tree-node" style={{ animationDelay: '0.5s' }}>
          <rect x="140" y="170" width="100" height="35" rx="4" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2"/>
          <text x="190" y="192" textAnchor="middle" className="text-xs font-semibold" fill="#1f2937">&lt;link&gt;</text>
        </g>

        {/* Body children */}
        <line x1="380" y1="130" x2="340" y2="170" className="tree-line"/>
        <line x1="380" y1="130" x2="420" y2="170" className="tree-line"/>

        <g className="tree-node" style={{ animationDelay: '0.6s' }}>
          <rect x="290" y="170" width="100" height="35" rx="4" fill="#ec4899" stroke="#ec4899" strokeWidth="2"/>
          <text x="340" y="192" textAnchor="middle" className="text-xs font-semibold" fill="white">&lt;h1&gt;</text>
        </g>

        <g className="tree-node" style={{ animationDelay: '0.7s' }}>
          <rect x="400" y="170" width="100" height="35" rx="4" fill="#ec4899" stroke="#ec4899" strokeWidth="2"/>
          <text x="450" y="192" textAnchor="middle" className="text-xs font-semibold" fill="white">&lt;button&gt;</text>
        </g>

        {/* Legend */}
        <text x="20" y="260" className="text-xs font-semibold" fill="currentColor">DOM Tree Structure</text>
      </svg>
    </div>
  )
}
