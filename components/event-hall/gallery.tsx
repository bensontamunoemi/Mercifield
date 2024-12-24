'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3',
    alt: 'Event Hall Main View',
  },
  {
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3',
    alt: 'Banquet Setup',
  },
  {
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
    alt: 'Stage Area',
  },
];

export function EventHallGallery() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <div className="space-y-6">
          <div className="relative rounded-lg overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={galleryImages[activeImage].src}
                alt={galleryImages[activeImage].alt}
                fill
                className="object-cover"
                priority
              />
            </AspectRatio>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative rounded-lg overflow-hidden ${
                  activeImage === index ? 'ring-2 ring-[#FAC611]' : ''
                }`}
              >
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}