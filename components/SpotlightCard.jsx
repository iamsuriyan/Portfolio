'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate, useReducedMotion } from 'motion/react';

// Card with a cursor-tracking spotlight and a subtle 3D tilt.
export default function SpotlightCard({ children, className = '', tilt = true, tiltStrength = 5 }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 20 });

  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.1), transparent 70%)`;

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    mouseX.set(px);
    mouseY.set(py);
    if (tilt && !reduceMotion) {
      rotateX.set(-((py / rect.height) - 0.5) * tiltStrength);
      rotateY.set(((px / rect.width) - 0.5) * tiltStrength);
    }
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: spotlight }}
        aria-hidden="true"
      />
      {children}
    </motion.div>
  );
}
