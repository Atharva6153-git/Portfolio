import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../mock/mock";

const Footer = () => {
  return (
    <footer className="relative border-t border-[hsl(var(--border))] py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold">Atharva Jadhav</p>
          <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
            Built by Atharva Jadhav
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="w-9 h-9 rounded-full border border-[hsl(var(--border))] flex items-center justify-center hover:border-[hsl(var(--foreground))]/40 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-full border border-[hsl(var(--border))] flex items-center justify-center hover:border-[hsl(var(--foreground))]/40 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full border border-[hsl(var(--border))] flex items-center justify-center hover:border-[hsl(var(--foreground))]/40 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
