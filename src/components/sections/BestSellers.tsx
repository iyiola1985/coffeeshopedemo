"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { bestSellers } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

export default function BestSellers() {
  return (
    <section id="best-sellers" className="section-padding relative section-surface-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Customer Favorites"
          title="Best Sellers"
          description="The blends our community can't stop talking about. Join thousands who've made these part of their daily ritual."
        />

        <div className="space-y-8 md:space-y-12">
          {bestSellers.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.15}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="group relative grid md:grid-cols-2 gap-8 items-center glass-card rounded-3xl overflow-hidden p-4 md:p-6"
                data-cursor="hover"
              >
                <div
                  className={`relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-espresso/20 to-transparent" />
                  <span className="absolute top-4 left-4 px-4 py-1.5 bg-espresso/80 backdrop-blur-sm text-gold type-badge rounded-full">
                    {product.sales}
                  </span>
                </div>

                <div className={`p-4 md:p-8 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <span className="type-badge text-gold mt-3 block">
                    #{String(i + 1).padStart(2, "0")} Best Seller
                  </span>
                  <h3 className="heading-display text-2xl md:text-4xl text-espresso dark:text-cream mt-2 mb-4">
                    {product.name}
                  </h3>
                  <p className="type-subtitle text-espresso/70 dark:text-cream/70 mb-6 max-w-md">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-6">
                    <span className="font-display text-3xl text-gold">
                      {formatPrice(product.price)}
                    </span>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-espresso dark:text-cream font-semibold group/link"
                    >
                      Shop Now
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </motion.a>
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
