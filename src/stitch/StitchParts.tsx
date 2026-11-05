import { useEffect, useRef, useState, type FormEvent } from "react"
import { sendContact } from "../lib/sendContact"
import { useTheme, type Theme } from "../theme/ThemeProvider"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#skills", label: "Toolkit" },
  { href: "#system-map", label: "AI System Map" },
]

export function StitchThemeSwitch() {
  const { theme, setTheme } = useTheme()

  function buttonClass(id: Theme) {
    return `inline-flex size-8 items-center justify-center rounded transition-colors ${
      theme === id ? "bg-surface-bright text-primary" : "text-on-surface-variant hover:text-on-surface"
    }`
  }

  return (
    <div aria-label="Theme Switcher" className="inline-flex items-center gap-0.5 rounded bg-surface-container-high p-0.5" role="group">
      <button aria-label="Light theme" className={buttonClass("light")} onClick={() => setTheme("light")} title="Light Theme" type="button">
        <svg aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      </button>
      <button aria-label="Dark theme" className={buttonClass("dark")} onClick={() => setTheme("dark")} title="Dark Theme" type="button">
        <svg aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z" />
        </svg>
      </button>
    </div>
  )
}

export function StitchHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-surface/85 shadow-[0_1px_8px_rgba(0,0,0,0.45)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-space-sm px-gutter-mobile lg:px-gutter">
        <div className="flex min-w-0 items-center gap-space-sm">
          <a className="flex min-w-0 items-center gap-space-sm" href="#home">
            <img alt="Mohit Nagda logo" className="h-8 w-8 shrink-0 rounded-md object-cover" src="/favicon.jpg" />
            <span className="truncate font-headline-sm text-headline-sm tracking-tight text-on-surface uppercase">Mohit Nagda</span>
          </a>
          <div className="hidden items-center gap-space-xs rounded bg-surface-container-high px-space-sm py-0.5 lg:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="font-mono-meta text-mono-meta tracking-wider text-on-surface-variant uppercase">Open to AI Engineer roles</span>
          </div>
        </div>
        <nav className="hidden items-center gap-space-lg xl:flex">
          {navLinks.map((link) => (
            <a key={link.href} className="font-label-ui text-label-ui text-on-surface-variant transition-colors hover:text-on-surface" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-space-sm">
          <StitchThemeSwitch />
          <a
            className="hidden items-center gap-space-xs rounded bg-surface-container px-space-md py-1.5 font-mono-metric text-mono-metric text-on-surface transition-colors hover:bg-surface-container-high md:inline-flex"
            href="/Mohit-Nagda-Resume.pdf"
          >
            <span className="material-symbols-outlined text-[16px]">description</span>
            <span>CV</span>
          </a>
          <a
            className="hidden items-center justify-center rounded bg-primary px-space-sm py-1.5 font-mono-metric text-mono-metric font-medium text-on-primary transition-colors hover:bg-primary-fixed-dim sm:inline-flex sm:px-space-md"
            href="#contact"
          >
            Let's Talk
          </a>
          <button
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-8 w-8 items-center justify-center rounded bg-surface-container text-on-surface xl:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-outline-variant bg-surface px-gutter-mobile py-space-md xl:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-space-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="rounded px-space-sm py-space-sm font-label-ui text-label-ui text-on-surface hover:bg-surface-container-high"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="rounded px-space-sm py-space-sm font-label-ui text-label-ui text-on-surface hover:bg-surface-container-high md:hidden"
              href="/Mohit-Nagda-Resume.pdf"
              onClick={() => setOpen(false)}
            >
              Download CV
            </a>
            <a
              className="rounded bg-primary px-space-sm py-space-sm text-center font-label-ui text-label-ui font-medium text-on-primary sm:hidden"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}

export function SocialGlyph({ name }: { name: "linkedin" | "instagram" | "x" }) {
  const common = "h-4 w-4 shrink-0"
  if (name === "linkedin") {
    return (
      <svg aria-hidden="true" className={common} fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.84v2.12h.05c.53-1.01 1.84-2.12 3.79-2.12 4.06 0 4.81 2.67 4.81 6.14V24h-4v-7.69c0-1.83-.03-4.19-2.55-4.19-2.56 0-2.95 2-2.95 4.06V24h-4V8.5z" />
      </svg>
    )
  }
  if (name === "instagram") {
    return (
      <svg aria-hidden="true" className={common} fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zM17.4 6.4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
      </svg>
    )
  }
  return (
    <svg aria-hidden="true" className={common} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.7 10.3 22.4 1.5h-1.8l-6.7 7.6L8.6 1.5H2l8.1 11.5L2 22.5h1.8l7.1-8.1 5.7 8.1H22l-7.3-12.2zm-2.5 2.9-.8-1.2L4.5 2.9h2.8l5.3 7.6.8 1.2 6.9 9.9h-2.8l-5.3-7.4z" />
    </svg>
  )
}

const welcomeLines = [
  "I'm Mohit curious by nature, an engineer by mindset, and always building what's next",
  "I'm a developer driven by curiosity and innovation.",
  "I'm constantly learning, experimenting and building.",
  "I'm exploring the possibilities of AI through real-world projects.",
  "I'm building my journey at the intersection of AI and engineering.",
]

const commandResponses: Record<string, string> = {
  "who am i": welcomeLines[0],
  "hire me": welcomeLines[1],
  contact: welcomeLines[4],
  clear: welcomeLines[0],
}

export function StitchTerminal() {
  const [cmd, setCmd] = useState("")
  const [output, setOutput] = useState(welcomeLines[0])
  const [status, setStatus] = useState("INFERENCE: TYPING COMMAND")
  const [hot, setHot] = useState(false)
  const [chip, setChip] = useState<string | null>(null)
  const cmdRef = useRef("")
  const locked = useRef(false)
  const seq = useRef(0)
  const timer = useRef(0)
  const [epoch, setEpoch] = useState(0)

  useEffect(() => {
    let cancelled = false
    const later = (fn: () => void, ms: number) => {
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => {
        if (!cancelled) fn()
      }, ms)
    }
    const write = (value: string) => {
      cmdRef.current = value
      setCmd(value)
    }
    function typeText(text: string, done: () => void, index = 0) {
      if (cancelled) return
      if (index <= text.length) {
        write(text.slice(0, index))
        later(() => typeText(text, done, index + 1), Math.floor(Math.random() * 35) + 30)
      } else {
        done()
      }
    }
    function eraseText(done: () => void) {
      if (cancelled) return
      const current = cmdRef.current
      if (current.length > 0) {
        write(current.slice(0, -1))
        later(() => eraseText(done), 16)
      } else {
        done()
      }
    }
    function runAutoSequence() {
      if (cancelled || locked.current) return
      const line = welcomeLines[seq.current % welcomeLines.length]
      setStatus("INFERENCE: TYPING COMMAND")
      setHot(false)
      typeText(line, () => {
        setStatus("STDOUT: EXECUTION COMPLETE")
        setOutput(line)
        setHot(true)
        later(() => {
          eraseText(() => {
            seq.current += 1
            later(runAutoSequence, 280)
          })
        }, 2800)
      })
    }
    runAutoSequence()
    return () => {
      cancelled = true
      window.clearTimeout(timer.current)
    }
  }, [epoch])

  function runChip(key: string) {
    window.clearTimeout(timer.current)
    locked.current = true
    setChip(key)
    const line = commandResponses[key] ?? key
    setStatus("EXEC: INTERACTIVE OVERRIDE")
    const later = (fn: () => void, ms: number) => {
      timer.current = window.setTimeout(fn, ms)
    }
    const write = (value: string) => {
      cmdRef.current = value
      setCmd(value)
    }
    const eraseThenType = () => {
      const current = cmdRef.current
      if (current.length > 0) {
        write(current.slice(0, -1))
        later(eraseThenType, 16)
        return
      }
      let index = 0
      const typeNext = () => {
        if (index <= line.length) {
          write(line.slice(0, index))
          index += 1
          later(typeNext, Math.floor(Math.random() * 35) + 30)
          return
        }
        setOutput(line)
        setHot(true)
        setStatus("STDOUT: USER CALL SUCCESS")
        later(() => {
          locked.current = false
          seq.current += 1
          setEpoch((value) => value + 1)
        }, 4500)
      }
      typeNext()
    }
    eraseThenType()
  }

  return (
    <div className="flex flex-col gap-space-xs rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-space-sm font-mono-meta shadow-inner">
      <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 border-b border-surface-container-high/60 px-1 pb-1.5">
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-error/70" />
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-tertiary/70" />
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary/70" />
          <span className="ml-2 text-[11px] text-outline">nagda@core-arch:~ (bash)</span>
        </div>
        <div className="flex items-center gap-space-xs text-[10px] text-outline">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          <span className="uppercase">{status}</span>
        </div>
      </div>
      <div className="flex items-start gap-1.5 overflow-x-auto px-1 py-1 text-[12px] text-on-surface sm:text-[13px]">
        <span className="select-none font-semibold text-primary">$</span>
        <div className="flex items-center font-mono-meta whitespace-pre">
          <span className="text-on-surface">{cmd}</span>
          <span className="cursor-blink ml-0.5 inline-block h-4 w-2 bg-primary align-middle" />
        </div>
      </div>
      <div className="flex min-h-[38px] items-center rounded border-l-2 border-primary/50 bg-surface-container/60 px-1 py-1.5 font-mono-meta text-[11px] text-on-surface-variant">
        <span className={`leading-relaxed whitespace-pre-wrap transition-colors ${hot ? "text-primary" : ""}`}>{output}</span>
      </div>
      <div className="flex flex-wrap items-center gap-1.5 px-1 pt-0.5 text-[10px] text-outline">
        <span className="select-none text-[9px] tracking-wider text-outline uppercase">Quick Execute:</span>
        {["who am i", "hire me", "contact", "clear"].map((key) => (
          <button
            key={key}
            className={`rounded border bg-surface-container-high px-2 py-0.5 text-on-surface transition-colors hover:bg-surface-bright ${
              chip === key ? "border-primary text-primary" : "border-transparent"
            }`}
            onClick={() => runChip(key)}
            type="button"
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  )
}

const mapNodes = [
  {
    id: "rag",
    icon: "find_in_page",
    label: "RAG Retrieval",
    meta: "ChromaDB • Embeddings",
    title: "RETRIEVAL-AUGMENTED GENERATION (RAG)",
    desc: "Hybrid dense/sparse retrieval pipeline with reciprocal rank fusion. Integrated with ChromaDB and LangChain to mitigate factual hallucinations in domains such as agronomy and clinical documentation.",
    stack: "LangChain, ChromaDB, Hugging Face Embeddings, Gemini-1.5, Reranking Pipelines",
    metric: "Recall@5: 94.2% · Latency: 142ms",
  },
  {
    id: "llm",
    icon: "neurology",
    label: "LLMs",
    meta: "Llama-3 • Gemini API",
    title: "LARGE LANGUAGE MODELS (LLMs)",
    desc: "Fine-tuned parameter-efficient models and orchestrated prompt topologies for multi-turn structured extraction, medical clinical SOAP record synthesis, and multilingual generation.",
    stack: "Llama-3, BART, Gemini API, PyTorch, LoRA/PEFT, Transformers",
    metric: "Token Throughput: 78 t/s · Quantization: 4-bit AWQ",
  },
  {
    id: "nlp",
    icon: "spellcheck",
    label: "NLP & BART",
    meta: "Summarization • spaCy",
    title: "NATURAL LANGUAGE PROCESSING (NLP)",
    desc: "End-to-end tokenization, syntactic chunking, entity extraction, and dual-mode abstractive/extractive summarization pipelines designed for low-overhead inference engines.",
    stack: "spaCy, NLTK, BART-Large-CNN, Hugging Face, KeyBERT",
    metric: "ROUGE-1: 0.442 · Accuracy: 93.1%",
  },
  {
    id: "backend",
    icon: "dns",
    label: "Python Backend",
    meta: "FastAPI • Async Queues",
    title: "SYSTEM BACKENDS & APIS",
    desc: "Asynchronous microservices engineered for real-time model invocation, rate-limited audio transcription queues, and streaming token responses with robust schema validation.",
    stack: "Python, FastAPI, Flask, Pydantic",
    metric: "P99 Latency: < 48ms · Concurrent Workers: 16",
  },
  {
    id: "cv",
    icon: "view_in_ar",
    label: "Computer Vision",
    meta: "OCR • OpenCV Labels",
    title: "COMPUTER VISION & OCR PIPELINES",
    desc: "Preprocessing topologies, morphological filtering, bounding-box localization, and edge-extracted OCR inference for parcel and package shipping label verification.",
    stack: "OpenCV, EasyOCR, Tesseract, PIL, PyTorch Vision",
    metric: "Character Error Rate: < 1.2% · FPS: 32",
  },
  {
    id: "agents",
    icon: "hub",
    label: "Agentic Clinical",
    meta: "SOAP • Multi-Agent",
    title: "AGENTIC CLINICAL REASONING",
    desc: "Autonomous multi-agent orchestration for clinical SOAP triage, diagnostic verification, and self-correcting schema generators operating within deterministic execution loops.",
    stack: "LangGraph, StateGraph, Python 3.12, Function Calling",
    metric: "Task Completion: 96.8% · Redundant Cycles: 0.04%",
  },
]

export function StitchSystemMap() {
  const [active, setActive] = useState("rag")
  const node = mapNodes.find((item) => item.id === active) ?? mapNodes[0]

  return (
    <section className="w-full bg-surface-container-lowest py-space-xl lg:py-margin" id="system-map">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-space-xl px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="font-mono-meta text-mono-meta font-semibold text-primary">ARCHITECTURE CANVAS</span>
              <span className="text-outline">-</span>
              <span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">INTERACTIVE NODE MAP</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">The AI System Map</h2>
          </div>
          <div className="flex items-center gap-space-xs font-mono-meta text-mono-meta text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px] text-primary">touch_app</span>
            <span>Click any subsystem node to inspect architectural telemetry</span>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-space-md lg:grid-cols-12">
          <div className="relative flex flex-col gap-space-lg overflow-hidden rounded-lg bg-surface-container p-space-lg shadow-lg lg:col-span-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-space-xs font-mono-meta text-mono-meta text-outline">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span>TOPOLOGICAL BUS • V.2.4</span>
              </div>
              <span className="font-mono-meta text-mono-meta text-primary">REAL-TIME DATA FLOW: ACTIVE</span>
            </div>
            <div className="z-10 grid grid-cols-2 gap-space-sm sm:grid-cols-3">
              {mapNodes.map((item, index) => {
                const on = item.id === active
                return (
                  <button
                    key={item.id}
                    className={`flex flex-col gap-space-xs rounded p-space-md text-left shadow-sm transition-all hover:scale-[1.02] ${
                      on ? "bg-primary-container text-on-primary-container active-node-ring" : "bg-surface-container-high text-on-surface"
                    }`}
                    onClick={() => setActive(item.id)}
                    type="button"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`material-symbols-outlined text-[18px] ${on ? "" : "text-primary"}`}>{item.icon}</span>
                      <span className={`font-mono-meta text-[10px] ${on ? "opacity-75" : "text-outline"}`}>NODE // 0{index + 1}</span>
                    </div>
                    <span className="font-headline-sm text-headline-sm font-semibold">{item.label}</span>
                    <span className={`font-mono-meta text-[11px] ${on ? "opacity-90" : "text-on-surface-variant"}`}>{item.meta}</span>
                  </button>
                )
              })}
            </div>
            <div className="flex w-full flex-col gap-2 rounded bg-surface-container-lowest p-space-sm">
              <svg className="h-20 w-full text-primary sm:h-24" fill="none" preserveAspectRatio="none" viewBox="0 0 600 80">
                <path d="M 30 40 Q 150 10, 300 40 T 570 40" opacity="0.4" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1.5" />
                <path className="dash-animated" d="M 30 40 C 180 80, 420 0, 570 40" opacity="0.9" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="30" cy="40" fill="currentColor" r="5">
                  <animate attributeName="r" dur="2s" repeatCount="indefinite" values="4;6;4" />
                </circle>
                <circle cx="160" cy="28" fill="currentColor" r="4">
                  <animate attributeName="opacity" dur="1.5s" repeatCount="indefinite" values="0.5;1;0.5" />
                </circle>
                <circle cx="300" cy="40" fill="currentColor" r="5">
                  <animate attributeName="r" dur="2.2s" repeatCount="indefinite" values="4;7;4" />
                </circle>
                <circle cx="450" cy="22" fill="currentColor" r="4">
                  <animate attributeName="opacity" dur="1.8s" repeatCount="indefinite" values="0.4;1;0.4" />
                </circle>
                <circle cx="570" cy="40" fill="currentColor" r="5">
                  <animate attributeName="r" dur="2s" repeatCount="indefinite" values="4;6;4" />
                </circle>
              </svg>
              <div className="flex items-start gap-space-xs font-mono-meta text-[10px] leading-relaxed text-outline">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-primary" />
                <span>DATA STREAM: QUERY → RETRIEVAL MATRIX → CONTEXT WINDOW → FACTUAL RESYNTHESIS</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-space-md rounded-lg bg-surface-container-high p-space-lg shadow-md lg:col-span-4">
            <div className="flex items-center justify-between pb-space-xs">
              <span className="font-mono-meta text-mono-meta font-semibold text-primary">INSPECTOR PANEL</span>
              <span className="font-mono-meta text-mono-meta text-outline">SYS.0x884</span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <span className="font-mono-meta text-mono-meta text-outline uppercase">SELECTED SUBSYSTEM</span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">{node.title}</h4>
            </div>
            <div className="flex flex-col gap-space-xs">
              <span className="font-mono-meta text-mono-meta text-outline uppercase">FUNCTIONAL DESCRIPTION</span>
              <p className="font-body-md text-body-md text-on-surface-variant">{node.desc}</p>
            </div>
            <div className="flex flex-col gap-space-xs">
              <span className="font-mono-meta text-mono-meta text-outline uppercase">TECH ARTIFACTS</span>
              <p className="font-mono-meta text-mono-meta text-primary">{node.stack}</p>
            </div>
            <div className="flex items-center justify-between rounded bg-surface-container-lowest p-space-sm">
              <span className="font-mono-meta text-mono-meta text-outline">BENCHMARK</span>
              <span className="font-mono-meta text-mono-meta font-semibold text-on-surface">{node.metric}</span>
            </div>
            <a
              className="mt-space-xs inline-flex items-center justify-center gap-space-xs rounded bg-surface-container p-space-sm font-mono-meta text-mono-meta text-on-surface transition-colors hover:bg-surface-bright"
              href="#projects"
            >
              <span>View Implemented Projects</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const skillFilters = [
  { id: "all", label: "All Tools" },
  { id: "assist", label: "AI Tools" },
  { id: "genai", label: "Generative AI" },
  { id: "aiml", label: "AI / ML" },
  { id: "backend", label: "Backend & Infra" },
  { id: "cv", label: "Vision / OCR" },
]

const toolLogos: Record<string, string[]> = {
  LangChain: ["langchain"],
  "Gemini 1.5 API": ["googlegemini"],
  "Hugging Face": ["huggingface"],
  "Scikit-learn": ["scikitlearn"],
  spaCy: ["spacy"],
  PyTorch: ["pytorch"],
  "Python (Advanced)": ["python"],
  FastAPI: ["fastapi"],
  Flask: ["flask"],
  Streamlit: ["streamlit"],
  Pandas: ["pandas"],
  NumPy: ["numpy"],
  OpenCV: ["opencv"],
  "RHCSA (Red Hat Linux)": ["redhat"],
  "Git & GitHub": ["git", "github"],
  "Linux Shell Scripting": ["linux"],
  Cursor: ["cursor"],
  Claude: ["claude"],
  ChatGPT: ["chatgpt"],
}

const stackLogos = [
  { name: "Cursor", slug: "cursor" },
  { name: "Claude", slug: "claude" },
  { name: "ChatGPT", slug: "chatgpt" },
  { name: "Python", slug: "python" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Flask", slug: "flask" },
  { name: "LangChain", slug: "langchain" },
  { name: "Gemini", slug: "googlegemini" },
  { name: "Hugging Face", slug: "huggingface" },
  { name: "PyTorch", slug: "pytorch" },
  { name: "scikit-learn", slug: "scikitlearn" },
  { name: "spaCy", slug: "spacy" },
  { name: "Pandas", slug: "pandas" },
  { name: "NumPy", slug: "numpy" },
  { name: "Streamlit", slug: "streamlit" },
  { name: "OpenCV", slug: "opencv" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "Linux", slug: "linux" },
  { name: "Red Hat", slug: "redhat" },
]

const inkLogos = new Set(["cursor", "chatgpt", "github"])

export function StitchStackLine() {
  const row = [...stackLogos, ...stackLogos]

  return (
    <div className="flex w-full items-center gap-space-md overflow-hidden border-y border-outline/15 py-space-sm">
      <span className="shrink-0 pl-gutter-mobile font-mono-meta text-mono-meta text-outline uppercase lg:pl-gutter">Stack</span>
      <div className="min-w-0 flex-1 overflow-hidden">
        <ul className="stack-run">
          {row.map((logo, index) => (
            <li key={`${logo.slug}-${index}`} className="shrink-0" title={logo.name}>
              <img
                alt=""
                className={`h-7 w-7 ${inkLogos.has(logo.slug) ? "stack-ink" : ""}`}
                src={`/icons/${logo.slug}.svg`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ToolMark({ slug }: { slug: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-3.5 w-3.5 shrink-0 bg-current"
      style={{
        WebkitMask: `url(/icons/${slug}.svg) center / contain no-repeat`,
        mask: `url(/icons/${slug}.svg) center / contain no-repeat`,
      }}
    />
  )
}

const skillGroups = [
  {
    category: "assist",
    icon: "smart_toy",
    title: "AI Tools I Work In",
    count: "03 TOOLS",
    items: ["Cursor", "Claude", "ChatGPT"],
  },
  {
    category: "genai",
    icon: "neurology",
    title: "Generative AI & RAG",
    count: "06 TECHS",
    items: ["LangChain", "Retrieval Augmented Gen", "ChromaDB", "Gemini 1.5 API", "Prompt Engineering", "Vector Embeddings"],
  },
  {
    category: "aiml",
    icon: "psychology",
    title: "Machine Learning & NLP",
    count: "06 TECHS",
    items: ["BART Summarization", "Hugging Face", "Scikit-learn", "spaCy", "NLTK", "PyTorch"],
  },
  {
    category: "backend",
    icon: "terminal",
    title: "Backend & Data APIs",
    count: "06 TECHS",
    items: ["Python (Advanced)", "FastAPI", "Flask", "Streamlit", "Pandas", "NumPy"],
  },
  {
    category: "cv",
    icon: "visibility",
    title: "Vision & Processing",
    count: "04 TECHS",
    items: ["OpenCV", "EasyOCR", "Image Segmentation", "Barcode / Label Parsing"],
  },
  {
    category: "backend",
    icon: "cloud",
    title: "DevOps & OS Systems",
    count: "04 TECHS",
    items: ["RHCSA (Red Hat Linux)", "Git & GitHub", "Linux Shell Scripting", "RESTful Architecture"],
  },
  {
    category: "all",
    icon: "handshake",
    title: "Engineering Disciplines",
    count: "04 PRACTICES",
    items: ["Model Benchmarking", "Latency Optimization", "Test-Driven ML", "Factual Verification"],
  },
]

export function StitchSkills() {
  const [filter, setFilter] = useState("all")

  return (
    <section className="w-full py-space-xl lg:py-margin" id="skills">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-space-xl px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col justify-between gap-space-md lg:flex-row lg:items-end">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="font-mono-meta text-mono-meta font-semibold text-primary">05 // TECHNICAL MATRIX</span>
              <span className="text-outline">-</span>
              <span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">SYSTEM CAPABILITIES</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">The tools behind the work.</h2>
          </div>
          <div className="flex flex-wrap items-center gap-space-xs font-mono-meta text-mono-meta">
            {skillFilters.map((item) => {
              const on = filter === item.id
              return (
                <button
                  key={item.id}
                  className={`rounded px-space-md py-1.5 transition-all ${
                    on ? "bg-primary text-on-primary" : "bg-surface-container-high text-on-surface-variant hover:text-on-surface"
                  }`}
                  onClick={() => setFilter(item.id)}
                  type="button"
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const visible = filter === "all" || group.category === filter
            return (
              <div
                key={group.title}
                className={`flex flex-col gap-space-md rounded-lg bg-surface-container-low p-space-lg shadow-sm ${visible ? "" : "hidden"}`}
              >
                <div className="flex items-center justify-between pb-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary">{group.icon}</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface">{group.title}</span>
                  </div>
                  <span className="font-mono-meta text-mono-meta text-outline">{group.count}</span>
                </div>
                <div className="flex flex-wrap gap-space-xs font-mono-meta text-[12px]">
                  {group.items.map((item) => (
                    <span key={item} className="inline-flex items-center gap-1.5 rounded bg-surface-container px-2.5 py-1 text-on-surface">
                      {(toolLogos[item] ?? []).map((slug) => (
                        <ToolMark key={slug} slug={slug} />
                      ))}
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function StitchCopyEmail() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("nagdamohit19@gmail.com")
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2400)
    } catch {
      window.location.href = "mailto:nagdamohit19@gmail.com"
    }
  }

  return (
    <>
      <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
        <button
          className="inline-flex items-center gap-space-sm rounded bg-primary px-space-lg py-space-sm font-mono-metric text-mono-metric font-medium text-on-primary shadow-md transition-all hover:bg-primary-fixed-dim"
          onClick={copyEmail}
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">content_copy</span>
          <span>Copy Email: nagdamohit19@gmail.com</span>
        </button>
        <a
          className="inline-flex items-center gap-space-sm rounded bg-surface-container-high px-space-lg py-space-sm font-mono-metric text-mono-metric text-on-surface transition-colors hover:bg-surface-bright"
          href="https://wa.me/919601258617"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="material-symbols-outlined text-[18px] text-primary">chat</span>
          <span>WhatsApp Direct (+91 96012 58617)</span>
        </a>
      </div>
      <div
        className={`inline-flex w-fit items-center gap-space-xs rounded bg-surface-container-highest px-space-md py-1 font-mono-meta text-mono-meta text-primary transition-opacity duration-300 ${
          copied ? "" : "pointer-events-none opacity-0"
        }`}
      >
        <span className="material-symbols-outlined text-[14px]">check</span>
        <span>Copied to clipboard: nagdamohit19@gmail.com</span>
      </div>
    </>
  )
}

export function StitchContactForm() {
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

  return (
    <form onSubmit={onSubmit} className="rounded-xl bg-surface-container-low p-space-lg shadow-md" autoComplete="on">
      <div className="flex items-center gap-space-xs">
        <span className="font-mono-meta text-mono-meta font-semibold text-primary">08 // DIRECT BRIEF</span>
        <span className="text-outline">-</span>
        <span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">Send a message</span>
      </div>
      <h3 className="mt-space-sm font-headline-md text-headline-md text-on-surface">Tell me what you need built.</h3>
      <p className="mt-space-xs max-w-xl font-body-md text-body-md text-on-surface-variant">
        Name, email, phone, and a short note. I reply at the address you enter.
      </p>
      <div className="mt-space-lg grid gap-space-md sm:grid-cols-2">
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
        className="mt-space-lg inline-flex items-center gap-space-xs rounded bg-primary px-space-lg py-space-sm font-mono-metric text-mono-metric font-medium text-on-primary shadow-md transition-colors hover:bg-primary-fixed-dim disabled:opacity-60"
      >
        <span className="material-symbols-outlined text-[16px]">send</span>
        <span>{sending ? "Sending..." : "Send message"}</span>
      </button>
      {sent ? <p className="mt-space-md font-body-sm text-body-sm text-primary">Message sent. I will reply at the email you entered.</p> : null}
      {formError ? <p className="mt-space-md font-body-sm text-body-sm text-error">{formError}</p> : null}
    </form>
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
