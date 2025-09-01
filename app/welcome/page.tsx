"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, CheckCircle2, Globe, MessageSquare, Upload, User } from "lucide-react"

export default function WelcomePage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5

  const steps = [
    {
      title: "Welcome to Immi Insightive",
      description: "Your journey to hassle-free immigration starts here. Let's get you set up with a few quick steps.",
      icon: CheckCircle2,
    },
    {
      title: "Complete Your Profile",
      description: "Add your personal information to help us personalize your experience.",
      icon: User,
      action: {
        text: "Go to Profile",
        href: "/profile",
      },
    },
    {
      title: "Upload Your Documents",
      description: "Upload your passport, ID, and other essential documents for verification.",
      icon: Upload,
      action: {
        text: "Upload Documents",
        href: "/upload-documents",
      },
    },
    {
      title: "Explore Visa Options",
      description: "Discover visa options that match your profile and requirements.",
      icon: Globe,
      action: {
        text: "Explore Options",
        href: "/services",
      },
    },
    {
      title: "Book a Consultation",
      description: "Schedule a consultation with our immigration experts for personalized guidance.",
      icon: MessageSquare,
      action: {
        text: "Book Now",
        href: "/consultation-booking",
      },
    },
  ]

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Complete onboarding
      document.cookie = "onboarding_complete=true; path=/; max-age=31536000"
      router.push("/dashboard")
    }
  }

  const handleSkip = () => {
    document.cookie = "onboarding_complete=true; path=/; max-age=31536000"
    router.push("/dashboard")
  }

  const currentStepData = steps[currentStep - 1]

  return (
    <div className="min-h-screen bg-[#0891b2] flex flex-col">
      <header className="bg-[#0e7490] py-4">
        <div className="container flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            Immi Insightive
          </Link>
          <Button variant="ghost" className="text-white hover:bg-white/10" onClick={handleSkip}>
            Skip
          </Button>
        </div>
      </header>

      <main className="flex-1 container py-8 flex flex-col items-center justify-center">
        <Card className="w-full max-w-3xl bg-[#0e7490] border-none text-white">
          <CardContent className="p-8">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-300">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-sm font-medium text-[#f4e04d]">
                  {Math.round((currentStep / totalSteps) * 100)}% Complete
                </span>
              </div>
              <Progress
                value={(currentStep / totalSteps) * 100}
                className="h-2 bg-white/10 [&>div]:bg-[#f4e04d]"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="bg-[#f4e04d] rounded-full p-4 text-black">
                <currentStepData.icon className="h-8 w-8" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl font-bold mb-4">{currentStepData.title}</h1>
                <p className="text-gray-300 mb-6">{currentStepData.description}</p>

                {currentStepData.action && (
                  <Link href={currentStepData.action.href}>
                    <Button className="bg-white/10 text-white hover:bg-white/20 mb-6">
                      {currentStepData.action.text}
                    </Button>
                  </Link>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  {currentStep > 1 && (
                    <Button
                      variant="outline"
                      className="bg-transparent border-white/20 text-white hover:bg-white/10"
                      onClick={() => setCurrentStep(currentStep - 1)}
                    >
                      Back
                    </Button>
                  )}
                  <Button className="bg-[#f4e04d] text-black hover:bg-[#f4e04d]/90" onClick={handleNext}>
                    {currentStep === totalSteps ? "Complete Setup" : "Next Step"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${index + 1 === currentStep ? "bg-[#f4e04d]" : "bg-white/30"}`}
              onClick={() => setCurrentStep(index + 1)}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </main>

      <footer className="bg-[#0e7490] py-4 text-center text-white/70 text-sm">
        <div className="container">
          <p>
            Need help?{" "}
            <Link href="/help" className="text-[#f4e04d] hover:underline">
              Contact our support team
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
