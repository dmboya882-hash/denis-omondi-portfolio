import { education, experience, languages } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">Experience</h2>

        <div className="mt-10 space-y-10">
          {experience.map((job) => (
            <div key={job.role + job.org} className="grid gap-2 sm:grid-cols-[200px_1fr]">
              <div>
                <p className="font-mono text-xs text-teal">{job.period}</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-text">{job.role}</h3>
                <p className="font-mono text-xs uppercase tracking-wide text-text-dim">{job.org}</p>
                <ul className="mt-3 space-y-1.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm leading-relaxed text-text-dim">
                      <span className="mt-1 text-amber">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-border pt-10 sm:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-amber">Education</h3>
            <p className="mt-3 font-display text-base text-text">{education.degree}</p>
            <p className="mt-1 text-sm text-text-dim">
              {education.school} · {education.period}
            </p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-amber">Languages</h3>
            <ul className="mt-3 space-y-1">
              {languages.map((l) => (
                <li key={l.name} className="text-sm text-text-dim">
                  {l.name} — {l.level}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
