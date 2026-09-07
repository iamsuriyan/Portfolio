'use client';

import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const roles = [
  {
    company: 'Mindgryd Software Private Limited',
    role: 'Software Engineer',
    period: 'Jun 2025 – Aug 2026',
    blurb:
      'Worked across three AI products — a real-time voice platform, an AI memory platform, and a workflow automation tool. Owned features end to end, from database design and backend services through to the frontends on top of them.',
    tech: ['FastAPI', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'WebRTC'],
  },
  {
    company: 'Hifresh Agro Private Limited',
    role: 'Software Engineer',
    period: 'Sep 2024 – Jun 2025',
    blurb:
      'Built and owned an internal delivery-management mobile app used daily by the delivery team, and extended the Node.js backend behind it with billing, invoicing and thermal-printer support.',
    tech: ['React Native', 'Expo', 'Node.js', 'Express'],
  },
];

const education = {
  degree: 'B.E. Electronics and Communication Engineering',
  school: 'Dr. N.G.P. Institute of Technology',
  period: '2019 – 2023',
};

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

          <ScrollReveal delay={0.16}>
            <div className="grid gap-3 border-b border-line py-8 md:grid-cols-[11rem_1fr] md:gap-10">
              <p className="label md:pt-1.5">{education.period}</p>
              <div>
                <h3 className="text-lg font-semibold text-fg">{education.degree}</h3>
                <p className="mt-2 text-sm text-fg-muted">{education.school}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
