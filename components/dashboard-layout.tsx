"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Bell, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
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
    <div className="flex h-screen w-full overflow-hidden bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 bottom-0 left-0 z-50 w-[280px] transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:z-auto
        ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <DashboardSidebar className="h-full w-full" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full lg:ml-0">
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
          <div className="flex h-16 items-center justify-between gap-4 px-6">
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
              <div className="font-semibold text-gray-900 text-xl">Insightive</div>
            </div>

            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative hover:bg-gray-100 h-10 w-10">
                    <Bell className="h-5 w-5 text-gray-600" />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white">
                      2
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  side="bottom"
                  sideOffset={5}
                  className="w-[380px] p-2 bg-white rounded-lg shadow-lg border border-gray-200"
                >
                  <DropdownMenuLabel className="flex items-center justify-between px-3 py-2 mb-1 border-b border-gray-100">
                    <span className="font-semibold text-gray-900">Notifications</span>
                    <Button
                      variant="ghost"
                      className="h-8 px-3 text-sm font-medium text-blue-600 hover:text-white hover:bg-blue-600 transition-colors rounded-full"
                      onClick={() => router.push("/notifications")}
                    >
                      View all
                    </Button>
                  </DropdownMenuLabel>
                  <div className="max-h-[400px] overflow-y-auto">
                    {notifications.map((notification) => (
                      <DropdownMenuItem
                        key={notification.id}
                        className="flex flex-col items-start rounded-md px-3 py-2 hover:bg-blue-50 cursor-pointer"
                        onClick={() => router.push("/notifications")}
                      >
                        <div className="flex w-full justify-between gap-2">
                          <span className="font-medium text-gray-900 text-sm">{notification.title}</span>
                          <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                        </div>
                        <p className="mt-1 text-sm text-gray-600 w-full">{notification.message}</p>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                onClick={() => router.push("/applications/new")}
                className="bg-blue-600 text-white hover:bg-blue-700 shadow-sm px-4 h-10"
              >
                Start New Application
              </Button>

              <Button
                onClick={() => router.push("/notifications")}
                className="bg-blue-600 text-white hover:bg-blue-700 shadow-sm px-4 h-10"
              >
                2 New Updates
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 w-full bg-gray-50 overflow-y-auto">
          <div className="p-6 max-w-full">{children}</div>
        </main>
      </div>
    </div>
  )
}
