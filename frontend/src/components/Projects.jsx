import React from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { projects } from "../mock/mock";

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">/ selected work</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Projects that pushed<br />
            <span className="text-[hsl(var(--muted-foreground))]">my thinking.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -6 }}
              className="group relative p-8 rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--foreground))]/40 transition-colors overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[hsl(var(--foreground))]/5 to-transparent rounded-full blur-3xl group-hover:from-[hsl(var(--foreground))]/10 transition-colors" />

              <div className="relative flex items-start justify-between mb-6">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))]">
                    {p.highlight}
                  </span>
                </div>
              </div>

              <h3 className="relative text-2xl md:text-3xl font-bold tracking-tight mb-3 flex items-center gap-2">
                {p.title}
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h3>
              <p className="relative text-sm md:text-base text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
                {p.description}
              </p>

              <div className="relative flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]/85 border border-[hsl(var(--border))]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Github className="w-5 h-5 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--foreground))] transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
