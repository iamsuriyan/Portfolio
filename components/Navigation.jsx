'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import { useLenis } from 'lenis/react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState('');
  const { scrollY } = useScroll();
  const lenis = useLenis();

  // Clicking a nav link scrolls the page down, which would otherwise trip the
  // auto-hide below — and because the scroll then stops, no further event
  // fires to bring the bar back. Lock hiding for the duration of that scroll.
  const navScrollLock = useRef(false);
  const lockTimer = useRef(null);

  const handleNavClick = useCallback(() => {
    navScrollLock.current = true;
    setHidden(false);
    clearTimeout(lockTimer.current);
    lockTimer.current = setTimeout(() => {
      navScrollLock.current = false;
    }, 1400);
  }, []);

  useEffect(() => () => clearTimeout(lockTimer.current), []);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 40);
    if (navScrollLock.current) return;
    setHidden(latest > previous && latest > 400 && !menuOpen);
  });

  // Highlight whichever section occupies the middle band of the viewport.
  // Tracking ratios rather than the last-fired entry keeps the underline
  // stable when two sections are briefly in view together.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);
    if (!sections.length) return;

    const ratios = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => ratios.set(entry.target.id, entry.intersectionRatio));
        let best = '';
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });
        setActive(bestRatio > 0 ? `#${best}` : '');
      },
      { rootMargin: '-20% 0px -35% 0px', threshold: [0, 0.15, 0.4, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lenis owns the scroll position, so pause it rather than fighting it
  // with body overflow while the mobile sheet is open.
  useEffect(() => {
    if (!lenis) return;
    if (menuOpen) lenis.stop();
    else lenis.start();
    return () => lenis.start();
  }, [menuOpen, lenis]);

  return (
    <motion.nav
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled ? 'border-line bg-bg/85 backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: hidden ? '-100%' : 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between py-4">
          <a
            href="#"
            onClick={handleNavClick}
            className="text-sm font-semibold tracking-tight text-fg transition-colors duration-300 hover:text-accent"
          >
            Suriyan Dhanapal
            <span className="ml-2.5 hidden font-mono text-[0.6875rem] font-normal tracking-wider text-fg-faint uppercase sm:inline">
              Software Engineer
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    aria-current={active === item.href ? 'true' : undefined}
                    className={`relative py-1 text-sm transition-colors duration-300 ${
                      active === item.href ? 'text-fg' : 'text-fg-subtle hover:text-fg'
                    }`}
                  >
                    {item.label}
                    {active === item.href && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 right-0 left-0 h-px bg-accent"
                        transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="./Suriyan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-fg-muted transition-colors duration-300 hover:border-accent/50 hover:text-fg"
            >
              Résumé
              <FiArrowUpRight
                size={13}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="-mr-2 p-2 text-fg md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-x-0 top-[57px] bottom-0 z-40 overflow-y-auto border-t border-line bg-bg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col px-6 py-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1], delay: index * 0.05 }}
                >
                  <a
                    href={item.href}
                    className="block border-b border-line-soft py-4 text-xl font-medium text-fg-muted transition-colors hover:text-fg"
                    onClick={() => {
                      setMenuOpen(false);
                      handleNavClick();
                    }}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="px-6">
              <a
                href="./Suriyan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-semibold text-fg-muted"
                onClick={() => setMenuOpen(false)}
              >
                Download résumé
                <FiArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
