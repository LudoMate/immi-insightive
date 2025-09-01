"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  FileCheck,
  Upload,
  Clock,
  Shield,
  CheckCircle,
  AlertTriangle,
  FileText,
  StampIcon as Passport,
} from "lucide-react"

export default function DocumentVerificationPage() {
  const [verificationSpeed, setVerificationSpeed] = useState("standard")

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Document Verification</h1>
          <p className="text-gray-500">Get your travel and immigration documents verified by our experts</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">Upload Your Documents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <Label className="text-lg text-gray-900 mb-3 block">Select Verification Speed</Label>
                  <RadioGroup
                    defaultValue="standard"
                    value={verificationSpeed}
                    onValueChange={setVerificationSpeed}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    {[
                      {
                        value: "standard",
                        label: "Standard (3-5 days)",
                        price: "$49",
                        icon: <Clock className="h-5 w-5" />,
                      },
                      {
                        value: "express",
                        label: "Express (24 hours)",
                        price: "$99",
                        icon: <FileCheck className="h-5 w-5" />,
                      },
                      {
                        value: "urgent",
                        label: "Urgent (4 hours)",
                        price: "$149",
                        icon: <AlertTriangle className="h-5 w-5" />,
                      },
                    ].map((option) => (
                      <div key={option.value} className="relative">
                        <RadioGroupItem value={option.value} id={option.value} className="peer absolute opacity-0" />
                        <Label
                          htmlFor={option.value}
                          className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border border-gray-200 cursor-pointer hover:border-[#0066FF]/30 transition-colors peer-data-[state=checked]:bg-[#0066FF]/5 peer-data-[state=checked]:border-[#0066FF] peer-data-[state=checked]:text-[#0066FF]"
                        >
                          {option.icon}
                          <span className="text-gray-900 peer-data-[state=checked]:text-[#0066FF]">{option.label}</span>
                          <span className="font-semibold text-gray-900 peer-data-[state=checked]:text-[#0066FF]">{option.price}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                                <div className="space-y-6">
                  <Label className="text-lg text-gray-900 block">Required Documents</Label>

                  <div className="space-y-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[#0066FF]/5 flex items-center justify-center">
                          <Passport className="h-5 w-5 text-[#0066FF]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Passport</h3>
                          <p className="text-sm text-gray-500">Upload a clear scan of your passport's bio page</p>
                        </div>
                      </div>
                      <div className="border-2 border-dashed border-gray-200 hover:border-[#0066FF]/30 transition-colors rounded-lg p-8 text-center bg-gray-50">
                        <Upload className="h-10 w-10 mx-auto mb-3 text-gray-400" />
                        <p className="text-sm text-gray-600 mb-2">Drag and drop your file here, or click to browse</p>
                        <p className="text-xs text-gray-500 mb-4">Supported formats: PDF, JPG, PNG (Max: 10MB)</p>
                        <Button className="bg-[#0066FF] hover:bg-[#0066FF]/90 text-white">
                          <Upload className="mr-2 h-4 w-4" /> Upload Passport
                        </Button>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 p-6 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[#0066FF]/5 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-[#0066FF]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Supporting Documents</h3>
                          <p className="text-sm text-gray-500">Upload any additional documents required for your visa application</p>
                        </div>
                      </div>
                      <div className="border-2 border-dashed border-gray-200 hover:border-[#0066FF]/30 transition-colors rounded-lg p-8 text-center bg-gray-50">
                        <Upload className="h-10 w-10 mx-auto mb-3 text-gray-400" />
                        <p className="text-sm text-gray-600 mb-2">Drag and drop your files here, or click to browse</p>
                        <p className="text-xs text-gray-500 mb-4">Supported formats: PDF, JPG, PNG (Max: 20MB)</p>
                        <Button className="bg-[#0066FF] hover:bg-[#0066FF]/90 text-white">
                          <Upload className="mr-2 h-4 w-4" /> Upload Documents
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="document-type" className="text-lg text-gray-900 mb-3 block">
                    Document Type
                  </Label>
                  <Select defaultValue="visa">
                    <SelectTrigger id="document-type" className="bg-white border-gray-200 text-gray-900 focus:border-[#0066FF] focus:ring-[#0066FF]">
                      <SelectValue placeholder="Select document type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="visa" className="text-gray-900">Visa Application</SelectItem>
                      <SelectItem value="passport" className="text-gray-900">Passport Renewal</SelectItem>
                      <SelectItem value="residence" className="text-gray-900">Residence Permit</SelectItem>
                      <SelectItem value="work" className="text-gray-900">Work Permit</SelectItem>
                      <SelectItem value="education" className="text-gray-900">Educational Documents</SelectItem>
                      <SelectItem value="other" className="text-gray-900">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="destination-country" className="text-lg mb-3 block">
                    Destination Country
                  </Label>
                  <Select defaultValue="australia">
                    <SelectTrigger id="destination-country" className="bg-white border-[#0B1120]/10">
                      <SelectValue placeholder="Select destination country" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-[#0B1120]/10 text-[#0B1120]">
                      <SelectItem value="australia">Australia</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="germany">Germany</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="special-instructions" className="text-lg mb-3 block">
                    Special Instructions
                  </Label>
                  <textarea
                    id="special-instructions"
                    rows={4}
                    placeholder="Any specific requirements or concerns about your documents"
                    className="w-full rounded-md bg-white border border-[#0B1120]/10 p-2 text-[#0B1120] placeholder:text-[#0B1120]/60"
                  ></textarea>
                </div>

                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  Submit for Verification
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-white border border-[#0B1120]/10 text-[#0B1120] shadow-lg sticky top-24">
              <CardHeader>
                <CardTitle>Verification Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 p-2 rounded-full mt-1">
                      <Upload className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Step 1: Upload</h3>
                      <p className="text-sm text-gray-300">Submit clear scans of all required documents</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 p-2 rounded-full mt-1">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Step 2: Verification</h3>
                      <p className="text-sm text-[#0B1120]/80">
                        Our experts review your documents for accuracy and compliance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 p-2 rounded-full mt-1">
                      <FileCheck className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Step 3: Results</h3>
                      <p className="text-sm text-[#0B1120]/80">
                        Receive a detailed verification report with recommendations
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Why Verify Your Documents?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span className="text-[#0B1120]/80">
                        Reduce the risk of visa rejection due to documentation errors
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span className="text-[#0B1120]/80">
                        Ensure all documents meet the specific requirements of your destination country
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span className="text-[#0B1120]/80">
                        Identify potential issues before submitting your application
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span className="text-[#0B1120]/80">
                        Get expert recommendations for addressing any document deficiencies
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0B1120] mb-2">Security Guarantee</h3>
                  <p className="text-sm text-[#0B1120]/80 mb-3">
                    Your documents are handled with the highest level of security. All uploads are encrypted and access
                    is strictly limited to our verification specialists.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-blue-600">
                    <Shield className="h-5 w-5" />
                    <span className="text-sm font-medium">256-bit encryption protection</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
