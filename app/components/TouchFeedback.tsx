'use client'

import { useState, useEffect } from 'react'

export default function TouchFeedback() {
  const [ripples, setRipples] = useState<{id: number, x: number, y: number}[]>([])
  let nextId = 0

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      const x = touch.clientX
      const y = touch.clientY
      
      // Add new ripple
      const id = nextId++
      setRipples(prev => [...prev, { id, x, y }])
      
      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== id))
      }, 800)
    }
    
    window.addEventListener('touchstart', handleTouchStart)
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
    }
  }, [])

  return (
    <>
      {ripples.map(ripple => (
        <div 
          key={ripple.id}
          className="touch-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '100px',
            height: '100px',
            marginLeft: '-50px',
            marginTop: '-50px',
          }}
        />
      ))}
    </>
  )
}