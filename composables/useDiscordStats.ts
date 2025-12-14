import type { DiscordStats } from '~/types'

const DISCORD_SERVER_ID = '1447990954903470234'
const CACHE_DURATION = 60000 // 1 minute

export function useDiscordStats() {
  const stats = ref<DiscordStats>({
    memberCount: 0,
    onlineCount: 0,
    serverName: 'Pokémon Legends',
    isLoading: true,
    error: null
  })

  const fetchStats = async () => {
    stats.value.isLoading = true
    stats.value.error = null

    try {
      const response = await fetch(
        `https://discord.com/api/guilds/${DISCORD_SERVER_ID}/widget.json`
      )

      if (!response.ok) {
        throw new Error('Failed to fetch Discord stats')
      }

      const data = await response.json()

      stats.value.memberCount = data.presence_count || 0
      stats.value.onlineCount = data.presence_count || 0
      stats.value.serverName = data.name || 'Pokémon Legends'
    } catch (error) {
      stats.value.error = error instanceof Error ? error.message : 'Unknown error'
      // Fallback values
      stats.value.memberCount = 500
      stats.value.onlineCount = 50
    } finally {
      stats.value.isLoading = false
    }
  }

  let interval: ReturnType<typeof setInterval> | null = null

  onMounted(() => {
    fetchStats()
    interval = setInterval(fetchStats, CACHE_DURATION)
  })

  onUnmounted(() => {
    if (interval) {
      clearInterval(interval)
    }
  })

  return { stats, fetchStats }
}
