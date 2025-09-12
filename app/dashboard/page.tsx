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
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  Bell,
  Calendar,
  ChevronRight,
  BarChart,
} from "lucide-react"

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="w-full">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                Welcome back, Francois!
              </h1>
              <p className="text-base md:text-lg text-gray-600">Here's an overview of your immigration journey</p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto lg:shrink-0">
              <Link href="/document-reminders" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="bg-white w-full sm:w-auto text-sm h-10 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors"
                >
                  <Bell className="h-4 w-4 mr-2" />
                  <span className="hidden lg:inline">2 Document Reminders</span>
                  <span className="lg:hidden">2 Reminders</span>
                </Button>
              </Link>
              <Link href="/notifications" className="w-full sm:w-auto">
                <Button className="bg-[#0066FF] hover:bg-[#0066FF]/90 w-full sm:w-auto text-sm h-10 shadow-sm transition-colors">
                  <Bell className="h-4 w-4 mr-2" />
                  <span className="hidden lg:inline">3 New Updates</span>
                  <span className="lg:hidden">3 Updates</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Main Content - Left Column */}
            <div className="xl:col-span-2 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-white shadow-sm border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#0066FF]/10 flex items-center justify-center">
                        <FileText className="h-6 w-6 md:h-7 md:w-7 text-[#0066FF]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-500 mb-1">Active Applications</p>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">2</h3>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link
                        href="/applications/status"
                        className="text-sm text-[#0066FF] hover:text-[#0066FF]/80 font-medium flex items-center transition-colors"
                      >
                        View details <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-sm border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#0066FF]/10 flex items-center justify-center">
                        <Calendar className="h-6 w-6 md:h-7 md:w-7 text-[#0066FF]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-500 mb-1">Upcoming Sessions</p>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">1</h3>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link
                        href="/consultations"
                        className="text-sm text-[#0066FF] hover:text-[#0066FF]/80 font-medium flex items-center transition-colors"
                      >
                        View schedule <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-sm border-gray-200 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#0066FF]/10 flex items-center justify-center">
                        <BarChart className="h-6 w-6 md:h-7 md:w-7 text-[#0066FF]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-500 mb-1">Overall Progress</p>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">75%</h3>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-2.5 bg-[#0066FF] rounded-full transition-all duration-500"
                          style={{ width: "75%" }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline and Active Applications */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Application Timeline */}
                <Card className="bg-white shadow-sm border-gray-200 hover:shadow-md transition-shadow">
                  <CardHeader className="border-b p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center">
                          <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-[#0066FF]" />
                        </div>
                        <div>
                          <CardTitle className="text-base sm:text-lg text-gray-900">Timeline</CardTitle>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1">Recent activities</p>
                        </div>
                      </div>
                      <Link href="/applications/status">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#0066FF] hover:bg-[#0066FF]/10 text-sm sm:text-sm"
                        >
                          <span className="hidden sm:inline">View All</span>
                          <span className="sm:hidden">All</span>
                          <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="relative pl-8 sm:pl-10 space-y-4 sm:space-y-6">
                      <div className="absolute left-0 top-2 bottom-0 w-px bg-[#0066FF]/10" />
                      {[
                        {
                          status: "completed",
                          title: "Document Submission",
                          date: "2 hours ago",
                          desc: "All required documents uploaded",
                          icon: CheckCircle2,
                          iconColor: "text-green-500",
                        },
                        {
                          status: "inProgress",
                          title: "Application Review",
                          date: "In Progress",
                          desc: "Estimated completion in 2 days",
                          icon: Clock,
                          iconColor: "text-[#0066FF]",
                        },
                        {
                          status: "upcoming",
                          title: "Interview Preparation",
                          date: "Upcoming",
                          desc: "Scheduled for next week",
                          icon: AlertCircle,
                          iconColor: "text-gray-400",
                        },
                      ].map((step, i) => (
                        <div key={i} className="relative group">
                          <div
                            className={`absolute -left-8 sm:-left-10 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white border-2 ${
                              step.status === "completed"
                                ? "border-green-500"
                                : step.status === "inProgress"
                                  ? "border-[#0066FF]"
                                  : "border-gray-300"
                            } flex items-center justify-center`}
                          >
                            <step.icon className={`h-2 w-2 sm:h-3 sm:w-3 ${step.iconColor}`} />
                          </div>
                          <div className="group-hover:bg-gray-50 rounded-lg p-2 sm:p-3 -mx-2 sm:-mx-3 transition-colors">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium text-gray-900 text-sm sm:text-base">{step.title}</h4>
                              <span className="text-xs text-gray-500">{step.date}</span>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-600">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Active Applications Panel */}
                <Card className="bg-white shadow-sm border-gray-200 hover:shadow-md transition-shadow">
                  <CardHeader className="border-b p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center">
                          <Plane className="h-4 w-4 sm:h-5 sm:w-5 text-[#0066FF]" />
                        </div>
                        <div>
                          <CardTitle className="text-base sm:text-lg text-gray-900">Active Applications</CardTitle>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1">Your ongoing applications</p>
                        </div>
                      </div>
                      <Link href="/applications/status">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#0066FF] hover:bg-[#0066FF]/10 text-sm sm:text-sm"
                        >
                          <span className="hidden sm:inline">View All</span>
                          <span className="sm:hidden">All</span>
                          <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {[
                        { country: "Australia", type: "Holiday Visa", status: "In Progress", progress: 75 },
                        { country: "Canada", type: "Study Visa", status: "Document Review", progress: 40 },
                      ].map((app, i) => (
                        <div
                          key={i}
                          className="group p-4 sm:p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#0066FF]/30 hover:bg-[#0066FF]/5 transition-all"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="p-2 sm:p-3 bg-white rounded-lg">
                                <Plane className="h-4 w-4 sm:h-5 sm:w-5 text-[#0066FF]" />
                              </div>
                              <div>
                                <h3 className="font-medium text-gray-900 text-sm sm:text-base">{app.country}</h3>
                                <p className="text-xs sm:text-sm text-gray-500">{app.type}</p>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="opacity-0 group-hover:opacity-100 transition-opacity text-xs sm:text-sm shrink-0"
                            >
                              <span className="hidden sm:inline">View Details</span>
                              <span className="sm:hidden">View</span>
                              <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                            </Button>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-xs sm:text-sm">
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
              </div>

              {/* Recommendations & Services */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Service Recommendations */}
                <Card className="bg-white shadow-sm border-gray-200 hover:shadow-md transition-shadow">
                  <CardHeader className="border-b p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center">
                          <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-[#0066FF]" />
                        </div>
                        <div>
                          <CardTitle className="text-base sm:text-lg text-gray-900">Recommended</CardTitle>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1">Services for you</p>
                        </div>
                      </div>
                      <Link href="/services">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#0066FF] hover:bg-[#0066FF]/10 text-xs sm:text-sm"
                        >
                          <span className="hidden sm:inline">View All</span>
                          <span className="sm:hidden">All</span>
                          <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {[
                        {
                          icon: MessageSquare,
                          title: "Visa Interview Preparation",
                          description: "One-on-one coaching session",
                          tag: "Recommended",
                          href: "/services/consultation",
                        },
                        {
                          icon: Upload,
                          title: "Express Document Verification",
                          description: "24-hour turnaround time",
                          tag: "Popular",
                          href: "/document-verification",
                        },
                        {
                          icon: FileText,
                          title: "Immigration Assessment",
                          description: "Personalized evaluation report",
                          tag: "New",
                          href: "/applications/new",
                        },
                      ].map((service, i) => (
                        <Link href={service.href} key={i} className="block">
                          <div className="group p-4 sm:p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#0066FF]/30 hover:bg-[#0066FF]/5 transition-all">
                            <div className="flex items-start gap-4 sm:gap-5">
                              <div className="p-2 sm:p-3 bg-white rounded-lg border border-gray-200">
                                <service.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#0066FF]" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                  <h3 className="font-medium text-gray-900 group-hover:text-[#0066FF] transition-colors text-sm sm:text-base truncate">
                                    {service.title}
                                  </h3>
                                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF] ml-2 shrink-0">
                                    {service.tag}
                                  </span>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-500">{service.description}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions & Updates */}
                <div className="space-y-8">
                  {/* Quick Actions */}
                  <Card className="bg-[#0066FF]">
                    <CardContent className="p-6">
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-4">Quick Actions</h3>
                      <div className="space-y-3">
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

                  {/* Important Updates */}
                  <Card className="bg-white shadow-sm border-gray-200 hover:shadow-md transition-shadow">
                    <CardHeader className="border-b p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center">
                            <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-[#0066FF]" />
                          </div>
                          <div>
                            <CardTitle className="text-base sm:text-lg text-gray-900">Updates</CardTitle>
                            <p className="text-xs sm:text-sm text-gray-500 mt-1">Recent notifications</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        <div className="p-4 sm:p-5 bg-green-50 rounded-lg border border-green-100">
                          <div className="flex items-start gap-4">
                            <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 shrink-0" />
                            <div className="min-w-0">
                              <p className="text-xs sm:text-sm font-medium text-green-800">Document Review Complete</p>
                              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                                Your documents have been verified. Next step: Schedule interview
                              </p>
                              <p className="text-xs text-gray-500 mt-2">2 hours ago</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 sm:p-5 bg-orange-50 rounded-lg border border-orange-100">
                          <div className="flex items-start gap-4">
                            <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mt-0.5 shrink-0" />
                            <div className="min-w-0">
                              <p className="text-xs sm:text-sm font-medium text-orange-800">Action Required</p>
                              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                                Additional proof of employment needed
                              </p>
                              <p className="text-xs text-gray-500 mt-2">1 day ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Service Timeline */}
              <Card className="bg-white shadow-sm border-gray-200 hover:shadow-md transition-shadow">
                <CardHeader className="border-b p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-[#0066FF]" />
                      </div>
                      <div>
                        <CardTitle className="text-base sm:text-lg text-gray-900">Service Timeline</CardTitle>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">Upcoming sessions</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      {
                        title: "Interview Prep Session",
                        date: "Tomorrow, 10:00 AM",
                        type: "Consultation",
                        icon: MessageSquare,
                      },
                      {
                        title: "Document Review",
                        date: "Feb 15, 2:30 PM",
                        type: "Verification",
                        icon: FileText,
                      },
                    ].map((session, i) => (
                      <div
                        key={i}
                        className="group p-4 sm:p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#0066FF]/30 hover:bg-[#0066FF]/5 transition-all"
                      >
                        <div className="flex items-start gap-4 sm:gap-5">
                          <div className="p-2 sm:p-3 bg-white rounded-lg border border-gray-200">
                            <session.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#0066FF]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-gray-900 group-hover:text-[#0066FF] transition-colors text-sm sm:text-base">
                              {session.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-500 mt-1">{session.date}</p>
                            <span className="inline-block mt-2 text-xs font-medium px-2 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF]">
                              {session.type}
                            </span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-xs sm:text-sm shrink-0"
                          >
                            Join <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default DashboardPage
