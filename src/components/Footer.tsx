import { contact } from "../config/contact"
import { Icon } from "./Icon"

export function Footer() {
  return (
    <footer className="mt-margin w-full bg-surface-container-lowest">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-space-lg px-gutter-mobile py-space-xl md:flex-row md:items-center lg:px-gutter">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary font-mono-meta text-[10px] text-on-primary">
              MN
            </span>
            <span className="font-headline-sm text-headline-sm text-on-surface uppercase">Mohit Nagda</span>
          </div>
          <p className="font-mono-meta text-mono-meta text-on-surface-variant">
            AI Engineer // Generative AI, RAG, and Python
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-space-lg font-mono-metric text-mono-metric">
          <a href={contact.github} target="_blank" rel="noreferrer noopener" className="flex items-center gap-space-xs text-on-surface-variant hover:text-primary">
            <Icon name="terminal" className="text-[16px]" /> github.com/mohitt38
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer noopener" className="flex items-center gap-space-xs text-on-surface-variant hover:text-primary">
            <Icon name="hub" className="text-[16px]" /> LinkedIn
          </a>
          <a href={contact.emailHref} className="flex items-center gap-space-xs text-on-surface-variant hover:text-primary">
            <Icon name="mail" className="text-[16px]" /> {contact.email}
          </a>
          <a href={contact.whatsappHref} target="_blank" rel="noreferrer noopener" className="flex items-center gap-space-xs text-on-surface-variant hover:text-primary">
            <Icon name="chat" className="text-[16px]" /> {contact.whatsappDisplay}
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-space-sm px-gutter-mobile py-space-md sm:flex-row lg:px-gutter">
        <span className="font-mono-meta text-mono-meta text-outline">© 2026 Mohit Nagda. Udaipur, Rajasthan.</span>
        <span className="font-mono-meta text-mono-meta text-outline">Open to work</span>
      </div>
    </footer>
  )
}
