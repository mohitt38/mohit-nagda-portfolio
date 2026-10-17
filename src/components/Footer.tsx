import { contact } from "../config/contact"

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-4 py-8 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Mohit Nagda. Udaipur, Rajasthan.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#education" className="hover:text-ivory">
            Education
          </a>
          <a href="#achievements" className="hover:text-ivory">
            Certifications
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer noopener" className="hover:text-ivory">
            LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer noopener" className="hover:text-ivory">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
