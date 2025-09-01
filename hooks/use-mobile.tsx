"use client"

import { useEffect, useState } from "react"

export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Initial check
    checkScreenSize()

    // Add event listener for resize
    window.addEventListener("resize", checkScreenSize)

    // Clean up event listener
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [breakpoint])

  return isMobile
}
