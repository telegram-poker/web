import React from 'react'

export function Loader({ className }: { className?: string }) {
  return (
    <div className={"flex items-center justify-center " + (className || "")}>
      {/* rotating card stack loader */}
      <svg
        viewBox="0 0 100 100"
        className="w-20 h-20 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* card backs (red) */}
        {[0, 1, 2, 3].map(i => (
          <rect
            key={i}
            x="30"
            y="15"
            width="40"
            height="60"
            rx="4"
            ry="4"
            fill="#e53e3e"
            transform={`rotate(${i * 15} 50 50)`}
            opacity={0.8 - i * 0.2}
          />
        ))}
        {/* suit in center (spade) */}
        <path
          d="M50 40 c10 -10 20 0 0 20 c-20 -20 0 -30 0 -20 z M50 55 l0 15" 
          fill="#000"
          stroke="#000"
          strokeWidth="2"
        />
      </svg>
    </div>
  )
}
