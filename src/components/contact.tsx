"use client";

import { SectionLabel } from "@/components/section-label";
import { siteConfig } from "@/lib/data";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Check, Copy, Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\n${formState.message}`
    );
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(formState.subject)}&body=${body}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="container">
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Contact</SectionLabel>
          <h2 className="display mt-6 text-balance text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.15]">
            Have something worth
            building?
          </h2>
          <p className="mt-6 text-muted-foreground">
            Feel free to reach out with your project details, goals, and timeline. I read and respond to every message.
          </p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="shimmer-border flex flex-col gap-6 rounded-2xl border border-border bg-surface/60 p-8 backdrop-blur-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block font-serif text-2xl text-foreground transition-colors hover:text-accent md:text-3xl"
              >
                {siteConfig.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-accent"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    Copy email
                  </>
                )}
              </button>
            </div>

            <div className="space-y-4">
              <a
                href={siteConfig.links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-card flex items-center gap-4 rounded-xl border border-[#6FDA44]/40 bg-[#6FDA44]/10 p-4"
              >
                <BriefcaseBusiness className="h-5 w-5 text-[#6FDA44]" />
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#d9ffd1]">
                    Upwork
                  </div>
                  <div className="text-sm text-foreground">Contact me for backend, AI, and full-stack work</div>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="interactive-card flex items-center gap-4 rounded-xl border border-border bg-surface/60 p-4"
              >
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Phone
                  </div>
                  <div className="text-sm text-foreground">{siteConfig.phone}</div>
                </div>
              </a>

              <Link
                href={`mailto:${siteConfig.email}`}
                className="interactive-card flex items-center gap-4 rounded-xl border border-border bg-surface/60 p-4"
              >
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Email
                  </div>
                  <div className="text-sm text-foreground">{siteConfig.email}</div>
                </div>
              </Link>

              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-card flex items-center gap-4 rounded-xl border border-border bg-surface/60 p-4"
              >
                <Github className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    GitHub
                  </div>
                  <div className="text-sm text-foreground">@zelalem61</div>
                </div>
              </a>

              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-card flex items-center gap-4 rounded-xl border border-border bg-surface/60 p-4"
              >
                <Linkedin className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    LinkedIn
                  </div>
                  <div className="text-sm text-foreground">/in/zelalem-habtamu-6abab7264</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Or send a structured note
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, name: e.target.value }))
                    }
                    className="w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, email: e.target.value }))
                    }
                    className="w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, subject: e.target.value }))
                  }
                  className="w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Project shape, timeline, anything relevant…"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                  className="w-full resize-none rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                />
              </div>

              <button
                type="submit"
                className="btn-glow inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-accent-foreground"
              >
                {submitted ? "Opening email client…" : "Send message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
