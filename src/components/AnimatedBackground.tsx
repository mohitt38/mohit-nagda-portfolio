import { useEffect, useRef } from "react"
import { useTheme } from "../theme/ThemeProvider"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
}

const PALETTE = {
  dark: {
    link: "rgba(142, 182, 255, 0.16)",
    particle: "rgba(232, 236, 244, 0.72)",
    hot: "rgba(183, 166, 255, 0.95)",
    pointer: "rgba(183, 166, 255, 0.28)",
  },
  light: {
    link: "rgba(61, 111, 217, 0.18)",
    particle: "rgba(61, 111, 217, 0.35)",
    hot: "rgba(91, 82, 176, 0.75)",
    pointer: "rgba(61, 111, 217, 0.22)",
  },
} as const

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext("2d")
    if (!context) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const colors = PALETTE[theme]
    const particles: Particle[] = []
    let frame = 0
    let width = 0
    let height = 0
    const pointer = { x: -9999, y: -9999 }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const ratio = Math.min(window.devicePixelRatio || 1, width < 720 ? 1.5 : 2)
      canvas.width = Math.floor(width * ratio)
      canvas.height = Math.floor(height * ratio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const seed = () => {
      particles.length = 0
      const count = width < 720 ? 28 : 52
      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
        })
      }
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i]
        if (!a) continue
        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j]
          if (!b) continue
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < 150) {
            context.strokeStyle = colors.link
            context.globalAlpha = 1 - dist / 150
            context.lineWidth = 1
            context.beginPath()
            context.moveTo(a.x, a.y)
            context.lineTo(b.x, b.y)
            context.stroke()
            context.globalAlpha = 1
          }
        }
      }

      particles.forEach((p) => {
        const dist = Math.hypot(p.x - pointer.x, p.y - pointer.y)
        const near = dist < 180
        if (near && pointer.x > -1000) {
          context.strokeStyle = colors.pointer
          context.globalAlpha = 1 - dist / 180
          context.beginPath()
          context.moveTo(p.x, p.y)
          context.lineTo(pointer.x, pointer.y)
          context.stroke()
          context.globalAlpha = 1
        }
        context.fillStyle = near ? colors.hot : colors.particle
        context.beginPath()
        context.arc(p.x, p.y, near ? 2.4 : 1.4, 0, Math.PI * 2)
        context.fill()
      })
    }

    const step = () => {
      if (!reduce) {
        particles.forEach((particle) => {
          if (pointer.x > -1000) {
            const dx = pointer.x - particle.x
            const dy = pointer.y - particle.y
            const dist = Math.hypot(dx, dy) || 1
            if (dist < 280) {
              const pull = (1 - dist / 280) * 0.09
              particle.vx += (dx / dist) * pull
              particle.vy += (dy / dist) * pull
            }
          }
          particle.vx *= 0.985
          particle.vy *= 0.985
          const speed = Math.hypot(particle.vx, particle.vy)
          if (speed > 1.35) {
            particle.vx = (particle.vx / speed) * 1.35
            particle.vy = (particle.vy / speed) * 1.35
          } else if (speed < 0.04) {
            particle.vx += (Math.random() - 0.5) * 0.05
            particle.vy += (Math.random() - 0.5) * 0.05
          }
          particle.x += particle.vx
          particle.y += particle.vy
          if (particle.x < 0 || particle.x > width) particle.vx *= -1
          if (particle.y < 0 || particle.y > height) particle.vy *= -1
        })
      }
      draw()
      if (!reduce && !document.hidden) frame = window.requestAnimationFrame(step)
    }

    const finePointer = window.matchMedia("(pointer: fine)").matches
    const onPointer = (event: PointerEvent) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
    }
    const onLeave = () => {
      pointer.x = -9999
      pointer.y = -9999
    }
    const onVisibility = () => {
      if (!document.hidden && !reduce) {
        window.cancelAnimationFrame(frame)
        frame = window.requestAnimationFrame(step)
      }
    }

    resize()
    seed()
    step()

    const onResize = () => {
      resize()
      seed()
      draw()
    }
    window.addEventListener("resize", onResize)
    window.visualViewport?.addEventListener("resize", onResize)
    document.addEventListener("visibilitychange", onVisibility)
    if (finePointer) {
      window.addEventListener("pointermove", onPointer, { passive: true })
      window.addEventListener("pointerleave", onLeave)
    }

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("resize", onResize)
      window.visualViewport?.removeEventListener("resize", onResize)
      document.removeEventListener("visibilitychange", onVisibility)
      window.removeEventListener("pointermove", onPointer)
      window.removeEventListener("pointerleave", onLeave)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="block h-full w-full" aria-hidden="true" />
}
