'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

const words = ['Build', 'Automate', 'Ship'];

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setDone(true);
      return;
    }
    document.body.style.overflow = 'hidden';
    const wordTimer = setInterval(() => {
      setIndex((i) => Math.min(i + 1, words.length - 1));
    }, 450);
    const doneTimer = setTimeout(() => setDone(true), 1600);
    return () => {
      clearInterval(wordTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = '';
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (done) document.body.style.overflow = '';
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] bg-base flex items-center justify-center"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <div className="flex items-baseline gap-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                exit={{ y: '-110%' }}
                transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
              >
                {words[index]}
                <span className="text-accent">.</span>
              </motion.span>
            </AnimatePresence>
          </div>
          {/* Bottom progress hairline */}
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-accent"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
