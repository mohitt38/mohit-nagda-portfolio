import { useState } from "react"
import { Icon } from "../components/Icon"

const nodes = [
  {
    id: "rag",
    icon: "find_in_page",
    title: "RAG Retrieval",
    meta: "LangChain • Gemini",
    heading: "Retrieval-augmented generation",
    desc: "AgriNova looks up crop knowledge before it answers, in Hindi, English, or Punjabi.",
    stack: "LangChain, Gemini API, Streamlit",
  },
  {
    id: "llm",
    icon: "neurology",
    title: "LLMs",
    meta: "BART • Gemini",
    heading: "Language models",
    desc: "Summaries, grounded chat, and clinical documentation experiments.",
    stack: "Hugging Face, BART, Gemini API",
  },
  {
    id: "nlp",
    icon: "spellcheck",
    title: "NLP",
    meta: "spaCy • NLTK",
    heading: "Natural language processing",
    desc: "Text cleanup, summarization, and pulling action items out of meeting transcripts.",
    stack: "spaCy, NLTK, Python",
  },
  {
    id: "speech",
    icon: "mic",
    title: "Speech",
    meta: "Offline meetings",
    heading: "Meeting audio",
    desc: "An offline path from meeting audio to owners, deadlines, and priorities.",
    stack: "Python, speech processing, Streamlit",
  },
  {
    id: "vision",
    icon: "document_scanner",
    title: "OCR",
    meta: "OpenCV • Tesseract",
    heading: "Label reading",
    desc: "Parcel label photos become readable text. Barcode first, OCR when that is not enough.",
    stack: "OpenCV, Tesseract, Python",
  },
  {
    id: "backend",
    icon: "terminal",
    title: "Backend",
    meta: "Python services",
    heading: "Python backends",
    desc: "ContentX workflows built at Toba Tech, plus Flask and Streamlit interfaces for the projects.",
    stack: "Python, Flask, Streamlit",
  },
] as const

export function SystemMapSection() {
  const [active, setActive] = useState<(typeof nodes)[number]["id"]>("rag")
  const current = nodes.find((node) => node.id === active) ?? nodes[0]

  return (
    <section id="system-map" className="w-full bg-surface-container-lowest py-space-xl lg:py-margin">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-space-xl px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="font-mono-meta text-mono-meta font-semibold text-primary">ARCHITECTURE CANVAS</span>
              <span className="text-outline">-</span>
              <span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">Interactive node map</span>
            </div>
            <h2 className="font-headline-lg text-[28px] leading-9 text-on-surface lg:text-headline-lg">The AI System Map</h2>
          </div>
          <div className="flex items-center gap-space-xs font-mono-meta text-mono-meta text-on-surface-variant">
            <Icon name="touch_app" className="text-[16px] text-primary" />
            Click a node to read what it does
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-space-md lg:grid-cols-12">
          <div className="flex flex-col gap-space-lg rounded-lg bg-surface-container p-space-lg shadow-lg lg:col-span-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs font-mono-meta text-mono-meta text-outline">
                <span className="h-2 w-2 rounded-full bg-primary" />
                How the work connects
              </div>
              <span className="font-mono-meta text-mono-meta text-primary">Select a node</span>
            </div>
            <div className="grid grid-cols-2 gap-space-sm sm:grid-cols-3">
              {nodes.map((node, index) => {
                const on = node.id === active
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setActive(node.id)}
                    className={`flex flex-col gap-space-xs rounded p-space-md text-left transition-all hover:scale-[1.02] ${
                      on ? "bg-primary-container text-on-primary-container" : "bg-surface-container-high text-on-surface"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Icon name={node.icon} className={`text-[18px] ${on ? "" : "text-primary"}`} />
                      <span className={`font-mono-meta text-[10px] ${on ? "opacity-75" : "text-outline"}`}>
                        NODE // 0{index + 1}
                      </span>
                    </div>
                    <span className="font-headline-sm text-headline-sm font-semibold">{node.title}</span>
                    <span className={`font-mono-meta text-[11px] ${on ? "opacity-90" : "text-on-surface-variant"}`}>
                      {node.meta}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
          <aside className="flex flex-col gap-space-md rounded-lg bg-surface-container-high p-space-lg lg:col-span-4">
            <span className="font-mono-meta text-mono-meta text-outline uppercase">Inspector</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">{current.heading}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{current.desc}</p>
            <div className="rounded bg-surface-container p-space-sm">
              <span className="font-mono-meta text-[10px] text-outline uppercase">Stack</span>
              <p className="mt-1 font-mono-metric text-mono-metric text-primary">{current.stack}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
