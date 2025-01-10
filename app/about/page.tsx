import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function About() {
  return (
    <div className={`min-h-screen flex flex-col justify-center items-center px-4 ${montserrat.className}`}>
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg mb-4">
          I'm a Computer Science student with a passion for AI and automation. This year, I contributed to a popular GitHub repository with over 116k stars, which was an exciting milestone for me. 
   </p>
        <p className="text-lg">
          I use AI to develop projects faster and am continuously learning about AI Engineering through online resources like Coursera, GitHub repos, and YouTube.  With my skills in Python and AI, I help businesses and individuals solve problems efficiently with cutting-edge solutions.
        </p>
      </div>
    </div>
  )
}

