'use client';

import { FiArrowUpRight } from 'react-icons/fi';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';

const projects = [
  {
    title: 'Real-time Voice AI Platform',
    org: 'Mindgryd',
    year: '2026',
    blurb:
      'A platform for AI agents that talk to people over live calls. I connected 25+ speech and language providers — OpenAI, Whisper, ElevenLabs, Gemini and more — behind one interface, and built the dashboard the team uses to debug calls as they happen.',
    tech: ['FastAPI', 'React', 'WebRTC', 'gRPC', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'AI Memory & Context Platform',
    org: 'Mindgryd',
    year: '2025',
    blurb:
      'Gives AI agents memory of your own documents so they answer from your data, not guesswork. I built the sign-in system, the 8 integrations that pull files from Drive, Dropbox, Notion and SharePoint, and the service that keeps other apps in sync.',
    tech: ['FastAPI', 'PostgreSQL', 'pgvector', 'Next.js', 'OAuth 2.0'],
  },
  {
    title: 'Workflow Automation Platform',
    org: 'Mindgryd',
    year: '2025',
    blurb:
      'A tool for building AI agents that run workflows on their own, with settings for how far an agent can go before a human signs off. I built the frontend, the Razorpay and PayPal payments, and the search that surfaces the right agent out of thousands.',
    tech: ['Next.js', 'TypeScript', 'Redux Toolkit', 'FastAPI', 'MongoDB', 'Weaviate'],
  },
  {
    title: 'Cooper Compass',
    org: 'Contract · IIT Bombay-incubated',
    year: '2025',
    blurb:
      'Reads shipping emails and their scanned attachments, pulls out job and BL numbers automatically, and groups everything by shipment. Cut a two-hour manual job down to about eight minutes for 20+ pilot users.',
    tech: ['Node.js', 'TypeScript', 'OpenAI', 'Google Vision', 'PostgreSQL'],
    href: 'https://coopercompass.com',
    linkLabel: 'coopercompass.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line bg-surface px-6 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="02"
          label="Projects"
          title="Things I've built"
          lede="Production systems, not side projects — all four are used by real teams."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={Math.min(i, 3) * 0.07} className="h-full">
              <SpotlightCard
                as="article"
                className="card flex h-full flex-col bg-bg p-8"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <p className="label">{project.org}</p>
                  <p className="label">{project.year}</p>
                </div>

                <h3 className="mt-4 text-xl font-semibold tracking-tight text-fg">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:text-accent"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-fg-muted pretty">{project.blurb}</p>

                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded border border-line-soft bg-surface px-2.5 py-1 font-mono text-[0.6875rem] text-fg-subtle"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-fg-muted transition-colors duration-300 hover:text-accent"
                  >
                    {project.linkLabel}
                    <FiArrowUpRight
                      size={14}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                )}
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
