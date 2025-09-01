"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RequirementsPage() {
  return (
    <div className="min-h-screen bg-[#0891b2] flex flex-col">
      <div className="container py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Basic Requirements?</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#f4e04d] text-black rounded-xl p-4 text-center">
            <h2 className="text-xl font-semibold mb-2">Visa on Arrival Requirements</h2>
          </div>

          <div className="bg-[#f4e04d] text-black rounded-xl p-4 text-center">
            <h2 className="text-xl font-semibold mb-2">e-Tourist Visa Requirements</h2>
          </div>
        </div>

        <div className="bg-[#0e7490] rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mt-3"></span>
                <p className="text-[#f4e04d] text-lg">
                  <span className="font-semibold">Valid Passport:</span> Minimum 6 months validity from the entry date.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mt-3"></span>
                <p className="text-[#f4e04d] text-lg">
                  <span className="font-semibold">Return Ticket:</span> Proof of onward or return journey.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mt-3"></span>
                <p className="text-[#f4e04d] text-lg">
                  <span className="font-semibold">Sufficient Funds:</span> Evidence of financial capability (bank
                  statements, credit card).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mt-3"></span>
                <p className="text-[#f4e04d] text-lg">
                  <span className="font-semibold">Application Form:</span> Completed on arrival (if applicable).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mt-3"></span>
                <p className="text-[#f4e04d] text-lg">
                  <span className="font-semibold">Fee Payment:</span> Pay visa fee (cash/card).
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mt-3"></span>
                <p className="text-[#f4e04d] text-lg">
                  <span className="font-semibold">Valid Passport:</span> Minimum 6 months validity from the entry date.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mt-3"></span>
                <p className="text-[#f4e04d] text-lg">
                  <span className="font-semibold">Online Application:</span> Submit on the official government portal.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mt-3"></span>
                <p className="text-[#f4e04d] text-lg">
                  <span className="font-semibold">Photo & Passport Scan:</span> Digital photograph and passport's bio
                  page.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mt-3"></span>
                <p className="text-[#f4e04d] text-lg">
                  <span className="font-semibold">Travel Itinerary:</span> Confirmed return ticket and accommodation
                  details.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mt-3"></span>
                <p className="text-[#f4e04d] text-lg">
                  <span className="font-semibold">Fee Payment:</span> Online visa fee payment.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mt-3"></span>
                <p className="text-[#f4e04d] text-lg">
                  <span className="font-semibold">Approval Document:</span> Print the e-Visa approval for travel.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/dashboard">
            <Button className="bg-black text-white hover:bg-black/90 px-8">
              Get Started <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
