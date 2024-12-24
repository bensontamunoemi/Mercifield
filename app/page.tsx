import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, GlassWater, PartyPopper } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ServicesList } from "@/components/services/services-list";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-[#8C1832] to-[#EB3224] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <Container className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            Create Unforgettable Moments with{" "}
            <span className="text-[#FAC611]">MerciFIELD Events</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-up animation-delay-200">
            Your premier destination for exceptional event planning and venue
            services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
            <Link
              href={"/contact"}
              className="bg-[#FAC611] hover:bg-white text-black hover:text-[#8C1832] text-center h-11 rounded-md px-8 inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Plan Your Event
            </Link>
            <Link
              href={"/gallery"}
              className="border-white text-black bg-white  hover:bg-white hover:text-[#8C1832] text-center h-11 rounded-md px-8 inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 "
            >
              View Our Gallery
            </Link>
          </div>
        </Container>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="">
            {/* Services cards content */}
            <ServicesList />
          </div>
        </Container>
      </section>
    </div>
  );
}
