import React, { useEffect, useRef } from 'react'
import { useAppStore } from '@/store/appStore'
import { useTelegram } from '@/hooks/useTelegram'

/**
 * Simple login screen that either shows a Telegram login widget
 * (for web) or instructs the user to open the app inside Telegram.
 *
 * Requires VITE_TELEGRAM_BOT_USERNAME to be set in environment.
 */
export function LoginScreen() {
  const { isAvailable, user } = useTelegram()
  const botUsername = import.meta.env.VITE_TELEGRAM_BOT_USERNAME || ''
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (widgetRef.current && botUsername && !user) {
      // define global callback for widget
      (window as any).onTelegramAuth = (userData: any) => {
        console.log('telegram login', userData)
        // reload so useTelegram picks up initData (if available)
        window.location.reload()
      }

      // inject Telegram login widget script
      const script = document.createElement('script')
      script.src = 'https://telegram.org/js/telegram-widget.js?19'
      script.async = true
      script.setAttribute('data-telegram-login', botUsername)
      script.setAttribute('data-size', 'large')
      script.setAttribute('data-userpic', 'false')
      script.setAttribute('data-lang', 'en')
      script.setAttribute('data-onauth', 'onTelegramAuth')
      widgetRef.current.appendChild(script)
    }
  }, [botUsername, user])

  return (
    <div className="flex flex-col h-full items-center justify-center p-4">
      {isAvailable && !user ? (
        <p className="text-center text-sm text-(--color-muted)">
          Please open this mini‑app inside Telegram to log in with your
          account.
        </p>
      ) : !isAvailable && !user ? (
        <div className="space-y-4">
          <div ref={widgetRef} />
          <p className="text-xs text-(--color-muted) text-center">
            After logging in, the page will refresh and you should see your
            profile info.
          </p>
        </div>
      ) : null}
    </div>
  )
}
