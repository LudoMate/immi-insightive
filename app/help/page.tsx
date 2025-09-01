"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import {
  BookOpen,
  FileQuestion,
  HelpCircle,
  Mail,
  MessageSquare,
  Phone,
  Search,
  Send,
  ThumbsUp,
  Video,
  Globe,
  Clock,
  ArrowRight,
} from "lucide-react"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("faq")

  const faqs = [
    {
      question: "How long does the visa application process take?",
      answer:
        "The visa application process duration varies depending on the country and visa type. Generally, tourist visas take 2-4 weeks, student visas 4-8 weeks, and work visas 1-3 months. Premium processing options are available for some visa types to expedite the process.",
      category: "Application Process",
    },
    {
      question: "What documents are required for a visa application?",
      answer:
        "Common documents include a valid passport, visa application form, passport-sized photos, proof of financial means, travel itinerary, accommodation details, and travel insurance. Specific requirements vary by country and visa type. Our document checklist tool can provide you with a personalized list based on your destination and visa type.",
      category: "Documents",
    },
    {
      question: "Can I track my application status online?",
      answer:
        "Yes, you can track your application status through your Immi Insightive dashboard. After logging in, navigate to 'Application Status' to see real-time updates on your application progress. You'll also receive email notifications for major status changes.",
      category: "Application Process",
    },
    {
      question: "What happens if my visa application is rejected?",
      answer:
        "If your application is rejected, we'll help you understand the reasons and advise on the best course of action. Options may include filing an appeal, addressing the concerns and reapplying, or exploring alternative visa options. Our consultation service can provide personalized guidance for your situation.",
      category: "Application Process",
    },
    {
      question: "How can I reschedule my consultation appointment?",
      answer:
        "You can reschedule your consultation appointment through your dashboard. Go to 'Consultation Booking', find your scheduled appointment, and click on 'Reschedule'. Please note that appointments must be rescheduled at least 24 hours in advance to avoid cancellation fees.",
    },
  ]

  const filteredFaqs = searchQuery
    ? faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : faqs

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Help & Support</h1>
          <p className="text-gray-500">Find answers to common questions or reach out to our support team for assistance</p>
        </div>

        <div className="relative mb-8">
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for help topics..."
                className="pl-10 bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-[#0066FF] focus:ring-[#0066FF]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {searchQuery && (
              <p className="mt-2 text-sm text-gray-500">
                Showing results for "<span className="font-medium text-gray-900">{searchQuery}</span>"
              </p>
            )}
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-white border border-gray-200 w-full justify-start rounded-lg h-12 p-1">
            <TabsTrigger
              value="faq"
              className="flex-1 data-[state=active]:bg-[#0066FF] data-[state=active]:text-white rounded-md"
            >
              <FileQuestion className="mr-2 h-4 w-4" />
              FAQs
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="flex-1 data-[state=active]:bg-[#0066FF] data-[state=active]:text-white rounded-md"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </TabsTrigger>
            <TabsTrigger
              value="resources"
              className="flex-1 data-[state=active]:bg-[#0066FF] data-[state=active]:text-white rounded-md"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="faq" className="mt-6">
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900">Frequently Asked Questions</CardTitle>
                    <CardDescription className="text-gray-500 mt-1">
                      Find answers to the most common questions about our services
                    </CardDescription>
                  </div>
                  <div className="hidden md:flex gap-2">
                    {['Application Process', 'Documents', 'Support'].map((category) => (
                      <Badge
                        key={category}
                        className="bg-[#0066FF]/5 text-[#0066FF] hover:bg-[#0066FF]/10 cursor-pointer"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {filteredFaqs.length > 0 ? (
                  <Accordion type="single" collapsible className="w-full">
                    {filteredFaqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                        <AccordionTrigger className="text-gray-900 hover:text-[#0066FF] hover:no-underline">
                          <div className="flex items-center gap-2 text-left">
                            {faq.question}
                            {faq.category && (
                              <Badge className="bg-[#0066FF]/5 text-[#0066FF] text-xs">
                                {faq.category}
                              </Badge>
                            )}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <div className="text-center py-8">
                    <HelpCircle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                    <p className="text-gray-500 mb-4">We couldn't find any FAQs matching your search.</p>
                    <Button
                      variant="outline"
                      className="border-gray-200 text-gray-700 hover:text-[#0066FF] hover:border-[#0066FF]"
                      onClick={() => setSearchQuery("")}
                    >
                      Clear search
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className="bg-white border border-gray-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0066FF]/5 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-[#0066FF]" />
                    </div>
                    <CardTitle className="text-gray-900">Live Chat</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">
                    Chat with our support team in real-time for immediate assistance.
                  </p>
                  <Button className="w-full bg-[#0066FF] text-white hover:bg-[#0066FF]/90">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Start Chat
                  </Button>
                  <div className="mt-4 p-3 bg-[#0066FF]/5 rounded-lg">
                    <p className="text-sm text-gray-600 flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-[#0066FF]" />
                      Available Mon-Fri, 9am-6pm
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0066FF]/5 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-[#0066FF]" />
                    </div>
                    <CardTitle className="text-gray-900">Phone Support</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">Call our dedicated support line for personalized assistance.</p>
                  <Button className="w-full bg-[#0066FF] text-white hover:bg-[#0066FF]/90">
                    <Phone className="mr-2 h-4 w-4" />
                    +1 (800) 123-4567
                  </Button>
                  <div className="mt-4 p-3 bg-[#0066FF]/5 rounded-lg">
                    <p className="text-sm text-gray-600 flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-[#0066FF]" />
                      Available Mon-Fri, 9am-6pm
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0066FF]/5 flex items-center justify-center">
                      <Video className="h-5 w-5 text-[#0066FF]" />
                    </div>
                    <CardTitle className="text-gray-900">Video Consultation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">Schedule a video call with one of our immigration experts.</p>
                  <Button className="w-full bg-[#0066FF] text-white hover:bg-[#0066FF]/90">
                    <Video className="mr-2 h-4 w-4" />
                    Book Consultation
                  </Button>
                  <div className="mt-4 p-3 bg-[#0066FF]/5 rounded-lg">
                    <p className="text-sm text-gray-600 flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-[#0066FF]" />
                      30-minute sessions available
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white border border-gray-200">
              <CardHeader className="border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0066FF]/5 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">Send Us a Message</CardTitle>
                    <CardDescription className="text-gray-500 mt-1">
                      Fill out the form below and we'll get back to you within 24 hours
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        className="bg-white border-gray-200 text-gray-900 focus:border-[#0066FF] focus:ring-[#0066FF]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-white border-gray-200 text-gray-900 focus:border-[#0066FF] focus:ring-[#0066FF]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What is your message about?"
                      className="bg-white border-gray-200 text-gray-900 focus:border-[#0066FF] focus:ring-[#0066FF]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message here"
                      rows={5}
                      className="bg-white border-gray-200 text-gray-900 focus:border-[#0066FF] focus:ring-[#0066FF]"
                    />
                  </div>
                  <div>
                    <Button className="bg-[#0066FF] text-white hover:bg-[#0066FF]/90">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="mt-6">
            <Card className="bg-white border border-gray-200">
              <CardHeader className="border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0066FF]/5 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">Helpful Resources</CardTitle>
                    <CardDescription className="text-gray-500 mt-1">
                      Explore our guides, tutorials, and documentation to learn more about immigration processes
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Visa Application Guide",
                      description: "Step-by-step instructions for completing your visa application correctly",
                      icon: FileQuestion,
                      link: "/resources/visa-guide",
                    },
                    {
                      title: "Document Checklist",
                      description: "Complete list of required documents for different visa types",
                      icon: FileQuestion,
                      link: "/resources/document-checklist",
                    },
                    {
                      title: "Country Requirements",
                      description: "Specific visa requirements for popular destination countries",
                      icon: Globe,
                      link: "/resources/country-requirements",
                    },
                    {
                      title: "Interview Preparation",
                      description: "Tips and common questions for visa interviews",
                      icon: MessageSquare,
                      link: "/resources/interview-prep",
                    },
                  ].map((resource, index) => (
                    <Link href={resource.link} key={index} className="block">
                      <div className="group p-6 rounded-lg border border-gray-200 hover:border-[#0066FF] hover:shadow-sm transition-all">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-[#0066FF]/5 flex items-center justify-center group-hover:bg-[#0066FF]/10">
                            <resource.icon className="h-5 w-5 text-[#0066FF]" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium text-gray-900">{resource.title}</h3>
                              <ArrowRight className="h-4 w-4 text-[#0066FF] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </div>
                            <p className="text-sm text-gray-500 mt-1">{resource.description}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 bg-[#0066FF]/5 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-gray-900">Was this helpful?</h3>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-200 text-gray-700 hover:text-[#0066FF] hover:border-[#0066FF]"
                      >
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        Yes
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-200 text-gray-700 hover:text-[#0066FF] hover:border-[#0066FF]"
                      >
                        No
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    If you couldn't find what you're looking for, please contact our support team for assistance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
