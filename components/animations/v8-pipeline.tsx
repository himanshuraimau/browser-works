'use client'

export function V8Pipeline() {
  return (
    <div className="flex items-center justify-center py-8">
      <svg width="500" height="200" viewBox="0 0 500 200" className="max-w-full">
        <defs>
          <style>{`
            @keyframes stage-pulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
            .stage { animation: stage-pulse 2s infinite; }
            @keyframes arrow-flow { 0% { stroke-dashoffset: 10; } 100% { stroke-dashoffset: 0; } }
            .flow-arrow { animation: arrow-flow 1s linear infinite; stroke-dasharray: 5,5; }
          `}</style>
        </defs>

        {/* Source Code */}
        <rect x="10" y="30" width="80" height="60" rx="4" fill="#94a3b8" stroke="#64748b" strokeWidth="2"/>
        <text x="50" y="55" textAnchor="middle" className="text-xs font-semibold" fill="white">Source</text>
        <text x="50" y="70" textAnchor="middle" className="text-xs font-semibold" fill="white">Code</text>

        {/* Arrow */}
        <line x1="90" y1="60" x2="120" y2="60" stroke="#ea580c" strokeWidth="2" className="flow-arrow"/>
        <polygon points="130,60 120,55 120,65" fill="#ea580c"/>

        {/* Parser */}
        <rect x="130" y="30" width="80" height="60" rx="4" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" className="stage" style={{ animationDelay: '0s' }}/>
        <text x="170" y="55" textAnchor="middle" className="text-xs font-semibold" fill="white">Parser</text>
        <text x="170" y="70" textAnchor="middle" className="text-xs font-semibold" fill="white">→ AST</text>

        {/* Arrow */}
        <line x1="210" y1="60" x2="240" y2="60" stroke="#ea580c" strokeWidth="2" className="flow-arrow" style={{ animationDelay: '0.3s' }}/>
        <polygon points="250,60 240,55 240,65" fill="#ea580c"/>

        {/* Ignition */}
        <rect x="250" y="30" width="80" height="60" rx="4" fill="#10b981" stroke="#059669" strokeWidth="2" className="stage" style={{ animationDelay: '0.6s' }}/>
        <text x="290" y="55" textAnchor="middle" className="text-xs font-semibold" fill="white">Ignition</text>
        <text x="290" y="70" textAnchor="middle" className="text-xs font-semibold" fill="white">→ Bytecode</text>

        {/* Arrow */}
        <line x1="330" y1="60" x2="360" y2="60" stroke="#ea580c" strokeWidth="2" className="flow-arrow" style={{ animationDelay: '0.9s' }}/>
        <polygon points="370,60 360,55 360,65" fill="#ea580c"/>

        {/* TurboFan */}
        <rect x="370" y="30" width="80" height="60" rx="4" fill="#ec4899" stroke="#db2777" strokeWidth="2" className="stage" style={{ animationDelay: '1.2s' }}/>
        <text x="410" y="55" textAnchor="middle" className="text-xs font-semibold" fill="white">TurboFan</text>
        <text x="410" y="70" textAnchor="middle" className="text-xs font-semibold" fill="white">→ Optimized Code</text>

        {/* Arrow down from TurboFan */}
        <line x1="410" y1="90" x2="410" y2="120" stroke="#ea580c" strokeWidth="2" className="flow-arrow"/>
        <polygon points="410,130 405,120 415,120" fill="#ea580c"/>

        {/* Machine Code */}
        <rect x="350" y="140" width="120" height="40" rx="4" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
        <text x="410" y="165" textAnchor="middle" className="text-xs font-semibold" fill="#1f2937">Machine Code</text>
      </svg>
    </div>
  )
}
