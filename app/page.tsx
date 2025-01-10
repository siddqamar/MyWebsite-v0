import { Montserrat } from 'next/font/google'
import Link from 'next/link'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`min-h-screen flex flex-col justify-center items-center text-center px-4 ${montserrat.className}`}>
      <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Siddiqui Qamar</h1>
      <p className="text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
        Let me help you design the perfect prompts for your favorite LLM and AI projects!
      </p>
      <Link href="/social" className="cta-button relative inline-block px-6 py-3 text-lg font-bold text-black bg-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1">
        <span className="relative z-10 tracking-wide">Hire Me for Freelance Work</span>
      </Link>
    </div>
  )
}

