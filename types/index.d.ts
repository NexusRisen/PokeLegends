export interface DiscordStats {
  memberCount: number
  onlineCount: number
  serverName: string
  isLoading: boolean
  error: string | null
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  color: string
  glowColor: string
  position: { x: number; y: number }
}

export interface Star {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  twinkleOffset: number
}

export interface Nebula {
  x: number
  y: number
  size: number
  color: string
  opacity: number
  speed: { x: number; y: number }
}

export interface Sparkle {
  id: number
  x: number
  y: number
  opacity: number
  scale: number
}

export interface MascotExpression {
  type: 'happy' | 'curious' | 'excited' | 'sleepy'
}
