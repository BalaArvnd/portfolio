"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

interface TradeOff {
  left: string;
  right: string;
  position: number; // 0-100
  explanation: string;
}

const tradeOffs: TradeOff[] = [
  {
    left: "Performance",
    right: "Maintainability",
    position: 60,
    explanation:
      "I lean toward maintainability, but never at the cost of user experience. Code should be readable, but a 3-second load time is never acceptable.",
  },
  {
    left: "Reusability",
    right: "Flexibility",
    position: 45,
    explanation:
      "Build reusable primitives with flexible composition APIs. Overly rigid shared components become bottlenecks; overly flexible ones become chaos.",
  },
  {
    left: "Speed of Delivery",
    right: "Code Quality",
    position: 55,
    explanation:
      "Ship fast, but not fragile. I favor pragmatic quality — clean enough to iterate on without accumulating debt that slows the next sprint.",
  },
  {
    left: "Abstraction",
    right: "Simplicity",
    position: 65,
    explanation:
      "Three copies of similar code is better than a premature abstraction. I abstract only when the pattern has proven itself across multiple use cases.",
  },
];

const decisionTree = [
  {
    question: "Is this a shared component?",
    yes: "Design System",
    no: "Feature-level component",
  },
  {
    question: "Does it need runtime config?",
    yes: "Factory Pattern",
    no: "Static implementation",
  },
  {
    question: "Will multiple teams use this?",
    yes: "Publish as package",
    no: "Keep in feature folder",
  },
];

const approaches = [
  {
    bad: "Global state for everything",
    good: "Colocate state as close as possible to where it's used",
  },
  {
    bad: "One massive component file",
    good: "Compose small, focused components with single responsibilities",
  },
  {
    bad: "Copy-paste across projects",
    good: "Extract to design system with Storybook documentation",
  },
];

export default function Thinking() {
  const [activeTradeOff, setActiveTradeOff] = useState(0);

  return (
    <section id="thinking" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          label="Philosophy"
          title="How I Think"
          description="Engineering is about trade-offs. Here's how I navigate them."
        />

        {/* Trade-off Sliders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xs font-mono text-accent mb-6 tracking-widest uppercase">
            Trade-off Spectrum
          </h3>
          <div className="space-y-6">
            {tradeOffs.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveTradeOff(i)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                  activeTradeOff === i
                    ? "border-accent/30 bg-accent/5"
                    : "border-border bg-surface/20 hover:bg-surface/40"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-muted">{t.left}</span>
                  <span className="text-xs font-mono text-muted">{t.right}</span>
                </div>
                <div className="relative h-1 bg-surface-light rounded-full mb-3">
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/20"
                    initial={false}
                    animate={{ left: `${t.position}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ marginLeft: "-6px" }}
                  />
                  <div
                    className="absolute top-0 left-0 h-full bg-accent/30 rounded-full"
                    style={{ width: `${t.position}%` }}
                  />
                </div>
                {activeTradeOff === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-xs text-muted leading-relaxed"
                  >
                    {t.explanation}
                  </motion.p>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Decision Tree */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xs font-mono text-accent mb-6 tracking-widest uppercase">
            Decision Framework
          </h3>
          <div className="space-y-4">
            {decisionTree.map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                {i > 0 && (
                  <div className="absolute -top-4 left-6 w-px h-4 bg-border" />
                )}
                <div className="p-4 rounded-lg border border-border bg-surface/30">
                  <p className="text-sm font-medium mb-3">{node.question}</p>
                  <div className="flex gap-3">
                    <div className="flex-1 p-2.5 rounded-md bg-emerald-500/5 border border-emerald-500/20">
                      <span className="text-[10px] font-mono text-emerald-400 block mb-0.5">
                        YES →
                      </span>
                      <span className="text-xs text-muted">{node.yes}</span>
                    </div>
                    <div className="flex-1 p-2.5 rounded-md bg-surface-light border border-border">
                      <span className="text-[10px] font-mono text-muted block mb-0.5">
                        NO →
                      </span>
                      <span className="text-xs text-muted">{node.no}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bad vs Good */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xs font-mono text-accent mb-6 tracking-widest uppercase">
            Approach Comparison
          </h3>
          <div className="space-y-3">
            {approaches.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                <div className="p-3 rounded-lg border border-red-500/20 bg-red-500/5">
                  <span className="text-[10px] font-mono text-red-400 block mb-1">
                    AVOID
                  </span>
                  <p className="text-xs text-muted">{a.bad}</p>
                </div>
                <div className="p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5">
                  <span className="text-[10px] font-mono text-emerald-400 block mb-1">
                    PREFER
                  </span>
                  <p className="text-xs text-muted">{a.good}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
