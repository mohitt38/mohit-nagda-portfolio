import { useState } from "react"
import { Icon } from "../components/Icon"
import { skillGroups } from "../data/skills"

const filters = [
  { id: "all", label: "All tools" },
  { id: "genai", label: "Generative AI" },
  { id: "aiml", label: "AI / ML" },
  { id: "backend", label: "Backend" },
  { id: "vision", label: "Vision / OCR" },
  { id: "research", label: "Research" },
] as const

const icons: Record<string, string> = {
  genai: "neurology",
  aiml: "psychology",
  backend: "terminal",
  vision: "document_scanner",
  data: "database",
  tools: "construction",
  research: "menu_book",
}

export function Skills() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all")
  const visible = skillGroups.filter((group) => filter === "all" || group.id === filter)

  return (
    <section id="skills" className="w-full py-space-xl lg:py-margin">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-space-xl px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col justify-between gap-space-md lg:flex-row lg:items-end">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="font-mono-meta text-mono-meta font-semibold text-primary">05 // TECHNICAL MATRIX</span>
              <span className="text-outline">-</span>
              <span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">System capabilities</span>
            </div>
            <h2 className="font-headline-lg text-[28px] leading-9 text-on-surface lg:text-headline-lg">The tools behind the work.</h2>
          </div>
          <div className="flex flex-wrap items-center gap-space-xs font-mono-meta text-mono-meta">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`rounded px-space-md py-1.5 transition-all ${
                  filter === item.id
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-high text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-3">
          {visible.map((group) => (
            <article key={group.id} className="flex flex-col gap-space-md rounded-lg bg-surface-container-low p-space-lg shadow-sm">
              <div className="flex items-center justify-between pb-space-xs">
                <div className="flex items-center gap-space-xs">
                  <Icon name={icons[group.id] ?? "memory"} className="text-[18px] text-primary" />
                  <span className="font-headline-sm text-headline-sm text-on-surface">{group.label}</span>
                </div>
                <span className="font-mono-meta text-mono-meta text-outline">{String(group.items.length).padStart(2, "0")} items</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{group.note}</p>
              <div className="flex flex-wrap gap-space-xs font-mono-meta text-[12px]">
                {group.items.map((item) => (
                  <span key={item} className="rounded bg-surface-container px-2.5 py-1 text-on-surface">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
