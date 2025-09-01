import { Skeleton } from "@/components/ui/skeleton"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function Loading() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="bg-[#0e7490] rounded-xl p-6">
          <Skeleton className="h-8 w-64 bg-white/10 mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <Skeleton className="h-24 bg-white/10 rounded-xl" />
            <Skeleton className="h-24 bg-white/10 rounded-xl" />
            <Skeleton className="h-24 bg-white/10 rounded-xl" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Skeleton className="h-8 w-48 bg-white/10" />
            <Skeleton className="h-32 bg-white/10 rounded-xl" />
            <Skeleton className="h-32 bg-white/10 rounded-xl" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-8 w-48 bg-white/10" />
            <Skeleton className="h-32 bg-white/10 rounded-xl" />
            <Skeleton className="h-32 bg-white/10 rounded-xl" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
