import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import { projects } from "../mock/mock";

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -8 }}
      onClick={() => onClick(project)}
      className="group relative cursor-pointer rounded-2xl overflow-hidden border border-[hsl(var(--border))] bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--background))] hover:border-[hsl(var(--foreground))]/20 transition-all duration-300"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[hsl(var(--foreground))]/5 group-hover:to-[hsl(var(--foreground))]/10 transition-all pointer-events-none" />
      
      {/* Accent glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[hsl(var(--foreground))]/8 to-transparent rounded-full blur-2xl group-hover:from-[hsl(var(--foreground))]/15 transition-all" />

      <div className="relative p-6 md:p-8 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="inline-block px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold border border-[hsl(var(--border))]/50 text-[hsl(var(--muted-foreground))] bg-[hsl(var(--muted))]/40">
              {project.highlight}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2 group-hover:text-[hsl(var(--foreground))] transition-colors">
          {project.title}
        </h3>

        {/* Description - truncated */}
        <p className="text-sm text-[hsl(var(--muted-foreground))] line-clamp-2 mb-4 flex-grow">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-[10px] font-medium bg-[hsl(var(--muted))]/60 text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border))]/30"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-0.5 rounded text-[10px] font-medium text-[hsl(var(--muted-foreground))]">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Footer - View button */}
        <div className="flex items-center justify-between pt-4 border-t border-[hsl(var(--border))]/20">
          <span className="text-xs text-[hsl(var(--muted-foreground))]">{project.year}</span>
          <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[hsl(var(--foreground))]/10 hover:bg-[hsl(var(--foreground))]/20 text-[hsl(var(--foreground))] text-xs font-medium transition-colors">
            View Details
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-8"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[hsl(var(--muted))] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs uppercase tracking-wider font-bold border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] bg-[hsl(var(--muted))]/40">
                  {project.highlight}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                {project.title}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))]">{project.year}</p>
            </div>

            {/* Main description */}
            <p className="text-base leading-relaxed text-[hsl(var(--foreground))]/90 mb-8">
              {project.description}
            </p>

            {/* Tech Stack - Two columns */}
            {project.featured && (
              <div className="mb-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--muted-foreground))] mb-3">
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.featured.frontend.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-br from-blue-500/20 to-blue-600/10 text-blue-300 border border-blue-500/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--muted-foreground))] mb-3">
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.featured.backend.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-br from-purple-500/20 to-purple-600/10 text-purple-300 border border-purple-500/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* All tech stack */}
            {!project.featured && (
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--muted-foreground))] mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[hsl(var(--muted))]/60 text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border))]/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex gap-3 pt-6 border-t border-[hsl(var(--border))]">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[hsl(var(--foreground))]/10 hover:bg-[hsl(var(--foreground))]/20 text-[hsl(var(--foreground))] font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[hsl(var(--foreground))] hover:bg-[hsl(var(--foreground))]/90 text-[hsl(var(--background))] font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Live
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
