import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
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
