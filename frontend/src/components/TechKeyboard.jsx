import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, RoundedBox, Html, ContactShadows, PresentationControls } from "@react-three/drei";
import { techStack } from "../mock/mock";

const COLS = 6;
const ROWS = 4;
const TOTAL = COLS * ROWS;

const KEY_SIZE = 1.0;
const KEY_GAP = 0.2;
const BOARD_PADDING = 0.4;
const BOARD_WIDTH = COLS * KEY_SIZE + (COLS - 1) * KEY_GAP + BOARD_PADDING * 2;
const BOARD_HEIGHT = ROWS * KEY_SIZE + (ROWS - 1) * KEY_GAP + BOARD_PADDING * 2;

const startX = -BOARD_WIDTH / 2 + BOARD_PADDING + KEY_SIZE / 2;
const startY = BOARD_HEIGHT / 2 - BOARD_PADDING - KEY_SIZE / 2;

// Standard CSS-based fallback for mobile
const TechKeyIconCSS = ({ item }) => {
  const [error, setError] = useState(false);
  if (!item?.icon || error) return <span className="tech-key-label">{item?.short ?? ""}</span>;
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

const TechKeyCSS = ({ item, index }) => {
  const isEmpty = !item;
  const style = isEmpty
    ? { "--key-bg": "#1a1a1e", "--key-glow": "rgba(255,255,255,0.08)" }
    : { "--key-bg": item.bg, "--key-glow": item.color ? `${item.color}55` : "rgba(255,255,255,0.2)" };
  const keyClass = `tech-key${isEmpty ? " tech-key--empty" : ""}`;
  return (
    <div className={keyClass} style={style}>
      {!isEmpty && <TechKeyIconCSS item={item} />}
    </div>
  );
};

// 3D Scene Components
const TechKey3D = ({ item, index }) => {
  const col = index % COLS;
  const row = Math.floor(index / COLS);
  const x = startX + col * (KEY_SIZE + KEY_GAP);
  const y = startY - row * (KEY_SIZE + KEY_GAP);
  const isEmpty = !item;

  const [hovered, setHovered] = useState(false);
  
  // Z position pushes out slightly on hover
  const z = hovered && !isEmpty ? 0.45 : 0.35;

  return (
    <group 
      position={[x, y, z]} 
      onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)}
    >
      <RoundedBox args={[KEY_SIZE, KEY_SIZE, 0.7]} radius={0.18} smoothness={4}>
        <meshStandardMaterial 
          color={isEmpty ? "#1e1e1e" : item.bg} 
          roughness={0.8} 
          metalness={0.1}
        />
      </RoundedBox>

      {!isEmpty && (
        <Html transform position={[0, 0, 0.36]} distanceFactor={3.2} zIndexRange={[100, 0]} pointerEvents="none">
          <div style={{
            width: '64px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}>
            {item.icon ? (
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.icon}/${item.icon}-original.svg`}
                alt={item.name}
                style={{
                  width: '60%',
                  height: '60%',
                  objectFit: 'contain',
                  filter: item.invertIcon 
                    ? `invert(1) brightness(2)` 
                    : `none`
                }}
                draggable={false}
              />
            ) : (
              <span style={{ 
                color: item.text, 
                fontWeight: '900', 
                fontSize: '18px', 
                letterSpacing: '1px'
              }}>
                {item.short}
              </span>
            )}
          </div>
        </Html>
      )}
    </group>
  );
};

const KeyboardScene = ({ items }) => {
  return (
    <PresentationControls
      global
      rotation={[0.7, -0.4, 0]}
      polar={[-0.2, 0.2]}
      azimuth={[-0.2, 0.2]}
      config={{ mass: 2, tension: 400 }}
      snap={{ mass: 4, tension: 400 }}
    >
      <Float rotationIntensity={0.15} floatIntensity={0.3} floatingRange={[-0.05, 0.05]}>
        {/* Board Base */}
        <RoundedBox args={[BOARD_WIDTH, BOARD_HEIGHT, 1.2]} radius={0.3} position={[0, 0, -0.6]} smoothness={4}>
          <meshStandardMaterial color="#1a1a1a" roughness={0.85} metalness={0.1} />
        </RoundedBox>

        {/* Keys */}
        {items.map((item, i) => (
          <TechKey3D key={i} item={item} index={i} />
        ))}
      </Float>

      <ContactShadows position={[0, -3, 0]} opacity={0.6} scale={20} blur={2} far={4} />
    </PresentationControls>
  );
};

const TechKeyboard = () => {
  const items = [...techStack];
  while (items.length < TOTAL) items.push(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="tech-keyboard-scene" aria-hidden="true">
        <div className="tech-keyboard-board">
          <div className="tech-keyboard-grid" style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}>
            {items.slice(0, TOTAL).map((item, i) => (
              <TechKeyCSS key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[500px] flex items-center justify-center" style={{ cursor: 'grab' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 15, 10]} intensity={1.8} castShadow />
        <directionalLight position={[-10, -10, -10]} intensity={0.4} />
        
        <Suspense fallback={null}>
          <KeyboardScene items={items.slice(0, TOTAL)} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default TechKeyboard;
