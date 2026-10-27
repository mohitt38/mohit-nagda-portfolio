import { projectLinks } from "../config/links"

export type FeaturedRepo = {
  id: string
  name: string
  description: string
  language: string
  languageColor: string
  href: string
}

/** Curated public repos - descriptions from the portfolio (GitHub repo fields are empty). */
export const featuredRepos: FeaturedRepo[] = [
  {
    id: "agrinova",
    name: "AgriNova-chatbot",
    description: "Farming advice chatbot - multilingual RAG with LangChain and Gemini.",
    language: "Python",
    languageColor: "#3572A5",
    href: projectLinks.agrinova,
  },
  {
    id: "summarizer",
    name: "Text-Summarizer",
    description: "Long reports to short summaries - BART and a Flask API.",
    language: "Python",
    languageColor: "#3572A5",
    href: projectLinks.summarizer,
  },
  {
    id: "meeting",
    name: "Meeting-task-management",
    description: "Meeting audio to owners, deadlines, and priorities - offline.",
    language: "Python",
    languageColor: "#3572A5",
    href: projectLinks.meeting,
  },
  {
    id: "ocr",
    name: "OCR-text-extractor",
    description: "Parcel label photos to readable text - barcode-first OCR.",
    language: "Python",
    languageColor: "#3572A5",
    href: projectLinks.ocr,
  },
]
