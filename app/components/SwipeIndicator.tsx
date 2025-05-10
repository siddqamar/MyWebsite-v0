'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function SwipeIndicator() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  
  // Hide indicator after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 5000)
    
    // Reset visibility when page changes
    setVisible(true)
    
    return () => clearTimeout(timer)
  }, [pathname])
  
  // Only show indicator on the home page
  // This must come AFTER the hooks are called
  if (pathname !== '/') return null
  
  return (
    <div 
      className={`fixed bottom-24 left-1/2 transform -translate-x-1/2 z-30 transition-opacity duration-500 ${
        visible ? 'opacity-80' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center bg-black bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2">
        <div className="animate-bounce mb-1">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="rotate-180"
          >
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </div>
        <span className="text-xs text-gray-300 font-medium">Swipe Up</span>
      </div>
    </div>
  )
}