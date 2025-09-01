"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#0891b2] flex flex-col">
      <div className="container flex-1 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-12">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white">Forgot Password</h1>
              <p className="mt-2 text-white">New Password</p>
            </div>

            <div className="mt-8 space-y-6">
              <div className="text-center">
                <p className="text-white text-lg">
                  Enter your email, phone, or username and we'll send you a link to change a new password
                </p>
              </div>

              <div className="space-y-4">
                <Input type="email" placeholder="hello@reallygreatsite.com" className="rounded-md bg-white" />

                <Button className="w-full bg-[#f4e04d] text-black hover:bg-[#f4e04d]/90">SEND</Button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hidden md:flex md:w-1/2 bg-center bg-cover"
          style={{ backgroundImage: "url('/placeholder.svg?height=800&width=600')" }}
        >
          <div className="w-full h-full flex items-center justify-center bg-black/20">
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="bg-[#f4e04d] p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
