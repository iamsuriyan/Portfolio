'use client';

import { FiArrowDown, FiArrowRight } from 'react-icons/fi';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 sm:px-8 lg:px-12 pt-24 pb-16 relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <div className="space-y-8">
            <ScrollReveal delay={0.05}>
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="dot-pulse absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-green-400/80 tracking-wide">
                  Available for new projects
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="space-y-3">
                <p className="text-sm font-medium text-white/40 tracking-wide uppercase">
                  Based in Coimbatore, TAMIL NADU
                </p>
                <p className="text-sm font-medium text-white/40 tracking-wide">
                  Available <span className="text-white/80 font-semibold">ALL AROUND</span> worldwide
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <h1 className="display-text text-white">
                I Build<br />
                <span className="gradient-text">Intelligent</span><br />
                Systems
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <p className="text-lg text-white/50 max-w-lg leading-relaxed">
                Multi-agent AI orchestration, workflow automation, full-stack applications — I take complex problems and turn them into production-ready systems. You bring the vision, I build the machine.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.55}>
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <a
                  href="https://wa.me/918110044608?text=Hi%20Suriyan%2C%20I%20have%20a%20project%20I%E2%80%99d%20like%20to%20discuss."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-accent text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-indigo-400 hover:shadow-lg hover:shadow-accent/25 hover:scale-105 transition-all duration-300 pulse-glow"
                >
                  START A PROJECT
                  <FiArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 border-b border-white/20 pb-1 hover:text-white hover:border-white transition-all duration-300"
                >
                  SEE MY WORK
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Visual */}
          <ScrollReveal delay={0.3} direction="left" className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square float-animation">
              <div className="absolute inset-0 rounded-3xl bg-[#111] border border-[#222] flex items-center justify-center overflow-hidden">
                {/* Animated gradient bg */}
                <div className="absolute inset-0 opacity-20" style={{
                  background: 'radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.3), transparent 60%), radial-gradient(circle at 70% 60%, rgba(139, 92, 246, 0.2), transparent 50%)',
                }} />
                <div className="text-center space-y-5 px-8 relative z-10">
                  <div className="text-8xl font-black gradient-text">AI</div>
                  <div className="space-y-2">
                    <div className="h-2 w-36 mx-auto bg-accent/20 rounded-full shimmer-line" />
                    <div className="h-2 w-28 mx-auto bg-accent/15 rounded-full shimmer-line" style={{ animationDelay: '0.5s' }} />
                    <div className="h-2 w-32 mx-auto bg-accent/10 rounded-full shimmer-line" style={{ animationDelay: '1s' }} />
                  </div>
                  <p className="text-xs text-white/30 tracking-[0.2em] uppercase">Multi-Agent Orchestration</p>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-[#0a0a0a] border border-[#333] rounded-full px-5 py-2.5 text-xs font-semibold text-accent shadow-lg shadow-accent/10" style={{ animation: 'float 5s ease-in-out infinite' }}>
                AI / ML
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0a0a0a] border border-[#333] rounded-full px-5 py-2.5 text-xs font-semibold text-white/70 shadow-lg" style={{ animation: 'float 5s ease-in-out infinite 1.5s' }}>
                Full Stack
              </div>
              <div className="absolute top-1/2 -right-6 bg-[#0a0a0a] border border-[#333] rounded-full px-5 py-2.5 text-xs font-semibold text-white/50 shadow-lg" style={{ animation: 'float 5s ease-in-out infinite 3s' }}>
                Automation
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <ScrollReveal delay={0.7}>
          <div className="mt-20 flex items-center gap-3 text-white/30">
            <div className="w-8 h-px bg-white/20" />
            <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
            <FiArrowDown size={12} className="animate-bounce" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
