export interface Room {
  id: string
  name: string
  emoji: string
  players: number
  maxPlayers: number
  stakes: string
  blindSmall: number
  blindBig: number
  variant: 'standard' | 'gold' | 'red'
}

// clubs used in the club screen and store
export interface Club {
  id: string
  name: string
  memberCount: number
  onlineCount: number
}

// player statistics shown on profile
export interface Stats {
  gamesPlayed: number
  winRate: number
}
