import { skillGroups } from "@/lib/content";

export default function TechStack() {
  return (
    <section id="stack" className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">Toolset</h2>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-text-dim">
          What runs the automation and the app
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-amber">{group.label}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="border-l border-border pl-3 text-sm text-text-dim">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
