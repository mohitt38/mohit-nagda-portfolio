import { Reveal } from "../components/Reveal"
import { SectionHeading } from "../components/SectionHeading"
import { education, story } from "../data/education"

const interests = [
  "AI systems",
  "Generative AI",
  "LLMs and RAG",
  "NLP",
  "Backend development",
  "Clinical research",
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="From a problem to a working system."
        lede="I am a final-year computer science student focused on artificial intelligence. I build practical systems with machine learning, generative AI, and Python."
      />
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <Reveal delay={0.05}>
          <div className="space-y-5 text-base leading-relaxed text-mist sm:text-lg">
            <p>
              Right now I am a Python Developer Intern at Toba Tech Solutions, contributing to the backend of ContentX
              and to AI workflows that take a script through to generated content.
            </p>
            <p>
              Before that I was a remote AI Research Intern with Tech Adaptive Pandit Pty Ltd, working on clinical
              documentation and diagnostic reasoning. Earlier, at Grass Solutions, I built machine learning pipelines
              from ingestion through evaluation.
            </p>
            <p>
              I like the stretch between an idea and a prototype someone can actually open: a crop advisor, a
              summarizer, an offline meeting tool, or a label reader.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <aside className="border border-white/10 bg-white/[0.03] p-6">
            <p className="font-display text-[0.72rem] tracking-[0.18em] text-blue uppercase">Now</p>
            <p className="mt-3 font-display text-2xl tracking-tight text-ivory">{education.standing}</p>
            <p className="mt-2 text-sm leading-relaxed text-mist">
              {education.degree}, {education.focus}. {education.school}. CGPA {education.cgpa}.
            </p>
            <ul className="mt-6 space-y-2">
              {interests.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-ivory">
                  <span className="h-px w-4 bg-blue" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
      <ol className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-6">
        {story.map((step, index) => (
          <li key={step.id} className="bg-ink px-4 py-5">
            <p className="font-display text-[0.68rem] tracking-[0.16em] text-blue">0{index + 1}</p>
            <p className="mt-3 font-display text-lg text-ivory">{step.label}</p>
            <p className="mt-1 text-sm text-mist">{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
