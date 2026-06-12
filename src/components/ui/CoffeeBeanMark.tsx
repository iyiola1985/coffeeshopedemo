export function CoffeeBeanMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 32"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="16" rx="10" ry="13" fill="#D4A017" />
      <path
        d="M12 4 Q17 14 12 28 Q7 14 12 4"
        stroke="#2A1710"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}
