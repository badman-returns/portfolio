"use client";

import { motion, useReducedMotion } from "motion/react";

const durations = {
  fast: 0.2,
  medium: 0.45,
  slow: 0.7,
};

const easings = {
  smooth: [0.22, 1, 0.36, 1],
  standard: [0.25, 0.1, 0.25, 1],
};

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 18,
  duration = durations.medium,
  once = true,
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: easings.smooth }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className, delayChildren = 0.08, stagger = 0.08 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: durations.medium, ease: easings.smooth },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: durations.slow, delay, ease: easings.smooth }}
    >
      {children}
    </motion.div>
  );
}

export function Magnetic({ children, className }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

export function RouteEnter({ children, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: durations.medium, ease: easings.standard }}
    >
      {children}
    </motion.div>
  );
}
