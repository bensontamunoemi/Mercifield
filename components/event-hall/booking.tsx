"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useToast } from "@/hooks/use-toast";

export function EventHallBooking() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Booking request sent!",
      description: "We'll contact you soon to confirm your reservation.",
    });

    setLoading(false);
  };

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Book the Venue
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" required placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="Your email"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium">
                  Event Date
                </label>
                <div className="relative">
                  <Input id="date" type="date" required className="w-full" />
                  <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="guests" className="text-sm font-medium">
                  Number of Guests
                </label>
                <Input
                  id="guests"
                  type="number"
                  required
                  placeholder="Expected number of guests"
                  min="1"
                  max="2000"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="details" className="text-sm font-medium">
                Event Details
              </label>
              <Textarea
                id="details"
                required
                placeholder="Tell us about your event"
                className="min-h-[100px]"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FAC611] hover:bg-[#8C1832] text-black hover:text-white"
            >
              {loading ? "Sending Request..." : "Book Now"}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
