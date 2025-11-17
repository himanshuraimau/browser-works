'use client'

export function FileStorageAnimation() {
  return (
    <div className="flex items-center justify-center py-8">
      <svg width="380" height="140" viewBox="0 0 380 140" className="max-w-full">
        <defs>
          <style>{`
            @keyframes writeData {
              0% { strokeDashoffset: 60; }
              100% { strokeDashoffset: 0; }
            }
            @keyframes spinPlatter {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .write-animation {
              animation: writeData 2s ease-in-out infinite;
            }
            .hdd-spin {
              animation: spinPlatter 3s linear infinite;
              transform-origin: 80px 60px;
            }
          `}</style>
        </defs>

        {/* SSD (Solid) */}
        <rect x="20" y="30" width="90" height="60" rx="4" fill="#ea580c" opacity="0.15" stroke="#ea580c" strokeWidth="2"/>
        <text x="65" y="55" textAnchor="middle" className="text-xs font-semibold fill-foreground">SSD</text>
        <text x="65" y="70" textAnchor="middle" className="text-xs fill-muted-foreground">(Flash)</text>

        {/* Data flow arrow */}
        <path d="M 115 60 L 155 60" stroke="#ea580c" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#ea580c"/>
          </marker>
        </defs>

        {/* HDD with spinning animation */}
        <g className="hdd-spin">
          <circle cx="80" cy="60" r="30" fill="none" stroke="#ea580c" strokeWidth="1" opacity="0.3"/>
          <circle cx="80" cy="60" r="20" fill="none" stroke="#ea580c" strokeWidth="1.5" opacity="0.5"/>
          <circle cx="80" cy="60" r="10" fill="none" stroke="#ea580c" strokeWidth="1" opacity="0.7"/>
        </g>

        {/* HDD text */}
        <text x="80" y="95" textAnchor="middle" className="text-xs font-semibold fill-foreground">HDD</text>
        <text x="80" y="110" textAnchor="middle" className="text-xs fill-muted-foreground">(Spinning)</text>

        {/* Writing indicator */}
        <path d="M 240 40 L 280 80 M 280 40 L 240 80" stroke="#ea580c" strokeWidth="2.5" className="write-animation"/>
        <rect x="220" y="35" width="100" height="60" rx="4" fill="none" stroke="#ea580c" strokeWidth="1" opacity="0.3"/>
        <text x="270" y="110" textAnchor="middle" className="text-xs font-semibold fill-foreground">Writing</text>
      </svg>
    </div>
  )
}
