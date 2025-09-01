"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "./auth-provider"
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
  X,
  Home
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
import { cn } from "@/lib/utils"

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const { isAuthenticated, logout } = useAuth()

  const handleLogout = () => {
    logout()
    window.location.href = "/"
  }

  const isActive = (path: string) => pathname === path

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
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tighter text-[#0B1120]">
                Immi Insightive
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors",
                isActive("/")
                  ? "text-[#0B1120]"
                  : "text-[#0B1120]/70 hover:text-[#0B1120]"
              )}
            >
              Home
            </Link>

            {isAuthenticated && (
              <>

                {/* Services Dropdown */}
                <div className="relative group">
                  <button className="flex items-center gap-1 text-sm font-medium text-[#0B1120]/70 hover:text-[#0B1120] transition-colors">
                    Services
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <Link href="/services/holiday-visa">
                        <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          <Globe className="mr-2 h-4 w-4" />
                          Holiday Visa
                        </div>
                      </Link>
                      <Link href="/services/study-abroad">
                        <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Study Abroad
                        </div>
                      </Link>
                      <Link href="/services/work-settle">
                        <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          <Briefcase className="mr-2 h-4 w-4" />
                          Work & Settle
                        </div>
                      </Link>
                      <div className="border-t border-gray-100 my-2" />
                      <Link href="/services/consultation">
                        <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Book Consultation
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </nav>

          {/* Right Section - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                {/* Notifications */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="relative hover:text-[#0B1120]">
                      <Bell className="h-5 w-5 text-gray-600" />
                      {notifications.some(n => !n.read) && (
                        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-medium text-white">
                          {notifications.filter(n => !n.read).length}
                        </span>
                      )}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <DropdownMenuLabel className="flex items-center justify-between">
                      <span>Notifications</span>
                      <Link href="/notifications" className="text-xs text-blue-600 hover:underline">
                        View all
                      </Link>
                    </DropdownMenuLabel>
                    <div className="max-h-[300px] overflow-y-auto">
                      {notifications.map(notification => (
                        <div
                          key={notification.id}
                          className={cn(
                            "p-3 hover:bg-gray-50",
                            !notification.read && "bg-blue-50"
                          )}
                        >
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{notification.title}</span>
                            <span className="text-gray-500 text-xs">{notification.time}</span>
                          </div>
                          <p className="text-gray-600 text-xs mt-1">{notification.message}</p>
                        </div>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#0B1120]">
                      <User className="h-5 w-5" />
                      <span>Account</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link href="/profile" className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/profile/settings" className="cursor-pointer">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/login">
                  <Button variant="ghost" className="text-[#0B1120] hover:bg-[#0B1120]/5">
                    Log in
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-[#0B1120] text-white hover:bg-[#0B1120]/90">
                    Sign up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/75">
            <div className="fixed inset-x-0 top-16 p-4">
              <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="space-y-4">
                    <Link
                      href="/"
                      className="flex items-center text-base font-medium text-gray-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Home className="mr-4 h-6 w-6 text-blue-600" />
                      Home
                    </Link>

                    {isAuthenticated && (
                      <>
                        <div className="space-y-4">
                          <p className="px-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                            Services
                          </p>
                          <div className="grid gap-y-4 pl-2">
                            <Link
                              href="/services/holiday-visa"
                              className="flex items-center text-base text-gray-900"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <Globe className="mr-4 h-5 w-5 text-blue-600" />
                              Holiday Visa
                            </Link>
                            <Link
                              href="/services/study-abroad"
                              className="flex items-center text-base text-gray-900"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <BookOpen className="mr-4 h-5 w-5 text-blue-600" />
                              Study Abroad
                            </Link>
                            <Link
                              href="/services/work-settle"
                              className="flex items-center text-base text-gray-900"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <Briefcase className="mr-4 h-5 w-5 text-blue-600" />
                              Work & Settle
                            </Link>
                            <Link
                              href="/services/consultation"
                              className="flex items-center text-base text-gray-900"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <MessageSquare className="mr-4 h-5 w-5 text-blue-600" />
                              Book Consultation
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    {isAuthenticated ? (
                      <div className="grid gap-4">
                        <Link
                          href="/profile"
                          className="flex items-center text-base text-gray-900"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <User className="mr-4 h-5 w-5 text-blue-600" />
                          Profile
                        </Link>
                        <Link
                          href="/profile/settings"
                          className="flex items-center text-base text-gray-900"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Settings className="mr-4 h-5 w-5 text-blue-600" />
                          Settings
                        </Link>
                        <button
                          onClick={() => {
                            handleLogout()
                            setIsMenuOpen(false)
                          }}
                          className="flex items-center text-base text-red-600"
                        >
                          <LogOut className="mr-4 h-5 w-5" />
                          Log out
                        </button>
                      </div>
                    ) : (
                      <div className="grid gap-4">
                        <Link
                          href="/login"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Button
                            variant="outline"
                            className="w-full border-2 border-[#0B1120] text-[#0B1120] hover:bg-[#0B1120] hover:text-white"
                          >
                            Log in
                          </Button>
                        </Link>
                        <Link
                          href="/signup"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Button className="w-full bg-[#0B1120] text-white hover:bg-[#0B1120]/90">
                            Sign up
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
