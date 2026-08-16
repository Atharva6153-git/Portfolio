import React from "react";
import { motion } from "framer-motion";
import { Code2, Sparkles, Rocket, BookOpen, TrendingUp, Crosshair } from "lucide-react";
import { personalInfo, currentlyLearning } from "../mock/mock";

const stats = [
  { icon: Code2,     label: "Full Stack",   value: "End-to-end apps" },
  { icon: Sparkles,  label: "AI Integrated", value: "Groq & Gemini" },
  { icon: Rocket,    label: "Cloud Ready",  value: "Docker & Kafka" },
];

const TRACK_CONFIG = [
  {
    key: "learning",
    label: "Currently Learning",
    Icon: BookOpen,
    accent: "#6366f1",
    dotBg: "rgba(99,102,241,0.12)",
    dotBorder: "rgba(99,102,241,0.35)",
    chipBg: "rgba(99,102,241,0.1)",
    chipBorder: "rgba(99,102,241,0.3)",
    chipText: "#a5b4fc",
  },
  {
    key: "improving",
    label: "Improving",
    Icon: TrendingUp,
    accent: "#10b981",
    dotBg: "rgba(16,185,129,0.12)",
    dotBorder: "rgba(16,185,129,0.35)",
    chipBg: "rgba(16,185,129,0.1)",
    chipBorder: "rgba(16,185,129,0.3)",
    chipText: "#6ee7b7",
  },
  {
    key: "next",
    label: "Next Goal",
    Icon: Crosshair,
    accent: "#f59e0b",
    dotBg: "rgba(245,158,11,0.12)",
    dotBorder: "rgba(245,158,11,0.35)",
    chipBg: "rgba(245,158,11,0.1)",
    chipBorder: "rgba(245,158,11,0.3)",
    chipText: "#fcd34d",
  },
];

const LearningTrack = ({ config, items, index }) => {
  const { label, Icon, accent, dotBg, dotBorder, chipBg, chipBorder, chipText } = config;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.45 }}
      className="rounded-2xl border border-[hsl(var(--border))]/50 bg-[hsl(var(--card))] p-5"
    >
      {/* Track header */}
      <div className="flex items-center gap-2.5 mb-4">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: dotBg, border: `1px solid ${dotBorder}` }}
        >
          <Icon className="w-3.5 h-3.5" style={{ color: accent }} />
        </div>
        <span
          className="text-xs font-bold uppercase tracking-[0.12em]"
          style={{ color: accent }}
        >
          {label}
        </span>
      </div>

      {/* Items */}
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.name} className="group">
            <div className="flex items-center gap-2 mb-0.5">
              <span
                className="px-2.5 py-1 rounded-lg text-[11px] font-semibold"
                style={{ background: chipBg, border: `1px solid ${chipBorder}`, color: chipText }}
              >
                {item.name}
              </span>
            </div>
            <p className="text-[11px] text-[hsl(var(--muted-foreground))] leading-relaxed pl-0.5">
              {item.note}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-end justify-between flex-wrap gap-4"
        >
          <div>
            <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">/ about</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Crafting ideas into<br />
              <span className="text-[hsl(var(--muted-foreground))]">production apps.</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Avatar placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative aspect-square max-w-[380px] rounded-3xl border border-[hsl(var(--border))] overflow-hidden bg-gradient-to-br from-[hsl(var(--muted))] to-[hsl(var(--background))] group">
              <img
                src={personalInfo.profileImage}
                alt="Atharva Jadhav"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                <div>
                  <p className="text-xs text-white/70">Based in</p>
                  <p className="text-sm font-medium">{personalInfo.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-white/80">Available</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 space-y-8"
          >
            <p className="text-lg md:text-2xl leading-relaxed text-[hsl(var(--foreground))]/85">
              {personalInfo.about}
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-5 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--foreground))]/30 transition-colors"
                >
                  <s.icon className="w-5 h-5 mb-3 text-[hsl(var(--foreground))]/80" />
                  <p className="text-sm font-semibold">{s.label}</p>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">{s.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16"
        >
          {/* Sub-header */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs uppercase tracking-[0.18em] font-bold text-[hsl(var(--muted-foreground))]">
              Currently Learning
            </span>
            <span className="flex-1 h-px bg-[hsl(var(--border))]/50" />
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {TRACK_CONFIG.map((config, i) => (
              <LearningTrack
                key={config.key}
                config={config}
                items={currentlyLearning[config.key]}
                index={i}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
