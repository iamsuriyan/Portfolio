'use client';

import ScrollReveal from './ScrollReveal';

export default function Approach() {
  const phases = [
    {
      number: '01',
      title: 'Discover & Analyze',
      description: 'Before I write a single line of code, I understand your business, your users, and the technical landscape. No assumptions — just clarity.',
      detail: 'Requirements deep-dive · Technical feasibility · Architecture planning',
    },
    {
      number: '02',
      title: 'Design & Build',
      description: 'Architecture first. Then clean, iterative development with modern tools. You see working demos at every stage — no black-box surprises.',
      detail: 'Sprint-based delivery · Weekly demos · Transparent progress',
    },
    {
      number: '03',
      title: 'Deploy & Support',
      description: "I don't disappear after launch. Production deployment with monitoring, optimization, and ongoing support until you're fully confident.",
      detail: 'CI/CD pipelines · Performance monitoring · Post-launch iteration',
    },
  ];

  return (
    <section id="approach" className="px-6 sm:px-8 lg:px-12 py-28 border-t border-[#222]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-label">01</span>
            <span className="section-label">//Approach</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl">
              Three Phases to<br />Getting It Done
            </h2>
          </div>
          <p className="text-white/40 max-w-xl mb-20 text-lg leading-relaxed">
            No overcomplicated process. I keep it simple, transparent, and focused on shipping quality work — fast.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <ScrollReveal key={phase.number} delay={0.15 + index * 0.15} scale>
              <div className="group h-full">
                <div className="border-t-2 border-[#222] group-hover:border-accent transition-all duration-500 pt-8">
                  <span className="text-5xl font-bold text-white/5 group-hover:text-accent/20 transition-all duration-500">
                    {phase.number}
                  </span>
                  <h3 className="text-xl font-semibold text-white mt-4 mb-3 group-hover:text-accent transition-colors duration-300">{phase.title}</h3>
                  <p className="text-white/50 leading-relaxed mb-4">{phase.description}</p>
                  <p className="text-xs text-white/20 tracking-wide">{phase.detail}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
