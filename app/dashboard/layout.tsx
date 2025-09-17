"use client"

import type React from "react"

import { AuthCheck } from "@/components/auth-check"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthCheck>
      <div className="min-h-screen bg-gray-50">{children}</div>
    </AuthCheck>
  )
}
