'use client';

import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'motion/react';

// A cursor-tracking glow layered behind card content. Deliberately the only
// hover effect on these surfaces — no tilt, no lift — so the motion reads as
// a considered detail instead of a pile of transforms.
export default function SpotlightCard({ children, className = '', as: Tag = 'div', ...rest }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);

  const spotlight = useMotionTemplate`radial-gradient(480px circle at ${mouseX}px ${mouseY}px, rgba(91, 127, 255, 0.07), transparent 65%)`;

  const handleMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  const handleLeave = () => {
    mouseX.set(-9999);
    mouseY.set(-9999);
  };

  const MotionTag = motion[Tag] ?? motion.div;

  return (
    <MotionTag
      ref={ref}
      className={`group relative overflow-hidden ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...rest}
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: spotlight }}
      />
      <div className="relative">{children}</div>
    </MotionTag>
  );
}
