export type ContributionDay = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export type ContributionSummary = {
  days: ContributionDay[]
  total: number
  currentStreak: number
  bestDay: number
}

type ApiDay = {
  date: string
  count: number
  level: number
}

type ApiResponse = {
  total?: { lastYear?: number } | number
  contributions?: ApiDay[]
}

const CONTRIBUTIONS_URL = "https://github-contributions-api.jogruber.de/v4/mohitt38?y=last"
export const CONTRIBUTION_WINDOW_MONTHS = 12

function clampLevel(level: number): 0 | 1 | 2 | 3 | 4 {
  if (level <= 0) return 0
  if (level === 1) return 1
  if (level === 2) return 2
  if (level === 3) return 3
  return 4
}

/** Streak ending on the latest day in the series that has activity, or 0. */
export function currentStreak(days: ContributionDay[]): number {
  if (days.length === 0) return 0
  let streak = 0
  for (let i = days.length - 1; i >= 0; i -= 1) {
    if (days[i].count > 0) streak += 1
    else if (streak > 0) break
  }
  return streak
}

function lastNMonths(days: ContributionDay[], months: number): ContributionDay[] {
  if (days.length === 0) return []
  const end = new Date(`${days[days.length - 1].date}T12:00:00`)
  const start = new Date(end)
  start.setMonth(start.getMonth() - months)
  const startKey = start.toISOString().slice(0, 10)
  return days.filter((day) => day.date >= startKey)
}

export async function fetchContributionSummary(): Promise<ContributionSummary> {
  const response = await fetch(CONTRIBUTIONS_URL)
  if (!response.ok) {
    throw new Error(`Contributions request failed (${response.status})`)
  }

  const data = (await response.json()) as ApiResponse
  const allDays: ContributionDay[] = (data.contributions ?? []).map((day) => ({
    date: day.date,
    count: day.count,
    level: clampLevel(day.level),
  }))
  const days = lastNMonths(allDays, CONTRIBUTION_WINDOW_MONTHS)
  const total = days.reduce((sum, day) => sum + day.count, 0)
  const bestDay = days.reduce((max, day) => Math.max(max, day.count), 0)

  return {
    days,
    total,
    currentStreak: currentStreak(days),
    bestDay,
  }
}
