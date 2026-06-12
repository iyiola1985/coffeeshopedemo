"use client";

import { motion } from "framer-motion";
import { Award, Flame, Leaf, Coffee } from "lucide-react";
import { whyChooseUs } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import Spotlight from "@/components/ui/Spotlight";

const iconMap = {
  bean: Coffee,
  flame: Flame,
  leaf: Leaf,
  award: Award,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding relative bg-espresso dark:bg-espresso-dark overflow-hidden">
      <Spotlight className="max-w-7xl mx-auto">
        <SectionHeading
          label="The Taste of Kenya Difference"
          title="Why Choose Us"
          description="We are on a mission to reinvent the coffee industry — simplifying the supply chain so Kenyan farmers thrive and you enjoy coffee as it should be."
          light
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <FadeIn key={item.title} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative p-8 md:p-10 rounded-3xl bg-cream/5 backdrop-blur-sm border border-cream/10 hover:border-gold/30 transition-all duration-500"
                  data-cursor="hover"
                >
                  <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                      <Icon size={28} className="text-gold" />
                    </div>
                    <h3 className="type-title text-cream mb-4">
                      {item.title}
                    </h3>
                    <p className="type-subtitle text-cream/60">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </Spotlight>
    </section>
  );
}
