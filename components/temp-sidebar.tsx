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
  Search,
  ChevronRight,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardSidebar({ className, ...props }: SidebarProps) {
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
    <div className="w-[280px] fixed inset-y-0 left-0 bg-white border-r border-[#E5E7EB] overflow-y-auto">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 p-4 border-b border-[#E5E7EB]">
          <div className="w-8 h-8 bg-[#0066FF]/5 rounded flex items-center justify-center">
            <FileText className="h-5 w-5 text-[#0066FF]" />
          </div>
          <span className="font-semibold text-[#0B1120]">Immi Insightive</span>
        </div>

        <div className="p-4 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-[#E5E7EB]">
            <Avatar className="h-10 w-10 border-2 border-[#0066FF]/10">
              <AvatarImage src="/placeholder-user.jpg" alt="Francois Mercer" className="object-cover" />
              <AvatarFallback className="bg-[#0066FF] text-white">FM</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium text-[#0B1120]">Francois Mercer</p>
              <p className="text-xs text-[#0B1120]/60 truncate">xyz@gmail.com</p>
            </div>
            <Badge className="bg-[#0066FF] text-white text-xs">Premium</Badge>
          </div>

          <div className="mt-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1120]/40" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full pl-9 py-2 rounded-md bg-white border border-[#E5E7EB] text-[#0B1120] placeholder-[#0B1120]/40 focus:ring-1 focus:ring-[#0066FF] focus:border-[#0066FF] outline-none"
              />
            </div>
          </div>
        </div>

        <nav className="flex-1 py-4">
          <div className="px-4">
            <div className="text-xs font-medium text-[#0B1120]/40 px-2 mb-2">Navigation</div>
            <div className="space-y-1">
              <Link 
                href="/dashboard" 
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive("/dashboard") 
                    ? "bg-[#0066FF]/5 text-[#0066FF]" 
                    : "text-[#0B1120] hover:bg-[#0066FF]/5 hover:text-[#0066FF]"
                }`}
              >
                <Home className="h-4 w-4 text-[#0066FF]" />
                <span className="text-sm">Dashboard</span>
              </Link>

              <div className="mt-6">
                <div 
                  className="flex items-center justify-between px-3 py-2 text-sm text-[#0B1120] cursor-pointer hover:text-[#0066FF]"
                  onClick={() => toggleGroup("services")}
                >
                  <span className="font-medium">Services</span>
                  <ChevronRight className={`h-4 w-4 transition-transform ${openGroups.services ? "rotate-90" : ""}`} />
                </div>
                {openGroups.services && (
                  <div className="mt-1 ml-2 space-y-1">
                    <Link 
                      href="/services/holiday-visa"
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        isActive("/services/holiday-visa") 
                          ? "bg-[#0066FF]/5 text-[#0066FF]" 
                          : "text-[#0B1120] hover:bg-[#0066FF]/5 hover:text-[#0066FF]"
                      }`}
                    >
                      <Globe className="h-4 w-4 text-[#0066FF]" />
                      <span className="text-sm">Holiday Visa</span>
                    </Link>
                    <Link 
                      href="/services/study-abroad"
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        isActive("/services/study-abroad") 
                          ? "bg-[#0066FF]/5 text-[#0066FF]" 
                          : "text-[#0B1120] hover:bg-[#0066FF]/5 hover:text-[#0066FF]"
                      }`}
                    >
                      <BookOpen className="h-4 w-4 text-[#0066FF]" />
                      <span className="text-sm">Study Abroad</span>
                    </Link>
                    <Link 
                      href="/services/work-settle"
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        isActive("/services/work-settle") 
                          ? "bg-[#0066FF]/5 text-[#0066FF]" 
                          : "text-[#0B1120] hover:bg-[#0066FF]/5 hover:text-[#0066FF]"
                      }`}
                    >
                      <Briefcase className="h-4 w-4 text-[#0066FF]" />
                      <span className="text-sm">Work & Settle</span>
                    </Link>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <div 
                  className="flex items-center justify-between px-3 py-2 text-sm text-[#0B1120] cursor-pointer hover:text-[#0066FF]"
                  onClick={() => toggleGroup("quickActions")}
                >
                  <span className="font-medium">Quick Actions</span>
                  <ChevronRight className={`h-4 w-4 transition-transform ${openGroups.quickActions ? "rotate-90" : ""}`} />
                </div>
                {openGroups.quickActions && (
                  <div className="mt-1 ml-2 space-y-1">
                    <Link 
                      href="/upload-documents"
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        isActive("/upload-documents") 
                          ? "bg-[#0066FF]/5 text-[#0066FF]" 
                          : "text-[#0B1120] hover:bg-[#0066FF]/5 hover:text-[#0066FF]"
                      }`}
                    >
                      <Upload className="h-4 w-4 text-[#0066FF]" />
                      <span className="text-sm">Upload Documents</span>
                    </Link>
                    <Link 
                      href="/consultation-booking"
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        isActive("/consultation-booking") 
                          ? "bg-[#0066FF]/5 text-[#0066FF]" 
                          : "text-[#0B1120] hover:bg-[#0066FF]/5 hover:text-[#0066FF]"
                      }`}
                    >
                      <MessageSquare className="h-4 w-4 text-[#0066FF]" />
                      <span className="text-sm">Book Consultation</span>
                    </Link>
                    <Link 
                      href="/document-reminders"
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        isActive("/document-reminders") 
                          ? "bg-[#0066FF]/5 text-[#0066FF]" 
                          : "text-[#0B1120] hover:bg-[#0066FF]/5 hover:text-[#0066FF]"
                      }`}
                    >
                      <Clock className="h-4 w-4 text-[#0066FF]" />
                      <span className="text-sm">Document Reminders</span>
                      <Badge className="ml-auto bg-[#0066FF] text-white text-xs">2</Badge>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>

        <div className="mt-auto p-4 border-t border-[#E5E7EB]">
          <Link 
            href="/help" 
            className="flex items-center gap-3 px-3 py-2 rounded-md text-[#0B1120] hover:bg-[#0066FF]/5 hover:text-[#0066FF] transition-colors"
          >
            <HelpCircle className="h-4 w-4 text-[#0066FF]" />
            <span className="text-sm">Help & Support</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
