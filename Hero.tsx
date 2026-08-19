import { profile } from "@/lib/content";
import WorkflowDiagram from "./WorkflowDiagram";

export default function Hero() {
  return (
    <section id="top" className="blueprint-bg border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
          {profile.location} — available for work
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-text sm:text-6xl">
          I automate the business,
          <br />
          then build the app around it.
        </h1>
        <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-text-dim sm:text-lg">
          {profile.name} — {profile.title}. I script the workflow inside Zoho, then ship the
          product on top of it with React and TypeScript.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded bg-amber px-5 py-2.5 font-mono text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="rounded border border-border px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-teal hover:text-teal"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-16 overflow-x-auto">
          <WorkflowDiagram />
          <p className="mt-3 font-mono text-[11px] text-text-dim">
            — an actual automation shipped for a Zoho client: purchase request → transfer order → dashboard
          </p>
        </div>
      </div>
    </section>
  );
}
