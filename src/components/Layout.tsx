import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import { useEffect } from "react";

export default function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-ocean text-offwhite font-sans selection:bg-gold/30 selection:text-gold-light">
      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-turquoise/5 blur-[150px] animate-blob" />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-coral/5 blur-[150px] animate-blob"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-gold/5 blur-[120px] animate-blob"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <Navbar />

      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
