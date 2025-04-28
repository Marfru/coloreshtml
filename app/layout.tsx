import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ColoresHTML - HTML y paletas de colores en HEX, RGB, HSL y RGBA",
  description:
    "Encuentra las mejores paletas de colores HTML con sus respectivos valores en HEX, RGB, HSL y RGBA. Inspiración de diseño para desarrolladores y diseñadores web.",
  keywords: [
    "Colores HTML",
    "Paletas de colores",
    "HEX",
    "RGB",
    "HSL",
    "Colores Web",
    "Diseño web",
  ],
  authors: [{ name: "ColoresHTML", url: "https://coloreshtml.com" }],
  creator: "ColoresHTML",
  applicationName: "ColoresHTML",
  openGraph: {
    title: "ColoresHTML - Paletas de Colores en HTML",
    description:
      "Descubre colores HTML y paletas listas para usar con valores HEX, RGB, HSL y RGBA.",
    url: "https://coloreshtml.com",
    siteName: "ColoresHTML",
    images: [
      {
        url: "https://coloreshtml.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "ColoresHTML Paletas",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ColoresHTML - Paletas de Colores en HTML",
    description:
      "Descubre paletas de colores HTML con valores HEX, RGB, HSL y RGBA.",
    site: "@Coloreshtml",
    creator: "@Coloreshtml",
    images: ["https://coloreshtml.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
