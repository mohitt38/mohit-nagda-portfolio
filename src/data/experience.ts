export type ExperienceItem = {
  id: string
  role: string
  org: string
  place: string
  dates: string
  current?: boolean
  summary: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: "toba",
    role: "Python Developer Intern",
    org: "Toba Tech Solutions",
    place: "Udaipur",
    dates: "July 2026 - Present",
    current: true,
    summary:
      "Working on the Python backend for ContentX, and on AI generation workflows that move from a script to finished content.",
    points: [
      "Developing the Python backend and contributing to feature implementation.",
      "Worked on AI-based image generation features.",
      "Worked on generation workflows from script input through to content output.",
      "Collaborating with the team to improve and maintain those content-generation workflows.",
    ],
  },
  {
    id: "tap",
    role: "AI Research Intern",
    org: "Tech Adaptive Pandit Pty Ltd",
    place: "Australia · Remote",
    dates: "December 2025 - June 2026",
    summary:
      "Applied LLM research for clinical healthcare systems, centered on SOAP note generation and diagnostic reasoning.",
    points: [
      "Studied SOAP-style clinical documentation and the accuracy of diagnostic reasoning.",
      "Authored the paper “Comparative Evaluation of LLM Models for Clinically Realistic SOAP Documentation”.",
      "Co-authored the book chapter “Agentic AI-Based Clinical Automation Framework for Healthcare Systems”.",
      "Gained practice in research methodology, academic writing, and deployment considerations for safety-critical healthcare settings.",
    ],
  },
  {
    id: "grass",
    role: "AI/ML Trainee",
    org: "Grass Solutions Pvt. Ltd.",
    place: "Udaipur",
    dates: "June 2025 - July 2025",
    summary:
      "Built end-to-end machine learning pipelines across business use cases, from raw data through evaluation.",
    points: [
      "Handled data ingestion, feature engineering, model training, and evaluation.",
      "Applied scikit-learn, Pandas, and NumPy on supervised and unsupervised models.",
      "Explored neural architectures with TensorFlow and Keras for prediction tasks.",
    ],
  },
]
