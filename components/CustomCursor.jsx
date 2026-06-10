'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });

  useEffect(() => {
    if (reduceMotion) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const interactive = e.target.closest('a, button, [role="button"]');
      setHovering(Boolean(interactive));
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, [reduceMotion, x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Center dot — tracks instantly */}
      <motion.div
        className="fixed top-0 left-0 z-[99] pointer-events-none w-2 h-2 rounded-full bg-accent"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      {/* Trailing ring — springs behind, grows over interactive elements */}
      <motion.div
        className="fixed top-0 left-0 z-[99] pointer-events-none rounded-full border border-accent/60"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          opacity: pressed ? 0.4 : 1,
          scale: pressed ? 0.8 : 1,
          backgroundColor: hovering ? 'rgba(99, 102, 241, 0.08)' : 'rgba(99, 102, 241, 0)',
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
    </>
  );
}
