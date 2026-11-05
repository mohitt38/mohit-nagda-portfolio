import { Icon } from "../components/Icon"
import { projects } from "../data/projects"

export function Projects() {
  const [agri, summary, meeting, ocr] = projects

  return (
    <section id="projects" className="w-full py-space-xl lg:py-margin">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-space-xl px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="font-mono-meta text-mono-meta font-semibold text-primary">03 // DELIVERED ARTIFACTS</span>
              <span className="text-outline">-</span>
              <span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">Working systems</span>
            </div>
            <h2 className="font-headline-lg text-[28px] leading-9 text-on-surface lg:text-headline-lg">
              Ideas into working systems.
            </h2>
          </div>
          <p className="max-w-md font-mono-metric text-mono-metric text-outline">
            Four tools: a farming advice chatbot, a document summarizer, a meeting-to-tasks helper, and a parcel label reader.
          </p>
        </div>

        <article className="flex flex-col items-center gap-space-xl rounded-xl bg-surface-container-low p-space-lg shadow-lg lg:flex-row">
          <div className="flex flex-col gap-space-md lg:w-1/2">
            <ProjectKicker index="01" category={agri.category} />
            <h3 className="font-headline-lg text-[28px] leading-9 text-on-surface lg:text-headline-lg">
              {agri.name} - {agri.plainName}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{agri.summary}</p>
            <Metric outcome={agri.outcome} label="Outcome" />
            <Tags items={agri.stack} />
            <Repo href={agri.github} />
          </div>
          <div className="flex w-full flex-col gap-space-sm rounded-lg bg-surface-container-lowest p-space-md font-mono-meta text-[12px] shadow-inner lg:w-1/2">
            <div className="flex items-center justify-between pb-space-xs">
              <span className="text-outline">TRACE // AGRINOVA</span>
              <span className="text-primary">HI • EN • PA</span>
            </div>
            <Trace label="Question" text="Crop questions in the farmer's language." />
            <Trace label="Lookup" text="Answers stay tied to stored crop knowledge." tone="primary" />
            <Trace label="Result" text={agri.outcome} />
          </div>
        </article>

        <article className="flex flex-col items-center gap-space-xl rounded-xl bg-surface-container-low p-space-lg shadow-lg lg:flex-row-reverse">
          <div className="flex flex-col gap-space-md lg:w-1/2">
            <ProjectKicker index="02" category={summary.category} />
            <h3 className="font-headline-lg text-[28px] leading-9 text-on-surface lg:text-headline-lg">
              {summary.name}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{summary.summary}</p>
            <Metric outcome={summary.outcome} label="Outcome" />
            <Tags items={summary.stack} />
            <Repo href={summary.github} />
          </div>
          <div className="grid w-full grid-cols-2 gap-space-sm font-mono-meta text-[11px] lg:w-1/2">
            <div className="flex h-44 flex-col gap-space-xs rounded-lg bg-surface-container-lowest p-space-md">
              <span className="text-outline">LONG DOCUMENT</span>
              <p className="text-on-surface-variant opacity-70">Pages of source text before anyone has time to read them.</p>
              <span className="mt-auto text-[10px] text-outline">INPUT</span>
            </div>
            <div className="flex h-44 flex-col gap-space-xs rounded-lg bg-surface-container p-space-md">
              <span className="font-semibold text-primary">SHORT SUMMARY</span>
              <p className="text-on-surface">{summary.plainName}</p>
              <span className="mt-auto text-[10px] text-primary">OUTPUT</span>
            </div>
          </div>
        </article>

        <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2">
          {[meeting, ocr].map((project, index) => (
            <article key={project.id} className="flex flex-col justify-between gap-space-lg rounded-xl bg-surface-container-low p-space-lg shadow-md">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-mono-meta text-mono-meta font-semibold text-primary">PROJECT // 0{index + 3}</span>
                  <Icon name={project.id === "meeting" ? "mic" : "document_scanner"} className="text-outline" />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">{project.name}</h3>
                <p className="font-body-sm text-body-sm text-primary">{project.plainName}</p>
                <p className="font-body-md text-body-md text-on-surface-variant">{project.summary}</p>
                {project.id === "meeting" ? (
                  <div className="mt-space-xs flex h-8 items-end gap-1 rounded bg-surface-container-lowest px-space-sm">
                    {[8, 14, 20, 12, 18, 10, 16, 9].map((height, bar) => (
                      <span
                        key={bar}
                        className="eq-bar w-1 rounded-full bg-primary"
                        style={{ height, animationDelay: `${bar * 0.12}s` }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="mt-space-xs rounded border border-dashed border-primary/40 bg-surface-container-lowest p-space-sm font-mono-meta text-[11px] text-on-surface-variant">
                    Label photo → barcode first → OCR fallback → readable text
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-space-sm">
                <Tags items={project.stack} />
                <Repo href={project.github} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectKicker({ index, category }: { index: string; category: string }) {
  return (
    <div className="flex items-center gap-space-xs">
      <span className="font-mono-meta text-mono-meta font-semibold text-primary">PROJECT // {index}</span>
      <span className="text-outline">•</span>
      <span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">{category}</span>
    </div>
  )
}

function Metric({ label, outcome }: { label: string; outcome: string }) {
  return (
    <div className="rounded bg-surface-container p-space-sm">
      <span className="block font-mono-meta text-[10px] text-outline uppercase">{label}</span>
      <span className="font-mono-metric text-mono-metric font-medium text-on-surface">{outcome}</span>
    </div>
  )
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-space-xs font-mono-meta text-[11px] text-outline">
      {items.map((item) => (
        <span key={item} className="rounded bg-surface-container-high px-2 py-1">
          {item}
        </span>
      ))}
    </div>
  )
}

function Repo({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-space-xs font-mono-metric text-mono-metric text-primary hover:text-on-surface">
      <Icon name="code" className="text-[16px]" />
      Source repository →
    </a>
  )
}

function Trace({ label, text, tone = "outline" }: { label: string; text: string; tone?: "outline" | "primary" }) {
  return (
    <div className="flex flex-col gap-1 rounded bg-surface-container p-space-sm">
      <span className={`text-[10px] uppercase ${tone === "primary" ? "text-primary" : "text-outline"}`}>&gt; {label}</span>
      <p className="text-on-surface">{text}</p>
    </div>
  )
}
