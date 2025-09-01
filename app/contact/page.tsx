"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-[#0B1120] mb-4">Contact Us</h1>
            <p className="text-[#0B1120]/70 max-w-2xl mx-auto">
              Have questions about our services? Need help with your application? 
              We're here to help. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border border-[#0B1120]/10">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Phone className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-[#0B1120] mb-2">Phone</h3>
                  <p className="text-[#0B1120]/70">+1 (555) 123-4567</p>
                  <p className="text-[#0B1120]/70">Mon-Fri 9am-6pm</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-[#0B1120]/10">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Mail className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-[#0B1120] mb-2">Email</h3>
                  <p className="text-[#0B1120]/70">support@immi-insightive.com</p>
                  <p className="text-[#0B1120]/70">24/7 Support</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-[#0B1120]/10">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <MapPin className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-[#0B1120] mb-2">Office</h3>
                  <p className="text-[#0B1120]/70">123 Business Street</p>
                  <p className="text-[#0B1120]/70">Toronto, ON M5V 2T6</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-[#0B1120]/10">
            <CardHeader>
              <CardTitle className="text-[#0B1120]">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#0B1120]">Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="border-[#0B1120]/10"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#0B1120]">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="border-[#0B1120]/10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-[#0B1120]">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    className="border-[#0B1120]/10"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#0B1120]">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    className="min-h-[150px] border-[#0B1120]/10"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
