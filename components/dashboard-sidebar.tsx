"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Users,
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
  CreditCard,
  ChevronRight,
  Bell,
  LogOut,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export function DashboardSidebar({ className, ...props }: React.ComponentProps<typeof Sidebar>) {
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
    <Sidebar variant="inset" {...props} className="[&_*]:!bg-white [&_*]:!text-gray-600 [&_svg]:!text-[#0066FF] [&_svg.lucide]:!text-[#0066FF] [&_svg.lucide]:!stroke-[#0066FF] [&_svg.lucide]:!fill-none">
      <SidebarHeader className="space-y-2">
        <div className="px-4 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <SidebarInput
              type="search"
              placeholder="Quick search..."
              className="pl-9 w-full !bg-gray-50/80 border-gray-200 !text-gray-900 placeholder:!text-gray-400 focus-visible:ring-[#0066FF] focus-visible:border-[#0066FF] text-sm rounded-lg"
            />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="!text-gray-500 font-medium px-2 text-xs uppercase tracking-wider">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard")}>
                  <Link href="/dashboard" className="group flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#0066FF]/5">
                    <div className="bg-[#0066FF]/10 p-2 rounded-lg">
                      <Home className="h-4 w-4 text-[#0066FF]" />
                    </div>
                    <span className="!text-gray-900 font-medium">Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/applications/status")}>
                  <Link href="/applications/status" className="group flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#0066FF]/5">
                    <div className="bg-[#0066FF]/10 p-2 rounded-lg">
                      <FileText className="h-4 w-4 text-[#0066FF]" />
                    </div>
                    <span className="text-gray-700 group-hover:text-[#0066FF]">Application Status</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/profile")}>
                  <Link href="/profile" className="group flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#0066FF]/5">
                    <div className="bg-[#0066FF]/10 p-2 rounded-lg">
                      <Users className="h-4 w-4 text-[#0066FF]" />
                    </div>
                    <span className="text-gray-700 group-hover:text-[#0066FF]">My Profile</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/applications/new")}>
                  <Link href="/applications/new" className="group flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#0066FF]/5">
                    <div className="bg-[#0066FF]/10 p-2 rounded-lg">
                      <FileText className="h-4 w-4 text-[#0066FF]" />
                    </div>
                    <span className="text-gray-700 group-hover:text-[#0066FF]">New Application</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/notifications")}>
                  <Link href="/notifications" className="group flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#0066FF]/5">
                    <div className="bg-[#0066FF]/10 p-2 rounded-lg">
                      <Bell className="h-4 w-4 text-[#0066FF]" />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-gray-700 group-hover:text-[#0066FF]">Notifications</span>
                      <span className="bg-[#0066FF] text-white text-xs rounded-full px-2 py-1 font-medium">3</span>
                    </div>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <Collapsible
          open={openGroups.services}
          onOpenChange={() => toggleGroup("services")}
          className="group/collapsible"
        >
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center justify-between px-2 py-1">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">Services</span>
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive("/services/holiday-visa")}>
                      <Link href="/services/holiday-visa" className="group flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#0066FF]/5">
                        <div className="bg-[#0066FF]/10 p-2 rounded-lg">
                          <Globe className="h-4 w-4 text-[#0066FF]" />
                        </div>
                        <span className="text-gray-700 group-hover:text-[#0066FF]">Holiday Visa</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive("/services/study-abroad")}>
                      <Link href="/services/study-abroad" className="group flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#0066FF]/5">
                        <div className="bg-[#0066FF]/10 p-2 rounded-lg">
                          <BookOpen className="h-4 w-4 text-[#0066FF]" />
                        </div>
                        <span className="text-gray-700 group-hover:text-[#0066FF]">Study Abroad</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive("/services/work-settle")}>
                      <Link href="/services/work-settle" className="group flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#0066FF]/5">
                        <div className="bg-[#0066FF]/10 p-2 rounded-lg">
                          <Briefcase className="h-4 w-4 text-[#0066FF]" />
                        </div>
                        <span className="text-gray-700 group-hover:text-[#0066FF]">Work & Settle</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <SidebarSeparator />

        <Collapsible
          open={openGroups.quickActions}
          onOpenChange={() => toggleGroup("quickActions")}
          className="group/collapsible"
        >
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                <span>Quick Actions</span>
                <ChevronRight className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive("/document-verification")}>
                      <Link href="/document-verification" className="group">
                        <Upload className="mr-2 h-4 w-4 text-[#0066FF]" />
                        <span className="text-gray-900 group-hover:text-[#0066FF]">Upload Documents</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive("/services/consultation")}>
                      <Link href="/services/consultation" className="group">
                        <MessageSquare className="mr-2 h-4 w-4 text-[#0066FF]" />
                        <span className="text-gray-900 group-hover:text-[#0066FF]">Book Consultation</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive("/document-reminders")}>
                      <Link href="/document-reminders" className="group">
                        <Clock className="mr-2 h-4 w-4 text-[#0066FF]" />
                        <span className="text-gray-900 group-hover:text-[#0066FF]">Document Reminders</span>
                        <span className="ml-auto bg-[#0066FF] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive("/payments")}>
                      <Link href="/payments" className="group">
                        <CreditCard className="mr-2 h-4 w-4 text-[#0066FF]" />
                        <span className="text-gray-900 group-hover:text-[#0066FF]">Payments</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>

      <SidebarFooter className="px-2 pb-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/profile/settings")}>
              <Link href="/profile/settings" className="group flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#0066FF]/5">
                <div className="bg-[#0066FF]/10 p-2 rounded-lg">
                  <Settings className="h-4 w-4 text-[#0066FF]" />
                </div>
                <span className="text-gray-700 group-hover:text-[#0066FF]">Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/help")}>
              <Link href="/help" className="group flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#0066FF]/5">
                <div className="bg-[#0066FF]/10 p-2 rounded-lg">
                  <HelpCircle className="h-4 w-4 text-[#0066FF]" />
                </div>
                <span className="text-gray-700 group-hover:text-[#0066FF]">Help & Support</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              onClick={() => {
                document.cookie = "auth_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
                window.location.href = "/"
              }}
            >
              <button className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-red-50 group">
                <div className="bg-red-100 p-2 rounded-lg group-hover:bg-red-100">
                  <LogOut className="h-4 w-4 text-red-600" />
                </div>
                <span className="text-gray-700 group-hover:text-red-600">Log Out</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
