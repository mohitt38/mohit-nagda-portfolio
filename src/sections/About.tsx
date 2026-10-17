import { Reveal } from "../components/Reveal"
import { SectionHeading } from "../components/SectionHeading"
import { education, story } from "../data/education"

export function About() {
  return (
    <section id="about" className="shell py-24">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-12">
        {/* Left: full About copy */}
        <div>
          <SectionHeading
            index="01"
            eyebrow="About"
            title="From a problem to a working system."
            lede="I am a final-year computer science student focused on artificial intelligence. I build practical systems with machine learning, generative AI, and Python."
          />
          <Reveal delay={0.05}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-mist sm:text-lg">
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
              <p className="text-ivory">I am an AI-native developer, and a vibe coder too.</p>
            </div>
          </Reveal>
        </div>

        {/* Right: avatar on top, Now box under it — tops aligned with About heading */}
        <Reveal delay={0.06} className="w-full">
          <div className="flex w-full flex-col gap-4">
            <figure className="w-full overflow-hidden">
              <img
                src="/mohit-portrait.png"
                alt="Illustrated portrait of Mohit Nagda at a desk with AI and Python books"
                className="mx-auto block h-auto w-full origin-top scale-[1.06] bg-transparent object-contain object-top lg:mx-0"
                width={819}
                height={819}
                loading="lazy"
                decoding="async"
              />
            </figure>

            <aside className="w-full border border-line bg-surface p-5 sm:p-6">
              <p className="font-display text-[0.72rem] tracking-[0.18em] text-blue uppercase">Now</p>
              <p className="mt-2 font-display text-xl tracking-tight text-ivory">{education.standing}</p>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                {education.degree}
                <span className="mt-1 block">{education.focus}</span>
                <span className="mt-1 block">{education.school}</span>
                <span className="mt-3 block text-ivory">CGPA {education.cgpa}</span>
              </p>
            </aside>
          </div>
        </Reveal>
      </div>

      <ol className="mt-14 grid items-stretch gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {story.map((step, index) => (
          <li key={step.id} className="flex h-full min-h-28 flex-col bg-ink px-5 py-5">
            <p className="font-display text-[0.68rem] tracking-[0.16em] text-blue">0{index + 1}</p>
            <p className="mt-3 font-display text-lg text-ivory">{step.label}</p>
            <p className="mt-1 text-sm leading-relaxed text-mist">{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
