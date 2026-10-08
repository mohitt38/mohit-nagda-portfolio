export type SkillGroup = {
  id: string
  label: string
  note: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: "aiml",
    label: "AI / ML",
    note: "Models, language, and the practice of training and evaluating them.",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "RAG",
      "Large Language Models",
      "scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
    ],
  },
  {
    id: "genai",
    label: "Generative AI",
    note: "Tools I have used to build grounded generation workflows.",
    items: [
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "Hugging Face Transformers",
      "Prompt templates",
      "Gemini API",
    ],
  },
  {
    id: "backend",
    label: "Backend & apps",
    note: "Where the models meet an interface or a service.",
    items: ["Python", "Flask", "Streamlit", "Docker (basic)"],
  },
  {
    id: "vision",
    label: "Computer vision",
    note: "Image pipelines, mostly around documents and labels.",
    items: ["OpenCV", "EasyOCR", "Tesseract OCR"],
  },
  {
    id: "data",
    label: "Data & programming",
    note: "Languages and the libraries I use to shape data.",
    items: ["Python", "C", "C++", "NumPy", "Pandas", "Matplotlib", "NLTK", "spaCy"],
  },
  {
    id: "tools",
    label: "Tools & foundations",
    note: "Day-to-day practice and core computer science.",
    items: [
      "GitHub",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
    ],
  },
  {
    id: "research",
    label: "Research",
    note: "Areas I have actually worked in, not a catalogue of interests.",
    items: [
      "Clinical NLP",
      "SOAP documentation",
      "Diagnostic reasoning",
      "Agentic clinical workflows",
      "Academic writing",
    ],
  },
]
