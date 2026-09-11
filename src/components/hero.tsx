"use client";

import { siteConfig } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowDownRight, BriefcaseBusiness, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 + i * 0.09, duration: 0.55, ease: "easeOut" as const },
  }),
};

const specialties = ["Node.js", "NestJS", "Next.js", "RAG Pipelines", "LLM Agents", "LangGraph"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-20 md:pt-28 lg:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-30 [mask-image:radial-gradient(55%_50%_at_30%_20%,black,transparent_80%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-40 -z-10 h-[360px] w-[360px] rounded-full bg-[hsl(var(--accent-secondary)/0.18)] blur-3xl"
      />

      <div className="container relative pb-24 md:pb-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Copy column */}
          <div className="relative">
            <motion.div
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-accent"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <Sparkles className="h-3.5 w-3.5" />
              {siteConfig.title}
            </motion.div>

            <motion.h1
              className="display max-w-3xl text-[clamp(2.35rem,5.4vw,4.6rem)] leading-[1.08]"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <span className="block text-foreground">Backend &amp; AI Engineer</span>
             
            </motion.h1>

            <motion.div
              className="mt-7 flex flex-wrap gap-2"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              {specialties.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-[11px] tracking-wide text-foreground/80 transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.p
              className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              {siteConfig.hero.description}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <Link
                href="#work"
                className="btn-glow inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-accent-foreground"
              >
                Explore Projects
                <ArrowDownRight className="h-4 w-4" />
              </Link>
              <a
                href={siteConfig.links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#6FDA44]/40 bg-[#6FDA44]/10 px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-[#d9ffd1] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6FDA44]/60 hover:bg-[#6FDA44]/15"
              >
                <BriefcaseBusiness className="h-4 w-4" />
                Contact on Upwork
              </a>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/5"
              >
                Contact
              </Link>

              <div className="ml-0 flex items-center gap-2 sm:ml-2">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="icon-btn grid h-11 w-11 place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="icon-btn grid h-11 w-11 place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label="Email"
                  className="icon-btn grid h-11 w-11 place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Portrait column */}
          <motion.aside
            className="relative mx-auto w-full max-w-[380px] lg:mx-0 lg:justify-self-end"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            {/* Orbit rings */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[2rem] border border-accent/15"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-12 rounded-[2.5rem] border border-dashed border-accent/20 opacity-70"
              style={{ animation: "orb-drift 14s ease-in-out infinite alternate" }}
            />

            <div className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-[0_30px_80px_-40px_hsl(var(--accent)/0.55)]">
              <div
                aria-hidden
                className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 via-transparent to-accent/10 opacity-80 transition-opacity duration-500 group-hover:opacity-60"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpeg"
                alt={`${siteConfig.name} portrait`}
                className="relative aspect-[4/5] w-full object-cover grayscale contrast-[1.05] transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
              />

              <div className="absolute inset-x-0 bottom-0 z-20 p-5">
                <div className="rounded-xl border border-white/10 bg-background/70 p-4 backdrop-blur-md">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    {siteConfig.name}
                  </div>
                  <div className="mt-1 text-sm text-foreground/90">
                    Building backends, platforms &amp; AI agents
                  </div>
                </div>
              </div>
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-8 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-full bg-accent/25 blur-3xl"
            />
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
