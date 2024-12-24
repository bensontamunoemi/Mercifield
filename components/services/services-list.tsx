import { GlassWater, Music, PartyPopper, Utensils } from 'lucide-react';

const services = [
  {
    icon: PartyPopper,
    title: 'Event Planning',
    description: 'Comprehensive planning services for all types of events, from concept to execution.',
  },
  {
    icon: GlassWater,
    title: 'Fruity Designs',
    description: 'Unique fruit-based decorations that add a fresh and elegant touch to your event.',
  },
  {
    icon: Utensils,
    title: 'Catering Services',
    description: 'Delicious menu options including our signature fruit punch and cocktail services.',
  },
  {
    icon: Music,
    title: 'Entertainment',
    description: 'Professional DJ services and sound equipment for an unforgettable experience.',
  },
];

export function ServicesList() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-lg border hover:shadow-lg transition-all animate-fade-up"
            >
              <service.icon className="h-12 w-12 text-[#FAC611] mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}