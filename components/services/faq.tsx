'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'What types of events do you cater to?',
    answer: 'We cater to a wide range of events including weddings, corporate events, birthday parties, anniversaries, and special celebrations of all sizes.',
  },
  {
    question: 'What are your fruity designs?',
    answer: 'Our fruity designs are unique decorative elements that incorporate fresh fruits into event décor. This includes fruit displays, centerpieces, and themed arrangements that add a fresh and elegant touch to your event.',
  },
  {
    question: 'Do you provide all-inclusive packages?',
    answer: 'Yes, we offer comprehensive packages that can include venue rental, catering, decoration, entertainment, and all necessary equipment and staff.',
  },
  {
    question: 'How far in advance should I book your services?',
    answer: 'We recommend booking at least 3-6 months in advance for large events, and 1-2 months for smaller gatherings to ensure availability.',
  },
];

export function FAQ() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}