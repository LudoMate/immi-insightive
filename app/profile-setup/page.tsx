"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import WhatsNewCard from "@/components/whats-new-card"

export default function ProfileSetupPage() {
  return (
    <div className="min-h-screen bg-[#0891b2] flex flex-col">
      <div className="container flex-1 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-12">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white">
                Hi there! Let's set up your profile for a personalized experience 😊.
              </h1>
            </div>

            <div className="space-y-6 mt-8">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white uppercase">Full Name</label>
                <Input type="text" placeholder="Francois Mercer" className="rounded-md bg-white" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white uppercase">No of Family Members</label>
                <Input type="number" placeholder="4" className="rounded-md bg-white" />
              </div>

              <Button className="w-full bg-[#f4e04d] text-black hover:bg-[#f4e04d]/90">SUBMIT</Button>
            </div>

            <div className="text-center mt-6">
              <Link href="/login" className="text-white underline">
                Login?
              </Link>
            </div>
          </div>
        </div>

        <div
          className="hidden md:flex md:w-1/2 bg-center bg-cover"
          style={{ backgroundImage: "url('/placeholder.svg?height=800&width=600')" }}
        >
          <div className="w-full h-full flex items-center justify-center bg-black/20">
            <WhatsNewCard />
          </div>
        </div>
      </div>
    </div>
  )
}
