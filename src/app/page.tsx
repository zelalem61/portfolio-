import Script from "next/script";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.zelalem.et";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Zelalem Habtamu",
      jobTitle: "Backend Developer & AI Developer",
      url: siteUrl,
      email: "zelalemhab19@gmail.com",
      description:
        "Backend developer and AI developer specializing in scalable backend systems, microservices, distributed systems, and AI-powered products.",
      knowsAbout: [
        "Backend Development",
        "AI Development",
        "Software Engineering",
        "NestJS",
        "Next.js",
        "TypeScript",
        "Microservices",
        "RAG",
        "LLM",
        "Machine Learning",
      ],
      alumniOf: "Addis Ababa University",
      sameAs: [
        "https://github.com/zelalem61",
        "https://www.linkedin.com/in/zelalem-habtamu-6abab7264/",
        "https://leetcode.com/u/zelalem61/",
      ],
    },
    {
      "@type": "WebSite",
      name: "Zelalem Habtamu Portfolio",
      url: siteUrl,
      description:
        "Portfolio of Zelalem Habtamu, a backend developer and AI developer focused on scalable software systems and AI-powered applications.",
      inLanguage: "en",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="portfolio-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
