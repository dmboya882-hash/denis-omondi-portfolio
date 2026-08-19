"use client";

import { useEffect } from "react";

type Project = {
  title: string;
  tag: string;
  description: string;
  approach?: string;
  challenges?: string;
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-10 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded border border-border bg-surface p-7 shadow-xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 font-mono text-sm text-text-dim transition-colors hover:text-amber"
        >
          ✕
        </button>

        <h3 className="pr-8 font-display text-xl font-semibold text-text">{project.title}</h3>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-teal">{project.tag}</p>

        <p className="mt-5 text-sm leading-relaxed text-text-dim">{project.description}</p>

        {project.approach && (
          <div className="mt-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-amber">How it was built</h4>
            <p className="mt-2 text-sm leading-relaxed text-text-dim">{project.approach}</p>
          </div>
        )}

        {project.challenges && (
          <div className="mt-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-amber">Challenges</h4>
            <p className="mt-2 text-sm leading-relaxed text-text-dim">{project.challenges}</p>
          </div>
        )}
      </div>
    </div>
  );
}
