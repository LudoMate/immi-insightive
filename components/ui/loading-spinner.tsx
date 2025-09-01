"use client"

import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8"
}

export function LoadingSpinner({
  size = "md",
  className,
  ...props
}: LoadingSpinnerProps) {
  return (
    <div role="status" className={className} {...props}>
      <Loader2 
        className={cn(
          "animate-spin text-gray-400", 
          sizeClasses[size]
        )} 
      />
      <span className="sr-only">Loading...</span>
    </div>
  )
}
