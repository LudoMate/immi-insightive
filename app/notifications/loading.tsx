import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NotificationsLoading() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <Skeleton className="h-8 w-48 bg-white/20" />
          <Skeleton className="h-4 w-80 mt-2 bg-white/20" />
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-[#0e7490] text-white border-b border-white/10 w-full justify-start rounded-none p-0">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-[#f4e04d] data-[state=active]:text-black rounded-none py-2 px-4"
            >
              All
            </TabsTrigger>
            <TabsTrigger value="unread" className="rounded-none py-2 px-4">
              Unread
            </TabsTrigger>
            <TabsTrigger value="application" className="rounded-none py-2 px-4">
              Applications
            </TabsTrigger>
            <TabsTrigger value="document" className="rounded-none py-2 px-4">
              Documents
            </TabsTrigger>
            <TabsTrigger value="consultation" className="rounded-none py-2 px-4">
              Consultations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4">
            <Card className="bg-[#0e7490] border-none text-white">
              <CardContent className="p-4 space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Skeleton className="h-5 w-5 rounded-full bg-white/20" />
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between">
                        <Skeleton className="h-5 w-32 bg-white/20" />
                        <Skeleton className="h-4 w-24 bg-white/20" />
                      </div>
                      <Skeleton className="h-4 w-full bg-white/20" />
                      <Skeleton className="h-4 w-3/4 bg-white/20" />
                    </div>
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
