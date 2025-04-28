import { ReactNode } from "react";

export default function PolicyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-8">
      <main className="w-full max-w-3xl">{children}</main>
    </div>
  );
}
