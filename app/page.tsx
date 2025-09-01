import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, BookOpen, Briefcase, ChevronRight, ArrowRight, CheckCircle, Users, MapPin, Clock } from "lucide-react"
 
export default function Home() {
  return (
    <main className="min-h-screen bg-bg-gray-50">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-white">
        <div className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0066FF] to-[#60a5fa] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
       
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Your Journey to the <span className="text-[#0066FF]">World</span> Starts Here
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Do everything online, from application to approval. Select the visa category that matches your travel purpose and let us guide you through the process
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/signup">
                <Button className="bg-[#0066FF] hover:bg-[#0066FF]/90 text-white text-lg px-8 py-6 rounded-xl h-auto shadow-lg">
                  Get Started <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/services/consultation" className="group">
                <Button
                  variant="outline"
                  className="text-[#0066FF] hover:text-white bg-white text-lg px-8 py-6 rounded-xl h-auto border border-[#0066FF] hover:bg-[#004dc0] hover:border-[#004dc0] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
 
            <div className="mt-10 flex flex-col items-center justify-center gap-y-4">
              <div className="flex items-center gap-x-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-[#0066FF] ring-2 ring-white flex items-center justify-center text-xs font-semibold text-white"
                    >
                      {["AU", "NZ", "CA", "UK", "US"][i - 1]}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-x-2">
                    <span className="text-lg font-semibold text-gray-900">100s of</span>
                    <span className="text-sm text-gray-600">successful applicaitons daily</span>
                  </div>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-[#0066FF] fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <span className="text-sm ml-2 font-medium text-gray-900">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        {/* Background blur effect */}
        <div className="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-20rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0066FF] to-[#60a5fa] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </section>      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">Choose Your Visa Type</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Select the visa category that matches your travel purpose and let us guide you through the process
            </p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Holiday Visa Card */}
            <Link href="/services/holiday-visa" className="block group">
              <Card className="bg-white overflow-hidden h-full hover:shadow-lg transition-all duration-300 border border-neutral-200 relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-blue-600 rounded-lg">
                <CardContent className="p-8">
                  <div className="bg-blue-100/50 p-4 inline-block rounded-2xl mb-6">
                    <Globe className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">Holiday Visa</h3>
                  <p className="text-neutral-600 mb-6">
                    Explore the world with tourist and vacation visas
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      <span className="text-neutral-600">Tourist attractions access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      <span className="text-neutral-600">Short-term stay permits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      <span className="text-neutral-600">Quick visa processing</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-[#0B1120] hover:bg-[#0B1120]/90 text-white">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
 
            {/* Study Visa Card */}
            <Link href="/services/study-abroad" className="block group">
              <Card className="bg-white overflow-hidden h-full hover:shadow-lg transition-all duration-300 border border-neutral-200 relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-green-600 rounded-lg">
                <CardContent className="p-8">
                  <div className="bg-green-100/50 p-4 inline-block rounded-2xl mb-6">
                    <BookOpen className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">Study Abroad</h3>
                  <p className="text-neutral-600 mb-6">
                    Educational opportunities and student visas worldwide
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      <span className="text-neutral-600">University programs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      <span className="text-neutral-600">Language courses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      <span className="text-neutral-600">Research opportunities</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-[#0B1120] hover:bg-[#0B1120]/90 text-white">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
 
            {/* Work Visa Card */}
            <Link href="/services/work-settle" className="block group">
              <Card className="bg-white overflow-hidden h-full hover:shadow-lg transition-all duration-300 border border-neutral-200 relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-purple-600 rounded-lg">
                <CardContent className="p-8">
                  <div className="bg-purple-100/50 p-4 inline-block rounded-2xl mb-6">
                    <Briefcase className="h-10 w-10 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">Work & Settle</h3>
                  <p className="text-neutral-600 mb-6">
                    Professional opportunities and work permits globally for skilled workers
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                      <span className="text-neutral-600">Employment permits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                      <span className="text-neutral-600">Professional visas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                      <span className="text-neutral-600">Business migration</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-[#0B1120] hover:bg-[#0B1120]/90 text-white">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
 
      {/* Why Choose Us Section */}
      <section className="py-16 bg-bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">Why Choose Immi Insightive?</h2>
              <p className="text-xl text-neutral-600 mb-8">
                We combine expertise, technology, and personalized service to make your immigration journey smooth and
                successful.
              </p>
 
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-warning-yellow-500 p-2 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Expert Guidance</h3>
                    <p className="text-bg-white/80">
                      Our team of immigration specialists provides personalized advice for your unique situation.
                    </p>
                  </div>
                </div>
 
                <div className="flex items-start gap-4">
                  <div className="bg-warning-yellow-500 p-2 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Streamlined Process</h3>
                    <p className="text-bg-white/80">
                      We simplify complex visa applications with step-by-step assistance and document preparation.
                    </p>
                  </div>
                </div>
 
                <div className="flex items-start gap-4">
                  <div className="bg-warning-yellow-500 p-2 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Global Network</h3>
                    <p className="text-bg-white/80">
                      Access our extensive network of partners worldwide for comprehensive immigration support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
 
            <div className="md:w-1/2 relative">
              <div className="bg-white rounded-2xl p-6 md:p-8 relative z-10 border border-gray-200 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-4xl font-bold text-blue-600">98%</div>
                    <p className="text-sm text-neutral-600">Success Rate</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-4xl font-bold text-blue-600">24/7</div>
                    <p className="text-sm text-neutral-600">Support</p>
                  </div>
                  <div className="bg-bg-white/10 p-4 rounded-lg text-center">
                    <div className="text-4xl font-bold text-warning-yellow-500">50+</div>
                    <p className="text-sm text-bg-white/80">Countries</p>
                  </div>
                  <div className="bg-bg-white/10 p-4 rounded-lg text-center">
                    <div className="text-4xl font-bold text-warning-yellow-500">10k+</div>
                    <p className="text-sm text-bg-white/80">Happy Clients</p>
                  </div>
                </div>
 
                <div className="mt-6 p-4 bg-warning-yellow-500/10 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="text-warning-yellow-500 text-4xl font-serif">"</div>
                    <div>
                      <p className="text-bg-white/90 italic">
                        Immi Insightive made my dream of studying abroad a reality. Their expert guidance simplified
                        what seemed like an impossible process.
                      </p>
                      <p className="mt-2 font-medium">- Sarah J., Student Visa</p>
                    </div>
                  </div>
                </div>
              </div>
 
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-warning-yellow-500/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Popular Destinations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover opportunities in the world's most sought-after immigration destinations
            </p>
          </div>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Australia",
                code: "AU",
                icon: "🇦🇺",
                count: "1.2k",
                features: ["Work-Life Balance", "Quality Education", "Healthcare"],
                bgClass: "bg-[#0066FF]/5",
              },
              {
                name: "Canada",
                code: "CA",
                icon: "🇨🇦",
                count: "980+",
                features: ["Diverse Culture", "Job Opportunities", "Social Security"],
                bgClass: "bg-red-50",
              },
              {
                name: "United Kingdom",
                code: "UK",
                icon: "🇬🇧",
                count: "850+",
                features: ["Rich Heritage", "Global Business", "Top Universities"],
                bgClass: "bg-blue-50",
              },
            ].map((destination) => (
              <div
                key={destination.name}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${destination.bgClass} text-3xl`}>
                    {destination.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="h-4 w-4 text-[#0066FF]" />
                      <span className="text-sm text-gray-500">{destination.count} applications</span>
                    </div>
                  </div>
                </div>
               
                <div className="space-y-3">
                  {destination.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#0066FF]" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
               
                <Link href={`/services/${destination.code.toLowerCase()}`}>
                  <Button
                    className="mt-6 w-full bg-white text-gray-900 border border-gray-200 hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] transition-all duration-300"
                  >
                    Explore Options <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
 
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap justify-center gap-4 px-4">
              {[
                { name: "Germany", icon: "🇩🇪", count: "720+" },
                { name: "Singapore", icon: "🇸🇬", count: "650+" },
                { name: "New Zealand", icon: "🇳🇿", count: "540+" },
              ].map((country) => (
                <div key={country.name} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-gray-200">
                  <span className="text-xl">{country.icon}</span>
                  <span className="text-sm font-medium text-gray-900">{country.name}</span>
                  <span className="text-xs text-gray-500">({country.count})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="relative">
            {/* Main Content Box */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-16 relative overflow-hidden">
              {/* Decorative patterns */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#0066FF]/30 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#0066FF]/20 to-transparent rounded-full blur-3xl"></div>
              </div>
 
              <div className="relative z-10">
                {/* Grid Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Column - Success Stats */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-8">
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex-1 border border-white/10">
                        <div className="text-5xl font-bold text-white mb-2">10k+</div>
                        <div className="text-white/80">Success Stories</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex-1 border border-white/10">
                        <div className="text-5xl font-bold text-white mb-2">95%</div>
                        <div className="text-white/80">Approval Rate</div>
                      </div>
                    </div>
                   
                    {/* Testimonial */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full border-2 border-[#0066FF]/30 overflow-hidden">
                            <img
                              src="/images/placeholder-user.jpg"
                              alt="Client"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="text-white/90 italic mb-3">
                            "The team made my visa application process incredibly smooth. Their expertise and guidance were invaluable!"
                          </p>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-white font-medium">Sarah Mitchell</p>
                              <p className="text-white/60 text-sm">Student Visa • Australia</p>
                            </div>
                            <div className="flex gap-1">
                              {Array(5).fill(null).map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
 
                  {/* Right Column - CTA Content */}
                  <div className="lg:pl-12">
                    <div className="max-w-md">
                      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Ready to Begin Your Journey?
                      </h2>
                      <p className="text-lg text-white/80 mb-8">
                        Join thousands of successful applicants who trusted us with their immigration dreams. Our experts are ready to guide you every step of the way.
                      </p>
                      <div className="space-y-4">
                        <Link href="/signup" className="block">
                          <Button className="w-full bg-white hover:bg-gray-50 text-[#0066FF] text-lg px-8 py-6 rounded-xl h-auto shadow-lg">
                            Start Your Application <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                        <Link href="/services/consultation" className="block group">
                          <Button
                            variant="outline"
                            className="w-full bg-white/5 hover:bg-emerald-600 text-white text-lg px-8 py-6 rounded-xl h-auto border border-white/10 hover:border-emerald-500 transition-all duration-300 hover:shadow-emerald-500/20 hover:shadow-lg"
                          >
                            Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
 
            {/* Feature highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                { title: "Fast Processing", desc: "Quick visa processing times" },
                { title: "95% Success Rate", desc: "High approval rate" },
                { title: "Expert Team", desc: "Licensed immigration advisors" },
                { title: "Global Network", desc: "Partners worldwide" }
              ].map((feature, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#0066FF]/10 flex items-center justify-center mb-4">
                    <div className="w-5 h-5 text-[#0066FF]">
                      {i === 0 && <Clock className="w-full h-full" />}
                      {i === 1 && <CheckCircle className="w-full h-full" />}
                      {i === 2 && <Users className="w-full h-full" />}
                      {i === 3 && <Globe className="w-full h-full" />}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
