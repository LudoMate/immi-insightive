"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Bell, Menu, X, AlertCircle } from "lucide-react"
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
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

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

      if (!hasAuthCookie) {
        router.push("/login?redirect=" + encodeURIComponent(window.location.pathname))
      }
    }

    checkAuth()
    window.addEventListener("storage", checkAuth)
    return () => window.removeEventListener("storage", checkAuth)
  }, [router])

  // Sample notifications - In production, fetch from API
  const notifications = [
    {
      id: 1,
      title: "Application Update",
      message: "Your Australia visa application has been processed.",
      time: "10 minutes ago",
      read: false,
      type: "success",
    },
    {
      id: 2,
      title: "Document Required",
      message: "Please upload your passport scan for verification.",
      time: "2 hours ago",
      read: false,
      type: "warning",
    },
  ]

  if (!isAuthenticated) return null

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Sidebar - Hidden on mobile, shown on desktop */}
        <DashboardSidebar className="fixed left-0 top-0 z-30 h-full hidden md:flex" />
        
        {/* Main content area */}
        <SidebarInset className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="sticky top-0 z-20 w-full bg-white border-b border-gray-200">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6">
              <div className="flex h-16 items-center justify-between gap-4">
                {/* Mobile menu trigger and logo */}
                <div className="flex items-center gap-3">
                  <SidebarTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SidebarTrigger>
                </div>

                {/* Header actions */}
                <div className="flex items-center gap-4">
                  {/* Notifications */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="relative">
                        <Bell className="h-5 w-5 text-gray-700" />
                        {notifications.some(n => !n.read) && (
                          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-600 text-[10px] font-medium text-white flex items-center justify-center">
                            {notifications.filter(n => !n.read).length}
                          </span>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[380px]">
                      <DropdownMenuLabel className="flex items-center justify-between">
                        <span>Notifications</span>
                        <Button variant="ghost" size="sm" className="h-auto p-0 text-sm font-medium text-blue-600" onClick={() => router.push("/notifications")}>
                          View all
                        </Button>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <ScrollArea className="h-[300px]">
                        {notifications.length > 0 ? (
                          <div className="grid gap-1 p-1">
                            {notifications.map((notification) => (
                              <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-3 cursor-pointer">
                                <div className="flex items-start justify-between w-full gap-2">
                                  <div className="grid gap-1">
                                    <div className="flex items-center gap-2">
                                      {notification.type === "warning" && (
                                        <AlertCircle className="h-4 w-4 text-orange-500" />
                                      )}
                                      <span className="font-medium">{notification.title}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 line-clamp-2">{notification.message}</p>
                                  </div>
                                  <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                                </div>
                              </DropdownMenuItem>
                            ))}
                          </div>
                        ) : (
                          <div className="p-4 text-center text-sm text-gray-500">
                            No new notifications
                          </div>
                        )}
                      </ScrollArea>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Start New Application button */}
                  <Button
                    className="hidden md:flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700"
                    onClick={() => router.push("/applications/new")}
                  >
                    Start New Application
                  </Button>
                </div>
              </div>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Main content area */}
                <div className="md:col-span-9">
                  <div className="space-y-6">
                    {children}
                  </div>
                </div>
                
                {/* Sidebar content */}
                <div className="md:col-span-3">
                  <aside className="sticky top-[5rem]">
                    <WhatsNewCard className="rounded-lg border border-gray-200 shadow-sm" showButton={false} />
                  </aside>
                </div>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
