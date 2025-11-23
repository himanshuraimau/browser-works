'use client'

export function ProcessFlowAnimation() {
  return (
    <div className="flex items-center justify-center py-8">
      <svg width="400" height="120" viewBox="0 0 400 120" className="max-w-full">
        {/* Defs for animations */}
        <defs>
          <style>{`
            @keyframes flowRight {
              0% { transform: translateX(-50px); opacity: 0; }
              50% { opacity: 1; }
              100% { transform: translateX(50px); opacity: 0; }
            }
            .flow-particle {
              animation: flowRight 2s infinite;
            }
          `}</style>
        </defs>

        {/* Browser Process */}
        <rect x="20" y="20" width="70" height="60" rx="4" fill="var(--brand-accent)" opacity="0.2" stroke="var(--brand-accent)" strokeWidth="2"/>
        <text x="55" y="50" textAnchor="middle" className="text-xs font-semibold fill-foreground">Browser</text>

        {/* Arrow with particles */}
        <line x1="95" y1="50" x2="305" y2="50" stroke="var(--brand-accent)" strokeWidth="2" opacity="0.3"/>
        
        {/* Flowing particles */}
        <circle cx="120" cy="50" r="3" fill="var(--brand-accent)" className="flow-particle" style={{ animationDelay: '0s' }}/>
        <circle cx="150" cy="50" r="3" fill="var(--brand-accent)" className="flow-particle" style={{ animationDelay: '0.3s' }}/>
        <circle cx="180" cy="50" r="3" fill="var(--brand-accent)" className="flow-particle" style={{ animationDelay: '0.6s' }}/>
        <circle cx="210" cy="50" r="3" fill="var(--brand-accent)" className="flow-particle" style={{ animationDelay: '0.9s' }}/>
        <circle cx="240" cy="50" r="3" fill="var(--brand-accent)" className="flow-particle" style={{ animationDelay: '1.2s' }}/>
        <circle cx="270" cy="50" r="3" fill="var(--brand-accent)" className="flow-particle" style={{ animationDelay: '1.5s' }}/>

        {/* Renderer Process */}
        <rect x="310" y="20" width="70" height="60" rx="4" fill="var(--brand-accent)" opacity="0.2" stroke="var(--brand-accent)" strokeWidth="2"/>
        <text x="345" y="50" textAnchor="middle" className="text-xs font-semibold fill-foreground">Renderer</text>
      </svg>
    </div>
  )
}
