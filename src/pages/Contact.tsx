import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Send, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { cn } from "../lib/utils";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call (Supabase ready)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <>
      <Helmet>
        <title>Contáctanos | Viajes La Corona</title>
        <meta
          name="description"
          content="Ponte en contacto con nuestros conserjes de viajes de lujo para comenzar a planificar tu próximo viaje inolvidable."
        />
      </Helmet>

      <section className="pt-40 pb-32 min-h-screen relative overflow-hidden">
        {/* Parallax Background */}
        <motion.div className="absolute inset-0 z-0 scale-110" style={{ y: y1 }}>
          <div className="absolute inset-0 bg-ocean/80 backdrop-blur-[2px] z-10" />
          <img
            src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Office"
            className="w-full h-[120%] object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Background Elements */}
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gold/10 blur-[150px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-turquoise/10 blur-[150px] pointer-events-none animate-blob" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6">
              Comencemos a{" "}
              <span className="text-gradient-gold italic animate-gradient bg-[length:200%_auto]">Planificar</span>
            </h1>
            <p className="text-xl text-offwhite/70 max-w-2xl mx-auto">
              Nuestros conserjes de viajes están listos para crear tu itinerario a medida.
              Contáctanos para comenzar el viaje.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="glass p-10 rounded-[2rem] h-full flex flex-col justify-center gap-12 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div>
                  <h3 className="text-3xl font-serif font-medium mb-8 text-gold">
                    Ponte en Contacto
                  </h3>
                  <p className="text-offwhite/70 mb-12 leading-relaxed">
                    Ya sea que tengas un destino específico en mente o necesites
                    inspiración, nuestro equipo está aquí para guiarte en cada paso del
                    camino.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Sede Principal</h4>
                      <p className="text-offwhite/60">
                        Lorem ipsum dolor sit amet,
                        <br />
                        consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">
                        Mesa de Conserjería
                      </h4>
                      <p className="text-offwhite/60">
                        Lorem ipsum
                        <br />
                        Lorem ipsum
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">
                        Consultas por Correo
                      </h4>
                      <p className="text-offwhite/60">
                        lorem@ipsum.com
                        <br />
                        lorem@ipsum.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-7 relative"
            >
              <div className="glass p-10 md:p-14 rounded-[2rem] relative overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500">
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      onSubmit={handleSubmit}
                      className="space-y-6 relative z-10"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium text-offwhite/70 ml-2"
                          >
                            Nombre Completo
                          </label>
                          <input
                            required
                            type="text"
                            id="name"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-offwhite placeholder:text-offwhite/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all duration-300"
                            placeholder="Juan Pérez"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium text-offwhite/70 ml-2"
                          >
                            Correo Electrónico
                          </label>
                          <input
                            required
                            type="email"
                            id="email"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-offwhite placeholder:text-offwhite/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all duration-300"
                            placeholder="juan@ejemplo.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="phone"
                            className="text-sm font-medium text-offwhite/70 ml-2"
                          >
                            Número de Teléfono
                          </label>
                          <input
                            required
                            type="tel"
                            id="phone"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-offwhite placeholder:text-offwhite/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all duration-300"
                            placeholder="Lorem ipsum"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="destination"
                            className="text-sm font-medium text-offwhite/70 ml-2"
                          >
                            Destino de Interés
                          </label>
                          <input
                            type="text"
                            id="destination"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-offwhite placeholder:text-offwhite/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all duration-300"
                            placeholder="ej., Maldivas, Alpes Suizos"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="budget"
                            className="text-sm font-medium text-offwhite/70 ml-2"
                          >
                            Rango de Presupuesto
                          </label>
                          <select
                            id="budget"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-offwhite focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all duration-300 appearance-none"
                          >
                            <option value="" className="bg-ocean text-offwhite">
                              Selecciona un rango
                            </option>
                            <option
                              value="5k-10k"
                              className="bg-ocean text-offwhite"
                            >
                              $5,000 - $10,000
                            </option>
                            <option
                              value="10k-25k"
                              className="bg-ocean text-offwhite"
                            >
                              $10,000 - $25,000
                            </option>
                            <option
                              value="25k-50k"
                              className="bg-ocean text-offwhite"
                            >
                              $25,000 - $50,000
                            </option>
                            <option
                              value="50k+"
                              className="bg-ocean text-offwhite"
                            >
                              $50,000+
                            </option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="dates"
                            className="text-sm font-medium text-offwhite/70 ml-2"
                          >
                            Fechas Estimadas de Viaje
                          </label>
                          <input
                            type="text"
                            id="dates"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-offwhite placeholder:text-offwhite/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all duration-300"
                            placeholder="ej., Octubre 2024"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-offwhite/70 ml-2"
                        >
                          Mensaje / Peticiones Especiales
                        </label>
                        <textarea
                          required
                          id="message"
                          rows={4}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-offwhite placeholder:text-offwhite/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all duration-300 resize-none"
                          placeholder="Cuéntanos sobre tu viaje de ensueño..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                          "w-full py-5 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-500",
                          isSubmitting
                            ? "bg-white/10 text-offwhite/50 cursor-not-allowed"
                            : "bg-gradient-to-r from-gold to-gold-light text-ocean hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transform hover:-translate-y-1",
                        )}
                      >
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-2 border-offwhite/30 border-t-offwhite rounded-full animate-spin" />
                        ) : (
                          <>
                            Enviar Solicitud <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 z-20 bg-ocean/40 backdrop-blur-sm"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.2,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(52,211,153,0.5)]"
                      >
                        <CheckCircle2 className="w-12 h-12 text-white" />
                      </motion.div>
                      <h3 className="text-4xl font-serif font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold animate-gradient bg-[length:200%_auto]">
                        Solicitud Recibida
                      </h3>
                      <p className="text-xl text-offwhite/80 max-w-md">
                        Gracias por elegir Viajes La Corona. Uno de nuestros
                        conserjes de viajes de lujo se pondrá en contacto contigo dentro de las 24
                        horas para comenzar a crear tu itinerario.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
