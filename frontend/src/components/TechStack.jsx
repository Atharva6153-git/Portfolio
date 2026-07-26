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
      style={tech.invertIcon ? { filter: "invert(1) brightness(2)" } : undefined}
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
              style={{ "--tech-color": t.color }}
            >
              <TechIcon tech={t} />
              <p className="tech-stack-label">{t.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
