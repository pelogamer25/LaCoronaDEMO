import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function About() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <>
      <Helmet>
        <title>Nosotros | Viajes La Corona</title>
        <meta
          name="description"
          content="Conoce a los visionarios detrás de Viajes La Corona."
        />
      </Helmet>
      <section className="pt-40 pb-32 min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div className="absolute inset-0 z-0 scale-110" style={{ y: y1 }}>
          <div className="absolute inset-0 bg-ocean/70 backdrop-blur-[1px] z-10" />
          <img
            src="https://images.unsplash.com/photo-1542314831-c6a4d14eff50?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Hotel"
            className="w-full h-[120%] object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[30%] left-[20%] w-72 h-72 bg-gold/10 rounded-full blur-[100px] animate-blob" />
          <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-turquoise/10 rounded-full blur-[120px] animate-blob" style={{ animationDelay: "2s" }} />
        </div>

        <div className="text-center max-w-3xl mx-auto px-6 relative z-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-medium mb-6"
          >
            Nuestra <span className="text-gradient-gold italic animate-gradient bg-[length:200%_auto]">Historia</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-offwhite/80 leading-relaxed glass p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            Fundada en la creencia de que viajar debe ser transformador, Viajes
            La Corona es una agencia boutique dedicada a crear los viajes más
            exclusivos del mundo. Combinamos un profundo conocimiento local con
            un lujo sin compromisos para ofrecer experiencias que perduran mucho
            después de regresar a casa.
          </motion.p>
        </div>
      </section>
    </>
  );
}
