'use client';

import ScrollReveal from './ScrollReveal';

const stack = [
  {
    category: 'AI & Automation',
    tools: [
      { name: 'AI Agent Orchestration', detail: 'Multi-agent systems' },
      { name: 'Prompt Engineering', detail: 'LLM optimization' },
      { name: 'Python', detail: 'AI/ML development' },
      { name: 'FastAPI', detail: 'High-performance APIs' },
    ],
  },
  {
    category: 'Frontend',
    tools: [
      { name: 'React', detail: 'Web applications' },
      { name: 'React Native', detail: 'Cross-platform mobile' },
      { name: 'Next.js', detail: 'Full-stack framework' },
      { name: 'TypeScript', detail: 'Type-safe development' },
      { name: 'Tailwind CSS', detail: 'Utility-first styling' },
    ],
  },
  {
    category: 'Backend & Cloud',
    tools: [
      { name: 'Node.js', detail: 'Server runtime' },
      { name: 'Express', detail: 'Web framework' },
      { name: 'MongoDB', detail: 'NoSQL database' },
      { name: 'Firebase', detail: 'Backend services' },
      { name: 'Google Cloud', detail: 'Cloud infrastructure' },
    ],
  },
  {
    category: 'Tools & Workflow',
    tools: [
      { name: 'Git', detail: 'Version control' },
      { name: 'VS Code', detail: 'Primary editor' },
      { name: 'Cursor', detail: 'AI-powered editor' },
      { name: 'Postman', detail: 'API testing' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="stack" className="px-6 sm:px-8 lg:px-12 py-28 border-t border-[#222]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-label">06</span>
            <span className="section-label">//Stack & Tools</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Stack & Tools
            </h2>
            <p className="text-white/40 max-w-xl mt-4 text-lg leading-relaxed">
              I pick the right tool for the job — not the trendiest one. Here's what I work with daily.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-14">
          {stack.map((category, catIndex) => (
            <ScrollReveal key={category.category} delay={0.05 + catIndex * 0.08}>
              <div>
                <h3 className="text-sm font-semibold text-white/25 uppercase tracking-wider mb-6">
                  {category.category}
                </h3>
                <div className="space-y-0">
                  {category.tools.map((tool, index) => (
                    <div
                      key={tool.name}
                      className="group flex items-center justify-between py-4 border-b border-[#1a1a1a] hover:border-accent/30 hover:px-3 transition-all duration-300 cursor-default"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-white/15 w-6 font-mono">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-lg font-medium text-white/70 group-hover:text-accent transition-colors duration-300">
                          {tool.name}
                        </span>
                      </div>
                      <span className="text-sm text-white/20 group-hover:text-white/40 transition-colors duration-300">{tool.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
