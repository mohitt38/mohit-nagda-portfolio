import { useState } from "react"
import { Reveal } from "../components/Reveal"
import { SectionHeading } from "../components/SectionHeading"
import { skillGroups } from "../data/skills"

export function Skills() {
  const [active, setActive] = useState(skillGroups[0]?.id ?? "aiml")
  const current = skillGroups.find((group) => group.id === active) ?? skillGroups[0]

  return (
    <section id="skills" className="border-t border-white/10">
      <div className="shell py-24">
        <SectionHeading
          index="05"
          eyebrow="Skills"
          title="Tools I have worked with."
          lede="The technologies from my resume and projects, grouped by the kind of work."
        />
        {current ? (
          <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-[16rem_minmax(0,1fr)]">
            <div className="grid grid-cols-2 border border-white/10 sm:grid-cols-3 lg:grid-cols-1" role="tablist" aria-label="Skill groups">
              {skillGroups.map((group) => {
                const selected = group.id === active
                return (
                  <button
                    key={group.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(group.id)}
                    className={`border-b border-white/10 px-4 py-3 text-left font-display text-sm last:border-b-0 lg:border-r-0 ${
                      selected ? "bg-white/5 text-ivory" : "text-mist hover:text-ivory"
                    }`}
                  >
                    {group.label}
                  </button>
                )
              })}
            </div>
            <Reveal key={current.id} className="h-full">
              <div className="flex h-full min-h-56 flex-col border border-white/10 bg-white/[0.03] p-6 sm:p-8">
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
