import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      if (currentSection) setActiveHash(`#${currentSection}`);
      else if (window.scrollY < 100) setActiveHash("");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveHash(href);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`transition-all duration-500 rounded-full px-2 ${
          scrolled
            ? "bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-1 py-2 px-3">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveHash("");
            }}
            className="flex items-center gap-1.5 mr-4 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-shadow">
              LM
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative px-3.5 py-1.5 rounded-full text-sm transition-colors duration-200 ${
                  activeHash === link.href
                    ? "text-white font-medium"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {activeHash === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.08]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <a
            href="/LARAIB_RESUME(2026).pdf"
            download
            className="hidden md:inline-flex items-center gap-1.5 ml-3 px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-violet-600 to-violet-500 text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-white/[0.06] transition-colors ml-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5 text-white/70" />
            ) : (
              <Menu className="h-5 w-5 text-white/70" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-x-4 top-20 md:hidden rounded-2xl bg-[#0c0c18]/95 backdrop-blur-2xl border border-white/[0.06] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                  className={`px-4 py-3 rounded-xl text-sm transition-all ${
                    activeHash === link.href
                      ? "text-white bg-white/[0.06] font-medium"
                      : "text-white/50 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="/LARAIB_RESUME(2026).pdf"
                download
                className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-violet-600 to-violet-500 text-white"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
