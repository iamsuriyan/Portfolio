'use client';

import { motion, useReducedMotion } from 'motion/react';

// Staggered word-by-word rise. Pass strings or inline elements (e.g. gradient
// spans) — each child animates as one unit.
//
// The in-view trigger lives on the wrapper, never on the words themselves:
// each word starts translated 110% below an overflow-hidden mask, so an
// observer watching the word would measure it as fully clipped and never
// fire, leaving the heading permanently hidden.
const container = (delay, stagger) => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren: stagger } },
});

const word = {
  hidden: { y: '110%', rotate: 4 },
  show: { y: 0, rotate: 0, transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] } },
};

export default function AnimatedText({
  children,
  as: Tag = 'span',
  className = '',
  delay = 0,
  stagger = 0.08,
  once = true,
}) {
  const reduceMotion = useReducedMotion();
  const parts = Array.isArray(children) ? children : [children];

  if (reduceMotion) {
    return <Tag className={className}>{parts}</Tag>;
  }

  const words = parts.flatMap((part, i) =>
    typeof part === 'string'
      ? part.split(' ').filter(Boolean).map((w, j) => ({ key: `${i}-${j}`, node: w }))
      : [{ key: `el-${i}`, node: part }]
  );

  const MotionTag = motion[Tag] ?? motion.span;

  return (
    <MotionTag
      className={className}
      variants={container(delay, stagger)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.3 }}
    >
      {words.map((item, i) => (
        <span key={item.key}>
          <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom">
            <motion.span className="inline-block will-change-transform" variants={word} data-reveal>
              {item.node}
            </motion.span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </MotionTag>
  );
}
