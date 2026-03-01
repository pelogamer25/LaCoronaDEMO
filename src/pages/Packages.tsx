import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Packages() {
  return (
    <>
      <Helmet>
        <title>Premium Packages | Viajes La Corona</title>
        <meta
          name="description"
          content="Discover our signature luxury travel packages."
        />
      </Helmet>
      <section className="pt-40 pb-32 min-h-screen relative flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-medium mb-6"
          >
            Signature{" "}
            <span className="text-gradient-gold italic">Packages</span>
          </motion.h1>
          <p className="text-xl text-offwhite/70">
            Coming soon. Unveiling our curated itineraries.
          </p>
        </div>
      </section>
    </>
  );
}
