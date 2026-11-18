'use client';

import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const facts = [
  { key: 'Location', value: 'Coimbatore, India' },
  { key: 'Experience', value: '2+ years' },
  { key: 'Focus', value: 'GenAI, RAG & Backend' },
  { key: 'Status', value: 'Open to opportunities' },
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
                Hi, I&apos;m Suriyan. I&apos;m a Generative AI product engineer in Coimbatore,
                India, with 2+ years of experience building and shipping LLM products end to end —
                from knowledge ingestion and retrieval to backend architecture, frontend interfaces,
                and production deployment.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p>
                Most of my work is focused on reliable, auditable AI systems: building Indian
                customs compliance platforms with hybrid retrieval over official regulatory sources
                (DGFT, GST, CBIC, ICEGATE), designing multi-tenant RAG platforms on pgvector and
                Weaviate with strict corpus isolation, and connecting 25+ LLM, STT and TTS
                providers behind unified real-time voice infrastructure.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                I build across the full stack — robust Python/FastAPI backends with Redis/RQ async
                workers, responsive React and Next.js interfaces, mobile apps in React Native, and
                cloud deployments with Docker. I specialize in agent design with human-in-the-loop
                approval controls and cost-optimized extraction pipelines that spend model inference
                only where deterministic parsing ends.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p>
                I like problems that start out vague. Almost everything I&apos;ve shipped began as
                &ldquo;we need this to work reliably in production&rdquo; rather than a finished spec,
                and I love figuring out the architecture and shipping products that real teams rely on
                daily.
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
