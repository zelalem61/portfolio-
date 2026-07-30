import { siteConfig } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="container py-16">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Contact
            </div>
            <p className="mt-4 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] tracking-tightest text-foreground">
              Let us build something great together.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex items-center gap-1">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="icon-btn grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="icon-btn grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="icon-btn grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <Link
              href="#home"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-accent"
            >
              ↑ Back to top
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
