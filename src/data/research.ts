export type ResearchItem = {
  id: string
  kind: string
  title: string
  area: string
  role: string
  status: string
  summary: string
}

export const research: ResearchItem[] = [
  {
    id: "soap",
    kind: "Research paper",
    title: "Comparative Evaluation of LLM Models for Clinically Realistic SOAP Documentation",
    area: "Healthcare AI · Clinical NLP · LLMs",
    role: "Author",
    status: "Camera-ready submission",
    summary:
      "A comparative study of language models for clinically realistic SOAP documentation, written during applied research on clinical healthcare systems. The manuscript is in the camera-ready submission phase.",
  },
  {
    id: "agentic",
    kind: "Book chapter",
    title: "Agentic AI-Based Clinical Automation Framework for Healthcare Systems",
    area: "Agentic AI · Clinical workflows · Healthcare systems",
    role: "Co-author",
    status: "Under peer review",
    summary:
      "A chapter on an agentic framework for clinical automation, under peer review with a major technical publisher.",
  },
]
