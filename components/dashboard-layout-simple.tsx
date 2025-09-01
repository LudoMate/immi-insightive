"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { useAuthStore, checkAuthStatus } from "@/lib/hooks/useAuth"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter()
  const { isAuthenticated } = useAuthStore()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const init = async () => {
      try {
        const isAuth = checkAuthStatus()
        if (!isAuth) {
          router.replace("/login?redirect=" + encodeURIComponent(window.location.pathname))
          return
        }
        await new Promise(resolve => setTimeout(resolve, 100))
        setIsLoading(false)
      } catch (error) {
        console.error("Error checking auth status:", error)
        router.replace("/login")
      }
    }
    init()
  }, [router])

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <DashboardSidebar className="hidden md:block w-64 fixed inset-y-0 border-r border-gray-200" />
      <main className="flex-1 md:ml-64">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
