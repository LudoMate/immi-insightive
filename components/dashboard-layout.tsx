"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Bell, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
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
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  // Add global styles to prevent horizontal scrolling
  useEffect(() => {
    document.body.style.overflowX = "hidden"
    return () => {
      document.body.style.overflowX = ""
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
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-gray-50">
        {isMobileSidebarOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileSidebarOpen(false)} />
        )}

        <div
          className={`
          fixed top-0 bottom-0 left-0 z-50 w-[280px] transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:z-auto
          ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
        >
          <DashboardSidebar className="h-full w-full border-r border-gray-200 bg-white overflow-y-auto" />
        </div>

        <div className="flex-1 flex flex-col w-full lg:ml-0">
          <SidebarInset className="flex flex-col w-full flex-1">
            <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200">
              <div className="flex h-14 lg:h-16 items-center justify-between gap-4 px-4 lg:px-6">
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden h-9 w-9"
                    onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                  >
                    {isMobileSidebarOpen ? (
                      <X className="h-5 w-5 text-gray-700" />
                    ) : (
                      <Menu className="h-5 w-5 text-gray-700" />
                    )}
                  </Button>
                  <div
                    className={`font-semibold text-gray-900 text-lg lg:block ${isMobileSidebarOpen ? "hidden" : "block"}`}
                  >
                    Insightive
                  </div>
                </div>

                <div className="flex items-center gap-2 lg:gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="relative hover:bg-gray-100/80 h-9 w-9 lg:h-10 lg:w-10"
                      >
                        <Bell className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600" />
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
                      className="w-[320px] lg:w-[380px] p-2 bg-white rounded-lg shadow-lg border border-gray-200 z-[60]"
                    >
                      <DropdownMenuLabel className="flex items-center justify-between px-3 py-2 mb-1 border-b border-gray-100">
                        <span className="text-sm lg:text-base font-semibold text-gray-900">Notifications</span>
                        <Button
                          variant="ghost"
                          className="h-7 lg:h-8 px-2 lg:px-3 text-xs lg:text-sm font-medium text-[#0066FF] hover:text-white hover:bg-[#0066FF] transition-colors rounded-full"
                          onClick={() => router.push("/notifications")}
                        >
                          View all
                        </Button>
                      </DropdownMenuLabel>
                      <div className="overflow-y-auto max-h-[300px] lg:max-h-[400px]">
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
                            <p className="mt-1 text-xs lg:text-sm text-gray-600 line-clamp-2 w-full group-hover:text-gray-700">
                              {notification.message}
                            </p>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button
                    onClick={() => router.push("/applications/new")}
                    className="bg-[#0066FF] text-white hover:bg-[#0066FF]/90 shadow-sm text-xs lg:text-sm px-3 lg:px-4 h-9 lg:h-10"
                  >
                    <span className="hidden sm:inline">Start New Application</span>
                    <span className="sm:hidden">New App</span>
                  </Button>
                </div>
              </div>
            </header>

            <main className="flex-1 w-full bg-gray-50 overflow-y-auto overflow-x-hidden">
              <div className="p-4 lg:p-6 max-w-full">{children}</div>
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}
