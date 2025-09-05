"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import type { ContinentInfo } from "../types"

interface Props {
  data: ContinentInfo
}

export default function ContinentClient({ data }: Props) {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

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
            <Card
              key={country.name}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
              onClick={() => setSelectedCountry(country.name)}
            >
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
          ))}
        </div>

        {/* Country Details Modal/Sidebar */}
        {selectedCountry && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="bg-white rounded-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                {data.countries.map((country) => {
                  if (country.name === selectedCountry) {
                    return (
                      <div key={country.name}>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">{country.name}</h3>
                          <button
                            onClick={() => setSelectedCountry(null)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            ✕
                          </button>
                        </div>
                        <div className="space-y-6">
                          <div>
                            <p className="text-gray-600">{country.description}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Processing Time</h4>
                            <p className="text-gray-600">{country.processingTime}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                              {country.requirements.map((req) => (
                                <li key={req}>{req}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Popular For</h4>
                            <div className="flex flex-wrap gap-2">
                              {country.popularFor.map((tag) => (
                                <Badge key={tag} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-yellow-500">★</span>
                            <span className="font-semibold">{country.rating}</span>
                          </div>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Apply Now</Button>
                        </div>
                      </div>
                    )
                  }
                  return null
                })}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
