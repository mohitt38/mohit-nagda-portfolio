import { projectLinks } from "../config/links"

export type FeaturedRepo = {
  id: string
  name: string
  description: string
  language: string
  languageColor: string
  href: string
}

/** Curated public repos — descriptions from the portfolio (GitHub repo fields are empty). */
export const featuredRepos: FeaturedRepo[] = [
  {
    id: "agrinova",
    name: "AgriNova-chatbot",
    description: "Multilingual crop advisory chatbot with RAG, LangChain, and Gemini.",
    language: "Python",
    languageColor: "#3572A5",
    href: projectLinks.agrinova,
  },
  {
    id: "summarizer",
    name: "Text-Summarizer",
    description: "Extractive and abstractive summarization with BART and a Flask API.",
    language: "Python",
    languageColor: "#3572A5",
    href: projectLinks.summarizer,
  },
  {
    id: "meeting",
    name: "Meeting-task-management",
    description: "Offline pipeline from meeting audio to scored, assigned tasks.",
    language: "Python",
    languageColor: "#3572A5",
    href: projectLinks.meeting,
  },
  {
    id: "ocr",
    name: "OCR-text-extractor",
    description: "Barcode-first parcel label OCR with OpenCV and Tesseract.",
    language: "Python",
    languageColor: "#3572A5",
    href: projectLinks.ocr,
  },
]
