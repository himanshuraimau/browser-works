'use client'

export function TCPHandshake() {
  return (
    <div className="flex items-center justify-center py-8">
      <svg width="500" height="200" viewBox="0 0 500 200" className="max-w-full">
        <defs>
          <style>{`
            @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
            .packet { animation: bounce 2s infinite; }
            @keyframes fade-in { 0% { opacity: 0; } 50% { opacity: 1; } 100% { opacity: 0; } }
            .fade-packet { animation: fade-in 2s infinite; }
          `}</style>
        </defs>

        {/* Client */}
        <rect x="20" y="60" width="80" height="80" rx="4" fill="#60a5fa" stroke="#3b82f6" strokeWidth="2"/>
        <text x="60" y="100" textAnchor="middle" className="text-xs font-semibold" fill="white">Client</text>

        {/* Server */}
        <rect x="400" y="60" width="80" height="80" rx="4" fill="#10b981" stroke="#059669" strokeWidth="2"/>
        <text x="440" y="100" textAnchor="middle" className="text-xs font-semibold" fill="white">Server</text>

        {/* Packets with animated movement */}
        <g className="packet" style={{ animationDelay: '0s' }}>
          <line x1="100" y1="80" x2="380" y2="80" stroke="var(--brand-accent)" strokeWidth="2" opacity="0.5"/>
          <circle cx="110" cy="80" r="4" fill="var(--brand-accent)"/>
          <text x="240" y="70" textAnchor="middle" className="text-xs font-semibold" fill="var(--brand-accent)">SYN</text>
        </g>

        <g className="packet" style={{ animationDelay: '0.7s' }}>
          <line x1="380" y1="110" x2="100" y2="110" stroke="#3b82f6" strokeWidth="2" opacity="0.5"/>
          <circle cx="390" cy="110" r="4" fill="#3b82f6"/>
          <text x="240" y="125" textAnchor="middle" className="text-xs font-semibold" fill="#3b82f6">SYN-ACK</text>
        </g>

        <g className="packet" style={{ animationDelay: '1.4s' }}>
          <line x1="100" y1="140" x2="380" y2="140" stroke="var(--brand-accent)" strokeWidth="2" opacity="0.5"/>
          <circle cx="110" cy="140" r="4" fill="var(--brand-accent)"/>
          <text x="240" y="155" textAnchor="middle" className="text-xs font-semibold" fill="var(--brand-accent)">ACK</text>
        </g>
      </svg>
    </div>
  )
}
