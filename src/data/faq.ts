export type FaqItem = {
  question: string
  answer: string
}

/** Keep in sync with FAQPage JSON-LD in index.html */
export const faq: FaqItem[] = [
  {
    question: "Who is Mohit Nagda?",
    answer:
      "Mohit Nagda is an AI Engineer and final-year B.Tech Computer Science student (AI specialization) in Udaipur, India. He builds Generative AI, RAG, NLP, and Python tools. He completed a Full Stack Internship at Toba Tech Solutions from July 2026 to November 2026.",
  },
  {
    question: "What does Mohit Nagda build?",
    answer:
      "Practical AI tools: multilingual farming chatbots (AgriNova), document summarizers, meeting-to-task helpers, and parcel-label OCR, plus Python backends for AI content workflows.",
  },
  {
    question: "Is Mohit Nagda open to work or collaboration?",
    answer:
      "Yes. Available for AI and software roles, freelance projects, research collaboration, and internship conversations. Based in Udaipur, and open to remote work or relocation.",
  },
  {
    question: "Where is Mohit Nagda based?",
    answer: "Based in Udaipur, Rajasthan, India. Open to remote work or relocation.",
  },
  {
    question: "Where can I find Mohit Nagda online?",
    answer:
      "Portfolio mohit-nagda.vercel.app, GitHub github.com/mohitt38, LinkedIn linkedin.com/in/mohitnagda.",
  },
]
