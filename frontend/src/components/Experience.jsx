import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Medal, Star, Github, ExternalLink, ChevronDown, ChevronUp, Zap } from "lucide-react";
import { timelineEvents } from "../mock/mock";

// ─── Tier config ─────────────────────────────────────────────────────────────

const TIER = {
  gold: {
    label: "Winner",
    Icon: Trophy,
    dot: "#eab308",
    dotBg: "rgba(234,179,8,0.15)",
    dotBorder: "rgba(234,179,8,0.4)",
    badge: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",
    line: "#eab30840",
  },
  silver: {
    label: "Finalist",
    Icon: Medal,
    dot: "#94a3b8",
    dotBg: "rgba(148,163,184,0.12)",
    dotBorder: "rgba(148,163,184,0.35)",
    badge: "bg-slate-500/15 text-slate-300 border border-slate-500/25",
    line: "#94a3b830",
  },
  neutral: {
    label: "Participated",
    Icon: Star,
    dot: "hsl(var(--muted-foreground))",
    dotBg: "hsl(var(--muted)/0.5)",
    dotBorder: "hsl(var(--border))",
    badge: "bg-[hsl(var(--muted))]/60 text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border))]/40",
    line: "hsl(var(--border))",
  },
};

// ─── Single timeline entry ────────────────────────────────────────────────────

const TimelineEntry = ({ event, index, isLast }) => {
  const [expanded, setExpanded] = useState(false);
  const t = TIER[event.tier] ?? TIER.neutral;
  const { Icon } = t;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-5 md:gap-7"
    >
      {/* ── Spine ── */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Dot */}
        <div
          className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
          style={{ background: t.dotBg, border: `2px solid ${t.dotBorder}` }}
        >
          <Icon className="w-4 h-4" style={{ color: t.dot }} />
        </div>
        {/* Vertical line to next */}
        {!isLast && (
          <div
            className="w-px flex-1 mt-2 mb-0 min-h-[24px]"
            style={{ background: `linear-gradient(to bottom, ${t.dotBorder}, hsl(var(--border)/0.3))` }}
          />
        )}
      </div>

      {/* ── Card ── */}
      <div className="flex-1 pb-10 md:pb-12">
        <div
          className="rounded-2xl border border-[hsl(var(--border))]/50 bg-[hsl(var(--card))] overflow-hidden transition-all duration-200 hover:border-[hsl(var(--border))]"
        >
          {/* Card header — always visible */}
          <div className="p-5 md:p-6">
            {/* Top row: badges + year */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${t.badge}`}>
                <Icon className="w-3 h-3" />
                {event.result}
              </span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-[hsl(var(--muted))]/50 text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border))]/30">
                {event.type === "hackathon" ? "Hackathon" : "Project"}
              </span>
              <span className="ml-auto text-xs font-mono text-[hsl(var(--muted-foreground))]">{event.year}</span>
            </div>

            {/* Event name + org */}
            <h3 className="text-base md:text-lg font-bold tracking-tight mb-0.5">{event.event}</h3>
            <p className="text-xs text-[hsl(var(--muted-foreground))] mb-3">{event.org}</p>

            {/* Role + project */}
            <div className="flex flex-wrap gap-3 text-xs mb-4">
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] uppercase tracking-widest font-bold text-[hsl(var(--muted-foreground))]">Role</span>
                <span className="px-2 py-0.5 rounded bg-[hsl(var(--muted))]/60 text-[hsl(var(--foreground))]/80 border border-[hsl(var(--border))]/30 font-medium">
                  {event.role}
                </span>
              </div>
              {event.project && (
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-[hsl(var(--muted-foreground))]">Project</span>
                  <span
                    className="px-2 py-0.5 rounded font-semibold"
                    style={{ background: t.dotBg, border: `1px solid ${t.dotBorder}`, color: t.dot }}
                  >
                    {event.project}
                  </span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-[hsl(var(--foreground))]/75 leading-relaxed">{event.description}</p>

            {/* Expand toggle — only if there's extra content */}
            {(event.tech.length > 0 || event.links.length > 0) && (
              <button
                onClick={() => setExpanded(v => !v)}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
              >
                {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                {expanded ? "Show less" : "Tech & links"}
              </button>
            )}
          </div>

          {/* Expandable section */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 border-t border-[hsl(var(--border))]/30">
                  <div className="pt-4 flex flex-col gap-4">
                    {/* Tech */}
                    {event.tech.length > 0 && (
                      <div>
                        <p className="text-[9px] uppercase tracking-widest font-bold text-[hsl(var(--muted-foreground))] mb-2 flex items-center gap-1.5">
                          <Zap className="w-3 h-3" />
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {event.tech.map(t => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[hsl(var(--muted))]/60 text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border))]/40"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Links */}
                    {event.links.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {event.links.map(link => {
                          const isGithub = link.label.toLowerCase().includes("github");
                          return (
                            <a
                              key={link.label}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                                isGithub
                                  ? "bg-[hsl(var(--foreground))]/8 hover:bg-[hsl(var(--foreground))]/16 text-[hsl(var(--foreground))] border border-[hsl(var(--border))]/50"
                                  : "bg-[hsl(var(--foreground))] hover:bg-[hsl(var(--foreground))]/90 text-[hsl(var(--background))]"
                              }`}
                            >
                              {isGithub ? <Github className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                              {link.label}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-[hsl(var(--background))]">
      <div className="max-w-3xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">/ hackathons & experience</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Built under<br />
            <span className="text-[hsl(var(--muted-foreground))]">pressure.</span>
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-3 gap-3 mb-14"
        >
          {[
            { value: "1", label: "Hackathon Won" },
            { value: "1", label: "Finalist" },
            { value: `${timelineEvents.length}`, label: "Events Total" },
          ].map(stat => (
            <div
              key={stat.label}
              className="rounded-xl border border-[hsl(var(--border))]/40 bg-[hsl(var(--card))] p-4 text-center"
            >
              <p className="text-2xl md:text-3xl font-bold tracking-tight mb-0.5">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-wider text-[hsl(var(--muted-foreground))] font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div>
          {timelineEvents.map((event, i) => (
            <TimelineEntry
              key={event.id}
              event={event}
              index={i}
              isLast={i === timelineEvents.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
