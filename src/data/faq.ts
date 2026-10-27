export type FaqItem = {
  question: string
  answer: string
}

/** Keep in sync with FAQPage JSON-LD in index.html */
export const faq: FaqItem[] = [
  {
    question: "Who is Mohit Nagda?",
    answer:
      "Mohit Nagda is an AI Engineer and final-year B.Tech Computer Science student (AI specialization) in Udaipur, India. He builds Generative AI, RAG, NLP, and Python tools and works as a Python Developer Intern at Toba Tech Solutions.",
  },
  {
    question: "What does Mohit Nagda build?",
    answer:
      "Practical AI tools: multilingual farming chatbots (AgriNova), document summarizers, meeting-to-task helpers, and parcel-label OCR, plus Python backends for AI content workflows.",
  },
  {
    question: "Is Mohit Nagda open to work or collaboration?",
    answer:
      "Yes. Open to full-time AI and Python roles, freelance projects, research collaboration, and internship conversations.",
  },
  {
    question: "Where is Mohit Nagda based?",
    answer: "Udaipur, Rajasthan, India.",
  },
  {
    question: "Where can I find Mohit Nagda online?",
    answer:
      "Portfolio mohit-nagda.vercel.app, GitHub github.com/mohitt38, LinkedIn linkedin.com/in/mohitnagda.",
  },
]
