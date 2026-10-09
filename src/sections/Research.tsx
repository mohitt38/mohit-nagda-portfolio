import { ResearchCard } from "../components/ResearchCard"
import { SectionHeading } from "../components/SectionHeading"
import { research } from "../data/research"

export function Research() {
  return (
    <section id="research" className="border-t border-white/10 bg-[#e7e1d6] text-[#161513]">
      <div className="shell py-24">
        <SectionHeading
          index="04"
          eyebrow="Research"
          title="Clinical language, written carefully."
          tone="paper"
          lede="Two manuscripts from the research internship. One paper is in the camera-ready submission phase. The book chapter is under peer review."
        />
        <div className="mt-14 grid gap-6">
          {research.map((item, index) => (
            <ResearchCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
