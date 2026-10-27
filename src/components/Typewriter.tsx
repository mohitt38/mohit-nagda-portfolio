import { useEffect, useState } from "react"

type TypewriterProps = {
  phrases: readonly string[]
  className?: string
  /** Delay before the first character (ms). */
  startDelay?: number
  typingMs?: number
  deletingMs?: number
  holdMs?: number
}

/**
 * GPT-style streaming typewriter. Always runs - this is an intentional hero
 * attractor (Windows “Reduce motion” previously hid it completely).
 */
export function Typewriter({
  phrases,
  className,
  startDelay = 400,
  typingMs = 22,
  deletingMs = 14,
  holdMs = 1600,
}: TypewriterProps) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setStarted(true), startDelay)
    return () => window.clearTimeout(timer)
  }, [startDelay])

  useEffect(() => {
    if (!started || phrases.length === 0) return

    const full = phrases[phraseIndex % phrases.length]
    const doneTyping = text === full && !deleting
    const doneDeleting = text === "" && deleting

    let delay = deleting ? deletingMs : typingMs
    if (doneTyping) delay = holdMs
    if (doneDeleting) delay = 220

    const timer = window.setTimeout(() => {
      if (doneTyping) {
        setDeleting(true)
        return
      }
      if (doneDeleting) {
        setDeleting(false)
        setPhraseIndex((index) => (index + 1) % phrases.length)
        return
      }
      const nextLength = deleting ? text.length - 1 : text.length + 1
      setText(full.slice(0, nextLength))
    }, delay)

    return () => window.clearTimeout(timer)
  }, [started, phrases, phraseIndex, text, deleting, typingMs, deletingMs, holdMs])

  return (
    <span className={className}>
      <span>{text}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[1.1em] w-[0.08em] translate-y-[0.14em] bg-blue align-baseline type-caret"
      />
    </span>
  )
}
