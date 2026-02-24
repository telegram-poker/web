import React from 'react'

interface GradientTextProps {
  children: React.ReactNode
  fromColor?: string // any valid CSS color (hex, rgb, named)
  toColor?: string
  className?: string
}

export function GradientText({
  children,
  fromColor = '#3ddc84',
  toColor = '#00e0ff',
  className,
}: GradientTextProps) {
  const gradientStyle = {
    background: `linear-gradient(to right, ${fromColor}, ${toColor})`,
    WebkitBackgroundClip: 'text' as const,
    backgroundClip: 'text' as const,
    color: 'transparent',
  }

  return (
    <span style={gradientStyle} className={`${className} drop-shadow-md`}> 
      {children}
    </span>
  )
}
