'use client';

import ScrollReveal from './ScrollReveal';
import SpotlightCard from './SpotlightCard';

const projects = [
  {
    tag: 'Document AI · IIT Bombay-incubated',
    title: 'Cooper Compass',
    subtitle: 'Agentic Document & Email Intelligence',
    problem: 'Logistics teams spent 2+ hours manually extracting job and BL numbers from unstructured shipping emails — slow, error-prone, and impossible to scale.',
    solution: 'Built an agentic email-intelligence platform under IIT Bombay incubation: real-time Gmail/Outlook ingestion (OAuth 2.0 with Gmail Pub/Sub and Microsoft Graph push) with live SSE dashboards, an OCR pipeline (Google Vision + Tesseract fallback) and OpenAI classification, auto-grouping every email and document by shipment.',
    impact: [
      'Cut manual entry from 2 hours to 8 minutes',
      'Adopted across 20+ pilot users',
      '2–5s end-to-end extraction latency',
    ],
    tech: ['Node.js', 'TypeScript', 'OpenAI', 'PostgreSQL'],
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="px-6 sm:px-8 lg:px-12 py-28 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-label">03</span>
            <span className="section-label">//Work</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Selected Work
            </h2>
            <p className="text-white/40 max-w-md leading-relaxed text-lg">
              Not mockups. Not concepts. These are real systems I built and shipped.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={0.1 + index * 0.15} scale>
              <SpotlightCard tilt={false} className="card-hover border border-line rounded-2xl p-8 md:p-12 hover:border-accent/30">
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                    <div>
                      <span className="inline-block text-xs font-medium text-white/30 uppercase tracking-wider mb-3">
                        {project.tag}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-lg font-medium text-white/50 mt-1">{project.subtitle}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-medium text-white/40 bg-surface border border-line px-3 py-1.5 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs font-bold text-white/30 uppercase tracking-wider mb-3">The Problem</h4>
                      <p className="text-white/50 leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white/30 uppercase tracking-wider mb-3">What I Built</h4>
                      <p className="text-white/50 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-line-soft">
                    <h4 className="text-xs font-bold text-white/30 uppercase tracking-wider mb-4">Results</h4>
                    <div className="flex flex-col sm:flex-row gap-4">
                      {project.impact.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 flex-1">
                          <span className="text-accent mt-1 text-xs">&#10003;</span>
                          <span className="text-sm text-white/60">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
