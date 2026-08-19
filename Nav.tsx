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
        <a
          href="mailto:denisomondi294@gmail.com"
          className="rounded border border-border px-3 py-1.5 font-mono text-xs text-text-dim transition-colors hover:border-teal hover:text-teal"
        >
          Say hello
        </a>
      </nav>
    </header>
  );
}
