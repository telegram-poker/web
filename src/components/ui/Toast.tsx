import clsx from 'clsx'
import type { Toast as ToastType } from '@/hooks/useToast'

export function ToastContainer({ toasts }: { toasts: ToastType[] }) {
  return (
    <div className="fixed bottom-20 left-0 right-0 z-50 flex flex-col items-center gap-2 pointer-events-none px-4">
      {toasts.map(t => (
        <div
          key={t.id}
          className={clsx(
            'animate-(--animate-fade-up) px-5 py-2.5 rounded-xl text-sm font-bold border backdrop-blur-sm',
            t.type === 'success' && 'bg-(--color-accent)/10 border-(--color-accent)/30 text-(--color-accent)',
            t.type === 'error'   && 'bg-(--color-danger)/10 border-(--color-danger)/30 text-(--color-danger)',
            t.type === 'info'    && 'bg-(--color-surface2)  border-(--color-border)    text-(--color-white)',
          )}
        >
          {t.message}
        </div>
      ))}
    </div>
  )
}
