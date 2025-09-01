"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Globe,
  Briefcase,
  BookOpen,
  Users,
  Tag,
  Timer,
  ArrowRight,
  CheckCircle,
  Star,
  Gift,
  Zap,
  Percent,
} from "lucide-react"
import { motion } from "framer-motion"

export default function SpecialsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [countdowns, setCountdowns] = useState<{ [key: string]: string }>({})

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  } as const

  // Offers data
  const offers = [
    {
      id: "summer-holiday",
      title: "Summer Holiday Visa Special",
      description:
        "Get your holiday visa processed with priority service at standard rates. Perfect for your summer travel plans!",
      icon: <Globe className="h-5 w-5 text-blue-600" />,
      regularPrice: "$299",
      specialPrice: "$199",
      countdown: "7d:12h:45m",
      badge: "Limited Time",
      badgeColor: "blue-600",
      category: "seasonal",
      color: "blue-600",
      popular: false,
    },
    {
      id: "student-success",
      title: "Student Success Package",
      description:
        "Complete student visa package including application assistance, document verification, and university admission guidance.",
      icon: <BookOpen className="h-5 w-5 text-blue-600" />,
      regularPrice: "$599",
      specialPrice: "$399",
      features: [
        "Complete visa application assistance",
        "Document verification service",
        "University admission guidance",
      ],
      badge: "Most Popular",
      badgeColor: "blue-600",
      category: "bundle",
      color: "blue-600",
      popular: true,
    },
    {
      id: "work-settle",
      title: "Work & Settle Express",
      description: "Fast-track your work visa and settlement process with our comprehensive service package.",
      icon: <Briefcase className="h-5 w-5 text-blue-600" />,
      regularPrice: "$799",
      specialPrice: "$649",
      badge: "New",
      badgeColor: "blue-600",
      category: "all",
      color: "blue-600",
      popular: false,
    },
    {
      id: "family-migration",
      title: "Family Migration Bundle",
      description:
        "Special package for families looking to migrate together. Includes applications for all family members.",
      icon: <Users className="h-5 w-5 text-blue-600" />,
      regularPrice: "$349 per person",
      specialPrice: "$799",
      category: "bundle",
      color: "#f4e04d",
      popular: false,
    },
    {
      id: "seasonal-holiday",
      title: "Seasonal Holiday Package",
      description:
        "Special holiday visa package for the upcoming festive season. Includes expedited processing and travel insurance.",
      icon: <Calendar className="h-5 w-5 text-blue-600" />,
      regularPrice: "$449",
      specialPrice: "$349",
      category: "seasonal",
      color: "blue-600",
      popular: false,
    },
    {
      id: "first-time",
      title: "First-Time Applicant Discount",
      description:
        "Special discount for first-time visa applicants. Includes extra consultation time and document review.",
      icon: <Globe className="h-5 w-5 text-blue-600" />,
      regularPrice: "$249",
      specialPrice: "$179",
      category: "all",
      color: "blue-600",
      popular: false,
    },
  ]

  // Filter offers based on active tab
  const filteredOffers = activeTab === "all" ? offers : offers.filter((offer) => offer.category === activeTab)

  // Update countdowns every second
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedCountdowns = { ...countdowns }

      // Update each countdown
      Object.keys(updatedCountdowns).forEach((key) => {
        const [days, hours, minutes] = updatedCountdowns[key].split(":")[0].split("d")[0].split("h")[0].split("m")
        let d = Number.parseInt(days)
        let h = Number.parseInt(hours)
        let m = Number.parseInt(minutes)

        if (m > 0) {
          m -= 1
        } else {
          m = 59
          if (h > 0) {
            h -= 1
          } else {
            h = 23
            if (d > 0) {
              d -= 1
            }
          }
        }

        updatedCountdowns[key] = `${d}d:${h}h:${m}m`
      })

      setCountdowns(updatedCountdowns)
    }, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [countdowns])

  // Initialize countdowns
  useEffect(() => {
    const initialCountdowns: { [key: string]: string } = {}
    offers.forEach((offer) => {
      if (offer.countdown) {
        initialCountdowns[offer.id] = offer.countdown
      }
    })
    setCountdowns(initialCountdowns)
  }, [])

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B1120] mb-4">Special Offers</h1>
          <p className="text-xl text-[#0B1120]/80 max-w-2xl mx-auto">
            Exclusive deals and limited-time promotions to make your immigration journey more affordable
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
        >
          <div className="flex items-center gap-2 text-white">
            <Gift className="h-5 w-5 text-blue-600" />
            <span className="text-sm">{filteredOffers.length} offers available</span>
          </div>
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-3 bg-gray-100">
              <TabsTrigger
                value="all"
                className="text-[#0B1120]/80 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                All Offers
              </TabsTrigger>
              <TabsTrigger
                value="seasonal"
                className="text-[#0B1120]/80 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Seasonal
              </TabsTrigger>
              <TabsTrigger
                value="bundle"
                className="text-[#0B1120]/80 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Bundles
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredOffers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial="hidden"
              animate="visible"
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeInOut"
              }}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className={`bg-white border border-gray-100 text-[#0B1120] shadow-lg overflow-hidden h-full relative`}>
                {offer.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-blue-600 text-white hover:bg-blue-700">
                      {offer.badge}
                    </Badge>
                  </div>
                )}
                <div className="h-2 bg-blue-600"></div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {offer.icon}
                    {offer.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-[#0B1120]/80">{offer.description}</p>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#0B1120]/70">Regular Price:</span>
                        <span className="line-through text-[#0B1120]/70">{offer.regularPrice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-[#0B1120]">Special Price:</span>
                        <span className="text-xl font-bold text-blue-600">
                          {offer.specialPrice}
                        </span>
                      </div>
                    </div>

                    {offer.countdown && countdowns[offer.id] && (
                      <div className="flex items-center gap-2 text-sm text-[#0B1120]/80">
                        <Timer className="h-4 w-4 text-blue-600" />
                        <span>Offer ends in {countdowns[offer.id]}</span>
                      </div>
                    )}

                    {offer.features && (
                      <ul className="space-y-2">
                        {offer.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                            <span className="text-[#0B1120]/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    Claim Offer
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-white rounded-xl p-8 mb-12 relative overflow-hidden border border-gray-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-[#0B1120] mb-6 flex items-center gap-2">
                <Zap className="h-6 w-6 text-blue-600" />
                Limited Time Flash Sale
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <Percent className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B1120]">30% OFF All Services</h3>
                      <p className="text-[#0B1120]/70">For the next 48 hours only</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-[#0B1120]/80">Valid on all visa application services</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-[#0B1120]/80">No minimum purchase required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-[#0B1120]/80">
                        Use code: <span className="font-bold text-blue-600">FLASH30</span>
                      </span>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">Claim Now</Button>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg text-center border border-blue-100 shadow-sm hover:border-blue-200 transition-colors">
                      <div className="text-3xl font-bold text-blue-600">48</div>
                      <p className="text-xs text-[#0B1120]/70">Hours</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center border border-blue-100 shadow-sm hover:border-blue-200 transition-colors">
                      <div className="text-3xl font-bold text-blue-600">12</div>
                      <p className="text-xs text-[#0B1120]/70">Minutes</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center border border-blue-100 shadow-sm hover:border-blue-200 transition-colors">
                      <div className="text-3xl font-bold text-blue-600">33</div>
                      <p className="text-xs text-[#0B1120]/70">Seconds</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center border border-blue-100 shadow-sm hover:border-blue-200 transition-colors">
                      <div className="text-3xl font-bold text-blue-600">
                        <Star className="h-6 w-6 mx-auto fill-blue-600" />
                      </div>
                      <p className="text-xs text-[#0B1120]/70">Remaining</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
                    <p className="text-center text-[#0B1120]/70 italic">
                      "I saved over $200 on my visa application during the last flash sale. Highly recommended!"
                    </p>
                    <p className="text-center text-[#0B1120] font-medium mt-2">- Michael T.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-[#0B1120] mb-6">Membership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:border-blue-100 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Tag className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-[#0B1120]">Basic Membership</h3>
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  <span className="text-[#0B1120]/70">10% off all visa services</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  <span className="text-[#0B1120]/70">Free document checklist</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  <span className="text-[#0B1120]/70">Email support</span>
                </li>
              </ul>
              <div className="text-center">
                <span className="text-2xl font-bold text-[#0B1120]">Free</span>
              </div>
              <Button className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700">Join Now</Button>
            </div>

            <div className="bg-white p-6 rounded-lg relative border border-blue-200 hover:border-blue-300 transition-colors duration-300 transform hover:scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Tag className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-[#0B1120]">Premium Membership</h3>
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  <span className="text-[#0B1120]/70">20% off all visa services</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  <span className="text-[#0B1120]/70">Priority processing</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  <span className="text-[#0B1120]/70">Free document verification</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  <span className="text-[#0B1120]/70">Phone & email support</span>
                </li>
              </ul>
              <div className="text-center">
                <span className="text-2xl font-bold text-[#0B1120]">$9.99</span>
                <span className="text-[#0B1120]/70 text-sm">/month</span>
              </div>
              <Button className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700">Upgrade Now</Button>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:border-blue-100 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Tag className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-[#0B1120]">Business Membership</h3>
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  <span className="text-[#0B1120]/70">30% off all visa services</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  <span className="text-[#0B1120]/70">Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  <span className="text-[#0B1120]/70">Bulk application discounts</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  <span className="text-[#0B1120]/70">24/7 priority support</span>
                </li>
              </ul>
              <div className="text-center">
                <span className="text-2xl font-bold text-[#0B1120]">$49.99</span>
                <span className="text-[#0B1120]/70 text-sm">/month</span>
              </div>
              <Button className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700">Contact Sales</Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <div className="bg-white rounded-xl p-8 relative overflow-hidden border border-gray-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-[#0B1120] mb-2">Need a Custom Package?</h2>
                <p className="text-[#0B1120]/70">
                  Contact our team for personalized immigration solutions tailored to your specific needs.
                </p>
              </div>
              <div className="flex gap-4">
                <Link href="/services/consultation">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 min-w-[180px]">
                    Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
