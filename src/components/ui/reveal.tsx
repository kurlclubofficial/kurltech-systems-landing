"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** entrance offset on the Y axis (px) */
  y?: number;
  /** entrance offset on the X axis (px) */
  x?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
}

/** Fade + slide a block into view as it scrolls onto screen. */
export function Reveal({
  children,
  className,
  y = 24,
  x = 0,
  delay = 0,
  duration = 0.6,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
  once?: boolean;
}

/**
 * Wrap a list; children rendered with <StaggerItem> animate in one after another.
 * Variants propagate automatically to nested motion components.
 */
export function StaggerGroup({
  children,
  className,
  staggerChildren = 0.1,
  delayChildren = 0,
  once = true,
}: StaggerGroupProps) {
  const variants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  y?: number;
}

export function StaggerItem({ children, className, y = 20 }: StaggerItemProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: EASE },
    },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
