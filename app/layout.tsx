import { Inter } from 'next/font/google'
import './globals.css'
import AnimatedBackground from './components/AnimatedBackground'
import SmoothScroll from './components/SmoothScroll'
import Navigation from './components/Navigation'
import SwipeIndicator from './components/SwipeIndicator'
import TouchFeedback from './components/TouchFeedback'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Siddiqui Qamar - AI/ML',
  description: 'Python developer learning ML and how AI agents are used',
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
        <TouchFeedback />
        <SmoothScroll>
          <main className="relative z-10">
            <Navigation />
            <SwipeIndicator />
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  )
}