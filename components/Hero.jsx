'use client';

import { useRef } from 'react';
import { FiArrowDown, FiArrowUpRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { motion, useScroll, useTransform } from 'motion/react';
import Magnetic from './Magnetic';

// The stack summary shown in the right-hand panel. Every entry is drawn
// from work that actually shipped — no aspirational tooling.
const layers = [
  { tier: 'interface', items: 'React · Next.js · Redux Toolkit · Expo' },
  { tier: 'services', items: 'Node.js · Express · FastAPI · gRPC' },
  { tier: 'intelligence', items: 'LLM · RAG · agents · STT / TTS' },
  { tier: 'data', items: 'PostgreSQL · MongoDB · pgvector · Redis' },
  { tier: 'delivery', items: 'Docker · GCP · AWS · GitHub Actions' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1], delay },
  }),
};

export default function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const panelY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-svh items-center overflow-hidden px-6 pt-32 pb-20 sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0"
        style={{ maskImage: 'radial-gradient(ellipse 75% 65% at 50% 35%, black 10%, transparent 72%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 50% 45% at 72% 30%, rgba(91, 127, 255, 0.09), transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* ── Left: positioning ─────────────────────────────── */}
          <div>
            <motion.div data-reveal variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/80 py-1.5 pr-4 pl-3">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="dot-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="label text-fg-muted">Open to software engineering roles</span>
              </div>
            </motion.div>

            <motion.p
              className="label mt-10 text-fg-subtle"
              data-reveal
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.08}
            >
              Suriyan Dhanapal — Coimbatore, India
            </motion.p>

            <motion.h1
              className="display-hero mt-5 text-fg balance"
              data-reveal
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.16}
            >
              I build AI products,{' '}
              <span className="text-accent">end to end.</span>
            </motion.h1>

            <motion.p
              className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted pretty"
              data-reveal
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.24}
            >
              Full-stack engineer with 2 years shipping production systems — Next.js and React
              on the front, Node.js and FastAPI behind it, and a lot of AI plumbing in between.
              Currently looking for my next role.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-5"
              data-reveal
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.32}
            >
              <Magnetic strength={0.22}>
                <a
                  href="mailto:suriyandhanapal@gmail.com?subject=Opportunity%20for%20Suriyan"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-fg px-7 py-3.5 text-sm font-semibold text-bg transition-colors duration-300 hover:bg-white"
                >
                  Get in touch
                  <FiArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </Magnetic>

              <a
                href="./Suriyan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong px-7 py-3.5 text-sm font-semibold text-fg-muted transition-colors duration-300 hover:border-accent/50 hover:text-fg"
              >
                Résumé
                <FiDownload size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>

              <div className="flex items-center gap-1">
                <a
                  href="https://github.com/iamsuriyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="rounded-full p-3 text-fg-subtle transition-colors duration-300 hover:text-fg"
                >
                  <FiGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/suriyan-d-74514223a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="rounded-full p-3 text-fg-subtle transition-colors duration-300 hover:text-fg"
                >
                  <FiLinkedin size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── Right: stack panel ────────────────────────────── */}
          <motion.div
            className="hidden lg:block"
            data-reveal
            style={{ y: panelY }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
          >
            <div className="card overflow-hidden">
              <div className="flex items-center justify-between border-b border-line px-6 py-4">
                <span className="label text-fg-subtle">Stack in production</span>
                <span className="label text-emerald-400/80">shipped</span>
              </div>

              <dl className="divide-y divide-line-soft">
                {layers.map((layer, i) => (
                  <motion.div
                    key={layer.tier}
                    className="grid grid-cols-[7.5rem_1fr] items-baseline gap-4 px-6 py-4"
                    data-reveal
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.5 + i * 0.08 }}
                  >
                    <dt className="font-mono text-[0.6875rem] tracking-wider text-fg-faint uppercase">
                      {layer.tier}
                    </dt>
                    <dd className="text-sm text-fg-muted">{layer.items}</dd>
                  </motion.div>
                ))}
              </dl>

              <div className="grid grid-cols-3 divide-x divide-line-soft border-t border-line bg-surface-2">
                {[
                  ['25+', 'providers'],
                  ['8', 'connectors'],
                  ['4', 'platforms'],
                ].map(([value, caption]) => (
                  <div key={caption} className="px-4 py-5 text-center">
                    <div className="text-2xl font-semibold tracking-tight text-fg">{value}</div>
                    <div className="label mt-1.5">{caption}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div style={{ opacity: cueOpacity }}>
          <motion.div
            className="mt-20 flex items-center gap-3 text-fg-faint"
            data-reveal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
            <span className="label">Scroll</span>
            <FiArrowDown size={12} aria-hidden="true" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
