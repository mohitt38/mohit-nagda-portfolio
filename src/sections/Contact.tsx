import { useState, type FormEvent } from "react"
import { Icon } from "../components/Icon"
import { contact } from "../config/contact"
import { faq } from "../data/faq"
import { sendContact } from "../lib/sendContact"

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [formError, setFormError] = useState("")

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setSending(true)
    setSent(false)
    setFormError("")
    try {
      await sendContact(data)
      form.reset()
      setSent(true)
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Could not send right now. Email me directly instead.")
    } finally {
      setSending(false)
    }
  }

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
    <section id="contact" className="w-full py-space-xl lg:py-margin">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-space-xl px-gutter-mobile lg:px-gutter">
        <div className="relative flex flex-col items-start justify-between gap-space-xl overflow-hidden rounded-2xl bg-surface-container p-space-xl shadow-xl lg:flex-row lg:p-margin">
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative z-10 flex flex-col gap-space-lg lg:w-3/5">
            <div className="flex items-center gap-space-xs">
              <span className="font-mono-meta text-mono-meta font-semibold text-primary">07 // INITIALIZE HANDSHAKE</span>
              <span className="text-outline">-</span>
              <span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">Open for conversations</span>
            </div>
            <h2 className="font-display-xl text-[36px] leading-[44px] tracking-tight text-on-surface lg:text-display-xl">
              Have a problem worth solving?
              <br />
              Let&apos;s build something intelligent.
            </h2>
            <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
              Open to full-time roles, freelance, and research collaboration. I usually reply within 48 hours.
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-space-sm rounded bg-primary px-space-lg py-space-sm font-mono-metric text-mono-metric font-medium text-on-primary shadow-md hover:bg-primary-fixed-dim"
              >
                <Icon name="content_copy" className="text-[18px]" />
                {copied ? "Copied" : `Copy email: ${contact.email}`}
              </button>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-space-sm rounded bg-surface-container-high px-space-lg py-space-sm font-mono-metric text-mono-metric text-on-surface hover:bg-surface-bright"
              >
                <Icon name="chat" className="text-[18px] text-primary" />
                WhatsApp ({contact.whatsappDisplay})
              </a>
            </div>
          </div>
          <div className="relative z-10 flex w-full flex-col gap-space-md lg:w-2/5">
            <div className="flex flex-col gap-space-md rounded-xl bg-surface-container-high p-space-lg">
              <div className="flex items-center justify-between pb-space-xs">
                <span className="font-mono-meta text-mono-meta text-outline uppercase">Verified channels</span>
                <span className="h-2 w-2 rounded-full bg-primary" />
              </div>
              <div className="flex flex-col gap-space-sm font-mono-metric text-mono-metric">
                <Channel href={contact.emailHref} label={contact.email} />
                <Channel href={contact.github} label="github.com/mohitt38" external />
                <Channel href={contact.linkedin} label="linkedin.com/in/mohitnagda" external />
                <div className="flex items-center justify-between rounded bg-surface-container p-space-sm">
                  <span className="text-on-surface-variant">{contact.location}</span>
                  <span className="font-mono-meta text-[11px] text-outline">IST (UTC+5:30)</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-space-xs font-mono-meta text-[11px] text-outline">
                <span>MACHINE READABLE:</span>
                <span className="text-primary">
                  <a href="/llms.txt">/llms.txt</a> • <a href="/profile.md">/profile.md</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-xl border border-outline-variant/40 bg-surface-container-low p-space-lg" autoComplete="on">
          <h3 className="font-headline-md text-headline-md text-on-surface">Send a short brief</h3>
          <p className="mt-2 max-w-xl font-body-md text-body-md text-on-surface-variant">
            Tell me what you need built. I will reply at {contact.email}.
          </p>
          <div className="mt-6 grid gap-space-md sm:grid-cols-2">
            <Field label="Name" name="name" autoComplete="name" />
            <Field label="Email" name="email" type="email" autoComplete="email" />
            <Field label="Contact number" name="phone" type="tel" autoComplete="tel" wide />
            <label className="block font-mono-meta text-mono-meta text-outline uppercase sm:col-span-2">
              Message
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full resize-y rounded border border-outline-variant bg-surface-container-lowest px-3 py-3 font-body-md text-body-md text-on-surface outline-none focus:border-primary"
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={sending}
            className="mt-6 inline-flex items-center rounded bg-primary px-space-lg py-space-sm font-mono-metric text-mono-metric font-medium text-on-primary disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send message"}
          </button>
          {sent ? <p className="mt-4 font-body-sm text-body-sm text-on-surface">Your mail app is open. Tap Send and it reaches nagdamohit19@gmail.com.</p> : null}
          {formError ? <p className="mt-4 font-body-sm text-body-sm text-primary">{formError}</p> : null}
        </form>

        <div className="rounded-xl border border-outline-variant/40 p-space-lg">
          <p className="font-mono-meta text-mono-meta text-primary uppercase">FAQ</p>
          <h3 className="mt-2 font-headline-md text-headline-md text-on-surface">Quick answers</h3>
          <dl className="mt-6 space-y-5">
            {faq.map((item) => (
              <div key={item.question}>
                <dt className="font-headline-sm text-headline-sm text-on-surface">{item.question}</dt>
                <dd className="mt-1 font-body-md text-body-md text-on-surface-variant">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function Channel({ href, label, external = false }: { href: string; label: string; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="flex items-center justify-between rounded bg-surface-container p-space-sm hover:bg-surface-bright"
    >
      <span className="text-on-surface-variant">{label}</span>
      <Icon name="arrow_outward" className="text-[16px] text-primary" />
    </a>
  )
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  wide = false,
}: {
  label: string
  name: string
  type?: string
  autoComplete: string
  wide?: boolean
}) {
  return (
    <label className={`block font-mono-meta text-mono-meta text-outline uppercase ${wide ? "sm:col-span-2" : ""}`}>
      {label}
      <input
        required
        type={type}
        name={name}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded border border-outline-variant bg-surface-container-lowest px-3 py-3 font-body-md text-body-md text-on-surface outline-none focus:border-primary"
      />
    </label>
  )
}
