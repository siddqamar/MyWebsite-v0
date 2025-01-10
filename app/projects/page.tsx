import { Montserrat } from 'next/font/google'
import ProjectCard from '../components/ProjectCard'

const montserrat = Montserrat({ subsets: ['latin'] })

const projects = [
  {
    title: "Free Transcript Maker",
    description: "A Python program that converts audio into text with accuracy, supported by OpenAI's speech-to-text model.",
    link: "https://huggingface.co/spaces/siddqamar/FreeTranscriptMaker"
  },
  {
    title: "Sentiment Reveal",
    description: "Analyze the sentiment of product reviews in English, Dutch, German, French, Italian, and Spanish. Focused Sentiment Analysis for eCommerce.",
    link: "https://huggingface.co/spaces/siddqamar/SentimentReveal"
  },
  {
    title: "Exam Preparation Assistant",
    description: "This AI assistant is built to boost your confidence through practice questions and help you overcome anxiety. It is powered by the Qwen 32B parameters model.",
    link: "https://huggingface.co/spaces/siddqamar/Exam-Preparation-Assistant"
  }
]

export default function Projects() {
  return (
    <div className={`min-h-screen flex flex-col justify-center items-center px-4 ${montserrat.className}`}>
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {projects.map((project, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
              <ProjectCard {...project} className="project-card relative z-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

