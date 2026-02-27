import { useTelegram } from '@/hooks/useTelegram'
import { useAppStore } from '@/store/appStore'
import { Card } from '@/components/ui'

function ProfileRow({ icon, label, value, onClick }: { icon: string; label: string; value?: string; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-3 bg-(--color-surface) border border-(--color-border) rounded-xl px-4 py-3 cursor-pointer active:bg-(--color-surface2) transition-colors"
    >
      <div className="w-9 h-9 bg-(--color-surface2) rounded-xl flex items-center justify-center text-base flex-shrink-0">
        {icon}
      </div>
      <span className="flex-1 font-semibold text-sm text-(--color-white)">{label}</span>
      {value && <span className="font-mono text-sm text-(--color-gold)">{value}</span>}
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-(--color-muted) flex-shrink-0">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      </svg>
    </div>
  )
}

export function ProfileScreen({ onToast }: { onToast: (msg: string) => void }) {
  const { user: tgUser } = useTelegram()
  const storeUser = useAppStore(s => s.user)
  const { balance, stats } = useAppStore()

  const user = tgUser || storeUser
  const displayName = user ? [user.first_name, user.last_name].filter(Boolean).join(' ') : 'Guest'
  const initials    = displayName[0]?.toUpperCase() ?? '?'

  return (
    <div className="flex flex-col gap-3 p-4 pb-20 overflow-y-auto h-full">
      <Card className="flex items-center gap-4 p-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-(--color-accent) to-(--color-accent-dim) flex items-center justify-center font-display text-2xl text-(--color-accent-text) flex-shrink-0">
          {initials}
        </div>
        <div>
          <p className="font-bold text-lg text-(--color-white)">{displayName}</p>
          {user && <p className="font-mono text-xs text-(--color-muted) mt-0.5">ID: {user.id}</p>}
          <span className="inline-flex items-center gap-1 bg-(--color-gold)/10 border border-(--color-gold)/30 rounded-lg px-2 py-0.5 text-[11px] text-(--color-gold) font-bold mt-1.5">
            ⭐ Bronze
          </span>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-2">
        <Card className="p-3 text-center">
          <p className="font-display text-2xl text-(--color-accent)">{stats.gamesPlayed}</p>
          <p className="text-[10px] text-(--color-muted) font-bold uppercase tracking-wide mt-0.5">Games Played</p>
        </Card>
        <Card className="p-3 text-center">
          <p className="font-display text-2xl text-(--color-gold)">{stats.gamesPlayed > 0 ? `${stats.winRate}%` : '—'}</p>
          <p className="text-[10px] text-(--color-muted) font-bold uppercase tracking-wide mt-0.5">Win Rate</p>
        </Card>
      </div>

      <div className="flex flex-col gap-2">
        <ProfileRow icon="💰" label="My Balance"    value={`$${balance.toFixed(2)}`} onClick={() => onToast('Wallet coming soon')} />
        <ProfileRow icon="📊" label="My Statistics"                                   onClick={() => onToast('Stats coming soon')}  />
        <ProfileRow icon="🏅" label="Achievements"                                    onClick={() => onToast('Coming soon')}        />
        <ProfileRow icon="⚙️" label="Settings"                                        onClick={() => onToast('Coming soon')}        />
        <ProfileRow icon="🆘" label="Support"                                         onClick={() => onToast('Contacting support…')}/>
      </div>
    </div>
  )
}
