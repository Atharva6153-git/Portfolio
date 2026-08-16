import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "How I Build", href: "#achievements" },
  { label: "Experience", href: "#experience" },
  { label: "GitHub", href: "#github" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const menuButtonRef = useRef(null);
  const firstNavItemRef = useRef(null);

  // Throttled scroll listener — only recalculates once per frame
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape key closes menu; restore focus to trigger
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Move focus into menu when it opens
  useEffect(() => {
    if (open) {
      // small timeout lets AnimatePresence mount the element first
      const t = setTimeout(() => firstNavItemRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Prevent background scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    menuButtonRef.current?.focus();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ${
          scrolled
            ? "bg-[hsl(var(--background))]/80 backdrop-blur-md md:backdrop-blur-xl mobile-lite-blur border-b border-[hsl(var(--border))]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
          <button
            onClick={() => handleNav("#home")}
            className="text-sm font-semibold tracking-tight text-[hsl(var(--foreground))] hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] rounded min-h-[44px] min-w-[44px] px-2 -ml-2 flex items-center"
          >
            Atharva Jadhav
          </button>

          <div className="flex items-center gap-2">
            {/* Theme toggle — 44×44 touch target */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="relative w-11 h-11 rounded-full flex items-center justify-center border border-[hsl(var(--border))] hover:border-[hsl(var(--foreground))]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.span
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute"
                    aria-hidden="true"
                  >
                    <Moon className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute"
                    aria-hidden="true"
                  >
                    <Sun className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Menu toggle */}
            <button
              ref={menuButtonRef}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="flex items-center justify-center gap-2 px-3 py-2 min-h-[44px] min-w-[44px] rounded-full hover:bg-[hsl(var(--muted))] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
            >
              <span className="text-sm lowercase" aria-hidden="true">menu</span>
              {open ? <X className="w-4 h-4" aria-hidden="true" /> : <Menu className="w-4 h-4" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[hsl(var(--background))]/95 backdrop-blur-md md:backdrop-blur-xl flex items-center justify-center"
          >
            <nav id="mobile-nav" aria-label="Main navigation" className="flex flex-col items-center gap-6">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.href}
                  ref={idx === 0 ? firstNavItemRef : undefined}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.06, duration: 0.35 }}
                  onClick={() => handleNav(link.href)}
                  className="text-4xl md:text-6xl font-bold tracking-tight text-[hsl(var(--foreground))] hover:text-[hsl(var(--foreground))]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] rounded px-2 min-h-[44px] flex items-center justify-center"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
