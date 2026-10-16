import { ArrowUpRight, FileDown } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { contact } from "../config/contact"
import { site } from "../config/site"
import { MagneticButton } from "../components/MagneticButton"
import { SystemMap } from "../components/SystemMap"
import { Typewriter } from "../components/Typewriter"

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
    <section id="home" className="relative pt-20">
      <div className="shell relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-20">
        <div>
          <motion.p {...enter(0.05)} className="font-display text-[0.72rem] tracking-[0.24em] text-blue uppercase">
            Udaipur · Final-year B.Tech (AI)
          </motion.p>
          <h1 className="mt-5 font-display text-[clamp(3.4rem,9vw,7.2rem)] leading-none font-medium tracking-[-0.045em] text-ivory">
            {["Mohit", "Nagda"].map((word, index) => (
              <span key={word} className="block overflow-hidden pb-[0.18em]">
                <motion.span
                  className="block leading-[0.9]"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: reduce ? 0 : 0.85, delay: reduce ? 0 : 0.12 + index * 0.12, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.span
            aria-hidden="true"
            className="mt-4 block h-px w-24 origin-left bg-blue"
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : 0.45, ease }}
          />
          <motion.p {...enter(0.22)} className="mt-6 font-display text-xl text-ivory sm:text-2xl">
            {site.positioning}
          </motion.p>
          <motion.p {...enter(0.28)} className="mt-1 font-display text-lg text-mist">
            {site.roles}
          </motion.p>
          <motion.div {...enter(0.36)} className="mt-6 max-w-xl">
            <p className="font-display text-[0.65rem] tracking-[0.2em] text-blue uppercase">
              Available to connect
            </p>
            <p
              className="mt-2 min-h-[4.75rem] font-display text-base leading-relaxed text-ivory sm:min-h-[4rem] sm:text-lg"
              aria-live="polite"
            >
              <Typewriter phrases={site.typeLines} startDelay={350} />
            </p>
          </motion.div>
          <motion.div {...enter(0.46)} className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href="#projects">View My Work</MagneticButton>
            <MagneticButton href={site.resumePath} variant="ghost" download>
              <FileDown className="h-4 w-4" aria-hidden="true" />
              Resume
            </MagneticButton>
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
        </div>
        <motion.div {...enter(0.3)} className="relative">
          <p className="mb-3 font-display text-[0.72rem] tracking-[0.2em] text-mist uppercase">AI journey</p>
          <SystemMap activeSection={active} />
        </motion.div>
      </div>
    </section>
  )
}
