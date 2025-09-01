"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Bell,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Globe,
  BookOpen,
  Briefcase,
  BarChart3,
  FileCheck,
  FileText,
  Clock,
  MessageSquare,
  Menu,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  const headerStyles = {
    backgroundColor: 'var(--background)',
    borderBottom: '1px solid var(--border)',
    color: 'var(--text)'
  }

  // Check if user is authenticated on component mount
  useEffect(() => {
    const checkAuth = () => {
      const hasAuthCookie = document.cookie.includes("auth_session=")
      setIsAuthenticated(hasAuthCookie)
    }

    checkAuth()

    // Listen for storage events (for when auth state changes in another tab)
    window.addEventListener("storage", checkAuth)

    return () => {
      window.removeEventListener("storage", checkAuth)
    }
  }, [])

  // Handle logout
  const handleLogout = () => {
    // Clear the auth cookie
    document.cookie = "auth_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    setIsAuthenticated(false)

    // Redirect to home page
    window.location.href = "/"
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  // Animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
      },
    }),
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
      },
    },
  }

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

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-[#0B1120]">Immi Insightive</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 hover:bg-[#0B1120]/5 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6 text-[#0B1120]" /> : <Menu className="h-6 w-6 text-[#0B1120]" />}
        </button>

        {/* Navigation menu */}
        <div className={`
          ${isMenuOpen 
            ? "fixed top-16 left-0 right-0 w-full bg-white border-t border-[#0B1120]/10 p-6 shadow-lg z-50" 
            : "hidden"
          } md:relative md:flex md:w-auto md:border-none md:p-0 md:shadow-none md:items-center`}
        >
          <div className="flex flex-col space-y-6 md:flex-row md:items-center md:space-y-0 md:space-x-8">
            <Link
              href="/"
              className={`block text-base font-medium transition-colors ${
                isActive("/") ? "text-[#0B1120]" : "text-[#0B1120]/80 hover:text-[#0B1120]"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {isAuthenticated && (
                <div className="group relative">
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      isActive("/profile") ? "text-[#0066FF]" : "text-[#0B1120]/80 hover:text-[#0066FF]"
                    }`}
                  >
                    Profile{" "}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="w-64 bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden">
                      <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#0066FF] flex items-center justify-center text-white font-medium">
                            FM
                          </div>
                          <div className="flex flex-col">
                            <p className="text-sm font-medium text-gray-900">Francois Mercer</p>
                            <p className="text-xs text-gray-500">xyz@gmail.com</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2">
                        <Link href="/profile">
                          <div className="flex items-center px-3 py-2.5 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-[#0066FF] cursor-pointer gap-3 group">
                            <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-[#0066FF]">
                              <User className="h-4 w-4 text-[#0066FF] group-hover:text-white" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium">View Profile</span>
                              <span className="text-xs text-gray-500 group-hover:text-[#0066FF]/70">Manage your account details</span>
                            </div>
                          </div>
                        </Link>
                        <Link href="/profile/settings">
                          <div className="flex items-center px-3 py-2.5 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-[#0066FF] cursor-pointer gap-3 group">
                            <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-[#0066FF]">
                              <Settings className="h-4 w-4 text-[#0066FF] group-hover:text-white" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium">Settings</span>
                              <span className="text-xs text-gray-500 group-hover:text-[#0066FF]/70">Configure your preferences</span>
                            </div>
                          </div>
                        </Link>
                        <div className="px-2 py-2 border-t border-gray-100 mt-1">
                          <button
                            onClick={handleLogout}
                            className="flex items-center px-3 py-2.5 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 cursor-pointer gap-3 group w-full"
                          >
                            <div className="bg-red-100 p-2 rounded-lg group-hover:bg-red-600">
                              <LogOut className="h-4 w-4 text-red-600 group-hover:text-white" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium">Log Out</span>
                              <span className="text-xs text-gray-500 group-hover:text-red-600/70">Sign out of your account</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {isAuthenticated && (
                <div className="group relative">
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      isActive("/applications") ? "text-[#0066FF]" : "text-[#0B1120]/80 hover:text-[#0066FF]"
                    }`}
                  >
                    Applications{" "}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="w-64 bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium text-gray-900">Your Applications</p>
                          <p className="text-xs text-gray-500">Manage your visa applications</p>
                        </div>
                      </div>
                      <div className="p-2">
                        <Link href="/applications/new">
                          <div className="flex items-center px-3 py-2.5 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-[#0066FF] cursor-pointer gap-3 group">
                            <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-[#0066FF]">
                              <FileText className="h-4 w-4 text-[#0066FF] group-hover:text-white" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium">New Application</span>
                              <span className="text-xs text-gray-500 group-hover:text-[#0066FF]/70">Start a new visa application</span>
                            </div>
                          </div>
                        </Link>
                        <Link href="/applications/status">
                          <div className="flex items-center px-3 py-2.5 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-[#0066FF] cursor-pointer gap-3 group">
                            <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-[#0066FF]">
                              <BarChart3 className="h-4 w-4 text-[#0066FF] group-hover:text-white" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium">Application Status</span>
                              <span className="text-xs text-gray-500 group-hover:text-[#0066FF]/70">Track your applications</span>
                            </div>
                          </div>
                        </Link>
                        <Link href="/applications/history">
                          <div className="flex items-center px-3 py-2.5 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-[#0066FF] cursor-pointer gap-3 group">
                            <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-[#0066FF]">
                              <Clock className="h-4 w-4 text-[#0066FF] group-hover:text-white" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium">Application History</span>
                              <span className="text-xs text-gray-500 group-hover:text-[#0066FF]/70">View past applications</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="relative group">
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    isActive("/services") ? "text-blue-600" : "text-neutral-600 hover:text-blue-600"
                  }`}
                >
                  Services{" "}
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="w-56 bg-white border border-gray-200 shadow-lg rounded-md overflow-hidden">
                    <div className="py-2">
                      <Link href="/services/holiday-visa">
                        <div className="flex items-center px-4 py-2 text-neutral-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                          <Globe className="mr-2 h-4 w-4 text-blue-600" />
                          <span>Holiday Visa</span>
                        </div>
                      </Link>
                      <Link href="/services/study-abroad">
                        <div className="flex items-center px-4 py-2 text-neutral-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                          <BookOpen className="mr-2 h-4 w-4 text-blue-600" />
                          <span>Study Abroad</span>
                        </div>
                      </Link>
                      <Link href="/services/work-settle">
                        <div className="flex items-center px-4 py-2 text-neutral-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                          <Briefcase className="mr-2 h-4 w-4 text-blue-600" />
                          <span>Work & Settle</span>
                        </div>
                      </Link>
                      <div className="h-px bg-gray-200 my-2"></div>
                      <Link href="/services/consultation">
                        <div className="flex items-center px-4 py-2 text-neutral-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                          <MessageSquare className="mr-2 h-4 w-4 text-blue-600" />
                          <span>Consultation Booking</span>
                        </div>
                      </Link>
                      <Link href="/services/document-verification">
                        <div className="flex items-center px-4 py-2 text-neutral-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                          <FileCheck className="mr-2 h-4 w-4 text-blue-600" />
                          <span>Document Verification</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/specials"
                className={`text-sm font-medium transition-colors ${
                  isActive("/specials") ? "text-[#0B1120]" : "text-[#0B1120]/80 hover:text-[#0B1120]"
                }`}
              >
                Specials
              </Link>

              <Link
                href="/help"
                className={`text-sm font-medium transition-colors ${
                  isActive("/help") ? "text-[#0B1120]" : "text-[#0B1120]/80 hover:text-[#0B1120]"
                }`}
              >
                Help & Support
              </Link>

              {/* Authentication buttons - visible on both mobile and desktop */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                {!isAuthenticated && (
                  <>
                    <Link href="/login" className="block w-full md:hidden">
                      <Button
                        variant="outline"
                        className="w-full bg-white/10 backdrop-blur-sm border-2 border-[#0B1120] text-[#0B1120] hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup" className="block w-full md:hidden">
                      <Button 
                        className="w-full bg-[#0B1120] text-white hover:bg-blue-600 transition-colors"
                      >
                        Sign up <span className="ml-1">→</span>
                      </Button>
                    </Link>
                  </>
                )}
                {isAuthenticated && (
                  <Button 
                    className="w-full md:hidden bg-[#0B1120] text-white hover:bg-[#0B1120]/90 transition-colors" 
                    onClick={handleLogout}
                  >
                    Log out
                  </Button>
                )}
              </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {isAuthenticated && (
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="relative focus:outline-none">
                    <Bell className="h-5 w-5 text-neutral-600 cursor-pointer" />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-600">
                      {notifications.filter((n) => !n.read).length}
                    </span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80 bg-white border border-gray-200 p-0">
                  <DropdownMenuLabel className="font-normal border-b border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-medium text-neutral-900">Notifications</h3>
                      <Link href="/notifications" className="text-xs text-blue-600 hover:underline">
                        View all
                      </Link>
                    </div>
                  </DropdownMenuLabel>
                  <div className="max-h-[300px] overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${
                          !notification.read ? "bg-blue-50" : ""
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-sm font-medium text-neutral-900">{notification.title}</h4>
                          <span className="text-xs text-neutral-600">{notification.time}</span>
                        </div>
                        <p className="text-xs text-neutral-600">{notification.message}</p>
                      </div>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          {!isAuthenticated ? (
            <div className="hidden md:flex items-center gap-3">
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="text-[#0B1120] hover:bg-blue-600 hover:text-white transition-colors px-6"
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  variant="outline"
                  className="rounded-full bg-[#0B1120] text-white hover:bg-blue-600 hover:text-white border-none transition-all px-6"
                >
                  Sign up <span className="ml-1 group-hover:translate-x-1">→</span>
                </Button>
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  className="rounded-full bg-[#0B1120]/5 text-[#0B1120] hover:bg-[#0B1120]/10 border-none transition-colors px-6"
                >
                  Dashboard
                </Button>
              </Link>
              <Button
                variant="ghost"
                className="text-[#0B1120] hover:bg-[#0B1120]/5 transition-colors px-6"
                onClick={handleLogout}
              >
                Log out
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
