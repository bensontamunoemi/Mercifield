'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Container } from '@/components/ui/container';

const galleryItems = [
  {
    id: 1,
    category: 'events',
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3',
    alt: 'Wedding Reception',
  },
  {
    id: 2,
    category: 'decorations',
    src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330',
    alt: 'Fruit Display',
  },
  {
    id: 3,
    category: 'hall',
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3',
    alt: 'Event Hall Setup',
  },
];

export function GalleryGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-12 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-lg overflow-hidden animate-fade-up"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <AspectRatio ratio={4 / 3}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={`object-cover transition-transform duration-300 ${
                    hoveredId === item.id ? 'scale-110' : 'scale-100'
                  }`}
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}