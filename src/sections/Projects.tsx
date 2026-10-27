import { ProjectCard } from "../components/ProjectCard"
import { SectionHeading } from "../components/SectionHeading"
import { projects } from "../data/projects"
import { GitHub } from "./GitHub"

export function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="shell pt-6 pb-14 sm:py-20 lg:py-24">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Tools people can actually use."
          lede="Four working systems: a farming advice chatbot, a document summarizer, a meeting-to-tasks helper, and a parcel label reader."
        />
        <div className="mt-10 space-y-6 sm:mt-14 sm:space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <GitHub />
      </div>
    </section>
  )
}
