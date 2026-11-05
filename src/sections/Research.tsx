import { Icon } from "../components/Icon"
import { contact } from "../config/contact"
import { research } from "../data/research"

export function Research() {
  return (
    <section id="research" className="w-full bg-surface-container-lowest py-space-xl lg:py-margin">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-space-xl px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="font-mono-meta text-mono-meta font-semibold text-primary">04 // SCHOLARLY CONTRIBUTIONS</span>
              <span className="text-outline">-</span>
              <span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">Academic research</span>
            </div>
            <h2 className="font-headline-lg text-[28px] leading-9 text-on-surface lg:text-headline-lg">
              Exploring the intelligence behind the systems.
            </h2>
          </div>
          <div className="flex items-center gap-space-xs font-mono-meta text-mono-meta text-outline">
            <Icon name="menu_book" className="text-[16px]" />
            Healthcare NLP • Agentic systems
          </div>
        </div>
        <div className="flex flex-col gap-space-lg">
          {research.map((item) => (
            <article key={item.id} className="flex flex-col justify-between gap-space-lg rounded-xl bg-surface-container p-space-lg shadow-md lg:flex-row">
              <div className="flex flex-col gap-space-sm lg:w-2/3">
                <div className="flex flex-wrap items-center gap-space-xs">
                  <span className="rounded bg-primary px-2 py-0.5 font-mono-meta text-[11px] font-semibold text-on-primary">
                    {item.role.toUpperCase()}
                  </span>
                  <span className="font-mono-meta text-mono-meta text-outline">STATUS: {item.status.toUpperCase()}</span>
                  <span className="text-outline">•</span>
                  <span className="font-mono-meta text-mono-meta text-primary">{item.kind.toUpperCase()}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">{item.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{item.summary}</p>
                <div className="flex flex-wrap gap-space-xs pt-space-xs font-mono-meta text-[11px] text-outline">
                  {item.area.split("·").map((tag) => (
                    <span key={tag} className="rounded bg-surface-container-high px-2 py-0.5">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between gap-space-md rounded-lg bg-surface-container-high p-space-md lg:w-1/3">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-mono-meta text-mono-meta text-outline uppercase">Record</span>
                  <p className="font-mono-metric text-mono-metric text-on-surface">{item.role}</p>
                  <p className="font-mono-meta text-mono-meta text-primary">{item.status}</p>
                </div>
                <a
                  href={`${contact.emailHref}?subject=${encodeURIComponent(item.title)}`}
                  className="inline-flex items-center justify-center gap-space-xs rounded bg-surface-container px-space-md py-1.5 font-mono-metric text-mono-metric text-on-surface hover:bg-surface-bright"
                >
                  <Icon name="draft" className="text-[16px]" />
                  Ask about this work
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
