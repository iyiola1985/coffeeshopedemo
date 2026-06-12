"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2, ease: [0.76, 0, 0.24, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-3" : "py-5 md:py-6"
        )}
      >
        <nav
          className={cn(
            "mx-4 md:mx-8 lg:mx-12 transition-all duration-500",
            isScrolled
              ? "glass-nav rounded-2xl px-4 md:px-6 py-3"
              : "bg-transparent px-4 md:px-6 py-2"
          )}
        >
          <div className="grid grid-cols-[1fr_auto_1fr] items-center max-w-7xl mx-auto gap-4">
            {/* Left nav links */}
            <div className="hidden lg:flex items-center gap-8">
              {siteConfig.navLinks.slice(0, 2).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-cream/80 hover:text-gold text-sm tracking-wide transition-colors duration-300"
                  data-cursor="hover"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Center logo */}
            <a
              href="#"
              className="font-display text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] text-gold justify-self-center"
              data-cursor="hover"
            >
              ROASTORY
            </a>

            {/* Right nav + CTA */}
            <div className="flex items-center justify-end gap-3 md:gap-4">
              <div className="hidden lg:flex items-center gap-8 mr-2">
                {siteConfig.navLinks.slice(2).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-cream/80 hover:text-gold text-sm tracking-wide transition-colors duration-300"
                    data-cursor="hover"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <button
                onClick={toggleTheme}
                className="hidden md:flex p-2 rounded-full text-cream/80 hover:text-gold transition-colors"
                aria-label="Toggle theme"
                data-cursor="hover"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <a
                href="#featured"
                className="hidden sm:inline-flex items-center px-5 py-2.5 bg-cream text-espresso text-sm font-semibold rounded-full hover:bg-gold transition-colors duration-300"
                data-cursor="hover"
              >
                Shop Now
              </a>

              <a
                href="#featured"
                className="hidden md:inline-flex items-center justify-center w-10 h-10 bg-cream text-espresso rounded-full hover:bg-gold transition-colors duration-300"
                aria-label="Shop Now"
                data-cursor="hover"
              >
                <ArrowUpRight size={18} />
              </a>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 text-cream"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-espresso-dark/95 backdrop-blur-xl"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-espresso p-8 pt-24"
            >
              <div className="flex flex-col gap-8">
                {siteConfig.navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-2xl font-display tracking-wider text-cream hover:text-gold transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
