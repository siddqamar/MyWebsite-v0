'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const SCROLL_THRESHOLD = 100 // Adjust this value to change sensitivity

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [scrolling, setScrolling] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)

  const sections = ['/', '/about', '/projects', '/social']

  useEffect(() => {
    let lastScrollTop = 0
    let scrollTimer: NodeJS.Timeout

    const handleScroll = () => {
      if (scrolling) return

      const st = window.pageYOffset || document.documentElement.scrollTop
      const direction = st > lastScrollTop ? 1 : -1
      lastScrollTop = st <= 0 ? 0 : st

      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        if (Math.abs(st - lastScrollTop) > SCROLL_THRESHOLD) {
          const nextSection = currentSection + direction
          if (nextSection >= 0 && nextSection < sections.length) {
            setScrolling(true)
            router.push(sections[nextSection])
            setCurrentSection(nextSection)
            setTimeout(() => setScrolling(false), 1000) // Adjust this delay as needed
          }
        }
      }, 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentSection, router, scrolling])

  return <div className="smooth-scroll-container">{children}</div>
}

