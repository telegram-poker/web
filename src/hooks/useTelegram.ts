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

export function useTelegram() {
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

  return {
    webApp,
    user,
    isAvailable: !!webApp,
    initData: webApp?.initData || '',
  }
}

