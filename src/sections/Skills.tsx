import { useState } from "react"
import { Reveal } from "../components/Reveal"
import { SectionHeading } from "../components/SectionHeading"
import { skillGroups } from "../data/skills"

export function Skills() {
  const [active, setActive] = useState(skillGroups[0]?.id ?? "aiml")
  const current = skillGroups.find((group) => group.id === active) ?? skillGroups[0]

  return (
    <section id="skills" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
        <SectionHeading
          index="05"
          eyebrow="Skills"
          title="Tools I have worked with."
          lede="The technologies from my resume and projects, grouped by the kind of work."
        />
        {current ? (
          <div className="mt-12 grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
            <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible" role="tablist" aria-label="Skill groups">
              {skillGroups.map((group) => {
                const selected = group.id === active
                return (
                  <button
                    key={group.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(group.id)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-left font-display text-sm lg:rounded-none lg:border-0 lg:border-l lg:px-4 ${
                      selected
                        ? "border-blue bg-white/5 text-ivory lg:border-blue"
                        : "border-white/10 text-mist hover:text-ivory lg:border-white/15"
                    }`}
                  >
                    {group.label}
                  </button>
                )
              })}
            </div>
            <Reveal key={current.id}>
              <div className="min-h-56 border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <h3 className="font-display text-3xl tracking-tight text-ivory">{current.label}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-mist">{current.note}</p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {current.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-ink px-3 py-1.5 text-sm text-ivory"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        ) : null}
      </div>
    </section>
  )
}
