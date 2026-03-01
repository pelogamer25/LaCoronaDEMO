import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Destinations() {
  return (
    <>
      <Helmet>
        <title>Destinations | Viajes La Corona</title>
        <meta
          name="description"
          content="Explore our curated list of premium global destinations."
        />
      </Helmet>
      <section className="pt-40 pb-32 min-h-screen relative flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-medium mb-6"
          >
            Explore{" "}
            <span className="text-gradient-turquoise italic">Destinations</span>
          </motion.h1>
          <p className="text-xl text-offwhite/70">
            Coming soon. Curating the world's most exclusive locations.
          </p>
        </div>
      </section>
    </>
  );
}
