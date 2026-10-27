import { projectLinks } from "../config/links"

export type ProjectVisualId = "agri" | "summary" | "meeting" | "ocr"

export type Project = {
  id: string
  name: string
  /** Plain-language subtitle for non-tech readers */
  plainName: string
  category: string
  /** One-line outcome: before -> after */
  outcome: string
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
    plainName: "Farming advice chatbot",
    category: "Agriculture · Generative AI",
    outcome: "Crop questions in Hindi, English, or Punjabi → grounded answers farmers can use",
    problem:
      "Farmers need crop advice that stays accurate and available in the language they actually use.",
    summary:
      "A farming chatbot that answers questions in Hindi, English, and Punjabi. It looks up real knowledge first so answers stay useful - not just guessed.",
    built: [
      "Built a retrieval flow so advice stays tied to real crop knowledge.",
      "Supported multilingual replies with careful prompt design.",
      "Connected model answers to stored knowledge instead of free guessing.",
      "Shipped a simple chat interface people can try.",
    ],
    stack: ["LLM", "RAG", "LangChain", "Gemini API", "Streamlit"],
    github: projectLinks.agrinova,
    visual: "agri",
    accent: "#9dc7a8",
  },
  {
    id: "summarizer",
    name: "Text Summarizer",
    plainName: "Long reports → short summaries",
    category: "NLP · Generative AI",
    outcome: "Long documents → clear short summaries in seconds",
    problem: "Long documents take too long to read when only the substance is needed.",
    summary:
      "Paste a long article or report and get a short, readable summary. Built to cut reading time by about 70% on long text.",
    built: [
      "Combined quick highlights with fuller AI summaries in one tool.",
      "Used a strong summarization model for clear short text.",
      "Cleaned and prepared text before summarization.",
      "Exposed it through a simple web API.",
    ],
    stack: ["BART", "Hugging Face", "Flask", "NLTK", "spaCy"],
    github: projectLinks.summarizer,
    visual: "summary",
    accent: "#e2c79a",
  },
  {
    id: "meeting",
    name: "Meeting Task Management",
    plainName: "Meeting notes → action list",
    category: "NLP · Speech",
    outcome: "Meeting audio → owners, deadlines, and priorities",
    problem: "Action items disappear inside unstructured meeting audio.",
    summary:
      "Upload meeting audio and get a clear task list - who should do what, by when, and what matters most.",
    built: [
      "Turned speech into text, then pulled out action items.",
      "Kept the whole flow offline for private meetings.",
      "Ranked tasks by urgency so the important ones surface first.",
      "Added simple assignment logic and a clean results screen.",
    ],
    stack: ["Python", "NLP", "Speech Processing", "Streamlit"],
    github: projectLinks.meeting,
    visual: "meeting",
    accent: "#8eb6ff",
  },
  {
    id: "ocr",
    name: "OCR Text Extractor",
    plainName: "Parcel labels → readable text",
    category: "Computer Vision · OCR",
    outcome: "Messy label photos → barcode / waybill text you can use",
    problem:
      "Parcel and shipping labels are often photographed in poor light, at an angle, or with damaged print.",
    summary:
      "Point it at a parcel label photo and pull out the important text. It tries the barcode first, then falls back to OCR when needed.",
    built: [
      "Pulled structured text from hard-to-read label photos.",
      "Used barcode reading first so common shipping labels stay fast.",
      "Fell back to OCR when the barcode path was not enough.",
      "Wrapped it in a simple upload-and-read interface.",
    ],
    stack: ["OpenCV", "Tesseract", "Python", "Streamlit"],
    github: projectLinks.ocr,
    visual: "ocr",
    accent: "#c3b4ff",
  },
]
