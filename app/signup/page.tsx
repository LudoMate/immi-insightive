"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Star, Eye, EyeOff } from "lucide-react"
import WhatsNewCard from "@/components/whats-new-card"

export default function SignupPage() {
  const [activeTab, setActiveTab] = useState("personal")
  const [showPersonalPassword, setShowPersonalPassword] = useState(false)
  const [showBusinessPassword, setShowBusinessPassword] = useState(false)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="container flex-1 flex flex-col md:flex-row py-12">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-[#0B1120] mb-2">Join Immi Insightive in Australia</h1>
              <p className="text-lg text-[#0B1120]/70 mb-2">Create your account to begin your immigration journey</p>
    
            </div>

            <Tabs defaultValue="personal" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 bg-[#0B1120] rounded-lg p-1">
                <TabsTrigger
                  value="personal"
                  className="text-gray-200 hover:text-[#0066FF] data-[state=active]:bg-[#0066FF] data-[state=active]:text-white transition-colors"
                >
                  Personal
                </TabsTrigger>
                <TabsTrigger
                  value="business"
                  className="text-gray-200 hover:text-[#0066FF] data-[state=active]:bg-[#0066FF] data-[state=active]:text-white transition-colors"
                >
                  Business
                </TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <label className="text-base font-medium text-[#0B1120]">Full Name</label>
                  <Input 
                    type="text" 
                    placeholder="John Smith" 
                    className="mt-2 bg-gray-50 border-gray-200 text-[#0B1120] placeholder:text-gray-500 focus:border-[#0066FF] focus:ring-[#0066FF]" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-base font-medium text-[#0B1120]">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="mt-2 bg-gray-50 border-gray-200 text-[#0B1120] placeholder:text-gray-500 focus:border-[#0066FF] focus:ring-[#0066FF]" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#0B1120]">Mobile</label>
                  <Input 
                    type="tel" 
                    placeholder="+1 234 567 8901" 
                    className="bg-gray-50 border-gray-200 text-[#0B1120] placeholder:text-gray-500 focus:border-[#0066FF] focus:ring-[#0066FF]" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#0B1120]">Password</label>
                  <div className="relative">
                    <Input 
                      type={showPersonalPassword ? "text" : "password"}
                      placeholder="Create a secure password" 
                      className="bg-gray-50 border-gray-200 text-[#0B1120] placeholder:text-gray-500 focus:border-[#0066FF] focus:ring-[#0066FF] pr-10" 
                    />
                    <button
                      type="button"
                      onClick={() => setShowPersonalPassword(!showPersonalPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPersonalPassword ? (
                        <EyeOff className="h-4 w-4 text-[#0B1120]" />
                      ) : (
                        <Eye className="h-4 w-4 text-[#0B1120]" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-2 mt-6">
                  <input type="checkbox" id="terms" className="mt-1" />
                  <label htmlFor="terms" className="text-sm text-[#0B1120]/80">
                    I agree to the{" "}
                    <Link href="/terms" className="text-[#0066FF] hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#0066FF] hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <Button className="w-full bg-[#0066FF] hover:bg-[#0066FF]/90 text-white">Create Account</Button>
              </TabsContent>

              <TabsContent value="business" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#0B1120]">Company Name</label>
                  <Input 
                    type="text" 
                    placeholder="Acme Corporation" 
                    className="bg-gray-50 border-gray-200 text-[#0B1120] placeholder:text-gray-500 focus:border-[#0066FF] focus:ring-[#0066FF]" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#0B1120]">Business Email</label>
                  <Input 
                    type="email" 
                    placeholder="info@acmecorp.com" 
                    className="bg-gray-50 border-gray-200 text-[#0B1120] placeholder:text-gray-500 focus:border-[#0066FF] focus:ring-[#0066FF]" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#0B1120]">Contact Number</label>
                  <Input 
                    type="tel" 
                    placeholder="+1 234 567 8901" 
                    className="bg-gray-50 border-gray-200 text-[#0B1120] placeholder:text-gray-500 focus:border-[#0066FF] focus:ring-[#0066FF]" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#0B1120]">Password</label>
                  <div className="relative">
                    <Input 
                      type={showBusinessPassword ? "text" : "password"}
                      placeholder="Create a secure password" 
                      className="bg-gray-50 border-gray-200 text-[#0B1120] placeholder:text-gray-500 focus:border-[#0066FF] focus:ring-[#0066FF] pr-10" 
                    />
                    <button
                      type="button"
                      onClick={() => setShowBusinessPassword(!showBusinessPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showBusinessPassword ? (
                        <EyeOff className="h-4 w-4 text-[#0B1120]" />
                      ) : (
                        <Eye className="h-4 w-4 text-[#0B1120]" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-2 mt-6">
                  <input type="checkbox" id="business-terms" className="mt-1" />
                  <label htmlFor="business-terms" className="text-sm text-[#0B1120]/80">
                    I agree to the{" "}
                    <Link href="/terms" className="text-[#0066FF] hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#0066FF] hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <Button className="w-full bg-[#0066FF] hover:bg-[#0066FF]/90 text-white">
                  Create Business Account
                </Button>
              </TabsContent>
            </Tabs>

            <div className="text-center mt-6">
              <p className="text-[#0B1120]/70">
                Already have an account?{" "}
                <Link href="/login" className="text-[#0066FF] hover:text-[#0066FF]/80 transition-colors">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 md:items-center md:justify-center">
          <div className="max-w-md p-8">
            <div className="bg-[#0B1120] rounded-xl shadow-lg overflow-hidden border border-[#0B1120]/10">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Why Join Immi Insightive?</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Personalized Immigration Journey</h3>
                      <p className="text-gray-300 text-sm">Tailored recommendations based on your profile and goals</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Real-time Application Tracking</h3>
                      <p className="text-gray-300 text-sm">Monitor your visa application progress at every step</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Expert Guidance</h3>
                      <p className="text-gray-300 text-sm">Access to immigration specialists for complex queries</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 p-2 rounded-full mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Document Management</h3>
                      <p className="text-gray-300 text-sm">
                        Secure storage and organization of your important documents
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700">
                <div className="flex gap-2 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-white text-white" />
                  ))}
                </div>
                <p className="text-white italic text-sm">
                  "Immi Insightive simplified my complex visa process. Their expert guidance made my dream of studying
                  abroad a reality!"
                </p>
                <p className="text-white font-semibold mt-2">- Sarah J., Student Visa Applicant</p>
              </div>
            </div>

            <WhatsNewCard className="mt-6" />
          </div>
        </div>
      </div>
    </div>
  )
}
