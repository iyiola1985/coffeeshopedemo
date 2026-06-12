"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { useTheme } from "@/components/providers/ThemeProvider";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

function BrandMark({ className, size = "sm" as const }: { className?: string; size?: "sm" | "md" }) {
  return (
    <a href="#" className={cn("inline-block", className)} data-cursor="hover">
      <Logo size={size} surface="dark" />
    </a>
  );
}

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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 safe-top",
          isScrolled ? "py-3" : "py-4 md:py-6"
        )}
      >
        <nav
          className={cn(
            "mx-3 sm:mx-4 md:mx-8 lg:mx-12 transition-all duration-500",
            isScrolled
              ? "glass-nav rounded-2xl px-3 sm:px-4 md:px-6 py-3"
              : "bg-transparent px-3 sm:px-4 md:px-6 py-2"
          )}
        >
          {/* Mobile & tablet bar */}
          <div className="flex lg:hidden items-center justify-between max-w-7xl mx-auto gap-3">
            <BrandMark />
            <div className="flex items-center gap-2">
              <a
                href="#featured"
                className="inline-flex items-center px-4 py-2 bg-kenya-red text-cream type-badge rounded-full hover:bg-kenya-red-light transition-colors normal-case text-[10px]"
                data-cursor="hover"
              >
                Shop
              </a>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="p-2 text-cream touch-manipulation"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Desktop bar — no logo image, text brand only */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center max-w-7xl mx-auto gap-4">
            <div className="flex items-center gap-8">
              {siteConfig.navLinks.slice(0, 2).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-cream/80 hover:text-kenya-green-light transition-colors duration-300"
                  data-cursor="hover"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <BrandMark size="md" className="justify-self-center" />

            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center gap-8 mr-2">
                {siteConfig.navLinks.slice(2).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="nav-link text-cream/80 hover:text-kenya-green-light transition-colors duration-300"
                    data-cursor="hover"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-cream/80 hover:text-gold transition-colors"
                aria-label="Toggle theme"
                data-cursor="hover"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <a
                href="#featured"
                className="inline-flex items-center px-5 py-2.5 bg-kenya-red text-cream type-perk rounded-full hover:bg-kenya-red-light transition-colors duration-300 shadow-md shadow-kenya-red/20 normal-case"
                data-cursor="hover"
              >
                Shop Now
              </a>

              <a
                href="#featured"
                className="inline-flex items-center justify-center w-10 h-10 bg-cream text-espresso rounded-full hover:bg-gold transition-colors duration-300"
                aria-label="Shop Now"
                data-cursor="hover"
              >
                <ArrowUpRight size={18} />
              </a>
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
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-espresso p-6 sm:p-8 pt-20 safe-top safe-bottom overflow-y-auto"
            >
              <BrandMark className="mb-10 text-left" />
              <div className="flex flex-col gap-6">
                {siteConfig.navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => setIsMobileOpen(false)}
                    className="type-title text-cream hover:text-kenya-green-light transition-colors py-2 touch-manipulation"
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
