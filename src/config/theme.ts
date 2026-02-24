export type TabId = 'game' | 'club' | 'ak' | 'share' | 'profile'

export const theme = {
  meta: {
    name: 'AK Poker',
    botHandle: '@AKPokerBot',
    tagline: 'Play Poker, Earn Crypto',
    features: [
      'Real-time Texas Hold\'em',
      'Live professional dealers',
      'Web3 integrated payments',
      'Instant withdrawals',
    ],
    statsBar: [
      { label: 'Players', value: '1.2M' },
      { label: 'Tables', value: '42K' },
      { label: 'Volume', value: '$450M' },
    ],
    footerNote: 'All games are Fair & Secure',
  },
  tabs: [
    { id: 'game' as const, label: '游戏', icon: '♠️' },
    { id: 'club' as const, label: '俱乐部', icon: '🛡️' },
    { id: 'ak' as const, label: 'AK', icon: '💎' },
    { id: 'share' as const, label: '分享', icon: '📋' },
    { id: 'profile' as const, label: '我的', icon: '👤' },
  ],
  hero: {
    // darker gradient to ensure vibrant percentage text pops
    background: 'linear-gradient(160deg, #12181c 0%, #1a2026 100%)',
    highlight: 'radial-gradient(circle, rgba(0,230,118,.15) 0%, transparent 70%)',
    // use exact colors to ensure visibility on dark backgrounds
    textGradient: {
      fromColor: '#3ddc84',
      toColor: '#00e0ff',
    },
    title: 'Profit Sharing',
    percentage: '100%',
    subtitle: 'Stake AK Tokens, Weekly Profit Sharing',
    buttonText: 'Become a Shareholder >',
  },

}

