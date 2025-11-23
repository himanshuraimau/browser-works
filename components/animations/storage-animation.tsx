'use client'

export function StorageAnimation() {
  return (
    <div className="flex items-center justify-center py-8">
      <svg width="500" height="200" viewBox="0 0 500 200" className="max-w-full">
        <defs>
          <style>{`
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            .spin-disk { animation: spin 3s linear infinite; transform-origin: 150px 80px; }
            @keyframes pulse-block { 0%, 100% { fill-opacity: 0.6; } 50% { fill-opacity: 1; } }
            .pulse-ssd { animation: pulse-block 1.5s infinite; }
          `}</style>
        </defs>

        {/* HDD - Left */}
        <text x="60" y="30" className="text-sm font-bold" fill="currentColor" textAnchor="middle">HDD</text>
        <circle cx="60" cy="80" r="50" fill="none" stroke="#94a3b8" strokeWidth="2"/>
        <circle cx="60" cy="80" r="35" fill="none" stroke="#94a3b8" strokeWidth="1"/>
        <circle cx="60" cy="80" r="20" fill="none" stroke="#94a3b8" strokeWidth="1"/>
        
        {/* Spinning disk */}
        <g className="spin-disk">
          <line x1="150" y1="80" x2="110" y2="80" stroke="var(--brand-accent)" strokeWidth="3" opacity="0.7"/>
          <circle cx="108" cy="80" r="3" fill="var(--brand-accent)"/>
        </g>

        {/* Read/Write arm */}
        <line x1="60" y1="130" x2="60" y2="150" stroke="#64748b" strokeWidth="3"/>
        <text x="60" y="175" className="text-xs" fill="currentColor" textAnchor="middle">Moving Parts</text>

        {/* SSD - Right */}
        <text x="400" y="30" className="text-sm font-bold" fill="currentColor" textAnchor="middle">SSD</text>
        
        {/* Flash memory cells */}
        <g className="pulse-ssd" style={{ animationDelay: '0s' }}>
          <rect x="360" y="65" width="15" height="15" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1"/>
        </g>
        <g className="pulse-ssd" style={{ animationDelay: '0.2s' }}>
          <rect x="380" y="65" width="15" height="15" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1"/>
        </g>
        <g className="pulse-ssd" style={{ animationDelay: '0.4s' }}>
          <rect x="400" y="65" width="15" height="15" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1"/>
        </g>
        <g className="pulse-ssd" style={{ animationDelay: '0.6s' }}>
          <rect x="420" y="65" width="15" height="15" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1"/>
        </g>

        <g className="pulse-ssd" style={{ animationDelay: '0.1s' }}>
          <rect x="360" y="85" width="15" height="15" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1"/>
        </g>
        <g className="pulse-ssd" style={{ animationDelay: '0.3s' }}>
          <rect x="380" y="85" width="15" height="15" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1"/>
        </g>
        <g className="pulse-ssd" style={{ animationDelay: '0.5s' }}>
          <rect x="400" y="85" width="15" height="15" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1"/>
        </g>
        <g className="pulse-ssd" style={{ animationDelay: '0.7s' }}>
          <rect x="420" y="85" width="15" height="15" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1"/>
        </g>

        <text x="400" y="175" className="text-xs" fill="currentColor" textAnchor="middle">No Moving Parts</text>
      </svg>
    </div>
  )
}
