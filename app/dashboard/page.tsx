"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { FileText, Calendar, BarChart, Clock, ChevronRight, MessageSquare, Upload } from "lucide-react"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex gap-6 h-full">
        {/* Main Content Area */}
        <div className="flex-1 space-y-6">
          {/* Welcome Section */}
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Francois!</h1>
            <p className="text-muted-foreground">Here's an overview of your immigration journey</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="bg-card border border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">2</div>
                    <div className="text-sm text-muted-foreground">Active Applications</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">1</div>
                    <div className="text-sm text-muted-foreground">Upcoming Sessions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <BarChart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">75%</div>
                    <div className="text-sm text-muted-foreground">Overall Progress</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Application Timeline */}
          <Card className="bg-card border border-border">
            <CardHeader className="flex flex-row items-center justify-between border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-foreground">Application Timeline</CardTitle>
              </div>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-600">
                View Details <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Document Submission - Complete */}
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-blue-600 mt-1 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-foreground">Document Submission</h4>
                      <span className="text-sm text-blue-600 font-medium">Complete</span>
                    </div>
                    <p className="text-sm text-muted-foreground">All required documents uploaded</p>
                  </div>
                </div>

                {/* Application Review - In Progress */}
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full border-2 border-blue-600 bg-background mt-1 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-foreground">Application Review</h4>
                      <span className="text-sm text-orange-600 font-medium">In Progress</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Estimated completion in 2 days</p>
                  </div>
                </div>

                {/* Interview Preparation - Upcoming */}
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full border-2 border-muted bg-background mt-1 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-foreground">Interview Preparation</h4>
                      <span className="text-sm text-muted-foreground font-medium">Upcoming</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Scheduled for next week</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 space-y-6">
          {/* Quick Actions */}
          <Card className="bg-blue-600 text-white border-none">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link href="/applications/new" className="block">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full bg-white text-blue-600 hover:bg-gray-50 justify-start"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    New Application
                  </Button>
                </Link>
                <Link href="/services/consultation" className="block">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full bg-white text-blue-600 hover:bg-gray-50 justify-start"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Book Consultation
                  </Button>
                </Link>
                <Link href="/document-verification" className="block">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full bg-white text-blue-600 hover:bg-gray-50 justify-start"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Documents
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Important Updates */}
          <Card className="border border-border">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-lg text-foreground">Important Updates</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-medium text-blue-600 mb-1">Document Review Complete</p>
                  <p className="text-xs text-muted-foreground">
                    Your documents have been verified. Next step: Schedule interview
                  </p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-sm font-medium text-orange-600 mb-1">Action Required</p>
                  <p className="text-xs text-muted-foreground">Additional proof of employment needed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
