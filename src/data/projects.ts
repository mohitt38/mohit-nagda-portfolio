import { projectLinks } from "../config/links"

export type ProjectVisualId = "agri" | "summary" | "meeting" | "ocr"

export type Project = {
  id: string
  name: string
  category: string
  problem: string
  summary: string
  built: string[]
  stack: string[]
  github: string
  visual: ProjectVisualId
  accent: string
}

export const projects: Project[] = [
  {
    id: "agrinova",
    name: "AgriNova",
    category: "Agriculture · Generative AI",
    problem:
      "Farmers need crop advice that stays tied to real knowledge, in the language they actually use.",
    summary:
      "An agricultural advisory chatbot that uses retrieval-augmented generation to answer in Hindi, English, and Punjabi.",
    built: [
      "Architected a RAG flow for real-time, context-aware crop advisory.",
      "Used LangChain prompt templates for multilingual responses.",
      "Grounded model outputs in structured external knowledge through vector retrieval.",
      "Built an interactive Streamlit interface.",
    ],
    stack: ["LLM", "RAG", "LangChain", "Gemini API", "Streamlit"],
    github: projectLinks.agrinova,
    visual: "agri",
    accent: "#9dC7a8",
  },
  {
    id: "summarizer",
    name: "Text Summarizer",
    category: "NLP · Generative AI",
    problem: "Long documents take too long to read when only the substance is needed.",
    summary:
      "A dual-mode extractive and abstractive summarizer. Hugging Face BART handles the abstractive path, exposed through a Flask API. It reduced document reading time by about 70%.",
    built: [
      "Built extractive and abstractive summarization in one application.",
      "Used Hugging Face BART for abstractive summaries.",
      "Processed text with NLTK and spaCy.",
      "Served the pipeline through a Flask-based API.",
    ],
    stack: ["BART", "Hugging Face", "Flask", "NLTK", "spaCy"],
    github: projectLinks.summarizer,
    visual: "summary",
    accent: "#e2c79a",
  },
  {
    id: "meeting",
    name: "Meeting Task Management",
    category: "NLP · Speech",
    problem: "Action items disappear inside unstructured meeting audio.",
    summary:
      "An offline pipeline that turns meeting audio into structured tasks, then scores and assigns them.",
    built: [
      "Converted speech to text and extracted tasks with NLP.",
      "Kept the pipeline fully offline.",
      "Added priority scoring so tasks can be ranked by urgency.",
      "Added assignment logic for relevant stakeholders, with a Streamlit UI.",
    ],
    stack: ["Python", "NLP", "Speech Processing", "Streamlit"],
    github: projectLinks.meeting,
    visual: "meeting",
    accent: "#8eb6ff",
  },
  {
    id: "ocr",
    name: "OCR Text Extractor",
    category: "Computer Vision · OCR",
    problem:
      "Parcel and shipping labels are often photographed in poor light, at an angle, or with damaged print.",
    summary:
      "A barcode-first OCR pipeline for parcel and label images, with OCR as a fallback when the barcode path is not enough.",
    built: [
      "Extracted structured text from parcel label images in low-quality conditions.",
      "Designed barcode-first detection so standard shipping labels stay fast.",
      "Used OCR as a fallback for edge cases.",
      "Wrapped the pipeline in a Streamlit interface.",
    ],
    stack: ["OpenCV", "Tesseract", "Python", "Streamlit"],
    github: projectLinks.ocr,
    visual: "ocr",
    accent: "#c3b4ff",
  },
]
