import { Montserrat } from 'next/font/google'
import SocialIcons from '../components/SocialIcons'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Social() {
  return (
    <div className={`min-h-screen flex flex-col justify-center items-center px-4 ${montserrat.className}`}>
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Connect with Me</h1>
        <SocialIcons />
      </div>
    </div>
  )
}

