"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="#home"
          className="group inline-flex items-center gap-2 font-mono text-sm tracking-tight"
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="grid h-7 w-7 place-items-center rounded-md border border-accent/30 bg-accent/10 text-[11px] font-semibold text-accent transition-shadow group-hover:shadow-[0_0_16px_-4px_hsl(var(--accent)/0.6)]">
            {siteConfig.initials}
          </span>
          <span className="hidden text-foreground sm:inline">
            {siteConfig.shortName}
            <span className="text-muted-foreground">.</span>habtamu
          </span>
        </Link>

        <nav className="nav-pill hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative rounded-full px-3.5 py-1.5 font-mono text-[12px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent"
            >
              <span className="relative">
                {link.label}
                <span className="absolute -bottom-0.5 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-accent to-[hsl(var(--accent-secondary))] transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 font-mono text-[12px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
