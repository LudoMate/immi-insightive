"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NationalityPage() {
  return (
    <div className="min-h-screen bg-[#0891b2] flex flex-col">
      <div className="container py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Please select your nationality?</h1>

        <div className="flex gap-4 mb-8">
          <Button className="bg-[#f4e04d] text-black hover:bg-[#f4e04d]/90 px-8">
            India <span className="ml-2">→</span>
          </Button>
          <Button variant="outline" className="bg-white text-[#0891b2] hover:bg-gray-100">
            Clear
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0e7490] rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white text-center mb-4">Destinations with Visa</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/canada" className="text-[#f4e04d] hover:underline">
                  Canada
                </Link>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/australia" className="text-[#f4e04d] hover:underline">
                  Australia
                </Link>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/china" className="text-[#f4e04d] hover:underline">
                  China
                </Link>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/brazil" className="text-[#f4e04d] hover:underline">
                  Brazil
                </Link>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/south-africa" className="text-[#f4e04d] hover:underline">
                  South Africa
                </Link>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/united-states" className="text-[#f4e04d] hover:underline">
                  United States
                </Link>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/united-kingdom" className="text-[#f4e04d] hover:underline">
                  United Kingdom
                </Link>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/france" className="text-[#f4e04d] hover:underline">
                  France
                </Link>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/germany" className="text-[#f4e04d] hover:underline">
                  Germany
                </Link>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/italy" className="text-[#f4e04d] hover:underline">
                  Italy
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-[#0e7490] rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white text-center mb-4">Destinations with Visa on Arrival</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/russia" className="text-[#f4e04d] hover:underline">
                  Russia
                </Link>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/thailand" className="text-[#f4e04d] hover:underline">
                  Thailand
                </Link>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/maldives" className="text-[#f4e04d] hover:underline">
                  Maldives
                </Link>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/indonesia" className="text-[#f4e04d] hover:underline">
                  Indonesia (Bali)
                </Link>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/mauritius" className="text-[#f4e04d] hover:underline">
                  Mauritius
                </Link>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/seychelles" className="text-[#f4e04d] hover:underline">
                  Seychelles
                </Link>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/sri-lanka" className="text-[#f4e04d] hover:underline">
                  Sri Lanka
                </Link>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/cambodia" className="text-[#f4e04d] hover:underline">
                  Cambodia
                </Link>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/jordan" className="text-[#f4e04d] hover:underline">
                  Jordan
                </Link>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/kenya" className="text-[#f4e04d] hover:underline">
                  Kenya
                </Link>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#f4e04d] rounded-full mr-3"></span>
                <Link href="/destinations/madagascar" className="text-[#f4e04d] hover:underline">
                  Madagascar
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/requirements">
            <Button className="bg-black text-white hover:bg-black/90 px-8">
              Get Started <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
