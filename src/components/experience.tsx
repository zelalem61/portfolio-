"use client";

import { DetailModal } from "@/components/detail-modal";
import { SectionLabel } from "@/components/section-label";
import {
  achievements,
  education,
  experiences,
  skills,
  type Experience,
} from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="container">
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Experience</SectionLabel>
          <h2 className="display mt-6 text-balance text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.15]">
          Professional experience and
           key contributions.
          </h2>
        </motion.div>

        <div className="relative grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-16">
          <div
            aria-hidden
            className="absolute left-[7px] top-2 hidden h-full w-px bg-border lg:left-[200px] lg:block"
          />
          <div className="hidden lg:block" />

          <ol className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.li
                key={exp.id}
                className="relative grid gap-5 lg:grid-cols-[200px_1fr] lg:gap-16"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {exp.yearRange}
                  </div>
                  <div className="mt-2 font-mono text-[12px] text-foreground/80">
                    {exp.period}
                  </div>
                  <div className="mt-1 font-mono text-[11px] text-muted-foreground">
                    {exp.location}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedExperience(exp)}
                  className="interactive-card group relative rounded-2xl border border-transparent p-5 text-left hover:border-border hover:bg-surface/60 md:p-6"
                  aria-label={`View details for ${exp.title} at ${exp.company}`}
                >
                  <span
                    aria-hidden
                    className="absolute -left-[calc(1rem+8px)] top-7 hidden h-2 w-2 rounded-full bg-accent ring-4 ring-background lg:block"
                    style={{ left: "-69px" }}
                  />
                  <h3 className="font-serif text-[1.7rem] leading-tight tracking-tightest text-foreground md:text-[2rem]">
                    {exp.title}{" "}
                    <span className="text-muted-foreground">— </span>
                    <span className="italic text-accent">{exp.company}</span>
                  </h3>

                  <ul className="mt-6 space-y-3">
                    {exp.bullets.slice(0, 2).map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-pretty text-[15px] leading-relaxed text-foreground/85 md:text-[16px]"
                      >
                        <span
                          aria-hidden
                          className="mt-2 inline-block h-px w-4 shrink-0 bg-accent/60"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                      {exp.tags.length > 4 && (
                        <span className="chip">+{exp.tags.length - 4}</span>
                      )}
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      View details
                      <ArrowUpRight className="ml-1 inline h-3 w-3" />
                    </span>
                  </div>
                </button>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="mt-28 grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Education</SectionLabel>
            <div className="mt-8 space-y-8">
              {education.map((edu) => (
                <div key={edu.school} className="border-t border-border pt-6 first:border-t-0 first:pt-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-serif text-xl tracking-tightest text-foreground">
                      {edu.school}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-2 text-foreground/80">{edu.degree}</p>
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                    {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionLabel>Skills & Achievements</SectionLabel>
            <div className="mt-8 space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {category}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <div className="border-t border-border pt-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Achievements
                </div>
                <div className="mt-4 space-y-4">
                  {achievements.map((item) => (
                    <a
                      key={item.title}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive-card block rounded-xl border border-border bg-surface/60 p-4"
                    >
                      <div className="font-serif text-lg text-foreground">{item.title}</div>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <DetailModal
        open={selectedExperience !== null}
        onClose={() => setSelectedExperience(null)}
        title={
          selectedExperience
            ? `${selectedExperience.title} — ${selectedExperience.company}`
            : ""
        }
      >
        {selectedExperience && (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span>{selectedExperience.period}</span>
              <span>{selectedExperience.location}</span>
            </div>

            <ul className="space-y-4">
              {selectedExperience.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 text-pretty text-[15px] leading-relaxed text-foreground/90 md:text-[16px]"
                >
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-px w-4 shrink-0 bg-accent/60"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Technologies & tools
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedExperience.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </DetailModal>
    </section>
  );
}
