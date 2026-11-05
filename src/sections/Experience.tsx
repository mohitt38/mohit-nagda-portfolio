import { Icon } from "../components/Icon"
import { experience } from "../data/experience"

const tags: Record<string, string[]> = {
  toba: ["Python", "ContentX", "AI workflows", "Backend"],
  tap: ["Clinical NLP", "SOAP notes", "LLMs", "Research"],
  grass: ["scikit-learn", "Pandas", "NumPy", "TensorFlow"],
}

const badges: Record<string, string> = {
  toba: "Current appointment",
  tap: "Research internship",
  grass: "ML internship",
}

export function Experience() {
  return (
    <section id="experience" className="w-full py-space-xl lg:py-margin">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-space-xl px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="font-mono-meta text-mono-meta font-semibold text-primary">02 // TRACK RECORD</span>
            <span className="text-outline">-</span>
            <span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">Industry experience</span>
          </div>
          <h2 className="font-headline-lg text-[28px] leading-9 text-on-surface lg:text-headline-lg">Learning by building.</h2>
        </div>
        <div className="flex flex-col gap-space-md">
          {experience.map((role) => (
            <article
              key={role.id}
              className="flex flex-col justify-between gap-space-lg rounded-lg bg-surface-container-low p-space-lg shadow-sm transition-all hover:bg-surface-container lg:flex-row"
            >
              <div className="flex flex-col gap-space-xs lg:w-1/3">
                <div className="inline-flex w-fit items-center gap-space-xs rounded bg-surface-container-highest px-space-sm py-0.5">
                  {role.current ? <span className="h-1.5 w-1.5 rounded-full bg-primary" /> : null}
                  <span className={`font-mono-meta text-mono-meta uppercase ${role.current ? "font-semibold text-primary" : "text-on-surface-variant"}`}>
                    {badges[role.id] ?? "Role"}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">{role.role}</h3>
                <span className="font-mono-metric text-mono-metric text-primary">{role.org}</span>
                <span className="font-mono-meta text-mono-meta text-outline">
                  {role.place} • {role.dates}
                </span>
              </div>
              <div className="flex flex-col gap-space-md lg:w-2/3">
                <ul className="flex list-none flex-col gap-space-sm font-body-md text-body-md text-on-surface-variant">
                  {role.points.map((point) => (
                    <li key={point} className="flex items-start gap-space-sm">
                      <Icon name="check_circle" className="mt-1 shrink-0 text-[18px] text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-space-xs pt-space-xs font-mono-meta text-[11px] text-outline">
                  {(tags[role.id] ?? []).map((tag) => (
                    <span key={tag} className="rounded bg-surface-container px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
