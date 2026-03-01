import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Planner() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <>
      <Helmet>
        <title>Planificador de Viajes | Viajes La Corona</title>
        <meta
          name="description"
          content="Diseña tus vacaciones de lujo soñadas con nuestro planificador de viajes personalizado."
        />
      </Helmet>
      <section className="pt-40 pb-32 min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div className="absolute inset-0 z-0 scale-110" style={{ y: y1 }}>
          <div className="absolute inset-0 bg-ocean/70 backdrop-blur-[2px] z-10" />
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
            alt="Trip Planner"
            className="w-full h-[120%] object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[20%] w-80 h-80 bg-turquoise/20 rounded-full blur-[100px] animate-blob" />
          <div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-gold/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
        </div>

        <div className="text-center max-w-3xl mx-auto px-6 relative z-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-medium mb-6"
          >
            Diseña Tu <span className="text-gradient-gold italic animate-gradient bg-[length:200%_auto]">Sueño</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            <p className="text-xl text-offwhite/80 mb-10">
              Nuestro planificador de viajes interactivo está siendo perfeccionado para ofrecerte
              la experiencia más fluida. Mientras tanto, nuestros conserjes están
              listos para asistirte personalmente.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-light text-ocean font-semibold hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Contactar a un Conserje <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
