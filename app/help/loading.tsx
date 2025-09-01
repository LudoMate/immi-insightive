import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileQuestion, Mail, BookOpen } from "lucide-react"

export default function HelpLoading() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <Skeleton className="h-8 w-48 bg-white/20" />
          <Skeleton className="h-4 w-80 mt-2 bg-white/20" />
        </div>

        <Skeleton className="h-10 w-full bg-white/20" />

        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="bg-[#0e7490] text-white border-b border-white/10 w-full justify-start rounded-none p-0">
            <TabsTrigger
              value="faq"
              className="data-[state=active]:bg-[#f4e04d] data-[state=active]:text-black rounded-none py-2 px-4"
            >
              <FileQuestion className="mr-2 h-4 w-4" />
              FAQs
            </TabsTrigger>
            <TabsTrigger value="contact" className="rounded-none py-2 px-4">
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </TabsTrigger>
            <TabsTrigger value="resources" className="rounded-none py-2 px-4">
              <BookOpen className="mr-2 h-4 w-4" />
              Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="faq" className="mt-4">
            <Card className="bg-[#0e7490] border-none text-white">
              <CardHeader>
                <Skeleton className="h-6 w-48 bg-white/20" />
                <Skeleton className="h-4 w-80 mt-2 bg-white/20" />
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="border-b border-white/10 pb-4">
                    <Skeleton className="h-6 w-full bg-white/20" />
                    <Skeleton className="h-4 w-3/4 mt-4 bg-white/20" />
                    <Skeleton className="h-4 w-full mt-2 bg-white/20" />
                    <Skeleton className="h-4 w-2/3 mt-2 bg-white/20" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
