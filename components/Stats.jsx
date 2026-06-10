'use client';

import ScrollReveal from './ScrollReveal';
import Counter from './Counter';

const stats = [
  { end: 5, suffix: '+', label: 'Products Built' },
  { end: 3000, suffix: '+', label: 'Connectors Shipped' },
  { end: 8, suffix: '', label: 'Knowledge Connectors' },
  { end: 2, suffix: '+ yrs', label: 'Experience' },
];

export default function Stats() {
  return (
    <section className="px-6 sm:px-8 lg:px-12 py-28 bg-surface">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-label">08</span>
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
