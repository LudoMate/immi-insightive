"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Bell, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar"
import { motion } from "framer-motion"

interface DashboardLayoutProps {
  children: React.ReactNode
}

type User = {
  id: string
  name: string
  email: string
  image: string | null
}

type Notification = {
  id: number
  title: string
  message: string
  time: string
  type: string
  read: boolean
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  // Sample notifications
  const notifications: Notification[] = [
    {
      id: 1,
      title: "Application Update",
      message: "Your Australia visa application status has been updated.",
      time: "10 minutes ago",
      type: "application",
      read: false,
    },
    {
      id: 2,
      title: "Document Required",
      message: "Please upload your passport scan for verification.",
      time: "2 hours ago",
      type: "document",
      read: false,
    },
    {
      id: 3,
      title: "Consultation Scheduled",
      message: "Your consultation is scheduled for tomorrow at 3 PM.",
      time: "Yesterday",
      type: "consultation",
      read: true,
    },
  ]

  useEffect(() => {
    // In a real app, fetch the user data from your API
    setUser({
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      image: null,
    })
  }, [])

  if (!user) {
    return null
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-[#F8FAFC]">
        {/* Left Sidebar */}
        <DashboardSidebar className="fixed top-0 left-0 bottom-0 w-64 border-r border-[#0B1120]/10 z-30 bg-white" />
        
        <SidebarInset>
          {/* Header */}
          <header className="sticky top-0 z-20 bg-white border-b border-[#0B1120]/10">
            <div className="h-16 px-4 flex items-center justify-between gap-4 mx-auto max-w-7xl">
              {/* Left side */}
              <div className="flex items-center gap-2">
                <SidebarTrigger className="text-[#0B1120] hover:bg-[#F8FAFC] rounded-lg p-2" />
                <button 
                  className="md:hidden text-[#0B1120] hover:bg-[#F8FAFC] rounded-lg p-2" 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>

              {/* Right side */}
              <div className="flex items-center gap-4">
                {/* Mobile menu */}
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-16 left-0 right-0 bg-white border-b border-[#0B1120]/10 shadow-lg z-20 md:hidden"
                  >
                    <div className="p-4 space-y-2">
                      <Button
                        variant="outline"
                        className="w-full justify-start text-[#0B1120] border-[#0B1120]/10 hover:bg-[#F8FAFC]"
                        onClick={() => {
                          router.push("/applications/new")
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        Start New Application
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-[#0B1120] border-[#0B1120]/10 hover:bg-[#F8FAFC]"
                        onClick={() => {
                          router.push("/notifications")
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        Notifications
                        <span className="ml-2 bg-blue-100 text-blue-700 text-xs px-1.5 py-0.5 rounded-full">
                          {notifications.filter((n) => !n.read).length}
                        </span>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-[#0B1120] border-[#0B1120]/10 hover:bg-[#F8FAFC]"
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

                {/* Notifications */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="relative p-2 rounded-lg hover:bg-[#F8FAFC] focus:outline-none">
                      <Bell className="h-5 w-5 text-[#0B1120]" />
                      {notifications.filter((n) => !n.read).length > 0 && (
                        <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-medium text-white">
                          {notifications.filter((n) => !n.read).length}
                        </span>
                      )}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80 bg-white border border-[#0B1120]/10 shadow-lg p-0">
                    <DropdownMenuLabel className="border-b border-[#0B1120]/10 p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-medium text-[#0B1120]">Notifications</h3>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-xs text-blue-600 hover:text-blue-700"
                          onClick={() => router.push("/notifications")}
                        >
                          View all
                        </Button>
                      </div>
                    </DropdownMenuLabel>

                    <ScrollArea className="max-h-[300px]">
                      {notifications.length === 0 ? (
                        <div className="p-4">
                          <p className="text-sm text-[#0B1120]/60 text-center">No new notifications</p>
                        </div>
                      ) : (
                        notifications.map((notification) => (
                          <DropdownMenuItem
                            key={notification.id}
                            className={`border-b last:border-b-0 border-[#0B1120]/10 p-4 hover:bg-[#F8FAFC] focus:bg-[#F8FAFC] cursor-pointer ${
                              !notification.read ? "bg-blue-50" : ""
                            }`}
                            onClick={() => router.push("/notifications")}
                          >
                            <div className="space-y-1.5">
                              <div className="flex items-start justify-between gap-4">
                                <p className="text-sm font-medium text-[#0B1120]">{notification.title}</p>
                                <p className="text-[10px] text-[#0B1120]/40 shrink-0">{notification.time}</p>
                              </div>
                              <p className="text-xs text-[#0B1120]/60">{notification.message}</p>
                            </div>
                          </DropdownMenuItem>
                        ))
                      )}
                    </ScrollArea>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* User menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="p-1.5 rounded-lg hover:bg-[#F8FAFC] focus:outline-none">
                      <Avatar>
                        <AvatarImage src={user.image || "/placeholder-user.jpg"} alt={user.name} />
                        <AvatarFallback>{user.name[0] || "U"}</AvatarFallback>
                      </Avatar>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-white border border-[#0B1120]/10 shadow-lg">
                    <div className="p-2">
                      <div className="px-2 py-1.5">
                        <p className="text-sm font-medium text-[#0B1120] line-clamp-1">{user.name}</p>
                        <p className="text-xs text-[#0B1120]/60 line-clamp-1">{user.email}</p>
                      </div>
                      <DropdownMenuSeparator className="my-2 bg-[#0B1120]/10" />
                      <DropdownMenuItem
                        className="w-full px-2 py-1.5 text-sm text-[#0B1120] hover:bg-[#F8FAFC] focus:bg-[#F8FAFC] cursor-pointer"
                        onClick={() => router.push("/profile")}
                      >
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="w-full px-2 py-1.5 text-sm text-[#0B1120] hover:bg-[#F8FAFC] focus:bg-[#F8FAFC] cursor-pointer"
                        onClick={() => router.push("/profile/settings")}
                      >
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="my-2 bg-[#0B1120]/10" />
                      <DropdownMenuItem
                        className="w-full px-2 py-1.5 text-sm text-[#0B1120] hover:bg-[#F8FAFC] focus:bg-[#F8FAFC] cursor-pointer"
                        onClick={() => router.push("/login")}
                      >
                        Sign out
                      </DropdownMenuItem>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* New Application Button */}
                <Button
                  className="bg-blue-600 text-white hover:bg-blue-700 hidden md:flex"
                  onClick={() => router.push("/applications/new")}
                >
                  Start New Application
                </Button>
              </div>
            </div>
          </header>

          {/* Main content */}
          <main className="py-8 px-4 mx-auto max-w-7xl">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
