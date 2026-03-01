import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Compass } from "lucide-react";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Destinos", path: "/destinations" },
  { name: "Paquetes", path: "/packages" },
  { name: "Experiencias", path: "/experiences" },
  { name: "Nosotros", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Preguntas Frecuentes", path: "/faq" },
  { name: "Contacto", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "py-4 bg-ocean/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "py-6 bg-transparent",
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Compass className="w-8 h-8 text-gold transition-transform duration-500 group-hover:rotate-45" />
          <span className="font-serif text-2xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-offwhite via-gold to-offwhite animate-gradient bg-[length:200%_auto]">
            La Corona
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-gold relative group",
                location.pathname === link.path
                  ? "text-gold"
                  : "text-offwhite/80",
              )}
            >
              {link.name}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full",
                  location.pathname === link.path && "w-full",
                )}
              />
            </Link>
          ))}
          <Link
            to="/planner"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gold to-gold-light text-ocean font-semibold text-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Planifica tu Viaje
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-offwhite p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-ocean/95 backdrop-blur-xl border-b border-white/10 p-6 lg:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-lg font-medium py-2 border-b border-white/5",
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-offwhite/80",
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/planner"
              className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-light text-ocean font-semibold text-center hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
            >
              Planifica tu Viaje
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
