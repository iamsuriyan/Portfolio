'use client';

import ScrollReveal from './ScrollReveal';
import SpotlightCard from './SpotlightCard';

const roles = [
  {
    company: 'Mindgryd Software Pvt Ltd',
    role: 'Software Engineer',
    period: 'Jun 2025 – Present',
    summary: 'Building three live products — Areev (AI memory & context platform), Atmatic (agent-autonomy platform), and Axtion (Pipedream-style automation platform).',
    points: [
      'Designed and built the full OAuth 2.0 authentication & onboarding system across Google, GitHub and Microsoft — with org auto-provisioning, JWT sessions and role-based access control.',
      'Architected the Knowledge Sources subsystem end to end across 8 connectors (Drive, Dropbox, Notion, OneDrive, SharePoint, Confluence, web search, file upload) with per-user OAuth isolation.',
      'Co-developed CAL, a declarative query language fusing vector, keyword and graph retrieval in a single round-trip, plus an HMAC-signed change-data-capture webhook (Hooks) system.',
      'On Atmatic: shipped graduated agent-autonomy (5 levels, 8 decision-gate types) with human-in-the-loop audit trails and integrated Razorpay & PayPal. On Axtion: built a large share of the 3,000+ connector catalog.',
    ],
    tech: ['Rust', 'Python', 'FastAPI', 'Next.js', 'Vite', 'OAuth 2.0'],
  },
  {
    company: 'Hifresh Agro Pvt Ltd',
    role: 'Software Engineer',
    period: 'Oct 2024 – Jun 2025',
    summary: 'Owned an internal delivery-management mobile app end to end while extending the backend.',
    points: [
      'Built an internal delivery-management mobile app from scratch with Expo (React Native) — fully owning the frontend architecture and UI while extending the Node.js / Express backend.',
      'Developed backend APIs for delivery, billing and invoice generation (Zoho Books integration) and integrated ESC/POS thermal printers for instant in-app bill printing.',
      'Implemented caching, stale-response handling and structured logging to cut redundant queries, improve API response times and strengthen reliability across phones and tablets.',
    ],
    tech: ['React Native', 'Expo', 'Node.js', 'Express'],
  },
];

const education = {
  degree: 'B.E. — Electronics & Communication Engineering',
  school: 'Dr. N.G.P. Institute of Technology',
  period: '2019 – 2023',
};

export default function Experience() {
  return (
    <section id="experience" className="px-6 sm:px-8 lg:px-12 py-28 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-label">05</span>
            <span className="section-label">//Experience</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Where I've Worked
            </h2>
            <p className="text-white/40 max-w-md leading-relaxed text-lg">
              1.5+ years shipping production web and mobile systems — owning features end to end across backend and frontend.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline rail */}
          <div className="absolute left-0 top-2 bottom-0 w-px bg-line hidden sm:block" />

          <div className="space-y-12">
            {roles.map((role, index) => (
              <ScrollReveal key={role.company} delay={0.1 + index * 0.12}>
                <div className="relative sm:pl-10">
                  {/* Node */}
                  <span className="absolute left-[-4px] top-2 hidden sm:block w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-base" />

                  <SpotlightCard tilt={false} className="card-hover border border-line rounded-2xl p-8 md:p-10 hover:border-accent/30">
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                          {role.company}
                        </h3>
                        <span className="text-sm font-medium text-white/30 uppercase tracking-wider md:pt-2 whitespace-nowrap">
                          {role.period}
                        </span>
                      </div>
                      <p className="text-lg font-medium text-white/50 mb-5">{role.role}</p>
                      <p className="text-white/50 leading-relaxed mb-6">{role.summary}</p>

                      <ul className="space-y-3 mb-7">
                        {role.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-accent mt-1.5 text-xs">&#10003;</span>
                            <span className="text-sm text-white/60 leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {role.tech.map((t) => (
                          <span key={t} className="text-xs font-medium text-white/40 bg-surface border border-line px-3 py-1.5 rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              </ScrollReveal>
            ))}

            {/* Education */}
            <ScrollReveal delay={0.1 + roles.length * 0.12}>
              <div className="relative sm:pl-10">
                <span className="absolute left-[-3px] top-2 hidden sm:block w-2 h-2 rounded-full bg-white/20 ring-4 ring-base" />
                <div className="border border-line-soft rounded-2xl p-7 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <span className="inline-block text-xs font-medium text-white/30 uppercase tracking-wider mb-2">
                        Education
                      </span>
                      <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
                      <p className="text-white/40 mt-1">{education.school}</p>
                    </div>
                    <span className="text-sm font-medium text-white/30 uppercase tracking-wider whitespace-nowrap">
                      {education.period}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
