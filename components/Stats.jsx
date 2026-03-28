'use client';

import ScrollReveal from './ScrollReveal';
import Counter from './Counter';

const stats = [
  { end: 10, suffix: '+', label: 'Projects Shipped' },
  { end: 5, suffix: '+', label: 'AI Systems Built' },
  { end: 100, suffix: '%', label: 'Client Retention' },
  { end: 24, suffix: '/7', label: 'Availability' },
];

export default function Stats() {
  return (
    <section className="px-6 sm:px-8 lg:px-12 py-28 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-label">07</span>
            <span className="section-label">//Numbers</span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={0.1 + index * 0.12} scale>
              <div className="text-center md:text-left group">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  <Counter end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-white/30 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
