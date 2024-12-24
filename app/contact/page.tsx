import { ContactForm } from '@/components/contact/form';
import { ContactInfo } from '@/components/contact/info';
import { Container } from '@/components/ui/container';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-20 bg-gradient-to-r from-[#8C1832] to-[#EB3224] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
              Contact Us
            </h1>
            <p className="text-xl opacity-90 animate-fade-up animation-delay-200">
              Let's discuss your next event
            </p>
          </div>
        </Container>
      </section>
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </Container>
      </section>
    </div>
  );
}