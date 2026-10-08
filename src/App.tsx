import { CursorGlow } from "./components/CursorGlow"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { sectionIds } from "./config/site"
import { useActiveSection } from "./hooks/useActiveSection"
import { About } from "./sections/About"
import { Achievements } from "./sections/Achievements"
import { Contact } from "./sections/Contact"
import { Education } from "./sections/Education"
import { Experience } from "./sections/Experience"
import { Hero } from "./sections/Hero"
import { Projects } from "./sections/Projects"
import { Research } from "./sections/Research"
import { Skills } from "./sections/Skills"

export default function App() {
  const active = useActiveSection(sectionIds)

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:bg-ivory focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <CursorGlow />
      <Navbar active={active} />
      <main id="content">
        <Hero active={active} />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
