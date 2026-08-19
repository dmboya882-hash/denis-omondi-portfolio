"use client";

import { useState } from "react";
import { projects } from "@/lib/content";
import ProjectModal from "./ProjectModal";

const VISIBLE_COUNT = 4;

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visible = expanded ? projects : projects.slice(0, VISIBLE_COUNT);
  const hiddenCount = projects.length - VISIBLE_COUNT;
  const activeProject = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">Selected work</h2>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-text-dim">
          Automation scripts + web apps — click a project for details
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {visible.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActiveIndex(projects.indexOf(p))}
              className="group rounded border border-border bg-surface p-6 text-left transition-colors hover:border-amber focus:outline-none focus-visible:border-teal"
            >
              <h3 className="font-display text-lg font-medium text-text">{p.title}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-teal">{p.tag}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-dim">{p.description}</p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-amber opacity-0 transition-opacity group-hover:opacity-100">
                View details →
              </p>
            </button>
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="rounded border border-border px-5 py-2 font-mono text-xs uppercase tracking-widest text-text-dim transition-colors hover:border-amber hover:text-amber"
            >
              {expanded ? "Show less" : `Show ${hiddenCount} more`}
            </button>
          </div>
        )}
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveIndex(null)} />
      )}
    </section>
  );
}
