'use client';

import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-8 lg:px-12 py-28 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-label">04</span>
            <span className="section-label">//About</span>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <ScrollReveal delay={0.1} direction="right">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15]">
              I'M A{' '}
              <span className="gradient-text">FULL STACK DEVELOPER</span>{' '}
              WHO SPECIALIZES IN{' '}
              <span className="gradient-text">AI AGENT ORCHESTRATION</span>{' '}
              AND BUILDING SYSTEMS THAT{' '}
              <span className="gradient-text">ACTUALLY WORK</span>.
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={0.2}>
              <p className="text-white/50 text-lg leading-relaxed">
                I've built multi-agent orchestration systems where AI agents collaborate to solve problems no single model can handle. I've built workflow automation engines that replaced entire manual processes. I've shipped full-stack applications — web and mobile — that real users depend on daily.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-white/50 text-lg leading-relaxed">
                My focus is AI-first development — not slapping a ChatGPT wrapper on things, but deeply integrating intelligence into products where it creates real, measurable value. From React Native mobile apps to FastAPI backends to complex LLM integrations, I handle the entire stack.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="text-white/50 text-lg leading-relaxed">
                I don't hand off half-built things. I don't ghost after deployment. I see it through — from the first discovery call to the post-launch iteration.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/918110044608?text=Hi%20Suriyan%2C%20I%E2%80%99d%20like%20to%20work%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-accent text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-indigo-400 hover:shadow-lg hover:shadow-accent/25 hover:scale-105 transition-all duration-300"
                >
                  WORK WITH ME
                </a>
                <a
                  href="#stack"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/40 border-b border-white/15 pb-1 hover:text-white hover:border-white transition-all duration-300"
                >
                  VIEW FULL STACK
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
