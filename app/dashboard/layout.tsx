"use client"

import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { AuthCheck } from "@/components/auth-check"
import { 
  Sidebar,
  SidebarContent,
  SidebarProvider 
} from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthCheck>
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen">
          <Sidebar>
            <SidebarContent>
              <DashboardSidebar className="hidden lg:flex" />
            </SidebarContent>
          </Sidebar>
          <main className="flex-1 overflow-x-hidden">{children}</main>
        </div>
      </SidebarProvider>
    </AuthCheck>
  )
}
