"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ShoppingBag } from "lucide-react";
import { featuredProducts } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

export default function FeaturedProducts() {
  return (
    <section id="featured" className="section-padding relative bg-cream dark:bg-espresso-dark overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-espresso/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          label="Curated Selection"
          title="Featured Products"
          description="Handpicked blends that define the Roastory experience. Each roast tells a unique story of origin and craftsmanship."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className="group relative"
                data-cursor="hover"
              >
                <div className="glass-card rounded-3xl overflow-hidden">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-espresso text-xs font-semibold tracking-wider uppercase rounded-full">
                      {product.tag}
                    </span>

                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ scale: 1.05 }}
                      className="absolute bottom-4 right-4 p-3 bg-cream rounded-full shadow-premium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
                      aria-label="Add to cart"
                    >
                      <ShoppingBag size={20} className="text-espresso" />
                    </motion.button>
                  </div>

                  <div className="p-6">
                    <p className="text-gold text-xs tracking-widest uppercase mb-2">
                      {product.origin}
                    </p>
                    <h3 className="font-display text-2xl text-espresso dark:text-cream mb-2 tracking-wide">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-semibold text-espresso dark:text-cream">
                        {formatPrice(product.price)}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="fill-gold text-gold" />
                        <span className="text-sm text-espresso/60 dark:text-cream/60">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
