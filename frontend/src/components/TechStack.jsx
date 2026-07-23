import React from "react";
import { motion } from "framer-motion";
import { techStack, techCategories } from "../mock/mock";

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

        {/* Icon grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4 mb-16"
        >
          {techStack.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative aspect-square rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] flex flex-col items-center justify-center p-3 hover:border-[hsl(var(--foreground))]/40 transition-colors"
            >
              <div
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center font-bold text-sm md:text-base mb-2 shadow-sm"
                style={{ background: t.bg, color: t.text }}
              >
                {t.short}
              </div>
              <p className="text-[11px] md:text-xs font-medium text-center text-[hsl(var(--foreground))]/80 truncate w-full">
                {t.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Category breakdown */}
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
