"use client";

import { motion } from "framer-motion";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind",
  "Styled Components",
  "Storybook",
];

const textReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="gradient-bg absolute -top-1/2 -left-1/2 w-full h-full rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 60%)",
          }}
        />
        <div
          className="gradient-bg absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(129,140,248,0.1) 0%, transparent 60%)",
            animationDelay: "-7s",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          custom={0}
          variants={textReveal}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/50 text-xs text-muted mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Software Development Engineer — SDE 2
        </motion.div>

        <motion.h1
          custom={1}
          variants={textReveal}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          BalaAravind{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
            CS
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={textReveal}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Frontend engineer with 4+ years of experience building scalable,
          high-performance web applications. Specialized in React, Next.js, and
          building reusable UI systems for multi-tenant platforms.
        </motion.p>

        <motion.p
          custom={3}
          variants={textReveal}
          initial="hidden"
          animate="visible"
          className="text-base sm:text-lg font-mono text-accent mb-10"
        >
          &quot;I don&apos;t just build UI — I design systems that scale.&quot;
        </motion.p>

        {/* Tech Stack Pills */}
        <motion.div
          custom={4}
          variants={textReveal}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono text-muted border border-border rounded-full bg-surface/30 hover:border-accent/50 hover:text-foreground transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          custom={5}
          variants={textReveal}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-medium rounded-lg overflow-hidden transition-all duration-300 hover:bg-accent-light"
          >
            <span className="relative z-10">View My Work</span>
            <svg
              className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-muted border border-border rounded-lg hover:border-foreground/30 hover:text-foreground transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border border-border rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 bg-muted rounded-full mt-1.5"
          />
        </div>
      </motion.div>
    </section>
  );
}
