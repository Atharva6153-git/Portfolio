import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { techStack } from "../mock/mock";

const COLS = 6;
const ROWS = 4;
const TOTAL = COLS * ROWS;

const TechKeyIcon = ({ item }) => {
  const [error, setError] = useState(false);

  if (!item?.icon || error) {
    return <span className="tech-key-label" style={{ color: item?.text ?? "#fff" }}>{item?.short ?? ""}</span>;
  }

  const src = item.icon?.startsWith("http")
    ? item.icon
    : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.icon}/${item.icon}-original.svg`;

  return (
    <img
      src={src}
      alt=""
      className={`tech-key-icon${item.text === "#000" ? " tech-key-icon--dark-bg" : ""}`}
      style={item.invertIcon ? { filter: "invert(1) brightness(2)" } : undefined}
      loading="lazy"
      draggable={false}
      onError={() => setError(true)}
    />
  );
};

const TechKey = ({ item, index, isMobile, onClick }) => {
  const isEmpty = !item;
  const style = isEmpty
    ? { "--key-bg": "#1a1a1e", "--key-glow": "rgba(255,255,255,0.08)" }
    : {
        "--key-bg": item.bg,
        "--key-glow": item.color ? `${item.color}55` : "rgba(255,255,255,0.2)",
      };

  const keyClass = `tech-key${isEmpty ? " tech-key--empty" : ""}`;

  if (isMobile) {
    return (
      <div
        className={keyClass}
        style={style}
        onClick={() => !isEmpty && onClick?.(item)}
        onKeyDown={(e) => {
          if (!isEmpty && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            onClick?.(item);
          }
        }}
        role={isEmpty ? "presentation" : "button"}
        tabIndex={isEmpty ? -1 : 0}
        aria-label={isEmpty ? undefined : item.name}
      >
        {!isEmpty && <TechKeyIcon item={item} />}
      </div>
    );
  }

  // To create true 3D thickness that doesn't clip, we use stacked voxel layers
  const depth = 16;
  const layers = Array.from({ length: depth });

  return (
    <motion.div
      className={keyClass}
      style={{ ...style, transformStyle: "preserve-3d", position: "relative", cursor: isEmpty ? "default" : "pointer" }}
      title={item?.name}
      whileHover={!isMobile && !isEmpty ? "hover" : undefined}
      onClick={() => !isEmpty && onClick?.(item)}
      onKeyDown={(e) => {
        if (!isEmpty && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick?.(item);
        }
      }}
      role={isEmpty ? "presentation" : "button"}
      tabIndex={isEmpty ? -1 : 0}
      aria-label={isEmpty ? undefined : item.name}
    >
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        variants={{ hover: { z: -6, scale: 0.96 } }}
        transition={{ delay: 0.4 + index * 0.03, duration: 0.5, ease: "easeOut" }}
        style={{ width: "100%", height: "100%", transformStyle: "preserve-3d", pointerEvents: "none" }}
      >
        {layers.map((_, d) => (
          <div
            key={d}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              background: d === depth - 1 
                ? "var(--key-bg)" 
                : "color-mix(in srgb, var(--key-bg) 40%, black)",
              transform: `translateZ(${d}px)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: d === 0 ? "0 4px 10px rgba(0,0,0,0.6)" : (d === depth - 1 ? "inset 0 2px 2px rgba(255, 255, 255, 0.2)" : "none"),
            }}
          >
            {d === depth - 1 && !isEmpty && <TechKeyIcon item={item} />}
          </div>
        ))}
      </motion.div>
      {/* Invisible static hit area for stable hover and 3D depth sorting */}
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          transform: `translateZ(${depth}px)`, 
          cursor: isEmpty ? 'default' : 'pointer',
          background: 'rgba(255, 255, 255, 0.01)'
        }} 
      />
    </motion.div>
  );
};

// 3D isometric keyboard with brand logos. Flat 2D grid on mobile to avoid GPU crashes.
const TechKeyboard = () => {
  const items = [...techStack];
  while (items.length < TOTAL) items.push(null);

  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const checkMotion = () => setReducedMotion(motionQuery.matches);

    checkMobile();
    checkMotion();
    window.addEventListener("resize", checkMobile);
    motionQuery.addEventListener("change", checkMotion);
    return () => {
      window.removeEventListener("resize", checkMobile);
      motionQuery.removeEventListener("change", checkMotion);
    };
  }, []);

  const handleTechClick = (tech) => {
    setSelectedTech(tech);
  };

  const boardInitial = isMobile
    ? { opacity: 0, scale: 0.95 }
    : { opacity: 0, scale: 0.9, rotateX: 60, rotateZ: -30 };

  const boardAnimate = isMobile
    ? { opacity: 1, scale: 1 }
    : { opacity: 1, scale: 1, rotateX: 60, rotateZ: -30 };

  return (
    <div className="tech-keyboard-scene" aria-hidden="true">
      <motion.div
        className="tech-keyboard-float"
        animate={isMobile || reducedMotion ? undefined : { y: [0, -10, 0], rotateX: [0, 1, 0], rotateY: [0, -1, 0] }}
        transition={
          isMobile || reducedMotion
            ? undefined
            : {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.4,
              }
        }
      >
        <motion.div
          initial={boardInitial}
          animate={boardAnimate}
          transition={{ duration: isMobile ? 0.5 : 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="tech-keyboard-board"
        >
          <div
            className="tech-keyboard-grid"
            style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
          >
            {items.slice(0, TOTAL).map((item, i) => (
              <TechKey 
                key={i} 
                item={item} 
                index={i} 
                isMobile={isMobile}
                onClick={handleTechClick}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Optional: Display selected tech info */}
      {selectedTech && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          style={{
            position: "absolute",
            bottom: -40,
            left: "50%",
            transform: "translateX(-50%)",
            background: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: 8,
            padding: "8px 16px",
            fontSize: 12,
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        >
          {selectedTech.name}
        </motion.div>
      )}
    </div>
  );
};

export default TechKeyboard;
