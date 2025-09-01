"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  FileText,
  Home,
  Settings,
  MessageSquare,
  Briefcase,
  Globe,
  BookOpen,
  Upload,
  Clock,
  HelpCircle,
  ChevronRight,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardSidebar({ className, ...props }: SidebarProps) {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <Sidebar className={cn("border-r bg-white w-[280px]", className)} {...props}>
      <SidebarHeader className="border-b px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-blue-50 flex items-center justify-center">
            <FileText className="h-5 w-5 text-blue-600" />
          </div>
          <span className="font-semibold text-gray-900">Immi Insightive</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-6">
        <div className="space-y-6">
          {/* Main Navigation */}
          <div className="space-y-1">
            <Link
              href="/dashboard"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive("/dashboard")
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
          </div>

          {/* Services Section */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Services
            </div>
            <div className="space-y-1">
              <Link
                href="/services/holiday-visa"
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive("/services/holiday-visa")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Globe className="h-4 w-4" />
                Holiday Visa
              </Link>
              <Link
                href="/services/study-abroad"
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive("/services/study-abroad")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <BookOpen className="h-4 w-4" />
                Study Abroad
              </Link>
              <Link
                href="/services/work-settle"
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive("/services/work-settle")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Briefcase className="h-4 w-4" />
                Work & Settle
              </Link>
              <Link
                href="/services/consultation"
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive("/services/consultation")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <MessageSquare className="h-4 w-4" />
                Consultation
              </Link>
            </div>
          </div>

          {/* Quick Actions Section */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Quick Actions
            </div>
            <div className="space-y-1">
              <Link
                href="/applications/new"
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive("/applications/new")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Upload className="h-4 w-4" />
                New Application
              </Link>
              <Link
                href="/applications/history"
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive("/applications/history")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Clock className="h-4 w-4" />
                Application History
              </Link>
            </div>
          </div>
        </div>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="space-y-3">
          <Link
            href="/help"
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              isActive("/help")
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )}
          >
            <HelpCircle className="h-4 w-4" />
            Help & Support
          </Link>
          <Link
            href="/profile/settings"
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              isActive("/profile/settings")
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )}
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
          <Separator />
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-red-600 hover:bg-red-50 hover:text-red-700"
            onClick={() => {
              document.cookie = "auth_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
              window.location.href = "/login"
            }}
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
