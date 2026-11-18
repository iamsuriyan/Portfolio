'use client';

import { FiArrowUpRight } from 'react-icons/fi';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';

const projects = [
  {
    title: 'Thavasi Scrutiny',
    org: 'Cooper Compass · IIT Bombay-incubated',
    year: '2026 – Present',
    blurb:
      'Indian customs compliance platform piloted with real Customs House Agents. Verifies draft checklists against source documents with field-by-field discrepancy reports traced to exact cells, answers trade and tax queries via a hybrid-retrieval compliance agent (DGFT, GST, CBIC, ICEGATE), and runs a cost-gated hybrid extraction pipeline.',
    tech: ['Python', 'FastAPI', 'Hybrid Retrieval', 'OpenAI', 'Vision OCR', 'PostgreSQL', 'Redis/RQ', 'React'],
    href: 'https://thavasi.coopercompass.com',
    linkLabel: 'thavasi.coopercompass.com',
  },
  {
    title: 'Real-time Voice AI Platform',
    org: 'Mindgryd',
    year: '2026',
    blurb:
      'A platform for AI agents that talk to people over live calls. Connected 25+ speech and language providers — OpenAI, Whisper, ElevenLabs, Gemini, Sarvam and more — behind a unified interface on FlowCat (serving ~100 live calls/day), and built the real-time triage dashboard.',
    tech: ['FastAPI', 'Python', 'WebRTC', 'SIP', 'gRPC', 'Whisper', 'ElevenLabs', 'React'],
  },
  {
    title: 'AI Memory & Context Platform',
    org: 'Mindgryd',
    year: '2025',
    blurb:
      'Multi-tenant RAG pipeline giving AI agents grounded memory over enterprise documents. Built metadata-scoped retrieval on PostgreSQL/pgvector for strict tenant isolation, 8 automated data connectors (Drive, Dropbox, Notion, SharePoint), and OAuth identity infrastructure.',
    tech: ['FastAPI', 'PostgreSQL', 'pgvector', 'Next.js', 'OAuth 2.0', 'Embeddings'],
  },
  {
    title: 'Workflow Automation Platform',
    org: 'Mindgryd',
    year: '2025',
    blurb:
      'Autonomous AI agent platform with human-in-the-loop approval gates governing actions before sign-off. Built the workspace-aware agent recommendation system using Weaviate semantic search, the Next.js frontend, and the Razorpay/PayPal billing integrations.',
    tech: ['Next.js', 'TypeScript', 'LangGraph', 'Weaviate', 'FastAPI', 'Redux Toolkit'],
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
