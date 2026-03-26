"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    label: "Styling",
    skills: ["Tailwind CSS", "Styled Components", "CSS-in-JS"],
  },
  {
    label: "Architecture",
    skills: [
      "Component Design",
      "Design Systems",
      "Performance Optimization",
      "Multi-tenant Systems",
    ],
  },
  {
    label: "Tools",
    skills: ["Storybook", "Git", "CI/CD", "Webpack"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader label="Toolkit" title="Skills" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
              className="p-6 rounded-xl border border-border bg-surface/20 hover:bg-surface/40 transition-colors duration-300"
            >
              <h3 className="text-xs font-mono text-accent mb-4 tracking-widest uppercase">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono text-muted bg-background border border-border rounded-md hover:text-foreground hover:border-accent/30 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
