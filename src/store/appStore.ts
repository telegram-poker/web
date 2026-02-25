import { create } from 'zustand'
import type { Room, Club, Stats } from '@/types'

// tab identifiers used throughout the app
type Tab = 'game' | 'club' | 'ak' | 'share' | 'profile'

interface AppState {
  activeTab: Tab
  setTab: (tab: Tab) => void

  score: number
  setScore: (score: number) => void
  incrementScore: (amount: number) => void

  rooms: Room[]

  // club-related state
  clubMode: 'create' | 'join' | null
  setClubMode: (mode: 'create' | 'join' | null) => void
  myClubs: Club[]

  // profile / user info
  balance: number
  stats: Stats

  // referral page state
  referralCode: string
  referralCount: number
  referralEarned: number
}

const INITIAL_ROOMS: Room[] = [
  {
    id: '1',
    name: 'Neon Table',
    emoji: '⚡',
    players: 5,
    maxPlayers: 6,
    stakes: '$10-$20',
    blindSmall: 10,
    blindBig: 20,
    variant: 'standard',
  },
  {
    id: '2',
    name: 'Gold Rush',
    emoji: '🏆',
    players: 4,
    maxPlayers: 6,
    stakes: '$50-$100',
    blindSmall: 50,
    blindBig: 100,
    variant: 'gold',
  },
  {
    id: '3',
    name: 'Danger Zone',
    emoji: '🔥',
    players: 6,
    maxPlayers: 6,
    stakes: '$100-$200',
    blindSmall: 100,
    blindBig: 200,
    variant: 'red',
  },
]

const INITIAL_CLUBS: Club[] = []

export const useAppStore = create<AppState>((set) => ({
  activeTab: 'game',
  setTab: (tab) => set({ activeTab: tab }),

  score: 0,
  setScore: (score) => set({ score }),
  incrementScore: (amount) => set((state) => ({ score: state.score + amount })),

  rooms: INITIAL_ROOMS,

  clubMode: null,
  setClubMode: (mode) => set({ clubMode: mode }),
  myClubs: INITIAL_CLUBS,

  balance: 0,
  stats: { gamesPlayed: 0, winRate: 0 },

  referralCode: '',
  referralCount: 0,
  referralEarned: 0,
}))
