import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Blog() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <>
      <Helmet>
        <title>Diario de Viaje | Viajes La Corona</title>
        <meta
          name="description"
          content="Perspectivas, guías e inspiración de nuestros expertos en viajes."
        />
      </Helmet>
      <section className="pt-40 pb-32 min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div className="absolute inset-0 z-0 scale-110" style={{ y: y1 }}>
          <div className="absolute inset-0 bg-ocean/60 backdrop-blur-[2px] z-10" />
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
            alt="Travel Journal"
            className="w-full h-[120%] object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[30%] right-[20%] w-80 h-80 bg-turquoise/20 rounded-full blur-[100px] animate-blob" />
          <div className="absolute bottom-[30%] left-[20%] w-72 h-72 bg-gold/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
        </div>

        <div className="text-center relative z-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-medium mb-6"
          >
            El <span className="text-gradient-turquoise italic animate-gradient bg-[length:200%_auto]">Diario</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-offwhite/80 glass p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] inline-block"
          >
            Próximamente. Historias de los rincones más hermosos del mundo.
          </motion.p>
        </div>
      </section>
    </>
  );
}
