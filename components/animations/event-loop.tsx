'use client'

export function EventLoop() {
  return (
    <div className="flex items-center justify-center py-8">
      <svg width="500" height="280" viewBox="0 0 500 280" className="max-w-full">
        <defs>
          <style>{`
            @keyframes circle-rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            .event-loop { animation: circle-rotate 4s linear infinite; transform-origin: 250px 100px; }
            @keyframes queue-pop { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(-50px); opacity: 0; } }
            .popping { animation: queue-pop 1s ease-out forwards; }
          `}</style>
        </defs>

        {/* Main Event Loop Circle */}
        <circle cx="250" cy="100" r="80" fill="none" stroke="var(--brand-accent)" strokeWidth="3" opacity="0.3"/>
        
        {/* Rotating arrow */}
        <g className="event-loop">
          <line x1="250" y1="20" x2="250" y2="40" stroke="var(--brand-accent)" strokeWidth="3"/>
          <polygon points="250,45 245,35 255,35" fill="var(--brand-accent)"/>
        </g>

        <text x="250" y="105" textAnchor="middle" className="text-lg font-bold" fill="var(--brand-accent)">Event Loop</text>

        {/* Task Queue - Left */}
        <rect x="30" y="30" width="100" height="140" rx="4" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="2"/>
        <text x="80" y="50" textAnchor="middle" className="text-xs font-semibold" fill="currentColor">Task Queue</text>
        <line x1="40" y1="60" x2="120" y2="60" stroke="#3b82f6" opacity="0.3"/>

        {/* Tasks */}
        <rect x="40" y="70" width="80" height="25" rx="2" fill="#3b82f6" stroke="#2563eb" strokeWidth="1"/>
        <text x="80" y="88" textAnchor="middle" className="text-xs" fill="white">click</text>

        <rect x="40" y="105" width="80" height="25" rx="2" fill="#3b82f6" stroke="#2563eb" strokeWidth="1"/>
        <text x="80" y="123" textAnchor="middle" className="text-xs" fill="white">timer</text>

        {/* Microtask Queue - Right */}
        <rect x="370" y="30" width="100" height="140" rx="4" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="2"/>
        <text x="420" y="50" textAnchor="middle" className="text-xs font-semibold" fill="currentColor">Microtask Queue</text>
        <line x1="380" y1="60" x2="460" y2="60" stroke="#10b981" opacity="0.3"/>

        {/* Microtasks */}
        <rect x="380" y="70" width="80" height="25" rx="2" fill="#10b981" stroke="#059669" strokeWidth="1"/>
        <text x="420" y="88" textAnchor="middle" className="text-xs" fill="white">Promise</text>

        <rect x="380" y="105" width="80" height="25" rx="2" fill="#10b981" stroke="#059669" strokeWidth="1"/>
        <text x="420" y="123" textAnchor="middle" className="text-xs" fill="white">queueMicro</text>

        {/* Execution flow */}
        <text x="250" y="210" textAnchor="middle" className="text-xs font-semibold" fill="currentColor">Process Flow:</text>
        <text x="250" y="228" textAnchor="middle" className="text-xs" fill="currentColor">1. Execute one Task</text>
        <text x="250" y="245" textAnchor="middle" className="text-xs" fill="currentColor">2. Process ALL Microtasks</text>
        <text x="250" y="262" textAnchor="middle" className="text-xs" fill="currentColor">3. Render (if needed)</text>
        <text x="250" y="279" textAnchor="middle" className="text-xs" fill="currentColor">4. Repeat</text>
      </svg>
    </div>
  )
}
