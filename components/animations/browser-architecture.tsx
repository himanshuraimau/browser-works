'use client'

export function BrowserArchitecture() {
  return (
    <div className="flex items-center justify-center py-8">
      <svg width="500" height="300" viewBox="0 0 500 300" className="max-w-full">
        <defs>
          <style>{`
            @keyframes pulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
            .pulse-box { animation: pulse 2s infinite; }
          `}</style>
        </defs>

        {/* Browser Process - Top Center */}
        <rect x="175" y="20" width="150" height="60" rx="6" fill="var(--brand-accent)" stroke="var(--brand-accent)" strokeWidth="2" className="pulse-box"/>
        <text x="250" y="55" textAnchor="middle" className="text-sm font-bold" fill="white">Browser Process</text>

        {/* GPU Process - Left */}
        <rect x="20" y="140" width="100" height="60" rx="6" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2"/>
        <text x="70" y="160" textAnchor="middle" className="text-xs font-semibold" fill="#1f2937">GPU</text>
        <text x="70" y="175" textAnchor="middle" className="text-xs" fill="#1f2937">Process</text>

        {/* Network Service - Center Left */}
        <rect x="160" y="140" width="100" height="60" rx="6" fill="#60a5fa" stroke="#60a5fa" strokeWidth="2"/>
        <text x="210" y="160" textAnchor="middle" className="text-xs font-semibold" fill="white">Network</text>
        <text x="210" y="175" textAnchor="middle" className="text-xs" fill="white">Service</text>

        {/* Renderer Processes - Multiple */}
        <rect x="300" y="140" width="100" height="60" rx="6" fill="#10b981" stroke="#10b981" strokeWidth="2"/>
        <text x="350" y="160" textAnchor="middle" className="text-xs font-semibold" fill="white">Renderer</text>
        <text x="350" y="175" textAnchor="middle" className="text-xs" fill="white">Process 1</text>

        <rect x="380" y="140" width="100" height="60" rx="6" fill="#10b981" stroke="#10b981" strokeWidth="2" opacity="0.7"/>
        <text x="430" y="160" textAnchor="middle" className="text-xs font-semibold" fill="white">Renderer</text>
        <text x="430" y="175" textAnchor="middle" className="text-xs" fill="white">Process 2</text>

        {/* Connection lines */}
        <line x1="250" y1="80" x2="70" y2="140" stroke="var(--brand-accent)" strokeWidth="2" opacity="0.3" strokeDasharray="5,5"/>
        <line x1="250" y1="80" x2="210" y2="140" stroke="var(--brand-accent)" strokeWidth="2" opacity="0.3" strokeDasharray="5,5"/>
        <line x1="250" y1="80" x2="350" y2="140" stroke="var(--brand-accent)" strokeWidth="2" opacity="0.3" strokeDasharray="5,5"/>
        <line x1="250" y1="80" x2="430" y2="140" stroke="var(--brand-accent)" strokeWidth="2" opacity="0.3" strokeDasharray="5,5"/>

        {/* Legend */}
        <text x="20" y="250" className="text-xs font-semibold" fill="currentColor">Modern Multi-Process Architecture</text>
      </svg>
    </div>
  )
}
