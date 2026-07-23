import React from "react";
import { motion } from "framer-motion";
import { techStack } from "../mock/mock";

// A 3D isometric keyboard-style tech grid. Pure CSS 3D transforms.
const TechKeyboard = () => {
  const cols = 6;
  const rows = 4;
  const total = cols * rows;
  const items = [...techStack];
  while (items.length < total) items.push(null);

  return (
    <div className="tech-keyboard-scene" aria-hidden="true">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateX: 55, rotateZ: -25 }}
        animate={{ opacity: 1, scale: 1, rotateX: 55, rotateZ: -25 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="tech-keyboard-board"
      >
        <div
          className="tech-keyboard-grid"
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        >
          {items.slice(0, total).map((item, i) => (
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
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TechKeyboard;
