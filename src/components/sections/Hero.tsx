"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { siteConfig, images } from "@/lib/data";
import SteamAnimation from "@/components/ui/SteamAnimation";
import TornPaperEdge from "@/components/ui/TornPaperEdge";
import Logo from "@/components/ui/Logo";

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
      className="relative min-h-screen bg-[#1A0E09] overflow-x-hidden overflow-y-visible"
    >
      <div className="absolute inset-0 bg-hero-kenya pointer-events-none" />
      <div className="absolute top-0 right-0 w-[70vw] h-[70vh] bg-kenya-green/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-kenya-red/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28 md:pt-36 pb-32 md:pb-40">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center min-h-0 lg:min-h-[calc(100vh-9rem)]">
          {/* Copy */}
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="relative z-20 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.6 }}
              className="mb-6 md:mb-8"
            >
              <Logo size="hero" className="mb-6 lg:hidden" />
              <p className="type-subtitle inline-flex items-center gap-2 text-cream/75 max-w-lg px-4 py-2.5 rounded-full border border-kenya-green/30 bg-kenya-green/10">
                <span className="w-2 h-2 rounded-full bg-kenya-green animate-pulse flex-shrink-0" />
                {siteConfig.hero.eyebrow}
              </p>
            </motion.div>

            <div className="mb-6 md:mb-8 overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="heading-display leading-[1.02] tracking-display"
              >
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-kenya-green-light">
                  {siteConfig.hero.headlineGold}
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-cream mt-2">
                  {siteConfig.hero.headlineWhite}
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.9, duration: 0.6 }}
              className="type-subtitle text-cream/60 max-w-md mb-8 md:mb-10"
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
                className="type-perk inline-flex items-center px-7 py-3.5 bg-kenya-red text-cream rounded-full hover:bg-kenya-red-light transition-all duration-300 hover:scale-105 shadow-lg shadow-kenya-red/30 normal-case"
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
                className="type-perk inline-flex items-center gap-2.5 text-cream/70 hover:text-kenya-green-light transition-colors duration-300 ml-1 normal-case"
                data-cursor="hover"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full border border-cream/30 hover:border-kenya-green/50 transition-colors">
                  <Play size={14} className="ml-0.5 fill-current" />
                </span>
                Our Story
              </a>
            </motion.div>

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
                  <div className="font-display text-2xl md:text-3xl font-bold tracking-display text-gold leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="type-perk text-cream/45">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero product image */}
          <motion.div
            style={{ y: imageY }}
            className="relative order-1 lg:order-2 flex items-center justify-center lg:justify-end w-full min-h-[300px] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[70vh]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto lg:mx-0"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-kenya-green/20 via-transparent to-kenya-red/10 rounded-[2rem] blur-2xl" />

              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden shadow-premium-lg ring-1 ring-cream/10">
                <Image
                  src={images.heroLanding}
                  alt="Taste of Kenya premium coffee"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E09]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-l from-[#1A0E09]/30 via-transparent to-transparent pointer-events-none hidden sm:block" />
              </div>

              <SteamAnimation />

              {/* Floating logo badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-2 sm:-left-6 bg-cream rounded-2xl p-3 shadow-premium ring-2 ring-kenya-green/30"
              >
                <Logo size="md" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-3 -right-2 sm:-right-4 px-4 py-2 bg-kenya-red text-cream type-badge rounded-full shadow-lg normal-case"
              >
                Pure Kenya
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <TornPaperEdge fill="#F8F4EE" />
    </section>
  );
}
