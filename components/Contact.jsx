'use client';

import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiMessageCircle, FiPhone } from 'react-icons/fi';
import ScrollReveal from './ScrollReveal';
import AnimatedText from './AnimatedText';
import Magnetic from './Magnetic';

const channels = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'suriyandhanapal@gmail.com',
    href: 'mailto:suriyandhanapal@gmail.com?subject=Opportunity%20for%20Suriyan',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'suriyan-d',
    href: 'https://www.linkedin.com/in/suriyan-d-74514223a/',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'iamsuriyan',
    href: 'https://github.com/iamsuriyan',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 81100 44608',
    href: 'tel:+918110044608',
  },
  {
    icon: FiMessageCircle,
    label: 'WhatsApp',
    value: 'Message directly',
    href: 'https://wa.me/918110044608?text=Hi%20Suriyan%2C%20I%E2%80%99d%20like%20to%20talk%20about%20a%20role.',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line px-6 py-32 sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 90%, rgba(91, 127, 255, 0.07), transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <p className="label text-accent/70">Contact</p>
        </ScrollReveal>

        <h2 className="display mt-8 text-fg">
          <AnimatedText as="span" className="block" stagger={0.06}>
            Let&apos;s build
          </AnimatedText>
          <AnimatedText as="span" className="block" delay={0.12} stagger={0.06}>
            something solid.
          </AnimatedText>
        </h2>

        <ScrollReveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-fg-muted pretty">
            I&apos;m currently looking for my next role, and my inbox is always open. Whether
            you have an opportunity, a question, or just want to say hi — I&apos;ll get back
            to you.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnetic strength={0.22}>
              <a
                href="mailto:suriyandhanapal@gmail.com?subject=Opportunity%20for%20Suriyan"
                className="group inline-flex items-center gap-2.5 rounded-full bg-fg px-9 py-4 text-sm font-semibold text-bg transition-colors duration-300 hover:bg-white"
              >
                Email me
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
              className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong px-9 py-4 text-sm font-semibold text-fg-muted transition-colors duration-300 hover:border-accent/50 hover:text-fg"
            >
              Download résumé
              <FiDownload size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <ul className="mt-20 grid gap-px overflow-hidden rounded-xl border border-line bg-line text-left sm:grid-cols-2 lg:grid-cols-3">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex h-full items-center gap-4 bg-surface px-6 py-5 transition-colors duration-300 hover:bg-surface-2"
                >
                  <Icon
                    size={16}
                    aria-hidden="true"
                    className="shrink-0 text-fg-faint transition-colors duration-300 group-hover:text-accent"
                  />
                  <span className="min-w-0">
                    <span className="label block">{label}</span>
                    <span className="mt-1 block truncate text-sm text-fg-muted transition-colors duration-300 group-hover:text-fg">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
            <li className="flex h-full items-center gap-4 bg-surface px-6 py-5">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="dot-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span>
                <span className="label block">Location</span>
                <span className="mt-1 block text-sm text-fg-muted">Coimbatore, India · remote-friendly</span>
              </span>
            </li>
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
