import { useEffect } from 'react'

declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        ready: () => void
        expand: () => void
        enableClosingConfirmation: () => void
        disableClosingConfirmation: () => void
        initData: string
        initDataUnsafe: {
          query_id?: string
          user?: {
            id: number
            is_bot: boolean
            first_name: string
            last_name?: string
            username?: string
            language_code?: string
            is_premium?: boolean
            photo_url?: string
          }
          auth_date?: number
          hash?: string
          start_param?: string
        }
        MainButton: {
          show: () => void
          hide: () => void
          setText: (text: string) => void
          onClick: (callback: () => void) => void
          offClick: (callback: () => void) => void
        }
        BackButton: {
          show: () => void
          hide: () => void
          onClick: (callback: () => void) => void
          offClick: (callback: () => void) => void
        }
        HapticFeedback: {
          impactOccurred: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void
          notificationOccurred: (type: 'error' | 'success' | 'warning') => void
          selectionChanged: () => void
        }
      }
    }
  }
}

import { useEffect } from 'react'
import { useAppStore } from '@/store/appStore'

export function useTelegram() {
  const setUser = useAppStore((s) => s.setUser)
  const storeUser = useAppStore((s) => s.user)

  useEffect(() => {
    const tg = window.Telegram?.WebApp
    if (tg) {
      try {
        tg.ready()
        tg.expand()
      } catch (e) {
        console.log('Telegram WebApp not available (development mode)')
      }
    }
  }, [])

  const webApp = window.Telegram?.WebApp
  const user = webApp?.initDataUnsafe?.user

  // mirror into store so all components can access
  useEffect(() => {
    // only update when running inside Telegram
    if (webApp) {
      setUser(user)
    }
  }, [user, setUser, webApp])

  // if not inside telegram and store has no user yet, seed dummy
  useEffect(() => {
    if (!webApp && !storeUser) {
      setUser({
        id: 0,
        is_bot: false,
        first_name: 'Guest',
        last_name: undefined,
      })
    }
  }, [webApp, storeUser, setUser])

  return {
    webApp,
    user,
    isAvailable: !!webApp,
    initData: webApp?.initData || '',
  }
}

