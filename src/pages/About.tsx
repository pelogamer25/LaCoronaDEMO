import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Nosotros | Viajes La Corona</title>
        <meta
          name="description"
          content="Conoce a los visionarios detrás de Viajes La Corona."
        />
      </Helmet>
      <section className="pt-40 pb-32 min-h-screen relative flex items-center justify-center">
        <div className="text-center max-w-3xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-medium mb-6"
          >
            Nuestra <span className="text-gradient-gold italic">Historia</span>
          </motion.h1>
          <p className="text-xl text-offwhite/70 leading-relaxed">
            Fundada en la creencia de que viajar debe ser transformador, Viajes
            La Corona es una agencia boutique dedicada a crear los viajes más
            exclusivos del mundo. Combinamos un profundo conocimiento local con
            un lujo sin compromisos para ofrecer experiencias que perduran mucho
            después de regresar a casa.
          </p>
        </div>
      </section>
    </>
  );
}
