"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import {
  Briefcase,
  FileText,
  Plane,
  MessageSquare,
  Upload,
  Clock,
  Bell,
  Calendar,
  ChevronRight,
  BarChart,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-6 lg:mb-8">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Welcome back, Francois!</h1>
              <p className="text-gray-500 text-sm lg:text-base">Here's an overview of your immigration journey</p>
            </div>
            <Link href="/notifications">
              <Button className="bg-[#0066FF] hover:bg-[#0066FF]/90 text-sm lg:text-base">
                <Bell className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">2 New Updates</span>
                <span className="sm:hidden">Updates (2)</span>
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 lg:gap-6">
            <div className="space-y-4 lg:space-y-6 xl:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Active Applications */}
                <Card className="bg-white border border-gray-200">
                  <CardContent className="p-4 lg:p-6">
                    <div className="flex items-start gap-3 lg:gap-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0066FF]/5 flex items-center justify-center flex-shrink-0">
                        <FileText className="h-5 w-5 lg:h-6 lg:w-6 text-[#0066FF]" />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">2</h3>
                        <p className="text-xs lg:text-sm text-gray-500">Active Applications</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Consultations */}
                <Card className="bg-white border border-gray-200">
                  <CardContent className="p-4 lg:p-6">
                    <div className="flex items-start gap-3 lg:gap-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0066FF]/5 flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-5 w-5 lg:h-6 lg:w-6 text-[#0066FF]" />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">1</h3>
                        <p className="text-xs lg:text-sm text-gray-500">Upcoming Sessions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Application Progress */}
                <Card className="bg-white border border-gray-200 sm:col-span-2 lg:col-span-1">
                  <CardContent className="p-4 lg:p-6">
                    <div className="flex items-start gap-3 lg:gap-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0066FF]/5 flex items-center justify-center flex-shrink-0">
                        <BarChart className="h-5 w-5 lg:h-6 lg:w-6 text-[#0066FF]" />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">75%</h3>
                        <p className="text-xs lg:text-sm text-gray-500">Overall Progress</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white border border-gray-200">
                <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-200 pb-4 lg:pb-5 space-y-3 sm:space-y-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#0066FF]/5 flex items-center justify-center">
                      <Clock className="h-4 w-4 lg:h-5 lg:w-5 text-[#0066FF]" />
                    </div>
                    <CardTitle className="text-lg lg:text-xl text-gray-900">Application Timeline</CardTitle>
                  </div>
                  <Link href="/applications/status">
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-[#0066FF] text-sm">
                      View Details <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent className="p-4 lg:p-6">
                  <div className="relative pl-6 lg:pl-8 space-y-4 lg:space-y-6">
                    <div className="absolute left-0 top-2 bottom-0 w-px bg-blue-100" />
                    {[
                      {
                        status: "completed",
                        title: "Document Submission",
                        date: "Complete",
                        desc: "All required documents uploaded",
                      },
                      {
                        status: "inProgress",
                        title: "Application Review",
                        date: "In Progress",
                        desc: "Estimated completion in 2 days",
                      },
                      {
                        status: "upcoming",
                        title: "Interview Preparation",
                        date: "Upcoming",
                        desc: "Scheduled for next week",
                      },
                    ].map((step, i) => (
                      <div key={i} className="relative">
                        <div
                          className={`absolute -left-6 lg:-left-8 p-1 lg:p-1.5 rounded-full ${
                            step.status === "completed"
                              ? "bg-[#0066FF]"
                              : step.status === "inProgress"
                                ? "bg-[#0066FF]/10 border-2 border-[#0066FF]"
                                : "bg-gray-50 border-2 border-gray-200"
                          }`}
                        />
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                            <h4 className="font-medium text-gray-900 text-sm lg:text-base">{step.title}</h4>
                            <span
                              className={`text-xs lg:text-sm ${
                                step.status === "completed"
                                  ? "text-[#0066FF]"
                                  : step.status === "inProgress"
                                    ? "text-orange-600"
                                    : "text-gray-500"
                              }`}
                            >
                              {step.date}
                            </span>
                          </div>
                          <p className="text-xs lg:text-sm text-gray-500">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4 xl:col-span-1">
              <Card className="bg-[#0066FF] text-white border-none">
                <CardContent className="p-4 lg:p-6">
                  <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">Quick Actions</h3>
                  <div className="space-y-2 lg:space-y-3">
                    <Link href="/applications/new" className="block">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full bg-white text-[#0066FF] hover:bg-white/90 text-sm"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        New Application
                      </Button>
                    </Link>
                    <Link href="/services/consultation" className="block">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full bg-white text-[#0066FF] hover:bg-white/90 text-sm"
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Book Consultation
                      </Button>
                    </Link>
                    <Link href="/document-verification" className="block">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full bg-white text-[#0066FF] hover:bg-white/90 text-sm"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Documents
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardHeader className="border-b border-gray-200 pb-3 lg:pb-4">
                  <CardTitle className="text-gray-900 text-base lg:text-lg">Important Updates</CardTitle>
                </CardHeader>
                <CardContent className="p-3 lg:p-4">
                  <div className="space-y-3 lg:space-y-4">
                    <div className="p-3 bg-[#0066FF]/5 rounded-lg border border-[#0066FF]/20">
                      <p className="text-sm font-medium text-[#0066FF]">Document Review Complete</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Your documents have been verified. Next step: Schedule interview
                      </p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <p className="text-sm font-medium text-orange-600">Action Required</p>
                      <p className="text-xs text-gray-500 mt-1">Additional proof of employment needed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-6 lg:mt-8">
            {/* Active Applications */}
            <Card className="border border-gray-200">
              <CardHeader className="border-b border-gray-200 pb-3 lg:pb-4">
                <CardTitle className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center text-gray-900">
                    <Plane className="mr-2 h-4 w-4 lg:h-5 lg:w-5 text-[#0066FF]" />
                    <span className="text-base lg:text-lg">Active Applications</span>
                  </div>
                  <Link href="/applications/status">
                    <Button variant="ghost" size="sm" className="text-[#0066FF] text-sm">
                      View All <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 lg:p-6">
                <div className="space-y-4">
                  {[
                    {
                      country: "Australia",
                      type: "Holiday Visa",
                      status: "In Progress",
                      date: "12 Apr 2023",
                      progress: 75,
                    },
                    {
                      country: "Canada",
                      type: "Study Visa",
                      status: "Document Review",
                      date: "23 Jan 2023",
                      progress: 40,
                    },
                  ].map((app, i) => (
                    <div key={i} className="p-3 lg:p-4 bg-gray-50 rounded-lg border border-gray-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 lg:p-2 bg-[#0066FF]/5 rounded-lg">
                            <Plane className="h-4 w-4 lg:h-5 lg:w-5 text-[#0066FF]" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-sm lg:text-base">{app.country}</h3>
                            <p className="text-xs lg:text-sm text-gray-500">{app.type}</p>
                          </div>
                        </div>
                        <span className="text-xs lg:text-sm text-gray-500">{app.date}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">{app.status}</span>
                          <span className="font-medium text-[#0066FF]">{app.progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#0066FF] rounded-full transition-all duration-300"
                            style={{ width: `${app.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Recommendations */}
            <Card className="border border-gray-200">
              <CardHeader className="border-b border-gray-200 pb-3 lg:pb-4">
                <CardTitle className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center text-gray-900">
                    <Briefcase className="mr-2 h-4 w-4 lg:h-5 lg:w-5 text-[#0066FF]" />
                    <span className="text-base lg:text-lg">Recommended for You</span>
                  </div>
                  <Link href="/services">
                    <Button variant="ghost" size="sm" className="text-[#0066FF] text-sm">
                      All Services <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 lg:p-6">
                <div className="space-y-3 lg:space-y-4">
                  {[
                    {
                      icon: MessageSquare,
                      title: "Visa Interview Preparation",
                      description: "One-on-one coaching session",
                      tag: "Recommended",
                      color: "text-[#0066FF] bg-[#0066FF]/5",
                    },
                    {
                      icon: Upload,
                      title: "Express Document Verification",
                      description: "24-hour turnaround time",
                      tag: "Popular",
                      color: "text-[#0066FF] bg-[#0066FF]/5",
                    },
                    {
                      icon: FileText,
                      title: "Immigration Assessment",
                      description: "Personalized evaluation report",
                      tag: "New",
                      color: "text-[#0066FF] bg-[#0066FF]/5",
                    },
                  ].map((service, i) => (
                    <Link
                      href={
                        i === 0 ? "/services/consultation" : i === 1 ? "/document-verification" : "/applications/new"
                      }
                      key={i}
                      className="block"
                    >
                      <div className="p-3 lg:p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#0066FF]/30 hover:bg-[#0066FF]/5 transition-all group">
                        <div className="flex items-start gap-3 lg:gap-4">
                          <div className="p-1.5 lg:p-2 bg-white rounded-lg border border-gray-200 flex-shrink-0">
                            <service.icon className="h-4 w-4 lg:h-5 lg:w-5 text-[#0066FF]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-1 gap-2">
                              <h3 className="font-medium text-gray-900 group-hover:text-[#0066FF] transition-colors text-sm lg:text-base truncate">
                                {service.title}
                              </h3>
                              <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex-shrink-0">
                                {service.tag}
                              </span>
                            </div>
                            <p className="text-xs lg:text-sm text-gray-500">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
