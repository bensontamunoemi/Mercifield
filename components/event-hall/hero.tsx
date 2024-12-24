import { Container } from '@/components/ui/container';

export function EventHallHero() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-[#8C1832] to-[#EB3224] text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Our Premium Event Hall
          </h1>
          <p className="text-xl opacity-90 mb-8 animate-fade-up animation-delay-200">
            A sophisticated venue for your memorable celebrations
          </p>
        </div>
      </Container>
    </section>
  );
}