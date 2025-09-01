"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Check, Users, Briefcase, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NewApplicationPage() {
  const [step, setStep] = useState(1)
  const totalSteps = 3

  const goToNextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const goToPrevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Start New Visa Application</h1>

        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex flex-col items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    stepNum === step
                      ? "bg-[#0066FF] text-white"
                      : stepNum < step
                        ? "bg-[#0066FF] text-white"
                        : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {stepNum < step ? <Check className="h-5 w-5" /> : stepNum}
                </div>
                <span className={`text-sm font-medium ${stepNum === step ? "text-[#0066FF]" : "text-gray-500"}`}>
                  {stepNum === 1 ? "Personal Details" : stepNum === 2 ? "Visa Details" : "Review & Submit"}
                </span>
              </div>
            ))}
          </div>
          <div className="relative mt-3">
            <div className="absolute h-1 bg-gray-100 w-full rounded-full"></div>
            <div
              className="absolute h-1 bg-[#0066FF] rounded-full transition-all duration-300"
              style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">
              {step === 1 ? "Personal Details" : step === 2 ? "Visa Details" : "Review Your Application"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name" className="text-gray-700">First Name</Label>
                    <Input
                      id="first-name"
                      placeholder="Enter your first name"
                      className="bg-white border-gray-200 mt-1 text-gray-900 focus:border-[#0066FF] focus:ring-[#0066FF]"
                      defaultValue="Francois"
                    />
                  </div>
                  <div>
                    <Label htmlFor="last-name" className="text-gray-700">Last Name</Label>
                    <Input
                      id="last-name"
                      placeholder="Enter your last name"
                      className="bg-white border-gray-200 mt-1 text-gray-900 focus:border-[#0066FF] focus:ring-[#0066FF]"
                      defaultValue="Mercer"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date-of-birth" className="text-gray-700">Date of Birth</Label>
                    <Input id="date-of-birth" type="date" className="bg-white border-gray-200 mt-1 text-gray-900 focus:border-[#0066FF] focus:ring-[#0066FF]" />
                  </div>
                  <div>
                    <Label htmlFor="nationality" className="text-gray-700 flex items-center gap-2">
                      Nationality
                      <span className="text-[#0066FF] text-xs bg-[#0066FF]/5 px-2 py-0.5 rounded">Required</span>
                    </Label>
                    <Select defaultValue="india">
                      <SelectTrigger id="nationality" className="bg-white border-gray-200 mt-1 text-gray-900 focus:border-[#0066FF] focus:ring-[#0066FF]">
                        <SelectValue placeholder="Select your nationality" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="australia">Australia</SelectItem>
                        <SelectItem value="bangladesh">Bangladesh</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="china">China</SelectItem>
                        <SelectItem value="france">France</SelectItem>
                        <SelectItem value="germany">Germany</SelectItem>
                        <SelectItem value="india">India</SelectItem>
                        <SelectItem value="indonesia">Indonesia</SelectItem>
                        <SelectItem value="italy">Italy</SelectItem>
                        <SelectItem value="japan">Japan</SelectItem>
                        <SelectItem value="malaysia">Malaysia</SelectItem>
                        <SelectItem value="mexico">Mexico</SelectItem>
                        <SelectItem value="nepal">Nepal</SelectItem>
                        <SelectItem value="netherlands">Netherlands</SelectItem>
                        <SelectItem value="newzealand">New Zealand</SelectItem>
                        <SelectItem value="pakistan">Pakistan</SelectItem>
                        <SelectItem value="philippines">Philippines</SelectItem>
                        <SelectItem value="singapore">Singapore</SelectItem>
                        <SelectItem value="southkorea">South Korea</SelectItem>
                        <SelectItem value="spain">Spain</SelectItem>
                        <SelectItem value="srilanka">Sri Lanka</SelectItem>
                        <SelectItem value="sweden">Sweden</SelectItem>
                        <SelectItem value="switzerland">Switzerland</SelectItem>
                        <SelectItem value="thailand">Thailand</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="vietnam">Vietnam</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="mt-1.5 text-xs text-gray-500">Select the country of your current citizenship</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="passport-number" className="text-gray-700 flex items-center gap-2">
                      Passport Number
                      <span className="text-[#0066FF] text-xs bg-[#0066FF]/5 px-2 py-0.5 rounded">Required</span>
                    </Label>
                    <Input
                      id="passport-number"
                      placeholder="Enter your passport number"
                      className="bg-white border-gray-200 mt-1 text-gray-900 focus:border-[#0066FF] focus:ring-[#0066FF]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="passport-expiry" className="text-gray-700 flex items-center gap-2">
                      Passport Expiry Date
                      <span className="text-[#0066FF] text-xs bg-[#0066FF]/5 px-2 py-0.5 rounded">Required</span>
                    </Label>
                    <Input 
                      id="passport-expiry" 
                      type="date" 
                      className="bg-white border-gray-200 mt-1 text-gray-900 focus:border-[#0066FF] focus:ring-[#0066FF]" 
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 flex items-center gap-2">
                    Email Address
                    <span className="text-[#0066FF] text-xs bg-[#0066FF]/5 px-2 py-0.5 rounded">Required</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-white border-gray-200 mt-1 text-gray-900 focus:border-[#0066FF] focus:ring-[#0066FF]"
                    defaultValue="xyz@gmail.com"
                  />
                  <p className="mt-1.5 text-xs text-gray-500">We'll send important updates to this email address</p>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700 flex items-center gap-2">
                    Phone Number
                    <span className="text-[#0066FF] text-xs bg-[#0066FF]/5 px-2 py-0.5 rounded">Required</span>
                  </Label>
                  <Input
                    id="phone"
                    placeholder="Enter your phone number"
                    className="bg-white border-gray-200 mt-1 text-gray-900 focus:border-[#0066FF] focus:ring-[#0066FF]"
                    defaultValue="+91 9097832964"
                  />
                  <p className="mt-1.5 text-xs text-gray-500">We'll use this number for verification and updates</p>
                  
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="mb-6">
                  <Label className="text-lg mb-3 block text-gray-900 font-medium">What type of visa are you looking for?</Label>
                  <p className="text-sm text-gray-500 mb-4">Select the type of visa that best matches your travel purpose</p>
                  <RadioGroup defaultValue="holiday" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { value: "holiday", label: "Holiday Visa", icon: <Plane className="h-5 w-5" />, description: "For tourism and leisure travel" },
                      { value: "study", label: "Study Visa", icon: <Users className="h-5 w-5" />, description: "For educational purposes" },
                      { value: "work", label: "Work Visa", icon: <Briefcase className="h-5 w-5" />, description: "For employment purposes" },
                    ].map((option) => (
                      <div key={option.value} className="relative">
                        <RadioGroupItem value={option.value} id={option.value} className="peer absolute opacity-0" />
                        <Label
                          htmlFor={option.value}
                          className="flex flex-col items-center text-center gap-2 p-6 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 peer-data-[state=checked]:bg-[#0066FF]/5 peer-data-[state=checked]:border-[#0066FF] peer-data-[state=checked]:text-[#0066FF] transition-all"
                        >
                          {option.icon}
                          <span className="font-medium">{option.label}</span>
                          <span className="text-xs text-gray-500 peer-data-[state=checked]:text-[#0066FF]/70">{option.description}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <Label htmlFor="destination" className="text-gray-700 flex items-center gap-2">
                    Destination Country
                    <span className="text-[#0066FF] text-xs bg-[#0066FF]/5 px-2 py-0.5 rounded">Required</span>
                  </Label>
                  <p className="text-sm text-gray-500 mb-3">Select the country you plan to visit</p>
                  <Select defaultValue="australia">
                    <SelectTrigger id="destination" className="bg-white border-gray-200 text-gray-900 focus:border-[#0066FF] focus:ring-[#0066FF]">
                      <SelectValue placeholder="Select destination country" />
                    </SelectTrigger>
                    <SelectContent className="bg-white max-h-[280px]">
                      <SelectItem value="australia" className="focus:bg-[#0066FF]/5 focus:text-[#0066FF]">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Australia</span>
                          <span className="text-xs text-gray-500">Tourist/Holiday Visa Available</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="canada" className="focus:bg-[#0066FF]/5 focus:text-[#0066FF]">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Canada</span>
                          <span className="text-xs text-gray-500">eTA/Visitor Visa Available</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="japan" className="focus:bg-[#0066FF]/5 focus:text-[#0066FF]">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Japan</span>
                          <span className="text-xs text-gray-500">Short-term Stay Visa Available</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="nz" className="focus:bg-[#0066FF]/5 focus:text-[#0066FF]">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">New Zealand</span>
                          <span className="text-xs text-gray-500">Visitor Visa Available</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="singapore" className="focus:bg-[#0066FF]/5 focus:text-[#0066FF]">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Singapore</span>
                          <span className="text-xs text-gray-500">Tourist Visa Available</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="uk" className="focus:bg-[#0066FF]/5 focus:text-[#0066FF]">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">United Kingdom</span>
                          <span className="text-xs text-gray-500">Standard Visitor Visa Available</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="usa" className="focus:bg-[#0066FF]/5 focus:text-[#0066FF]">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">United States</span>
                          <span className="text-xs text-gray-500">B1/B2 Visitor Visa Available</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="planned-arrival" className="text-gray-700 flex items-center gap-2">
                      Planned Arrival Date
                      <span className="text-[#0066FF] text-xs bg-[#0066FF]/5 px-2 py-0.5 rounded">Required</span>
                    </Label>
                    <Input 
                      id="planned-arrival" 
                      type="date" 
                      className="bg-white border-gray-200 mt-1 text-gray-900 focus:border-[#0066FF] focus:ring-[#0066FF]" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="planned-departure" className="text-gray-700 flex items-center gap-2">
                      Planned Departure Date
                      <span className="text-[#0066FF] text-xs bg-[#0066FF]/5 px-2 py-0.5 rounded">Required</span>
                    </Label>
                    <Input 
                      id="planned-departure" 
                      type="date" 
                      className="bg-white border-gray-200 mt-1 text-gray-900 focus:border-[#0066FF] focus:ring-[#0066FF]" 
                    />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <Label htmlFor="trip-purpose" className="text-gray-700 flex items-center gap-2">
                    Purpose of Trip
                    <span className="text-[#0066FF] text-xs bg-[#0066FF]/5 px-2 py-0.5 rounded">Required</span>
                  </Label>
                  <p className="text-sm text-gray-500 mb-3">Please provide detailed information about your travel plans</p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {["Tourism", "Family Visit", "Business Meeting", "Conference", "Medical Treatment", "Shopping", "Sightseeing"].map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          className="px-3 py-1.5 text-sm text-gray-600 bg-gray-50 hover:bg-[#0066FF]/5 hover:text-[#0066FF] rounded-full border border-gray-200 transition-colors"
                          onClick={() => {
                            const textarea = document.getElementById("trip-purpose") as HTMLTextAreaElement;
                            if (textarea) {
                              textarea.value = textarea.value ? `${textarea.value}, ${tag.toLowerCase()}` : tag;
                            }
                          }}
                        >
                          + {tag}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <textarea
                        id="trip-purpose"
                        rows={4}
                        placeholder="Example: I am planning to visit for tourism purposes, including sightseeing at popular attractions, experiencing local culture, and visiting historical sites. I plan to stay for 2 weeks..."
                        className="w-full rounded-lg bg-white border-gray-200 p-4 text-gray-900 placeholder:text-gray-400 focus:border-[#0066FF] focus:ring-[#0066FF] resize-none text-sm"
                      ></textarea>
                      <div className="absolute bottom-3 right-3 flex items-center gap-2 text-xs">
                        <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-md">Minimum 100 characters</span>
                        <span className="text-[#0066FF] bg-[#0066FF]/5 px-2 py-1 rounded-md">Press Tab to add tags</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <Label htmlFor="previous-visa" className="text-gray-700 mb-2 block">Have you previously applied for a visa to this country?</Label>
                  <RadioGroup defaultValue="no" className="flex gap-6 mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="previous-yes" className="text-[#0066FF] focus:ring-[#0066FF]" />
                      <Label htmlFor="previous-yes" className="text-gray-600">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="previous-no" className="text-[#0066FF] focus:ring-[#0066FF]" />
                      <Label htmlFor="previous-no" className="text-gray-600">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <h3 className="text-gray-900 font-semibold mb-4">Personal Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div className="flex flex-col">
                      <span className="text-gray-500 mb-1">Full Name</span>
                      <span className="text-gray-900 font-medium">Francois Mercer</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500 mb-1">Nationality</span>
                      <span className="text-gray-900 font-medium">Indian</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500 mb-1">Email</span>
                      <span className="text-gray-900 font-medium">xyz@gmail.com</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500 mb-1">Phone</span>
                      <span className="text-gray-900 font-medium">+91 9097832964</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <h3 className="text-gray-900 font-semibold mb-4">Visa Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div className="flex flex-col">
                      <span className="text-gray-500 mb-1">Visa Type</span>
                      <span className="text-gray-900 font-medium">Holiday Visa</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500 mb-1">Destination</span>
                      <span className="text-gray-900 font-medium">Australia</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500 mb-1">Planned Arrival</span>
                      <span className="text-gray-900 font-medium">Not specified</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500 mb-1">Planned Departure</span>
                      <span className="text-gray-900 font-medium">Not specified</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <h3 className="text-gray-900 font-semibold mb-4">Required Documents</h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#0066FF]/10 flex items-center justify-center">
                        <span className="text-[#0066FF] text-xs font-medium">1</span>
                      </div>
                      <span className="text-gray-700">Valid passport (at least 6 months beyond stay)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#0066FF]/10 flex items-center justify-center">
                        <span className="text-[#0066FF] text-xs font-medium">2</span>
                      </div>
                      <span className="text-gray-700">Completed visa application form</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#0066FF]/10 flex items-center justify-center">
                        <span className="text-[#0066FF] text-xs font-medium">3</span>
                      </div>
                      <span className="text-gray-700">Proof of sufficient funds</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#0066FF]/10 flex items-center justify-center">
                        <span className="text-[#0066FF] text-xs font-medium">4</span>
                      </div>
                      <span className="text-gray-700">Return flight booking</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#0066FF]/10 flex items-center justify-center">
                        <span className="text-[#0066FF] text-xs font-medium">5</span>
                      </div>
                      <span className="text-gray-700">Travel insurance</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-2 p-4 bg-[#0066FF]/5 text-[#0066FF] rounded-lg border border-[#0066FF]/10">
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
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" x2="12" y1="8" y2="12" />
                    <line x1="12" x2="12.01" y1="16" y2="16" />
                  </svg>
                  <p className="text-sm">
                    Please verify all information is correct before submitting. You'll need to upload required documents
                    after submission.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" className="rounded border-gray-200 text-[#0066FF] focus:ring-[#0066FF]" />
                  <Label htmlFor="terms" className="text-sm text-gray-600">
                    I confirm that all the information provided is accurate and complete
                  </Label>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <Button
                  onClick={goToPrevStep}
                  variant="outline"
                  className="border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
              ) : (
                <div></div>
              )}

              {step < totalSteps ? (
                <Button onClick={goToNextStep} className="bg-[#0066FF] text-white hover:bg-[#0066FF]/90">
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button className="bg-[#0066FF] text-white hover:bg-[#0066FF]/90">Submit Application</Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
