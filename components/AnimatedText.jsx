'use client';

import { motion } from 'motion/react';

// Staggered word-by-word rise reveal. Pass strings or inline elements
// (e.g. gradient spans) — each child animates as one unit.
export default function AnimatedText({
  children,
  as: Tag = 'span',
  className = '',
  delay = 0,
  stagger = 0.08,
  once = true,
}) {
  const parts = Array.isArray(children) ? children : [children];
  const words = parts.flatMap((part, i) =>
    typeof part === 'string'
      ? part.split(' ').filter(Boolean).map((w, j) => ({ key: `${i}-${j}`, node: w }))
      : [{ key: `el-${i}`, node: part }]
  );

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={word.key}>
          <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom">
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: '110%', rotate: 4 }}
              whileInView={{ y: 0, rotate: 0 }}
              viewport={{ once, amount: 0.5 }}
              transition={{
                duration: 0.7,
                ease: [0.33, 1, 0.68, 1],
                delay: delay + i * stagger,
              }}
            >
              {word.node}
            </motion.span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}
