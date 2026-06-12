"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const beans = [
  { id: 1, x: "10%", y: "20%", size: 24, delay: 0 },
  { id: 2, x: "85%", y: "35%", size: 18, delay: 0.5 },
  { id: 3, x: "75%", y: "70%", size: 22, delay: 1 },
  { id: 4, x: "15%", y: "75%", size: 16, delay: 1.5 },
  { id: 5, x: "50%", y: "85%", size: 20, delay: 0.8 },
  { id: 6, x: "92%", y: "55%", size: 14, delay: 1.2 },
];

function CoffeeBean({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 32 42"
      fill="none"
      className="drop-shadow-lg"
    >
      <ellipse cx="16" cy="21" rx="14" ry="18" fill="#3D2418" />
      <ellipse cx="16" cy="21" rx="10" ry="14" fill="#2A1710" />
      <path
        d="M16 5 Q22 15 16 37 Q10 15 16 5"
        stroke="#D4A017"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

export default function FloatingBeans() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {beans.map((bean) => (
        <motion.div
          key={bean.id}
          className="absolute"
          style={{
            left: bean.x,
            top: bean.y,
            y,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, -5, 0],
          }}
          transition={{
            duration: 5 + bean.delay,
            repeat: Infinity,
            delay: bean.delay,
            ease: "easeInOut",
          }}
        >
          <CoffeeBean size={bean.size} />
        </motion.div>
      ))}
    </div>
  );
}
