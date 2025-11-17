'use client'

export function ParsingAnimation() {
  return (
    <div className="flex items-center justify-center py-8">
      <svg width="420" height="160" viewBox="0 0 420 160" className="max-w-full">
        <defs>
          <style>{`
            @keyframes scan {
              0% { x: 20; }
              100% { x: 180; }
            }
            @keyframes treeGrow {
              0% { opacity: 0; }
              30% { opacity: 0; }
              100% { opacity: 1; }
            }
            .scanner-line {
              animation: scan 2s ease-in-out infinite;
            }
            .tree-element {
              animation: treeGrow 2s ease-out forwards;
            }
          `}</style>
        </defs>

        {/* HTML Input */}
        <text x="20" y="20" className="text-xs font-bold fill-foreground">Input HTML:</text>
        <rect x="20" y="30" width="180" height="50" rx="2" fill="#fef3c7" stroke="#ea580c" strokeWidth="1.5" opacity="0.5"/>
        <text x="110" y="45" textAnchor="middle" className="text-xs fill-foreground font-mono">&lt;div&gt;Hello&lt;/div&gt;</text>
        <text x="110" y="60" textAnchor="middle" className="text-xs fill-muted-foreground font-mono">&lt;button&gt;Click&lt;/button&gt;</text>

        {/* Scanning line */}
        <rect x="20" y="30" width="180" height="50" rx="2" fill="none" stroke="#ea580c" strokeWidth="1" opacity="0"/>
        <line x1="20" y1="30" y2="80" stroke="#ea580c" strokeWidth="2" opacity="0.6" className="scanner-line"/>

        {/* Arrow */}
        <path d="M 210 45 L 240 45" stroke="#ea580c" strokeWidth="2" fill="none" markerEnd="url(#arrowdom)"/>
        <defs>
          <marker id="arrowdom" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#ea580c"/>
          </marker>
        </defs>

        {/* DOM Tree Output */}
        <text x="260" y="20" className="text-xs font-bold fill-foreground">DOM Tree:</text>
        
        {/* Root */}
        <circle cx="330" cy="50" r="6" fill="#ea580c" opacity="0.7" className="tree-element" style={{ animationDelay: '0.3s' }}/>
        <text x="330" y="70" textAnchor="middle" className="text-xs fill-foreground font-mono">document</text>

        {/* Children lines */}
        <line x1="330" y1="56" x2="300" y2="80" stroke="#ea580c" strokeWidth="1.5" opacity="0.4" className="tree-element" style={{ animationDelay: '0.6s' }}/>
        <line x1="330" y1="56" x2="360" y2="80" stroke="#ea580c" strokeWidth="1.5" opacity="0.4" className="tree-element" style={{ animationDelay: '0.6s' }}/>

        {/* Child nodes */}
        <circle cx="300" cy="85" r="5" fill="#ea580c" opacity="0.6" className="tree-element" style={{ animationDelay: '0.8s' }}/>
        <circle cx="360" cy="85" r="5" fill="#ea580c" opacity="0.6" className="tree-element" style={{ animationDelay: '0.8s' }}/>
        <text x="300" y="105" textAnchor="middle" className="text-xs fill-foreground font-mono">div</text>
        <text x="360" y="105" textAnchor="middle" className="text-xs fill-foreground font-mono">button</text>
      </svg>
    </div>
  )
}
