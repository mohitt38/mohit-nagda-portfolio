export type Credential = {
  id: string
  kind: string
  title: string
  detail: string
  status?: string
}

export const credentials: Credential[] = [
  {
    id: "paper",
    kind: "Research paper",
    title: "Comparative Evaluation of LLM Models for Clinically Realistic SOAP Documentation",
    detail: "Authored during the AI research internship.",
    status: "Camera-ready submission",
  },
  {
    id: "chapter",
    kind: "Book chapter",
    title: "Agentic AI-Based Clinical Automation Framework for Healthcare Systems",
    detail: "Co-authored. Under peer review with a major technical publisher.",
    status: "Under peer review",
  },
  {
    id: "ibm-agent",
    kind: "Certification",
    title: "Learner to Builder: AI Agent Architect — IBM",
    detail: "Hands-on training in designing multi-agent AI systems and architectures. 2025.",
  },
  {
    id: "prompt",
    kind: "Certification",
    title: "Prompt Engineering — IBM SkillsBuild / CSRBOX",
    detail: "Completed 2024–25.",
  },
  {
    id: "bootcamp",
    kind: "Bootcamp",
    title: "Data Science, ML, Deep Learning & NLP — Krish Naik",
    detail: "End-to-end training across the ML, deep learning, and NLP stack, with project work. 2024.",
  },
  {
    id: "rhcsa",
    kind: "Training",
    title: "Red Hat Certified System Administrator",
    detail: "Training completed. The certification exam is still pending.",
    status: "Exam pending",
  },
]

export const volunteer = {
  role: "Technical volunteer",
  event: "The 4th State — Plasma Exhibition",
  org: "Institute of Plasma Research (IPR)",
  detail:
    "Supported event coordination and public STEM outreach at the exhibition.",
} as const
