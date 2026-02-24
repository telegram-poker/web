import React from 'react'

export function CoinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="coin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#coin-grad)" />
      <text
        x="32"
        y="38"
        textAnchor="middle"
        fontSize="24"
        fontFamily="sans-serif"
        fill="#fff"
        fontWeight="bold"
      >
        AK
      </text>
    </svg>
  )
}
