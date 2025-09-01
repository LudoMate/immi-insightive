"use client"

import { useState } from "react"
import { Search, Filter, Download, Eye, Calendar, CheckCircle2, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function ApplicationHistoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [yearFilter, setYearFilter] = useState("all")

  const applications = [
    {
      id: "C78901",
      country: "Canada",
      type: "Study Visa",
      status: "Approved",
      date: "23 Jan 2023",
      decision: "approved",
    },
    {
      id: "U45678",
      country: "United Kingdom",
      type: "Work Visa",
      status: "Rejected",
      date: "15 Nov 2022",
      decision: "rejected",
      reason: "Insufficient documentation",
    },
    {
      id: "A12345",
      country: "Australia",
      type: "Holiday Visa",
      status: "Approved",
      date: "05 Aug 2022",
      decision: "approved",
    },
    {
      id: "G98765",
      country: "Germany",
      type: "Work Visa",
      status: "Approved",
      date: "12 May 2022",
      decision: "approved",
    },
    {
      id: "S54321",
      country: "Singapore",
      type: "Business Visa",
      status: "Rejected",
      date: "03 Feb 2022",
      decision: "rejected",
      reason: "Incomplete travel history",
    },
  ]

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.id.toLowerCase().includes(searchTerm.toLowerCase())

    const appYear = new Date(app.date).getFullYear().toString()
    const matchesYear = yearFilter === "all" || appYear === yearFilter

    return matchesSearch && matchesYear
  })

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Application History</h1>
            <p className="text-gray-500">View all your past visa applications and their outcomes</p>
          </div>
          <Button className="bg-[#0066FF] text-white hover:bg-[#0066FF]/90">
            <Download className="mr-2 h-4 w-4" /> Export History
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search applications..."
              className="pl-10 rounded-lg bg-white border-gray-200 w-full text-gray-900 placeholder:text-gray-400 focus:border-[#0066FF] focus:ring-[#0066FF]"
            />
          </div>
          <div className="flex gap-4">
            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger className="w-[180px] bg-white border-gray-200 text-gray-900 focus:border-[#0066FF] focus:ring-[#0066FF]">
                <SelectValue placeholder="Filter by year" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="all" className="text-gray-900">All Years</SelectItem>
                <SelectItem value="2023" className="text-gray-900">2023</SelectItem>
                <SelectItem value="2022" className="text-gray-900">2022</SelectItem>
                <SelectItem value="2021" className="text-gray-900">2021</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:text-[#0066FF] hover:border-[#0066FF]">
              <Filter className="h-4 w-4 mr-2" /> More Filters
            </Button>
          </div>
        </div>

        <Card className="border border-gray-200 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="space-y-4">
              {filteredApplications.length > 0 ? (
                filteredApplications.map((app) => (
                  <div key={app.id} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-[#0066FF]/30 transition-colors">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-4">
                      <div className="w-full lg:w-auto mb-4 lg:mb-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold text-gray-900">
                            {app.country} - {app.type}
                          </h3>
                          <Badge
                            variant="outline"
                            className={
                              app.decision === "approved"
                                ? "bg-green-50 text-green-600 border-green-200"
                                : "bg-red-50 text-red-600 border-red-200"
                            }
                          >
                            {app.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Application ID: {app.id}</p>
                      </div>
                      <div className="flex items-center gap-2 w-full lg:w-auto justify-start lg:justify-end">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 lg:flex-none h-9 px-4 bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-[#0066FF] hover:border-[#0066FF]"
                        >
                          <Eye className="h-4 w-4 mr-2" /> View Details
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 lg:flex-none h-9 px-4 bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-[#0066FF] hover:border-[#0066FF]"
                        >
                          <Download className="h-4 w-4 mr-2" /> Download
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>Submitted: {app.date}</span>
                    </div>

                    {app.decision === "rejected" && app.reason && (
                      <div className="mt-3 p-3 bg-red-50 rounded-lg border border-red-100 text-sm">
                        <div className="flex items-center gap-2">
                          <XCircle className="h-4 w-4 text-red-500" />
                          <span className="font-medium text-red-600">Reason for rejection:</span>
                        </div>
                        <p className="mt-2 text-gray-600 pl-6">{app.reason}</p>
                      </div>
                    )}

                    {app.decision === "approved" && (
                      <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-100 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span className="font-medium text-green-600">Visa approved on {app.date}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="bg-gray-50 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No applications found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
