"use client";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-center">
          <p className="text-balance text-sm leading-loose text-muted-foreground">
            Built by{" "}
            <a
              href="https://marfru.dev"
              className="font-medium underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Marfru's website"
            >
              Marfru
            </a>{" "}
            using{" "}
            <a
              href="https://nextjs.org/"
              className="font-medium underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Official Next.js website"
            >
              nextJS
            </a>{" "}
            and{" "}
            <a
              href="https://ui.shadcn.com/"
              className="font-medium underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Official ui shadcn website"
            >
              shadcn
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
