import type { ProjectVisualId } from "../data/projects"

export function ProjectVisual({ id, accent }: { id: ProjectVisualId; accent: string }) {
  if (id === "agri") {
    return (
      <svg viewBox="0 0 360 240" className="h-full w-full" role="img" aria-label="Abstract field and retrieval nodes">
        <rect width="360" height="240" fill="#101610" />
        <g fill="none" stroke={accent} strokeOpacity="0.55">
          <ellipse cx="180" cy="150" rx="120" ry="36" />
          <ellipse cx="180" cy="150" rx="82" ry="24" />
          <ellipse cx="180" cy="150" rx="44" ry="12" />
        </g>
        <path d="M180 150 C176 110 168 86 180 58 C192 86 184 110 180 150" fill={accent} fillOpacity="0.85" />
        <path d="M180 118 C150 108 138 86 146 70" fill="none" stroke={accent} strokeWidth="2" />
        <circle cx="78" cy="64" r="4" fill="#e8ecf4" />
        <circle cx="286" cy="72" r="4" fill="#8eb6ff" />
        <circle cx="250" cy="46" r="3" fill={accent} />
        <path d="M78 64 L180 96 L286 72" fill="none" stroke="#e8ecf4" strokeOpacity="0.35" />
        <text x="24" y="28" fill="#a3acbd" fontSize="11" fontFamily="Space Grotesk, sans-serif">
          RAG · HI · EN · PA
        </text>
      </svg>
    )
  }

  if (id === "summary") {
    return (
      <svg viewBox="0 0 360 240" className="h-full w-full" role="img" aria-label="A long document condensed into a short one">
        <rect width="360" height="240" fill="#16130f" />
        <rect x="36" y="36" width="150" height="168" rx="4" fill="#efe6d6" />
        {[0, 1, 2, 3, 4, 5, 6].map((line) => (
          <rect key={line} x="50" y={54 + line * 18} width={line % 3 === 0 ? 90 : 112} height="4" fill="#1a1814" opacity="0.35" />
        ))}
        <path d="M198 120 H236" stroke={accent} strokeWidth="1.5" />
        <path d="M228 112 L240 120 L228 128" fill="none" stroke={accent} strokeWidth="1.5" />
        <rect x="248" y="78" width="80" height="84" rx="4" fill="#efe6d6" />
        <rect x="260" y="96" width="56" height="4" fill="#1a1814" opacity="0.55" />
        <rect x="260" y="112" width="48" height="4" fill="#1a1814" opacity="0.55" />
        <rect x="260" y="128" width="40" height="4" fill="#1a1814" opacity="0.55" />
        <text x="24" y="28" fill="#a3acbd" fontSize="11" fontFamily="Space Grotesk, sans-serif">
          EXTRACTIVE + ABSTRACTIVE
        </text>
      </svg>
    )
  }

  if (id === "meeting") {
    return (
      <svg viewBox="0 0 360 240" className="h-full w-full" role="img" aria-label="Audio waveform becoming a task list">
        <rect width="360" height="240" fill="#0e131c" />
        {Array.from({ length: 28 }, (_, index) => {
          const height = 18 + ((index * 37) % 70)
          return (
            <rect
              key={index}
              x={28 + index * 8}
              y={120 - height / 2}
              width="4"
              height={height}
              rx="1"
              fill={index > 16 ? "#8eb6ff" : "#e8ecf4"}
              opacity={index > 16 ? 0.9 : 0.35}
            />
          )
        })}
        <g transform="translate(248 70)">
          {["Priority", "Owner", "Due"].map((label, index) => (
            <g key={label} transform={`translate(0 ${index * 28})`}>
              <rect width="12" height="12" rx="2" fill="none" stroke={accent} />
              <path d="M3 6.5 L5.2 8.6 L9 4" fill="none" stroke={accent} strokeWidth="1.2" />
              <text x="18" y="10" fill="#e8ecf4" fontSize="11" fontFamily="Inter, sans-serif">
                {label}
              </text>
            </g>
          ))}
        </g>
        <text x="24" y="28" fill="#a3acbd" fontSize="11" fontFamily="Space Grotesk, sans-serif">
          OFFLINE · SPEECH → TASKS
        </text>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 360 240" className="h-full w-full" role="img" aria-label="A label being scanned">
      <rect width="360" height="240" fill="#12101a" />
      <rect x="70" y="48" width="220" height="150" rx="6" fill="none" stroke={accent} strokeOpacity="0.8" />
      <path d="M70 48 H94 M266 48 H290 M70 198 H94 M266 198 H290" stroke={accent} strokeWidth="3" />
      <rect x="96" y="78" width="168" height="46" fill="#e8ecf4" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((bar) => (
        <rect key={bar} x={104 + bar * 13} y="86" width={bar % 3 === 0 ? 7 : 3} height="30" fill="#12101a" />
      ))}
      <rect x="96" y="140" width="120" height="6" fill="#e8ecf4" opacity="0.7" />
      <rect x="96" y="156" width="86" height="6" fill="#e8ecf4" opacity="0.4" />
      <rect x="78" y="118" width="204" height="2" fill={accent} opacity="0.9" />
      <text x="24" y="28" fill="#a3acbd" fontSize="11" fontFamily="Space Grotesk, sans-serif">
        BARCODE FIRST · OCR FALLBACK
      </text>
    </svg>
  )
}
