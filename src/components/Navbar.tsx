import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { contact } from "../config/contact"
import { navItems, site } from "../config/site"
import { useScrolled } from "../hooks/useScrolled"
import { SystemMap } from "./SystemMap"

export function Navbar({ active }: { active: string }) {
  const scrolled = useScrolled(24)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open ? "border-b border-white/10 bg-ink/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
      <div className="shell flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-sm tracking-[0.18em] text-ivory uppercase">
          Mohit Nagda
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "page" : undefined}
              className={`font-display text-[0.78rem] tracking-wide ${
                active === item.id ? "text-ivory" : "text-mist hover:text-ivory"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={site.resumePath}
            download
            className="font-display text-[0.78rem] tracking-wide text-mist hover:text-ivory"
          >
            Resume
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer noopener"
            className="font-display text-[0.78rem] tracking-wide text-blue"
          >
            GitHub
          </a>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-ivory lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
        {scrolled ? <SystemMap activeSection={active} variant="rail" /> : null}
      </header>
      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-ink px-6 py-8 lg:hidden"
          >
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center font-display text-2xl tracking-tight text-ivory"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-5 text-sm">
              <a href={site.resumePath} download className="text-blue">
                Resume
              </a>
              <a href={contact.emailHref} className="text-mist">
                Email
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer noopener" className="text-mist">
                LinkedIn
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer noopener" className="text-mist">
                GitHub
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  )
}
