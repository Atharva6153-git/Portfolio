import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { techStack } from "../mock/mock";

const COLS = 6;
const ROWS = 4;
const TOTAL = COLS * ROWS;

// How tall the keycap is in px (the visible side thickness)
const KEY_DEPTH = 10;

const TechKeyIcon = ({ item }) => {
  const [error, setError] = useState(false);

  if (!item?.icon || error) {
    return (
      <span
        style={{
          color: item?.text ?? "#fff",
          fontWeight: 800,
          fontSize: "clamp(9px, 1.1vw, 13px)",
          letterSpacing: "0.03em",
          lineHeight: 1,
          userSelect: "none",
          textShadow: "0 1px 2px rgba(0,0,0,0.5)",
        }}
      >
        {item?.short ?? ""}
      </span>
    );
  }

  const src = item.icon?.startsWith("http")
    ? item.icon
    : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.icon}/${item.icon}-original.svg`;

  return (
    <img
      src={src}
      alt=""
      style={{
        width: "52%",
        height: "52%",
        objectFit: "contain",
        pointerEvents: "none",
        userSelect: "none",
        filter: item.invertIcon ? "invert(1) brightness(2)" : undefined,
        display: "block",
      }}
      loading="lazy"
      draggable={false}
      onError={() => setError(true)}
    />
  );
};

/**
 * A single keycap rendered with real CSS 3D faces:
 *   - top face   (the visible surface with the icon)
 *   - front face (bottom-facing thick edge visible in isometric view)
 *   - right face (right-facing thick edge visible in isometric view)
 *
 * Hover: key translates DOWN along Y (pressed effect) and the side faces shrink.
 */
const TechKey = ({ item, index, isMobile }) => {
  const isEmpty = !item;
  const bg = isEmpty ? "#18181b" : item.bg;
  // Darken bg for side faces
  const sideBg = isEmpty
    ? "#0a0a0c"
    : `color-mix(in srgb, ${bg} 45%, #000)`;

  const [pressed, setPressed] = useState(false);

  // Auto-press animation — stagger each key sequentially on mount
  useEffect(() => {
    if (isMobile || isEmpty) return;
    const delay = 800 + index * 60;
    const timer = setTimeout(() => {
      setPressed(true);
      setTimeout(() => setPressed(false), 180);
    }, delay);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  const pressDepth = pressed ? KEY_DEPTH - 2 : 0;

  if (isMobile) {
    // Simple flat key for mobile — no GPU-heavy transforms
    return (
      <div
        style={{
          aspectRatio: "1/1",
          borderRadius: 7,
          background: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: isEmpty
            ? "none"
            : `0 ${KEY_DEPTH / 2}px 0 ${sideBg}, 0 ${KEY_DEPTH / 2 + 2}px 6px rgba(0,0,0,0.5)`,
          opacity: isEmpty ? 0.25 : 1,
        }}
      >
        {!isEmpty && <TechKeyIcon item={item} />}
      </div>
    );
  }

  return (
    <div
      style={{
        aspectRatio: "1/1",
        position: "relative",
        transformStyle: "preserve-3d",
        cursor: isEmpty ? "default" : "pointer",
        opacity: isEmpty ? 0.2 : 1,
      }}
      title={item?.name}
      onMouseEnter={() => !isEmpty && setPressed(true)}
      onMouseLeave={() => !isEmpty && setPressed(false)}
    >
      {/* === TOP FACE === */}
      <motion.div
        animate={{ y: pressDepth }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 8,
          background: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transformStyle: "preserve-3d",
          // Top highlight edge
          boxShadow: pressed
            ? `inset 0 -1px 0 rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)`
            : `inset 0 2px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.3)`,
          zIndex: 3,
        }}
      >
        {!isEmpty && <TechKeyIcon item={item} />}
      </motion.div>

      {/* === FRONT FACE (bottom edge, the thick side you see from below in isometric) === */}
      <motion.div
        animate={{ scaleY: pressed ? 0.15 : 1, y: pressed ? pressDepth : 0 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: 2,
          right: 2,
          bottom: -KEY_DEPTH,
          height: KEY_DEPTH,
          borderRadius: "0 0 6px 6px",
          background: sideBg,
          transformOrigin: "top",
          zIndex: 1,
        }}
      />

      {/* === RIGHT FACE (right edge side) === */}
      <motion.div
        animate={{ scaleX: pressed ? 0.15 : 1, y: pressed ? pressDepth : 0 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: 2,
          bottom: -KEY_DEPTH + 2,
          right: -KEY_DEPTH,
          width: KEY_DEPTH,
          borderRadius: "0 6px 6px 0",
          background: `color-mix(in srgb, ${sideBg} 80%, #111)`,
          transformOrigin: "left",
          zIndex: 2,
        }}
      />
    </div>
  );
};

const TechKeyboard = () => {
  const items = [...techStack];
  while (items.length < TOTAL) items.push(null);

  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

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

  const boardInitial = isMobile
    ? { opacity: 0, scale: 0.95 }
    : { opacity: 0, scale: 0.88, rotateX: 55, rotateZ: -28 };

  const boardAnimate = isMobile
    ? { opacity: 1, scale: 1 }
    : { opacity: 1, scale: 1, rotateX: 55, rotateZ: -28 };

  return (
    <div className="tech-keyboard-scene" aria-hidden="true">
      <motion.div
        className="tech-keyboard-float"
        animate={
          isMobile || reducedMotion
            ? undefined
            : { y: [0, -8, 0] }
        }
        transition={
          isMobile || reducedMotion
            ? undefined
            : { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }
        }
      >
        <motion.div
          initial={boardInitial}
          animate={boardAnimate}
          transition={{ duration: isMobile ? 0.5 : 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="tech-keyboard-board"
        >
          {/* Key grid — extra padding to show side faces */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${COLS}, 1fr)`,
              gap: isMobile ? 8 : 12,
              // Bottom/right padding to avoid clipping the side faces
              paddingBottom: isMobile ? 4 : KEY_DEPTH + 4,
              paddingRight: isMobile ? 4 : KEY_DEPTH + 4,
            }}
          >
            {items.slice(0, TOTAL).map((item, i) => (
              <TechKey key={i} item={item} index={i} isMobile={isMobile} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechKeyboard;
