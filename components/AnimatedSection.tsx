"use client";

import { motion, useAnimation, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  // Use a function variant so we can pass delay via `custom`
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export default function AnimatedSection({
  children,
  className = "",
  as: Tag = "section",
  delay = 0,
  once = true,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  as?: any;
  delay?: number;
  once?: boolean;
  id?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            // Start the named variant; delay is passed via `custom`
            controls.start("show");
            if (once) io.unobserve(el);
          } else if (!once) {
            controls.start("hidden");
          }
        });
      },
      { root: null, rootMargin: "0px 0px -20% 0px", threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [controls, once]);

  // Use `motion` element with `variants` and pass delay via `custom`
  const MotionTag: any = motion(Tag);

  return (
    <MotionTag
      id={id}
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      custom={delay}
    >
      {children}
    </MotionTag>
  );
}
