"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Target, Users, Clock, Heart, Minus, Plus } from "lucide-react"
import type { Country } from "../../types"

interface Props {
  country: Country
  continent: string
}

interface FormData {
  purpose: string
  travelers: number
  duration: string
  interests: string[]
}

const purposes = [
  "Sightseeing & Tourism",
  "Adventure & Sports",
  "Cultural Experience",
  "Relaxation & Wellness",
  "Food & Culinary",
  "Photography",
]

const durations = ["1-2 weeks", "1 month", "3 months", "6 months", "1 year or more"]

const interests = [
  "Photography",
  "Hiking",
  "Museums",
  "Food & Dining",
  "Nightlife",
  "Shopping",
  "Nature",
  "Architecture",
  "Music",
  "Sports",
  "Art & Culture",
  "Technology",
  "History",
  "Adventure Sports",
]

export default function VisaCalculator({ country, continent }: Props) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    purpose: "",
    travelers: 1,
    duration: "",
    interests: [],
  })

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handlePurposeSelect = (purpose: string) => {
    setFormData({ ...formData, purpose })
  }

  const handleTravelersChange = (change: number) => {
    const newCount = Math.max(1, formData.travelers + change)
    setFormData({ ...formData, travelers: newCount })
  }

  const handleDurationSelect = (duration: string) => {
    setFormData({ ...formData, duration })
  }

  const handleInterestToggle = (interest: string) => {
    const newInterests = formData.interests.includes(interest)
      ? formData.interests.filter((i) => i !== interest)
      : [...formData.interests, interest]
    setFormData({ ...formData, interests: newInterests })
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How many travelers?</h2>
              <p className="text-gray-600">Including yourself</p>
            </div>

            <div className="flex items-center justify-center gap-6 mb-8">
              <button
                onClick={() => handleTravelersChange(-1)}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-500 transition-colors"
                disabled={formData.travelers <= 1}
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="text-4xl font-bold text-gray-900 min-w-[60px]">{formData.travelers}</span>
              <button
                onClick={() => handleTravelersChange(1)}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-500 transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How long do you plan to stay?</h2>
              <p className="text-gray-600">This helps us recommend the right visa type</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {durations.map((duration) => (
                <button
                  key={duration}
                  onClick={() => handleDurationSelect(duration)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    formData.duration === duration
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="font-medium text-gray-900">{duration}</span>
                </button>
              ))}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{"What's your main purpose?"}</h2>
              <p className="text-gray-600">This helps us provide tailored recommendations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {purposes.map((purpose) => (
                <button
                  key={purpose}
                  onClick={() => handlePurposeSelect(purpose)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    formData.purpose === purpose
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="font-medium text-gray-900">{purpose}</span>
                </button>
              ))}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What are your interests?</h2>
              <p className="text-gray-600">Select activities you enjoy (optional)</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {interests.map((interest) => (
                <button
                  key={interest}
                  onClick={() => handleInterestToggle(interest)}
                  className={`p-3 rounded-xl border-2 transition-all text-sm ${
                    formData.interests.includes(interest)
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="font-medium text-gray-900">{interest}</span>
                </button>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href={`/destinations/${continent.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">holiday visa to {country.name}</span>
            </div>
            <span className="text-sm text-gray-500">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="container max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm font-medium text-gray-700">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Card className="bg-white rounded-2xl shadow-lg p-8 md:p-12">{renderStepContent()}</Card>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="px-6 bg-transparent"
          >
            Previous
          </Button>

          {currentStep === totalSteps ? (
            <Button className="px-6 bg-blue-600 hover:bg-blue-700">Continue to Registration →</Button>
          ) : (
            <Button onClick={handleNext} className="px-6 bg-blue-600 hover:bg-blue-700">
              Next →
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
