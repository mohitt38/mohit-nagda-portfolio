import { motion, useMotionValue, useReducedMotion } from "framer-motion"
import type { MouseEvent, ReactNode } from "react"
import { useRef } from "react"

type MagneticButtonProps = {
  href: string
  children: ReactNode
  variant?: "solid" | "ghost"
  external?: boolean
  download?: boolean | string
}

export function MagneticButton({
  href,
  children,
  variant = "solid",
  external = false,
  download,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  function onMove(event: MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.22)
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.28)
  }

  const classes =
    variant === "solid"
      ? "bg-ivory text-ink hover:bg-white"
      : "border border-white/15 bg-white/[0.03] text-ivory hover:border-blue/50 hover:bg-white/[0.06]"

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 font-display text-sm tracking-wide transition-colors ${classes}`}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      {...(download
        ? { download: typeof download === "string" ? download : true }
        : {})}
    >
      {children}
    </motion.a>
  )
}
