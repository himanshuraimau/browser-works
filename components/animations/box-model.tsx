'use client'

export function BoxModel() {
  return (
    <div className="flex items-center justify-center py-8">
      <svg width="400" height="300" viewBox="0 0 400 300" className="max-w-full">
        <defs>
          <style>{`
            @keyframes scale-in { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
            .box-layer { animation: scale-in 0.5s ease-out forwards; transform-origin: 200px 150px; }
          `}</style>
        </defs>

        {/* Margin (outermost) */}
        <rect x="40" y="40" width="320" height="220" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" className="box-layer" style={{ animationDelay: '0s' }}/>
        <text x="60" y="60" className="text-xs font-semibold" fill="#64748b">Margin</text>

        {/* Border */}
        <rect x="70" y="70" width="260" height="160" fill="none" stroke="#f59e0b" strokeWidth="3" className="box-layer" style={{ animationDelay: '0.2s' }}/>
        <text x="90" y="90" className="text-xs font-semibold" fill="#f59e0b">Border</text>

        {/* Padding */}
        <rect x="100" y="100" width="200" height="100" fill="none" stroke="#3b82f6" strokeWidth="2" className="box-layer" style={{ animationDelay: '0.4s' }}/>
        <text x="120" y="120" className="text-xs font-semibold" fill="#3b82f6">Padding</text>

        {/* Content */}
        <rect x="130" y="130" width="140" height="40" fill="#ec4899" className="box-layer" style={{ animationDelay: '0.6s' }}/>
        <text x="200" y="158" textAnchor="middle" className="text-sm font-semibold" fill="white">Content</text>

        {/* Labels with measurements */}
        <text x="200" y="270" textAnchor="middle" className="text-xs" fill="currentColor">From inside out:</text>
        <text x="200" y="287" textAnchor="middle" className="text-xs" fill="currentColor">Content → Padding → Border → Margin</text>
      </svg>
    </div>
  )
}
