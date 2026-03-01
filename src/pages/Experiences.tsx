import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Experiences() {
  return (
    <>
      <Helmet>
        <title>Experiencias Únicas | Viajes La Corona</title>
        <meta
          name="description"
          content="Experiencias de viaje inmersivas y únicas en la vida."
        />
      </Helmet>
      <section className="pt-40 pb-32 min-h-screen relative flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-medium mb-6"
          >
            Experiencias{" "}
            <span className="text-gradient-coral italic">Curadas</span>
          </motion.h1>
          <p className="text-xl text-offwhite/70">
            Próximamente. Diseñando momentos que te dejarán sin aliento.
          </p>
        </div>
      </section>
    </>
  );
}
