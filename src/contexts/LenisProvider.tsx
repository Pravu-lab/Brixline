// src/contexts/LenisProvider.tsx
'use client'
import { useEffect, useRef, ReactNode } from 'react'
import Lenis from '@studio-freight/lenis'

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis once
    lenisRef.current = new Lenis({
      duration: 1.2,      // scroll easing duration
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,  // enable smoothing
    })

    function raf(time: number) {
      if (lenisRef.current) {
        lenisRef.current.raf(time)
      }
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Cleanup on unmount
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy()
      }
    }
  }, [])

  return <>{children}</>
}
