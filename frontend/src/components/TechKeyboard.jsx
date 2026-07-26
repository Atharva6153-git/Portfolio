import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { techStack } from "../mock/mock";

const COLS = 6;
const ROWS = 4;
const TOTAL = COLS * ROWS;

const TechKeyIcon = ({ item }) => {
  const [error, setError] = useState(false);

  if (!item?.icon || error) {
    return <span className="tech-key-label">{item?.short ?? ""}</span>;
  }

  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.icon}/${item.icon}-original.svg`}
      alt=""
      className={`tech-key-icon${item.text === "#000" ? " tech-key-icon--dark-bg" : ""}`}
      style={item.invertIcon ? { filter: "invert(1) brightness(2)" } : undefined}
      loading="lazy"
      draggable={false}
      onError={() => setError(true)}
    />
  );
};

const TechKey = ({ item, index, isMobile }) => {
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
      <div className={keyClass} style={style}>
        {!isEmpty && <TechKeyIcon item={item} />}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 + index * 0.03, duration: 0.5, ease: "easeOut" }}
      className={keyClass}
      style={style}
      title={item?.name}
    >
      {!isEmpty && <TechKeyIcon item={item} />}
    </motion.div>
  );
};

// 3D isometric keyboard with brand logos. Flat 2D grid on mobile to avoid GPU crashes.
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
    : { opacity: 0, scale: 0.9, rotateX: 60, rotateZ: -30 }; // Match the exact angle from the photo

  const boardAnimate = isMobile
    ? { opacity: 1, scale: 1 }
    : { opacity: 1, scale: 1, rotateX: 60, rotateZ: -30 }; // Deep isometric angle

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
              <TechKey key={i} item={item} index={i} isMobile={isMobile} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechKeyboard;
