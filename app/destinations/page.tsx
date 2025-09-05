"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"

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
]

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Destination</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a continent to explore available countries for your holiday visa application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {continents.map((continent) => (
            <Link key={continent.id} href={`/destinations/${continent.id}`}>
              <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className={`h-4 bg-gradient-to-r ${continent.gradient}`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">{continent.name}</h2>
                    <div className={`p-3 rounded-full bg-gray-50 ${continent.iconColor}`}>
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{continent.description}</p>
                  <p className="text-sm text-gray-500 font-medium">{continent.count}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
