import type { ReactNode } from "react"
import type { ProjectVisualId } from "../data/projects"

function Frame({
  id,
  accent,
  label,
  children,
}: {
  id: string
  accent: string
  label: string
  children: ReactNode
}) {
  return (
    <svg viewBox="0 0 640 420" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" role="img" aria-label={label}>
      <defs>
        <pattern id={`${id}-grid`} width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0 H0 V28" fill="none" stroke="#e8ecf4" strokeOpacity="0.045" />
        </pattern>
        <radialGradient id={`${id}-glow`} cx="46%" cy="58%" r="48%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.34" />
          <stop offset="70%" stopColor={accent} stopOpacity="0.05" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-fade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="78%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.28" />
        </linearGradient>
      </defs>
      <rect width="640" height="420" fill="#0c0e12" />
      <rect width="640" height="420" fill={`url(#${id}-grid)`} />
      <rect width="640" height="420" fill={`url(#${id}-glow)`} />
      {children}
      <rect width="640" height="420" fill={`url(#${id}-fade)`} />
    </svg>
  )
}

export function ProjectVisual({ id, accent }: { id: ProjectVisualId; accent: string }) {
  if (id === "agri") {
    return (
      <Frame id="agri" accent={accent} label="Field map with a crop at the center of a retrieval network">
        <g fill="none" stroke={accent} strokeOpacity="0.45">
          <ellipse cx="250" cy="250" rx="210" ry="62" />
          <ellipse cx="250" cy="250" rx="162" ry="46" />
          <ellipse cx="250" cy="250" rx="112" ry="31" />
          <ellipse cx="250" cy="250" rx="64" ry="17" />
        </g>
        <path d="M70 286 C150 250 190 300 270 268 C350 236 410 292 560 248" fill="none" stroke={accent} strokeOpacity="0.2" />
        <path d="M48 318 C140 286 220 340 320 300 C420 260 480 330 600 286" fill="none" stroke="#e8ecf4" strokeOpacity="0.08" />
        <g>
          <path d="M250 292 C246 230 242 188 250 142" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" />
          <path d="M250 230 C196 214 156 176 172 146 C206 168 232 198 250 230" fill={accent} fillOpacity="0.92" />
          <path d="M250 198 C308 178 352 138 332 108 C292 136 268 168 250 198" fill={accent} fillOpacity="0.72" />
          <path d="M250 164 C228 122 236 86 258 72 C262 118 258 144 250 164" fill={accent} />
        </g>
        {[
          [92, 118],
          [168, 78],
          [430, 96],
          [508, 150],
          [470, 210],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <line x1={x} y1={y} x2="250" y2="168" stroke="#e8ecf4" strokeOpacity="0.22" />
            <circle cx={x} cy={y} r="5" fill="#0c0e12" stroke={accent} strokeWidth="2" />
          </g>
        ))}
        <circle cx="250" cy="168" r="4" fill="#e8ecf4" />
        {[
          ["HI", 78],
          ["EN", 148],
          ["PA", 218],
        ].map(([lang, x]) => (
          <g key={lang}>
            <rect x={x} y="348" width="58" height="28" rx="14" fill="#0c0e12" stroke={accent} strokeOpacity="0.7" />
            <text x={Number(x) + 29} y="367" textAnchor="middle" fill="#e8ecf4" fontSize="12" fontFamily="Space Grotesk, sans-serif">
              {lang}
            </text>
          </g>
        ))}
        <text x="36" y="42" fill="#a3acbd" fontSize="13" letterSpacing="2.4" fontFamily="Space Grotesk, sans-serif">
          RAG · CROP ADVISORY
        </text>
      </Frame>
    )
  }

  if (id === "summary") {
    return (
      <Frame id="summary" accent={accent} label="A long document condensed into a short summary">
        <g>
          <rect x="48" y="68" width="250" height="286" rx="8" fill="#f3ecdf" />
          <path d="M250 68 H298 V116 H250 Z" fill="#e4d8c4" />
          <path d="M250 68 L298 116" fill="none" stroke="#cbbfa8" />
          <rect x="72" y="96" width="92" height="8" rx="2" fill="#1c1915" opacity="0.8" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map((line) => (
            <rect
              key={line}
              x="72"
              y={124 + line * 24}
              width={line % 4 === 3 ? 150 : 188}
              height="6"
              rx="2"
              fill={line === 2 || line === 3 ? accent : "#1c1915"}
              opacity={line === 2 || line === 3 ? 0.95 : 0.28}
            />
          ))}
        </g>
        <g>
          <circle cx="348" cy="210" r="22" fill="none" stroke={accent} strokeOpacity="0.8" />
          <path d="M338 210 H356" stroke={accent} strokeWidth="1.6" />
          <path d="M350 203 L358 210 L350 217" fill="none" stroke={accent} strokeWidth="1.6" />
        </g>
        <g>
          <rect x="402" y="128" width="186" height="164" rx="8" fill="#f7f1e7" />
          <rect x="424" y="152" width="70" height="8" rx="2" fill="#1c1915" opacity="0.85" />
          <rect x="424" y="180" width="142" height="7" rx="2" fill={accent} />
          <rect x="424" y="202" width="128" height="7" rx="2" fill="#1c1915" opacity="0.45" />
          <rect x="424" y="224" width="96" height="7" rx="2" fill="#1c1915" opacity="0.28" />
          <text x="424" y="268" fill="#6d6458" fontSize="11" letterSpacing="1.6" fontFamily="Space Grotesk, sans-serif">
            BART
          </text>
        </g>
        <text x="36" y="42" fill="#a3acbd" fontSize="13" letterSpacing="2.4" fontFamily="Space Grotesk, sans-serif">
          EXTRACTIVE + ABSTRACTIVE
        </text>
      </Frame>
    )
  }

  if (id === "meeting") {
    const bars = [28, 46, 70, 96, 78, 120, 88, 64, 140, 104, 72, 118, 86, 52, 36]
    return (
      <Frame id="meeting" accent={accent} label="Meeting audio resolved into a task list">
        {bars.map((height, index) => (
          <rect
            key={height + index}
            x={48 + index * 16}
            y={230 - height / 2}
            width="7"
            height={height}
            rx="3.5"
            fill={index > 9 ? accent : "#e8ecf4"}
            opacity={index > 9 ? 0.95 : 0.28}
          />
        ))}
        <text x="48" y="292" fill="#a3acbd" fontSize="12" letterSpacing="1.8" fontFamily="Space Grotesk, sans-serif">
          SPEECH
        </text>
        <g>
          <rect x="360" y="78" width="232" height="250" rx="12" fill="#121722" stroke="#e8ecf4" strokeOpacity="0.12" />
          <text x="384" y="114" fill={accent} fontSize="12" letterSpacing="2" fontFamily="Space Grotesk, sans-serif">
            TASKS
          </text>
          {[
            ["Priority", "High"],
            ["Owner", "Assigned"],
            ["Due", "This week"],
          ].map(([label, value], index) => (
            <g key={label} transform={`translate(384 ${146 + index * 52})`}>
              <circle cx="10" cy="10" r="10" fill="none" stroke={accent} />
              <path d="M5 10.5 L8.4 14 L15 6.5" fill="none" stroke={accent} strokeWidth="1.6" />
              <text x="32" y="8" fill="#a3acbd" fontSize="11" fontFamily="Inter, sans-serif">
                {label}
              </text>
              <text x="32" y="26" fill="#e8ecf4" fontSize="15" fontFamily="Space Grotesk, sans-serif">
                {value}
              </text>
            </g>
          ))}
        </g>
        <text x="36" y="42" fill="#a3acbd" fontSize="13" letterSpacing="2.4" fontFamily="Space Grotesk, sans-serif">
          OFFLINE PIPELINE
        </text>
      </Frame>
    )
  }

  return (
    <Frame id="ocr" accent={accent} label="A parcel label scanned barcode first">
      <g transform="translate(118 70) rotate(-6 200 140)">
        <rect width="400" height="250" rx="10" fill="#f4f0e8" />
        <rect x="28" y="28" width="168" height="78" fill="#16141c" />
        {[8, 16, 22, 34, 40, 52, 60, 74, 82, 96, 108, 122, 136, 148].map((bar, index) => (
          <rect key={bar} x={40 + bar} y="40" width={index % 3 === 0 ? 8 : 3} height="54" fill="#f4f0e8" />
        ))}
        <rect x="216" y="36" width="150" height="10" rx="2" fill="#16141c" opacity="0.8" />
        <rect x="216" y="58" width="120" height="8" rx="2" fill="#16141c" opacity="0.35" />
        <rect x="216" y="78" width="96" height="8" rx="2" fill="#16141c" opacity="0.2" />
        <rect x="28" y="132" width="220" height="8" rx="2" fill="#16141c" opacity="0.55" />
        <rect x="28" y="154" width="180" height="8" rx="2" fill="#16141c" opacity="0.28" />
        <rect x="28" y="186" width="110" height="28" rx="4" fill="none" stroke="#16141c" strokeOpacity="0.35" />
        <text x="40" y="205" fill="#16141c" fontSize="12" fontFamily="Space Grotesk, sans-serif">
          PARCEL
        </text>
      </g>
      <path d="M150 118 H190 M430 96 H470 M168 330 H208 M448 308 H488" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      <rect x="168" y="188" width="300" height="3" fill={accent} opacity="0.85" />
      <text x="36" y="42" fill="#a3acbd" fontSize="13" letterSpacing="2.4" fontFamily="Space Grotesk, sans-serif">
        BARCODE FIRST · OCR FALLBACK
      </text>
    </Frame>
  )
}
