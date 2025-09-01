"use client"

import { useState } from "react"
import { Bell, Lock, Eye, EyeOff, Globe, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Settings</h1>
        <p className="text-gray-500 mb-8">Manage your account settings and preferences</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card className="bg-white border border-gray-200 shadow-sm sticky top-24">
              <CardContent className="p-4">
                <nav className="space-y-1">
                  {[
                    { icon: <Lock className="h-5 w-5" />, name: "Security", active: true },
                    { icon: <Bell className="h-5 w-5" />, name: "Notifications" },
                    { icon: <Globe className="h-5 w-5" />, name: "Language & Region" },
                    { icon: <Palette className="h-5 w-5" />, name: "Appearance" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                        item.active 
                          ? "bg-[#0066FF]/5 text-[#0066FF]" 
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </div>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="bg-white border border-gray-200">
              <CardHeader className="border-b border-gray-200">
                <CardTitle className="text-xl text-gray-900">Security Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="current-password" className="text-gray-700">Current Password</Label>
                      <div className="relative">
                        <Input
                          id="current-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your current password"
                          className="mt-1 bg-white border-gray-200 text-gray-900 focus:border-[#0066FF] focus:ring-[#0066FF]"
                        />
                        <button
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="new-password" className="text-gray-700">New Password</Label>
                      <div className="relative">
                        <Input
                          id="new-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your new password"
                          className="mt-1 bg-white border-gray-200 text-gray-900 focus:border-[#0066FF] focus:ring-[#0066FF]"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="confirm-password" className="text-gray-700">Confirm New Password</Label>
                      <div className="relative">
                        <Input
                          id="confirm-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Confirm your new password"
                          className="mt-1 bg-white border-gray-200 text-gray-900 focus:border-[#0066FF] focus:ring-[#0066FF]"
                        />
                      </div>
                    </div>
                    <Button className="bg-[#0066FF] text-white hover:bg-[#0066FF]/90">Update Password</Button>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Enable 2FA</p>
                      <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                    </div>
                    <Switch className="data-[state=checked]:bg-[#0066FF]" />
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Session Management</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-gray-900">Current Session</p>
                          <p className="text-sm text-gray-500">Chrome on Windows • New Delhi, India</p>
                        </div>
                        <Badge className="bg-green-100 text-green-700">Active</Badge>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-[#0066FF] hover:border-[#0066FF]"
                    >
                      Log Out All Other Devices
                    </Button>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Delete Account</h3>
                  <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-4">
                      Once you delete your account, there is no going back. This action cannot be undone.
                    </p>
                    <Button variant="destructive" className="bg-red-600 text-white hover:bg-red-700">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
