"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Bell, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import WhatsNewCard from "@/components/whats-new-card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Check if user is authenticated on component mount
  useEffect(() => {
    const checkAuth = () => {
      const hasAuthCookie = document.cookie.includes("auth_session=")
      setIsAuthenticated(hasAuthCookie)

      // If not authenticated, redirect to login
      if (!hasAuthCookie) {
        router.push("/login?redirect=" + encodeURIComponent(window.location.pathname))
      }
    }

    checkAuth()

    // Listen for storage events (for when auth state changes in another tab)
    window.addEventListener("storage", checkAuth)

    return () => {
      window.removeEventListener("storage", checkAuth)
    }
  }, [router])

  // Sample notifications
  const notifications = [
    {
      id: 1,
      title: "Application Update",
      message: "Your Australia visa application has been processed.",
      time: "10 minutes ago",
      read: false,
    },
    {
      id: 2,
      title: "Document Required",
      message: "Please upload your passport scan for verification.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 3,
      title: "Consultation Reminder",
      message: "Your consultation is scheduled for tomorrow at 3 PM.",
      time: "Yesterday",
      read: true,
    },
  ]

  if (!isAuthenticated) {
    return null // Don't render anything until authentication check is complete
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50">
        <DashboardSidebar className="fixed left-0 top-0 z-30 h-full hidden md:flex" />
        <SidebarInset>
          <header className="sticky top-0 z-20 w-full bg-white border-b border-gray-200">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6">
              <div className="flex h-16 items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <SidebarTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden text-gray-700 hover:bg-gray-100">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SidebarTrigger>
                </div>

                <div className="flex items-center gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="relative">
                        <Bell className="h-5 w-5 text-gray-700" />
                        {notifications.some((n) => !n.read) && (
                          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-600 text-[10px] font-medium text-white flex items-center justify-center">
                            {notifications.filter((n) => !n.read).length}
                          </span>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80">
                      <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {notifications.slice(0, 3).map((notification) => (
                        <DropdownMenuItem key={notification.id}>
                          <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium">{notification.title}</p>
                            <p className="text-xs text-muted-foreground">{notification.message}</p>
                            <p className="text-xs text-muted-foreground">{notification.time}</p>
                          </div>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-16 left-0 right-0 bg-[#0e7490] shadow-lg z-20 md:hidden"
                >
                  <div className="p-4 space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent border-white/20 text-white hover:bg-white/10"
                      onClick={() => {
                        router.push("/applications/new")
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Start New Application
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent border-white/20 text-white hover:bg-white/10"
                      onClick={() => {
                        router.push("/notifications")
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Notifications
                      <span className="ml-2 bg-[#f4e04d] text-black text-xs px-1.5 py-0.5 rounded-full">
                        {notifications.filter((n) => !n.read).length}
                      </span>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent border-white/20 text-white hover:bg-white/10"
                      onClick={() => {
                        router.push("/help")
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Help & Support
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </header>
          <main className="flex-1 py-8">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
                <div className="md:col-span-9 space-y-6">{children}</div>
                <div className="md:col-span-3">
                  <WhatsNewCard className="sticky top-24 rounded-lg shadow-sm" showButton={false} />
                </div>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
