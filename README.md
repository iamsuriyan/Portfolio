# Portfolio — Suriyan Dhanapal

Personal site for Suriyan Dhanapal, a full-stack software engineer working on
AI/LLM integration and real-time backend infrastructure.

**Live:** https://iamsuriyan.github.io/Portfolio/

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router, static export) |
| Styling | Tailwind CSS v4 with design tokens in `app/globals.css` |
| Motion | `motion` (Framer Motion) + Lenis smooth scroll |
| Hosting | GitHub Pages via `.github/workflows/deploy.yml` |

## Local development

```bash
npm install
npm run dev     # http://localhost:3044
```

`npm run dev` clears `NEXT_PUBLIC_BASE_PATH` so the dev server serves from the
root. Production builds default to the `/Portfolio` base path that GitHub Pages
needs.

```bash
npm run build   # static export to ./out
```

## Structure

```
app/
  layout.jsx     Fonts, metadata, Person JSON-LD, no-JS fallback
  page.jsx       Section order and the marquee content
  globals.css    Design tokens and component classes (cascade-layered)
  sitemap.js
components/
  Hero           Intro, availability, and the stack panel
  About          Short first-person intro plus quick facts
  Projects       Four production projects, 2-3 sentences each
  Experience     Roles and education, one short paragraph each
  Skills         Grouped technology tags
  Contact        Ways to reach me
  SectionHeader  Shared numbered section masthead
  ScrollReveal, AnimatedText, Magnetic, SpotlightCard, Marquee, Navigation, Footer
```

Standard portfolio structure: intro, about, projects, experience, skills, contact.
Keep project blurbs to two or three plain sentences — say what the thing does and
what you built, not how it is architected. Long technical write-ups belong in a
blog post, not here.

## Notes for future edits

- **Content tracks the résumé.** `public/Suriyan.pdf` is the source of truth for
  dates, employers, metrics and tooling. If the résumé changes, update
  `CaseStudies`, `Experience` and `Skills` to match — the site should never
  claim something the PDF doesn't support.
- **Base path.** `basePath`/`assetPrefix` in `next.config.mjs` make every emitted
  URL resolve under `/Portfolio`, including the font URLs inside the generated
  CSS. Don't reintroduce a post-build HTML path rewrite; it can't reach those.
- **Cascade layers.** Component classes in `globals.css` live in
  `@layer components` so Tailwind utilities can still override them. Moving them
  out silently breaks things like `class="label text-accent"`.
- **Reveals are JS-driven.** Anything animating in on scroll carries
  `data-reveal`, which the `<noscript>` rule in `app/layout.jsx` resets so the
  page is readable without JavaScript.
