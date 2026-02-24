export function SectionHeader({
  title,
  action,
  onAction,
}: {
  title: string
  action?: string
  onAction?: () => void
}) {
  return (
    <div className="flex items-center justify-between px-4 py-4">
      <h2 className="font-display text-lg font-bold text-(--color-white) uppercase tracking-wide">{title}</h2>
      {action && (
        <button
          onClick={onAction}
          className="text-xs font-semibold text-(--color-accent) hover:opacity-80 transition-opacity"
        >
          {action}
        </button>
      )}
    </div>
  )
}
