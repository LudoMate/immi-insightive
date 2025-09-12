"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Globe,
  Users,
  GraduationCap,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react"
import { useRouter } from "next/navigation"

interface FormData {
  continent: string
  country: string
  studentCount: number
  program: string
  courseStream: string
  university: string
  contactMethod: string
  email: string
  phone: string
}

export default function StudyAbroadFlow() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 9
  const [formData, setFormData] = useState<FormData>({
    continent: "",
    country: "",
    studentCount: 1,
    program: "",
    courseStream: "",
    university: "",
    contactMethod: "",
    email: "",
    phone: "",
  })

  const continents = [
    { id: "north-america", name: "North America", countries: ["USA", "Canada"], icon: "🌎" },
    { id: "europe", name: "Europe", countries: ["UK", "Germany", "France", "Netherlands"], icon: "🇪🇺" },
    { id: "oceania", name: "Oceania", countries: ["Australia", "New Zealand"], icon: "🇦🇺" },
    { id: "asia", name: "Asia", countries: ["Singapore", "Japan", "South Korea"], icon: "🌏" },
  ]

  const studyPrograms = [
    {
      id: "undergraduate",
      title: "Undergraduate Programs",
      description: "Bachelor's degrees (3-4 years)",
      icon: <GraduationCap className="h-8 w-8" />,
      duration: "3-4 years",
      cost: "$25,000 - $60,000/year",
    },
    {
      id: "postgraduate",
      title: "Postgraduate Programs",
      description: "Master's & PhD programs (1-3 years)",
      icon: <BookOpen className="h-8 w-8" />,
      duration: "1-3 years",
      cost: "$20,000 - $50,000/year",
    },
    {
      id: "language",
      title: "Language Courses",
      description: "Intensive language programs (3-12 months)",
      icon: <Globe className="h-8 w-8" />,
      duration: "3-12 months",
      cost: "$5,000 - $15,000/year",
    },
  ]

  const courseStreams = [
    { id: "engineering", name: "Engineering & Technology", icon: "⚙️" },
    { id: "business", name: "Business & Management", icon: "💼" },
    { id: "medicine", name: "Medicine & Healthcare", icon: "🏥" },
    { id: "arts", name: "Arts & Humanities", icon: "🎨" },
    { id: "science", name: "Science & Research", icon: "🔬" },
    { id: "law", name: "Law & Legal Studies", icon: "⚖️" },
  ]

  const universities = [
    {
      id: "harvard",
      name: "Harvard University",
      location: "USA",
      ranking: "#1 Global",
      tuition: "$54,000/year",
      acceptance: "3.4%",
    },
    {
      id: "oxford",
      name: "University of Oxford",
      location: "UK",
      ranking: "#2 Global",
      tuition: "$45,000/year",
      acceptance: "17.5%",
    },
    {
      id: "mit",
      name: "MIT",
      location: "USA",
      ranking: "#3 Global",
      tuition: "$57,000/year",
      acceptance: "4.1%",
    },
  ]

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

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData)
    router.push("/dashboard")
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center">
            <Globe className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Continent</h2>
            <p className="text-gray-600 mb-8">Select the region where you'd like to study</p>

            <div className="grid md:grid-cols-2 gap-6">
              {continents.map((continent) => (
                <Card
                  key={continent.id}
                  className={`study-card cursor-pointer ${
                    formData.continent === continent.id ? "ring-2 ring-emerald-500 border-emerald-300" : ""
                  }`}
                  onClick={() => setFormData({ ...formData, continent: continent.id })}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{continent.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{continent.name}</h3>
                    <p className="text-sm text-gray-600">{continent.countries.length} countries available</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case 2:
        const selectedContinent = continents.find((c) => c.id === formData.continent)
        return (
          <div className="text-center">
            <MapPin className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Select Your Country</h2>
            <p className="text-gray-600 mb-8">Choose your preferred study destination</p>

            <div className="grid md:grid-cols-2 gap-6">
              {selectedContinent?.countries.map((country) => (
                <Card
                  key={country}
                  className={`study-card cursor-pointer ${
                    formData.country === country ? "ring-2 ring-emerald-500 border-emerald-300" : ""
                  }`}
                  onClick={() => setFormData({ ...formData, country })}
                >
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{country}</h3>
                    <p className="text-sm text-gray-600">Popular study destination</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="text-center">
            <Users className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Number of Students</h2>
            <p className="text-gray-600 mb-8">How many students will be applying?</p>

            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setFormData({ ...formData, studentCount: Math.max(1, formData.studentCount - 1) })}
                  disabled={formData.studentCount <= 1}
                >
                  -
                </Button>
                <div className="text-center">
                  <div className="text-6xl font-bold text-emerald-600">{formData.studentCount}</div>
                  <p className="text-gray-600 mt-2">
                    {formData.studentCount === 1 ? "Including yourself" : "Students"}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setFormData({ ...formData, studentCount: formData.studentCount + 1 })}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="text-center">
            <GraduationCap className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Study Programs</h2>
            <p className="text-gray-600 mb-8">Choose your preferred program type</p>

            <div className="grid gap-6">
              {studyPrograms.map((program) => (
                <Card
                  key={program.id}
                  className={`study-card cursor-pointer ${
                    formData.program === program.id ? "ring-2 ring-emerald-500 border-emerald-300" : ""
                  }`}
                  onClick={() => setFormData({ ...formData, program: program.id })}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600">{program.icon}</div>
                      <div className="flex-1 text-left">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                        <p className="text-gray-600 mb-4">{program.description}</p>
                        <div className="flex gap-6 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {program.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {program.cost}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case 5:
        return (
          <div className="text-center">
            <BookOpen className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Stream</h2>
            <p className="text-gray-600 mb-8">Select your field of study</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseStreams.map((stream) => (
                <Card
                  key={stream.id}
                  className={`study-card cursor-pointer ${
                    formData.courseStream === stream.id ? "ring-2 ring-emerald-500 border-emerald-300" : ""
                  }`}
                  onClick={() => setFormData({ ...formData, courseStream: stream.id })}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{stream.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{stream.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case 6:
        return (
          <div className="text-center">
            <GraduationCap className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Universities</h2>
            <p className="text-gray-600 mb-8">Choose from top-ranked universities</p>

            <div className="space-y-4">
              {universities.map((university) => (
                <Card
                  key={university.id}
                  className={`study-card cursor-pointer ${
                    formData.university === university.id ? "ring-2 ring-emerald-500 border-emerald-300" : ""
                  }`}
                  onClick={() => setFormData({ ...formData, university: university.id })}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <h3 className="text-xl font-semibold text-gray-900">{university.name}</h3>
                        <p className="text-gray-600">{university.location}</p>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-emerald-100 text-emerald-800 mb-2">{university.ranking}</Badge>
                        <div className="text-sm text-gray-600">
                          <div>Tuition: {university.tuition}</div>
                          <div>Acceptance: {university.acceptance}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case 7:
        const selectedProgram = studyPrograms.find((p) => p.id === formData.program)
        const totalCost = formData.studentCount * 35000 // Example calculation
        return (
          <div className="text-center">
            <DollarSign className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Summary</h2>
            <p className="text-gray-600 mb-8">Your personalized study abroad package</p>

            <Card className="study-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Program Type:</span>
                    <span className="font-semibold">{selectedProgram?.title}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Number of Students:</span>
                    <span className="font-semibold">{formData.studentCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Destination:</span>
                    <span className="font-semibold">{formData.country}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center text-xl">
                    <span className="font-semibold">Estimated Total Cost:</span>
                    <span className="font-bold text-emerald-600">${totalCost.toLocaleString()}/year</span>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <p className="text-sm text-emerald-800">
                      💡 This includes tuition, accommodation, and living expenses. Final costs may vary based on
                      specific university and program selection.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case 8:
        return (
          <div className="text-center">
            <MessageCircle className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How would you like to receive offers?</h2>
            <p className="text-gray-600 mb-8">Choose your preferred contact method</p>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card
                className={`study-card cursor-pointer ${
                  formData.contactMethod === "email" ? "ring-2 ring-emerald-500 border-emerald-300" : ""
                }`}
                onClick={() => setFormData({ ...formData, contactMethod: "email" })}
              >
                <CardContent className="p-6 text-center">
                  <Mail className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">Receive detailed offers via email</p>
                </CardContent>
              </Card>

              <Card
                className={`study-card cursor-pointer ${
                  formData.contactMethod === "whatsapp" ? "ring-2 ring-emerald-500 border-emerald-300" : ""
                }`}
                onClick={() => setFormData({ ...formData, contactMethod: "whatsapp" })}
              >
                <CardContent className="p-6 text-center">
                  <Phone className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-600">Get instant updates on WhatsApp</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case 9:
        return (
          <div className="text-center">
            <Mail className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-8">Provide your contact details to receive offers</p>

            <div className="max-w-md mx-auto space-y-6">
              <div>
                <label className="block text-left text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="immi-input"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {formData.contactMethod === "whatsapp" && (
                <div>
                  <label className="block text-left text-gray-700 font-medium mb-2">WhatsApp Number</label>
                  <input
                    type="tel"
                    className="immi-input"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              )}

              <div className="bg-emerald-50 p-4 rounded-lg text-left">
                <h4 className="font-semibold text-emerald-800 mb-2">What happens next?</h4>
                <ul className="text-sm text-emerald-700 space-y-1">
                  <li>• We'll match you with suitable universities</li>
                  <li>• Receive personalized program offers</li>
                  <li>• Get guidance on application process</li>
                  <li>• Connect with our education consultants</li>
                </ul>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const progress = (currentStep / totalSteps) * 100

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Study Abroad Application</h1>
            <Badge variant="outline" className="text-emerald-600 border-emerald-200">
              Step {currentStep} of {totalSteps}
            </Badge>
          </div>
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-gray-600 mt-2">{Math.round(progress)}% Complete</p>
        </div>

        {/* Step Content */}
        <Card className="study-card mb-8">
          <CardContent className="p-8">{renderStepContent()}</CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center gap-2 bg-transparent"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </Button>

          {currentStep === totalSteps ? (
            <Button
              onClick={handleSubmit}
              className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2"
              disabled={!formData.email || (formData.contactMethod === "whatsapp" && !formData.phone)}
            >
              Submit Application
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </main>
  )
}
