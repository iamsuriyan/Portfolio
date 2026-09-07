'use client';

import { motion, useReducedMotion } from 'motion/react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

// Mirrors the résumé's own taxonomy so the two read as one document.
const stack = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Redux Toolkit', 'React Native', 'Expo', 'Vite', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'gRPC', 'WebSockets', 'WebRTC', 'OAuth 2.0', 'JWT'],
  },
  {
    category: 'Databases & infra',
    items: ['PostgreSQL', 'MongoDB', 'Cassandra', 'Redis', 'pgvector', 'Docker', 'GCP', 'AWS', 'GitHub Actions'],
  },
  {
    category: 'AI',
    items: ['OpenAI', 'Gemini', 'Vertex AI', 'AWS Bedrock', 'Groq', 'LangGraph', 'RAG', 'Embeddings', 'Weaviate', 'Whisper', 'ElevenLabs'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Postman', 'Claude Code'],
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
          lede="Tools I've actually shipped something with."
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
