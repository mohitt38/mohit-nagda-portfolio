import { useEffect, useMemo, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  CONTRIBUTION_WINDOW_MONTHS,
  fetchContributionSummary,
  type ContributionDay,
  type ContributionSummary,
} from "../lib/githubContributions"
import { contact } from "../config/contact"

const LEVEL_CLASS = [
  "bg-surface-2",
  "bg-blue/25",
  "bg-blue/45",
  "bg-blue/70",
  "bg-blue",
] as const

const WEEKDAYS = ["", "Mon", "", "Wed", "", "Fri", ""] as const

/** Weeks of gap needed so short month names ("Oct"/"Nov") do not collide. */
const MONTH_LABEL_MIN_GAP = 3

function monthLabels(weeks: ContributionDay[][]): { label: string; weekIndex: number }[] {
  const raw: { label: string; weekIndex: number }[] = []
  let lastMonth = -1
  weeks.forEach((week, weekIndex) => {
    const firstReal = week.find((day) => !day.date.startsWith("pad-"))
    if (!firstReal) return
    const date = new Date(`${firstReal.date}T12:00:00`)
    const month = date.getMonth()
    if (month !== lastMonth) {
      raw.push({
        label: date.toLocaleString("en-US", { month: "short" }),
        weekIndex,
      })
      lastMonth = month
    }
  })

  // Drop or replace labels that sit too close (common at the start of a partial month).
  const spaced: { label: string; weekIndex: number }[] = []
  for (const label of raw) {
    const prev = spaced[spaced.length - 1]
    if (!prev) {
      spaced.push(label)
      continue
    }
    if (label.weekIndex - prev.weekIndex >= MONTH_LABEL_MIN_GAP) {
      spaced.push(label)
    } else {
      // Keep the later month - the earlier one is usually a truncated sliver.
      spaced[spaced.length - 1] = label
    }
  }
  return spaced
}

function padToWeeks(days: ContributionDay[]): ContributionDay[][] {
  if (days.length === 0) return []
  const first = new Date(`${days[0].date}T12:00:00`)
  const offset = first.getDay()
  const padded: ContributionDay[] = [
    ...Array.from({ length: offset }, (_, i) => ({
      date: `pad-${i}`,
      count: 0,
      level: 0 as const,
    })),
    ...days,
  ]
  while (padded.length % 7 !== 0) {
    padded.push({
      date: `pad-end-${padded.length}`,
      count: 0,
      level: 0,
    })
  }
  const weeks: ContributionDay[][] = []
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7))
  }
  return weeks
}

function Stat({
  label,
  shortLabel,
  value,
}: {
  label: string
  shortLabel: string
  value: string
}) {
  return (
    <div className="min-w-0">
      <p className="font-display text-xl tracking-tight text-ivory sm:text-3xl">{value}</p>
      <p className="mt-0.5 text-[0.62rem] leading-tight tracking-[0.12em] text-mist uppercase sm:mt-1 sm:text-xs sm:tracking-[0.14em]">
        <span className="sm:hidden">{shortLabel}</span>
        <span className="hidden sm:inline">{label}</span>
      </p>
    </div>
  )
}

export function ContributionGraph() {
  const reduce = useReducedMotion()
  const [summary, setSummary] = useState<ContributionSummary | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetchContributionSummary()
      .then((data) => {
        if (!cancelled) setSummary(data)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const weeks = useMemo(() => (summary ? padToWeeks(summary.days) : []), [summary])
  const months = useMemo(() => monthLabels(weeks), [weeks])
  const columns = `1.75rem repeat(${Math.max(weeks.length, 1)}, minmax(0, 1fr))`

  return (
    <div className="border border-line bg-surface p-4 sm:p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <p className="font-display text-[0.72rem] tracking-[0.18em] text-blue uppercase">
            Contribution graph
          </p>
          <p className="mt-2 font-display text-lg tracking-tight text-ivory sm:text-2xl">
            Last {CONTRIBUTION_WINDOW_MONTHS} months on GitHub
          </p>
        </div>
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer noopener"
          className="shrink-0 text-sm text-blue"
        >
          github.com/mohitt38
        </a>
      </div>

      {error ? (
        <p className="mt-6 text-sm text-mist sm:mt-8">
          Could not load the live graph.{" "}
          <a href={contact.github} target="_blank" rel="noreferrer noopener" className="text-blue">
            Open the profile
          </a>{" "}
          to see contributions.
        </p>
      ) : null}

      {!error && !summary ? (
        <div className="mt-6 h-28 animate-pulse bg-surface sm:mt-8" aria-hidden="true" />
      ) : null}

      {summary ? (
        <>
          <div className="mt-6 grid grid-cols-3 gap-2 border-b border-line pb-5 sm:mt-8 sm:gap-4 sm:pb-6">
            <Stat
              label="Contributions"
              shortLabel="Total"
              value={summary.total.toLocaleString()}
            />
            <div className="text-center">
              <Stat
                label="Current streak"
                shortLabel="Streak"
                value={`${summary.currentStreak}d`}
              />
            </div>
            <div className="text-right">
              <Stat label="Best day" shortLabel="Best" value={`${summary.bestDay}`} />
            </div>
          </div>

          <div className="mt-5 overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch] sm:mt-6 sm:overflow-visible">
            <div className="min-w-[34rem] sm:min-w-0 sm:w-full">
              <div className="relative mb-2 h-4 w-full pl-7">
                {months.map((month) => (
                  <span
                    key={`${month.label}-${month.weekIndex}`}
                    className="absolute top-0 text-[10px] leading-none text-mist"
                    style={{
                      left: `calc(1.75rem + (100% - 1.75rem) * ${month.weekIndex} / ${weeks.length})`,
                    }}
                  >
                    {month.label}
                  </span>
                ))}
              </div>

              <div className="grid w-full gap-[3px]" style={{ gridTemplateColumns: columns }}>
                <div className="grid grid-rows-7 gap-[3px] py-px text-[10px] leading-none text-mist">
                  {WEEKDAYS.map((label, index) => (
                    <span key={`wd-${index}`} className="flex items-center">
                      {label}
                    </span>
                  ))}
                </div>

                {weeks.map((week, weekIndex) => (
                  <div key={`week-${weekIndex}`} className="grid grid-rows-7 gap-[3px]">
                    {Array.from({ length: 7 }, (_, dayIndex) => {
                      const day = week[dayIndex]
                      const isPad = !day || day.date.startsWith("pad-")
                      return (
                        <motion.span
                          key={day?.date ?? `empty-${weekIndex}-${dayIndex}`}
                          title={
                            isPad || !day
                              ? undefined
                              : `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`
                          }
                          className={`aspect-square min-h-0 min-w-0 rounded-[1px] ${
                            isPad || !day ? "opacity-0" : LEVEL_CLASS[day.level]
                          }`}
                          initial={reduce || isPad ? false : { opacity: 0, scale: 0.65 }}
                          whileInView={reduce || isPad ? undefined : { opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                          transition={{
                            duration: reduce ? 0 : 0.22,
                            delay: reduce ? 0 : weekIndex * 0.01 + dayIndex * 0.003,
                          }}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>

              <div className="mt-3 flex w-full items-center justify-end gap-1.5 text-[10px] text-mist">
                <span>Less</span>
                {LEVEL_CLASS.map((tone, index) => (
                  <span key={tone} className={`h-2.5 w-2.5 ${tone}`} aria-label={`Level ${index}`} />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}
