import clsx from 'clsx'
import { theme } from '@/config/theme'
import { useAppStore } from '@/store/appStore'
import { Button, Badge, Card, SectionHeader } from '@/components/ui'
import type { Room } from '@/types'

function RoomCard({ room, onJoin }: { room: Room; onJoin: (r: Room) => void }) {
  const isFull      = room.players >= room.maxPlayers
  const accentColor = room.variant === 'gold' ? 'gold' : room.variant === 'red' ? 'danger' : 'accent'
  const playerColor = room.variant === 'gold' ? 'text-(--color-gold)' : room.variant === 'red' ? 'text-(--color-danger)' : 'text-(--color-accent)'

  return (
    <Card accentColor={accentColor} interactive onClick={() => onJoin(room)} className="p-4">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 bg-(--color-surface2) rounded-xl flex items-center justify-center text-xl flex-shrink-0">
          {room.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-[15px] text-(--color-white) truncate">{room.name}</p>
          <p className="text-xs text-(--color-muted) font-medium mt-0.5">No limit · {room.stakes} stakes</p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className={clsx('font-mono text-sm font-bold', playerColor)}>
            {room.players} / {room.maxPlayers}
          </p>
          <p className="text-[11px] text-(--color-muted) mt-0.5">
            {isFull ? 'FULL' : room.blindSmall > 0 ? `Blind ${room.blindSmall}/${room.blindBig}` : 'LIVE'}
          </p>
        </div>
      </div>
    </Card>
  )
}

export function GameScreen({ onToast }: { onToast: (msg: string) => void }) {
  const rooms = useAppStore(s => s.rooms)
  const { meta } = theme

  return (
    <div className="flex flex-col pb-16 overflow-y-auto h-full">
      {/* Hero */}
      <div className="relative px-5 pt-6 pb-5 overflow-hidden"
           style={{ background: 'linear-gradient(160deg, #0d1f1a 0%, var(--color-bg) 65%)' }}>
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
             style={{ background: 'radial-gradient(circle, rgba(0,230,118,.12) 0%, transparent 70%)' }} />

        <Badge dot variant="accent" className="mb-3">LIVE NOW</Badge>
        <h1 className="font-display text-5xl tracking-wider text-(--color-white) leading-none mb-1">
          Texas <span className="text-(--color-accent)">Hold'em</span>
        </h1>
        <p className="text-sm text-(--color-muted) font-medium mb-5">Real-time · Live Dealer · Web3</p>

        <div className="flex gap-6">
          {meta.statsBar.map(s => (
            <div key={s.label}>
              <p className="font-display text-2xl text-(--color-gold) tracking-wide">{s.value}</p>
              <p className="text-[10px] text-(--color-muted) font-bold uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <SectionHeader title="GAME ROOMS" action="View all" onAction={() => onToast('Coming soon')} />

      <div className="flex flex-col gap-2.5 px-4">
        {rooms.map(room => (
          <RoomCard key={room.id} room={room} onJoin={() => onToast(`Joining ${room.name}…`)} />
        ))}
      </div>

      <div className="px-4 mt-5">
        <Button variant="primary" size="lg" fullWidth onClick={() => onToast('Opening lobby…')}>
          🃏 JOIN IN THE GAME
        </Button>
      </div>
    </div>
  )
}
