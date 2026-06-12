"use client";

interface TornPaperEdgeProps {
  fill?: string;
  className?: string;
}

export default function TornPaperEdge({
  fill = "#F8F4EE",
  className = "",
}: TornPaperEdgeProps) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 z-20 pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16 lg:h-20 block"
        aria-hidden="true"
      >
        <path
          d="M0,40 C120,70 240,10 360,35 C480,60 600,15 720,40 C840,65 960,20 1080,38 C1200,56 1320,25 1440,45 L1440,80 L0,80 Z"
          fill={fill}
        />
        <path
          d="M0,50 C180,75 300,25 480,48 C660,71 780,30 960,52 C1140,74 1260,35 1440,55 L1440,80 L0,80 Z"
          fill={fill}
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
