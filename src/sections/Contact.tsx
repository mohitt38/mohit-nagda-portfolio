import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { MagneticButton } from "../components/MagneticButton"
import { Reveal } from "../components/Reveal"
import { Typewriter } from "../components/Typewriter"
import { contact } from "../config/contact"
import { site } from "../config/site"

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
      <div className="shell py-24">
        <Reveal>
          <p className="font-display text-[0.72rem] tracking-[0.22em] text-blue uppercase">08 / Contact</p>
          <h2 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] font-medium tracking-tight text-ivory sm:text-7xl">
            Let&apos;s build something intelligent.
          </h2>
          <div className="mt-6 max-w-xl">
            <p className="font-display text-[0.65rem] tracking-[0.2em] text-blue uppercase">
              Inbox open
            </p>
            <p
              className="mt-2 min-h-[3.5rem] font-display text-lg leading-relaxed text-ivory sm:min-h-[3rem]"
              aria-live="polite"
            >
              <Typewriter phrases={site.contactTypeLines} startDelay={200} />
            </p>
          </div>
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
        <ul className="mt-12 grid items-stretch gap-4 sm:grid-cols-2">
          <li className="flex h-full flex-col border border-white/10 p-6">
            <p className="text-xs tracking-[0.16em] text-mist uppercase">Email</p>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
              <a href={contact.emailHref} className="font-display text-xl text-ivory">
                {contact.email}
              </a>
              <button type="button" onClick={copyEmail} className="text-sm text-blue">
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </li>
          <li className="flex h-full flex-col border border-white/10 p-6">
            <p className="flex items-center gap-2 text-xs tracking-[0.16em] text-mist uppercase">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              Phone
            </p>
            <a href={contact.phoneHref} className="mt-2 block font-display text-xl text-ivory">
              {contact.phoneDisplay}
            </a>
          </li>
          <li className="flex h-full flex-col border border-white/10 p-6">
            <p className="text-xs tracking-[0.16em] text-mist uppercase">LinkedIn</p>
            <a href={contact.linkedin} target="_blank" rel="noreferrer noopener" className="mt-2 block text-ivory">
              linkedin.com/in/mohitnagda
            </a>
          </li>
          <li className="flex h-full flex-col border border-white/10 p-6">
            <p className="text-xs tracking-[0.16em] text-mist uppercase">GitHub</p>
            <a href={contact.github} target="_blank" rel="noreferrer noopener" className="mt-2 block text-ivory">
              github.com/mohitt38
            </a>
          </li>
          <li className="flex h-full flex-col border border-white/10 p-6 sm:col-span-2">
            <p className="flex items-center gap-2 text-xs tracking-[0.16em] text-mist uppercase">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Location
            </p>
            <p className="mt-2 font-display text-xl text-ivory">{contact.location}</p>
          </li>
        </ul>
        <form
          action={`https://formsubmit.co/${contact.email}`}
          method="POST"
          className="mt-8 border border-white/10 p-6 sm:p-8"
        >
          <input type="hidden" name="_subject" value="New message from your portfolio" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
          <h3 className="font-display text-2xl tracking-tight text-ivory">Have work for me?</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist">
            If you want to work with an AI-native developer, send the project. Tell me what you need built, and I will get it at {contact.email}.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm text-mist">
              Name
              <input
                required
                name="name"
                autoComplete="name"
                className="mt-2 w-full border border-white/15 bg-transparent px-3 py-3 text-ivory outline-none focus:border-blue"
              />
            </label>
            <label className="block text-sm text-mist">
              Email
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="mt-2 w-full border border-white/15 bg-transparent px-3 py-3 text-ivory outline-none focus:border-blue"
              />
            </label>
            <label className="block text-sm text-mist sm:col-span-2">
              Contact number
              <input
                required
                type="tel"
                name="phone"
                autoComplete="tel"
                className="mt-2 w-full border border-white/15 bg-transparent px-3 py-3 text-ivory outline-none focus:border-blue"
              />
            </label>
            <label className="block text-sm text-mist sm:col-span-2">
              Message
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full resize-y border border-white/15 bg-transparent px-3 py-3 text-ivory outline-none focus:border-blue"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex min-h-11 items-center rounded-full bg-ivory px-5 font-display text-sm text-ink"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}
