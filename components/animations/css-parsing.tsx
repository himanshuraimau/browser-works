'use client'

export function CSSParsing() {
  return (
    <div className="flex items-center justify-center py-8">
      <svg width="500" height="250" viewBox="0 0 500 250" className="max-w-full">
        <defs>
          <style>{`
            @keyframes flow-down { 0% { transform: translateY(-10px); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(100px); opacity: 0; } }
            .flow-arrow { animation: flow-down 2s infinite; }
          `}</style>
        </defs>

        {/* CSS Input */}
        <rect x="50" y="10" width="400" height="50" rx="4" fill="#fef3c7" stroke="#ea580c" strokeWidth="2"/>
        <text x="250" y="25" textAnchor="middle" className="text-xs font-mono" fill="#1f2937">{"div { color: blue; }"}</text>
        <text x="250" y="42" textAnchor="middle" className="text-xs font-mono" fill="#1f2937">{"button { padding: 10px; }"}</text>

        {/* Arrow down */}
        <line x1="250" y1="60" x2="250" y2="90" stroke="#ea580c" strokeWidth="2"/>
        <polygon points="250,100 245,90 255,90" fill="#ea580c"/>

        {/* Tokenization */}
        <rect x="50" y="100" width="180" height="50" rx="4" fill="#3b82f6" stroke="#2563eb" strokeWidth="2"/>
        <text x="140" y="115" textAnchor="middle" className="text-xs font-semibold" fill="white">Tokenization</text>
        <text x="140" y="135" textAnchor="middle" className="text-xs" fill="white">{"HASH, NAME, {}"}</text>

        {/* Arrow right */}
        <line x1="230" y1="125" x2="270" y2="125" stroke="#ea580c" strokeWidth="2"/>
        <polygon points="280,125 270,120 270,130" fill="#ea580c"/>

        {/* Parsing */}
        <rect x="270" y="100" width="180" height="50" rx="4" fill="#10b981" stroke="#059669" strokeWidth="2"/>
        <text x="360" y="115" textAnchor="middle" className="text-xs font-semibold" fill="white">Parsing</text>
        <text x="360" y="135" textAnchor="middle" className="text-xs" fill="white">Build CSSOM Tree</text>

        {/* Arrow down */}
        <line x1="250" y1="150" x2="250" y2="180" stroke="#ea580c" strokeWidth="2"/>
        <polygon points="250,190 245,180 255,180" fill="#ea580c"/>

        {/* CSSOM Output */}
        <rect x="50" y="200" width="400" height="35" rx="4" fill="#ec4899" stroke="#db2777" strokeWidth="2"/>
        <text x="250" y="222" textAnchor="middle" className="text-xs font-semibold" fill="white">CSSOM: div rule, button rule with styles</text>
      </svg>
    </div>
  )
}
