"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative bg-espresso-light dark:bg-espresso overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          label="Community Love"
          title="Customer Testimonials"
          description="Don't just take our word for it. Hear from coffee lovers who've made Taste of Kenya part of their daily ritual."
          light
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, i) => (
            <FadeIn key={testimonial.id} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative h-full p-8 rounded-3xl bg-cream/5 backdrop-blur-sm border border-cream/10 hover:border-gold/20 transition-all duration-500"
                data-cursor="hover"
              >
                <Quote
                  size={40}
                  className="text-gold/20 absolute top-6 right-6 group-hover:text-gold/30 transition-colors"
                />

                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-cream/80 text-lg leading-relaxed mb-8 relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gold/30">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-cream font-semibold">{testimonial.name}</p>
                    <p className="text-cream/50 text-sm">{testimonial.role}</p>
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
