import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { techStack } from "../mock/mock";

// A 3D isometric keyboard-style tech grid.
// On mobile it renders as a flat 2D grid to avoid iOS Safari GPU crashes.
const TechKeyboard = () => {
  const cols = 6;
  const rows = 4;
  const total = cols * rows;
  const items = [...techStack];
  while (items.length < total) items.push(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // On mobile: no rotation, no per-key entrance animation cascade → prevents crash.
  const boardInitial = isMobile
    ? { opacity: 0, scale: 0.95 }
    : { opacity: 0, scale: 0.9, rotateX: 55, rotateZ: -25 };
  const boardAnimate = isMobile
    ? { opacity: 1, scale: 1 }
    : { opacity: 1, scale: 1, rotateX: 55, rotateZ: -25 };

  return (
    <div className="tech-keyboard-scene" aria-hidden="true">
      <motion.div
        initial={boardInitial}
        animate={boardAnimate}
        transition={{ duration: isMobile ? 0.5 : 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="tech-keyboard-board"
      >
        <div
          className="tech-keyboard-grid"
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        >
          {items.slice(0, total).map((item, i) =>
            isMobile ? (
              <div
                key={i}
                className="tech-key"
                style={{
                  background: item ? item.bg : "#1a1a1e",
                  color: item ? item.text : "#333",
                }}
              >
                <span className="tech-key-label">{item ? item.short : ""}</span>
              </div>
            ) : (
              <motion.div
                key={i}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.03, duration: 0.5, ease: "easeOut" }}
                className="tech-key"
                style={{
                  background: item ? item.bg : "#1a1a1e",
                  color: item ? item.text : "#333",
                }}
              >
                <span className="tech-key-label">{item ? item.short : ""}</span>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default TechKeyboard;
