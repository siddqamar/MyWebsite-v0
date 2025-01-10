import { Inter } from 'next/font/google'
import './globals.css'
import AnimatedBackground from './components/AnimatedBackground'
import SmoothScroll from './components/SmoothScroll'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Siddiqui Qamar - AI Engineer',
  description: 'AI Engineer focusing on Prompt Engineering & Custom GPT AI Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedBackground />
        <SmoothScroll>
          <main className="relative z-10">
            <Navigation />
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  )
}

