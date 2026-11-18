'use client';

import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const roles = [
  {
    company: 'Cooper Compass',
    role: 'Product Engineer',
    period: 'Aug 2026 – Present',
    context: 'IIT Bombay-incubated startup · Indian customs compliance platform (Thavasi Scrutiny)',
    blurb:
      'Built the Indian customs compliance platform end to end as the product engineer: architecture, knowledge ingestion, extraction pipeline, rule engine, FastAPI backend, React frontend, and deployment. Customs House Agents receive a field-by-field discrepancy report traced to document, page, and cell. Developed a compliance agent answering regulatory questions from DGFT, GST Portal, CBIC, and ICEGATE using hybrid retrieval, plus a cheapest-path-first extraction pipeline (pdfplumber, camelot, vision models) with Redis/RQ workers.',
    tech: [
      'Python',
      'FastAPI',
      'Hybrid Retrieval',
      'OpenAI',
      'Vision OCR',
      'SQLAlchemy',
      'PostgreSQL',
      'Redis/RQ',
      'Docker',
      'React',
      'TypeScript',
      'Vite',
    ],
  },
  {
    company: 'Mindgryd Software Private Limited',
    role: 'AI / Software Engineer',
    period: 'Jun 2025 – Aug 2026',
    context: 'AI agent & real-time voice platform',
    blurb:
      'Integrated 25+ LLM, STT, TTS and STS providers behind a unified connector interface on FlowCat (serving ~100 live voice calls/day in pilot) and built provider-aware regression testing. Engineered the multi-tenant RAG pipeline on PostgreSQL/pgvector with strict tenant isolation at retrieval layer, a Weaviate semantic search recommendation system, human-in-the-loop approval gates, 8 data ingestion connectors, and platform infrastructure (OAuth 2.0, JWT, RBAC, HMAC webhooks, payments).',
    tech: [
      'Python',
      'FastAPI',
      'LangGraph',
      'RAG',
      'pgvector',
      'Weaviate',
      'WebRTC',
      'OpenAI',
      'Vertex AI',
      'Whisper',
      'ElevenLabs',
      'Next.js',
    ],
  },
  {
    company: 'Hifresh Agro Private Limited',
    role: 'Software Engineer',
    period: 'Sep 2024 – Jun 2025',
    context: 'Agro-tech product company',
    blurb:
      'Built and owned a full-stack delivery-management mobile app used daily by the delivery team handling ~150 orders/day with React Native/Expo on Node.js/Express, with delivery assignment, billing, and Zoho Books invoicing. Added response caching and structured logging to high-traffic endpoints, cutting latency from ~2 s to under ~300 ms, and built backend services in FastAPI.',
    tech: ['React Native', 'Expo', 'Node.js', 'Express', 'FastAPI', 'MongoDB', 'REST APIs', 'Zoho Books API'],
  },
];

const education = {
  degree: 'Bachelor of Engineering, Electronics and Communication Engineering',
  school: 'Dr. N.G.P. Institute of Technology, Coimbatore',
  period: '2019 – 2023',
};

const certifications = [
  {
    title: 'Building with the Claude API',
    issuer: 'Anthropic Academy',
    period: '2026',
    detail: 'Tool use, RAG, and agent architectures',
  },
  {
    title: 'AI Agents Course',
    issuer: 'Hugging Face',
    period: '2025',
    detail: 'Agentic workflows and tool calling',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line px-6 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader index="03" label="Experience" title="Where I've worked" />

        <div className="border-t border-line">
          {roles.map((role, i) => (
            <ScrollReveal key={role.company} delay={i * 0.08}>
              <div className="grid gap-3 border-b border-line py-8 md:grid-cols-[11rem_1fr] md:gap-10">
                <p className="label md:pt-1.5">{role.period}</p>
                <div>
                  <h3 className="text-lg font-semibold text-fg">
                    {role.role} <span className="text-fg-subtle">· {role.company}</span>
                  </h3>
                  <p className="mt-1 font-mono text-xs text-fg-faint">{role.context}</p>
                  <p className="mt-2.5 text-sm leading-relaxed text-fg-muted pretty">{role.blurb}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {role.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded border border-line-soft px-2 py-0.5 font-mono text-[0.625rem] text-fg-faint"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.24}>
            <div className="grid gap-3 border-b border-line py-8 md:grid-cols-[11rem_1fr] md:gap-10">
              <p className="label md:pt-1.5">{education.period}</p>
              <div>
                <h3 className="text-lg font-semibold text-fg">{education.degree}</h3>
                <p className="mt-2 text-sm text-fg-muted">{education.school}</p>
              </div>
            </div>
          </ScrollReveal>

          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={0.28 + i * 0.06}>
              <div className="grid gap-3 border-b border-line py-8 md:grid-cols-[11rem_1fr] md:gap-10">
                <p className="label md:pt-1.5">{cert.period}</p>
                <div>
                  <h3 className="text-lg font-semibold text-fg">
                    {cert.title} <span className="text-fg-subtle">· {cert.issuer}</span>
                  </h3>
                  <p className="mt-2 text-sm text-fg-muted">{cert.detail}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
