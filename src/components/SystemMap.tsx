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
    <div className="relative h-[380px] w-full overflow-hidden sm:h-[440px]" role="group" aria-label="AI journey map">
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
              className="flex items-center gap-2 rounded-full border border-line bg-ink/80 px-3 py-1.5 backdrop-blur-sm motion-safe:animate-[node-float_5.5s_ease-in-out_infinite]"
              style={{ animationDelay: `${index * 0.35}s` }}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  on ? "bg-blue shadow-[0_0_12px_rgba(142,182,255,0.95)]" : "bg-mist/35"
                }`}
              />
              <span className={`font-display text-xs tracking-wide whitespace-nowrap ${on ? "text-ivory" : "text-mist"}`}>
                {node.label}
              </span>
            </span>
          </a>
        )
      })}
    </div>
  )
}
