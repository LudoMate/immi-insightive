"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const continents = [
  {
    id: "europe",
    name: "Europe",
    description: "Rich history, diverse cultures, excellent education",
    count: "7 countries available",
    gradient: "from-blue-500 to-blue-600",
    iconColor: "text-blue-500",
  },
  {
    id: "north-america",
    name: "North America",
    description: "Innovation hubs, top universities, career opportunities",
    count: "3 countries available",
    gradient: "from-green-500 to-green-600",
    iconColor: "text-green-500",
  },
  {
    id: "asia",
    name: "Asia Pacific",
    description: "Economic growth, cultural diversity, natural beauty",
    count: "6 countries available",
    gradient: "from-purple-500 via-pink-500 to-red-500",
    iconColor: "text-purple-500",
  },
  {
    id: "middle-east",
    name: "Middle East",
    description: "Business opportunities, luxury lifestyle, cultural heritage",
    count: "4 countries available",
    gradient: "from-orange-500 to-red-500",
    iconColor: "text-orange-500",
  },
  {
    id: "africa",
    name: "Africa",
    description: "Vibrant cultures, diverse landscapes, emerging markets",
    count: "5 countries available",
    gradient: "from-amber-500 to-orange-600",
    iconColor: "text-amber-500",
  },
  {
    id: "oceania",
    name: "Oceania",
    description: "Paradise destinations, working holiday opportunities",
    count: "3 countries available",
    gradient: "from-teal-500 to-cyan-600",
    iconColor: "text-teal-500",
  },
  {
    id: "south-america",
    name: "South America",
    description: "Rich cultures, natural wonders, growing opportunities",
    count: "5 countries available",
    gradient: "from-emerald-500 to-green-600",
    iconColor: "text-emerald-500",
  },
]

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Destination</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a continent to explore available countries for your holiday visa application. Each destination offers
            unique opportunities and visa requirements tailored to your travel needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {continents.map((continent) => (
            <Link key={continent.id} href={`/destinations/${continent.id}`}>
              <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                <div className={`h-4 bg-gradient-to-r ${continent.gradient}`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {continent.name}
                    </h2>
                    <div
                      className={`p-3 rounded-full bg-gray-50 ${continent.iconColor} group-hover:bg-blue-50 transition-colors`}
                    >
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{continent.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500 font-medium">{continent.count}</p>
                    <span className="text-sm text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore →
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help Choosing?</h3>
            <p className="text-gray-600 mb-6">
              Our visa experts can help you find the perfect destination based on your nationality, travel purpose, and
              preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/applications/new">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Start Visa Application</Button>
              </Link>
              <Link href="/help">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                  Get Expert Help
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
