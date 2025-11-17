'use client'

export function NetworkJourneyAnimation() {
  return (
    <div className="flex items-center justify-center py-8">
      <svg width="420" height="140" viewBox="0 0 420 140" className="max-w-full">
        <defs>
          <style>{`
            @keyframes ping {
              0%, 100% { r: 4px; opacity: 1; }
              50% { r: 12px; opacity: 0; }
            }
            @keyframes slideDown {
              0% { transform: translateY(-30px); opacity: 0; }
              50% { opacity: 1; }
              100% { transform: translateY(30px); opacity: 0; }
            }
            .dns-pulse {
              animation: ping 1.5s infinite;
            }
            .dns-packet {
              animation: slideDown 2s infinite;
            }
          `}</style>
        </defs>

        {/* Browser */}
        <rect x="20" y="50" width="60" height="50" rx="4" fill="#ea580c" opacity="0.15" stroke="#ea580c" strokeWidth="2"/>
        <text x="50" y="80" textAnchor="middle" className="text-xs font-semibold fill-foreground">Browser</text>

        {/* DNS Server */}
        <circle cx="140" cy="30" r="20" fill="#ea580c" opacity="0.15" stroke="#ea580c" strokeWidth="2"/>
        <text x="140" y="35" textAnchor="middle" className="text-xs font-semibold fill-foreground">DNS</text>

        {/* Pinging circles */}
        <circle cx="140" cy="30" r="4" fill="#ea580c" className="dns-pulse" style={{ animationDelay: '0s' }}/>
        <circle cx="140" cy="30" r="4" fill="#ea580c" className="dns-pulse" style={{ animationDelay: '0.5s' }}/>

        {/* Packets falling */}
        <text x="140" y="60" textAnchor="middle" className="text-xs font-semibold fill-orange-dark dns-packet" style={{ animationDelay: '0s' }}>📦</text>
        <text x="140" y="60" textAnchor="middle" className="text-xs font-semibold fill-orange-dark dns-packet" style={{ animationDelay: '0.4s' }}>📦</text>

        {/* Web Server */}
        <rect x="240" y="50" width="60" height="50" rx="4" fill="#ea580c" opacity="0.15" stroke="#ea580c" strokeWidth="2"/>
        <text x="270" y="75" textAnchor="middle" className="text-xs font-semibold fill-foreground">Server</text>

        {/* Connecting lines */}
        <path d="M 80 75 Q 120 50 140 50" stroke="#ea580c" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="4"/>
        <path d="M 160 75 Q 200 75 240 75" stroke="#ea580c" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="4"/>

        {/* HTTP Status */}
        <text x="210" y="120" textAnchor="middle" className="text-xs fill-orange-dark font-medium">HTTP 200 OK</text>
      </svg>
    </div>
  )
}
