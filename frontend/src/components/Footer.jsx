import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../mock/mock";

const Footer = () => {
  return (
    <footer className="relative border-t border-[hsl(var(--border))] py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          © {new Date().getFullYear()} Built by Atharva Jadhav.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="w-9 h-9 rounded-full border border-[hsl(var(--border))] flex items-center justify-center hover:border-[hsl(var(--foreground))]/40 hover:bg-[hsl(var(--muted))] transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-full border border-[hsl(var(--border))] flex items-center justify-center hover:border-[hsl(var(--foreground))]/40 hover:bg-[hsl(var(--muted))] transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full border border-[hsl(var(--border))] flex items-center justify-center hover:border-[hsl(var(--foreground))]/40 hover:bg-[hsl(var(--muted))] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
