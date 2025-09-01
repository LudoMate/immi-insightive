import { Button } from "@/components/ui/button"
import { Sparkles, TrendingUp, Briefcase, Plane } from "lucide-react"
import Link from "next/link"

interface WhatsNewCardProps {
  className?: string
  showButton?: boolean
}

export default function WhatsNewCard({ className, showButton = true }: WhatsNewCardProps) {
  return (
    <div
      className={`p-8 bg-[#0B1120] backdrop-blur-md rounded-xl max-w-md shadow-lg border border-[#0B1120]/10 ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-blue-600/20 p-2 rounded-full">
          <Sparkles className="h-5 w-5 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-white">WHAT'S NEW?</h2>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mt-1">
            <TrendingUp className="h-4 w-4 text-blue-500" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Express Processing</h3>
            <p className="text-gray-300 text-sm">New expedited visa processing for select countries</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mt-1">
            <Briefcase className="h-4 w-4 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Remote Work Visas</h3>
            <p className="text-gray-300 text-sm">Digital nomad options now available in 15+ countries</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mt-1">
            <Plane className="h-4 w-4 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-white">New Destinations</h3>
            <p className="text-gray-300 text-sm">Explore visa options for 10 newly added countries</p>
          </div>
        </div>
      </div>

      {showButton && (
        <Link href="/new-features">
          <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full transition-colors">Discover More</Button>
        </Link>
      )}

      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#4ecdc4]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-[#f4e04d]/10 rounded-full blur-2xl"></div>
    </div>
  )
}
