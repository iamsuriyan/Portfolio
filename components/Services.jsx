'use client';

import { FiCpu, FiRepeat, FiCode, FiTarget, FiArrowUpRight } from 'react-icons/fi';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: <FiCpu size={22} />,
    title: 'AI Agent Development & Orchestration',
    description: 'I design multi-agent AI systems where autonomous agents reason, collaborate, and execute complex workflows — replacing manual processes with intelligent automation that scales.',
    tags: ['Multi-Agent Systems', 'LLM Integration', 'AI Pipelines', 'Autonomous Agents'],
    highlight: 'Most requested',
  },
  {
    icon: <FiRepeat size={22} />,
    title: 'Workflow Automation',
    description: 'I build intelligent automation pipelines �� like n8n but custom-built for your exact needs. Connect your tools, data, and processes into systems that run without babysitting.',
    tags: ['n8n-style Systems', 'Process Automation', 'Event-Driven', 'Integration Pipelines'],
    highlight: null,
  },
  {
    icon: <FiCode size={22} />,
    title: 'Full-Stack Development',
    description: 'Performant web and mobile applications built with React, Next.js, React Native, and Node.js. Clean architecture, scalable infrastructure, and code that the next developer can actually read.',
    tags: ['React / Next.js', 'React Native', 'Node.js / APIs', 'Cloud-Native'],
    highlight: null,
  },
  {
    icon: <FiTarget size={22} />,
    title: 'AI Integration & Consulting',
    description: "Already have a product? I plug AI into it. From assessing what's possible to building the integration to optimizing prompts — I handle the full AI layer so your team doesn't have to.",
    tags: ['Prompt Engineering', 'AI Strategy', 'Product Enhancement', 'LLM Optimization'],
    highlight: null,
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 sm:px-8 lg:px-12 py-28 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-label">02</span>
            <span className="section-label">//Services</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Pro Services
            </h2>
            <p className="text-white/40 max-w-md leading-relaxed text-lg">
              Every service is delivered end-to-end. No half-measures, no handoffs, no "that's not my part."
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={0.1 + index * 0.12} scale>
              <div className="group card-hover bg-[#0a0a0a] border border-[#222] rounded-2xl p-8 hover:border-accent/30 h-full relative overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.06), transparent 70%)' }}
                />
                <div className="relative z-10">
                  {service.highlight && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                      {service.highlight}
                    </span>
                  )}
                  <div className="w-11 h-11 rounded-xl bg-[#111] border border-[#222] flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-300">{service.title}</h3>
                  <p className="text-white/40 leading-relaxed mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium text-white/25 bg-white/5 border border-[#222] px-3 py-1 rounded-full group-hover:text-white/40 group-hover:border-accent/20 transition-all duration-300">
                        {tag}
                      </span>
                    ))}
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
