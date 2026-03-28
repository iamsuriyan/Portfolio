'use client';

import { FiCheck, FiClock, FiEye, FiShield, FiRefreshCw, FiMessageCircle } from 'react-icons/fi';
import ScrollReveal from './ScrollReveal';

const benefits = [
  {
    icon: <FiClock size={20} />,
    title: 'Fast, Focused Delivery',
    description: 'I don\'t drag projects. You get sprint-based delivery with working demos every week — not a big reveal 3 months later.',
  },
  {
    icon: <FiMessageCircle size={20} />,
    title: 'Direct Communication',
    description: 'You talk to me — the person building your product. No project managers, no account reps, no game of telephone.',
  },
  {
    icon: <FiEye size={20} />,
    title: 'Full Transparency',
    description: 'You see the code, you see the progress, you see the decisions. No black boxes. You know exactly where your project stands at all times.',
  },
  {
    icon: <FiShield size={20} />,
    title: 'Production-Grade Code',
    description: 'Clean, documented, scalable code that your future team can maintain. Not spaghetti that only I can understand.',
  },
  {
    icon: <FiRefreshCw size={20} />,
    title: 'Post-Launch Support',
    description: 'I don\'t disappear after deployment. Bug fixes, iterations, scaling — I\'m there until you\'re fully confident in the system.',
  },
  {
    icon: <FiCheck size={20} />,
    title: 'No Scope Surprises',
    description: 'Clear scope, clear timeline, clear pricing. If something changes, you hear about it immediately — not in the invoice.',
  },
];

export default function WhatYouGet() {
  return (
    <section className="px-6 sm:px-8 lg:px-12 py-28 border-t border-[#222]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-label">05</span>
            <span className="section-label">//Working With Me</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-lg">
              What You Get When You Hire Me
            </h2>
            <p className="text-white/40 max-w-md leading-relaxed text-lg">
              I've been on the other side. I know what it feels like to hire a developer and wonder if things are actually getting done. Here's how I fix that.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={0.1 + index * 0.08} scale>
              <div className="group card-hover border border-[#222] rounded-2xl p-7 hover:border-accent/30 h-full relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.05), transparent 60%)' }}
                />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
