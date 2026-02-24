import { useState } from 'react'
import clsx from 'clsx'
import { useTelegram } from '@/hooks/useTelegram'
import { Card, Button } from '@/components/ui'

type AssetTab = 'personal' | 'data'

export function ProfileScreen({ onToast }: { onToast: (msg: string) => void }) {
  const { user } = useTelegram()
  const [activeAssetTab, setActiveAssetTab] = useState<AssetTab>('personal')

  // Use Telegram data or dummy data
  const displayName = user ? [user.first_name, user.last_name].filter(Boolean).join(' ') : 'Samuel'
  const userId = user?.id ?? 4165551708
  const photoUrl = user?.photo_url ?? undefined

  // Dummy data
  const akPoint = 4
  const qualityTokenAK = 0
  const stats = {
    wins: 12,
    tables: 8,
    referrals: 5,
  }
  const assets = [
    { symbol: 'USDT', name: 'USDT Tether', balance: 0, icon: '₮' },
    { symbol: 'AK', name: 'AK Token', balance: 0, icon: 'Ⓐ' },
    { symbol: 'PEEL', name: 'PEEL', balance: 0, icon: '🥒' },
  ]

  return (
    <div className="flex flex-col pb-16 overflow-y-auto h-full">
      {/* Profile Header */}
      <div className="bg-(--color-surface) border-b border-(--color-border) px-4 py-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            {photoUrl ? (
              <img
                src={photoUrl}
                alt={displayName}
                className="w-12 h-12 rounded-lg object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-(--color-accent) to-(--color-accent)/50 flex items-center justify-center font-bold text-(--color-white)">
                {displayName[0]?.toUpperCase()}
              </div>
            )}
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-base text-(--color-white)">{displayName}</h2>
            <p className="font-mono text-xs text-(--color-muted) mt-0.5">{userId}</p>
          </div>
          <button
            onClick={() => onToast('通知设置')}
            className="text-(--color-muted) hover:text-(--color-accent) transition-colors"
          >
            🔔
          </button>
          <button
            onClick={() => onToast('设置')}
            className="text-(--color-muted) hover:text-(--color-accent) transition-colors"
          >
            ⚙️
          </button>
          <button
            onClick={() => onToast('帮助')}
            className="text-(--color-muted) hover:text-(--color-accent) transition-colors"
          >
            ❓
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-3 px-4 py-4">
        <Button
          variant="secondary"
          size="sm"
          fullWidth
          onClick={() => onToast('充币中...')}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-lg">⬇️</span>
          <span className="text-xs">充币</span>
        </Button>
        <Button
          variant="secondary"
          size="sm"
          fullWidth
          onClick={() => onToast('提币中...')}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-lg">⬆️</span>
          <span className="text-xs">提币</span>
        </Button>
        <Button
          variant="secondary"
          size="sm"
          fullWidth
          onClick={() => onToast('账单中...')}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-lg">📊</span>
          <span className="text-xs">账单</span>
        </Button>
      </div>

      {/* Points and Tokens */}
      <div className="grid grid-cols-2 gap-3 px-4">
        <Card className="p-4 text-center">
          <p className="text-xs text-(--color-muted) font-semibold mb-1">AK Point</p>
          <p className="font-display text-3xl text-(--color-accent) font-bold">{akPoint}</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-xs text-(--color-muted) font-semibold mb-1">质币 (AK)</p>
          <p className="font-display text-3xl text-(--color-white) font-bold">{qualityTokenAK}</p>
        </Card>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-3 px-4 py-4">
        <Card className="p-3 text-center">
          <div className="w-10 h-10 mx-auto mb-1 bg-(--color-accent)/10 rounded-lg flex items-center justify-center">
            🏆
          </div>
          <p className="font-display text-lg text-(--color-white) font-bold">{stats.wins}</p>
          <p className="text-[10px] text-(--color-muted) font-semibold mt-0.5">战绩</p>
        </Card>
        <Card className="p-3 text-center">
          <div className="w-10 h-10 mx-auto mb-1 bg-(--color-accent)/10 rounded-lg flex items-center justify-center">
            🎴
          </div>
          <p className="font-display text-lg text-(--color-white) font-bold">{stats.tables}</p>
          <p className="text-[10px] text-(--color-muted) font-semibold mt-0.5">牌局</p>
        </Card>
        <Card className="p-3 text-center">
          <div className="w-10 h-10 mx-auto mb-1 bg-(--color-accent)/10 rounded-lg flex items-center justify-center">
            👥
          </div>
          <p className="font-display text-lg text-(--color-white) font-bold">{stats.referrals}</p>
          <p className="text-[10px] text-(--color-muted) font-semibold mt-0.5">邀请</p>
        </Card>
      </div>

      {/* Asset Tabs */}
      <div className="flex gap-3 px-4 py-3 border-b border-(--color-border)">
        <button
          onClick={() => setActiveAssetTab('personal')}
          className={clsx(
            'text-sm font-semibold pb-2 border-b-2 transition-colors',
            activeAssetTab === 'personal'
              ? 'text-(--color-accent) border-(--color-accent)'
              : 'text-(--color-muted) border-transparent'
          )}
        >
          个人资产
        </button>
        <button
          onClick={() => setActiveAssetTab('data')}
          className={clsx(
            'text-sm font-semibold pb-2 border-b-2 transition-colors',
            activeAssetTab === 'data'
              ? 'text-(--color-accent) border-(--color-accent)'
              : 'text-(--color-muted) border-transparent'
          )}
        >
          数据
        </button>
      </div>

      {/* Assets List */}
      {activeAssetTab === 'personal' && (
        <div className="flex-1 px-4 py-4 space-y-3">
          {assets.map((asset) => (
            <div
              key={asset.symbol}
              className="flex items-center justify-between bg-(--color-surface) border border-(--color-border) rounded-lg p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-(--color-accent)/10 rounded-full flex items-center justify-center text-lg">
                  {asset.icon}
                </div>
                <div>
                  <p className="font-semibold text-(--color-white) text-sm">{asset.symbol}</p>
                  <p className="text-xs text-(--color-muted)">{asset.name}</p>
                </div>
              </div>
              <p className="font-mono font-bold text-(--color-accent)">{asset.balance}</p>
            </div>
          ))}
        </div>
      )}

      {activeAssetTab === 'data' && (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-(--color-muted) text-sm">更新中...</p>
        </div>
      )}
    </div>
  )
}
