import { useEffect, useRef } from "react"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext("2d")
    if (!context) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const particles: Particle[] = []
    let frame = 0
    let width = 0
    let height = 0
    const pointer = { x: -9999, y: -9999 }

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      width = parent.clientWidth
      height = parent.clientHeight
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * ratio)
      canvas.height = Math.floor(height * ratio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const seed = () => {
      particles.length = 0
      const count = width < 720 ? 18 : 32
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
            context.strokeStyle = `rgba(142, 182, 255, ${0.16 * (1 - dist / 150)})`
            context.lineWidth = 1
            context.beginPath()
            context.moveTo(a.x, a.y)
            context.lineTo(b.x, b.y)
            context.stroke()
          }
        }
      }

      particles.forEach((particle) => {
        const near = Math.hypot(particle.x - pointer.x, particle.y - pointer.y) < 140
        context.fillStyle = near ? "rgba(183, 166, 255, 0.85)" : "rgba(232, 236, 244, 0.72)"
        context.beginPath()
        context.arc(particle.x, particle.y, near ? 2.2 : 1.4, 0, Math.PI * 2)
        context.fill()
      })
    }

    const step = () => {
      if (!reduce) {
        particles.forEach((particle) => {
          particle.x += particle.vx
          particle.y += particle.vy
          if (particle.x < 0 || particle.x > width) particle.vx *= -1
          if (particle.y < 0 || particle.y > height) particle.vy *= -1
        })
      }
      draw()
      if (!reduce && !document.hidden) frame = window.requestAnimationFrame(step)
    }

    const onPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
    }
    const onLeave = () => {
      pointer.x = -9999
      pointer.y = -9999
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
    canvas.addEventListener("pointermove", onPointer)
    canvas.addEventListener("pointerleave", onLeave)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("resize", onResize)
      canvas.removeEventListener("pointermove", onPointer)
      canvas.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}
