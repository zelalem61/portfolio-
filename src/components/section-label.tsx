import { Sparkles } from "lucide-react";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}
