"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Bell, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
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
    document.body.style.overflowX = "hidden"
    document.documentElement.style.overflowX = "hidden"
    return () => {
      document.body.style.overflowX = ""
      document.documentElement.style.overflowX = ""
    }
  }, [])

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
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full bg-gray-50">
        {/* Fixed Sidebar for Desktop */}
        <div className="hidden md:block fixed top-0 left-0 h-full w-[240px] lg:w-[260px] xl:w-[280px] z-50">
          <DashboardSidebar className="h-full w-full border-r border-gray-200 bg-white overflow-y-auto shadow-sm" />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col md:ml-[240px] lg:ml-[260px] xl:ml-[280px] min-h-screen">
          <SidebarInset className="flex flex-col flex-1">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
              <div className="flex h-14 md:h-16 items-center justify-between gap-4 px-4 md:px-6">
                {/* Mobile Menu Trigger */}
                <div className="flex items-center gap-3 md:hidden">
                  <SidebarTrigger>
                    <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-gray-100">
                      <Menu className="h-5 w-5 text-gray-700" />
                    </Button>
                  </SidebarTrigger>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-3 ml-auto">
                  {/* Notifications */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="relative hover:bg-gray-100/80 h-10 w-10 rounded-full"
                      >
                        <Bell className="h-5 w-5 text-gray-600" />
                        {notifications.some((n) => !n.read) && (
                          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#0066FF] text-[10px] font-medium text-white">
                            {notifications.filter((n) => !n.read).length}
                          </span>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      side="bottom"
                      sideOffset={5}
                      className="w-[320px] md:w-[380px] p-2 bg-white rounded-lg shadow-lg border border-gray-200 z-[60]"
                    >
                      <DropdownMenuLabel className="flex items-center justify-between px-3 py-2 mb-1 border-b border-gray-100">
                        <span className="text-base font-semibold text-gray-900">Notifications</span>
                        <Button
                          variant="ghost"
                          className="h-8 px-3 text-sm font-medium text-[#0066FF] hover:text-white hover:bg-[#0066FF] transition-colors rounded-full"
                          onClick={() => router.push("/notifications")}
                        >
                          View all
                        </Button>
                      </DropdownMenuLabel>
                      <div className="overflow-y-auto max-h-[400px]">
                        {notifications.map((notification) => (
                          <DropdownMenuItem
                            key={notification.id}
                            className="flex flex-col items-start rounded-md px-3 py-2 hover:bg-[#0066FF]/5 cursor-pointer group"
                            onClick={() => router.push("/notifications")}
                          >
                            <div className="flex w-full justify-between gap-2">
                              <span className="font-medium text-gray-900 group-hover:text-[#0066FF] text-sm">
                                {notification.title}
                              </span>
                              <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                            </div>
                            <p className="mt-1 text-sm text-gray-600 line-clamp-2 w-full group-hover:text-gray-700">
                              {notification.message}
                            </p>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button
                    onClick={() => router.push("/applications/new")}
                    className="bg-[#0066FF] text-white hover:bg-[#0066FF]/90 shadow-sm text-sm h-10 px-4 rounded-lg font-medium transition-all duration-200"
                  >
                    <span className="hidden lg:inline">Start New Application</span>
                    <span className="hidden md:inline lg:hidden">New Application</span>
                    <span className="md:hidden">Apply</span>
                  </Button>
                </div>
              </div>
            </header>

            <main className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
              <div className="flex-1 overflow-y-auto">{children}</div>

              <footer className="bg-white border-t border-gray-200 px-4 md:px-6 py-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-4">
                    <span>© 2024 Immi Insightive. All rights reserved.</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="hover:text-[#0066FF] transition-colors">Privacy Policy</button>
                    <button className="hover:text-[#0066FF] transition-colors">Terms of Service</button>
                    <button className="hover:text-[#0066FF] transition-colors">Support</button>
                  </div>
                </div>
              </footer>
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}
