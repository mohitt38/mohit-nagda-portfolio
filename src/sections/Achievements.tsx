import { Reveal } from "../components/Reveal"
import { SectionHeading } from "../components/SectionHeading"
import { credentials, volunteer } from "../data/achievements"

export function Achievements() {
  return (
    <section id="achievements" className="border-t border-white/10">
      <div className="shell py-24">
        <SectionHeading
          index="07"
          eyebrow="Achievements"
          title="Papers, training, and one exhibition."
          lede="Research status stays qualified. Certifications are only the ones I have completed, plus RHCSA training with the exam still pending."
        />
        <div className="mt-12 grid items-stretch gap-4 md:grid-cols-2">
          {credentials.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.04} className="h-full">
              <article className="h-full border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-display text-[0.72rem] tracking-[0.16em] text-blue uppercase">{item.kind}</p>
                  {item.status ? (
                    <span className="shrink-0 rounded-full border border-white/15 px-2 py-1 text-[0.68rem] text-mist">
                      {item.status}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-4 font-display text-xl leading-snug text-ivory">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <article className="mt-4 border border-white/10 p-6 sm:p-8">
            <p className="font-display text-[0.72rem] tracking-[0.16em] text-violet uppercase">Volunteer</p>
            <h3 className="mt-3 font-display text-2xl text-ivory">{volunteer.event}</h3>
            <p className="mt-2 text-sm text-mist">
              {volunteer.role} · {volunteer.org}
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-mist">{volunteer.detail}</p>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
