import { useState, useEffect } from 'react'
import { useTelegram }    from '@/hooks/useTelegram'
import { useToast }       from '@/hooks/useToast'
import { useAppStore }    from '@/store/appStore'
import { TabBar }         from '@/components/TabBar'
import { ToastContainer } from '@/components/ui'
import { Loader }         from '@/components/ui/Loader'
import { GameScreen }     from '@/screens/GameScreen'
import { ClubScreen }     from '@/screens/ClubScreen'
import { AKScreen }       from '@/screens/AKScreen'
import { ShareScreen }    from '@/screens/ShareScreen'
import { ProfileScreen }  from '@/screens/ProfileScreen'

export default function App() {
  useTelegram()
  const activeTab = useAppStore(s => s.activeTab)
  const { toasts, show: toast } = useToast()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  const screens = {
    game:    <GameScreen    onToast={toast} />,
    club:    <ClubScreen    onToast={toast} />,
    ak:      <AKScreen      onToast={toast} />,
    share:   <ShareScreen   onToast={toast} />,
    profile: <ProfileScreen onToast={toast} />,
  }

  if (loading) {
    return (
      <div className="flex flex-col h-dvh bg-(--color-bg)">
        <main className="flex-1 flex items-center justify-center">
          <Loader />
        </main>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-dvh bg-(--color-bg) overflow-hidden">
      <main className="flex-1 overflow-hidden animate-(--animate-fade-up)">
        {screens[activeTab]}
      </main>
      <TabBar />
      <ToastContainer toasts={toasts} />
    </div>
  )
}
