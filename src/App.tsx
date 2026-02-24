import { useTelegram }    from '@/hooks/useTelegram'
import { useToast }       from '@/hooks/useToast'
import { useAppStore }    from '@/store/appStore'
import { TabBar }         from '@/components/TabBar'
import { ToastContainer } from '@/components/ui'
import { GameScreen }     from '@/screens/GameScreen'
import { ClubScreen }     from '@/screens/ClubScreen'
import { AKScreen }       from '@/screens/AKScreen'
import { ShareScreen }    from '@/screens/ShareScreen'
import { ProfileScreen }  from '@/screens/ProfileScreen'

export default function App() {
  useTelegram()
  const activeTab = useAppStore(s => s.activeTab)
  const { toasts, show: toast } = useToast()

  const screens = {
    game:    <GameScreen    onToast={toast} />,
    club:    <ClubScreen    onToast={toast} />,
    ak:      <AKScreen      onToast={toast} />,
    share:   <ShareScreen   onToast={toast} />,
    profile: <ProfileScreen onToast={toast} />,
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
