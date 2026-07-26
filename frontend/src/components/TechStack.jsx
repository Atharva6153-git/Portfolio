import React, { useState } from "react";
import { motion } from "framer-motion";
import { techStack, techCategories } from "../mock/mock";

const TechIcon = ({ tech }) => {
  const [error, setError] = useState(false);

  if (!tech.icon || error) {
    return (
      <div
        className="tech-stack-fallback-icon"
        style={{ background: tech.bg, color: tech.text }}
      >
        {tech.short}
      </div>
    );
  }

  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}/${tech.icon}-original.svg`}
      alt={tech.name}
      className="tech-stack-icon"
      loading="lazy"
      onError={() => setError(true)}
    />
  );
};

const TechStack = () => {
  return (
    <section id="tech" className="relative py-24 md:py-32 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">/ tech stack</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Tools I use to<br />
            <span className="text-[hsl(var(--muted-foreground))]">ship products.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="tech-stack-grid mb-16"
        >
          {techStack.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
              className="tech-stack-card group"
            >
              <TechIcon tech={t} />
              <p className="tech-stack-label">{t.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="p-6 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--foreground))]/30 transition-colors"
            >
              <p className="text-xs uppercase tracking-widest text-[hsl(var(--muted-foreground))] mb-3">
                {cat.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]/90 border border-[hsl(var(--border))]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
