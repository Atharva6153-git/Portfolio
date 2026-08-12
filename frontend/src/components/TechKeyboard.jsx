import React, { Suspense, useEffect, useRef, useState } from "react";
import { Application } from "@splinetool/runtime";
import { motion, AnimatePresence } from "framer-motion";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

/**
 * Maps your techStack names to the keycap object names baked into the
 * skills-keyboard.spline scene (Naresh Khatri's open-source MIT scene).
 * Keys that don't have a matching keycap in the scene are unmapped but still
 * show up in the hover tooltip via the mouseHover event name fallback.
 */
const SKILL_MAP = {
  // object name in Spline scene → display info
  js:         { label: "JavaScript",    color: "#F7DF1E", desc: "Dynamic scripting language powering the web." },
  python:     { label: "Python",        color: "#3776AB", desc: "Versatile language for backend, AI & scripting." },
  java:       { label: "Java",          color: "#EA2D2E", desc: "Strongly typed OOP language for enterprise apps." },
  react:      { label: "React",         color: "#61DAFB", desc: "Component-driven UI library for modern web apps." },
  tailwind:   { label: "Tailwind CSS",  color: "#06B6D4", desc: "Utility-first CSS for rapid, consistent styling." },
  bootstrap:  { label: "Bootstrap",     color: "#7952B3", desc: "Classic CSS framework for responsive layouts." },
  nodejs:     { label: "Node.js",       color: "#339933", desc: "JavaScript runtime for scalable server-side apps." },
  express:    { label: "Express",       color: "#ffffff", desc: "Minimalist Node.js web framework for REST APIs." },
  mongodb:    { label: "MongoDB",       color: "#47A248", desc: "Flexible NoSQL document database." },
  postgres:   { label: "PostgreSQL",    color: "#336791", desc: "Powerful open-source relational database." },
  firebase:   { label: "Firebase",      color: "#FFCA28", desc: "Google's BaaS — auth, DB, and hosting in one." },
  docker:     { label: "Docker",        color: "#2496ED", desc: "Container platform for consistent deployments." },
  git:        { label: "Git",           color: "#F05032", desc: "Version control system for tracking code changes." },
  github:     { label: "GitHub",        color: "#ffffff", desc: "Remote hosting and collaboration for Git repos." },
  linux:      { label: "Linux",         color: "#FCC624", desc: "Open-source OS powering most production servers." },
  aws:        { label: "AWS",           color: "#FF9900", desc: "Amazon's cloud platform for scalable infrastructure." },
};

const SkillTooltip = ({ skill }) => (
  <AnimatePresence>
    {skill && (
      <motion.div
        key={skill.label}
        initial={{ opacity: 0, y: 12, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: "0%",
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
          zIndex: 20,
          minWidth: 200,
          maxWidth: 260,
        }}
      >
        <div
          style={{
            background: "rgba(10, 10, 14, 0.92)",
            backdropFilter: "blur(12px)",
            border: `1px solid ${skill.color}55`,
            borderRadius: 14,
            padding: "12px 16px",
            boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px ${skill.color}22`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: skill.color,
                flexShrink: 0,
                boxShadow: `0 0 8px ${skill.color}`,
              }}
            />
            <span style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              fontFamily: "Space Grotesk, Inter, sans-serif",
              letterSpacing: "-0.01em",
            }}>
              {skill.label}
            </span>
          </div>
          <p style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: 12,
            lineHeight: 1.5,
            margin: 0,
            fontFamily: "Inter, sans-serif",
          }}>
            {skill.desc}
          </p>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const TechKeyboard = () => {
  const splineRef = useRef(null);
  const [splineApp, setSplineApp] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const onLoad = (app) => {
    setSplineApp(app);
    setLoaded(true);

    // Hover: show tooltip
    app.addEventListener("mouseHover", (e) => {
      const name = e?.target?.name;
      const skill = SKILL_MAP[name];
      setHoveredSkill(skill ?? null);
    });

    // Key press: also show tooltip (physical keyboard press)
    app.addEventListener("keyDown", (e) => {
      const name = e?.target?.name;
      const skill = SKILL_MAP[name];
      if (skill) setHoveredSkill(skill);
    });

    app.addEventListener("keyUp", () => {
      setHoveredSkill(null);
    });
  };

  // Don't render Spline at all on mobile — use simple grid fallback
  if (isMobile) {
    return (
      <div className="tech-keyboard-scene" style={{ aspectRatio: "unset", maxWidth: "100%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 8,
          padding: 16,
          borderRadius: 16,
          background: "hsl(var(--card))",
          border: "1px solid hsl(var(--border)/0.4)",
        }}>
          {Object.entries(SKILL_MAP).map(([key, skill]) => (
            <div key={key} style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              padding: "8px 4px",
              borderRadius: 10,
              background: `${skill.color}18`,
              border: `1px solid ${skill.color}33`,
            }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: skill.color, textAlign: "center", lineHeight: 1.2 }}>
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="tech-keyboard-scene"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 600,
        aspectRatio: "1 / 1",
        borderRadius: 20,
        overflow: "visible",
      }}
    >
      {/* Loading skeleton */}
      {!loaded && (
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          background: "hsl(var(--card))",
          border: "1px solid hsl(var(--border)/0.3)",
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            color: "hsl(var(--muted-foreground))",
          }}>
            <div style={{
              width: 32,
              height: 32,
              border: "2px solid hsl(var(--border))",
              borderTopColor: "hsl(var(--foreground))",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
            }} />
            <span style={{ fontSize: 13 }}>Loading keyboard…</span>
          </div>
        </div>
      )}

      {/* Spline 3D Scene */}
      <Suspense fallback={null}>
        <Spline
          ref={splineRef}
          scene="/skills-keyboard.spline"
          onLoad={onLoad}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20,
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />
      </Suspense>

      {/* Skill Tooltip overlay */}
      <SkillTooltip skill={hoveredSkill} />

      {/* Hint text */}
      {loaded && !hoveredSkill && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: "absolute",
            bottom: -28,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 12,
            color: "hsl(var(--muted-foreground))",
            whiteSpace: "nowrap",
            fontFamily: "Inter, sans-serif",
            pointerEvents: "none",
          }}
        >
          hover or press a key ↑
        </motion.p>
      )}

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default TechKeyboard;
