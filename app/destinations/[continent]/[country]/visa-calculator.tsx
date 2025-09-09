"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Target, Users, Clock, Heart, Minus, Plus, MapPin, Mail, UserPlus } from "lucide-react"
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
  selectedPlaces: string[]
  email: string
  subscribeNewsletter: boolean
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

const placeRecommendations = {
  Photography: [
    { name: "Historic City Center", price: 45, description: "Perfect for architectural photography" },
    { name: "Scenic Viewpoints", price: 35, description: "Breathtaking landscape shots" },
  ],
  Museums: [
    { name: "National Art Museum", price: 25, description: "World-class art collections" },
    { name: "History Museum", price: 20, description: "Rich cultural heritage" },
  ],
  "Food & Dining": [
    { name: "Local Food Tour", price: 65, description: "Authentic culinary experience" },
    { name: "Cooking Class", price: 55, description: "Learn traditional recipes" },
  ],
  Nature: [
    { name: "National Park", price: 40, description: "Pristine natural landscapes" },
    { name: "Botanical Gardens", price: 15, description: "Beautiful flora and fauna" },
  ],
  "Adventure Sports": [
    { name: "Mountain Hiking", price: 50, description: "Challenging trails with guides" },
    { name: "Water Sports", price: 70, description: "Kayaking and rafting" },
  ],
  Architecture: [
    { name: "Architectural Walking Tour", price: 30, description: "Historic buildings and landmarks" },
    { name: "Modern District", price: 25, description: "Contemporary architectural marvels" },
  ],
  Nightlife: [
    { name: "Entertainment District", price: 60, description: "Vibrant nightlife scene" },
    { name: "Cultural Shows", price: 45, description: "Traditional performances" },
  ],
  Shopping: [
    { name: "Local Markets", price: 20, description: "Authentic local products" },
    { name: "Shopping Districts", price: 30, description: "Modern retail experience" },
  ],
}

export default function VisaCalculator({ country, continent }: Props) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    purpose: "",
    travelers: 1,
    duration: "",
    interests: [],
    selectedPlaces: [],
    email: "",
    subscribeNewsletter: false,
  })

  const totalSteps = 6
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

  const handlePlaceToggle = (placeName: string) => {
    const newPlaces = formData.selectedPlaces.includes(placeName)
      ? formData.selectedPlaces.filter((p) => p !== placeName)
      : [...formData.selectedPlaces, placeName]
    setFormData({ ...formData, selectedPlaces: newPlaces })
  }

  const handleEmailChange = (email: string) => {
    setFormData({ ...formData, email })
  }

  const handleNewsletterToggle = (checked: boolean) => {
    setFormData({ ...formData, subscribeNewsletter: checked })
  }

  const getRecommendedPlaces = () => {
    const recommended: Array<{ name: string; price: number; description: string; category: string }> = []

    formData.interests.forEach((interest) => {
      if (placeRecommendations[interest as keyof typeof placeRecommendations]) {
        placeRecommendations[interest as keyof typeof placeRecommendations].forEach((place) => {
          recommended.push({ ...place, category: interest })
        })
      }
    })

    if (recommended.length === 0) {
      recommended.push(
        { name: "City Center Tour", price: 35, description: "Essential city highlights", category: "General" },
        { name: "Cultural Sites", price: 30, description: "Important cultural landmarks", category: "General" },
      )
    }

    return recommended
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

      case 5:
        const recommendedPlaces = getRecommendedPlaces()
        return (
          <div className="text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommended Places</h2>
              <p className="text-gray-600">
                Based on your interests • Pricing for {formData.travelers}{" "}
                {formData.travelers === 1 ? "person" : "people"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {recommendedPlaces.map((place, index) => (
                <button
                  key={`${place.name}-${index}`}
                  onClick={() => handlePlaceToggle(place.name)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    formData.selectedPlaces.includes(place.name)
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{place.name}</h3>
                    <span className="text-blue-600 font-bold">${place.price * formData.travelers}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{place.description}</p>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">{place.category}</span>
                </button>
              ))}
            </div>
          </div>
        )

      case 6:
        const totalCost = getRecommendedPlaces()
          .filter((place) => formData.selectedPlaces.includes(place.name))
          .reduce((sum, place) => sum + place.price * formData.travelers, 0)

        return (
          <div className="text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Your Application</h2>
              <p className="text-gray-600">Get your personalized visa guide and travel recommendations</p>
            </div>

            {formData.selectedPlaces.length > 0 && (
              <div className="bg-blue-50 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
                <h3 className="font-semibold text-gray-900 mb-2">Your Selection Summary</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {formData.selectedPlaces.length} places selected for {formData.travelers}{" "}
                  {formData.travelers === 1 ? "person" : "people"}
                </p>
                <p className="text-2xl font-bold text-blue-600">Total: ${totalCost}</p>
              </div>
            )}

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6 max-w-2xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">Get Travel Catalogue</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Receive a personalized travel guide with visa requirements, local tips, and exclusive offers.
              </p>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-left block mb-2">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.subscribeNewsletter}
                    onCheckedChange={handleNewsletterToggle}
                  />
                  <Label htmlFor="newsletter" className="text-sm text-gray-600">
                    Subscribe to our newsletter for travel tips and visa updates
                  </Label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <Button className="bg-blue-600 hover:bg-blue-700 h-12">Get Travel Catalogue</Button>
              <Link href="/applications/new">
                <Button
                  variant="outline"
                  className="h-12 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent w-full"
                >
                  Start Visa Application
                </Button>
              </Link>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
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

      <div className="bg-white border-b">
        <div className="container max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm font-medium text-gray-700">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Card className="bg-white rounded-2xl shadow-lg p-8 md:p-12">{renderStepContent()}</Card>

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
            <Button className="px-6 bg-green-600 hover:bg-green-700" disabled={!formData.email}>
              Complete Application →
            </Button>
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
