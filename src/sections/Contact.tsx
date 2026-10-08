import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { MagneticButton } from "../components/MagneticButton"
import { Reveal } from "../components/Reveal"
import { contact } from "../config/contact"

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = contact.emailHref
    }
  }

  return (
    <section id="contact" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
        <Reveal>
          <p className="font-display text-[0.72rem] tracking-[0.22em] text-blue uppercase">08 / Contact</p>
          <h2 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] font-medium tracking-tight text-ivory sm:text-7xl">
            Let&apos;s build something intelligent.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
            A note about a system, a paper, or a role is enough.
          </p>
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-3">
          <MagneticButton href={contact.emailHref}>
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email
          </MagneticButton>
          <MagneticButton href={contact.linkedin} variant="ghost" external>
            LinkedIn
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </MagneticButton>
          <MagneticButton href={contact.github} variant="ghost" external>
            GitHub
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </MagneticButton>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          <li className="border border-white/10 p-5">
            <p className="text-xs tracking-[0.16em] text-mist uppercase">Email</p>
            <a href={contact.emailHref} className="mt-2 block font-display text-xl text-ivory">
              {contact.email}
            </a>
            <button type="button" onClick={copyEmail} className="mt-3 text-sm text-blue">
              {copied ? "Copied" : "Copy address"}
            </button>
          </li>
          <li className="border border-white/10 p-5">
            <p className="flex items-center gap-2 text-xs tracking-[0.16em] text-mist uppercase">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              Phone
            </p>
            <a href={contact.phoneHref} className="mt-2 block font-display text-xl text-ivory">
              {contact.phoneDisplay}
            </a>
          </li>
          <li className="border border-white/10 p-5">
            <p className="text-xs tracking-[0.16em] text-mist uppercase">LinkedIn</p>
            <a href={contact.linkedin} target="_blank" rel="noreferrer noopener" className="mt-2 block text-ivory">
              linkedin.com/in/mohit-nagda
            </a>
          </li>
          <li className="border border-white/10 p-5">
            <p className="flex items-center gap-2 text-xs tracking-[0.16em] text-mist uppercase">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Location
            </p>
            <p className="mt-2 font-display text-xl text-ivory">{contact.location}</p>
            <a href={contact.github} target="_blank" rel="noreferrer noopener" className="mt-3 block text-sm text-blue">
              github.com/mohitt38
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
