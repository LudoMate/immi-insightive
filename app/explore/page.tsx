"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Briefcase,
  GraduationCap,
  Globe,
  HeartPulse,
  Home,
  Users,
  ChevronRight,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react"

const visaCategories = [
  {
    title: "Work Visas",
    icon: Briefcase,
    description: "Employment opportunities and professional development abroad",
    color: "text-[#0066FF]",
    bgColor: "bg-[#0066FF]/5",
    options: [
      { name: "Skilled Worker Visa", timeline: "2-4 months", success: "92%" },
      { name: "Digital Nomad Visa", timeline: "1-2 months", success: "95%" },
      { name: "Entrepreneur Visa", timeline: "3-5 months", success: "88%" }
    ],
    destinations: ["Australia", "Canada", "UK", "Germany"]
  },
  {
    title: "Study Visas",
    icon: GraduationCap,
    description: "Educational opportunities at world-renowned institutions",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    options: [
      { name: "Student Visa", timeline: "2-3 months", success: "94%" },
      { name: "Research Visa", timeline: "2-4 months", success: "91%" },
      { name: "Language Program", timeline: "1-2 months", success: "96%" }
    ],
    destinations: ["USA", "UK", "Canada", "Australia"]
  },
  {
    title: "Holiday Visas",
    icon: Globe,
    description: "Travel and short-term stay opportunities worldwide",
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    options: [
      { name: "Tourist Visa", timeline: "2-4 weeks", success: "97%" },
      { name: "Working Holiday", timeline: "1-2 months", success: "93%" },
      { name: "Visitor Visa", timeline: "2-3 weeks", success: "98%" }
    ],
    destinations: ["New Zealand", "Japan", "Singapore", "UK"]
  },
  {
    title: "Medical Visas",
    icon: HeartPulse,
    description: "Healthcare and medical treatment opportunities",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    options: [
      { name: "Medical Treatment", timeline: "1-2 weeks", success: "95%" },
      { name: "Healthcare Worker", timeline: "2-3 months", success: "90%" },
      { name: "Caregiver Visa", timeline: "2-4 months", success: "89%" }
    ],
    destinations: ["USA", "Germany", "Singapore", "Australia"]
  },
  {
    title: "Permanent Residency",
    icon: Home,
    description: "Long-term settlement and citizenship pathways",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    options: [
      { name: "Skilled Migration", timeline: "6-12 months", success: "87%" },
      { name: "Family Sponsorship", timeline: "8-12 months", success: "91%" },
      { name: "Business Migration", timeline: "6-10 months", success: "85%" }
    ],
    destinations: ["Canada", "Australia", "New Zealand", "UK"]
  },
  {
    title: "Family Visas",
    icon: Users,
    description: "Family reunion and sponsorship opportunities",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    options: [
      { name: "Spouse Visa", timeline: "3-6 months", success: "93%" },
      { name: "Child Dependent", timeline: "3-5 months", success: "94%" },
      { name: "Parent Visa", timeline: "6-12 months", success: "86%" }
    ],
    destinations: ["USA", "UK", "Canada", "Australia"]
  }
]

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Immigration Options
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the perfect visa pathway tailored to your goals. Browse through our comprehensive range of immigration options.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visaCategories.map((category) => (
            <Card key={category.title} className="group overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader className="border-b border-gray-100 p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${category.bgColor}`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">{category.title}</CardTitle>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                {/* Available Options */}
                <div className="space-y-4 mb-6">
                  {category.options.map((option) => (
                    <div key={option.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#0066FF]" />
                        <span className="text-sm text-gray-900">{option.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span className="text-xs">{option.timeline}</span>
                        </div>
                        <div className="flex items-center gap-1 text-emerald-600">
                          <CheckCircle className="h-3 w-3" />
                          <span className="text-xs">{option.success}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Popular Destinations */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.destinations.map((destination) => (
                    <div
                      key={destination}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-50 border border-gray-200"
                    >
                      <MapPin className="h-3 w-3 text-[#0066FF]" />
                      <span className="text-xs text-gray-600">{destination}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Link href={`/services/${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button className="w-full bg-white text-gray-900 border border-gray-200 hover:bg-[#0066FF] hover:text-white group-hover:border-[#0066FF] transition-all duration-300">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Not sure which option is right for you?
            </h2>
            <p className="text-gray-600 mb-6">
              Book a consultation with our immigration experts to find the best pathway for your needs.
            </p>
            <Link href="/services/consultation">
              <Button className="bg-[#0066FF] hover:bg-[#0066FF]/90 text-white">
                Book Free Consultation <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
