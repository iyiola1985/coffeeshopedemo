"use client";

import { motion } from "framer-motion";

const STEAM_PARTICLES = [
  { left: 20, width: 10, height: 12 },
  { left: 32, width: 14, height: 10 },
  { left: 44, width: 9, height: 15 },
  { left: 56, width: 13, height: 11 },
  { left: 68, width: 11, height: 14 },
  { left: 80, width: 12, height: 9 },
];

export default function SteamAnimation() {
  return (
    <div className="absolute top-[8%] left-[42%] w-24 h-32 pointer-events-none z-10">
      {STEAM_PARTICLES.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 rounded-full bg-cream/20 blur-md"
          style={{
            left: `${particle.left}%`,
            width: `${particle.width}px`,
            height: `${particle.height}px`,
          }}
          animate={{
            y: [0, -60 - i * 15, -100 - i * 20],
            x: [0, (i % 2 === 0 ? 10 : -10), (i % 2 === 0 ? 20 : -20)],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.2, 1.8],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
