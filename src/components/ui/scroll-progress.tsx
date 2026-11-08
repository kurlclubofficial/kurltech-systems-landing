"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Reading-progress bar pinned to the top edge of its positioned parent.
 * Animates `scaleX` rather than `width` so it stays on the compositor.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="bg-accent absolute inset-x-0 top-0 h-[3px] origin-left"
    />
  );
}
