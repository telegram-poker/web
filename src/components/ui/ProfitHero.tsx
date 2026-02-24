import React from 'react'
import { Button } from './Button'
import { GradientText } from './GradientText'
import { theme } from '@/config/theme'

interface ProfitHeroProps {
  title?: string
  percentage?: string
  subtitle?: string
  buttonText?: string
  onBecomeShareholder?: () => void
  // optional children for any extra visuals (e.g. coin image)
  children?: React.ReactNode
}

export function ProfitHero({
  title,
  percentage,
  subtitle,
  buttonText,
  onBecomeShareholder,
  children,
}: ProfitHeroProps) {
  return (
    <div
      className="relative px-5 pt-6 pb-8 overflow-hidden"
      style={{ background: theme.hero.background }}
    >
      <div
        className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: theme.hero.highlight }}
      />

        <p className="text-xs text-(--color-muted) font-semibold tracking-wide mb-2">
        {title || theme.hero.title}
      </p>
      <h1 className="font-display text-5xl tracking-wider mb-2">
        <GradientText
          fromColor={theme.hero.textGradient.fromColor}
          toColor={theme.hero.textGradient.toColor}
          className="text-6xl"
        >
          {percentage || theme.hero.percentage}
        </GradientText>
      </h1>
      <p className="text-sm text-(--color-white) leading-relaxed mb-1">
        {subtitle || theme.hero.subtitle}
      </p>
      {onBecomeShareholder && (
        <button
          onClick={onBecomeShareholder}
          className="text-(--color-accent) font-semibold text-sm hover:underline"
        >
          {buttonText || theme.hero.buttonText}
        </button>
      )}

      {children && <div className="absolute top-0 right-4">{children}</div>}
    </div>
  )
}
