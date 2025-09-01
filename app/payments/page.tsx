"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CreditCard,
  Receipt,
  Clock,
  CheckCircle,
  Download,
  Plus,
  Wallet,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PaymentsPage() {
  const [activeTab, setActiveTab] = useState("transactions")

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Payments</h1>
            <p className="text-gray-500">Manage your payments and view transaction history</p>
          </div>
          <div className="flex gap-4">
            <Button className="bg-[#0066FF] hover:bg-[#0066FF]/90 text-white">
              <Plus className="mr-2 h-4 w-4" />
              Add Payment Method
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white border-gray-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-4">
                <div className="p-2 bg-[#0066FF]/5 rounded-full">
                  <Wallet className="h-6 w-6 text-[#0066FF]" />
                </div>
                <Badge className="bg-[#0066FF]/10 text-[#0066FF] hover:bg-[#0066FF]/20">
                  Available
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Available Balance</p>
                <h2 className="text-2xl font-bold text-gray-900">$2,450.00</h2>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-4">
                <div className="p-2 bg-[#0066FF]/5 rounded-full">
                  <ArrowUpRight className="h-6 w-6 text-[#0066FF]" />
                </div>
                <Badge className="bg-green-100 text-green-700">Paid</Badge>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Last Payment</p>
                <h2 className="text-2xl font-bold text-gray-900">$850.00</h2>
                <p className="text-sm text-gray-500">Visa Application Fee - 24 Jul 2025</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-4">
                <div className="p-2 bg-[#0066FF]/5 rounded-full">
                  <Clock className="h-6 w-6 text-[#0066FF]" />
                </div>
                <Badge className="bg-yellow-100 text-yellow-700">Pending</Badge>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Upcoming Payment</p>
                <h2 className="text-2xl font-bold text-gray-900">$299.00</h2>
                <p className="text-sm text-gray-500">Document Verification - Due in 5 days</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="border-b border-gray-200">
              <TabsList className="bg-transparent border-b border-gray-200 h-12">
                <TabsTrigger
                  value="transactions"
                  className="data-[state=active]:border-[#0066FF] data-[state=active]:text-[#0066FF]"
                >
                  Recent Transactions
                </TabsTrigger>
                <TabsTrigger
                  value="methods"
                  className="data-[state=active]:border-[#0066FF] data-[state=active]:text-[#0066FF]"
                >
                  Payment Methods
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="transactions" className="p-6">
              <div className="space-y-6">
                {/* Transaction 1 */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-green-100 rounded-full">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Visa Application Fee</h3>
                      <p className="text-sm text-gray-500">Jul 24, 2025 at 10:30 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-900 font-medium">$850.00</span>
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#0066FF]">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Transaction 2 */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-green-100 rounded-full">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Document Verification</h3>
                      <p className="text-sm text-gray-500">Jul 15, 2025 at 2:45 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-900 font-medium">$299.00</span>
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#0066FF]">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Transaction 3 */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-green-100 rounded-full">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Consultation Fee</h3>
                      <p className="text-sm text-gray-500">Jul 10, 2025 at 9:15 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-900 font-medium">$150.00</span>
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#0066FF]">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="methods" className="p-6">
              <div className="space-y-6">
                {/* Default Card */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-2 border-[#0066FF]">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-[#0066FF]/5 rounded-full">
                      <CreditCard className="h-6 w-6 text-[#0066FF]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900">Visa ending in 4242</h3>
                        <Badge className="bg-[#0066FF]/10 text-[#0066FF]">Default</Badge>
                      </div>
                      <p className="text-sm text-gray-500">Expires 08/2026</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border-gray-200 text-gray-700 hover:text-[#0066FF] hover:border-[#0066FF]">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-200 text-gray-700 hover:text-red-600 hover:border-red-600">
                      Remove
                    </Button>
                  </div>
                </div>

                {/* Additional Card */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-gray-100 rounded-full">
                      <CreditCard className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Mastercard ending in 8888</h3>
                      <p className="text-sm text-gray-500">Expires 12/2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border-gray-200 text-gray-700 hover:text-[#0066FF] hover:border-[#0066FF]">
                      Make Default
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-200 text-gray-700 hover:text-[#0066FF] hover:border-[#0066FF]">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-200 text-gray-700 hover:text-red-600 hover:border-red-600">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button variant="outline" className="border-dashed border-2 border-gray-200 text-gray-500 hover:text-[#0066FF] hover:border-[#0066FF] w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Payment Method
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start gap-3">
          <ShieldCheck className="h-5 w-5 text-[#0066FF] mt-0.5" />
          <div>
            <h3 className="text-sm font-medium text-gray-900">Secure Payments</h3>
            <p className="text-sm text-gray-500">
              All payments are secured with 256-bit encryption. We never store your complete card details.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
