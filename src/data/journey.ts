export type JourneyNode = {
  id: string
  label: string
  short: string
  href: string
  x: number
  y: number
}

export const journeyNodes: JourneyNode[] = [
  { id: "aiml", label: "AI / ML", short: "AI / ML", href: "#about", x: 30, y: 22 },
  { id: "nlp", label: "NLP", short: "NLP", href: "#projects", x: 68, y: 18 },
  { id: "genai", label: "Generative AI", short: "GenAI", href: "#projects", x: 72, y: 42 },
  { id: "llms", label: "LLMs", short: "LLMs", href: "#research", x: 46, y: 36 },
  { id: "rag", label: "RAG", short: "RAG", href: "#projects", x: 28, y: 50 },
  { id: "backend", label: "Backend", short: "Backend", href: "#experience", x: 70, y: 62 },
  { id: "research", label: "Research", short: "Research", href: "#research", x: 30, y: 76 },
  { id: "projects", label: "Projects", short: "Projects", href: "#projects", x: 58, y: 80 },
]

export const journeyEdges: [string, string][] = [
  ["aiml", "llms"],
  ["aiml", "rag"],
  ["nlp", "genai"],
  ["nlp", "llms"],
  ["llms", "genai"],
  ["llms", "rag"],
  ["rag", "backend"],
  ["genai", "backend"],
  ["llms", "research"],
  ["research", "projects"],
  ["backend", "projects"],
  ["aiml", "nlp"],
]

export const sectionGlow: Record<string, string[]> = {
  home: ["aiml"],
  about: ["aiml", "genai", "llms"],
  experience: ["aiml", "backend", "research"],
  projects: ["projects", "nlp", "rag", "genai", "llms"],
  research: ["research", "llms"],
  skills: ["aiml", "genai", "llms", "rag", "nlp", "backend", "research", "projects"],
  education: ["aiml"],
  achievements: ["research"],
  contact: ["aiml", "genai", "llms", "rag", "nlp", "backend", "research", "projects"],
}
