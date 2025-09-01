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
        <DashboardSidebar className="fixed left-0 top-0 z-30 h-full hidden md:flex" />
        <SidebarInset className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-20 w-full bg-white border-b border-gray-200">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6">
              <div className="flex h-16 items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <SidebarTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden text-gray-700">
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
                        {notifications.some(n => !n.read) && (
                          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-600 text-[10px] font-medium text-white flex items-center justify-center">
                            {notifications.filter(n => !n.read).length}
                          </span>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[380px]">
                      <DropdownMenuLabel className="flex items-center justify-between p-4">
                        <h3 className="text-sm font-medium">Notifications</h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-auto p-0 text-sm font-medium text-blue-600"
                          onClick={() => router.push("/notifications")}
                        >
                          View all
                        </Button>
                      </DropdownMenuLabel>
                      <div className="max-h-[300px] overflow-y-auto">
                        {notifications.length > 0 ? (
                          notifications.map((notification) => (
                            <DropdownMenuItem
                              key={notification.id}
                              className="p-4 border-b border-gray-100 cursor-pointer"
                              onClick={() => router.push("/notifications")}
                            >
                              <div className="w-full">
                                <div className="flex justify-between items-start mb-1">
                                  <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                                  <span className="text-xs text-gray-500">{notification.time}</span>
                                </div>
                                <p className="text-sm text-gray-600">{notification.message}</p>
                              </div>
                            </DropdownMenuItem>
                          ))
                        ) : (
                          <div className="p-4 text-center text-sm text-gray-500">
                            No new notifications
                          </div>
                        )}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

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

          <main className="flex-1">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-9">
                  <div className="space-y-6">
                    {children}
                  </div>
                </div>
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
