"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { checkAuthStatus } from "@/lib/hooks/useAuth"

export function AuthCheck({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  useEffect(() => {
    if (!checkAuthStatus()) {
      router.push(`/login?redirect=${window.location.pathname}`)
    }
  }, [router])

  return <>{children}</>
}
