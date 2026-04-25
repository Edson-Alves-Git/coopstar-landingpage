export function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        viewBox="0 0 300 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* Red Oval/Capsule Background - Company Color */}
        <rect x="0" y="20" width="300" height="60" rx="30" fill="#CC0000" />
        
        {/* Text "COOPSTAR" */}
        <text
          x="150"
          y="62"
          textAnchor="middle"
          fill="white"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: '900',
            fontSize: '38px',
            letterSpacing: '2px'
          }}
        >
          COOPSTAR
        </text>
        
        {/* Subtext "EXPRESS" */}
        <text
          x="150"
          y="85"
          textAnchor="middle"
          fill="white"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: '400',
            fontSize: '14px',
            letterSpacing: '8px'
          }}
        >
          EXPRESS
        </text>
      </svg>
    </div>
  );
}
