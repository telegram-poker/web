import { useState } from 'react'
import clsx from 'clsx'
import { Button, Card } from '@/components/ui'

export function GameScreen({ onToast }: { onToast: (msg: string) => void }) {
  const [inviteCode, setInviteCode] = useState('')

  const inviteCodeBoxes = inviteCode.padEnd(6, ' ').split('').slice(0, 6)

  return (
    <div className="flex flex-col pb-16 overflow-y-auto h-full">
      {/* Hero section with table image */}
      <div
        className="relative w-full h-48 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0a2a1a 0%, #0d1f2a 100%)',
        }}
      >
        {/* Poker table background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-40 h-40 rounded-full border-8"
            style={{
              borderColor: 'rgba(0, 230, 118, 0.2)',
              background: 'radial-gradient(circle, rgba(0, 230, 118, 0.05) 0%, transparent 70%)',
            }}
          />
        </div>

        {/* Dealer chip icon */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2">
          <div className="text-6xl">🔘</div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center gap-6 px-6 py-8">
        {/* AK Logo */}
        <div className="text-center">
          <h1 className="font-display text-6xl tracking-wider text-(--color-white) font-bold">
            A<span className="text-(--color-accent)">K</span>
          </h1>
          <p className="text-2xl text-(--color-accent) tracking-widest font-bold">♠ ♥</p>
        </div>

        {/* AKPOKER Text */}
        <h2 className="font-display text-3xl tracking-widest text-(--color-white) font-bold">AKPOKER</h2>

        {/* Description */}
        <p className="text-xs text-(--color-muted) text-center leading-relaxed">
          输入邀请码在 AK 平台上与朋友一起竞技
        </p>

        {/* Invite Code Input Boxes */}
        <div className="flex gap-2">
          {inviteCodeBoxes.map((char, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              value={char}
              onChange={(e) => {
                const newCode = e.target.value.toUpperCase()
                const codes = inviteCode.split('')
                codes[i] = newCode
                setInviteCode(codes.join('').slice(0, 6))
                if (newCode && i < 5) {
                  const nextInput = document.querySelector(
                    `input[data-index="${i + 1}"]`
                  ) as HTMLInputElement
                  nextInput?.focus()
                }
              }}
              data-index={i}
              placeholder="-"
              className={clsx(
                'w-10 h-10 border-2 rounded-lg text-center font-bold text-sm',
                'bg-(--color-surface) text-(--color-white)',
                'border-(--color-border) focus:border-(--color-accent) focus:outline-none',
                'transition-colors'
              )}
            />
          ))}
        </div>

        {/* Helper text */}
        <p className="text-xs text-(--color-muted) text-center">
          发起游戏，邀请朋友一起竞技
        </p>
      </div>

      {/* Create Game Button */}
      <div className="px-6 pb-6">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={() => {
            onToast(
              inviteCode.trim()
                ? `加入游戏 ${inviteCode}...`
                : '创建新游戏...'
            )
          }}
        >
          创建游戏
        </Button>
      </div>
    </div>
  )
}
