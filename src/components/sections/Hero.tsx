"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { siteConfig } from "@/lib/data";
import SteamAnimation from "@/components/ui/SteamAnimation";
import TornPaperEdge from "@/components/ui/TornPaperEdge";
import { CoffeeBeanMark } from "@/components/ui/CoffeeBeanMark";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen bg-[#1E1008] overflow-x-hidden overflow-y-visible"
    >
      {/* Subtle radial glow behind pour image */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[60vw] h-[80vh] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-32 md:pb-40">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-0 lg:min-h-[calc(100vh-8rem)]">
          {/* Left — copy */}
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="relative z-20 order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.6 }}
              className="text-cream/60 text-sm md:text-base mb-6 md:mb-8"
            >
              {siteConfig.hero.eyebrow}
            </motion.p>

            <div className="mb-6 md:mb-8 overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="heading-display leading-[0.88] tracking-tight"
              >
                <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] text-gold">
                  {siteConfig.hero.headlineGold}
                </span>
                <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] text-cream mt-1">
                  {siteConfig.hero.headlineWhite.split(" ").map((word, i) => (
                    <span key={word} className="inline-block mr-[0.25em]">
                      {i === 0 && word.toLowerCase().startsWith("c") ? (
                        <span className="inline-flex items-baseline">
                          C
                          <CoffeeBeanMark className="inline-block w-[0.5em] h-[0.65em] mx-[0.01em] -translate-y-[0.04em]" />
                          {word.slice(1)}
                        </span>
                      ) : (
                        word
                      )}
                    </span>
                  ))}
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.9, duration: 0.6 }}
              className="text-cream/55 text-sm md:text-base leading-relaxed max-w-md mb-8 md:mb-10"
            >
              {siteConfig.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.1, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#featured"
                className="inline-flex items-center px-7 py-3.5 bg-cream text-espresso text-sm font-semibold rounded-full hover:bg-gold transition-all duration-300 hover:scale-105"
                data-cursor="hover"
              >
                Shop Now
              </a>
              <a
                href="#featured"
                className="inline-flex items-center justify-center w-11 h-11 bg-cream text-espresso rounded-full hover:bg-gold transition-all duration-300 hover:scale-105"
                aria-label="Explore shop"
                data-cursor="hover"
              >
                <ArrowUpRight size={20} />
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2.5 text-cream/70 hover:text-gold text-sm font-medium transition-colors duration-300 ml-1"
                data-cursor="hover"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full border border-cream/30 hover:border-gold/50 transition-colors">
                  <Play size={14} className="ml-0.5 fill-current" />
                </span>
                Watch Video
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.4, duration: 0.7 }}
              className="grid grid-cols-3 gap-6 mt-14 md:mt-20 pt-8 border-t border-cream/10 max-w-md"
            >
              {siteConfig.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.5 + i * 0.1 }}
                >
                  <div className="font-display text-2xl md:text-3xl text-gold leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-cream/45 text-[10px] md:text-xs tracking-widest uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — cinematic pour */}
          <motion.div
            style={{ y: imageY }}
            className="relative order-1 lg:order-2 flex items-center justify-center lg:justify-end w-full min-h-[280px] sm:min-h-[340px] md:min-h-[420px] lg:min-h-[70vh]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
              className="relative w-full max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto lg:mx-0"
            >
              {/* Reflective surface / beans scatter */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-16 sm:h-24 md:h-32 z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-full blur-xl" />
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-4 md:w-4 md:h-5 rounded-full bg-[#3D2418] border border-gold/20"
                    style={{
                      left: `${8 + i * 7.5}%`,
                      bottom: `${4 + (i % 3) * 8}px`,
                      rotate: `${-30 + i * 25}deg`,
                    }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 3 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>

              {/* Main pour image */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=1000&fit=crop"
                  alt="Pouring exceptional coffee"
                  fill
                  priority
                  className="object-cover object-center drop-shadow-2xl"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1008]/80 via-transparent to-transparent opacity-40 sm:opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-l from-[#1E1008]/20 via-transparent to-transparent pointer-events-none hidden sm:block" />
              </div>

              <SteamAnimation />

              {/* Reflection mirror — desktop only */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-16 overflow-hidden opacity-20 pointer-events-none hidden sm:block">
                <Image
                  src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=200&fit=crop"
                  alt=""
                  width={400}
                  height={64}
                  className="w-full h-full object-cover object-top scale-y-[-1] blur-[1px]"
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Torn paper transition to next section */}
      <TornPaperEdge fill="#F8F4EE" className="dark:[&_path]:fill-[#F8F4EE]" />
    </section>
  );
}
