"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/section-label";
import { siteConfig } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-28">
              <SectionLabel>About</SectionLabel>
              <h2 className="display mt-6 text-balance text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.15]">
                {siteConfig.about.title}{" "}
                <span className="italic-accent">{siteConfig.about.accent}</span>.
              </h2>
              <p className="mt-6 text-muted-foreground">
                {siteConfig.about.description}
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {siteConfig.about.highlights.map((item, index) => (
              <motion.div
                key={item.label}
                className="group relative grid grid-cols-[120px_1fr] gap-6 border-t border-border px-3 py-6 transition-all duration-300 first:border-t-0 first:pt-0 hover:border-accent/30 hover:bg-accent/[0.04] md:grid-cols-[160px_1fr] md:gap-10 md:px-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {item.label}
                </div>
                <p className="text-pretty text-[15px] leading-relaxed text-foreground/90 md:text-[17px]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
