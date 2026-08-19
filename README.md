# Denis Omondi — Portfolio

Personal portfolio site — static, no backend/database. Built with Next.js (App Router),
TypeScript, and Tailwind CSS.

## Structure

```
app/
  layout.tsx        # fonts, metadata
  page.tsx           # composes all sections
  globals.css         # design tokens + blueprint background + motion
components/
  Nav.tsx
  Hero.tsx            # signature: animated workflow/blueprint diagram
  WorkflowDiagram.tsx
  Projects.tsx
  TechStack.tsx
  Experience.tsx
  Contact.tsx          # static mailto: / tel: links, no form submission
  Footer.tsx
lib/
  content.ts            # all CV-sourced copy in one place — edit here first
```

## Local setup

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Design notes

- **Palette**: near-black charcoal (`#0F1115`) base, amber (`#E8A33D`) for automation/workflow
  accents, teal (`#4FD1C5`) for data/output accents.
- **Type**: Space Grotesk for display, Inter for body, JetBrains Mono for labels/data.
- **Signature element**: the hero's animated blueprint diagram (`WorkflowDiagram.tsx`) is a
  literal trace of a real shipped automation — purchase request → Deluge script → Zoho → dashboard —
  tying the visual identity directly to the work described in Experience.
- Content (name, bullets, project descriptions) lives entirely in `lib/content.ts` so it's easy
  to update without touching component code.

## Deploying

Push to GitHub, import into Vercel (or any static/Node host) — no environment variables or
database needed.

## Next steps

- Swap in real project links/screenshots as they're ready.
