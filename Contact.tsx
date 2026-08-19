import type { JSX } from "react";
import { profile } from "@/lib/content";

export default function Contact(): JSX.Element {
  return (
    <section id="contact" className="bg-surface/40">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">Get in touch</h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-text-dim">
          Have a Zoho system that needs automating, or a product to build? Reach me directly —
          I read every message.
        </p>

        <div className="mt-8 grid max-w-md gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center justify-between rounded border border-border bg-surface px-5 py-3.5 text-sm text-text transition-colors hover:border-amber"
          >
            <span>Email</span>
            <span className="font-mono text-text-dim">{profile.email}</span>
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="flex items-center justify-between rounded border border-border bg-surface px-5 py-3.5 text-sm text-text transition-colors hover:border-teal"
          >
            <span>Phone</span>
            <span className="font-mono text-text-dim">{profile.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
