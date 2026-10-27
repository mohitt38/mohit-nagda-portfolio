import { Reveal } from "../components/Reveal"
import { SectionHeading } from "../components/SectionHeading"
import { education } from "../data/education"

export function Education() {
  return (
    <section id="education" className="border-t border-line">
      <div className="shell pt-6 pb-14 sm:py-20 lg:py-24">
        <SectionHeading
          index="06"
          eyebrow="Education"
          title="The degree underneath the work."
          lede="Still in progress. The specialization is artificial intelligence, and the record so far is a 9.0 CGPA."
        />
        <Reveal>
          <article className="relative mt-12 overflow-hidden border border-line bg-panel p-8 sm:p-12">
            <p className="font-display text-[0.72rem] tracking-[0.22em] text-blue uppercase">{education.dates}</p>
            <h3 className="mt-4 max-w-3xl font-display text-4xl leading-tight tracking-tight text-ivory sm:text-5xl">
              {education.school}
            </h3>
            <p className="mt-4 text-lg text-ivory">{education.degree}</p>
            <p className="mt-1 text-mist">{education.focus}</p>
            <dl className="mt-10 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs tracking-[0.16em] text-mist uppercase">Standing</dt>
                <dd className="mt-2 font-display text-2xl text-ivory">{education.standing}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.16em] text-mist uppercase">CGPA</dt>
                <dd className="mt-2 font-display text-2xl text-ivory">{education.cgpa}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.16em] text-mist uppercase">Campus</dt>
                <dd className="mt-2 font-display text-2xl text-ivory">{education.place}</dd>
              </div>
            </dl>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
