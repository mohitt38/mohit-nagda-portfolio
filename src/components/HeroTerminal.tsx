import { useEffect, useState } from "react"

const sequence = [
  {
    cmd: "python -m agrinova.serve --rag-multilingual",
    out: "[agri-rag] Farming advisor ready. Locales: Hindi, English, Punjabi.",
  },
  {
    cmd: "python summarize.py --mode abstractive",
    out: "[summarizer] BART ready. Long documents in, short summaries out.",
  },
  {
    cmd: "python meeting_tasks.py --offline",
    out: "[meeting] Audio in. Owners, deadlines, and priorities out. No cloud API.",
  },
  {
    cmd: "cat /profile.md | grep -E 'core_stack|target'",
    out: "core_stack: Python, LangChain, RAG, Streamlit\ntarget: AI Engineer",
  },
]

const chips: Record<string, { cmd: string; out: string }> = {
  "run agrinova": sequence[0],
  "summarize": sequence[1],
  "meeting": sequence[2],
  clear: { cmd: "clear", out: "[terminal session reset] Ready for the next command." },
}

export function HeroTerminal() {
  const [cmd, setCmd] = useState("")
  const [output, setOutput] = useState(sequence[0].out)
  const [status, setStatus] = useState("INFERENCE: TYPING COMMAND")
  const [active, setActive] = useState("")

  useEffect(() => {
    let cancelled = false
    let timer = 0
    let index = 0

    const type = (text: string, done: () => void, at = 0) => {
      if (cancelled) return
      setCmd(text.slice(0, at))
      if (at <= text.length) {
        timer = window.setTimeout(() => type(text, done, at + 1), 28)
      } else {
        done()
      }
    }

    const run = () => {
      const entry = sequence[index % sequence.length]
      setStatus("INFERENCE: TYPING COMMAND")
      setActive("")
      type(entry.cmd, () => {
        if (cancelled) return
        setOutput(entry.out)
        setStatus("STDOUT: EXECUTION COMPLETE")
        timer = window.setTimeout(() => {
          index += 1
          setCmd("")
          timer = window.setTimeout(run, 400)
        }, 2600)
      })
    }

    const start = window.setTimeout(run, 400)
    return () => {
      cancelled = true
      window.clearTimeout(start)
      window.clearTimeout(timer)
    }
  }, [])

  function runChip(key: string) {
    const payload = chips[key]
    setActive(key)
    setCmd(payload.cmd)
    setOutput(payload.out)
    setStatus("STDOUT: USER CALL SUCCESS")
  }

  return (
    <div className="flex flex-col gap-space-xs rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-space-sm font-mono-meta shadow-inner">
      <div className="flex items-center justify-between border-b border-surface-container-high/60 px-1 pb-1.5">
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
        <span className="font-semibold text-primary select-none">$</span>
        <div className="flex items-center font-mono-meta whitespace-pre">
          <span>{cmd}</span>
          <span className="cursor-blink ml-0.5 inline-block h-4 w-2 bg-primary align-middle" />
        </div>
      </div>
      <div className="flex min-h-[38px] items-center border-l-2 border-primary/50 bg-surface-container/60 px-1 py-1.5 font-mono-meta text-[11px] text-primary">
        <span className="leading-relaxed whitespace-pre-line">{output}</span>
      </div>
      <div className="flex flex-wrap items-center gap-1.5 px-1 pt-0.5 text-[10px] text-outline">
        <span className="text-[9px] tracking-wider uppercase select-none">Quick Execute:</span>
        {Object.keys(chips).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => runChip(key)}
            className={`rounded border px-2 py-0.5 transition-colors ${
              active === key
                ? "border-primary bg-surface-bright text-primary"
                : "border-transparent bg-surface-container-high text-on-surface hover:bg-surface-bright"
            }`}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  )
}
