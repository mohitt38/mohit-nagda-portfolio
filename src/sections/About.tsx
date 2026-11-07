import { site } from "../config/site"
import { Icon } from "../components/Icon"

const blocks = [
  {
    id: "BLOCK 01",
    icon: "psychology",
    title: "AI Systems & RAG",
    body: "Chatbots and Q&A tools that look up real knowledge first, so answers stay useful instead of guessed.",
    tags: ["LangChain", "RAG", "Gemini"],
  },
  {
    id: "BLOCK 02",
    icon: "developer_board",
    title: "Python backends",
    body: "Services and workflows that take a script or a document and turn it into something a person can open.",
    tags: ["Python", "Flask", "Streamlit"],
  },
  {
    id: "BLOCK 03",
    icon: "biotech",
    title: "Clinical AI research",
    body: "Work on SOAP-style clinical documentation and agentic healthcare workflows during a research internship.",
    tags: ["Clinical NLP", "SOAP notes", "Agentic AI"],
  },
]

export function About() {
  return (
    <section id="about" className="w-full bg-surface-container-lowest py-space-xl lg:py-margin">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-space-xl px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="font-mono-meta text-mono-meta font-semibold text-primary">01 // CONTEXT & PHILOSOPHY</span>
              <span className="text-outline">-</span>
              <span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">Architectural profile</span>
            </div>
            <h2 className="font-headline-lg text-[28px] leading-9 text-on-surface lg:text-headline-lg">
              Curiosity drives the build.
            </h2>
          </div>
          <p className="max-w-md font-mono-metric text-mono-metric text-outline">
            Practical AI tools: questions answered, documents shortened, meetings turned into next steps.
          </p>
        </div>
        <div className="flex flex-col items-start gap-space-xl rounded-lg bg-surface-container p-space-lg md:flex-row">
          <div className="flex flex-col gap-space-md font-body-md text-body-md leading-relaxed text-on-surface-variant md:w-2/3">
            <p>
              I am a final-year Computer Science student specializing in Artificial Intelligence at Geetanjali
              Institute of Technical Studies, Udaipur, with a <strong className="text-on-surface">9.0 / 10.0 CGPA</strong>.
              {` ${site.plainPitch}`}
            </p>
            <p>
              Most recently I was a Full Stack Intern at Toba Tech Solutions (July 2026 - November 2026), working on
              ContentX frontend and backend plus AI workflows from a script to generated content. Before that I
              researched clinical documentation, and earlier I built machine-learning pipelines from raw data through
              evaluation.
            </p>
          </div>
          <div className="flex w-full flex-col gap-space-sm md:w-1/3">
            <div className="flex flex-col gap-space-xs rounded bg-surface-container-high p-space-md">
              <span className="font-mono-meta text-mono-meta text-outline uppercase">Core specialization</span>
              <span className="font-headline-sm text-headline-sm text-on-surface">Applied Generative AI & RAG</span>
              <span className="font-mono-meta text-mono-meta text-primary">Python • LangChain • Streamlit</span>
            </div>
            <div className="flex flex-col gap-space-xs rounded bg-surface-container-high p-space-md">
              <span className="font-mono-meta text-mono-meta text-outline uppercase">Hire me for</span>
              {site.hireFor.map((item) => (
                <span key={item} className="font-body-sm text-body-sm text-on-surface">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-space-md md:grid-cols-3">
          {blocks.map((block) => (
            <div
              key={block.id}
              className="group flex flex-col justify-between gap-space-lg rounded-lg bg-surface-container-low p-space-lg transition-all hover:bg-surface-container"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-mono-meta text-mono-meta font-semibold text-primary">{block.id}</span>
                  <Icon name={block.icon} className="text-outline group-hover:text-primary" />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">{block.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{block.body}</p>
              </div>
              <div className="flex flex-wrap gap-space-xs pt-space-xs font-mono-meta text-[11px] text-outline">
                {block.tags.map((tag) => (
                  <span key={tag} className="rounded bg-surface-container-highest px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
