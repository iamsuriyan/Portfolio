'use client';

import { useRef } from 'react';
import { FiArrowDown, FiArrowRight } from 'react-icons/fi';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import AnimatedText from './AnimatedText';
import Magnetic from './Magnetic';

export default function Hero() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  // Hold the intro until the preloader curtain starts lifting
  const base = reduceMotion ? 0 : 1.3;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: base + delay },
    }),
  };

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center px-6 sm:px-8 lg:px-12 pt-24 pb-16 relative overflow-hidden">
      {/* Backdrop: dot grid faded toward the edges, plus a soft accent glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid pointer-events-none"
        style={{ maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 75%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 75% 35%, rgba(99, 102, 241, 0.08), transparent 45%)' }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <motion.div className="space-y-8" style={{ y: textY }}>
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="dot-pulse absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-green-400/80 tracking-wide">
                  Open to new opportunities & collaborations
                </span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.1}>
              <div className="space-y-3">
                <p className="text-sm font-medium text-white/40 tracking-wide uppercase">
                  Software Engineer · Based in Coimbatore, INDIA
                </p>
                <p className="text-sm font-medium text-white/40 tracking-wide">
                  <span className="text-white/80 font-semibold">2+ years</span> shipping production AI products
                </p>
              </div>
            </motion.div>

            <h1 className="display-text text-white">
              <AnimatedText as="span" className="block" delay={base + 0.15} stagger={0.07}>
                I Build
              </AnimatedText>
              <AnimatedText as="span" className="block" delay={base + 0.3} stagger={0.07}>
                <span className="gradient-text">Intelligent</span>
              </AnimatedText>
              <AnimatedText as="span" className="block" delay={base + 0.45} stagger={0.07}>
                Systems
              </AnimatedText>
            </h1>

            <motion.p
              className="text-lg text-white/50 max-w-lg leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.55}
            >
              Software Engineer building production AI products at Mindgryd — Areev, Atmatic and Axtion. Full-stack development, backend system design, OAuth identity and agentic automation, owned end to end.
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.7}>
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <Magnetic>
                  <a
                    href="https://wa.me/918110044608?text=Hi%20Suriyan%2C%20I%20have%20a%20project%20I%E2%80%99d%20like%20to%20discuss."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-accent text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-indigo-400 hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 pulse-glow"
                  >
                    GET IN TOUCH
                    <FiArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Magnetic>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 mt-2 sm:mt-3 text-sm font-semibold text-white/50 border-b border-white/20 pb-1 hover:text-white hover:border-white transition-all duration-300"
                >
                  SEE MY WORK
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Visual */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            style={{ y: visualY }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: base + 0.4 }}
          >
            <div className="relative w-full max-w-md aspect-square float-animation">
              <div className="absolute inset-0 rounded-3xl bg-surface border border-line flex items-center justify-center overflow-hidden">
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
              <div className="absolute -top-4 -right-4 bg-base border border-line-strong rounded-full px-5 py-2.5 text-xs font-semibold text-accent shadow-lg shadow-accent/10" style={{ animation: 'float 5s ease-in-out infinite' }}>
                AI / ML
              </div>
              <div className="absolute -bottom-4 -left-4 bg-base border border-line-strong rounded-full px-5 py-2.5 text-xs font-semibold text-white/70 shadow-lg" style={{ animation: 'float 5s ease-in-out infinite 1.5s' }}>
                Full Stack
              </div>
              <div className="absolute top-1/2 -right-6 bg-base border border-line-strong rounded-full px-5 py-2.5 text-xs font-semibold text-white/50 shadow-lg" style={{ animation: 'float 5s ease-in-out infinite 3s' }}>
                Automation
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator — fades as you start scrolling */}
        <motion.div style={{ opacity: fadeOut }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: base + 1 }}
            className="mt-20 flex items-center gap-3 text-white/30"
          >
            <div className="w-8 h-px bg-white/20" />
            <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
            <FiArrowDown size={12} className="animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
