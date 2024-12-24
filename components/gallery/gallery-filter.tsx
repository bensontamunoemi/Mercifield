"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = [
  { id: "all", label: "All" },
  { id: "events", label: "Events" },
  { id: "decorations", label: "Decorations" },
  { id: "hall", label: "Event Hall" },
];

export function GalleryFilter() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="py-8 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={
                activeCategory === category.id
                  ? "bg-[#FAC611] hover:bg-[#8C1832] text-black hover:text-white"
                  : ""
              }
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
