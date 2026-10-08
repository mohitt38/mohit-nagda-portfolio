import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { useState, type MouseEvent } from "react"
import type { Project } from "../data/projects"
import { ProjectVisual } from "./ProjectVisual"

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const reduce = useReducedMotion()

  function onMove(event: MouseEvent<HTMLElement>) {
    if (reduce) return
    const rect = event.currentTarget.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height
    setTilt({ x: (0.5 - py) * 6, y: (px - 0.5) * 7 })
  }

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: reduce ? 0 : 0.65, delay: reduce ? 0 : index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="group [perspective:1100px]"
    >
      <div
        style={{
          transform: reduce ? undefined : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          borderColor: `${project.accent}55`,
        }}
        className="relative overflow-hidden border border-white/10 bg-panel/80 transition-shadow duration-300 group-hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
      >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `linear-gradient(135deg, ${project.accent}22, transparent 42%)` }}
      />
      <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="relative min-h-56 overflow-hidden border-b border-white/10 lg:border-r lg:border-b-0">
          <ProjectVisual id={project.visual} accent={project.accent} />
        </div>
        <div className="relative flex flex-col p-6 sm:p-8">
          <p className="font-display text-[0.72rem] tracking-[0.18em] text-mist uppercase">{project.category}</p>
          <h3 className="mt-3 font-display text-3xl tracking-tight text-ivory">{project.name}</h3>
          <p className="mt-4 text-sm leading-relaxed text-ivory/90">{project.problem}</p>
          <p className="mt-3 text-sm leading-relaxed text-mist">{project.summary}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li key={item} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-mist">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ivory px-4 text-sm text-ink"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-sm text-ivory"
            >
              {open ? "Hide the build" : "What I built"}
              <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
          </div>
          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                initial={reduce ? false : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={reduce ? undefined : { height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
                  {project.built.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-mist">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
      </div>
    </motion.article>
  )
}
