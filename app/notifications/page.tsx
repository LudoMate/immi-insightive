"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Check, Clock, FileText, MessageSquare } from "lucide-react"

interface Notification {
  id: number
  title: string
  message: string
  time: string
  type: "application" | "document" | "consultation"
  read: boolean
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Application Update",
      message:
        "Your Australia visa application has been processed. Please check your application status for more details.",
      time: "10 minutes ago",
      type: "application",
      read: false,
    },
    {
      id: 2,
      title: "Document Required",
      message: "Please upload your passport scan for verification. This is required to proceed with your application.",
      time: "2 hours ago",
      type: "document",
      read: false,
    },
    {
      id: 3,
      title: "Consultation Reminder",
      message:
        "Your consultation with Immigration Specialist John Smith is scheduled for tomorrow at 3 PM. Please be prepared with your questions.",
      time: "Yesterday",
      type: "consultation",
      read: true,
    },
    {
      id: 4,
      title: "Application Status Change",
      message:
        "Your Canada study visa application status has changed to 'Under Review'. We'll notify you of any updates.",
      time: "2 days ago",
      type: "application",
      read: true,
    },
    {
      id: 5,
      title: "Document Expiry Warning",
      message:
        "Your passport will expire in 3 months. Please renew it to avoid any issues with your current applications.",
      time: "3 days ago",
      type: "document",
      read: true,
    },
  ])

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })))
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "application":
        return <FileText className="h-5 w-5 text-[#0066FF]" />
      case "document":
        return <FileText className="h-5 w-5 text-[#0066FF]" />
      case "consultation":
        return <MessageSquare className="h-5 w-5 text-[#0066FF]" />
      default:
        return <Bell className="h-5 w-5 text-[#0066FF]" />
    }
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
            <p className="text-gray-500">Stay updated with your application progress and important alerts</p>
          </div>
          {unreadCount > 0 && (
            <Button
              variant="outline"
              className="border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white transition-colors"
              onClick={markAllAsRead}
            >
              <Check className="mr-2 h-4 w-4" />
              Mark all as read
            </Button>
          )}
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-white border-b border-gray-200 w-full justify-start rounded-none p-0">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-[#0066FF] data-[state=active]:text-white rounded-none py-2 px-4 text-gray-600"
            >
              All
              {unreadCount > 0 && <Badge className="ml-2 bg-[#0066FF] text-white">{notifications.length}</Badge>}
            </TabsTrigger>
            <TabsTrigger
              value="unread"
              className="data-[state=active]:bg-[#0066FF] data-[state=active]:text-white rounded-none py-2 px-4 text-gray-600"
            >
              Unread
              {unreadCount > 0 && <Badge className="ml-2 bg-[#0066FF] text-white">{unreadCount}</Badge>}
            </TabsTrigger>
            <TabsTrigger
              value="application"
              className="data-[state=active]:bg-[#0066FF] data-[state=active]:text-white rounded-none py-2 px-4 text-gray-600"
            >
              Applications
            </TabsTrigger>
            <TabsTrigger
              value="document"
              className="data-[state=active]:bg-[#0066FF] data-[state=active]:text-white rounded-none py-2 px-4 text-gray-600"
            >
              Documents
            </TabsTrigger>
            <TabsTrigger
              value="consultation"
              className="data-[state=active]:bg-[#0066FF] data-[state=active]:text-white rounded-none py-2 px-4 text-gray-600"
            >
              Consultations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4">
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-0">
                {notifications.length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 flex items-start gap-3 ${!notification.read ? "bg-[#0066FF]/5" : ""}`}
                      >
                        <div className="mt-1">{getIcon(notification.type)}</div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-medium text-gray-900">{notification.title}</h3>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500 flex items-center">
                                <Clock className="mr-1 h-3 w-3" />
                                {notification.time}
                              </span>
                              {!notification.read && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 px-2 text-xs text-[#0066FF] hover:bg-[#0066FF]/5"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  Mark as read
                                </Button>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">{notification.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <Bell className="mx-auto h-12 w-12 text-[#0066FF]/40 mb-4" />
                    <h3 className="text-lg font-medium mb-2 text-gray-900">No notifications</h3>
                    <p className="text-gray-500">You're all caught up! We'll notify you when there are updates.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="unread" className="mt-4">
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-0">
                {notifications.filter((n) => !n.read).length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {notifications
                      .filter((n) => !n.read)
                      .map((notification) => (
                        <div key={notification.id} className="p-4 flex items-start gap-3 bg-[#0066FF]/5">
                          <div className="mt-1">{getIcon(notification.type)}</div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                              <h3 className="font-medium text-gray-900">{notification.title}</h3>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500 flex items-center">
                                  <Clock className="mr-1 h-3 w-3" />
                                  {notification.time}
                                </span>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 px-2 text-xs text-[#0066FF] hover:bg-[#0066FF]/5"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  Mark as read
                                </Button>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600">{notification.message}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <Check className="mx-auto h-12 w-12 text-[#0066FF]/40 mb-4" />
                    <h3 className="text-lg font-medium mb-2 text-gray-900">No unread notifications</h3>
                    <p className="text-gray-500">You've read all your notifications. Great job staying updated!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {["application", "document", "consultation"].map((type) => (
            <TabsContent key={type} value={type} className="mt-4">
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-0">
                  {notifications.filter((n) => n.type === type).length > 0 ? (
                    <div className="divide-y divide-gray-100">
                      {notifications
                        .filter((n) => n.type === type)
                        .map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-4 flex items-start gap-3 ${!notification.read ? "bg-[#0066FF]/5" : ""}`}
                          >
                            <div className="mt-1">{getIcon(notification.type)}</div>
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-1">
                                <h3 className="font-medium text-gray-900">{notification.title}</h3>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs text-gray-500 flex items-center">
                                    <Clock className="mr-1 h-3 w-3" />
                                    {notification.time}
                                  </span>
                                  {!notification.read && (
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="h-6 px-2 text-xs text-[#0066FF] hover:bg-[#0066FF]/5"
                                      onClick={() => markAsRead(notification.id)}
                                    >
                                      Mark as read
                                    </Button>
                                  )}
                                </div>
                              </div>
                              <p className="text-sm text-gray-600">{notification.message}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center">
                      <Bell className="mx-auto h-12 w-12 text-[#0066FF]/40 mb-4" />
                      <h3 className="text-lg font-medium mb-2 text-gray-900">No {type} notifications</h3>
                      <p className="text-gray-500">You don't have any {type} notifications at the moment.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
