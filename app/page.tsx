"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/components/ui/container";
import { ServicesList } from "@/components/services/services-list";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const featuredEvents = [
  {
    title: "Wedding Reception",
    image:
      "https://images.unsplash.com/photo-1734705797824-147c18892c9e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Elegant wedding celebration at MerciFIELD Events",
  },
  {
    title: "Corporate Gala",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Annual corporate gathering with premium services",
  },
  {
    title: "Birthday Celebration",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Vibrant birthday party with custom decorations",
  },
  {
    title: "Garden Wedding",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Romantic outdoor wedding setup",
  },
  {
    title: "Anniversary Dinner",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Intimate anniversary celebration",
  },
];

const stats = [
  { label: "Events Organized", value: "500+" },
  { label: "Happy Clients", value: "1000+" },
  { label: "Years Experience", value: "10+" },
  { label: "Team Members", value: "25+" },
];

const testimonials = [
  {
    name: "Obalende Johnson",
    role: "Bride",
    content:
      "MerciFIELD Events made our wedding day absolutely perfect! Their attention to detail and creative touches were amazing.",
    image:
      "https://images.unsplash.com/photo-1723221906960-1c5a5febc9c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ademola Omola",
    role: "Corporate Client",
    content:
      "Professional service from start to finish. Our company event was flawlessly executed.",
    image:
      "https://images.unsplash.com/photo-1644152993066-9b9ee687930d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jessica Williams",
    role: "Birthday Celebrant",
    content:
      "The fruit arrangements were stunning and the venue decoration exceeded my expectations!",
    image:
      "https://images.unsplash.com/photo-1589695790573-4c442170101c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "David Efe",
    role: "Groom",
    content:
      "They transformed our vision into reality. The attention to detail was remarkable.",
    image:
      "https://plus.unsplash.com/premium_photo-1693243527518-baad850ab359?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Emily Ede",
    role: "Event Planner",
    content:
      "As a fellow event planner, I was impressed by their professionalism and creativity.",
    image:
      "https://plus.unsplash.com/premium_photo-1692873055491-8965f261766c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "James Wilson",
    role: "Anniversary Celebration",
    content:
      "They made our 25th anniversary truly special. The venue was decorated beautifully.",
    image:
      "https://images.unsplash.com/photo-1684337273666-1ec3215c76e8?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function FeaturedEvents() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Autoplay functionality
    const autoplayInterval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [api]);

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Events
        </h2>
        <Carousel className="w-full max-w-5xl mx-auto" setApi={setApi}>
          <CarouselContent>
            {featuredEvents.map((event, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </AspectRatio>
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <div className="py-4 flex justify-center gap-2">
            {featuredEvents.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  current === index ? "bg-[#8C1832] w-4" : "bg-gray-300"
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </Carousel>
      </Container>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-16 bg-[#8C1832] text-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl font-bold text-[#FAC611] mb-2">
                {stat.value}
              </div>
              <div className="text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-sm animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#8C1832] to-[#EB3224] text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
            Ready to Create Your Perfect Event?
          </h2>
          <p className="text-lg mb-8 animate-fade-up animation-delay-200">
            Let's work together to bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
            <Link
              href="/contact"
              className="bg-[#FAC611] hover:bg-white text-black hover:text-[#8C1832] px-8 py-3 rounded-md font-medium"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-md font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

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

      {/* Featured Events Section */}
      <FeaturedEvents />

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="">
            <ServicesList />
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
