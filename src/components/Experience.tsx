"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const achievements = [
  {
    text: "Led a team of 5 frontend developers delivering scalable UI systems across multiple product verticals",
    metric: "5 engineers",
  },
  {
    text: "Built a comprehensive design system from scratch using Storybook, establishing shared component standards",
    metric: "Design System",
  },
  {
    text: "Improved application performance by 25% through code splitting, lazy loading, and render optimization",
    metric: "25% faster",
  },
  {
    text: "Developed real-time map visualization for delivery operations, improving efficiency by 35%",
    metric: "35% efficiency",
  },
  {
    text: "Built high-conversion checkout flow increasing conversion rates by 20%",
    metric: "+20% conversion",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          label="Career"
          title="Experience"
          description="Building scalable frontend systems at ZopSmart."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="relative pl-8 sm:pl-20">
            {/* Company header */}
            <div className="relative mb-8">
              <div className="absolute -left-8 sm:-left-20 top-1 w-3 h-3 rounded-full bg-accent border-2 border-background sm:left-[-52px]" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <h3 className="text-xl font-bold">ZopSmart</h3>
                <span className="text-xs font-mono text-muted px-2 py-0.5 border border-border rounded-full w-fit">
                  SDE 2
                </span>
              </div>
              <p className="text-sm text-muted mt-1">
                Software Development Engineer
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative group"
                >
                  <div className="absolute -left-8 sm:-left-20 top-3 w-1.5 h-1.5 rounded-full bg-border group-hover:bg-accent transition-colors sm:left-[-47px]" />
                  <div className="p-4 rounded-lg border border-border bg-surface/20 hover:bg-surface/40 hover:border-accent/20 transition-all duration-300">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-sm text-muted leading-relaxed flex-1">
                        {achievement.text}
                      </p>
                      <span className="text-xs font-mono text-accent whitespace-nowrap px-2 py-1 bg-accent/5 rounded-md border border-accent/10">
                        {achievement.metric}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Award */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 relative"
            >
              <div className="absolute -left-8 sm:-left-20 top-3 w-1.5 h-1.5 rounded-full bg-amber-400 sm:left-[-47px]" />
              <div className="p-4 rounded-lg border border-amber-500/20 bg-amber-500/5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-amber-400 text-sm">★</span>
                  <span className="text-xs font-mono text-amber-400 tracking-widest uppercase">
                    Award
                  </span>
                </div>
                <p className="text-sm font-medium">
                  Best Employee Award
                </p>
                <p className="text-xs text-muted mt-0.5">
                  Pivot Polaris — ZopSmart
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
