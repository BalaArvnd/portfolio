"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Thinking from "@/components/Thinking";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Thinking />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-border py-8">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <span className="text-xs text-muted font-mono">
            BalaAravind CS © {new Date().getFullYear()}
          </span>
          <span className="text-xs text-muted/50 font-mono">
            Built with Next.js
          </span>
        </div>
      </footer>
    </>
  );
}
