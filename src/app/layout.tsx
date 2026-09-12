import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.zelalem.et";

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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zelalem Habtamu | Backend Developer & AI Developer",
    template: "%s | Zelalem Habtamu",
  },
  description:
    "Zelalem Habtamu is a backend developer, AI developer, and software engineer building scalable backend systems, microservices, AI-powered products, and full-stack web platforms.",
  keywords: [
    "Zelalem Habtamu",
    "Zelalem Habtamu backend developer",
    "backend developer",
    "AI developer",
    "software engineer",
    "full stack developer",
    "NestJS developer",
    "Next.js developer",
    "TypeScript developer",
    "AI engineer",
    "microservices developer",
    "Ethiopia software engineer",
    "Addis Ababa software engineer",
    "portfolio",
  ],
  applicationName: "Zelalem Habtamu Portfolio",
  authors: [{ name: "Zelalem Habtamu" }],
  creator: "Zelalem Habtamu",
  publisher: "Zelalem Habtamu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zelalem Habtamu | Backend Developer & AI Developer",
    description:
      "Backend developer and AI developer creating high-performance backend systems, scalable platforms, and AI-powered solutions.",
    type: "website",
    url: siteUrl,
    siteName: "Zelalem Habtamu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zelalem Habtamu | Backend Developer & AI Developer",
    description:
      "Backend developer and AI developer building scalable systems, microservices, and AI-powered web products.",
  },
  icons: {
    icon: [{ url: "/zh-favicon.png", rel: "icon" }],
    shortcut: ["/zh-favicon.png"],
    apple: ["/zh-favicon.png"],
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
