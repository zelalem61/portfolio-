import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Zelalem Habtamu — Software Engineer",
  description:
    "Software engineer building scalable backend systems, full-stack platforms, and distributed microservices. Based in Addis Ababa, Ethiopia.",
  keywords: [
    "Zelalem Habtamu",
    "Software Engineer",
    "Backend Developer",
    "NestJS",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Zelalem Habtamu" }],
  icons: {
    icon: [{ url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'/>" }],
  },
  openGraph: {
    title: "Zelalem Habtamu — Software Engineer",
    description:
      "Software engineer building scalable backend systems and full-stack platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
