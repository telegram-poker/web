import { useState } from 'react'
import { theme } from '@/config/theme'
import { Button, Card, ProfitHero } from '@/components/ui'

type AKTab = 'my-games' | 'club' | 'featured'

export function AKScreen({ onToast }: { onToast: (msg: string) => void }) {
  const [activeTab, setActiveTab] = useState<AKTab>('my-games')

  return (
    <div className="flex flex-col pb-16 overflow-y-auto h-full">
      {/* Profit Sharing Hero */}
      <ProfitHero onBecomeShareholder={() => onToast('Become a Shareholder')} />

      {/* Tab Navigation (container with padding and border) */}
      <div className="flex gap-8 -mx-5 px-5 py-2 border-b border-(--color-border)">
        <button
          onClick={() => setActiveTab('my-games')}
          className={`pb-2 border-b-2 transition-colors font-semibold text-sm ${
            activeTab === 'my-games'
              ? 'text-(--color-accent) border-(--color-accent)'
              : 'text-(--color-muted) border-transparent'
          }`}
        >
          我的游戏
        </button>
        <button
          onClick={() => setActiveTab('club')}
          className={`pb-2 border-b-2 transition-colors font-semibold text-sm ${
            activeTab === 'club'
              ? 'text-(--color-accent) border-(--color-accent)'
              : 'text-(--color-muted) border-transparent'
          }`}
        >
          俱州
        </button>
        <button
          onClick={() => setActiveTab('featured')}
          className={`pb-2 border-b-2 transition-colors font-semibold text-sm ${
            activeTab === 'featured'
              ? 'text-(--color-accent) border-(--color-accent)'
              : 'text-(--color-muted) border-transparent'
          }`}
        >
          6+
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <p className="text-sm text-(--color-muted) font-semibold">敬请期待</p>
      </div>
    </div>
  )
}
