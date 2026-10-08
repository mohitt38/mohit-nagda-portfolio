import { useEffect, useRef } from "react"

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

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
      className="pointer-events-none fixed top-0 left-0 z-[2] hidden h-[400px] w-[400px] rounded-full opacity-80 mix-blend-screen md:block"
      style={{ background: "radial-gradient(circle, rgba(90,132,220,0.16), transparent 68%)" }}
    />
  )
}
