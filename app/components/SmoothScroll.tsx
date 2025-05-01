'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

const WHEEL_THRESHOLD = 50 // For mouse wheel scrolling
const SWIPE_THRESHOLD = 50 // For touch swipe detection
const NAVIGATION_COOLDOWN = 1000 // Milliseconds to wait before allowing another navigation

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isNavigating, setIsNavigating] = useState(false)
  
  // Define available sections/pages
  const sections = ['/', '/about', '/projects', '/social']
  const currentSectionIndex = sections.indexOf(pathname)
  
  // References for touch events
  const touchStartY = useRef(0)
  const touchStartX = useRef(0)

  // Function to navigate to the next or previous section
  const navigateToSection = (direction: number) => {
    if (isNavigating) return
    
    const nextSectionIndex = currentSectionIndex + direction
    
    // Check if next section exists
    if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
      setIsNavigating(true)
      router.push(sections[nextSectionIndex])
      
      // Prevent multiple navigations while transition is happening
      setTimeout(() => {
        setIsNavigating(false)
      }, NAVIGATION_COOLDOWN)
    }
  }

  useEffect(() => {
    // Handle mouse wheel events
    const handleWheel = (e: WheelEvent) => {
      // Prevent default to disable native scrolling
      e.preventDefault()
      
      // Determine direction (positive deltaY means scroll down/swipe up)
      // In this context: scroll down/swipe up = next page, scroll up/swipe down = previous page
      const direction = e.deltaY > 0 ? 1 : -1
      
      // Only navigate if the wheel movement exceeds threshold
      if (Math.abs(e.deltaY) > WHEEL_THRESHOLD) {
        navigateToSection(direction)
      }
    }
    
    // Handle keyboard events (Page Up/Down, Arrow keys)
    const handleKeyDown = (e: KeyboardEvent) => {
      let direction = 0;
      
      switch (e.key) {
        case 'PageUp':
        case 'ArrowUp':
          direction = -1;
          break;
        case 'PageDown':
        case 'ArrowDown':
        case ' ': // Space bar
          direction = 1;
          break;
        default:
          return; // Exit for other keys
      }
      
      // Prevent default scrolling behavior
      e.preventDefault();
      navigateToSection(direction);
    };
    
    // Handle touch start
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
      touchStartX.current = e.touches[0].clientX
    }
    
    // Handle touch end and determine if it was a vertical swipe
    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY
      const touchEndX = e.changedTouches[0].clientX
      
      // Calculate vertical and horizontal distance
      const yDiff = touchStartY.current - touchEndY
      const xDiff = Math.abs(touchStartX.current - touchEndX)
      
      // Only trigger if swipe was primarily vertical (not horizontal)
      // and exceeded the threshold distance
      if (Math.abs(yDiff) > SWIPE_THRESHOLD && xDiff < Math.abs(yDiff)) {
        // Positive yDiff means swipe up (next page)
        // Negative yDiff means swipe down (previous page)
        const direction = yDiff > 0 ? 1 : -1
        navigateToSection(direction)
      }
    }

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
    
    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [currentSectionIndex, isNavigating, pathname])

  return <div className="smooth-scroll-container">{children}</div>
}