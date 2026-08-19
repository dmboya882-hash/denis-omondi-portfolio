import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 font-mono text-xs text-text-dim sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with Next.js, TypeScript & Tailwind</p>
      </div>
    </footer>
  );
}
