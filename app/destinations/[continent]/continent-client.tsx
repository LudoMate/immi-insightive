"use client"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import type { ContinentInfo } from "../types"

interface Props {
  data: ContinentInfo
}

export default function ContinentClient({ data }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-gray-900">Choose Your Destination</h1>
            <Link href="/destinations" className="text-blue-600 hover:text-blue-700 font-medium">
              Choose Different Continent
            </Link>
          </div>
          <p className="text-lg text-gray-600 mt-2">
            Select a continent to explore available countries for your holiday visa application
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{data.name}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.countries.map((country) => (
            <Link
              key={country.name}
              href={`/destinations/${data.name.toLowerCase().replace(/\s+/g, "-")}/${country.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <Card className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{country.name}</h3>
                    <div className="p-2 rounded-full bg-blue-50">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">Click to select</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
