"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Briefcase, Home, Users, BarChart } from "lucide-react"

export default function WorkSettlePage() {
  return (
    <div className="bg-white text-[#0B1120] min-h-screen">
      <div className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#0B1120]">Work & Settlement Opportunities</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              type="search"
              placeholder="Search countries, work visas..."
              className="pl-10 rounded-md bg-white w-full"
            />
          </div>
          <Button variant="outline" className="bg-white text-[#0B1120] hover:bg-[#0B1120]/5 transition-colors">
            Clear
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white border border-[#0B1120]/10 text-[#0B1120]">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold">Work Opportunities</h2>
              </div>
              <p className="mb-4">
                Explore global work opportunities with our comprehensive visa and job market guidance.
              </p>

              <h3 className="font-semibold mb-2">Popular Work Visa Types:</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <span>Skilled Worker Visas</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <span>Working Holiday Visas</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <span>Entrepreneur & Investor Visas</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <span>Intra-Company Transfer Visas</span>
                </li>
              </ul>

              <Button className="w-full mt-2 bg-blue-600 text-white hover:bg-blue-600/90">Explore Work Visas</Button>
            </CardContent>
          </Card>

          <Card className="bg-white border border-[#0B1120]/10 text-[#0B1120]">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Home className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold">Settlement Pathways</h2>
              </div>
              <p className="mb-4">
                Discover permanent residency and citizenship options in countries around the world.
              </p>

              <h3 className="font-semibold mb-2">Popular Settlement Programs:</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <span>Express Entry (Canada)</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <span>Points-Based System (Australia)</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <span>EU Blue Card</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                  <span>Investment Migration Programs</span>
                </li>
              </ul>

              <Button className="w-full mt-2 bg-blue-600 text-white hover:bg-blue-600/90">
                Explore Settlement Options
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white border border-[#0B1120]/10 rounded-xl p-6 mb-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-[#0B1120]">Top Countries for Work & Settlement</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                country: "Canada",
                highlights: "Express Entry, Provincial Nominees",
                icon: <Users className="h-6 w-6 text-blue-600" />,
              },
              {
                country: "Australia",
                highlights: "Skilled Migration, 189/190/491 Visas",
                icon: <Users className="h-6 w-6 text-blue-600" />,
              },
              { country: "New Zealand", highlights: "Skilled Migrant Category", icon: <Users className="h-6 w-6 text-blue-600" /> },
              { country: "Germany", highlights: "EU Blue Card, Job Seeker Visa", icon: <Users className="h-6 w-6 text-blue-600" /> },
              {
                country: "United Kingdom",
                highlights: "Skilled Worker Visa, Global Talent",
                icon: <Users className="h-6 w-6 text-blue-600" />,
              },
              {
                country: "Singapore",
                highlights: "Employment Pass, Permanent Residency",
                icon: <Users className="h-6 w-6 text-blue-600" />,
              },
              {
                country: "United Arab Emirates",
                highlights: "Golden Visa, Green Visa",
                icon: <Users className="h-6 w-6 text-blue-600" />,
              },
              { country: "Portugal", highlights: "D7 Visa, Golden Visa", icon: <Users className="h-6 w-6 text-blue-600" /> },
            ].map((item) => (
              <Link href={`/destinations/${item.country.toLowerCase()}`} key={item.country}>
                <div className="bg-[#0B1120]/5 p-4 rounded-lg hover:bg-[#0B1120]/10 transition-colors h-full">
                  <div className="flex items-center gap-3 mb-2">
                    {item.icon}
                    <h3 className="font-semibold text-[#0B1120]">{item.country}</h3>
                  </div>
                  <p className="text-sm text-[#0B1120]/70">{item.highlights}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-[#0B1120]/10 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <BarChart className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-[#0B1120]">In-Demand Skills</h2>
            </div>
            <p className="mb-4 text-[#0B1120]/80">
              Skills that increase your chances of securing work visas and settlement opportunities:
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2 text-[#0B1120]">Technical Skills</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-[#0B1120]/80">Software Development</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-[#0B1120]/80">Data Science & AI</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-[#0B1120]/80">Healthcare Professionals</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-[#0B1120]/80">Engineering</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-[#0B1120]">Business Skills</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-[#0B1120]/80">Project Management</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-[#0B1120]/80">Financial Analysis</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-[#0B1120]/80">Digital Marketing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-[#0B1120]/80">Supply Chain Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#0B1120]/10 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-[#0B1120]">Our Services</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 p-2 rounded-full mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Visa Eligibility Assessment</h3>
                  <p className="text-sm text-gray-200">
                    Personalized evaluation of your profile for various work and settlement options.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 p-2 rounded-full mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B1120]">Documentation Assistance</h3>
                  <p className="text-sm text-[#0B1120]/80">
                    Expert guidance on preparing and submitting visa applications and supporting documents.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 p-2 rounded-full mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B1120]">Job Search Support</h3>
                  <p className="text-sm text-[#0B1120]/80">
                    Resources and guidance to help you find employment opportunities abroad.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 p-2 rounded-full mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B1120]">Settlement Consultation</h3>
                  <p className="text-sm text-[#0B1120]/80">
                    Advice on housing, banking, healthcare, and other aspects of settling in a new country.
                  </p>
                </div>
              </li>
            </ul>
            <Button className="w-full mt-6 bg-blue-600 text-white hover:bg-blue-700">Book a Consultation</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
