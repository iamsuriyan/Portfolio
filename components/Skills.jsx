'use client';

import { motion } from 'motion/react';
import ScrollReveal from './ScrollReveal';

const stack = [
  {
    category: 'Languages',
    tools: [
      { name: 'JavaScript', detail: 'Core language' },
      { name: 'TypeScript', detail: 'Type-safe development' },
      { name: 'Python', detail: 'AI / backend services' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    tools: [
      { name: 'Next.js', detail: 'Full-stack framework' },
      { name: 'React', detail: 'Web applications' },
      { name: 'React Native (Expo)', detail: 'Cross-platform mobile' },
      { name: 'Node.js / Express', detail: 'Backend runtime & APIs' },
      { name: 'FastAPI', detail: 'High-performance APIs' },
    ],
  },
  {
    category: 'Backend & Databases',
    tools: [
      { name: 'REST API Design', detail: 'Service interfaces' },
      { name: 'Microservices', detail: 'Distributed architecture' },
      { name: 'MongoDB', detail: 'NoSQL database' },
      { name: 'PostgreSQL', detail: 'Relational database' },
      { name: 'OAuth 2.0 & Auth', detail: 'Identity & access control' },
      { name: 'Data Modeling', detail: 'Schema design' },
    ],
  },
  {
    category: 'AI & Automation',
    tools: [
      { name: 'AI Agents', detail: 'Autonomous systems' },
      { name: 'RAG / Retrieval', detail: 'Context & memory' },
      { name: 'OCR', detail: 'Document extraction' },
      { name: 'Workflow Automation', detail: 'Connector pipelines' },
      { name: 'Prompt Engineering', detail: 'LLM optimization' },
      { name: 'Browser Automation', detail: 'Headless agents' },
    ],
  },
  {
    category: 'Tools & Platforms',
    tools: [
      { name: 'Git', detail: 'Version control' },
      { name: 'GCP', detail: 'Cloud infrastructure' },
      { name: 'Docker', detail: 'Containerization' },
      { name: 'GitHub Actions', detail: 'CI/CD pipelines' },
      { name: 'Postman', detail: 'API testing' },
      { name: 'Claude Code', detail: 'AI-assisted development' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="stack" className="px-6 sm:px-8 lg:px-12 py-28 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-label">07</span>
            <span className="section-label">//Stack & Tools</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Stack & Tools
            </h2>
            <p className="text-white/40 max-w-xl mt-4 text-lg leading-relaxed">
              I pick the right tool for the job — not the trendiest one. Here's what I work with daily.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-14">
          {stack.map((category, catIndex) => (
            <ScrollReveal key={category.category} delay={0.05 + catIndex * 0.08}>
              <div>
                <h3 className="text-sm font-semibold text-white/25 uppercase tracking-wider mb-6">
                  {category.category}
                </h3>
                <div className="space-y-0">
                  {category.tools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      className="group flex items-center justify-between py-4 border-b border-line-soft hover:border-accent/30 hover:px-3 transition-all duration-300 cursor-default"
                      initial={{ opacity: 0, x: -24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: index * 0.05 }}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-white/15 w-6 font-mono">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-lg font-medium text-white/70 group-hover:text-accent transition-colors duration-300">
                          {tool.name}
                        </span>
                      </div>
                      <span className="text-sm text-white/20 group-hover:text-white/40 transition-colors duration-300">{tool.detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
