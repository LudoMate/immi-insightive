"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, GraduationCap, BookOpen, Building2, Globe } from "lucide-react"

export default function StudyAbroadPage() {
  return (
    <div className="bg-white text-[#0B1120] min-h-screen">
      <div className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#0B1120]">Study Abroad Opportunities</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              type="search"
              placeholder="Search countries, universities..."
              className="pl-10 rounded-md bg-white w-full"
            />
          </div>
          <Button variant="outline" className="bg-white text-[#0B1120] hover:bg-[#0B1120]/5 transition-colors">
            Clear
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white border border-[#0B1120]/10 text-[#0B1120]">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold">Top Universities</h2>
              </div>
              <p className="mb-4">
                Explore world-renowned institutions offering quality education and global recognition.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-300 rounded-full mr-3"></span>
                  <span>USA - Harvard, MIT, Stanford</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-300 rounded-full mr-3"></span>
                  <span>UK - Oxford, Cambridge, Imperial</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <span>Australia - Melbourne, Sydney</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <span>Canada - Toronto, McGill, UBC</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-blue-600 text-white hover:bg-blue-600/90">
                Explore Universities
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border border-[#0B1120]/10 text-[#0B1120]">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold">Popular Courses</h2>
              </div>
              <p className="mb-4">Discover in-demand programs that offer excellent career prospects globally.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <span>Computer Science & IT</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <span>Business & Management</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <span>Engineering & Technology</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <span>Medicine & Healthcare</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-blue-600 text-white hover:bg-blue-600/90">Browse Courses</Button>
            </CardContent>
          </Card>

          <Card className="bg-white border border-[#0B1120]/10 text-[#0B1120]">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold">Scholarships</h2>
              </div>
              <p className="mb-4">Find financial aid opportunities to support your international education journey.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <span>Fulbright Scholarships</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <span>Chevening Scholarships</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <span>Commonwealth Scholarships</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <span>University-specific Grants</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-blue-600 text-white hover:bg-blue-600/90">Find Scholarships</Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white border border-[#0B1120]/10 rounded-xl p-6 mb-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-[#0B1120]">Popular Study Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { country: "USA", visa: "F-1 Student Visa", icon: <Globe className="h-6 w-6 text-blue-600" /> },
              { country: "UK", visa: "Tier 4 Student Visa", icon: <Globe className="h-6 w-6 text-blue-600" /> },
              { country: "Canada", visa: "Study Permit", icon: <Globe className="h-6 w-6 text-blue-600" /> },
              { country: "Australia", visa: "Student Visa (Subclass 500)", icon: <Globe className="h-6 w-6 text-blue-600" /> },
              { country: "Germany", visa: "Student Visa", icon: <Globe className="h-6 w-6 text-blue-600" /> },
              { country: "France", visa: "VLS-TS Student Visa", icon: <Globe className="h-6 w-6 text-blue-600" /> },
              { country: "New Zealand", visa: "Student Visa", icon: <Globe className="h-6 w-6 text-blue-600" /> },
              { country: "Singapore", visa: "Student's Pass", icon: <Globe className="h-6 w-6 text-blue-600" /> },
            ].map((item) => (
              <Link href={`/destinations/${item.country.toLowerCase()}`} key={item.country}>
                <div className="bg-[#0B1120]/5 p-4 rounded-lg hover:bg-[#0B1120]/10 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    {item.icon}
                    <h3 className="font-semibold text-[#0B1120]">{item.country}</h3>
                  </div>
                  <p className="text-sm text-[#0B1120]/70">{item.visa}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#0B1120]/10 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-[#0B1120]">Study Abroad Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-[#0B1120]/5 p-4 rounded-lg">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-3">
                1
              </div>
              <h3 className="font-semibold mb-2 text-[#0B1120]">Research & Selection</h3>
              <p className="text-sm text-[#0B1120]/70">
                Choose your destination, university, and program based on your academic goals.
              </p>
            </div>
            <div className="bg-[#0B1120]/5 p-4 rounded-lg">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-3">
                2
              </div>
              <h3 className="font-semibold mb-2 text-[#0B1120]">Application Process</h3>
              <p className="text-sm text-[#0B1120]/70">
                Complete university applications, submit required documents, and pay application fees.
              </p>
            </div>
            <div className="bg-[#0B1120]/5 p-4 rounded-lg">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-3">
                3
              </div>
              <h3 className="font-semibold mb-2 text-[#0B1120]">Visa Application</h3>
              <p className="text-sm text-[#0B1120]/70">
                Apply for a student visa with your acceptance letter and financial documents.
              </p>
            </div>
            <div className="bg-[#0B1120]/5 p-4 rounded-lg">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-3">
                4
              </div>
              <h3 className="font-semibold mb-2 text-[#0B1120]">Pre-Departure</h3>
              <p className="text-sm text-[#0B1120]/70">
                Arrange accommodation, health insurance, and prepare for your journey abroad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
