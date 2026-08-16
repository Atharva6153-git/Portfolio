import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, BookOpen, ChevronRight, ArrowDown, Info } from "lucide-react";
import { projects } from "../mock/mock";

// ─── Architecture Diagram ────────────────────────────────────────────────────

const NODE_COLORS = {
  client:   { bg: "rgba(59,130,246,0.1)",  border: "rgba(59,130,246,0.35)",  text: "#93c5fd", dot: "#3b82f6"  },
  api:      { bg: "rgba(139,92,246,0.1)",  border: "rgba(139,92,246,0.35)",  text: "#c4b5fd", dot: "#8b5cf6"  },
  database: { bg: "rgba(16,185,129,0.1)",  border: "rgba(16,185,129,0.35)",  text: "#6ee7b7", dot: "#10b981"  },
  external: { bg: "rgba(245,158,11,0.1)",  border: "rgba(245,158,11,0.35)",  text: "#fcd34d", dot: "#f59e0b"  },
};

const ArchNode = ({ node, layerId }) => {
  const [hovered, setHovered] = useState(false);
  const c = NODE_COLORS[layerId] ?? NODE_COLORS.client;

  return (
    <div className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <motion.div
        whileHover={{ scale: 1.04, y: -1 }}
        transition={{ duration: 0.15 }}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-default select-none"
        style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
      >
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c.dot }} />
        {node.name}
        <Info className="w-3 h-3 opacity-40 flex-shrink-0" />
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.12 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20 w-52 px-3 py-2 rounded-lg text-[11px] leading-relaxed pointer-events-none"
            style={{
              background: "hsl(var(--card))",
              border: `1px solid ${c.border}`,
              color: "hsl(var(--foreground) / 0.8)",
              boxShadow: `0 8px 24px rgba(0,0,0,0.3), 0 0 0 1px ${c.border}`
            }}
          >
            {node.desc}
            {/* Arrow */}
            <span
              className="absolute top-full left-1/2 -translate-x-1/2 block w-2 h-2 rotate-45 -mt-1"
              style={{ background: "hsl(var(--card))", borderRight: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}` }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FlowArrow = ({ flow, layers }) => {
  const fromLayer = layers.find(l => l.id === flow.from);
  const toLayer   = layers.find(l => l.id === flow.to);
  if (!fromLayer || !toLayer) return null;

  // For external flows that skip a layer (client → external), show dashed
  const fromIdx = layers.indexOf(fromLayer);
  const toIdx   = layers.indexOf(toLayer);
  const dashed  = Math.abs(toIdx - fromIdx) > 1;

  return (
    <div className="flex flex-col items-center gap-1 py-1">
      <div className="flex items-center gap-2">
        <div
          className="h-px flex-shrink-0"
          style={{
            width: 32,
            background: dashed
              ? "repeating-linear-gradient(90deg, hsl(var(--muted-foreground)/0.3) 0 4px, transparent 4px 8px)"
              : "hsl(var(--muted-foreground)/0.25)"
          }}
        />
        <span className="text-[9px] uppercase tracking-widest text-[hsl(var(--muted-foreground))] whitespace-nowrap opacity-70 font-medium">
          {flow.label}
        </span>
        <div
          className="h-px flex-shrink-0"
          style={{
            width: 32,
            background: dashed
              ? "repeating-linear-gradient(90deg, hsl(var(--muted-foreground)/0.3) 0 4px, transparent 4px 8px)"
              : "hsl(var(--muted-foreground)/0.25)"
          }}
        />
      </div>
      <ArrowDown className="w-3.5 h-3.5 text-[hsl(var(--muted-foreground))] opacity-40" />
    </div>
  );
};

const ArchitectureDiagram = ({ architecture }) => {
  const { layers, flows } = architecture;

  // Build a sorted flow list matching layer order top→bottom
  const orderedFlows = flows.slice().sort((a, b) => {
    const ai = layers.findIndex(l => l.id === a.from);
    const bi = layers.findIndex(l => l.id === b.from);
    return ai - bi;
  });

  return (
    <div className="rounded-xl border border-[hsl(var(--border))]/40 bg-[hsl(var(--background))]/60 p-5 overflow-x-auto">
      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-5 pb-4 border-b border-[hsl(var(--border))]/30">
        {layers.map(layer => {
          const c = NODE_COLORS[layer.id] ?? NODE_COLORS.client;
          return (
            <div key={layer.id} className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider" style={{ color: c.text }}>
              <span className="w-2 h-2 rounded-sm" style={{ background: c.dot, opacity: 0.8 }} />
              {layer.label}
            </div>
          );
        })}
        <div className="ml-auto text-[9px] text-[hsl(var(--muted-foreground))] opacity-50 italic self-center">hover nodes for details</div>
      </div>

      {/* Layer rows */}
      <div className="flex flex-col items-center gap-0 min-w-[300px]">
        {layers.map((layer, li) => {
          // Find if there's a flow FROM this layer to the next (for the arrow)
          const flowAfter = orderedFlows.find(f => f.from === layer.id);

          return (
            <React.Fragment key={layer.id}>
              {/* Layer row */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: li * 0.08, duration: 0.35 }}
                className="w-full rounded-xl p-4"
                style={{
                  background: NODE_COLORS[layer.id]?.bg ?? "rgba(255,255,255,0.04)",
                  border: `1px solid ${NODE_COLORS[layer.id]?.border ?? "rgba(255,255,255,0.1)"}`,
                }}
              >
                <p className="text-[9px] uppercase tracking-[0.15em] font-bold mb-3 opacity-60"
                   style={{ color: NODE_COLORS[layer.id]?.dot }}>
                  {layer.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {layer.nodes.map(node => (
                    <ArchNode key={node.id} node={node} layerId={layer.id} />
                  ))}
                </div>
              </motion.div>

              {/* Arrow between this layer and the next */}
              {li < layers.length - 1 && flowAfter && (
                <FlowArrow flow={flowAfter} layers={layers} />
              )}
              {li < layers.length - 1 && !flowAfter && (
                <div className="py-2">
                  <ArrowDown className="w-3.5 h-3.5 text-[hsl(var(--muted-foreground))] opacity-20" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

// ─── Project Card (grid — no "View Details", case study only) ────────────────

const ProjectCard = React.memo(({ project, index, onCaseStudy }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl overflow-hidden border border-[hsl(var(--border))] bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--background))] hover:border-[hsl(var(--foreground))]/20 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[hsl(var(--foreground))]/5 group-hover:to-[hsl(var(--foreground))]/10 transition-all pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[hsl(var(--foreground))]/8 to-transparent rounded-full blur-2xl group-hover:from-[hsl(var(--foreground))]/15 transition-all" />

      <div className="relative p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <span className="inline-block px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold border border-[hsl(var(--border))]/50 text-[hsl(var(--muted-foreground))] bg-[hsl(var(--muted))]/40">
            {project.highlight}
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-bold tracking-tight mb-2">{project.title}</h3>
        <p className="text-sm text-[hsl(var(--muted-foreground))] line-clamp-2 mb-4 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="px-2 py-0.5 rounded text-[10px] font-medium bg-[hsl(var(--muted))]/60 text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border))]/30">{t}</span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-0.5 rounded text-[10px] font-medium text-[hsl(var(--muted-foreground))]">+{project.tech.length - 3}</span>
          )}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-[hsl(var(--border))]/20">
          <span className="text-xs text-[hsl(var(--muted-foreground))]">{project.year}</span>
          {project.caseStudy && (
            <button
              onClick={() => onCaseStudy(project)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[hsl(var(--foreground))]/8 hover:bg-[hsl(var(--foreground))]/16 text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--foreground))] text-xs font-medium border border-[hsl(var(--border))]/40 transition-colors"
            >
              <BookOpen className="w-3 h-3" />
              Case Study
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ─── Featured Project Card ────────────────────────────────────────────────────

// Colour accent per project id — pure decoration, no invented info
const FEATURED_ACCENTS = {
  1: { from: "#6366f1", to: "#8b5cf6", dim: "rgba(99,102,241,0.08)" },   // ZenoGuard — indigo/violet
  3: { from: "#10b981", to: "#06b6d4", dim: "rgba(16,185,129,0.08)" },   // B-Bot — emerald/cyan
  4: { from: "#f59e0b", to: "#f97316", dim: "rgba(245,158,11,0.08)" },   // UNIFIND — amber/orange
};

const FeaturedProjectCard = React.memo(({ project, index, onCaseStudy }) => {
  const accent = FEATURED_ACCENTS[project.id] ?? FEATURED_ACCENTS[1];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group grid md:grid-cols-5 rounded-2xl overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--border))]/80 transition-all duration-300"
      style={{ background: `linear-gradient(135deg, ${accent.dim}, hsl(var(--card)))` }}
    >
      {/* Visual preview panel */}
      <div
        className={`md:col-span-2 relative min-h-[200px] md:min-h-0 flex flex-col items-center justify-center p-8 overflow-hidden ${isEven ? "md:order-first" : "md:order-last"}`}
        style={{ background: `linear-gradient(135deg, ${accent.from}18, ${accent.to}10)` }}
      >
        {/* Decorative glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: `radial-gradient(ellipse at center, ${accent.from}55 0%, transparent 70%)` }}
        />
        {/* Project index number — large typographic element */}
        <span
          className="absolute top-4 left-5 text-[80px] font-black leading-none select-none pointer-events-none"
          style={{ color: `${accent.from}20`, fontFamily: "var(--font-display)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        {/* Tech chips as visual decoration */}
        <div className="relative z-10 flex flex-wrap justify-center gap-2 max-w-[200px]">
          {project.tech.map((t, ti) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + ti * 0.05 + 0.2, duration: 0.3 }}
              className="px-2.5 py-1 rounded-md text-[11px] font-semibold"
              style={{
                background: `${accent.from}22`,
                border: `1px solid ${accent.from}40`,
                color: accent.from,
              }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Content panel */}
      <div className="md:col-span-3 p-7 md:p-8 flex flex-col justify-between">
        <div>
          {/* Badges row */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold border border-[hsl(var(--border))]/50 text-[hsl(var(--muted-foreground))] bg-[hsl(var(--muted))]/40">
              {project.highlight}
            </span>
            <span
              className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold"
              style={{ background: `${accent.from}18`, border: `1px solid ${accent.from}40`, color: accent.from }}
            >
              Featured
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">{project.title}</h3>

          {/* Description — full, not truncated */}
          <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-5 line-clamp-3">
            {project.caseStudy?.overview ?? project.description}
          </p>

          {/* Frontend / Backend split if available */}
          {project.featured && (
            <div className="flex flex-wrap gap-4 mb-5">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-bold text-[hsl(var(--muted-foreground))] mb-1.5">Frontend</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.featured.frontend.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest font-bold text-[hsl(var(--muted-foreground))] mb-1.5">Backend</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.featured.backend.slice(0, 4).map(t => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">{t}</span>
                  ))}
                  {project.featured.backend.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-[10px] text-[hsl(var(--muted-foreground))]">+{project.featured.backend.length - 4}</span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-5 border-t border-[hsl(var(--border))]/30">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] rounded-lg bg-[hsl(var(--foreground))]/8 hover:bg-[hsl(var(--foreground))]/16 text-[hsl(var(--foreground))] text-xs font-medium border border-[hsl(var(--border))]/50 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo`}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] rounded-lg text-xs font-medium transition-colors"
              style={{ background: `${accent.from}22`, border: `1px solid ${accent.from}45`, color: accent.from }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
          {project.caseStudy && (
            <button
              aria-label={`View ${project.title} case study`}
              onClick={() => onCaseStudy(project)}
              className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] rounded-lg bg-[hsl(var(--foreground))] hover:bg-[hsl(var(--foreground))]/90 text-[hsl(var(--background))] text-xs font-semibold transition-colors ml-auto"
            >
              <BookOpen className="w-3.5 h-3.5" />
              View Case Study
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};


// ─── Case Study Modal ─────────────────────────────────────────────────────────

const Section = ({ label, children }) => (
  <div className="mb-8">
    <h3 className="text-[10px] uppercase tracking-[0.15em] font-bold text-[hsl(var(--muted-foreground))] mb-3 flex items-center gap-2">
      <span className="inline-block w-4 h-px bg-[hsl(var(--muted-foreground))]/40" />
      {label}
    </h3>
    {children}
  </div>
);

const CaseStudyModal = ({ project, isOpen, onClose }) => {
  if (!project?.caseStudy) return null;
  const cs = project.caseStudy;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-2xl"
          >
            {/* Sticky header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-5 bg-[hsl(var(--card))]/95 backdrop-blur border-b border-[hsl(var(--border))]/50">
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
                <span className="text-xs uppercase tracking-widest font-bold text-[hsl(var(--muted-foreground))]">Case Study</span>
                <ChevronRight className="w-3.5 h-3.5 text-[hsl(var(--muted-foreground))]/40" />
                <span className="text-sm font-semibold">{project.title}</span>
              </div>
              <button onClick={onClose} aria-label="Close case study modal" className="p-2 min-h-[44px] min-w-[44px] rounded-lg hover:bg-[hsl(var(--muted))] transition-colors flex items-center justify-center">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-8 py-8">
              {/* Title */}
              <div className="mb-10">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] bg-[hsl(var(--muted))]/40 mb-4">
                  {project.highlight}
                </span>
                <h2 id="case-study-title" className="text-3xl md:text-4xl font-bold tracking-tight mb-1">{project.title}</h2>
                <p className="text-[hsl(var(--muted-foreground))] text-sm">{project.year}</p>
              </div>

              <Section label="Overview">
                <p className="text-[hsl(var(--foreground))]/85 leading-relaxed">{cs.overview}</p>
              </Section>

              <Section label="Problem Statement">
                <div className="pl-4 border-l-2 border-red-500/40">
                  <p className="text-[hsl(var(--foreground))]/85 leading-relaxed">{cs.problem}</p>
                </div>
              </Section>

              <Section label="Solution">
                <div className="pl-4 border-l-2 border-green-500/40">
                  <p className="text-[hsl(var(--foreground))]/85 leading-relaxed">{cs.solution}</p>
                </div>
              </Section>

              <Section label="My Contribution">
                <div className="rounded-xl bg-[hsl(var(--muted))]/30 border border-[hsl(var(--border))]/40 p-5">
                  <p className="text-[hsl(var(--foreground))]/85 leading-relaxed">{cs.contribution}</p>
                </div>
              </Section>

              {/* Architecture Diagram — shown only if data present */}
              {project.architecture && (
                <Section label="Architecture">
                  <ArchitectureDiagram architecture={project.architecture} />
                </Section>
              )}

              <Section label="Key Features">
                <ul className="grid sm:grid-cols-2 gap-2">
                  {cs.keyFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[hsl(var(--foreground))]/80">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[hsl(var(--foreground))]/40 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section label="Tech Stack">
                {project.featured ? (
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-blue-400/80 mb-2">Frontend</p>
                      <div className="flex flex-wrap gap-2">
                        {project.featured.frontend.map((t) => (
                          <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/25">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-purple-400/80 mb-2">Backend</p>
                      <div className="flex flex-wrap gap-2">
                        {project.featured.backend.map((t) => (
                          <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/25">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[hsl(var(--muted))]/60 text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border))]/30">{t}</span>
                    ))}
                  </div>
                )}
              </Section>

              <Section label="Challenges & Solutions">
                <div className="flex flex-col gap-4">
                  {cs.challenges.map((item, i) => (
                    <div key={i} className="rounded-xl border border-[hsl(var(--border))]/40 overflow-hidden">
                      <div className="px-5 py-3 bg-red-500/5 border-b border-[hsl(var(--border))]/30">
                        <p className="text-xs font-semibold text-red-400/80 uppercase tracking-wider mb-1">Challenge</p>
                        <p className="text-sm text-[hsl(var(--foreground))]/85">{item.challenge}</p>
                      </div>
                      <div className="px-5 py-3 bg-green-500/5">
                        <p className="text-xs font-semibold text-green-400/80 uppercase tracking-wider mb-1">Solution</p>
                        <p className="text-sm text-[hsl(var(--foreground))]/85">{item.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section label="Outcome">
                <div className="rounded-xl bg-[hsl(var(--foreground))]/4 border border-[hsl(var(--border))]/40 p-5">
                  <p className="text-[hsl(var(--foreground))]/85 leading-relaxed">{cs.outcome}</p>
                </div>
              </Section>

              <div className="flex gap-3 pt-6 border-t border-[hsl(var(--border))]">
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] rounded-lg bg-[hsl(var(--foreground))]/10 hover:bg-[hsl(var(--foreground))]/20 text-[hsl(var(--foreground))] font-medium transition-colors">
                  <Github className="w-4 h-4" />GitHub
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} live demo`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] rounded-lg bg-[hsl(var(--foreground))] hover:bg-[hsl(var(--foreground))]/90 text-[hsl(var(--background))] font-medium transition-colors">
                    <ExternalLink className="w-4 h-4" />Visit Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─── Projects Section ─────────────────────────────────────────────────────────

const Projects = () => {
  const [caseStudyProject, setCaseStudyProject] = useState(null);

  const featuredProjects = projects
    .filter(p => p.isFeatured)
    .sort((a, b) => a.featuredOrder - b.featuredOrder);

  const allProjects = projects;

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">/ selected work</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Projects that pushed<br />
            <span className="text-[hsl(var(--muted-foreground))]">my thinking.</span>
          </h2>
        </motion.div>

        {/* ── Featured Projects ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-xs uppercase tracking-[0.18em] font-bold text-[hsl(var(--muted-foreground))]">Featured</span>
          <span className="flex-1 h-px bg-[hsl(var(--border))]/50" />
        </motion.div>

        <div className="flex flex-col gap-5 mb-20">
          {featuredProjects.map((project, i) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={i}
              onCaseStudy={setCaseStudyProject}
            />
          ))}
        </div>

        {/* ── All Projects grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-xs uppercase tracking-[0.18em] font-bold text-[hsl(var(--muted-foreground))]">All Projects</span>
          <span className="flex-1 h-px bg-[hsl(var(--border))]/50" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {allProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onCaseStudy={setCaseStudyProject}
            />
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={caseStudyProject}
        isOpen={!!caseStudyProject}
        onClose={() => setCaseStudyProject(null)}
      />
    </section>
  );
};

export default Projects;
