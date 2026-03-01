import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Destinations() {
  return (
    <>
      <Helmet>
        <title>Destinos | Viajes La Corona</title>
        <meta
          name="description"
          content="Explora nuestra lista curada de destinos globales premium."
        />
      </Helmet>
      <section className="pt-40 pb-32 min-h-screen relative flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-medium mb-6"
          >
            Explorar{" "}
            <span className="text-gradient-turquoise italic">Destinos</span>
          </motion.h1>
          <p className="text-xl text-offwhite/70">
            Próximamente. Curando los lugares más exclusivos del mundo.
          </p>
        </div>
      </section>
    </>
  );
}
