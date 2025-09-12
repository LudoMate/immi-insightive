"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, GraduationCap, BookOpen, Building2, Globe, ArrowRight, Users, Clock } from "lucide-react"

export default function StudyAbroadPage() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <section className="bg-white py-16">
        <div className="container max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Your Global Education Journey <span className="text-emerald-600">Starts Here</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover world-class universities, find the perfect program, and get personalized guidance for your study
            abroad dreams. From application to arrival, we're with you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/services/study-abroad/get-started">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6 rounded-xl h-auto shadow-lg">
                Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="text-emerald-600 border-emerald-200 hover:bg-emerald-50 text-lg px-8 py-6 rounded-xl h-auto bg-transparent"
            >
              Browse Programs
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-emerald-600" />
              <span>10,000+ Students Placed</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-emerald-600" />
              <span>50+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald-600" />
              <span>95% Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              type="search"
              placeholder="Search countries, universities..."
              className="pl-10 rounded-xl bg-white w-full border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          <Button variant="outline" className="bg-white text-gray-700 hover:bg-gray-50 transition-colors rounded-xl">
            Clear
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-emerald-600" />
                </div>
                <h2 className="text-xl font-bold">Top Universities</h2>
              </div>
              <p className="mb-4 text-gray-600">
                Explore world-renowned institutions offering quality education and global recognition.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-300 rounded-full mr-3"></span>
                  <span className="text-gray-700">USA - Harvard, MIT, Stanford</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-300 rounded-full mr-3"></span>
                  <span className="text-gray-700">UK - Oxford, Cambridge, Imperial</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Australia - Melbourne, Sydney</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Canada - Toronto, McGill, UBC</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl">
                Explore Universities
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-emerald-600" />
                </div>
                <h2 className="text-xl font-bold">Popular Courses</h2>
              </div>
              <p className="mb-4 text-gray-600">
                Discover in-demand programs that offer excellent career prospects globally.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Computer Science & IT</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Business & Management</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Engineering & Technology</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Medicine & Healthcare</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl">
                Browse Courses
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Building2 className="h-6 w-6 text-emerald-600" />
                </div>
                <h2 className="text-xl font-bold">Scholarships</h2>
              </div>
              <p className="mb-4 text-gray-600">
                Find financial aid opportunities to support your international education journey.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Fulbright Scholarships</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Chevening Scholarships</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Commonwealth Scholarships</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">University-specific Grants</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl">
                Find Scholarships
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Popular Study Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { country: "USA", visa: "F-1 Student Visa", icon: <Globe className="h-6 w-6 text-emerald-600" /> },
              { country: "UK", visa: "Tier 4 Student Visa", icon: <Globe className="h-6 w-6 text-emerald-600" /> },
              { country: "Canada", visa: "Study Permit", icon: <Globe className="h-6 w-6 text-emerald-600" /> },
              {
                country: "Australia",
                visa: "Student Visa (Subclass 500)",
                icon: <Globe className="h-6 w-6 text-emerald-600" />,
              },
              { country: "Germany", visa: "Student Visa", icon: <Globe className="h-6 w-6 text-emerald-600" /> },
              { country: "France", visa: "VLS-TS Student Visa", icon: <Globe className="h-6 w-6 text-emerald-600" /> },
              { country: "New Zealand", visa: "Student Visa", icon: <Globe className="h-6 w-6 text-emerald-600" /> },
              { country: "Singapore", visa: "Student's Pass", icon: <Globe className="h-6 w-6 text-emerald-600" /> },
            ].map((item) => (
              <Link href={`/destinations/${item.country.toLowerCase()}`} key={item.country}>
                <div className="bg-emerald-50 p-4 rounded-lg hover:bg-emerald-100 transition-colors border border-emerald-100">
                  <div className="flex items-center gap-3 mb-2">
                    {item.icon}
                    <h3 className="font-semibold text-gray-900">{item.country}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{item.visa}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Study Abroad Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
              <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-3">
                1
              </div>
              <h3 className="font-semibold mb-2">Research & Selection</h3>
              <p className="text-sm text-gray-600">
                Choose your destination, university, and program based on your academic goals.
              </p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
              <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-3">
                2
              </div>
              <h3 className="font-semibold mb-2">Application Process</h3>
              <p className="text-sm text-gray-600">
                Complete university applications, submit required documents, and pay application fees.
              </p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
              <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-3">
                3
              </div>
              <h3 className="font-semibold mb-2">Visa Application</h3>
              <p className="text-sm text-gray-600">
                Apply for a student visa with your acceptance letter and financial documents.
              </p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
              <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-3">
                4
              </div>
              <h3 className="font-semibold mb-2">Pre-Departure</h3>
              <p className="text-sm text-gray-600">
                Arrange accommodation, health insurance, and prepare for your journey abroad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
