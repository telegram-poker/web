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
