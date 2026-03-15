const BOOKS = [
  { color: '#2D5016', tilt: -3, height: 134, animClass: 'animate-float-a', delay: '0s' },
  { color: '#C4541A', tilt:  2, height: 108, animClass: 'animate-float-b', delay: '0.5s' },
  { color: '#B8882A', tilt: -1, height: 148, animClass: 'animate-float-a', delay: '1s' },
  { color: '#5A7A3A', tilt:  4, height: 98,  animClass: 'animate-float-b', delay: '1.5s' },
  { color: '#7A4A2A', tilt: -2, height: 122, animClass: 'animate-float-a', delay: '0.8s' },
  { color: '#3A6B5A', tilt:  1, height: 138, animClass: 'animate-float-b', delay: '0.3s' },
]

function Hand({ side = 'left' }) {
  return (
    <svg
      viewBox="0 0 80 160"
      style={{
        width: 72,
        height: 160,
        flexShrink: 0,
        transform: side === 'right' ? 'scaleX(-1)' : 'scaleX(1)',
        filter: 'drop-shadow(2px 4px 8px rgba(28,24,16,0.18))',
      }}
      aria-hidden="true"
    >
      <rect x="18" y="90" width="44" height="55" rx="10" fill="#D4956A" />
      <ellipse cx="14" cy="98" rx="10" ry="18" fill="#D4956A" />
      <ellipse cx="14" cy="98" rx="7"  ry="14" fill="#C8845A" />
      <rect x="18" y="42" width="14" height="58" rx="7" fill="#D4956A" />
      <ellipse cx="25" cy="44" rx="7" ry="8" fill="#D4956A" />
      <rect x="33" y="36" width="14" height="62" rx="7" fill="#D4956A" />
      <ellipse cx="40" cy="38" rx="7" ry="8" fill="#D4956A" />
      <rect x="48" y="42" width="13" height="58" rx="6" fill="#D4956A" />
      <ellipse cx="54" cy="44" rx="6" ry="7" fill="#D4956A" />
      <rect x="61" y="52" width="11" height="48" rx="5" fill="#D4956A" />
      <ellipse cx="66" cy="54" rx="5" ry="6" fill="#D4956A" />
      <line x1="22" y1="86" x2="28" y2="86" stroke="#C8845A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="36" y1="86" x2="43" y2="86" stroke="#C8845A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="51" y1="86" x2="57" y2="86" stroke="#C8845A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 112 Q40 106 60 112" stroke="#C8845A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export default function BookStack({ className = '' }) {
  return (
    <div className={`flex items-end justify-center ${className}`} style={{ gap: 0 }}>
      <div style={{ marginRight: -8, zIndex: 10 }}>
        <Hand side="left" />
      </div>
      <div className="flex items-end" style={{ gap: 5, zIndex: 5 }}>
        {BOOKS.map((b, i) => (
          <div
            key={i}
            className={`book-spine ${b.animClass}`}
            style={{
              background: b.color,
              height: b.height,
              transform: `rotate(${b.tilt}deg)`,
              animationDelay: b.delay,
            }}
          />
        ))}
      </div>
      <div style={{ marginLeft: -8, zIndex: 10 }}>
        <Hand side="right" />
      </div>
    </div>
  )
}
