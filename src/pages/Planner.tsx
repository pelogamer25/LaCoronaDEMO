import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Planner() {
  return (
    <>
      <Helmet>
        <title>Planificador de Viajes | Viajes La Corona</title>
        <meta
          name="description"
          content="Diseña tus vacaciones de lujo soñadas con nuestro planificador de viajes personalizado."
        />
      </Helmet>
      <section className="pt-40 pb-32 min-h-screen relative flex items-center justify-center">
        <div className="text-center max-w-3xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-medium mb-6"
          >
            Diseña Tu <span className="text-gradient-gold italic">Sueño</span>
          </motion.h1>
          <p className="text-xl text-offwhite/70 mb-10">
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
        </div>
      </section>
    </>
  );
}
