"use client";

export function Footer() {
  return (
    <footer className="bg-background mb-8">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-center text-center">
          <p className="text-balance text-sm leading-loose text-muted-foreground">
            Built by{" "}
            <a
              href="https://marfru.dev"
              className="font-bold underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Marfru's website"
            >
              Marfru
            </a>{" "}
            using{" "}
            <a
              href="https://nextjs.org/"
              className="font-bold"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Official Next.js website"
            >
              nextJS
            </a>{" "}
            and{" "}
            <a
              href="https://ui.shadcn.com/"
              className="font-bold"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Official ui shadcn website"
            >
              shadcn
            </a>
            . Check the{" "}
            <a
              href="https://old.coloreshtml.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Old version of ColoresHTML"
              className="font-bold underline underline-offset-4"
            >
              old version
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
