"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <div className="flex items-center gap-1">
                {/* <span className="text-xl">&lt;</span> */}
                <div className="grid grid-cols-2 w-5 h-5 border-2 border-black dark:border-white">
                  <div className="bg-red-500 w-full h-full" />
                  <div className="bg-yellow-400 w-full h-full" />
                  <div className="bg-green-500 w-full h-full" />
                  <div className="bg-blue-500 w-full h-full" />
                </div>
                {/* <span className="text-xl">&gt;</span> */}
              </div>
              ColoresHTML
            </Link>

            <div className="relative flex items-center">
              <Link href="/" className="text-sm">
                Paletas
              </Link>
              <span className="ml-1 mt-[-10px] px-2 py-0.5 text-[10px] rounded-full bg-muted text-muted-foreground border border-muted-foreground">
                Pronto
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <nav className="flex gap-4">
              <div className="relative flex items-center">
                <Link href="/" className="text-sm">
                  Panel
                </Link>
                <span className="ml-1 mt-[-10px] px-2 py-0.5 text-[10px] rounded-full bg-muted text-muted-foreground border border-muted-foreground">
                  Pronto
                </span>
              </div>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
