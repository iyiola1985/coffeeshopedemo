"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const notCoarse = !window.matchMedia("(pointer: coarse)").matches;
    if (!finePointer || !notCoarse) return;

    setEnabled(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        !!(
          target.closest("a") ||
          target.closest("button") ||
          target.closest("[data-cursor='hover']")
        )
      );
    };

    document.body.classList.add("hide-cursor");
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", handleHoverStart);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.classList.remove("hide-cursor");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", handleHoverStart);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ scale: { duration: 0.2 } }}
      >
        <div className="relative w-8 h-8">
          <svg viewBox="0 0 32 32" className="w-full h-full text-gold" fill="currentColor">
            <ellipse cx="16" cy="18" rx="8" ry="10" opacity="0.9" />
            <path
              d="M12 10 Q16 4 20 10 Q18 8 16 8 Q14 8 12 10"
              fill="currentColor"
              opacity="0.7"
            />
          </svg>
        </div>
      </motion.div>
    </>
  );
}
