import { Montserrat } from 'next/font/google'
import ProjectCard from '../components/ProjectCard'

const montserrat = Montserrat({ subsets: ['latin'] })

const projects = [
  {
    title: "Sentiment Reveal",
    description: "This is very important for ecommerce businesses to understand if customer reviews are positive, negative or neutral. That’s where Sentiment Reveal comes in, it understand five languages including Spanish. Built on top of open source model from Hugging Face.",
    link: "https://huggingface.co/spaces/siddqamar/SentimentReveal"
  },
  {
    title: "Quick Transcribe AI",
    description: "Get accurate transcripts for your voicemails, lectures and meetings. Works with both audio and video files. Powered by OpenAI model.",
    link: "https://huggingface.co/spaces/siddqamar/QuickTranscribeAI"
  },
  {
    title: "Exam Preparation Assistant",
    description: "I created this AI powered buddy to overcome exam anxiety. It generates customized mock questions based on your understanding level, preferred question types and areas you want to improve. Initially designed for personal use but later made it public for all the students.",
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

