'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { MessageSquare, Phone, Video, Calendar, Clock, Globe, Users, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function ConsultationPage() {
  const [consultationType, setConsultationType] = useState('video');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [topic, setTopic] = useState('');
  const [details, setDetails] = useState('');
  const [step, setStep] = useState(1);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Available time slots
  const timeSlots = [
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'
  ];

  // Consultation benefits
  const benefits = [
    {
      icon: Globe,
      title: "Global Expertise",
      description: "Get advice from experts with international immigration experience"
    },
    {
      icon: Users,
      title: "Personalized Guidance",
      description: "One-on-one consultation tailored to your specific needs"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose from multiple time slots that suit your schedule"
    }
  ];

  const handleSubmit = async () => {
    if (!consultationType || !date || !selectedTimeSlot || !topic) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Here you would implement the actual API call
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated API delay
      setShowSuccess(true);
      // Reset form
      setConsultationType('video');
      setDate('');
      setSelectedTimeSlot('');
      setTopic('');
      setDetails('');
      setStep(1);
    } catch (error) {
      console.error('Failed to schedule consultation:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        {showSuccess && (
          <Alert className="max-w-3xl mx-auto mb-8 bg-green-50 border-green-200">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <AlertDescription className="text-green-800">
              Your consultation has been scheduled successfully! You will receive a confirmation email shortly.
            </AlertDescription>
          </Alert>
        )}
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-6">
            <Badge className="bg-blue-50 text-blue-700 border-blue-200 text-sm px-4 py-1 rounded-full">
              Professional Immigration Consultation
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B1120] mb-6 leading-tight">
            Book Your Personal Immigration <br className="hidden md:block" />
            <span className="text-blue-600">Consultation Session</span>
          </h1>
          <p className="text-[#0B1120]/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Get expert guidance tailored to your immigration needs. Our consultants have helped thousands of clients achieve their immigration goals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>30-minute detailed consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Expert immigration advisors</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Personalized action plan</span>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border border-[#0B1120]/10 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-blue-50 mb-4">
                      <benefit.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Steps Indicator */}
          <div className="flex items-center justify-center mt-8 mb-12">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>1</div>
              <div className={`w-20 h-1 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>2</div>
              <div className={`w-20 h-1 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>3</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border border-[#0B1120]/10 shadow-lg">
              <CardHeader className="border-b border-[#0B1120]/10">
                <CardTitle className="text-[#0B1120] text-2xl">
                  {step === 1 && "Choose Consultation Type"}
                  {step === 2 && "Select Date & Time"}
                  {step === 3 && "Provide Details"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 py-4">
                  {/* Consultation Type */}
                  <div className="space-y-4">
                    <Label className="text-lg text-[#0B1120] block">Select Consultation Type</Label>
                    <RadioGroup
                      value={consultationType}
                      onValueChange={setConsultationType}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="video" id="video" />
                        <Label htmlFor="video" className="text-[#0B1120]">
                          <div className="flex items-center gap-2">
                            <Video className="h-4 w-4" />
                            <span>Video Call</span>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone" />
                        <Label htmlFor="phone" className="text-[#0B1120]">
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span>Phone Call</span>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="chat" id="chat" />
                        <Label htmlFor="chat" className="text-[#0B1120]">
                          <div className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4" />
                            <span>Chat</span>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Date & Time */}
                  <div className="space-y-4">
                    <Label className="text-lg text-[#0B1120] block">Select Date & Time</Label>
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <Label htmlFor="date" className="text-[#0B1120] mb-2 block flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-blue-600" />
                          <span>Select Date</span>
                        </Label>
                        <input
                          type="date"
                          id="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full p-2 border border-[#0B1120]/10 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                      <div>
                        <Label className="text-[#0B1120] mb-2 block flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span>Available Time Slots</span>
                        </Label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                          {timeSlots.map((slot) => (
                            <Button
                              key={slot}
                              type="button"
                              variant={selectedTimeSlot === slot ? 'default' : 'outline'}
                              className={`py-2 px-4 ${
                                selectedTimeSlot === slot 
                                  ? 'bg-blue-600 text-white' 
                                  : 'border-[#0B1120]/10 hover:bg-blue-50'
                              }`}
                              onClick={() => setSelectedTimeSlot(slot)}
                            >
                              {slot}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Topic & Details */}
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="topic" className="text-[#0B1120] mb-2 block">
                        <div className="flex items-center gap-2 mb-1">
                          <Globe className="h-4 w-4 text-blue-600" />
                          <span>Consultation Topic</span>
                        </div>
                        <span className="text-sm font-normal text-gray-500">Choose the main topic you'd like to discuss</span>
                      </Label>
                      <select
                        id="topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full p-2 border border-[#0B1120]/10 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="">Select a topic...</option>
                        <option value="Work Visa">Work Visa</option>
                        <option value="Study Permit">Study Permit</option>
                        <option value="Permanent Residency">Permanent Residency</option>
                        <option value="Business Immigration">Business Immigration</option>
                        <option value="Family Sponsorship">Family Sponsorship</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="details" className="text-[#0B1120] mb-2 block">
                        <div className="flex items-center gap-2 mb-1">
                          <MessageSquare className="h-4 w-4 text-blue-600" />
                          <span>Additional Details</span>
                        </div>
                        <span className="text-sm font-normal text-gray-500">Help us prepare by providing specific details about your case</span>
                      </Label>
                      <Textarea
                        id="details"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        placeholder="Please share your current situation, specific questions, or any concerns you'd like to discuss during the consultation."
                        className="w-full min-h-[120px] p-3 border border-[#0B1120]/10 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center pt-8">
                    {step > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(step - 1)}
                        className="px-6"
                        disabled={isSubmitting}
                      >
                        Previous
                      </Button>
                    )}
                    <div className="ml-auto flex items-center gap-4">
                      {step < 3 ? (
                        <Button
                          type="button"
                          onClick={() => setStep(step + 1)}
                          className="bg-blue-600 text-white hover:bg-blue-700 px-6"
                          disabled={
                            (step === 1 && !consultationType) ||
                            (step === 2 && (!date || !selectedTimeSlot))
                          }
                        >
                          Continue
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          onClick={handleSubmit}
                          className="bg-blue-600 text-white hover:bg-blue-700 px-6 min-w-[160px]"
                          disabled={isSubmitting || !consultationType || !date || !selectedTimeSlot || !topic}
                        >
                          {isSubmitting ? 'Scheduling...' : 'Schedule Consultation'}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary Card */}
          <div className="lg:col-span-1">
            <Card className="border border-[#0B1120]/10 sticky top-4 shadow-lg">
              <CardHeader className="border-b border-[#0B1120]/10">
                <CardTitle className="text-[#0B1120] text-xl">Consultation Summary</CardTitle>
                <CardDescription>Review your booking details</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="font-medium text-blue-800 mb-1">Consultation Type</div>
                    <div className="flex items-center gap-2 text-blue-700">
                      {consultationType === 'video' ? (
                        <><Video className="h-4 w-4" /> Video Call</>
                      ) : consultationType === 'phone' ? (
                        <><Phone className="h-4 w-4" /> Phone Call</>
                      ) : (
                        <><MessageSquare className="h-4 w-4" /> Chat</>
                      )}
                    </div>
                  </div>
                  
                  {date && selectedTimeSlot && (
                    <div>
                      <div className="font-medium text-[#0B1120] mb-2 flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        Schedule
                      </div>
                      <div className="text-[#0B1120]/80">
                        <Badge variant="outline" className="mr-2">
                          {new Date(date).toLocaleDateString('en-US', { 
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </Badge>
                        <Badge variant="outline">
                          {selectedTimeSlot}
                        </Badge>
                      </div>
                    </div>
                  )}
                  
                  {topic && (
                    <div>
                      <div className="font-medium text-[#0B1120] mb-2 flex items-center gap-2">
                        <Globe className="h-4 w-4 text-blue-600" />
                        Topic
                      </div>
                      <div className="text-[#0B1120]/80">
                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                          {topic}
                        </Badge>
                      </div>
                    </div>
                  )}
                  
                  {details && (
                    <div>
                      <div className="font-medium text-[#0B1120] mb-2 flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-blue-600" />
                        Additional Details
                      </div>
                      <div className="text-sm text-[#0B1120]/80 bg-gray-50 p-3 rounded-lg border border-gray-100">
                        {details}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
