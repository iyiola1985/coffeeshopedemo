import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  /** Use on dark backgrounds (footer, loading) — adds cream backing so black text stays visible */
  surface?: "dark" | "light";
}

const LOGO_RATIO = 762 / 1024;

const sizes = {
  sm: 44,
  md: 56,
  lg: 72,
  xl: 96,
  hero: 120,
};

const padding = {
  sm: "p-2",
  md: "p-2.5",
  lg: "p-3",
  xl: "p-4",
  hero: "p-5",
};

export default function Logo({
  className,
  size = "md",
  surface = "dark",
}: LogoProps) {
  const height = sizes[size];
  const width = Math.round(height * LOGO_RATIO);

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center shrink-0",
        surface === "dark" &&
          cn(
            "rounded-2xl bg-cream shadow-premium ring-1 ring-cream/80",
            padding[size]
          ),
        surface === "light" && "rounded-xl bg-white/95 p-2 shadow-sm",
        className
      )}
    >
      <Image
        src="/images/logo.png"
        alt="Taste of Kenya"
        width={width}
        height={height}
        className="object-contain"
        style={{ width: "auto", height, maxWidth: width }}
        priority
      />
    </span>
  );
}
