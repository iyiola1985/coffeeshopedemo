"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { footerLinks, siteConfig } from "@/lib/data";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="section-surface-dark text-cream pt-20 pb-8">
      <div className="section-padding !py-0 !pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <a href="#" className="inline-block mb-6" data-cursor="hover">
                <Logo size="xl" surface="dark" />
              </a>
              <p className="type-subtitle text-cream/60 max-w-sm mb-4">
                {siteConfig.description}
              </p>
              <p className="type-perk text-kenya-green-light/80 mb-8 normal-case">
                {siteConfig.tagline}
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 rounded-full bg-cream/5 flex items-center justify-center text-cream/60 hover:text-kenya-green-light hover:bg-kenya-green/10 transition-colors duration-300"
                    aria-label={social.label}
                    data-cursor="hover"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="type-title text-cream mb-6">Shop</h4>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="type-subtitle text-cream/60 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="type-title text-cream mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="type-subtitle text-cream/60 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="type-title text-cream mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="type-subtitle text-cream/60 hover:text-gold transition-colors duration-300"
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
              &copy; {new Date().getFullYear()} Taste of Kenya. Grown in Kenya — Loved Worldwide.
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
