'use client';

import { motion, useReducedMotion } from 'motion/react';

const offsets = {
  up: (d) => ({ y: d }),
  down: (d) => ({ y: -d }),
  left: (d) => ({ x: d }),
  right: (d) => ({ x: -d }),
  none: () => ({}),
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  distance = 40,
  duration = 0.8,
  scale = false,
  className = '',
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      data-reveal
      initial={{
        opacity: 0,
        filter: 'blur(8px)',
        ...(scale ? { scale: 0.95 } : {}),
        ...offsets[direction](distance),
      }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
