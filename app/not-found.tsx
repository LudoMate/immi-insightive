import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="container max-w-md text-center">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <h1 className="text-9xl font-bold text-[#0066FF]">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-6">Page Not Found</h2>
          <p className="text-gray-500 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-[#0066FF] text-white hover:bg-[#0066FF]/90 w-full">Go to Homepage</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" className="border-gray-200 text-gray-600 hover:text-[#0066FF] hover:border-[#0066FF] w-full">
                Go to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
