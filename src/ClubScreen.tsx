import clsx from 'clsx'
import { useAppStore } from '@/store/appStore'
import type { Club } from '@/types'

function EmptyClubs() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-3 opacity-30 py-20 px-8">
      <svg viewBox="0 0 24 24" className="w-14 h-14 fill-(--color-muted)">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
      <p className="text-sm text-(--color-muted) font-semibold text-center leading-relaxed">
        No clubs yet.<br />Create or join one to get started.
      </p>
    </div>
  )
}

function ClubItem({ club }: { club: Club }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 border-b border-(--color-border)/50 last:border-0">
      <div className="w-10 h-10 bg-(--color-accent)/10 border border-(--color-accent)/20 rounded-xl flex items-center justify-center font-display text-lg text-(--color-accent)">
        {club.name[0]}
      </div>
      <div className="flex-1">
        <p className="font-bold text-sm text-(--color-white)">{club.name}</p>
        <p className="text-xs text-(--color-muted)">{club.memberCount} members · {club.onlineCount} online</p>
      </div>
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-(--color-muted)">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      </svg>
    </div>
  )
}

interface ActionButtonProps {
  label:   string
  sublabel: string
  icon:    JSX.Element
  active:  boolean
  onClick: () => void
}

function ActionButton({ label, sublabel, icon, active, onClick }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex-1 flex items-center gap-3 px-5 py-4 transition-all',
        active ? 'bg-(--color-accent)' : 'bg-(--color-surface) hover:bg-(--color-surface2)',
      )}
    >
      <div className={clsx(
        'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0',
        active ? 'bg-black/15' : 'bg-(--color-surface2)',
      )}>
        <span className={active ? 'text-(--color-accent-text)' : 'text-(--color-muted)'}>{icon}</span>
      </div>
      <div className="text-left">
        <p className={clsx('font-bold text-sm', active ? 'text-(--color-accent-text)' : 'text-(--color-white)')}>
          {label}
        </p>
        <p className={clsx('font-mono text-[9px] tracking-widest mt-0.5', active ? 'text-(--color-accent-text)/50' : 'text-(--color-muted)')}>
          {sublabel}
        </p>
      </div>
    </button>
  )
}

export function ClubScreen({ onToast }: { onToast: (msg: string) => void }) {
  const { clubMode, setClubMode, myClubs } = useAppStore()

  const createIcon = (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 0 1 0 2h-6v6a1 1 0 0 1-2 0v-6H5a1 1 0 0 1 0-2h6V5a1 1 0 0 1 1-1z"/>
    </svg>
  )
  const joinIcon = (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>
  )

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex border-b border-(--color-border)">
        <ActionButton label="创建俱乐部" sublabel=">>>" icon={createIcon} active={clubMode === 'create'} onClick={() => setClubMode('create')} />
        <div className="w-px bg-(--color-border)" />
        <ActionButton label="加入俱乐部" sublabel=">>>" icon={joinIcon}   active={clubMode === 'join'}   onClick={() => setClubMode('join')}   />
      </div>

      <p className="px-5 pt-4 pb-2 text-xs font-bold text-(--color-muted) uppercase tracking-widest">我的俱乐部</p>

      <div className="flex-1 overflow-y-auto flex flex-col">
        {myClubs.length === 0 ? <EmptyClubs /> : myClubs.map(c => <ClubItem key={c.id} club={c} />)}
      </div>
    </div>
  )
}
