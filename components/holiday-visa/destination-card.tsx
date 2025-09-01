import Link from "next/link"
import { Button } from "@/components/ui/button"

interface DestinationCardProps {
  title: string
  subtitle: string
}

export function DestinationCard({ title, subtitle }: DestinationCardProps) {
  return (
    <div className="p-3 bg-[#0B1120]/5 rounded-lg">
      <p className="font-medium">{title}</p>
      <p className="text-sm text-[#0B1120]/70">{subtitle}</p>
    </div>
  )
}
