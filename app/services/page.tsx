"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Globe, 
  BookOpen, 
  Briefcase, 
  MessageSquare, 
  FileCheck,
  ArrowRight,
  GraduationCap,
  Building,
  Users,
  Map,
  Clock,
  FileText,
  ShieldCheck
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Holiday Visa",
      description: "Plan your vacation with our comprehensive holiday visa services",
      icon: Globe,
      link: "/services/holiday-visa",
      features: ["Tourist visa applications", "Vacation planning", "Travel insurance guidance"]
    },
    {
      title: "Study Abroad",
      description: "Your gateway to international education and student visas",
      icon: BookOpen,
      link: "/services/study-abroad",
      features: ["Student visa processing", "University applications", "Course guidance"]
    },
    {
      title: "Work & Settle",
      description: "Professional immigration services for work and permanent residency",
      icon: Briefcase,
      link: "/services/work-settle",
      features: ["Work visa applications", "Permanent residency", "Skills assessment"]
    },
    {
      title: "Consultation",
      description: "Expert guidance from our immigration specialists",
      icon: MessageSquare,
      link: "/services/consultation",
      features: ["One-on-one sessions", "Case evaluation", "Strategy planning"]
    },
    {
      title: "Document Verification",
      description: "Professional verification and attestation services",
      icon: FileCheck,
      link: "/services/document-verification",
      features: ["Document review", "Authentication", "Translation services"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Immigration Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive immigration solutions tailored to your needs. Choose from our range of professional services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link href={service.link} key={index} className="block group">
              <Card className="h-full bg-white border border-gray-200 hover:border-[#0066FF] transition-all duration-200 hover:shadow-lg">
                <CardHeader className="border-b border-gray-100 p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-[#0066FF]/5 group-hover:bg-[#0066FF]/10 transition-colors">
                      <service.icon className="h-6 w-6 text-[#0066FF]" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-[#0066FF] transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#0066FF] mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center text-[#0066FF] font-medium text-sm group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Additional Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: GraduationCap, title: "Education Counseling", desc: "Get guidance on choosing the right courses and institutions" },
              { icon: Building, title: "Settlement Services", desc: "Assistance with housing and local establishment" },
              { icon: Users, title: "Family Migration", desc: "Support for family reunion and dependent visas" },
              { icon: ShieldCheck, title: "Legal Support", desc: "Expert legal advice for complex immigration matters" },
            ].map((item, i) => (
              <Card key={i} className="border border-gray-200 hover:border-[#0066FF]/30 hover:bg-[#0066FF]/5 transition-all group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded-lg border border-gray-200">
                      <item.icon className="h-5 w-5 text-[#0066FF]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover:text-[#0066FF] transition-colors mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
