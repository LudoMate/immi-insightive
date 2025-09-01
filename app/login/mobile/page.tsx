"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MobileLoginPage() {
  return (
    <div className="min-h-screen bg-[#0891b2] flex flex-col">
      <div className="container flex-1 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-12">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white">Login</h1>
              <p className="mt-2 text-white">Sign in to continue.</p>
            </div>

            <div className="space-y-6 mt-8">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white uppercase">Mobile</label>
                <div className="flex gap-2">
                  <Select defaultValue="india">
                    <SelectTrigger className="w-[180px] bg-white">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">
                        <div className="flex items-center gap-2">
                          <span>🇮🇳</span>
                          <span>India, IN, +91</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="usa">
                        <div className="flex items-center gap-2">
                          <span>🇺🇸</span>
                          <span>USA, US, +1</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="uk">
                        <div className="flex items-center gap-2">
                          <span>🇬🇧</span>
                          <span>UK, GB, +44</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Input type="tel" placeholder="+91 9097832964" className="rounded-md bg-white" />
              </div>

              <Button className="w-full bg-[#f4e04d] text-black hover:bg-[#f4e04d]/90">Sign in with OTP</Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-white/30"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[#0891b2] px-2 text-white">OR</span>
                </div>
              </div>

              <Button variant="outline" className="w-full bg-white text-[#0891b2] hover:bg-gray-100">
                Sign in with Email OTP
              </Button>
            </div>

            <div className="text-center mt-6">
              <p className="text-white">
                Having trouble?{" "}
                <Link href="/contact" className="font-medium underline">
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
