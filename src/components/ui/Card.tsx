import { type HTMLAttributes } from 'react'
import clsx from 'clsx'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  accentColor?: 'accent' | 'gold' | 'danger' | 'none'
  interactive?: boolean
}

export function Card({
  accentColor = 'none',
  interactive,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        'bg-(--color-surface) border border-(--color-border) rounded-xl',
        interactive && 'cursor-pointer transition-all active:scale-[0.98] active:bg-(--color-surface2)',
        accentColor === 'accent' && 'card-accent-bar',
        accentColor === 'gold'   && 'card-accent-bar card-accent-bar-gold',
        accentColor === 'danger' && 'card-accent-bar card-accent-bar-danger',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
