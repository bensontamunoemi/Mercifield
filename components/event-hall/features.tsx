import { Container } from "@/components/ui/container";
import { Wifi, Users, Music, Shield } from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Stay connected with our premium internet service",
  },
  {
    icon: Users,
    title: "Capacity",
    description: "Accommodates up to 1000 guests comfortably",
  },
  {
    icon: Music,
    title: "Sound System",
    description: "Professional audio equipment included",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Round-the-clock security service",
  },
];

export function EventHallFeatures() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <feature.icon className="h-12 w-12 mx-auto text-[#FAC611] mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
