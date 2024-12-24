import { EventHallHero } from '@/components/event-hall/hero';
import { EventHallFeatures } from '@/components/event-hall/features';
import { EventHallGallery } from '@/components/event-hall/gallery';
import { EventHallBooking } from '@/components/event-hall/booking';

export default function EventHallPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <EventHallHero />
      <EventHallFeatures />
      <EventHallGallery />
      <EventHallBooking />
    </div>
  );
}