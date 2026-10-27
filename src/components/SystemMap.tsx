import { journeyEdges, journeyNodes, sectionGlow } from "../data/journey"

type SystemMapProps = {
  activeSection: string
  variant?: "hero" | "rail"
}

export function SystemMap({ activeSection, variant = "hero" }: SystemMapProps) {
  const lit = new Set(sectionGlow[activeSection] ?? ["aiml"])
  const byId = new Map(journeyNodes.map((node) => [node.id, node]))

  if (variant === "rail") {
    return (
      <nav className="hidden border-t border-line xl:block" aria-label="Journey map">
        <ol className="shell flex items-center gap-1 py-2">
          {journeyNodes.map((node, index) => {
            const on = lit.has(node.id)
            return (
              <li key={node.id} className="flex min-w-0 flex-1 items-center gap-1">
                <a
                  href={node.href}
                  className={`truncate font-display text-[0.68rem] tracking-wide transition-colors ${
                    on ? "text-ivory" : "text-mist/55"
                  }`}
                >
                  <span
                    className={`mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle ${
                      on ? "bg-blue shadow-[0_0_10px_rgba(142,182,255,0.8)]" : "bg-mist/30"
                    }`}
                  />
                  {node.short}
                </a>
                {index < journeyNodes.length - 1 ? (
                  <span className={`h-px flex-1 ${on ? "bg-blue/50" : "bg-line"}`} />
                ) : null}
              </li>
            )
          })}
        </ol>
      </nav>
    )
  }

  return (
    <div
      className="relative h-[200px] w-full overflow-hidden rounded-sm border border-line/60 bg-ink/40 sm:h-[340px] sm:border-0 sm:bg-transparent lg:h-[420px]"
      role="group"
      aria-label="AI journey map"
    >
      <div className="absolute inset-4 sm:inset-3 lg:inset-2">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {journeyEdges.map(([from, to], index) => {
            const a = byId.get(from)
            const b = byId.get(to)
            if (!a || !b) return null
            const active = lit.has(from) && lit.has(to)
            const partial = lit.has(from) || lit.has(to)
            const slot = 1.6
            return (
              <g key={`${from}-${to}`}>
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke={active ? "var(--blue)" : partial ? "color-mix(in oklab, var(--blue) 35%, transparent)" : "var(--line)"}
                  strokeWidth={active ? 0.45 : 0.28}
                  vectorEffect="non-scaling-stroke"
                />
                <line
                  className="signal-trace"
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  pathLength={1}
                  stroke="var(--blue)"
                  strokeWidth={0.7}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  style={{
                    animationDelay: `${index * slot}s`,
                    animationDuration: `${journeyEdges.length * slot}s`,
                  }}
                />
              </g>
            )
          })}
        </svg>
        {journeyNodes.map((node, index) => {
          const on = lit.has(node.id)
          return (
            <a
              key={node.id}
              href={node.href}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <span
                className="flex items-center gap-1.5 rounded-full border border-line bg-ink/90 px-2 py-1 backdrop-blur-sm sm:gap-2 sm:px-3 sm:py-1.5 motion-safe:animate-[node-float_5.5s_ease-in-out_infinite]"
                style={{ animationDelay: `${index * 0.35}s` }}
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full sm:h-2 sm:w-2 ${
                    on ? "bg-blue shadow-[0_0_12px_rgba(142,182,255,0.95)]" : "bg-mist/35"
                  }`}
                />
                <span
                  className={`font-display text-[0.62rem] tracking-wide whitespace-nowrap sm:text-xs ${
                    on ? "text-ivory" : "text-mist"
                  }`}
                >
                  <span className="sm:hidden">{node.short}</span>
                  <span className="hidden sm:inline">{node.label}</span>
                </span>
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
