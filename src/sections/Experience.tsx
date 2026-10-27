import { motion, useReducedMotion } from "framer-motion"
import { SectionHeading } from "../components/SectionHeading"
import { experience } from "../data/experience"

export function Experience() {
  const reduce = useReducedMotion()

  return (
    <section id="experience" className="border-t border-line">
      <div className="shell pt-6 pb-14 sm:py-20 lg:py-24">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Learning, then building."
          lede="Three roles so far. The through-line is the same: take a real problem, work it in Python or in a research setting, and leave something that can be evaluated."
        />
        <ol className="relative mt-10 space-y-10 before:absolute before:top-2 before:bottom-2 before:left-[5px] before:w-px before:bg-line-strong sm:mt-16 sm:space-y-12">
          {experience.map((item, index) => (
            <motion.li
              key={item.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : index * 0.05 }}
              className="relative pl-10"
            >
              <span
                className={`absolute top-1.5 left-0 h-3 w-3 rounded-full border border-ink ${
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
                <span className="px-2 text-mist/40">/</span>
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
