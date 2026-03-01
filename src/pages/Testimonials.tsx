import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Historias de Clientes | Viajes La Corona</title>
        <meta
          name="description"
          content="Lee lo que nuestros clientes tienen que decir sobre sus experiencias de viaje de lujo."
        />
      </Helmet>
      <section className="pt-40 pb-32 min-h-screen relative flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-medium mb-6"
          >
            Historias de <span className="text-gradient-coral italic">Clientes</span>
          </motion.h1>
          <p className="text-xl text-offwhite/70">
            Próximamente. Las voces detrás de nuestros viajes inolvidables.
          </p>
        </div>
      </section>
    </>
  );
}
