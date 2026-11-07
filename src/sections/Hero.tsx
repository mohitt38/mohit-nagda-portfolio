import { contact } from "../config/contact"
import { site } from "../config/site"
import { HeroTerminal } from "../components/HeroTerminal"
import { Icon } from "../components/Icon"

export function Hero() {
  return (
    <section id="home" className="relative mx-auto w-full max-w-[1280px] overflow-hidden px-gutter-mobile py-space-xl lg:px-gutter lg:py-margin">
      <div className="relative grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
        <div className="flex flex-col gap-space-lg lg:col-span-7">
          <div className="flex flex-wrap items-center gap-space-sm">
            <div className="inline-flex items-center gap-space-xs rounded-full bg-surface-container-high px-space-sm py-1">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="font-mono-meta text-mono-meta tracking-wider text-on-surface-variant uppercase">
                AI Systems Engineer • Researcher
              </span>
            </div>
            <div className="inline-flex items-center gap-space-xs rounded-full bg-surface-container-low px-space-sm py-1">
              <Icon name="terminal" className="text-[14px] text-primary" />
              <span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">
                Available for hire / roles
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-space-xs">
            <h1 className="font-display-xl text-[36px] leading-[44px] tracking-tight text-on-surface lg:text-display-xl">
              Building intelligent systems for the real world.
            </h1>
            <p className="mt-space-sm max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              I am <strong className="font-semibold text-on-surface">Mohit Nagda</strong>, an AI-focused computer
              science engineer building practical tools with Generative AI, RAG, NLP, and Python - chatbots,
              summarizers, meeting helpers, and label readers.
            </p>
          </div>
          <HeroTerminal />
          <div className="grid grid-cols-3 gap-space-sm rounded bg-surface-container-low p-space-md shadow-sm">
            <div className="flex flex-col">
              <span className="font-mono-meta text-mono-meta text-outline uppercase">Education</span>
              <span className="font-mono-metric text-mono-metric font-medium text-on-surface">B.Tech CS (AI)</span>
              <span className="font-mono-meta text-mono-meta font-semibold text-primary">CGPA 9.0 / 10.0</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono-meta text-mono-meta text-outline uppercase">Location</span>
              <span className="font-mono-metric text-mono-metric font-medium text-on-surface">Udaipur, India</span>
              <span className="font-mono-meta text-mono-meta text-on-surface-variant">Rajasthan</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono-meta text-mono-meta text-outline uppercase">Status</span>
              <span className="font-mono-metric text-mono-metric font-medium text-on-surface">Open to roles</span>
              <span className="font-mono-meta text-mono-meta text-on-surface-variant">AI Engineer</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            <a
              href="#projects"
              className="inline-flex items-center gap-space-sm rounded bg-primary px-space-lg py-space-sm font-mono-metric text-mono-metric font-medium text-on-primary shadow-md hover:bg-primary-fixed-dim"
            >
              Explore My Work
              <Icon name="arrow_downward" className="text-[16px]" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-space-sm rounded bg-surface-container px-space-lg py-space-sm font-mono-metric text-mono-metric text-on-surface hover:bg-surface-container-high"
            >
              Let&apos;s Connect
              <Icon name="send" className="text-[16px]" />
            </a>
            <a
              href="#system-map"
              className="inline-flex items-center gap-space-xs rounded px-space-md py-space-sm font-mono-meta text-mono-meta text-primary hover:text-on-surface"
            >
              <Icon name="account_tree" className="text-[14px]" />
              View Architecture Map →
            </a>
            <a
              href={site.resumePath}
              download
              className="inline-flex items-center gap-space-xs rounded px-space-md py-space-sm font-mono-meta text-mono-meta text-on-surface-variant hover:text-primary"
            >
              <Icon name="description" className="text-[14px]" />
              Resume
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-space-lg pt-space-sm font-mono-meta text-mono-meta text-outline">
            <a href={contact.github} target="_blank" rel="noreferrer noopener" className="flex items-center gap-space-xs hover:text-primary">
              <Icon name="code" className="text-[14px]" /> github.com/mohitt38
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer noopener" className="flex items-center gap-space-xs hover:text-primary">
              <Icon name="link" className="text-[14px]" /> linkedin.com/in/mohitnagda
            </a>
            <a href={contact.emailHref} className="flex items-center gap-space-xs hover:text-primary">
              <Icon name="mail" className="text-[14px]" /> {contact.email}
            </a>
            <a href={contact.whatsappHref} target="_blank" rel="noreferrer noopener" className="flex items-center gap-space-xs hover:text-primary">
              <Icon name="chat" className="text-[14px]" /> WhatsApp
            </a>
          </div>
        </div>
        <div className="relative flex flex-col items-center lg:col-span-5">
          <div className="pointer-events-none absolute -inset-4 rounded-full bg-primary-container/10 blur-3xl" />
          <div className="relative flex w-full max-w-[420px] flex-col gap-space-md overflow-hidden rounded-xl bg-surface-container-low p-space-md shadow-xl">
            <div className="flex items-center justify-between pb-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="font-mono-meta text-mono-meta tracking-wider text-on-surface-variant uppercase">
                  Node // Mohit_Nagda
                </span>
              </div>
              <span className="font-mono-meta text-mono-meta text-outline">Open to work</span>
            </div>
            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-surface-container-lowest">
              <img
                alt="Illustrated portrait of Mohit Nagda"
                src="/mohit-portrait.png"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute top-2 left-2 rounded bg-surface-container-highest/80 px-space-xs py-0.5 font-mono-meta text-[10px] text-primary backdrop-blur-sm">
                Spec: Gen-AI / RAG / Python
              </div>
              <div className="absolute right-2 bottom-2 rounded bg-surface-container-highest/80 px-space-xs py-0.5 font-mono-meta text-[10px] text-on-surface-variant backdrop-blur-sm">
                Available for roles
              </div>
              <div className="scanline-effect pointer-events-none absolute inset-x-0 z-10 h-16 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
              <div className="pointer-events-none absolute inset-0 rounded-lg border border-primary/20" />
            </div>
            <div className="flex items-center justify-between rounded bg-surface-container p-space-sm font-mono-meta text-mono-meta">
              <div className="flex flex-col">
                <span className="text-[10px] text-outline uppercase">Affiliation</span>
                <span className="font-medium text-on-surface">GITS CS (AI) • 2027</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-[10px] text-outline uppercase">Research topic</span>
                <span className="font-medium text-primary">Clinical SOAP notes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
