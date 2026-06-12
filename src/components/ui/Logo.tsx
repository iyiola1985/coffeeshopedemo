import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  /** @deprecated Logo image includes wordmark — kept for API compat */
  showText?: boolean;
}

const LOGO_RATIO = 762 / 1024;

const sizes = {
  sm: 40,
  md: 52,
  lg: 68,
  xl: 88,
  hero: 112,
};

export default function Logo({
  className,
  size = "md",
}: LogoProps) {
  const height = sizes[size];
  const width = Math.round(height * LOGO_RATIO);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/images/logo.png"
        alt="Taste of Kenya"
        width={width}
        height={height}
        className="h-auto w-auto object-contain drop-shadow-sm"
        style={{ maxHeight: height }}
        priority
      />
    </span>
  );
}
