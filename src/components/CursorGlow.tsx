import { useEffect, useRef } from "react"
import { useTheme } from "../theme/ThemeProvider"

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const fine = window.matchMedia("(pointer: fine)").matches
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!fine || reduce) {
      node.style.display = "none"
      return
    }

    const onMove = (event: PointerEvent) => {
      node.style.transform = `translate3d(${event.clientX - 200}px, ${event.clientY - 200}px, 0)`
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 left-0 z-[2] hidden h-[400px] w-[400px] rounded-full opacity-80 md:block ${
        theme === "light" ? "mix-blend-multiply" : "mix-blend-screen"
      }`}
      style={{ background: "radial-gradient(circle, var(--cursor-glow), transparent 68%)" }}
    />
  )
}
