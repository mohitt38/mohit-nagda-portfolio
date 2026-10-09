import { ProjectCard } from "../components/ProjectCard"
import { SectionHeading } from "../components/SectionHeading"
import { projects } from "../data/projects"

export function Projects() {
  return (
    <section id="projects" className="border-t border-white/10">
      <div className="shell py-24">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Systems with a job to do."
          lede="Four projects from my public repositories: crop advisory, summarization, meeting tasks, and label OCR."
        />
        <div className="mt-14 space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
