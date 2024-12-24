import { ServicesHero } from '@/components/services/hero';
import { ServicesList } from '@/components/services/services-list';
import { FAQ } from '@/components/services/faq';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ServicesHero />
      <ServicesList />
      <FAQ />
    </div>
  );
}