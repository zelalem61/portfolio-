"use client";

import { DetailModal } from "@/components/detail-modal";
import { SectionLabel } from "@/components/section-label";
import { projects, type Project } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function ProjectCoverImage({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-background/40 p-4 md:p-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full scale-[0.88] object-contain object-center"
        />
      </div>
    );
  }

  return (
    <>
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.2),transparent_50%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="display text-[clamp(2.5rem,6vw,4rem)] text-foreground/20">
          {project.title}
        </span>
      </div>
    </>
  );
}

export function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProject = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section id="work" className="relative py-28 md:py-36">
      <div className="container">
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Featured Projects</SectionLabel>
          <h2 className="display mt-6 text-balance text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.15]">
          A selection of projects 
          and engineering work.
          </h2>
          <p className="mt-6 text-muted-foreground">
          Projects highlight the technical decisions behind the implementation, the systems involved, and the scalable solutions delivered.
          </p>
        </motion.div>

        <div className="mt-14 flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="interactive-card group relative grid w-full grid-cols-1 overflow-hidden rounded-2xl border border-border bg-surface/60 text-left backdrop-blur-sm md:grid-cols-12 md:items-stretch"
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => openProject(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openProject(project);
                  }
                }}
                className={`relative aspect-[16/10] w-full cursor-pointer overflow-hidden md:aspect-auto md:col-span-6 md:min-h-[440px] ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
                aria-label={`View details for ${project.title}`}
              >
                <ProjectCoverImage project={project} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent md:bg-gradient-to-l md:from-background/60 md:via-background/0" />
                <div className="absolute left-5 top-5 z-10 flex items-center gap-2">
                  <span className="chip-on-cover-accent">{project.category}</span>
                  {project.secondaryCategory && (
                    <span className="chip-on-cover">{project.secondaryCategory}</span>
                  )}
                </div>
              </div>

              <div
                className={`flex flex-col gap-6 p-7 md:col-span-6 md:p-10 ${
                  index % 2 === 1 ? "md:order-1" : ""
                } ${project.id === "language-learning" ? "md:px-12 lg:px-14" : ""}`}
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openProject(project)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openProject(project);
                    }
                  }}
                  className="flex cursor-pointer flex-col gap-6 text-left"
                  aria-label={`View details for ${project.title}`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {project.company}
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {project.period}
                    </div>
                  </div>

                  <h3 className="font-serif text-3xl leading-[1.05] tracking-tightest text-foreground md:text-[2.6rem]">
                    {project.title}
                  </h3>

                  <p className="text-pretty text-[15px] leading-relaxed text-foreground/80 md:text-[17px]">
                    {project.description}
                  </p>

                  <p className="text-pretty text-[14px] leading-relaxed text-muted-foreground line-clamp-3 md:text-[15px]">
                    {project.details}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {project.role}
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5 font-mono text-[11px] uppercase tracking-[0.18em]">
                  <button
                    type="button"
                    onClick={() => openProject(project)}
                    className="inline-flex items-center gap-1 text-accent transition-opacity hover:opacity-80"
                  >
                    View details
                    <ArrowUpRight className="h-3 w-3" />
                  </button>

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-background/90 px-3 py-1.5 text-accent backdrop-blur-sm transition-opacity hover:opacity-80"
                      >
                        Live
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-background/90 px-3 py-1.5 text-foreground backdrop-blur-sm transition-colors hover:text-accent"
                      >
                        GitHub
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <DetailModal
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title ?? ""}
      >
        {selectedProject && (
          <div className="space-y-6">
            {selectedProject.image && (
              <div className="overflow-hidden rounded-xl border border-border bg-background/40 p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} preview`}
                  className="mx-auto max-h-64 w-full scale-[0.92] object-contain object-center"
                />
              </div>
            )}

            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {selectedProject.company}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {selectedProject.period}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="chip">{selectedProject.category}</span>
              {selectedProject.secondaryCategory && (
                <span className="chip">{selectedProject.secondaryCategory}</span>
              )}
              <span className="chip">{selectedProject.role}</span>
            </div>

            <p className="text-pretty text-[16px] leading-relaxed text-foreground/90 md:text-[17px]">
              {selectedProject.description}
            </p>

            <p className="text-pretty text-[15px] leading-relaxed text-muted-foreground md:text-[16px]">
              {selectedProject.details}
            </p>

            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Technologies
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {(selectedProject.liveUrl || selectedProject.githubUrl) && (
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Links
                </span>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.liveUrl && (
                    <Link
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.18em] text-accent transition-opacity hover:opacity-80"
                    >
                      Live site
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  )}
                  {selectedProject.githubUrl && (
                    <Link
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:text-accent"
                    >
                      View on GitHub
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </DetailModal>
    </section>
  );
}
