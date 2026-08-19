import { profile } from "@/lib/content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm font-semibold tracking-wide text-text">
          DENIS<span className="text-amber">.</span>OMONDI
        </a>
        <ul className="hidden gap-8 font-mono text-xs uppercase tracking-widest text-text-dim sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-amber">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5 sm:gap-6">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="font-mono text-xs text-text-dim transition-colors hover:text-teal"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="font-mono text-xs text-text-dim transition-colors hover:text-teal"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="rounded border border-border px-3 py-1.5 font-mono text-xs text-text-dim transition-colors hover:border-teal hover:text-teal"
          >
            Say hello
          </a>
        </div>
      </nav>
    </header>
  );
}
