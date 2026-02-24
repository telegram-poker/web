import { theme } from '@/config/theme'
import { Button, Card } from '@/components/ui'

export function AKScreen({ onToast }: { onToast: (msg: string) => void }) {
  const { meta } = theme

  return (
    <div className="flex flex-col pb-16 overflow-y-auto h-full">
      {/* Hero banner */}
      <div
        className="relative mx-4 mt-4 rounded-xl overflow-hidden border border-(--color-accent)/20 p-5"
        style={{ background: 'linear-gradient(135deg, #0a2a1a 0%, #0d1f2a 100%)' }}
      >
        {/* Glow blob */}
        <div
          className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,230,118,0.15) 0%, transparent 70%)' }}
        />

        <p className="font-mono text-xs text-(--color-accent) mb-2 tracking-wide">{meta.botHandle}</p>
        <h1 className="font-display text-3xl text-(--color-white) leading-tight tracking-wide mb-4">
          {meta.tagline.split(',')[0]},<br />
          <span className="text-(--color-accent)">{meta.tagline.split(',')[1]}</span>
        </h1>

        <div className="flex flex-col gap-1 mb-4">
          <p className="text-xs text-(--color-muted)"><strong className="text-(--color-white)">1 billion</strong> active users</p>
          <p className="text-xs text-(--color-muted)"><strong className="text-(--color-white)">22 million</strong> groups</p>
          <p className="text-xs text-(--color-muted)">Use {meta.botHandle} to earn money</p>
        </div>
      </div>

      {/* Intro text */}
      <div className="px-4 pt-4 pb-2">
        <p className="font-bold text-(--color-white) mb-1">Welcome to {meta.name}!</p>
        <p className="text-sm text-(--color-muted) leading-relaxed">
          {meta.name} is a real-time, live-dealer Texas Hold'em online gaming platform deeply integrated with Web3 technology.
        </p>
      </div>

      {/* Feature cards */}
      <div className="flex flex-col gap-2.5 px-4 py-2">
        {meta.features.map((f, i) => (
          <Card key={i} className="flex items-start gap-3 p-3">
            <span className="text-xl leading-snug">{f.icon}</span>
            <p className="text-sm text-(--color-white) font-medium leading-snug">{f.text}</p>
          </Card>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="flex flex-col gap-2 px-4 pt-2">
        <Button variant="primary" fullWidth size="lg" onClick={() => onToast('Joining game…')}>
          🃏 Join in the game
        </Button>

        <div className="grid grid-cols-2 gap-2">
          <Button variant="secondary" onClick={() => onToast('Opening website…')}>🌐 Website</Button>
          <Button variant="secondary" onClick={() => onToast('Contacting support…')}>🙋 Support</Button>
          <Button variant="secondary" onClick={() => onToast('Opening TG group…')}>👥 TG Group</Button>
          <Button variant="secondary" onClick={() => onToast('Opening Twitter…')}>🐦 Twitter</Button>
          <Button variant="secondary" onClick={() => onToast('Chinese selected')}>🇨🇳 Chinese</Button>
          <Button variant="secondary" onClick={() => onToast('English selected ✓')}>🇺🇸 English</Button>
        </div>

        <Button variant="secondary" fullWidth onClick={() => onToast('Invite link copied!')}>
          🔥 Invite me to your group
        </Button>
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-(--color-muted) font-semibold px-4 py-4">
        Play {meta.name} &nbsp;·&nbsp;{' '}
        <span className="text-(--color-accent)">{meta.footerNote}</span>
      </p>
    </div>
  )
}
