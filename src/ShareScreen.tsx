import { useTelegram } from '@/hooks/useTelegram'
import { useAppStore } from '@/store/appStore'
import { Button, Card } from '@/components/ui'

export function ShareScreen({ onToast }: { onToast: (msg: string) => void }) {
  const { user } = useTelegram()
  const { referralCode, referralCount, referralEarned } = useAppStore()

  const code = user
    ? `AK-${String(user.id).slice(-4).padStart(4, '0')}-${user.id}`
    : referralCode

  function copyCode() {
    navigator.clipboard?.writeText(code).catch(() => {})
    onToast('Referral code copied! ✓')
  }

  function shareToTelegram() {
    const text = encodeURIComponent(`🃏 Join me on AK Poker! Use my code: ${code}`)
    window.open(`https://t.me/share/url?url=https://t.me/AKPokerPro_bot&text=${text}`)
  }

  const stats = [
    { label: 'Friends', value: referralCount },
    { label: 'Active',  value: 0 },
    { label: 'Earned',  value: `$${referralEarned}` },
  ]

  return (
    <div className="flex flex-col gap-3 p-4 pb-20 overflow-y-auto h-full">
      <Card className="p-5">
        <h2 className="font-display text-xl tracking-widest mb-1 text-(--color-white)">🔥 Invite &amp; Earn</h2>
        <p className="text-sm text-(--color-muted) leading-relaxed mb-4">
          Share your referral link and earn a commission on every game your friends play.
        </p>
        <div className="flex items-center justify-between bg-(--color-surface2) border border-dashed border-(--color-border) rounded-xl px-4 py-3 mb-4">
          <span className="font-mono text-base text-(--color-gold) tracking-widest">{code}</span>
          <button onClick={copyCode} className="text-xs font-bold text-(--color-accent) bg-(--color-accent)/10 border border-(--color-accent)/20 rounded-lg px-3 py-1.5">
            COPY
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {stats.map(s => (
            <div key={s.label} className="bg-(--color-surface2) rounded-xl p-3 text-center">
              <p className="font-display text-2xl text-(--color-gold)">{s.value}</p>
              <p className="text-[10px] text-(--color-muted) font-bold uppercase tracking-wide mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-5">
        <h2 className="font-display text-xl tracking-widest mb-1 text-(--color-white)">📢 Share Now</h2>
        <p className="text-sm text-(--color-muted) leading-relaxed mb-4">
          Share directly to Telegram, copy your link, or post on social media.
        </p>
        <div className="flex gap-2">
          <Button variant="primary"   className="flex-1" onClick={shareToTelegram}>Share to TG</Button>
          <Button variant="secondary" className="flex-1" onClick={copyCode}>Copy Link</Button>
        </div>
      </Card>
    </div>
  )
}
