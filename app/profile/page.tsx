"use client"

import { User, Mail, Phone, Globe, Calendar, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-32 h-32 rounded-full bg-[#0066FF]/5 flex items-center justify-center mb-4 border-4 border-[#0066FF]/10">
                    <User className="h-16 w-16 text-[#0066FF]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Francois Mercer</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[#0066FF] bg-[#0066FF]/5 px-3 py-1 rounded-full text-sm font-medium">Premium Member</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <Mail className="h-5 w-5 text-[#0066FF]" />
                    <span className="text-gray-600">xyz@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <Phone className="h-5 w-5 text-[#0066FF]" />
                    <span className="text-gray-600">+91 9097832964</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <Globe className="h-5 w-5 text-[#0066FF]" />
                    <span className="text-gray-600">Indian</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <Calendar className="h-5 w-5 text-[#0066FF]" />
                    <span className="text-gray-600">Joined: Jan 2023</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-[#0066FF] text-white hover:bg-[#0066FF]/90">Edit Profile</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Tabs defaultValue="applications" className="w-full">
              <div className="bg-white rounded-lg border border-gray-200 p-2">
                <TabsList className="grid w-full grid-cols-3 bg-gray-100/80">
                  <TabsTrigger
                    value="applications"
                    className="text-gray-600 data-[state=active]:bg-[#0066FF] data-[state=active]:text-white"
                  >
                    Applications
                  </TabsTrigger>
                  <TabsTrigger
                    value="documents"
                    className="text-gray-600 data-[state=active]:bg-[#0066FF] data-[state=active]:text-white"
                  >
                    Documents
                  </TabsTrigger>
                  <TabsTrigger
                    value="preferences"
                    className="text-gray-600 data-[state=active]:bg-[#0066FF] data-[state=active]:text-white"
                  >
                    Preferences
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="applications" className="mt-6">
                <Card className="bg-white border border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-gray-900">My Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { country: "Australia", type: "Holiday Visa", status: "In Progress", date: "12 Apr 2023" },
                        { country: "Canada", type: "Study Visa", status: "Approved", date: "23 Jan 2023" },
                      ].map((app, i) => (
                        <div
                          key={i}
                          className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-[#0066FF]/30 transition-colors"
                        >
                          <div className="flex items-center gap-3 mb-3 md:mb-0">
                            <Globe className="h-5 w-5 text-[#0066FF]" />
                            <div>
                              <h3 className="font-medium text-gray-900">{app.country}</h3>
                              <p className="text-sm text-gray-500">{app.type}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                app.status === "Approved"
                                  ? "bg-green-50 text-green-600"
                                  : "bg-[#0066FF]/5 text-[#0066FF]"
                              }`}
                            >
                              {app.status}
                            </span>
                            <span className="text-sm text-gray-500">{app.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 bg-[#0066FF] text-white hover:bg-[#0066FF]/90">
                      View All Applications
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="mt-6">
                <Card className="bg-white border border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-gray-900">My Documents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "Passport", expiry: "15 Jun 2028", verified: true },
                        { name: "Birth Certificate", expiry: "N/A", verified: true },
                        { name: "Bank Statement", expiry: "05 May 2023", verified: false },
                      ].map((doc, i) => (
                        <div
                          key={i}
                          className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-[#0066FF]/30 transition-colors"
                        >
                          <div className="flex items-center gap-3 mb-3 md:mb-0">
                            <Building className="h-5 w-5 text-[#0066FF]" />
                            <div>
                              <h3 className="font-medium text-gray-900">{doc.name}</h3>
                              <p className="text-sm text-gray-500">Expires: {doc.expiry}</p>
                            </div>
                          </div>
                          <div>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                doc.verified 
                                  ? "bg-green-50 text-green-600 border border-green-100" 
                                  : "bg-red-50 text-red-600 border border-red-100"
                              }`}
                            >
                              {doc.verified ? "Verified" : "Unverified"}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 bg-[#0066FF] text-white hover:bg-[#0066FF]/90">
                      Upload New Document
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences" className="mt-6">
                <Card className="bg-white border border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Preferences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div>
                        <h3 className="font-medium text-gray-900 mb-3">Notification Settings</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {["Application Updates", "Document Reminders", "New Services", "Promotional Offers"].map(
                            (pref, i) => (
                              <div key={i} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-[#0066FF]/30 transition-colors">
                                <span className="text-gray-600">{pref}</span>
                                <div className={`relative inline-flex h-6 w-11 items-center rounded-full ${i < 2 ? 'bg-[#0066FF]' : 'bg-gray-200'}`}>
                                  <span
                                    className={`absolute h-4 w-4 rounded-full bg-white shadow-sm transition-all ${i < 2 ? "translate-x-6" : "translate-x-1"}`}
                                  />
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium text-gray-900 mb-3">Communication Preferences</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {["Email", "SMS", "In-app", "Phone Calls"].map((pref, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-[#0066FF]/30 transition-colors">
                              <span className="text-gray-600">{pref}</span>
                              <div className={`relative inline-flex h-6 w-11 items-center rounded-full ${i < 3 ? 'bg-[#0066FF]' : 'bg-gray-200'}`}>
                                <span
                                  className={`absolute h-4 w-4 rounded-full bg-white shadow-sm transition-all ${i < 3 ? "translate-x-6" : "translate-x-1"}`}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 p-4 bg-[#0066FF]/5 rounded-lg border border-[#0066FF]/10">
                        <span className="text-sm text-[#0066FF]">
                          Changes to preferences will take effect immediately
                        </span>
                      </div>
                    </div>
                    <Button className="w-full mt-6 bg-[#0066FF] text-white hover:bg-[#0066FF]/90">
                      Save Preferences
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
