"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, List } from "lucide-react"

export default function HolidayVisaPage() {
  const [activeView, setActiveView] = useState<"map" | "list">("list")

  return (
    <div className="bg-white text-[#0B1120] min-h-screen">
      <div className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#0B1120]">Are you looking for a Holiday Visa?</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <Input
                type="search"
                placeholder="Search destinations..."
                className="pl-10 rounded-md bg-white w-full md:w-64"
              />
            </div>
            <Button variant="outline" className="bg-white text-[#0B1120] hover:bg-[#0B1120]/5 transition-colors">
              Clear
            </Button>
          </div>

          <div className="flex gap-4 md:ml-auto mt-4 md:mt-0">
            <Tabs
              value={activeView}
              onValueChange={(value) => setActiveView(value as "map" | "list")}
              className="w-[200px]"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="map" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  <MapPin className="w-4 h-4 mr-2" /> Map
                </TabsTrigger>
                <TabsTrigger value="list" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  <List className="w-4 h-4 mr-2" /> List
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-[#0B1120]/10 rounded-xl p-6 shadow-sm">
            {activeView === "list" ? (
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <Link href="/destinations/africa" className="text-[#0B1120] hover:text-blue-600 hover:underline">
                    Africa
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <Link href="/destinations/asia" className="text-[#0B1120] hover:text-blue-600 hover:underline">
                    Asia
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <Link href="/destinations/europe" className="text-[#0B1120] hover:text-blue-600 hover:underline">
                    Europe
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <Link href="/destinations/north-america" className="text-[#0B1120] hover:text-blue-600 hover:underline">
                    North America
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <Link href="/destinations/oceania" className="text-[#0B1120] hover:text-blue-600 hover:underline">
                    Oceania (Australia)
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <Link href="/destinations/south-america" className="text-[#0B1120] hover:text-blue-600 hover:underline">
                    South America
                  </Link>
                </li>
              </ul>
            ) : (
              <div className="bg-white rounded-lg overflow-hidden h-[400px] relative border border-[#0B1120]/10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d115882080.79059409!2d-49.404754966406244!3d-3.162455999999989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1691397892014!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-md">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-[#0B1120] hover:bg-blue-600 hover:text-white transition-colors flex items-center"
                    onClick={() => window.open("https://www.google.com/maps", "_blank")}
                  >
                    <MapPin className="w-4 h-4 mr-2" /> View Full Map
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0B1120] flex items-center">
              Explore Our Destinations{" "}
              <span className="inline-block ml-2 bg-blue-600 text-white rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </h2>

            <div className="space-y-4">
              <p className="text-[#0B1120]/80 text-lg">
                Find your perfect destination! Use our interactive <span className="font-bold text-[#0B1120]">map</span> to select a
                continent and get personalized recommendations based on your profile and nationality. A convenient{" "}
                <span className="font-bold text-[#0B1120]">list</span> view is also available!
              </p>

              <p className="text-[#0B1120]/80 text-lg">
                Discover destinations with ease! Use the <span className="font-bold text-[#0B1120]">list</span> view for
                recommendations customized to your profile and nationality. Prefer visuals? Try our interactive{" "}
                <span className="font-bold text-[#0B1120]">map</span> to choose a continent!
              </p>

              <Button className="w-full bg-blue-600 text-white hover:bg-blue-600/90">Search Continent</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white border border-[#0B1120]/10 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-[#0B1120]">Popular Holiday Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Thailand", "Bali", "Maldives", "Mauritius", "Seychelles", "Sri Lanka", "Cambodia", "Vietnam"].map(
              (destination) => (
                <div key={destination} className="bg-[#0B1120]/5 p-4 rounded-lg hover:bg-[#0B1120]/10 transition-colors">
                  <h3 className="font-semibold text-[#0B1120]">{destination}</h3>
                  <p className="text-sm text-[#0B1120]/70">Visa on Arrival</p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
