"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaGoogle, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"
import { Eye, EyeOff } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { useAuth } from "@/components/auth-provider"

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("password")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectPath = searchParams.get("redirect") || "/dashboard"

  const { login } = useAuth()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // In a real app, you would make an API call to verify credentials
      // This is a simplified example for demonstration purposes

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Login through auth context
      login()

      // Wait for a short moment to ensure auth state is updated
      await new Promise((resolve) => setTimeout(resolve, 100))

      toast({
        title: "Login successful",
        description: "You have been successfully logged in.",
        variant: "default",
      })

      // Use window.location for a full page navigation instead of router.push
      window.location.href = redirectPath
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleOtpLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate OTP verification
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Login through auth context
      login()

      // Wait for a short moment to ensure auth state is updated
      await new Promise((resolve) => setTimeout(resolve, 100))

      toast({
        title: "Login successful",
        description: "You have been successfully logged in with OTP.",
        variant: "default",
      })

      // Use window.location for a full page navigation instead of router.push
      window.location.href = redirectPath
    } catch (error) {
      toast({
        title: "OTP verification failed",
        description: "Please check your email and try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="container flex-1 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-12">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-[#0B1120]">Login</h1>
              <p className="mt-2 text-[#0B1120]/70">Sign in to continue.</p>
              {searchParams.has("redirect") && (
                <p className="mt-2 text-[#0B1120]/60 text-sm">You need to login to access this page.</p>
              )}
            </div>

            <Tabs defaultValue="password" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 bg-[#0B1120]">
                <TabsTrigger
                  value="password"
                  className="text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Password
                </TabsTrigger>
                <TabsTrigger
                  value="otp"
                  className="text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  OTP
                </TabsTrigger>
              </TabsList>

              <TabsContent value="password" className="space-y-4 mt-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#0B1120] uppercase">Email/Mobile</label>
                    <Input
                      type="text"
                      placeholder="abc@gmail.com"
                      className="rounded-md border-[#0B1120]/10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium text-[#0B1120] uppercase">Password</label>
                      <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                        Forget Password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="************"
                        className="rounded-md border-[#0B1120]/10 pr-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-black" />
                        ) : (
                          <Eye className="h-4 w-4 text-black" />
                        )}
                      </button>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="otp" className="space-y-4 mt-4">
                <form onSubmit={handleOtpLogin} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#0B1120] uppercase">Email</label>
                    <Input
                      type="email"
                      placeholder="abc@gmail.com"
                      className="rounded-md border-[#0B1120]/10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Verifying..." : "Sign in with OTP"}
                  </Button>
                </form>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-[#0B1120]/10"></span>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-[#0B1120]/70">OR</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-[#0B1120]/10 hover:bg-[#0B1120]/5">
                  Sign in with Mobile OTP
                </Button>
              </TabsContent>
            </Tabs>

            {activeTab === "password" && (
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-[#0B1120]/10"></span>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-[#0B1120]/70">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-4 gap-3">
                  <Button variant="outline" className="border-[#0B1120]/10 hover:bg-[#0B1120]/5">
                    <FaGoogle className="h-5 w-5 text-[#0B1120]" />
                  </Button>
                  <Button variant="outline" className="border-[#0B1120]/10 hover:bg-[#0B1120]/5">
                    <FaInstagram className="h-5 w-5 text-[#0B1120]" />
                  </Button>
                  <Button variant="outline" className="border-[#0B1120]/10 hover:bg-[#0B1120]/5">
                    <FaTwitter className="h-5 w-5 text-[#0B1120]" />
                  </Button>
                  <Button variant="outline" className="border-[#0B1120]/10 hover:bg-[#0B1120]/5">
                    <FaFacebook className="h-5 w-5 text-[#0B1120]" />
                  </Button>
                </div>
              </div>
            )}

            <div className="text-center mt-6">
              <p className="text-[#0B1120]/70">
                Don't have an account?{" "}
                <Link href="/signup" className="font-medium text-blue-600 hover:underline">
                  Sign up
                </Link>
              </p>
              <p className="text-[#0B1120]/70 mt-2">
                Having trouble?{" "}
                <Link href="/contact" className="font-medium text-blue-600 hover:underline">
                  Contact us
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div
          className="hidden md:flex md:w-1/2 bg-center bg-cover"
          style={{ backgroundImage: "url('/placeholder.svg?height=800&width=600')" }}
        >
          <div className="w-full h-full flex items-center justify-center bg-black/20">
            {/* Background image is set via style */}
          </div>
        </div>
      </div>
    </div>
  )
}
