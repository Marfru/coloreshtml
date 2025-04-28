"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "./ui/button";

interface Color {
  name: string;
  hex: string;
  rgb: string;
  hsl: string;
  rgba: string;
}

interface ColorGridProps {
  title: string;
  colors: Color[];
}

export function ColorGrid({ title, colors }: ColorGridProps) {
  const [format, setFormat] = useState("hex");
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedColor(value);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const getColorValue = (color: Color) => {
    switch (format) {
      case "hex":
        return color.hex;
      case "rgb":
        return color.rgb;
      case "hsl":
        return color.hsl;
      case "rgba":
        return color.rgba;
      default:
        return color.hex;
    }
  };

  return (
    <div className="border p-4 border-gray-200 bg-white dark:bg-black/10 dark:border-gray-900 rounded-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">{title}</h2>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="cursor-pointer">
                Formato: {format}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup value={format} onValueChange={setFormat}>
                <DropdownMenuRadioItem className="cursor-pointer" value="hex">
                  hex
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="cursor-pointer" value="rgb">
                  rgb
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="cursor-pointer" value="hsl">
                  hsl
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="cursor-pointer" value="rgba">
                  rgba
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-3">
        {colors.map((color) => (
          <div key={color.name} className="group">
            <div
              className="relative aspect-square rounded bg-white cursor-pointer"
              style={{ backgroundColor: color.hex }}
              onClick={() => copyToClipboard(getColorValue(color))}
            >
              <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="transition-transform group-hover:scale-110">
                  {copiedColor === getColorValue(color) ? (
                    <Check className="h-5 w-5 text-black" />
                  ) : (
                    <Copy className="h-5 w-5 text-black" />
                  )}
                </div>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1">
              <input
                type="text"
                readOnly
                value={getColorValue(color)}
                className="text-[10px] bg-transparent text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-white/10 rounded px-1 py-0.5 truncate w-full"
              />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <button
                      onClick={() => copyToClipboard(getColorValue(color))}
                      className="p-1 hover:bg-white/10 rounded transition cursor-pointer"
                    >
                      <Copy className="h-3 w-3 text-gray-400" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copiar</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <label className="text-sm">{color.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
