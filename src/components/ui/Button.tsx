"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  href,
}: ButtonProps) {
  const sizes = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };

  const variants = {
    primary: "bg-gold text-espresso hover:shadow-gold",
    secondary:
      "bg-transparent text-cream border-2 border-cream/40 hover:bg-cream/10 hover:border-cream/60",
    outline:
      "bg-transparent text-espresso dark:text-cream border-2 border-espresso/20 dark:border-cream/20 hover:border-gold hover:text-gold",
  };

  const classes = cn(
    "relative inline-flex items-center justify-center font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 group",
    sizes[size],
    variants[variant],
    className
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 bg-white/20"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} data-cursor="hover">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} data-cursor="hover">
      {content}
    </button>
  );
}
