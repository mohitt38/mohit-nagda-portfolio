import { credentials } from "../data/achievements"
import { education } from "../data/education"

export function Education() {
  return (
    <section id="education" className="w-full bg-surface-container-lowest py-space-xl lg:py-margin">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-space-xl px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="font-mono-meta text-mono-meta font-semibold text-primary">06 // CREDENTIALS</span>
            <span className="text-outline">-</span>
            <span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">Education and proof</span>
          </div>
          <h2 className="font-headline-lg text-[28px] leading-9 text-on-surface lg:text-headline-lg">Rigorous credentials.</h2>
        </div>
        <div className="grid grid-cols-1 items-start gap-space-lg lg:grid-cols-12">
          <article className="flex flex-col gap-space-md rounded-xl bg-surface-container p-space-lg lg:col-span-5">
            <span className="font-mono-meta text-mono-meta text-primary uppercase">{education.standing}</span>
            <h3 className="font-headline-md text-headline-md text-on-surface">{education.degree}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{education.focus}</p>
            <p className="font-mono-metric text-mono-metric text-on-surface">{education.school}</p>
            <p className="font-mono-meta text-mono-meta text-outline">
              {education.place} • {education.dates}
            </p>
            <p className="font-mono-metric text-mono-metric font-medium text-primary">CGPA {education.cgpa}</p>
          </article>
          <ol id="achievements" className="flex flex-col gap-space-sm lg:col-span-7">
            {credentials.map((item) => (
              <li key={item.id} className="rounded-lg bg-surface-container-low p-space-md">
                <div className="flex flex-wrap items-center gap-space-xs">
                  <span className="font-mono-meta text-mono-meta text-primary uppercase">{item.kind}</span>
                  {item.status ? <span className="font-mono-meta text-mono-meta text-outline">{item.status}</span> : null}
                </div>
                <p className="mt-1 font-headline-sm text-headline-sm text-on-surface">{item.title}</p>
                <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
