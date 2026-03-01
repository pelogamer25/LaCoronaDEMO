import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Diario de Viaje | Viajes La Corona</title>
        <meta
          name="description"
          content="Perspectivas, guías e inspiración de nuestros expertos en viajes."
        />
      </Helmet>
      <section className="pt-40 pb-32 min-h-screen relative flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-medium mb-6"
          >
            El <span className="text-gradient-turquoise italic">Diario</span>
          </motion.h1>
          <p className="text-xl text-offwhite/70">
            Próximamente. Relatos de los rincones más hermosos del mundo.
          </p>
        </div>
      </section>
    </>
  );
}
