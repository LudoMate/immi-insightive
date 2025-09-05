"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Search } from "lucide-react"
import type { ContinentId } from "@/app/destinations/types"

interface ContinentOption {
  id: ContinentId
  name: string
  description: string
  count: string
}

export default function HolidayVisaPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeView, setActiveView] = useState<"list" | "map">("list")

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0891b2] to-[#0e7490] flex flex-col">
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Discover Your Next Adventure</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Explore holiday visa opportunities worldwide. Find the perfect destination that matches your dreams and
            requirements.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 flex gap-4">
            <div className="relative flex-1 max-w-md">
              <Input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/90 border-0 pl-10 pr-4 h-11 text-[#0891b2] placeholder:text-[#0891b2]/60"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#0891b2]/60" />
            </div>
            <Button
              variant="outline"
              className="bg-white/90 border-0 text-[#0891b2] hover:bg-white"
              onClick={() => setSearchQuery("")}
            >
              Clear
            </Button>
          </div>

          <div className="flex gap-4 ml-auto">
            <div className="w-[200px]">
              <div className="grid w-full grid-cols-2 bg-white/90 rounded-md p-1">
                <button
                  className={`px-3 py-1.5 text-sm font-medium rounded-sm ${
                    activeView === "list" ? "bg-[#f4e04d] text-black" : "text-[#0891b2] hover:bg-white/50"
                  }`}
                  onClick={() => setActiveView("list")}
                >
                  List
                </button>
                <button
                  className={`px-3 py-1.5 text-sm font-medium rounded-sm ${
                    activeView === "map" ? "bg-[#f4e04d] text-black" : "text-[#0891b2] hover:bg-white/50"
                  }`}
                  onClick={() => setActiveView("map")}
                >
                  Map
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white/95 rounded-xl p-6 shadow-lg">
            {activeView === "list" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    id: "africa",
                    name: "Africa",
                    description: "Explore opportunities in South Africa, Morocco, Egypt, and more",
                    count: "15+ countries",
                  },
                  {
                    id: "asia",
                    name: "Asia",
                    description: "Discover possibilities in Japan, Singapore, South Korea, and beyond",
                    count: "20+ countries",
                  },
                  {
                    id: "europe",
                    name: "Europe",
                    description: "Find opportunities in Germany, Spain, Netherlands, and more",
                    count: "25+ countries",
                  },
                  {
                    id: "north-america",
                    name: "North America",
                    description: "Explore options in Canada, Mexico, Costa Rica, and more",
                    count: "10+ countries",
                  },
                  {
                    id: "oceania",
                    name: "Oceania",
                    description: "Discover Australia, New Zealand, Fiji, and more",
                    count: "8+ countries",
                  },
                  {
                    id: "south-america",
                    name: "South America",
                    description: "Find opportunities in Brazil, Argentina, Chile, and more",
                    count: "12+ countries",
                  },
                ].map((continent) => (
                  <Link key={continent.id} href={`/destinations/${continent.id}`} className="group block">
                    <div className="bg-gradient-to-r from-[#0891b2]/10 to-[#0891b2]/5 rounded-lg p-4 transition-all hover:scale-105">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="text-lg font-medium text-[#0891b2]">{continent.name}</span>
                          <span className="ml-2 text-xs text-[#0891b2]/60">{continent.count}</span>
                        </div>
                        <span className="h-2 w-2 bg-[#f4e04d] rounded-full group-hover:scale-125 transition-transform"></span>
                      </div>
                      <p className="text-sm text-[#0891b2]/70">{continent.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {activeView === "map" && (
              <div className="bg-[#0891b2]/5 rounded-lg overflow-hidden p-4">
                <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Interactive World Map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                </div>
                <div className="mt-4 text-center text-sm text-[#0891b2]">
                  Click on any region to explore visa requirements and opportunities
                </div>
              </div>
            )}
          </Card>

          <Card className="bg-white/95 rounded-xl p-6 space-y-6 shadow-lg">
            <div>
              <h2 className="text-2xl font-bold text-[#0891b2] flex items-center">
                Find Your Next Destination
                <span className="inline-block ml-2 text-[#f4e04d]">→</span>
              </h2>
              <p className="mt-2 text-[#0891b2]/70">Our interactive tools help you discover the perfect destination:</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-lg bg-[#0891b2]/5">
                <div className="h-10 w-10 rounded-full bg-[#0891b2]/10 flex items-center justify-center">
                  <span className="text-[#0891b2]">🗺️</span>
                </div>
                <div>
                  <h3 className="font-medium text-[#0891b2]">Interactive Map</h3>
                  <p className="text-sm text-[#0891b2]/70">Visual exploration of destinations</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-lg bg-[#0891b2]/5">
                <div className="h-10 w-10 rounded-full bg-[#0891b2]/10 flex items-center justify-center">
                  <span className="text-[#0891b2]">📝</span>
                </div>
                <div>
                  <h3 className="font-medium text-[#0891b2]">Requirements Checker</h3>
                  <p className="text-sm text-[#0891b2]/70">Personalized visa requirements</p>
                </div>
              </div>

              <Link href="/destinations" className="block">
                <Button className="w-full bg-[#f4e04d] text-black hover:bg-[#f4e04d]/90">Search Continent</Button>
              </Link>

              <Button className="w-full bg-[#f4e04d] text-black hover:bg-[#f4e04d]/90">Start Your Journey</Button>
            </div>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
          <Link href="/signup" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-white/90 text-[#0891b2] hover:bg-white">
              Create Account <span className="ml-1">→</span>
            </Button>
          </Link>
          <Link href="/login" className="text-white/90 hover:text-white transition-colors">
            Already have an account? Log in
          </Link>
        </div>

        <p className="text-center text-white/60 text-sm mt-8">
          Get personalized recommendations and track your visa application progress
        </p>
      </div>
    </div>
  )
}
