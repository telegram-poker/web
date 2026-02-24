import { useState } from 'react'
import clsx from 'clsx'
import { Button, Card } from '@/components/ui'

type ClubTab = 'create' | 'join' | null

export function ClubScreen({ onToast }: { onToast: (msg: string) => void }) {
  const [activeTab, setActiveTab] = useState<ClubTab>(null)
  const [myClubs] = useState<Array<{ id: string; name: string; members: number }>>([])

  return (
    <div className="flex flex-col pb-16 h-full overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex gap-3 px-4 pt-4 pb-4 border-b border-(--color-border)">
        <button
          onClick={() => setActiveTab('create')}
          className={clsx(
            'flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all',
            activeTab === 'create'
              ? 'bg-(--color-accent) text-(--color-bg)'
              : 'bg-(--color-surface) text-(--color-muted)'
          )}
        >
          创建俱乐部
        </button>
        <button
          onClick={() => setActiveTab('join')}
          className={clsx(
            'flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all',
            activeTab === 'join'
              ? 'bg-(--color-accent) text-(--color-bg)'
              : 'bg-(--color-surface) text-(--color-muted)'
          )}
        >
          加入俱乐部
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'create' && (
          <div className="flex flex-col items-center justify-center gap-4 px-4 py-12">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              style={{ background: 'rgba(0, 230, 118, 0.1)' }}
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-(--color-muted)">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>
            <p className="text-sm text-(--color-white) font-semibold mb-2">No permission</p>
            <p className="text-xs text-(--color-muted) text-center">
              Please contact customer service!
            </p>
          </div>
        )}

        {activeTab === 'join' && (
          <div className="flex flex-col gap-4 p-4">
            <Card className="p-4">
              <h3 className="font-bold text-(--color-white) mb-2">加入现有俱乐部</h3>
              <p className="text-xs text-(--color-muted) mb-4">
                输入邀请码加入朋友的俱乐部
              </p>
              <input
                type="text"
                placeholder="输入邀请码"
                className="w-full bg-(--color-surface) border border-(--color-border) rounded-lg px-3 py-2 text-(--color-white) text-sm placeholder-opacity-50 focus:outline-none focus:border-(--color-accent)"
              />
            </Card>

            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => onToast('加入俱乐部中...')}
            >
              加入
            </Button>
          </div>
        )}
      </div>

      {/* My Clubs Section */}
      <div className="border-t border-(--color-border) px-4 py-4">
        <h3 className="font-bold text-(--color-white) mb-3">我的俱乐部</h3>
        {myClubs.length === 0 ? (
          <div className="text-center py-6 opacity-50">
            <p className="text-sm text-(--color-muted)">还没有加入俱乐部</p>
          </div>
        ) : (
          <div className="space-y-2">
            {myClubs.map((club) => (
              <div
                key={club.id}
                className="flex items-center justify-between bg-(--color-surface) p-3 rounded-lg"
              >
                <div>
                  <p className="font-semibold text-(--color-white)">{club.name}</p>
                  <p className="text-xs text-(--color-muted)">{club.members} 人</p>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-(--color-muted)"
                >
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
