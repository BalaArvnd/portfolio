"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";

interface ApproachOption {
  label: string;
  description: string;
  status: "rejected" | "chosen";
}

interface ProjectData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  approaches: ApproachOption[];
  decision: string;
  architecture: { label: string; description: string }[];
  challenges: string[];
  impact: string[];
  visualization: React.ReactNode;
}

const projects: ProjectData[] = [
  {
    id: "theme-engine",
    number: "01",
    title: "Multi-Tenant Theme Engine",
    subtitle: "for E-commerce",
    description:
      "A scalable frontend architecture enabling multiple storefronts to share a single codebase while supporting completely different UI structures.",
    problem:
      "E-commerce clients required completely different UI layouts, but maintaining separate codebases was inefficient and unscalable.",
    approaches: [
      {
        label: "Hardcoded themes per client",
        description:
          "Duplicate codebase for each client with custom styling. Results in maintenance nightmare and inconsistent updates.",
        status: "rejected",
      },
      {
        label: "Conditional rendering everywhere",
        description:
          "Litter components with if/else blocks for each theme. Makes code unreadable and untestable.",
        status: "rejected",
      },
      {
        label: "Component factory pattern",
        description:
          "Dynamic component resolution based on theme config. Clean separation, scalable, and maintainable.",
        status: "chosen",
      },
    ],
    decision:
      "Chose a component-driven architecture using a factory pattern to dynamically render UI based on theme configuration. Each theme declares its component map, and the renderer resolves components at runtime.",
    architecture: [
      {
        label: "Theme Config",
        description: "JSON-based configuration defining layout structure and component mappings",
      },
      {
        label: "Component Registry",
        description: "Central registry mapping component keys to implementations",
      },
      {
        label: "Dynamic Renderer",
        description: "Runtime resolution engine that assembles pages from config",
      },
      {
        label: "Design System",
        description: "Shared primitive components ensuring visual consistency",
      },
    ],
    challenges: [
      "Avoiding performance bottlenecks with dynamic imports",
      "Maintaining visual consistency across themes",
      "Preventing prop-drilling explosion in deeply nested layouts",
    ],
    impact: [
      "Single codebase serving multiple storefronts",
      "70% faster onboarding of new clients",
      "Improved maintainability across the platform",
    ],
    visualization: <ThemeEngineViz />,
  },
  {
    id: "checkout",
    number: "02",
    title: "High-Conversion Checkout Flow",
    subtitle: "Next.js",
    description:
      "Optimized checkout experience reducing drop-offs through UX improvements, SSR optimization, and intelligent API handling.",
    problem:
      "Significant drop-offs in the checkout flow were hurting conversion rates. Slow page loads and poor state management created friction.",
    approaches: [
      {
        label: "Client-side only approach",
        description:
          "Full SPA checkout with client-side fetching. Slow initial loads and poor SEO.",
        status: "rejected",
      },
      {
        label: "SSR + optimistic updates",
        description:
          "Server-rendered critical path with optimistic UI for interactions. Fast loads, smooth UX.",
        status: "chosen",
      },
    ],
    decision:
      "Combined SSR for critical checkout data with optimistic UI updates. Pre-fetched user data server-side while handling cart mutations optimistically on the client.",
    architecture: [
      { label: "SSR Layer", description: "Server-side data fetching for initial checkout state" },
      { label: "State Machine", description: "XState-driven flow managing checkout step transitions" },
      { label: "API Gateway", description: "Batched API calls reducing network roundtrips" },
      { label: "Error Recovery", description: "Graceful fallbacks preserving user progress" },
    ],
    challenges: [
      "Synchronizing state across multiple API endpoints",
      "Handling API latency without blocking user interactions",
      "Managing complex form validation across steps",
    ],
    impact: [
      "20% improvement in conversion rates",
      "40% reduction in checkout load time",
      "Significantly reduced cart abandonment",
    ],
    visualization: <CheckoutViz />,
  },
  {
    id: "delivery",
    number: "03",
    title: "Live Route & Delivery Zone Mapping",
    subtitle: "Real-time Visualization",
    description:
      "Real-time delivery zone visualization system replacing manual planning with dynamic, data-driven route optimization.",
    problem:
      "Manual inefficiencies in delivery planning were causing delayed deliveries and poor resource allocation.",
    approaches: [
      {
        label: "Static zone boundaries",
        description:
          "Pre-defined delivery zones updated manually. Doesn't account for real-time conditions.",
        status: "rejected",
      },
      {
        label: "Dynamic zone rendering",
        description:
          "Real-time zone calculation with Google Maps integration. Adapts to live data.",
        status: "chosen",
      },
    ],
    decision:
      "Integrated Google Maps with dynamic polygon rendering for delivery zones. Zones update in real-time based on driver locations, order density, and traffic conditions.",
    architecture: [
      { label: "Maps Layer", description: "Google Maps API with custom overlay rendering" },
      { label: "WebSocket Feed", description: "Real-time driver and order position updates" },
      { label: "Zone Engine", description: "Dynamic polygon calculation based on live data" },
      { label: "Dashboard", description: "Operations dashboard with zone analytics" },
    ],
    challenges: [
      "Rendering 1000+ markers without performance degradation",
      "Real-time polygon recalculation efficiency",
      "Handling intermittent GPS data from drivers",
    ],
    impact: [
      "35% improvement in operational efficiency",
      "Real-time visibility for operations team",
      "Eliminated manual zone planning overhead",
    ],
    visualization: <MapViz />,
  },
];

function ThemeEngineViz() {
  const [activeTheme, setActiveTheme] = useState<"A" | "B">("A");
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTheme("A")}
          className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all ${activeTheme === "A" ? "bg-accent text-white" : "bg-surface-light text-muted"}`}
        >
          Theme A
        </button>
        <button
          onClick={() => setActiveTheme("B")}
          className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all ${activeTheme === "B" ? "bg-accent text-white" : "bg-surface-light text-muted"}`}
        >
          Theme B
        </button>
      </div>
      <motion.div
        key={activeTheme}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="border border-border rounded-lg overflow-hidden"
      >
        {activeTheme === "A" ? (
          <div className="p-4 space-y-3">
            <div className="h-8 bg-accent/20 rounded flex items-center px-3">
              <span className="text-[10px] font-mono text-accent">Header — Full Width Nav</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2 h-24 bg-surface-light rounded flex items-center justify-center">
                <span className="text-[10px] font-mono text-muted">Hero Banner</span>
              </div>
              <div className="h-24 bg-surface-light rounded flex items-center justify-center">
                <span className="text-[10px] font-mono text-muted">Sidebar</span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-16 bg-surface-light rounded flex items-center justify-center">
                  <span className="text-[10px] font-mono text-muted">Card</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-4 space-y-3">
            <div className="h-8 bg-purple-500/20 rounded flex items-center justify-center">
              <span className="text-[10px] font-mono text-purple-400">Header — Centered Logo</span>
            </div>
            <div className="h-28 bg-surface-light rounded flex items-center justify-center">
              <span className="text-[10px] font-mono text-muted">Full-Width Hero</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-20 bg-surface-light rounded flex items-center justify-center">
                  <span className="text-[10px] font-mono text-muted">Product</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
      <p className="text-[10px] font-mono text-muted">
        Same codebase → different layouts via theme config
      </p>
    </div>
  );
}

function CheckoutViz() {
  const [step, setStep] = useState(0);
  const steps = ["Cart", "Shipping", "Payment", "Confirm"];
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-1">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center">
            <button
              onClick={() => setStep(i)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono transition-all ${
                i <= step
                  ? "bg-accent/20 text-accent"
                  : "bg-surface-light text-muted"
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] ${
                  i < step
                    ? "bg-emerald-500 text-white"
                    : i === step
                      ? "bg-accent text-white"
                      : "bg-surface-light border border-border"
                }`}
              >
                {i < step ? "✓" : i + 1}
              </span>
              {s}
            </button>
            {i < steps.length - 1 && (
              <div
                className={`w-4 h-px mx-0.5 ${i < step ? "bg-accent" : "bg-border"}`}
              />
            )}
          </div>
        ))}
      </div>
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        className="border border-border rounded-lg p-4 space-y-2"
      >
        {step === 0 && (
          <div className="space-y-2">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-3 p-2 bg-surface-light rounded">
                <div className="w-8 h-8 bg-surface rounded" />
                <div className="flex-1">
                  <div className="h-2 w-20 bg-surface rounded" />
                  <div className="h-2 w-12 bg-surface rounded mt-1" />
                </div>
                <span className="text-[10px] font-mono text-muted">$49</span>
              </div>
            ))}
          </div>
        )}
        {step === 1 && (
          <div className="space-y-2">
            {["Address", "City", "ZIP"].map((f) => (
              <div key={f} className="space-y-1">
                <span className="text-[10px] font-mono text-muted">{f}</span>
                <div className="h-7 bg-surface-light rounded border border-border" />
              </div>
            ))}
          </div>
        )}
        {step === 2 && (
          <div className="space-y-2">
            <div className="h-8 bg-surface-light rounded border border-border flex items-center px-2">
              <span className="text-[10px] font-mono text-muted">
                •••• •••• •••• 4242
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-7 bg-surface-light rounded border border-border" />
              <div className="h-7 bg-surface-light rounded border border-border" />
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col items-center py-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center mb-2">
              <span className="text-emerald-400 text-sm">✓</span>
            </div>
            <span className="text-[10px] font-mono text-muted">
              Order Confirmed
            </span>
          </div>
        )}
      </motion.div>
    </div>
  );
}

function MapViz() {
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <div className="relative h-48 bg-surface-light">
        {/* Simulated map grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Zone polygons */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
          <polygon
            points="30,50 100,30 120,80 80,110 20,90"
            fill="rgba(99,102,241,0.15)"
            stroke="rgba(99,102,241,0.4)"
            strokeWidth="1"
          />
          <polygon
            points="130,40 220,20 240,70 200,120 140,100"
            fill="rgba(16,185,129,0.15)"
            stroke="rgba(16,185,129,0.4)"
            strokeWidth="1"
          />
          <polygon
            points="160,110 260,100 280,160 230,180 150,160"
            fill="rgba(245,158,11,0.15)"
            stroke="rgba(245,158,11,0.4)"
            strokeWidth="1"
          />
          {/* Driver markers */}
          {[
            { x: 60, y: 70 },
            { x: 170, y: 60 },
            { x: 210, y: 140 },
            { x: 90, y: 85 },
            { x: 250, y: 130 },
          ].map((pos, i) => (
            <g key={i}>
              <circle cx={pos.x} cy={pos.y} r="4" fill="#6366f1" />
              <circle cx={pos.x} cy={pos.y} r="7" fill="none" stroke="#6366f1" strokeWidth="1" opacity="0.4">
                <animate attributeName="r" values="7;12;7" dur="2s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
                <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
              </circle>
            </g>
          ))}
        </svg>
        {/* Legend */}
        <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm rounded p-2 space-y-1">
          {[
            { color: "bg-accent", label: "Zone A" },
            { color: "bg-emerald-500", label: "Zone B" },
            { color: "bg-amber-500", label: "Zone C" },
          ].map((z) => (
            <div key={z.label} className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-full ${z.color}`} />
              <span className="text-[8px] font-mono text-muted">{z.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectData }) {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div
        className={`border border-border rounded-xl overflow-hidden transition-all duration-500 ${
          expanded
            ? "bg-surface"
            : "bg-surface/30 hover:bg-surface/60 hover:border-border"
        }`}
      >
        {/* Card Header — always visible */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-6 sm:p-8"
        >
          <div className="flex items-start justify-between mb-4">
            <span className="text-xs font-mono text-accent">{project.number}</span>
            <motion.div
              animate={{ rotate: expanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 border border-border rounded-full flex items-center justify-center text-muted group-hover:border-accent/50 group-hover:text-accent transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="6" y1="1" x2="6" y2="11" />
                <line x1="1" y1="6" x2="11" y2="6" />
              </svg>
            </motion.div>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-muted mb-3">{project.subtitle}</p>
          <p className="text-sm text-muted/80 leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </button>

        {/* Expanded Content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 sm:px-8 pb-8 space-y-8">
                <div className="h-px bg-border" />

                {/* Problem */}
                <div>
                  <h4 className="text-xs font-mono text-accent mb-3 tracking-widest uppercase">
                    Problem
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Approaches */}
                <div>
                  <h4 className="text-xs font-mono text-accent mb-4 tracking-widest uppercase">
                    Options Considered
                  </h4>
                  <div className="space-y-2">
                    {project.approaches.map((approach, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTab(i)}
                        className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                          activeTab === i
                            ? approach.status === "chosen"
                              ? "border-emerald-500/50 bg-emerald-500/5"
                              : "border-red-500/30 bg-red-500/5"
                            : "border-border bg-surface/30 hover:bg-surface/60"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`text-xs font-mono ${
                              approach.status === "chosen"
                                ? "text-emerald-400"
                                : "text-red-400"
                            }`}
                          >
                            {approach.status === "chosen" ? "✓" : "✗"}
                          </span>
                          <span className="text-sm font-medium">
                            {approach.label}
                          </span>
                        </div>
                        <AnimatePresence>
                          {activeTab === i && (
                            <motion.p
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="text-xs text-muted mt-2 leading-relaxed pl-5"
                            >
                              {approach.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Decision */}
                <div className="p-4 rounded-lg border border-accent/20 bg-accent/5">
                  <h4 className="text-xs font-mono text-accent mb-2 tracking-widest uppercase">
                    Decision
                  </h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {project.decision}
                  </p>
                </div>

                {/* Architecture */}
                <div>
                  <h4 className="text-xs font-mono text-accent mb-4 tracking-widest uppercase">
                    Architecture
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.architecture.map((block, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="relative p-4 rounded-lg border border-border bg-background group/arch hover:border-accent/30 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-xs font-mono font-medium">
                            {block.label}
                          </span>
                        </div>
                        <p className="text-xs text-muted leading-relaxed pl-3.5">
                          {block.description}
                        </p>
                        {i < project.architecture.length - 1 && i % 2 === 0 && (
                          <div className="hidden sm:block absolute -right-3 top-1/2 w-3 h-px bg-border" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Interactive Visualization */}
                <div>
                  <h4 className="text-xs font-mono text-accent mb-4 tracking-widest uppercase">
                    Preview
                  </h4>
                  {project.visualization}
                </div>

                {/* Challenges & Impact side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-mono text-amber-400 mb-3 tracking-widest uppercase">
                      Challenges
                    </h4>
                    <ul className="space-y-2">
                      {project.challenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-amber-400/60 mt-0.5">▸</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-emerald-400 mb-3 tracking-widest uppercase">
                      Impact
                    </h4>
                    <ul className="space-y-2">
                      {project.impact.map((imp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-emerald-400/60 mt-0.5">▸</span>
                          {imp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          label="Selected Work"
          title="Projects"
          description="Not just what I built — but how I thought through the problem."
        />
        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
