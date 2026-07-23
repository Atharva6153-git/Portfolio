import React from "react";
import { motion } from "framer-motion";
import { Code2, Sparkles, Rocket } from "lucide-react";
import { personalInfo } from "../mock/mock";

const stats = [
  { icon: Code2, label: "Full Stack", value: "End-to-end apps" },
  { icon: Sparkles, label: "AI Integrated", value: "Groq & Gemini" },
  { icon: Rocket, label: "Cloud Ready", value: "Docker & Kafka" },
];

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
            <div className="relative aspect-square max-w-[380px] rounded-3xl border border-[hsl(var(--border))] overflow-hidden bg-gradient-to-br from-[hsl(var(--muted))] to-[hsl(var(--background))]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[10rem] font-black tracking-tighter text-[hsl(var(--foreground))]/8 select-none">
                  AJ
                </div>
              </div>
              <div className="absolute inset-0 grid-pattern opacity-40" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-[hsl(var(--muted-foreground))]">Based in</p>
                  <p className="text-sm font-medium">{personalInfo.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-[hsl(var(--muted-foreground))]">Available</span>
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
      </div>
    </section>
  );
};

export default About;
