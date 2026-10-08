import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { contact } from "../config/contact"
import { site } from "../config/site"
import { AnimatedBackground } from "../components/AnimatedBackground"
import { MagneticButton } from "../components/MagneticButton"
import { SystemMap } from "../components/SystemMap"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero({ active }: { active: string }) {
  const reduce = useReducedMotion()

  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        }

  return (
    <section id="home" className="relative overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <AnimatedBackground />
      </div>
      <div className="pointer-events-none absolute inset-4 hidden border border-white/10 sm:block" aria-hidden="true">
        <span className="absolute top-0 left-0 h-4 w-4 border-t border-l border-blue" />
        <span className="absolute top-0 right-0 h-4 w-4 border-t border-r border-blue" />
        <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-blue" />
        <span className="absolute right-0 bottom-0 h-4 w-4 border-r border-b border-blue" />
      </div>
      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          <motion.p {...enter(0.05)} className="font-display text-[0.72rem] tracking-[0.24em] text-blue uppercase">
            Udaipur · Final-year B.Tech (AI)
          </motion.p>
          <motion.h1
            {...enter(0.12)}
            className="mt-5 font-display text-[clamp(3.4rem,9vw,7.2rem)] leading-[0.88] font-medium tracking-[-0.045em] text-ivory"
          >
            Mohit
            <span className="block">Nagda</span>
          </motion.h1>
          <motion.p {...enter(0.22)} className="mt-6 font-display text-xl text-ivory sm:text-2xl">
            {site.positioning}
          </motion.p>
          <motion.p {...enter(0.28)} className="mt-1 font-display text-lg text-mist">
            {site.roles}
          </motion.p>
          <motion.p {...enter(0.36)} className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            {site.statement}
          </motion.p>
          <motion.div {...enter(0.46)} className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href="#projects">View My Work</MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Let&apos;s Connect
            </MagneticButton>
            <MagneticButton href={contact.github} variant="ghost" external>
              GitHub
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </MagneticButton>
            <MagneticButton href={contact.linkedin} variant="ghost" external>
              LinkedIn
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </MagneticButton>
          </motion.div>
          <motion.p {...enter(0.56)} className="mt-10 max-w-lg text-sm leading-relaxed text-mist">
            Currently Python Developer Intern at Toba Tech Solutions. Previously AI Research Intern at Tech Adaptive
            Pandit, and AI/ML Trainee at Grass Solutions.
          </motion.p>
        </div>
        <motion.div {...enter(0.3)} className="relative">
          <p className="mb-3 font-display text-[0.72rem] tracking-[0.2em] text-mist uppercase">AI journey</p>
          <SystemMap activeSection={active} />
          <p className="mt-2 text-xs leading-relaxed text-mist">
            Nodes light up as you move through the page. Select one to jump to that part of the work.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
