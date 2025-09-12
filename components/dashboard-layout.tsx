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
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-full overflow-hidden">
        <div className="hidden md:block">
          <DashboardSidebar className="fixed top-0 bottom-0 left-0 w-[220px] lg:w-[240px] xl:w-[260px] border-r border-gray-200 overflow-y-auto z-50 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200" />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col w-full md:ml-[220px] lg:ml-[240px] xl:ml-[260px]">
          <SidebarInset className="flex flex-col w-full flex-1">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white border-b border-gray-200 backdrop-blur-sm bg-white/80">
              <div className="flex h-12 sm:h-14 md:h-16 items-center justify-between gap-2 sm:gap-4 px-3 sm:px-4 md:px-6">
                {/* Left section with menu trigger */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <SidebarTrigger>
                    <Button variant="ghost" size="icon" className="md:hidden h-8 w-8 sm:h-9 sm:w-9">
                      <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
                    </Button>
                  </SidebarTrigger>
                </div>

                {/* Right section with actions */}
                <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
                  {/* Notifications */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="relative hover:bg-gray-100/80 h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
                      >
                        <Bell className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-600" />
                        {notifications.some((n) => !n.read) && (
                          <span className="absolute -right-0.5 -top-0.5 sm:-right-1 sm:-top-1 flex h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 items-center justify-center rounded-full bg-[#0066FF] text-[8px] sm:text-[9px] md:text-[10px] font-medium text-white">
                            {notifications.filter((n) => !n.read).length}
                          </span>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      side="bottom"
                      sideOffset={5}
                      className="w-[280px] sm:w-[320px] md:w-[380px] p-2 bg-white rounded-lg shadow-lg border border-gray-200 z-[60]"
                    >
                      <DropdownMenuLabel className="flex items-center justify-between px-3 py-2 mb-1 border-b border-gray-100">
                        <span className="text-sm md:text-base font-semibold text-gray-900">Notifications</span>
                        <Button
                          variant="ghost"
                          className="h-6 sm:h-7 md:h-8 px-2 sm:px-3 text-xs md:text-sm font-medium text-[#0066FF] hover:text-white hover:bg-[#0066FF] transition-colors rounded-full"
                          onClick={() => router.push("/notifications")}
                        >
                          View all
                        </Button>
                      </DropdownMenuLabel>
                      <div className="overflow-y-auto max-h-[300px] sm:max-h-[400px]">
                        {notifications.map((notification) => (
                          <DropdownMenuItem
                            key={notification.id}
                            className="flex flex-col items-start rounded-md px-3 py-2 hover:bg-[#0066FF]/5 cursor-pointer group"
                            onClick={() => router.push("/notifications")}
                          >
                            <div className="flex w-full justify-between gap-2">
                              <span className="font-medium text-gray-900 group-hover:text-[#0066FF] text-xs sm:text-sm">
                                {notification.title}
                              </span>
                              <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                            </div>
                            <p className="mt-1 text-xs sm:text-sm text-gray-600 line-clamp-2 w-full group-hover:text-gray-700">
                              {notification.message}
                            </p>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Start New Application button */}
                  <Button
                    onClick={() => router.push("/applications/new")}
                    className="bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm text-xs sm:text-sm h-8 sm:h-9 md:h-10 px-2 sm:px-3 md:px-4"
                  >
                    <span className="hidden lg:inline">Start New Application</span>
                    <span className="hidden sm:inline lg:hidden">New Application</span>
                    <span className="sm:hidden">New</span>
                  </Button>
                </div>
              </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 w-full bg-white overflow-y-auto overflow-x-hidden">
              <div className="w-full">{children}</div>
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}
