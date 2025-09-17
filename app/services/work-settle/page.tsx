"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WorkSettleWizard } from "@/components/work-settle-wizard"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
  Briefcase,
  Home,
  BarChart,
  Clock,
  Star,
  MapPin,
  TrendingUp,
  Shield,
  Award,
} from "lucide-react"

export default function WorkSettlePage() {
  const [showWizard, setShowWizard] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Globe className="w-4 h-4 mr-2" />
              50+ Countries Available
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Your Global Career Awaits</h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Discover work opportunities and settlement pathways worldwide. Our expert-guided assessment helps you find
              the perfect match for your skills and aspirations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 h-auto" onClick={() => setShowWizard(true)}>
                Start Your Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto bg-transparent">
                View Success Stories
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15k+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our streamlined 8-step process guides you from assessment to settlement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Get Started", desc: "Begin your journey", icon: CheckCircle },
              { step: 2, title: "Select Region", desc: "Choose your destination", icon: Globe },
              { step: 3, title: "Country Selection", desc: "Pick your target country", icon: MapPin },
              { step: 4, title: "Family Details", desc: "Add travelers info", icon: Users },
              { step: 5, title: "Skills & Sector", desc: "Define your expertise", icon: Briefcase },
              { step: 6, title: "Experience Level", desc: "Set your background", icon: TrendingUp },
              { step: 7, title: "Visa Type", desc: "Choose visa category", icon: Shield },
              { step: 8, title: "Get Results", desc: "Receive your catalog", icon: Award },
            ].map((item) => (
              <Card key={item.step} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-primary mb-2">Step {item.step}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Work & Settlement Opportunities</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Explore global opportunities with our comprehensive guidance for skilled professionals
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold mb-2">Work Visas</h3>
                    <p className="text-sm text-muted-foreground">
                      Skilled worker, entrepreneur, and specialty occupation visas
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Home className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold mb-2">Settlement</h3>
                    <p className="text-sm text-muted-foreground">Permanent residency and citizenship pathways</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <BarChart className="w-6 h-6 text-primary" />
                    In-Demand Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-3">Technical</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Software Development</li>
                        <li>• Data Science & AI</li>
                        <li>• Healthcare</li>
                        <li>• Engineering</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Business</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Project Management</li>
                        <li>• Financial Analysis</li>
                        <li>• Digital Marketing</li>
                        <li>• Supply Chain</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-xl text-muted-foreground">
              Discover opportunities in the world's most sought-after countries
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Canada", programs: "Express Entry, PNP", flag: "🇨🇦", applications: "2.1k+" },
              { name: "Australia", programs: "SkillSelect, 189/190", flag: "🇦🇺", applications: "1.8k+" },
              { name: "Germany", programs: "EU Blue Card, Job Seeker", flag: "🇩🇪", applications: "1.5k+" },
              { name: "New Zealand", programs: "Skilled Migrant", flag: "🇳🇿", applications: "980+" },
              { name: "United Kingdom", programs: "Skilled Worker", flag: "🇬🇧", applications: "1.2k+" },
              { name: "Singapore", programs: "Employment Pass", flag: "🇸🇬", applications: "850+" },
              { name: "Netherlands", programs: "Highly Skilled Migrant", flag: "🇳🇱", applications: "720+" },
              { name: "Portugal", programs: "D7 Visa, Golden Visa", flag: "🇵🇹", applications: "650+" },
            ].map((country) => (
              <Card key={country.name} className="group cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{country.flag}</div>
                  <h3 className="font-semibold mb-2">{country.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{country.programs}</p>
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <Users className="w-3 h-3" />
                    {country.applications} applications
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">Real people, real results from our Work & Settle program</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Software Engineer",
                country: "Canada",
                story: "Landed a dream job in Toronto within 6 months of starting the process.",
                rating: 5,
              },
              {
                name: "Michael Rodriguez",
                role: "Data Scientist",
                country: "Australia",
                story: "Successfully obtained PR through the skilled migration program.",
                rating: 5,
              },
              {
                name: "Priya Patel",
                role: "Healthcare Professional",
                country: "New Zealand",
                story: "Moved with my family and now working in Auckland's top hospital.",
                rating: 5,
              },
            ].map((story, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {Array(story.rating)
                      .fill(null)
                      .map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{story.story}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{story.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {story.role} • {story.country}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Global Career?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who've successfully relocated with our expert guidance. Your assessment
            takes just 10 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 h-auto"
              onClick={() => setShowWizard(true)}
            >
              Start Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 h-auto border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Clock className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Wizard Modal */}
      {showWizard && <WorkSettleWizard onClose={() => setShowWizard(false)} />}
    </div>
  )
}
