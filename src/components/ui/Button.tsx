import { type ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:   ButtonVariant
  size?:      ButtonSize
  fullWidth?: boolean
  icon?:      string
}

export function Button({
  variant   = 'primary',
  size      = 'md',
  fullWidth,
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'font-body font-bold tracking-wide rounded-xl transition-all duration-150',
        'active:scale-[0.97] select-none flex items-center justify-center gap-2',
        'disabled:opacity-40 disabled:pointer-events-none',
        variant === 'primary'   && 'bg-(--color-accent) text-(--color-accent-text) shadow-(--shadow-accent)',
        variant === 'secondary' && 'bg-(--color-surface) border border-(--color-border) text-(--color-white) hover:border-(--color-accent)/40',
        variant === 'ghost'     && 'text-(--color-accent) hover:bg-(--color-accent)/10',
        variant === 'danger'    && 'bg-(--color-danger)/10 border border-(--color-danger)/40 text-(--color-danger)',
        size === 'sm' && 'text-xs px-3 py-2',
        size === 'md' && 'text-sm px-4 py-3',
        size === 'lg' && 'text-lg px-4 py-4 font-display tracking-widest',
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  )
}
