"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { instagramPosts, siteConfig } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

export default function InstagramGallery() {
  return (
    <section className="section-padding relative bg-cream dark:bg-espresso overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label={`@${siteConfig.social.replace("@", "")}`}
          title="Instagram Gallery"
          description="Follow our journey from Kenyan farms to your morning cup. Tag us in your Taste of Kenya moments."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {instagramPosts.map((post, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                className="group relative aspect-square rounded-2xl overflow-hidden block"
                data-cursor="hover"
              >
                <Image
                  src={post}
                  alt={`Instagram post ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/50 transition-all duration-500 flex items-center justify-center">
                  <Instagram
                    size={32}
                    className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100"
                  />
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="text-center mt-12">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-espresso/20 dark:border-cream/20 text-espresso dark:text-cream font-semibold hover:border-kenya-green hover:text-kenya-green transition-all duration-300"
              data-cursor="hover"
            >
              <Instagram size={20} />
              Follow {siteConfig.social}
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
