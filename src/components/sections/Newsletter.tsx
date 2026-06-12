"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gold-gradient opacity-90" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%232A1710%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <FadeIn>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-espresso/10 mb-8">
            <Mail size={28} className="text-espresso" />
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-espresso mb-6 tracking-wide">
            Join the Roastory Family
          </h2>
          <p className="text-espresso/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Subscribe for exclusive offers, brewing tips, and first access to 
            limited edition releases. Plus, get 15% off your first order.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-8 py-4 bg-espresso text-gold rounded-full font-semibold"
            >
              Welcome to the family! Check your inbox.
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full bg-cream/80 text-espresso placeholder:text-espresso/40 border-2 border-transparent focus:border-espresso/20 outline-none transition-all duration-300"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-espresso text-gold font-semibold rounded-full hover:shadow-premium transition-all duration-300"
                data-cursor="hover"
              >
                Subscribe
                <ArrowRight size={18} />
              </motion.button>
            </form>
          )}

          <p className="text-espresso/50 text-sm mt-6">
            No spam, ever. Unsubscribe anytime.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
