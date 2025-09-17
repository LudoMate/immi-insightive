"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  FileText,
  MessageSquare,
  Briefcase,
  Globe,
  BookOpen,
  Upload,
  Clock,
  HelpCircle,
  Search,
  CreditCard,
  ChevronDown,
  Bell,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"

export function DashboardSidebar({ className, ...props }: React.ComponentProps<"div">) {
  const pathname = usePathname()
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    services: true,
    quickActions: true,
  })

  const toggleGroup = (group: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }))
  }

  const isActive = (path: string) => pathname === path

  return (
    <div className={`bg-white border-r border-gray-200 h-full flex flex-col ${className}`} {...props}>
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">FM</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-medium text-gray-900 text-sm">Francoi Mercer</div>
            <div className="text-xs text-blue-600 font-medium">Premium</div>
            <div className="text-xs text-gray-500 truncate">xyz@g...</div>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Quick search..."
            className="pl-9 w-full bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus-visible:ring-blue-500 focus-visible:border-blue-500 text-sm rounded-lg h-9"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-3 py-2 overflow-y-auto">
        {/* Main Navigation */}
        <div className="space-y-1 mb-6">
          <Link
            href="/applications/new"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              isActive("/applications/new")
                ? "bg-blue-100 text-blue-700"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <FileText className="h-4 w-4" />
            <span className="font-medium">New Application</span>
          </Link>
          <Link
            href="/notifications"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              isActive("/notifications")
                ? "bg-blue-100 text-blue-700"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <Bell className="h-4 w-4" />
            <div className="flex-1 flex items-center justify-between">
              <span className="font-medium">Notifications</span>
              <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5 font-medium">3</span>
            </div>
          </Link>
        </div>

        {/* Services Section */}
        <Collapsible
          open={openGroups.services}
          onOpenChange={() => toggleGroup("services")}
          className="group/collapsible mb-6"
        >
          <CollapsibleTrigger className="flex w-full items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-gray-700">
            <span>SERVICES</span>
            <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="space-y-1 mt-2">
              <Link
                href="/services/holiday-visa"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive("/services/holiday-visa")
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <Globe className="h-4 w-4" />
                <span>Holiday Visa</span>
              </Link>
              <Link
                href="/services/study-abroad"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive("/services/study-abroad")
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <BookOpen className="h-4 w-4" />
                <span>Study Abroad</span>
              </Link>
              <Link
                href="/services/work-settle"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive("/services/work-settle")
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <Briefcase className="h-4 w-4" />
                <span>Work & Settle</span>
              </Link>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Quick Actions Section */}
        <Collapsible
          open={openGroups.quickActions}
          onOpenChange={() => toggleGroup("quickActions")}
          className="group/collapsible"
        >
          <CollapsibleTrigger className="flex w-full items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-gray-700">
            <span>Quick Actions</span>
            <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="space-y-1 mt-2">
              <Link
                href="/document-verification"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive("/document-verification")
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <Upload className="h-4 w-4" />
                <span>Upload Documents</span>
              </Link>
              <Link
                href="/services/consultation"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive("/services/consultation")
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <MessageSquare className="h-4 w-4" />
                <span>Book Consultation</span>
              </Link>
              <Link
                href="/document-reminders"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive("/document-reminders")
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <Clock className="h-4 w-4" />
                <div className="flex-1 flex items-center justify-between">
                  <span>Document Reminders</span>
                  <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5 font-medium">2</span>
                </div>
              </Link>
              <Link
                href="/payments"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive("/payments")
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <CreditCard className="h-4 w-4" />
                <span>Payments</span>
              </Link>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Footer */}
      <div className="px-3 pb-4 border-t border-gray-100 pt-4">
        <div className="space-y-1">
          <Link
            href="/profile/settings"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              isActive("/profile/settings")
                ? "bg-blue-100 text-blue-700"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-medium">N</span>
            </div>
            <span>Settings</span>
          </Link>
          <Link
            href="/help"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              isActive("/help") ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <HelpCircle className="h-4 w-4" />
            <span>Help & Support</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
