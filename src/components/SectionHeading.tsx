import { Reveal } from "./Reveal"

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  lede?: string
  tone?: "dark" | "paper"
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  tone = "dark",
}: SectionHeadingProps) {
  const kicker = tone === "paper" ? "text-paper-kicker" : "text-blue"
  const heading = tone === "paper" ? "text-paper-ink" : "text-ivory"
  const body = tone === "paper" ? "text-paper-mist" : "text-mist"

  return (
    <Reveal>
      <div className="max-w-3xl">
        <p className={`font-display text-[0.72rem] tracking-[0.22em] uppercase ${kicker}`}>
          {index}
          <span className="mx-2 opacity-50">/</span>
          {eyebrow}
        </p>
        <h2 className={`mt-4 font-display text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl ${heading}`}>
          {title}
        </h2>
        {lede ? <p className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${body}`}>{lede}</p> : null}
      </div>
    </Reveal>
  )
}
