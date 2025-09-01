"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type ContinentData, type ContinentId } from "../types"

// Sample data - In a real app, this would come from an API or database
const continentData: ContinentData = {
  africa: {
    name: "Africa",
    description: "Explore vibrant cultures and diverse landscapes",
    countries: [
      {
        name: "South Africa",
        description: "Popular for work-holiday visas and tourism opportunities",
        processingTime: "15-20 days",
        requirements: ["Valid passport", "Proof of funds", "Return ticket"],
        rating: 4.5,
        popularFor: ["Working Holiday", "Tourism", "Study"]
      },
      {
        name: "Morocco",
        description: "Rich cultural heritage and growing digital nomad destination",
        processingTime: "10-15 days",
        requirements: ["Passport", "Hotel booking", "Bank statements"],
        rating: 4.2,
        popularFor: ["Digital Nomad", "Tourism", "Cultural Exchange"]
      },
      {
        name: "Egypt",
        description: "Historical sites and tourism opportunities",
        processingTime: "7-14 days",
        requirements: ["Valid passport", "Tourist visa", "Travel insurance"],
        rating: 4.3,
        popularFor: ["Tourism", "Study", "Business"]
      }
    ]
  },
  asia: {
    name: "Asia",
    description: "Discover ancient traditions and modern innovation",
    countries: [
      {
        name: "Japan",
        description: "Leading destination for work and cultural exchange",
        processingTime: "5-10 days",
        requirements: ["Valid passport", "CoE", "Health insurance"],
        rating: 4.8,
        popularFor: ["Working Holiday", "Study", "Cultural Exchange"]
      },
      {
        name: "Singapore",
        description: "Global business hub with excellent quality of life",
        processingTime: "10-15 days",
        requirements: ["Valid passport", "Employment pass", "Proof of qualification"],
        rating: 4.7,
        popularFor: ["Work", "Business", "Education"]
      },
      {
        name: "South Korea",
        description: "Popular for working holiday and cultural experiences",
        processingTime: "7-14 days",
        requirements: ["Valid passport", "Proof of funds", "Health check"],
        rating: 4.6,
        popularFor: ["Working Holiday", "Study", "Tourism"]
      }
    ]
  },
  europe: {
    name: "Europe",
    description: "Experience rich history and modern opportunities",
    countries: [
      {
        name: "Germany",
        description: "Strong economy and excellent work opportunities",
        processingTime: "10-15 days",
        requirements: ["Valid passport", "Job contract", "Health insurance"],
        rating: 4.7,
        popularFor: ["Work", "Study", "Business"]
      },
      {
        name: "Spain",
        description: "Popular for digital nomads and cultural experiences",
        processingTime: "15-20 days",
        requirements: ["Valid passport", "Proof of income", "Health insurance"],
        rating: 4.5,
        popularFor: ["Digital Nomad", "Tourism", "Retirement"]
      },
      {
        name: "Netherlands",
        description: "Excellent quality of life and work opportunities",
        processingTime: "10-15 days",
        requirements: ["Valid passport", "MVV", "Proof of income"],
        rating: 4.6,
        popularFor: ["Work", "Study", "Startup"]
      }
    ]
  },
  "north-america": {
    name: "North America",
    description: "Land of opportunities and diverse cultures",
    countries: [
      {
        name: "Canada",
        description: "Excellent quality of life and immigration programs",
        processingTime: "20-30 days",
        requirements: ["Valid passport", "LMIA", "Education credentials"],
        rating: 4.8,
        popularFor: ["Work", "Study", "Immigration"]
      },
      {
        name: "Mexico",
        description: "Growing digital nomad hub with rich culture",
        processingTime: "5-10 days",
        requirements: ["Valid passport", "Proof of income", "FMM form"],
        rating: 4.3,
        popularFor: ["Digital Nomad", "Tourism", "Retirement"]
      },
      {
        name: "Costa Rica",
        description: "Popular for digital nomads and retirees",
        processingTime: "10-15 days",
        requirements: ["Valid passport", "Proof of income", "Background check"],
        rating: 4.4,
        popularFor: ["Digital Nomad", "Retirement", "Tourism"]
      }
    ]
  },
  oceania: {
    name: "Oceania",
    description: "Paradise for working holiday and adventure",
    countries: [
      {
        name: "Australia",
        description: "Popular working holiday destination",
        processingTime: "15-20 days",
        requirements: ["Valid passport", "WHV requirements", "Health check"],
        rating: 4.8,
        popularFor: ["Working Holiday", "Study", "Skilled Work"]
      },
      {
        name: "New Zealand",
        description: "Beautiful landscapes and work opportunities",
        processingTime: "15-25 days",
        requirements: ["Valid passport", "Proof of funds", "Return ticket"],
        rating: 4.7,
        popularFor: ["Working Holiday", "Study", "Skilled Work"]
      },
      {
        name: "Fiji",
        description: "Growing digital nomad destination",
        processingTime: "5-10 days",
        requirements: ["Valid passport", "Return ticket", "Hotel booking"],
        rating: 4.2,
        popularFor: ["Tourism", "Digital Nomad", "Retirement"]
      }
    ]
  },
  "south-america": {
    name: "South America",
    description: "Vibrant cultures and emerging opportunities",
    countries: [
      {
        name: "Brazil",
        description: "Largest economy in South America",
        processingTime: "15-20 days",
        requirements: ["Valid passport", "Proof of funds", "Health insurance"],
        rating: 4.3,
        popularFor: ["Work", "Study", "Tourism"]
      },
      {
        name: "Argentina",
        description: "Popular for digital nomads and students",
        processingTime: "10-15 days",
        requirements: ["Valid passport", "Proof of income", "Health insurance"],
        rating: 4.2,
        popularFor: ["Digital Nomad", "Study", "Tourism"]
      },
      {
        name: "Chile",
        description: "Strong economy and natural beauty",
        processingTime: "10-15 days",
        requirements: ["Valid passport", "Proof of funds", "Health insurance"],
        rating: 4.4,
        popularFor: ["Work", "Study", "Tourism"]
      }
    ]
  }
}

interface PageProps {
  params: {
    continent: string;
  };
}

export default function ContinentPage({ params }: PageProps) {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const continent = params.continent as ContinentId
  const data = continentData[continent]

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0891b2] to-[#0e7490] flex items-center justify-center">
        <Card className="bg-white/95 p-6 max-w-md mx-auto text-center">
          <h1 className="text-2xl font-bold text-[#0891b2] mb-4">Continent Not Found</h1>
          <p className="text-[#0891b2]/70 mb-6">The requested continent could not be found.</p>
          <Link href="/holiday-visa">
            <Button className="bg-[#0891b2] text-white hover:bg-[#0891b2]/90">
              Return to Destinations
            </Button>
          </Link>
        </Card>
      </div>
    )
  }

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
                            <Button className="w-full bg-[#f4e04d] text-black hover:bg-[#f4e04d]/90">
                              Apply Now
                            </Button>
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
