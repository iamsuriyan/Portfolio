'use client';

import { ReactLenis } from 'lenis/react';
import { MotionConfig } from 'motion/react';

export default function SmoothScroll({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      <ReactLenis
        root
        options={{
          duration: 1.1,
          anchors: { offset: -80 },
          smoothWheel: true,
        }}
      >
        {children}
      </ReactLenis>
    </MotionConfig>
  );
}
