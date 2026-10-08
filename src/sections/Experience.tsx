import { motion, useReducedMotion } from "framer-motion"
import { SectionHeading } from "../components/SectionHeading"
import { experience } from "../data/experience"

export function Experience() {
  const reduce = useReducedMotion()

  return (
    <section id="experience" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Learning, then building."
          lede="Three roles so far. The through-line is the same: take a real problem, work it in Python or in a research setting, and leave something that can be evaluated."
        />
        <ol className="relative mt-16 space-y-12 border-l border-white/15 pl-6 sm:pl-10">
          {experience.map((item, index) => (
            <motion.li
              key={item.id}
              initial={reduce ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : index * 0.05 }}
              className="relative"
            >
              <span
                className={`absolute top-1.5 -left-[1.72rem] h-3 w-3 rounded-full border border-ink sm:-left-[2.72rem] ${
                  item.current ? "bg-blue" : "bg-mist"
                }`}
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-display text-sm tracking-wide text-blue">{item.dates}</p>
                {item.current ? (
                  <span className="rounded-full border border-blue/40 px-2 py-0.5 text-[0.68rem] tracking-wide text-blue uppercase">
                    Current
                  </span>
                ) : null}
              </div>
              <h3 className="mt-2 font-display text-2xl tracking-tight text-ivory sm:text-3xl">{item.role}</h3>
              <p className="mt-1 text-mist">
                {item.org}
                <span className="px-2 text-white/25">/</span>
                {item.place}
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-ivory/90">{item.summary}</p>
              <ul className="mt-4 max-w-3xl space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed text-mist">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
