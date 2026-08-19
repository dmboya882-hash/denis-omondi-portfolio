"use client";

import { useState } from "react";
import { profile } from "@/lib/content";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "your site"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="bg-surface/40">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">Get in touch</h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-text-dim">
          Have a Zoho system that needs automating, or a product to build? Fill this in — it
          opens straight in your email client, addressed to me.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid max-w-md gap-4">
          <input
            name="name"
            required
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-dim focus:border-teal focus:outline-none"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-dim focus:border-teal focus:outline-none"
          />
          <textarea
            name="message"
            required
            rows={4}
            placeholder="What are you building?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-dim focus:border-teal focus:outline-none"
          />
          <button
            type="submit"
            className="rounded bg-amber px-5 py-2.5 font-mono text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            Send message
          </button>
        </form>

        <p className="mt-6 font-mono text-xs text-text-dim">
          Prefer to reach out directly? {profile.email} · {profile.phone} / {profile.phoneAlt}
        </p>
        <p className="mt-2 font-mono text-xs text-text-dim">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal">
            LinkedIn
          </a>
          {" · "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal">
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
