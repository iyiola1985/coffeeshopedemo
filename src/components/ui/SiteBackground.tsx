import { images } from "@/lib/data";

export default function SiteBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url(${images.coffeeBeansBg})` }}
      />
      {/* Base tint — keeps text readable while beans stay visible */}
      <div className="absolute inset-0 bg-espresso-dark/72" />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-dark/40 via-transparent to-espresso-dark/60" />
    </div>
  );
}
