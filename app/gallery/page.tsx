import { GalleryHero } from '@/components/gallery/hero';
import { GalleryGrid } from '@/components/gallery/gallery-grid';
import { GalleryFilter } from '@/components/gallery/gallery-filter';

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <GalleryHero />
      <GalleryFilter />
      <GalleryGrid />
    </div>
  );
}