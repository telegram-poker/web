import clsx from 'clsx'
import { theme, type TabId } from '@/config/theme'
import { useAppStore } from '@/store/appStore'

const ICONS: Record<TabId, JSX.Element | null> = {
  game: (
    <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-current">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
    </svg>
  ),
  club: (
    <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-current">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  ),
  ak: null,
  share: (
    <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-current">
      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92S19.61 16.08 18 16.08z" />
    </svg>
  ),
  profile: (
    <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-current">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  ),
}

export function TabBar() {
  const { activeTab, setTab } = useAppStore()

  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-16 bg-(--color-surface) border-t border-(--color-border) flex items-center justify-around z-50"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {theme.tabs.map(tab => {
        const active = activeTab === tab.id
        const isLogo = tab.id === 'ak'

        return (
          <button
            key={tab.id}
            onClick={() => setTab(tab.id)}
            className={clsx(
              'flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl transition-all relative select-none',
              active ? 'text-(--color-accent)' : 'text-(--color-muted)',
            )}
          >
            {active && (
              <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-7 h-0.5 bg-(--color-accent) rounded-full" />
            )}

            {isLogo ? (
              <span className={clsx(
                'w-10 h-10 rounded-xl flex items-center justify-center font-display text-base tracking-widest transition-all',
                active
                  ? 'bg-(--color-accent) text-(--color-accent-text)'
                  : 'bg-(--color-surface2) border border-(--color-border) text-(--color-accent)',
              )}>
                AK
              </span>
            ) : (
              ICONS[tab.id]
            )}

            <span className="text-[10px] font-bold tracking-wide leading-none">
              {tab.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
