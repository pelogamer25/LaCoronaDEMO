import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Experiences() {
  return (
    <>
      <Helmet>
        <title>Unique Experiences | Viajes La Corona</title>
        <meta
          name="description"
          content="Immersive, once-in-a-lifetime travel experiences."
        />
      </Helmet>
      <section className="pt-40 pb-32 min-h-screen relative flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-medium mb-6"
          >
            Curated{" "}
            <span className="text-gradient-coral italic">Experiences</span>
          </motion.h1>
          <p className="text-xl text-offwhite/70">
            Coming soon. Designing moments that take your breath away.
          </p>
        </div>
      </section>
    </>
  );
}
