import React from "react";
import { motion } from "framer-motion";
import { Layers, Sparkles, Server } from "lucide-react";
import { stackNarratives } from "../mock/mock";

const narrativeIcons = {
  layers: Layers,
  sparkles: Sparkles,
  server: Server,
};

const StackNarrativeCard = ({ item, index }) => {
  const Icon = narrativeIcons[item.icon] ?? Layers;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="narrative-card group"
      style={{ "--narrative-color": item.color }}
    >
      <div className="narrative-card-icon-wrap">
        <Icon className="narrative-card-icon" aria-hidden="true" />
      </div>
      <h3 className="narrative-card-title">{item.title}</h3>
      <p className="narrative-card-desc">{item.description}</p>
      <div className="narrative-card-tags">
        {item.stack.map((s) => (
          <span key={s} className="narrative-tag">{s}</span>
        ))}
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-24 md:py-32 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">/ how I build</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Stack that ships,<br />
            <span className="text-[hsl(var(--muted-foreground))]">proof that wins.</span>
          </h2>
        </motion.div>

        <div className="narrative-grid">
          {stackNarratives.map((item, i) => (
            <StackNarrativeCard key={item.title} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
