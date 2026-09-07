'use client';

import ScrollReveal from './ScrollReveal';

// Shared section masthead: numbered mono eyebrow, headline, and an
// optional lede set opposite it. Every section used to hand-roll this.
export default function SectionHeader({ index, label, title, lede }) {
  return (
    <header className="mb-16 md:mb-20">
      <ScrollReveal>
        <div className="flex items-center gap-4">
          <span className="label text-accent/70">{index}</span>
          <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
          <span className="label">{label}</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.08}>
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-16">
          <h2 className="headline text-fg balance max-w-xl">{title}</h2>
          {lede && (
            <p className="max-w-md text-base leading-relaxed text-fg-subtle pretty md:text-right">
              {lede}
            </p>
          )}
        </div>
      </ScrollReveal>
    </header>
  );
}
