import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  Star,
  Shield,
  Globe,
  Heart,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <>
      <Helmet>
        <title>
          Viajes La Corona | Agencia de Viajes de Lujo y Experiencias a Medida
        </title>
        <meta
          name="description"
          content="Descubre viajes inolvidables con Viajes La Corona. Paquetes de viaje premium, viajes personalizados y destinos exóticos hechos a tu medida."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
          <div className="absolute inset-0 bg-ocean/40 backdrop-blur-[2px] z-10" />
          <img
            src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Coastal View"
            className="w-full h-[120%] object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-20 text-center mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-6 leading-tight"
          >
            Descubre Tu Próximo <br />
            <span className="text-gradient-gold italic pr-2">
              Inolvidable
            </span>{" "}
            Viaje
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-2xl text-offwhite/80 max-w-3xl mx-auto mb-12 font-light"
          >
            Experiencias de viaje de lujo curadas, paquetes personalizados y destinos exóticos diseñados exclusivamente para el explorador exigente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/planner"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-light text-ocean font-semibold text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              Planifica tu Viaje <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/destinations"
              className="px-8 py-4 rounded-full glass text-offwhite font-medium text-lg hover:bg-white/10 transition-all duration-300"
            >
              Explorar Destinos
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-sm tracking-widest uppercase text-offwhite/50 font-medium">
            Desplazar
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent" />
        </motion.div>
      </section>

      {/* Booking Mini-Form (Floating) */}
      <section className="relative z-30 -mt-24 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto"
        >
          <div className="flex-1 w-full flex items-center gap-4 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-6">
            <MapPin className="w-6 h-6 text-gold shrink-0" />
            <div className="flex flex-col w-full">
              <span className="text-xs text-offwhite/50 uppercase tracking-wider font-semibold">
                Destino
              </span>
              <input
                type="text"
                placeholder="¿A dónde?"
                className="bg-transparent border-none outline-none text-offwhite placeholder:text-offwhite/30 font-medium text-lg w-full focus:ring-0 p-0"
              />
            </div>
          </div>
          <div className="flex-1 w-full flex items-center gap-4 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-6">
            <Calendar className="w-6 h-6 text-gold shrink-0" />
            <div className="flex flex-col w-full">
              <span className="text-xs text-offwhite/50 uppercase tracking-wider font-semibold">
                Fecha
              </span>
              <input
                type="text"
                placeholder="¿Cuándo?"
                className="bg-transparent border-none outline-none text-offwhite placeholder:text-offwhite/30 font-medium text-lg w-full focus:ring-0 p-0"
              />
            </div>
          </div>
          <div className="flex-1 w-full flex items-center gap-4 pb-4 md:pb-0">
            <Users className="w-6 h-6 text-gold shrink-0" />
            <div className="flex flex-col w-full">
              <span className="text-xs text-offwhite/50 uppercase tracking-wider font-semibold">
                Huéspedes
              </span>
              <input
                type="text"
                placeholder="¿Cuántos?"
                className="bg-transparent border-none outline-none text-offwhite placeholder:text-offwhite/30 font-medium text-lg w-full focus:ring-0 p-0"
              />
            </div>
          </div>
          <button className="w-full md:w-auto px-8 py-4 rounded-xl bg-turquoise text-ocean font-semibold hover:bg-turquoise-light transition-colors shrink-0">
            Buscar
          </button>
        </motion.div>
      </section>

      {/* Featured Destinations */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
                Destinos{" "}
                <span className="text-gradient-turquoise italic">
                  Populares
                </span>
              </h2>
              <p className="text-offwhite/70 text-lg">
                Sumérgete en los lugares más impresionantes del mundo.
                Seleccionados a mano para la mejor experiencia de lujo.
              </p>
            </div>
            <Link
              to="/destinations"
              className="text-gold hover:text-gold-light font-medium flex items-center gap-2 group transition-colors"
            >
              Ver Todos{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Horizontal Scroll Gallery */}
        <div className="flex gap-6 overflow-x-auto pb-12 px-6 md:px-12 snap-x snap-mandatory hide-scrollbar">
          {[
            {
              name: "Santorini, Grecia",
              image:
                "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1000&auto=format&fit=crop",
              price: "Desde $2,400",
            },
            {
              name: "Bali, Indonesia",
              image:
                "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
              price: "Desde $1,800",
            },
            {
              name: "Maldivas",
              image:
                "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop",
              price: "Desde $3,200",
            },
            {
              name: "Costa Amalfitana, Italia",
              image:
                "https://images.unsplash.com/photo-1612278675615-7b093b07772d?q=80&w=1000&auto=format&fit=crop",
              price: "Desde $2,900",
            },
          ].map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="min-w-[300px] md:min-w-[400px] h-[500px] rounded-3xl overflow-hidden relative group snap-center cursor-pointer"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean/90 via-ocean/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-serif font-medium mb-2">
                  {dest.name}
                </h3>
                <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="text-gold font-medium">{dest.price}</span>
                  <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 relative bg-ocean-light/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
              La Diferencia <span className="text-gradient-coral italic">La Corona</span>{" "}
            </h2>
            <p className="text-offwhite/70 text-lg">
              No solo planeamos viajes; creamos experiencias transformadoras
              adaptadas a tus deseos únicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Experiencia Global",
                desc: "Conocimiento interno de los destinos más exclusivos del mundo.",
              },
              {
                icon: Shield,
                title: "Seguridad Premium",
                desc: "Viaja con tranquilidad sabiendo que cada detalle está asegurado.",
              },
              {
                icon: Heart,
                title: "Atención Personalizada",
                desc: "Servicio de conserjería 24/7 dedicado a tu comodidad.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="glass-card p-10 text-center group"
              >
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-gold/20 to-coral/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-2xl font-serif font-medium mb-4">
                  {feature.title}
                </h3>
                <p className="text-offwhite/60 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-16 text-center">
            Amado por{" "}
            <span className="text-gradient-gold italic">Viajeros</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-8 rounded-3xl relative"
              >
                <div className="flex gap-1 text-gold mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-offwhite/80 text-lg italic mb-8 leading-relaxed">
                  "La atención al detalle fue impecable. Viajes La Corona
                  convirtió nuestra luna de miel en una experiencia cinematográfica que nunca
                  olvidaremos."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden">
                    <img
                      src={`https://i.pravatar.cc/150?img=${i + 10}`}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Elena Rodriguez</h4>
                    <span className="text-sm text-offwhite/50">
                      Viaje a Maldivas
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ocean to-ocean-light z-0" />
        <motion.div
          className="absolute inset-0 opacity-30 z-0"
          style={{ y: y2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
            alt="Mountains"
            className="w-full h-[150%] object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] border-white/20"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-medium mb-6">
              ¿Listo para tu Próxima <br />
              <span className="text-gradient-coral italic">Aventura?</span>
            </h2>
            <p className="text-xl text-offwhite/80 mb-10 max-w-2xl mx-auto">
              Permítenos diseñar un itinerario a medida que coincida con tus sueños más
              salvajes.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-offwhite text-ocean font-bold text-lg hover:bg-gold hover:text-ocean transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              Comenzar a Planificar <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
