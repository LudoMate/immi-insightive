"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  X,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Users,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  Download,
  Star,
  MapPin,
} from "lucide-react"

interface WizardProps {
  onClose: () => void
}

export function WorkSettleWizard({ onClose }: WizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    continent: "",
    country: "",
    travelers: 1,
    familyMembers: 0,
    hasSpouse: false,
    hasChildren: false,
    childrenAges: [] as number[],
    sector: "",
    specificSkill: "",
    experience: "",
    yearsExperience: 0,
    visaType: "",
    email: "",
    phone: "",
    preferredContact: "email",
  })

  const [eligibilityScore, setEligibilityScore] = useState(0)
  const [eligibilityDetails, setEligibilityDetails] = useState<string[]>([])

  const totalSteps = 8
  const progress = (currentStep / totalSteps) * 100

  const steps = [
    "Get Started",
    "Select Continent",
    "Choose Country",
    "Travelers & Family",
    "Sector & Skills",
    "Experience Level",
    "Visa Type",
    "Get Catalog",
  ]

  const continents = [
    { name: "North America", countries: ["USA", "Canada"], icon: "🌎" },
    { name: "Europe", countries: ["UK", "Germany", "Netherlands", "France", "Sweden", "Norway"], icon: "🇪🇺" },
    { name: "Oceania", countries: ["Australia", "New Zealand"], icon: "🌏" },
    { name: "Asia", countries: ["Singapore", "Japan", "UAE", "Hong Kong"], icon: "🌏" },
    { name: "South America", countries: ["Chile", "Brazil"], icon: "🌎" },
    { name: "Africa", countries: ["South Africa"], icon: "🌍" },
  ]

  const sectors = [
    "Information Technology",
    "Healthcare & Medicine",
    "Engineering",
    "Finance & Banking",
    "Education",
    "Construction",
    "Hospitality & Tourism",
    "Manufacturing",
    "Research & Development",
    "Marketing & Sales",
    "Other",
  ]

  const visaTypes = [
    { name: "Skilled Worker Visa", desc: "For professionals with job offers" },
    { name: "Points-Based Immigration", desc: "Based on skills, age, education" },
    { name: "Entrepreneur/Investor Visa", desc: "For business owners and investors" },
    { name: "Working Holiday Visa", desc: "For young professionals (18-30)" },
    { name: "Intra-Company Transfer", desc: "For employees of multinational companies" },
    { name: "Graduate Visa", desc: "For recent graduates" },
  ]

  const handleNext = () => {
    if (currentStep === 7) {
      // Calculate eligibility score before moving to final step
      calculateEligibility()
    }
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const calculateEligibility = () => {
    let score = 0
    const details: string[] = []

    // Age factor (assuming 25-35 is optimal)
    score += 20
    details.push("Age factor: 20 points")

    // Experience
    if (formData.yearsExperience >= 5) {
      score += 25
      details.push("Experience (5+ years): 25 points")
    } else if (formData.yearsExperience >= 2) {
      score += 15
      details.push("Experience (2-4 years): 15 points")
    } else {
      score += 5
      details.push("Experience (0-1 years): 5 points")
    }

    // Sector demand
    if (["Information Technology", "Healthcare & Medicine", "Engineering"].includes(formData.sector)) {
      score += 20
      details.push("High-demand sector: 20 points")
    } else {
      score += 10
      details.push("Standard sector: 10 points")
    }

    // Family composition
    if (!formData.hasSpouse && !formData.hasChildren) {
      score += 15
      details.push("Single applicant: 15 points")
    } else if (formData.hasSpouse && !formData.hasChildren) {
      score += 10
      details.push("Married, no children: 10 points")
    } else {
      score += 5
      details.push("Family with children: 5 points")
    }

    // Country selection bonus
    if (["Canada", "Australia", "New Zealand"].includes(formData.country)) {
      score += 10
      details.push("Immigration-friendly country: 10 points")
    }

    setEligibilityScore(Math.min(score, 100))
    setEligibilityDetails(details)
  }

  const getSelectedCountries = () => {
    const continent = continents.find((c) => c.name === formData.continent)
    return continent ? continent.countries : []
  }

  const canProceed = () => {
    switch (currentStep) {
      case 2:
        return formData.continent !== ""
      case 3:
        return formData.country !== ""
      case 4:
        return formData.travelers > 0
      case 5:
        return formData.sector !== ""
      case 6:
        return formData.experience !== ""
      case 7:
        return formData.visaType !== ""
      case 8:
        return formData.email !== ""
      default:
        return true
    }
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Work & Settle Assessment</CardTitle>
              <p className="text-muted-foreground mt-1">
                Step {currentStep} of {totalSteps}: {steps[currentStep - 1]}
              </p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-4">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              {steps.map((step, index) => (
                <span key={index} className={index + 1 <= currentStep ? "text-primary font-medium" : ""}>
                  {step}
                </span>
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          {/* Step 1: Get Started */}
          {currentStep === 1 && (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Welcome to Your Immigration Journey!</h3>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  We'll guide you through a comprehensive assessment to determine your eligibility for work visas and
                  settlement programs worldwide. This process takes about 5-10 minutes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary">5-10</div>
                  <div className="text-sm text-muted-foreground">Minutes to complete</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Countries available</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary">Free</div>
                  <div className="text-sm text-muted-foreground">Assessment & catalog</div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Select Continent */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Select Your Preferred Continent</h3>
                <p className="text-muted-foreground">Choose the continent where you'd like to work and settle</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {continents.map((continent) => (
                  <Card
                    key={continent.name}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      formData.continent === continent.name ? "ring-2 ring-primary bg-primary/5" : ""
                    }`}
                    onClick={() => updateFormData("continent", continent.name)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3">{continent.icon}</div>
                      <h4 className="font-semibold mb-2">{continent.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {continent.countries.slice(0, 3).join(", ")}
                        {continent.countries.length > 3 && "..."}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Choose Country */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Choose Your Target Country</h3>
                <p className="text-muted-foreground">Select the specific country you're interested in</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getSelectedCountries().map((country) => (
                  <Card
                    key={country}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      formData.country === country ? "ring-2 ring-primary bg-primary/5" : ""
                    }`}
                    onClick={() => updateFormData("country", country)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-secondary/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-secondary" />
                      </div>
                      <h4 className="font-semibold">{country}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Travelers & Family */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Travelers & Family Details</h3>
                <p className="text-muted-foreground">Tell us about who will be traveling</p>
              </div>

              <div className="max-w-2xl mx-auto space-y-6">
                <div>
                  <Label htmlFor="travelers">Number of Travelers (including yourself)</Label>
                  <Select
                    value={formData.travelers.toString()}
                    onValueChange={(value) => updateFormData("travelers", Number.parseInt(value))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "person" : "people"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card
                    className={`cursor-pointer transition-all ${formData.hasSpouse ? "ring-2 ring-primary bg-primary/5" : ""}`}
                    onClick={() => updateFormData("hasSpouse", !formData.hasSpouse)}
                  >
                    <CardContent className="p-4 text-center">
                      <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <h4 className="font-medium">Spouse/Partner</h4>
                      <p className="text-sm text-muted-foreground">Traveling with spouse</p>
                    </CardContent>
                  </Card>

                  <Card
                    className={`cursor-pointer transition-all ${formData.hasChildren ? "ring-2 ring-primary bg-primary/5" : ""}`}
                    onClick={() => updateFormData("hasChildren", !formData.hasChildren)}
                  >
                    <CardContent className="p-4 text-center">
                      <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <h4 className="font-medium">Children</h4>
                      <p className="text-sm text-muted-foreground">Traveling with children</p>
                    </CardContent>
                  </Card>
                </div>

                {formData.hasChildren && (
                  <div>
                    <Label>Number of Children</Label>
                    <Select
                      value={formData.familyMembers.toString()}
                      onValueChange={(value) => updateFormData("familyMembers", Number.parseInt(value))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of children" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "child" : "children"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 5: Sector & Skills */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Your Sector & Skills</h3>
                <p className="text-muted-foreground">Tell us about your professional background</p>
              </div>

              <div className="max-w-2xl mx-auto space-y-6">
                <div>
                  <Label htmlFor="sector">Primary Sector</Label>
                  <Select value={formData.sector} onValueChange={(value) => updateFormData("sector", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your sector" />
                    </SelectTrigger>
                    <SelectContent>
                      {sectors.map((sector) => (
                        <SelectItem key={sector} value={sector}>
                          {sector}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="skill">Specific Skill/Role</Label>
                  <Input
                    id="skill"
                    placeholder="e.g., Software Developer, Registered Nurse, Civil Engineer"
                    value={formData.specificSkill}
                    onChange={(e) => updateFormData("specificSkill", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["Information Technology", "Healthcare & Medicine", "Engineering"].map((highDemand) => (
                    <div key={highDemand} className="p-3 bg-secondary/10 rounded-lg text-center">
                      <Star className="w-5 h-5 mx-auto mb-1 text-secondary" />
                      <p className="text-xs font-medium">High Demand</p>
                      <p className="text-xs text-muted-foreground">{highDemand}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Experience Level */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Experience Level</h3>
                <p className="text-muted-foreground">How much professional experience do you have?</p>
              </div>

              <div className="max-w-2xl mx-auto space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { level: "Beginner", desc: "0-2 years experience", value: "beginner" },
                    { level: "Experienced", desc: "3+ years experience", value: "experienced" },
                  ].map((exp) => (
                    <Card
                      key={exp.value}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        formData.experience === exp.value ? "ring-2 ring-primary bg-primary/5" : ""
                      }`}
                      onClick={() => updateFormData("experience", exp.value)}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-2">{exp.level}</h4>
                        <p className="text-sm text-muted-foreground">{exp.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div>
                  <Label htmlFor="years">Years of Experience</Label>
                  <Select
                    value={formData.yearsExperience.toString()}
                    onValueChange={(value) => updateFormData("yearsExperience", Number.parseInt(value))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select years of experience" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 21 }, (_, i) => (
                        <SelectItem key={i} value={i.toString()}>
                          {i} {i === 1 ? "year" : "years"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 7: Visa Type */}
          {currentStep === 7 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Preferred Visa Type</h3>
                <p className="text-muted-foreground">Which type of visa best matches your goals?</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {visaTypes.map((visa) => (
                  <Card
                    key={visa.name}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      formData.visaType === visa.name ? "ring-2 ring-primary bg-primary/5" : ""
                    }`}
                    onClick={() => updateFormData("visaType", visa.name)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{visa.name}</h4>
                          <p className="text-sm text-muted-foreground">{visa.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 8: Get Catalog */}
          {currentStep === 8 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Your Eligibility Results</h3>
                <p className="text-muted-foreground">Based on your profile, here's your assessment</p>
              </div>

              {/* Eligibility Score */}
              <div className="max-w-2xl mx-auto">
                <Card className="mb-6">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">{eligibilityScore}</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Eligibility Score</h4>
                    <p className="text-muted-foreground">
                      {eligibilityScore >= 80
                        ? "Excellent"
                        : eligibilityScore >= 60
                          ? "Good"
                          : eligibilityScore >= 40
                            ? "Fair"
                            : "Needs Improvement"}{" "}
                      chances for {formData.country}
                    </p>
                  </CardContent>
                </Card>

                {/* Score Breakdown */}
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Score Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {eligibilityDetails.map((detail, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Form */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Get Your Detailed Catalog</CardTitle>
                    <p className="text-muted-foreground">Receive a personalized immigration guide via email or SMS</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label>Preferred Contact Method</Label>
                      <div className="flex gap-4 mt-2">
                        <Button
                          variant={formData.preferredContact === "email" ? "default" : "outline"}
                          size="sm"
                          onClick={() => updateFormData("preferredContact", "email")}
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </Button>
                        <Button
                          variant={formData.preferredContact === "sms" ? "default" : "outline"}
                          size="sm"
                          onClick={() => updateFormData("preferredContact", "sms")}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          SMS
                        </Button>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Button className="w-full" size="lg">
                        <Download className="w-4 h-4 mr-2" />
                        Send My Immigration Catalog
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        You'll receive a detailed PDF guide with visa options, requirements, and next steps.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button onClick={handleNext} disabled={!canProceed()}>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={onClose} variant="secondary">
                Complete Assessment
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
