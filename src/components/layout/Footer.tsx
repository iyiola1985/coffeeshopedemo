"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/data";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-espresso-dark text-cream pt-20 pb-8">
      <div className="section-padding !py-0 !pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <a
                href="#"
                className="font-display text-4xl tracking-wider text-cream inline-block mb-6"
              >
                ROASTORY
              </a>
              <p className="text-cream/60 leading-relaxed max-w-sm mb-8">
                {siteConfig.description}
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -3, color: "#D4A017" }}
                    className="w-10 h-10 rounded-full bg-cream/5 flex items-center justify-center text-cream/60 hover:text-gold hover:bg-gold/10 transition-colors duration-300"
                    aria-label={social.label}
                    data-cursor="hover"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg tracking-wider mb-6">Shop</h4>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg tracking-wider mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg tracking-wider mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/40 text-sm">
              &copy; {new Date().getFullYear()} Roastory. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-cream/40">
              <a href="#" className="hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
