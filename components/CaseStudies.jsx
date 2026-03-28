'use client';

import ScrollReveal from './ScrollReveal';

const projects = [
  {
    tag: 'Agriculture Tech / AI',
    title: 'Farm2Com',
    subtitle: 'AI-Powered Agriculture Platform',
    problem: 'Farmers had no fast way to identify crop diseases in the field — they relied on manual inspection and delayed expert consultations, losing critical time and yield.',
    solution: 'Built a full-featured React Native app with AI-powered plant disease detection (snap a photo, get instant diagnosis), community forums for farmer collaboration, expert consultant chat, news aggregation, and complete crop management tools.',
    impact: [
      'Disease identification went from days to seconds',
      'AI model accuracy high enough for real-field use',
      'Full community + consultation ecosystem in one app',
    ],
    tech: ['React Native', 'AI/ML', 'Node.js', 'MongoDB'],
  },
  {
    tag: 'Social Media / Blockchain',
    title: 'Echoes',
    subtitle: 'Privacy-First Social Platform',
    problem: 'Existing social platforms leak user data by design. Users wanted a platform where privacy wasn\'t a settings toggle — it was the architecture.',
    solution: 'Architected a blockchain-based social media app with end-to-end encryption baked into every layer. Zero-knowledge data architecture, full feature parity with mainstream apps — posts, messaging, media sharing — but with complete user data ownership.',
    impact: [
      'Zero data leaks — verified by architecture, not policy',
      'Blockchain-verified data integrity at every level',
      'Users own 100% of their data',
    ],
    tech: ['React Native', 'Blockchain', 'Node.js', 'TypeScript'],
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="px-6 sm:px-8 lg:px-12 py-28 border-t border-[#222]">
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
              <div className="group card-hover border border-[#222] rounded-2xl p-8 md:p-12 hover:border-accent/30 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 0% 0%, rgba(99, 102, 241, 0.04), transparent 50%)' }}
                />
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
                        <span key={t} className="text-xs font-medium text-white/40 bg-[#111] border border-[#222] px-3 py-1.5 rounded-full">
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

                  <div className="mt-8 pt-8 border-t border-[#1a1a1a]">
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
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
