"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Bell,
  Calendar,
  Clock,
  AlertTriangle,
  FileText,
  Check,
  ChevronRight,
} from "lucide-react"

export default function DocumentRemindersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Document Reminders</h1>
            <p className="text-gray-500">Keep track of your document renewals and deadlines</p>
          </div>
          <Button className="bg-[#0066FF] hover:bg-[#0066FF]/90 text-white">
            <Bell className="mr-2 h-4 w-4" />
            Set New Reminder
          </Button>
        </div>

        <div className="grid gap-6">
          {/* Urgent Reminders */}
          <Card className="border-red-100 bg-red-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-red-900 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Urgent Attention Required
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <div className="flex items-start gap-4">
                    <Checkbox id="passport" className="mt-1 border-red-300 text-red-600" />
                    <div className="flex-1">
                      <label htmlFor="passport" className="font-medium text-gray-900 block mb-1">
                        Passport Expiring Soon
                      </label>
                      <p className="text-sm text-gray-500 mb-2">Your passport will expire in 45 days</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center text-red-600">
                          <Clock className="h-4 w-4 mr-1" />
                          Due in 45 days
                        </span>
                        <Badge className="bg-red-100 text-red-700 hover:bg-red-200">High Priority</Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-500">
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Reminders */}
          <Card className="border-gray-200 bg-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#0066FF]" />
                Upcoming Renewals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <Checkbox id="visa" className="mt-1 border-gray-300 text-[#0066FF]" />
                    <div className="flex-1">
                      <label htmlFor="visa" className="font-medium text-gray-900 block mb-1">
                        Visa Renewal
                      </label>
                      <p className="text-sm text-gray-500 mb-2">Submit visa renewal application</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          Due in 3 months
                        </span>
                        <Badge className="bg-[#0066FF]/10 text-[#0066FF] hover:bg-[#0066FF]/20">
                          Medium Priority
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-500">
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <Checkbox id="work-permit" className="mt-1 border-gray-300 text-[#0066FF]" />
                    <div className="flex-1">
                      <label htmlFor="work-permit" className="font-medium text-gray-900 block mb-1">
                        Work Permit
                      </label>
                      <p className="text-sm text-gray-500 mb-2">Work permit extension required</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          Due in 4 months
                        </span>
                        <Badge className="bg-[#0066FF]/10 text-[#0066FF] hover:bg-[#0066FF]/20">
                          Medium Priority
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-500">
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Completed Tasks */}
          <Card className="border-green-100 bg-green-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-green-900 flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <div className="flex items-start gap-4">
                    <Checkbox id="insurance" checked={true} className="mt-1 border-green-300 text-green-600" />
                    <div className="flex-1">
                      <label
                        htmlFor="insurance"
                        className="font-medium text-gray-900 block mb-1 line-through opacity-50"
                      >
                        Travel Insurance Renewal
                      </label>
                      <p className="text-sm text-gray-500 mb-2 line-through opacity-50">
                        Renew travel insurance policy
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center text-green-600">
                          <Check className="h-4 w-4 mr-1" />
                          Completed
                        </span>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Completed</Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-500">
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
