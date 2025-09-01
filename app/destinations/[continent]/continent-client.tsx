"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { ContinentInfo } from "../types"

interface Props {
  data: ContinentInfo
}

export default function ContinentClient({ data }: Props) {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0891b2] to-[#0e7490]">
      <div className="container py-12">
        <div className="mb-8">
          <Link href="/holiday-visa" className="text-white/80 hover:text-white">
            ← Back to Destinations
          </Link>
          <h1 className="text-4xl font-bold text-white mt-4">{data.name}</h1>
          <p className="text-xl text-white/80 mt-2">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Countries List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.countries.map((country) => (
                <Card
                  key={country.name}
                  className="bg-white/95 p-6 cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedCountry(country.name)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-[#0891b2]">{country.name}</h3>
                      <p className="text-[#0891b2]/70 mt-2">{country.description}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[#f4e04d] mr-1">★</span>
                      <span className="text-[#0891b2]">{country.rating}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {country.popularFor.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-[#0891b2]/5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Country Details */}
          <div className="lg:col-span-1">
            <Card className="bg-white/95 p-6 sticky top-6">
              {selectedCountry ? (
                <div>
                  {data.countries.map((country) => {
                    if (country.name === selectedCountry) {
                      return (
                        <div key={country.name}>
                          <h3 className="text-2xl font-bold text-[#0891b2] mb-4">{country.name}</h3>
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-medium text-[#0891b2]">Processing Time</h4>
                              <p className="text-[#0891b2]/70">{country.processingTime}</p>
                            </div>
                            <div>
                              <h4 className="font-medium text-[#0891b2]">Requirements</h4>
                              <ul className="list-disc list-inside text-[#0891b2]/70 mt-2">
                                {country.requirements.map((req) => (
                                  <li key={req}>{req}</li>
                                ))}
                              </ul>
                            </div>
                            <Button className="w-full bg-[#f4e04d] text-black hover:bg-[#f4e04d]/90">Apply Now</Button>
                          </div>
                        </div>
                      )
                    }
                    return null
                  })}
                </div>
              ) : (
                <div className="text-center text-[#0891b2]/70">
                  <p>Select a country to view details</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
