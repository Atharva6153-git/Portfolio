import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";
import { personalInfo } from "../mock/mock";
import TechKeyboard from "./TechKeyboard";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      {/* Starfield - hidden on very small screens to save GPU */}
      <div className="absolute inset-0 pointer-events-none starfield hidden sm:block" />

      {/* Subtle radial glow - only on md+ */}
      <div className="absolute inset-0 pointer-events-none bg-radial-hero hidden md:block" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-28 md:pt-32 pb-20 md:pb-24 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-base text-[hsl(var(--muted-foreground))] mb-3 md:mb-4"
          >
            {personalInfo.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-[hsl(var(--foreground))] break-words"
          >
            Atharva
            <br />
            Jadhav
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 md:mt-6 text-base md:text-xl font-semibold text-[hsl(var(--muted-foreground))]"
          >
            {personalInfo.role}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 md:mt-10 flex flex-wrap gap-3"
          >
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[hsl(var(--foreground))] text-[hsl(var(--background))] font-medium hover:opacity-90 transition-opacity"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[hsl(var(--border))] hover:border-[hsl(var(--foreground))]/40 hover:bg-[hsl(var(--muted))] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[hsl(var(--border))] hover:border-[hsl(var(--foreground))]/40 hover:bg-[hsl(var(--muted))] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right: 3D tech keyboard */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <TechKeyboard />
        </div>
      </div>

      {/* Bottom indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="px-4 py-1.5 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--background))]/50 backdrop-blur-md text-xs text-[hsl(var(--muted-foreground))]">
          1 / 5 — scroll
        </div>
      </div>
    </section>
  );
};

export default Hero;
