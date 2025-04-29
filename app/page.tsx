"use client";

import { useState } from "react";
import { ColorGrid } from "@/components/color-grid";
import { Badge } from "@/components/ui/badge";
import { colorSections } from "@/data/color-sections";
import { Check } from "lucide-react";

export default function Home() {
  const [selectedTitles, setSelectedTitles] = useState<string[]>([]);

  const toggleTitle = (title: string) => {
    setSelectedTitles((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Librería de colores HTML</h1>
        <p className="text-gray-400 mb-8">
          Colores HTML con sus respectivos valores en HEX, RGB, HSL y RGBA.
        </p>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {colorSections.map((section) => (
            <Badge
              key={section.title}
              onClick={() => toggleTitle(section.title)}
              variant={
                selectedTitles.includes(section.title) ? "default" : "outline"
              }
              className="cursor-pointer flex items-center gap-1 transition-colors p-2"
            >
              {selectedTitles.includes(section.title) && (
                <Check className="h-3 w-3 text-white dark:text-black" />
              )}
              {section.title}
            </Badge>
          ))}
        </div>

        {/* Color Grids */}
        <div className="space-y-12">
          {(selectedTitles.length > 0
            ? colorSections.filter((section) =>
                selectedTitles.includes(section.title)
              )
            : colorSections
          ).map((section) => (
            <ColorGrid
              key={section.title}
              title={section.title}
              colors={section.colors}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
