import { type HTMLAttributes } from 'react'
import clsx from 'clsx'

type BadgeVariant = 'accent' | 'gold' | 'danger' | 'muted'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  dot?:     boolean
}

export function Badge({ variant = 'accent', dot, className, children, ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold tracking-wide',
        variant === 'accent' && 'bg-(--color-accent)/10 border border-(--color-accent)/30 text-(--color-accent)',
        variant === 'gold'   && 'bg-(--color-gold)/10   border border-(--color-gold)/30   text-(--color-gold)',
        variant === 'danger' && 'bg-(--color-danger)/10 border border-(--color-danger)/30 text-(--color-danger)',
        variant === 'muted'  && 'bg-(--color-surface2)  border border-(--color-border)    text-(--color-muted)',
        className,
      )}
      {...props}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current animate-(--animate-pulse-dot)" />}
      {children}
    </span>
  )
}
