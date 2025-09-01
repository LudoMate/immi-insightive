"use client"

import { useState } from "react"
import { Search, Filter, Download, Eye, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function ApplicationStatusPage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Application Status</h1>
          <p className="text-gray-500">Track the progress of your visa applications in real-time</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search applications..."
              className="pl-10 rounded-lg bg-white border-gray-200 w-full text-gray-900 placeholder:text-gray-400 focus:border-[#0066FF] focus:ring-[#0066FF]"
            />
          </div>
          <Button variant="outline" className="bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:text-[#0066FF] hover:border-[#0066FF] min-w-[100px]">
            <Filter className="h-4 w-4 mr-2" /> Filter
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="bg-white rounded-t-lg border border-gray-200 p-4">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-gray-100/80">
              <TabsTrigger
                value="all"
                className="text-gray-600 data-[state=active]:bg-[#0066FF] data-[state=active]:text-white"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="active"
                className="text-gray-600 data-[state=active]:bg-[#0066FF] data-[state=active]:text-white"
              >
                Active
              </TabsTrigger>
              <TabsTrigger
                value="completed"
                className="text-gray-600 data-[state=active]:bg-[#0066FF] data-[state=active]:text-white"
              >
                Completed
              </TabsTrigger>
            </TabsList>
          </div>

          <Card className="border-none rounded-t-none shadow-sm bg-white border-x border-b border-gray-200">
            <CardContent className="p-6">
              <TabsContent value="all" className="mt-0">
                <div className="space-y-4">
                  {[
                    {
                      id: "A23456",
                      country: "Australia",
                      type: "Holiday Visa",
                      status: "Document Review",
                      updated: "2 days ago",
                      progress: 40,
                      isActive: true,
                    },
                    {
                      id: "C78901",
                      country: "Canada",
                      type: "Study Visa",
                      status: "Approved",
                      updated: "23 Jan 2023",
                      progress: 100,
                      isActive: false,
                    },
                    {
                      id: "J45678",
                      country: "Japan",
                      type: "Tourist Visa",
                      status: "Interview Scheduled",
                      updated: "5 days ago",
                      progress: 60,
                      isActive: true,
                    },
                  ].map((app) => (
                    <div key={app.id} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-[#0066FF]/30 transition-colors">
                      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-4">
                        <div className="w-full lg:w-auto mb-4 lg:mb-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="font-semibold text-gray-900">
                              {app.country} - {app.type}
                            </h3>
                            <Badge
                              variant="outline"
                              className={
                                app.status === "Approved"
                                  ? "bg-green-50 text-green-600 border-green-200"
                                  : "bg-[#0066FF]/5 text-[#0066FF] border-[#0066FF]/20"
                              }
                            >
                              {app.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500">Application ID: {app.id}</p>
                        </div>
                        <div className="flex items-center gap-2 w-full lg:w-auto justify-start lg:justify-end">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 lg:flex-none h-9 px-4 bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-[#0066FF] hover:border-[#0066FF]"
                          >
                            <Eye className="h-4 w-4 mr-2" /> View
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 lg:flex-none h-9 px-4 bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-[#0066FF] hover:border-[#0066FF]"
                          >
                            <Download className="h-4 w-4 mr-2" /> Documents
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${app.progress === 100 ? "bg-green-500" : "bg-[#0066FF]"}`}
                            style={{ width: `${app.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-700">{app.progress}%</span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>Updated {app.updated}</span>
                        </div>
                        {app.isActive && (
                          <div className="flex items-center gap-1 text-[#0066FF]">
                            <span className="bg-[#0066FF]/5 px-2 py-1 rounded text-xs">
                              Estimated completion: 2-3 weeks
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="active" className="mt-0">
                <div className="space-y-4">
                  {[
                    {
                      id: "A23456",
                      country: "Australia",
                      type: "Holiday Visa",
                      status: "Document Review",
                      updated: "2 days ago",
                      progress: 40,
                    },
                    {
                      id: "J45678",
                      country: "Japan",
                      type: "Tourist Visa",
                      status: "Interview Scheduled",
                      updated: "5 days ago",
                      progress: 60,
                    },
                  ].map((app) => (
                    <div key={app.id} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-[#0066FF]/30 transition-colors">
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-gray-900">
                              {app.country} - {app.type}
                            </h3>
                            <Badge variant="outline" className="bg-[#0066FF]/5 text-[#0066FF] border-[#0066FF]/20">
                              {app.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500">Application ID: {app.id}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2 md:mt-0">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 px-3 bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-[#0066FF] hover:border-[#0066FF]"
                          >
                            <Eye className="h-4 w-4 mr-2" /> View
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 px-3 bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-[#0066FF] hover:border-[#0066FF]"
                          >
                            <Download className="h-4 w-4 mr-2" /> Documents
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#0066FF] rounded-full" style={{ width: `${app.progress}%` }}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-700">{app.progress}%</span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>Updated {app.updated}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#0066FF]">
                          <span className="bg-[#0066FF]/5 px-2 py-1 rounded text-xs">
                            Estimated completion: 2-3 weeks
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="completed" className="mt-0">
                <div className="space-y-4">
                  {[
                    {
                      id: "C78901",
                      country: "Canada",
                      type: "Study Visa",
                      status: "Approved",
                      updated: "23 Jan 2023",
                      progress: 100,
                    },
                  ].map((app) => (
                    <div key={app.id} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-[#0066FF]/30 transition-colors">
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-gray-900">
                              {app.country} - {app.type}
                            </h3>
                            <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                              {app.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500">Application ID: {app.id}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2 md:mt-0">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 px-3 bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-[#0066FF] hover:border-[#0066FF]"
                          >
                            <Eye className="h-4 w-4 mr-2" /> View
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 px-3 bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-[#0066FF] hover:border-[#0066FF]"
                          >
                            <Download className="h-4 w-4 mr-2" /> Documents
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: `${app.progress}%` }}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-700">{app.progress}%</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Completed on 23 Jan 2023</span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </CardContent>
          </Card>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
