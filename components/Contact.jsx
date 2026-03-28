'use client';

import { FiArrowUpRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  return (
    <section id="contact" className="px-6 sm:px-8 lg:px-12 py-32 border-t border-[#222] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 50% 80%, rgba(99, 102, 241, 0.06), transparent 50%)',
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-accent tracking-wider uppercase mb-8">Ready to start?</p>
            <h2 className="display-text text-white mb-6">
              LET'S WORK<br />
              <span className="gradient-text">TOGETHER</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-xl text-white/40 max-w-2xl mx-auto mb-16 leading-relaxed text-center">
            Whether it's an AI system that needs orchestrating, a product that needs building, or a workflow that needs automating — let's talk. First conversation is always free. No pitch, no pressure — just figuring out if I can help.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} scale>
          <div className="flex justify-center mb-20">
            <a
              href="https://wa.me/918110044608?text=Hi%20Suriyan%2C%20I%20have%20a%20project%20I%E2%80%99d%20like%20to%20discuss."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-full text-base font-bold hover:bg-indigo-400 hover:shadow-lg hover:shadow-accent/25 hover:scale-105 transition-all duration-300"
            >
              START A PROJECT
              <FiArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <a href="mailto:suriyandhanapal@gmail.com" className="group text-center">
              <div className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center mx-auto mb-3 text-white/40 group-hover:text-accent group-hover:border-accent/30 transition-all duration-300">
                <FiMail size={16} />
              </div>
              <p className="text-sm text-white/30 group-hover:text-white/60 transition-colors duration-300">suriyandhanapal@gmail.com</p>
            </a>
            <a href="tel:+918110044608" className="group text-center">
              <div className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center mx-auto mb-3 text-white/40 group-hover:text-accent group-hover:border-accent/30 transition-all duration-300">
                <FiPhone size={16} />
              </div>
              <p className="text-sm text-white/30 group-hover:text-white/60 transition-colors duration-300">+91 81100 44608</p>
            </a>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center mx-auto mb-3 text-white/40">
                <FiMapPin size={16} />
              </div>
              <p className="text-sm text-white/30">Coimbatore, Tamil Nadu</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
