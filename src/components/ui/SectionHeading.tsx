"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-24",
        align === "center" ? "text-center mx-auto max-w-4xl" : "max-w-2xl"
      )}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            "type-badge inline-block mb-4",
            light ? "text-kenya-green-light" : "text-kenya-green"
          )}
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={cn(
          "heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6",
          light ? "text-cream" : "text-espresso dark:text-cream"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            "type-subtitle max-w-2xl",
            align === "center" && "mx-auto",
            light
              ? "text-cream/70"
              : "text-espresso/70 dark:text-cream/70"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
