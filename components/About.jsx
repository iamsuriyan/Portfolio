'use client';

import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const facts = [
  { key: 'Location', value: 'Coimbatore, India' },
  { key: 'Experience', value: '2 years' },
  { key: 'Focus', value: 'Backend & AI integration' },
  { key: 'Status', value: 'Open to new roles' },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line px-6 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader index="01" label="About" title="A bit about me" />

        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-24">
          <div className="space-y-5 text-lg leading-relaxed text-fg-muted pretty">
            <ScrollReveal>
              <p>
                Hi, I&apos;m Suriyan. I&apos;m a full-stack engineer in Coimbatore, India, and
                I&apos;ve spent the last two years building AI products — mostly the parts users
                never see.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p>
                Most of my work is backend: login systems, integrations with other companies&apos;
                APIs, real-time infrastructure, and the AI pipelines that make agents actually
                useful. But I&apos;m comfortable across the whole stack — I&apos;ve built Next.js
                and React frontends, shipped a React Native app that a delivery team used every
                day, and designed the databases underneath all of it.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                I like problems that start out vague. Almost everything I&apos;ve shipped began as
                &ldquo;we need this to work somehow&rdquo; rather than a finished spec, and I enjoy
                the part where you figure out what it should actually be.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p>
                Right now I&apos;m looking for my next role — ideally somewhere I can keep working
                on AI systems and backend infrastructure.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <dl className="divide-y divide-line-soft border-t border-line">
              {facts.map((fact) => (
                <div key={fact.key} className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="label shrink-0">{fact.key}</dt>
                  <dd className="text-right text-sm text-fg-muted">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
