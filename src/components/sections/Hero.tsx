"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { siteConfig, images } from "@/lib/data";
import { useIsMobile, usePrefersReducedMotion } from "@/lib/hooks";
import SteamAnimation from "@/components/ui/SteamAnimation";
import TornPaperEdge from "@/components/ui/TornPaperEdge";

export default function Hero() {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, isMobile || reducedMotion ? 0 : 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, isMobile || reducedMotion ? 0 : 120]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.6],
    [1, isMobile || reducedMotion ? 1 : 0]
  );

  const disableMotion = isMobile || reducedMotion;

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100svh] section-surface-hero overflow-x-hidden"
    >
      <div className="absolute inset-0 bg-hero-kenya pointer-events-none opacity-80" />
      <div className="absolute top-0 right-0 w-[70vw] max-w-md h-[50vh] bg-kenya-green/10 rounded-full blur-[100px] pointer-events-none hidden sm:block" />
      <div className="absolute bottom-0 left-0 w-[50vw] max-w-sm h-[40vh] bg-kenya-red/8 rounded-full blur-[80px] pointer-events-none hidden sm:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pt-24 sm:pt-28 md:pt-36 pb-24 sm:pb-32 md:pb-40">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-6 items-center">
          {/* Copy */}
          <motion.div
            style={disableMotion ? undefined : { y: contentY, opacity: contentOpacity }}
            className="relative z-20 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.6 }}
              className="mb-5 sm:mb-8"
            >
              <p className="type-subtitle text-cream/75 max-w-lg px-3 sm:px-4 py-3 rounded-2xl border border-kenya-green/30 bg-kenya-green/10 flex items-start sm:items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-kenya-green animate-pulse flex-shrink-0 mt-1.5 sm:mt-0" />
                <span className="min-w-0 break-words">{siteConfig.hero.eyebrow}</span>
              </p>
            </motion.div>

            <div className="mb-5 sm:mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="heading-display leading-[1.05] tracking-display"
              >
                <span className="block text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-kenya-green-light">
                  {siteConfig.hero.headlineGold}
                </span>
                <span className="block text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-cream mt-1 sm:mt-2">
                  {siteConfig.hero.headlineWhite}
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.9, duration: 0.6 }}
              className="type-subtitle text-cream/60 max-w-md mb-6 sm:mb-10"
            >
              {siteConfig.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.1, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href="#featured"
                className="type-perk inline-flex items-center px-6 sm:px-7 py-3 sm:py-3.5 bg-kenya-red text-cream rounded-full hover:bg-kenya-red-light transition-colors duration-300 shadow-lg shadow-kenya-red/30 normal-case touch-manipulation active:scale-95"
                data-cursor="hover"
              >
                Shop Now
              </a>
              <a
                href="#featured"
                className="inline-flex items-center justify-center w-11 h-11 bg-cream text-espresso rounded-full hover:bg-gold transition-colors duration-300 touch-manipulation active:scale-95"
                aria-label="Explore shop"
                data-cursor="hover"
              >
                <ArrowUpRight size={20} />
              </a>
              <a
                href="#process"
                className="type-perk inline-flex items-center gap-2 text-cream/70 hover:text-kenya-green-light transition-colors duration-300 normal-case touch-manipulation"
                data-cursor="hover"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full border border-cream/30">
                  <Play size={14} className="ml-0.5 fill-current" />
                </span>
                Our Story
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.4, duration: 0.7 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 mt-10 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-cream/10 max-w-md"
            >
              {siteConfig.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.5 + i * 0.1 }}
                >
                  <div className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-display text-gold leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="type-perk text-cream/45 text-[9px] sm:text-[11px]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero product image — no logo overlay */}
          <motion.div
            style={disableMotion ? undefined : { y: imageY }}
            className="relative order-1 lg:order-2 flex items-center justify-center lg:justify-end w-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-lg lg:max-w-xl mx-auto lg:mx-0"
            >
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-kenya-green/20 via-transparent to-kenya-red/10 rounded-[2rem] blur-2xl" />

              <div className="relative w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-premium-lg ring-1 ring-cream/10">
                <Image
                  src={images.heroLanding}
                  alt="Taste of Kenya premium coffee by the fireplace"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E09]/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {!isMobile && <SteamAnimation />}

              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-kenya-red text-cream type-badge rounded-full shadow-lg normal-case">
                Pure Kenya
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <TornPaperEdge fill="#F8F4EE" />
    </section>
  );
}
