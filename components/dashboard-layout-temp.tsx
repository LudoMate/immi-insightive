"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

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
  ]

  if (!isAuthenticated) return null

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Sidebar - Hidden on mobile */}
        <DashboardSidebar className="fixed inset-y-0 left-0 z-30 hidden w-64 md:flex" />
        
        {/* Main Content */}
        <SidebarInset className="flex min-h-screen flex-col md:pl-64">
          {/* Header */}
          <header className="sticky top-0 z-20 bg-white border-b border-gray-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between gap-4">
                {/* Left section with menu trigger */}
                <div className="flex items-center gap-3">
                  <SidebarTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                      <Menu className="h-5 w-5 text-gray-700" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SidebarTrigger>
                </div>

                {/* Right section with actions */}
                <div className="flex items-center gap-4">
                  {/* Notifications */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="relative">
                        <Bell className="h-5 w-5 text-gray-700" />
                        {notifications.some(n => !n.read) && (
                          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-medium text-white">
                            {notifications.filter(n => !n.read).length}
                          </span>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[380px]">
                      <DropdownMenuLabel className="flex items-center justify-between p-4 border-b border-gray-100">
                        <span className="text-base font-semibold text-gray-900">Notifications</span>
                        <Button
                          variant="ghost"
                          className="h-auto px-2 py-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                          onClick={() => router.push("/notifications")}
                        >
                          View all
                        </Button>
                      </DropdownMenuLabel>
                      <div className="divide-y divide-gray-100">
                        {notifications.map((notification) => (
                          <DropdownMenuItem
                            key={notification.id}
                            className="flex flex-col items-start p-4 focus:bg-gray-50"
                            onClick={() => router.push("/notifications")}
                          >
                            <div className="flex w-full justify-between gap-2">
                              <span className="font-medium text-gray-900">{notification.title}</span>
                              <span className="text-xs text-gray-500">{notification.time}</span>
                            </div>
                            <p className="mt-1 text-sm text-gray-600 line-clamp-2">{notification.message}</p>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Start New Application button */}
                  <Button
                    onClick={() => router.push("/applications/new")}
                    className="hidden md:inline-flex bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Start New Application
                  </Button>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                {/* Main Content */}
                <div className="md:col-span-9">
                  <div className="space-y-6">
                    {children}
                  </div>
                </div>
                
                {/* Side Content */}
                <div className="md:col-span-3">
                  <aside className="sticky top-[5rem] space-y-6">
                    <WhatsNewCard className="overflow-hidden rounded-lg border border-gray-200 shadow-sm" showButton={false} />
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
