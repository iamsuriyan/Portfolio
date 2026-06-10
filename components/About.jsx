'use client';

import ScrollReveal from './ScrollReveal';
import AnimatedText from './AnimatedText';
import Magnetic from './Magnetic';

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-8 lg:px-12 py-28 bg-surface">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-label">04</span>
            <span className="section-label">//About</span>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <AnimatedText
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15]"
              stagger={0.045}
            >
              {"I'M A "}
              <span className="gradient-text">SOFTWARE</span>
              <span className="gradient-text">ENGINEER</span>
              {' WHO BUILDS '}
              <span className="gradient-text">PRODUCTION</span>
              <span className="gradient-text">AI SYSTEMS</span>
              {' AND SHIPS PRODUCTS THAT '}
              <span className="gradient-text">ACTUALLY</span>
              <span className="gradient-text">WORK.</span>
            </AnimatedText>
          </div>

          <div className="space-y-6">
            <ScrollReveal delay={0.2}>
              <p className="text-white/50 text-lg leading-relaxed">
                At Mindgryd I build three live products — Areev, an AI memory and context platform; Atmatic, an agent-autonomy platform; and Axtion, an automation platform with 3,000+ connectors. I've designed OAuth identity systems, multi-connector knowledge subsystems, and retrieval engines that real autonomous agents rely on.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-white/50 text-lg leading-relaxed">
                My focus is AI-first engineering — not slapping a ChatGPT wrapper on things, but deeply integrating intelligence where it creates real, measurable value. From React Native apps and Node/FastAPI backends to RAG retrieval and HMAC-signed webhook systems, I own features end to end across backend and frontend.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="text-white/50 text-lg leading-relaxed">
                I don't hand off half-built things. I don't ghost after deployment. I see it through — from the first discovery call to the post-launch iteration.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <Magnetic>
                  <a
                    href="https://wa.me/918110044608?text=Hi%20Suriyan%2C%20I%E2%80%99d%20like%20to%20work%20with%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-accent text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-indigo-400 hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
                  >
                    GET IN TOUCH
                  </a>
                </Magnetic>
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
