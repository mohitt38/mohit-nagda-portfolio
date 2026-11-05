import { useState } from "react"
import { site } from "../config/site"
import { useTheme } from "../theme/ThemeProvider"
import { Icon } from "./Icon"

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#skills", label: "Toolkit" },
  { href: "#system-map", label: "AI System Map" },
] as const

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  function pickTheme(next: "dark" | "light" | "system") {
    if (next === "system") {
      setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      return
    }
    setTheme(next)
  }

  const themeClass = (active: boolean) =>
    active
      ? "rounded bg-surface-bright px-1.5 py-1 text-primary"
      : "rounded px-1.5 py-1 text-on-surface-variant hover:text-on-surface"

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-surface/85 shadow-[0_1px_8px_rgba(0,0,0,0.45)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-space-md px-gutter-mobile lg:px-gutter">
        <div className="flex shrink-0 items-center gap-space-md">
          <a href="#home" className="flex items-center gap-space-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded bg-primary font-mono-metric text-[12px] font-medium text-on-primary">
              MN
            </span>
            <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface uppercase">
              Mohit Nagda
            </span>
          </a>
          <div className="hidden items-center gap-space-xs rounded bg-surface-container-high px-space-sm py-0.5 sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="font-mono-meta text-mono-meta tracking-wider text-on-surface-variant uppercase">
              Available for roles
            </span>
          </div>
        </div>
        <nav className="hidden items-center gap-space-lg xl:flex">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-label-ui text-label-ui text-on-surface-variant transition-colors hover:text-on-surface"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-space-sm">
          <div className="flex items-center rounded bg-surface-container-high p-0.5" role="group" aria-label="Theme">
            <button type="button" className={themeClass(false)} title="System theme" onClick={() => pickTheme("system")}>
              <Icon name="desktop_windows" className="text-[15px]" />
            </button>
            <button
              type="button"
              className={themeClass(theme === "light")}
              title="Light theme"
              onClick={() => pickTheme("light")}
            >
              <Icon name="light_mode" className="text-[15px]" />
            </button>
            <button
              type="button"
              className={themeClass(theme === "dark")}
              title="Dark theme"
              onClick={() => pickTheme("dark")}
            >
              <Icon name="dark_mode" className="text-[15px]" />
            </button>
          </div>
          <a
            href={site.resumePath}
            download
            className="hidden items-center gap-space-xs rounded bg-surface-container px-space-md py-1.5 font-mono-metric text-mono-metric text-on-surface hover:bg-surface-container-high md:inline-flex"
          >
            <Icon name="description" className="text-[16px]" />
            CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded bg-primary px-space-md py-1.5 font-mono-metric text-mono-metric font-medium text-on-primary hover:bg-primary-fixed-dim"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded bg-surface-container-high text-on-surface xl:hidden"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-outline-variant/40 bg-surface-container px-gutter-mobile py-space-md xl:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-space-sm">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-label-ui text-label-ui text-on-surface"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
