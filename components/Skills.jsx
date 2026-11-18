'use client';

import { motion, useReducedMotion } from 'motion/react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

// Mirrors the résumé's taxonomy so the site and PDF read as one document.
const stack = [
  {
    category: 'GenAI & LLMs',
    items: [
      'OpenAI',
      'Google Vertex AI / Gemini',
      'AWS Bedrock',
      'Groq',
      'Sarvam',
      'AI Agents',
      'LangGraph',
      'Tool / Function Calling',
      'Prompt Design',
      'Human-in-the-Loop Gates',
      'Provider Regression Testing',
    ],
  },
  {
    category: 'Retrieval & Search',
    items: [
      'RAG',
      'Hybrid Retrieval',
      'Semantic Search',
      'pgvector',
      'Weaviate',
      'Embeddings',
      'Chunking',
      'Knowledge-Base Ingestion',
      'Multi-Tenant Retrieval',
    ],
  },
  {
    category: 'Speech & Multimodal',
    items: [
      'STT / TTS / STS Pipelines',
      'Whisper',
      'ElevenLabs',
      'Real-Time Voice Agents',
      'WebRTC',
      'SIP',
      'Vision Models',
      'OCR (pdfplumber, camelot, pytesseract)',
    ],
  },
  {
    category: 'Backend & Systems',
    items: [
      'Python',
      'FastAPI',
      'Node.js',
      'Express',
      'REST APIs',
      'Microservices',
      'gRPC',
      'WebSockets',
      'Async Workers (Redis/RQ)',
      'OAuth 2.0',
      'JWT',
      'RBAC',
      'Webhooks',
    ],
  },
  {
    category: 'Databases & Storage',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Cassandra', 'SQLAlchemy', 'SQL', 'AWS S3'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'React Native (Expo)', 'Vite', 'Tailwind CSS'],
  },
  {
    category: 'Infra & Tools',
    items: ['Docker', 'Linux / Shell', 'Nginx', 'GCP', 'AWS', 'GitHub Actions (CI/CD)', 'Git', 'Claude Code'],
  },
];

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="border-t border-line bg-surface px-6 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="04"
          label="Skills"
          title="What I work with"
          lede="Tools I've actually shipped production systems with."
        />

        <div>
          {stack.map((group, groupIndex) => (
            <ScrollReveal key={group.category} delay={Math.min(groupIndex, 3) * 0.06}>
              <div className="grid gap-4 border-t border-line py-7 md:grid-cols-[13rem_1fr] md:gap-10">
                <h3 className="label pt-1">{group.category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <motion.li
                      key={item}
                      className="rounded-md border border-line bg-bg px-3 py-1.5 text-sm text-fg-muted transition-colors duration-300 hover:border-accent/40 hover:text-fg"
                      data-reveal
                      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1], delay: i * 0.02 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  );
}
