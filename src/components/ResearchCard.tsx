import type { ResearchItem } from "../data/research"
import { Reveal } from "./Reveal"

export function ResearchCard({ item, index }: { item: ResearchItem; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <article className="relative overflow-hidden border border-black/10 bg-[#f7f3ec] p-6 shadow-[0_18px_40px_rgba(40,30,18,0.06)] sm:p-8">
        <div className="absolute top-0 right-0 h-16 w-16 border-b border-l border-black/10 bg-[#efe8dc]" aria-hidden="true" />
        <p className="font-display text-[0.72rem] tracking-[0.2em] text-[#5c5348] uppercase">{item.kind}</p>
        <h3 className="mt-4 max-w-3xl font-display text-2xl leading-snug tracking-tight text-[#161513] sm:text-3xl">
          {item.title}
        </h3>
        <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-[#6d655b]">Area</dt>
            <dd className="mt-1 text-[#221f1b]">{item.area}</dd>
          </div>
          <div>
            <dt className="text-[#6d655b]">Role</dt>
            <dd className="mt-1 text-[#221f1b]">{item.role}</dd>
          </div>
          <div>
            <dt className="text-[#6d655b]">Status</dt>
            <dd className="mt-1 text-[#221f1b]">{item.status}</dd>
          </div>
        </dl>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#3c3832] sm:text-base">{item.summary}</p>
        <div className="mt-8 space-y-2" aria-hidden="true">
          <div className="h-px w-full bg-black/10" />
          <div className="h-px w-4/5 bg-black/10" />
          <div className="h-px w-2/3 bg-black/10" />
        </div>
      </article>
    </Reveal>
  )
}
