import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { useState } from "react"
import type { Project } from "../data/projects"
import { ProjectVisual } from "./ProjectVisual"

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: reduce ? 0 : 0.65, delay: reduce ? 0 : index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{ borderColor: `${project.accent}55` }}
      whileHover={reduce ? undefined : { y: -8 }}
      className="group relative overflow-hidden border border-line bg-panel/80 transition-shadow duration-300 hover:shadow-[0_22px_50px_rgba(0,0,0,0.35)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `linear-gradient(135deg, ${project.accent}22, transparent 42%)` }}
      />
      <div className="grid lg:grid-cols-2 lg:items-stretch">
        <div className="relative aspect-[640/420] w-full overflow-hidden border-b border-line bg-[#0c0e12] lg:aspect-auto lg:min-h-0 lg:self-stretch lg:border-r lg:border-b-0">
          <ProjectVisual id={project.visual} accent={project.accent} />
        </div>
        <div className="relative flex min-w-0 flex-col p-5 sm:p-6 lg:p-8">
          <p className="font-display text-[0.72rem] tracking-[0.18em] break-words text-mist uppercase">{project.category}</p>
          <h3 className="mt-3 font-display text-2xl tracking-tight break-words text-ivory sm:text-3xl">{project.name}</h3>
          <p className="mt-1 font-display text-sm tracking-wide text-blue sm:text-base">{project.plainName}</p>
          <p className="mt-4 text-sm leading-relaxed text-ivory/90">{project.outcome}</p>
          <p className="mt-3 text-sm leading-relaxed text-mist">{project.problem}</p>
          <p className="mt-3 text-sm leading-relaxed text-mist">{project.summary}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li key={item} className="rounded-full border border-line px-2.5 py-1 text-xs text-mist">
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
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong px-4 text-sm text-ivory"
            >
              {open ? "Hide details" : "How it works"}
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
                <ul className="mt-5 space-y-2 border-t border-line pt-4">
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
    </motion.article>
  )
}
