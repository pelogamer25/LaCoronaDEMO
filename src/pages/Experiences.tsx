import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Experiences() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <>
      <Helmet>
        <title>Experiencias Únicas | Viajes La Corona</title>
        <meta
          name="description"
          content="Experiencias de viaje inmersivas y únicas en la vida."
        />
      </Helmet>
      <section className="pt-40 pb-32 min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div className="absolute inset-0 z-0 scale-110" style={{ y: y1 }}>
          <div className="absolute inset-0 bg-ocean/60 backdrop-blur-[2px] z-10" />
          <img
            src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=2070&auto=format&fit=crop"
            alt="Unique Experiences"
            className="w-full h-[120%] object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[30%] w-80 h-80 bg-coral/20 rounded-full blur-[100px] animate-blob" />
          <div className="absolute bottom-[20%] left-[30%] w-72 h-72 bg-gold/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
        </div>

        <div className="text-center relative z-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-medium mb-6"
          >
            Experiencias{" "}
            <span className="text-gradient-coral italic animate-gradient bg-[length:200%_auto]">Curadas</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-offwhite/80 glass p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] inline-block"
          >
            Próximamente. Diseñando momentos que te dejarán sin aliento.
          </motion.p>
        </div>
      </section>
    </>
  );
}
