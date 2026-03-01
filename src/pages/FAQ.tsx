import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { cn } from "../lib/utils";

const faqs = [
  {
    question: "¿Cómo reservar un viaje con Viajes La Corona?",
    answer:
      "Reservar con nosotros es sencillo y personalizado. Puedes comenzar completando nuestro formulario de Planificador de Viajes Personalizado, o contactarnos directamente por WhatsApp o correo electrónico. Nuestros conserjes de viaje programarán una consulta para diseñar tu itinerario a medida.",
  },
  {
    question: "¿Qué destinos están disponibles?",
    answer:
      "Nos especializamos en destinos globales premium que incluyen las Maldivas, Santorini, la Costa Amalfitana, Bali, los Alpes Suizos y safaris exclusivos en África. Sin embargo, nuestra red nos permite organizar experiencias en prácticamente cualquier parte del mundo.",
  },
  {
    question: "¿Ofrecen paquetes de viaje personalizados?",
    answer:
      "Sí, absolutamente. Aunque ofrecemos paquetes exclusivos seleccionados, nuestra principal experiencia radica en diseñar experiencias de viaje 100% personalizadas adaptadas a tus intereses específicos, ritmo y preferencias de lujo.",
  },
  {
    question: "¿Qué métodos de pago se aceptan?",
    answer:
      "Aceptamos todas las principales tarjetas de crédito (Visa, MasterCard, American Express), transferencias bancarias y pagos selectos con criptomonedas para reservas premium. Todas las transacciones se procesan de forma segura.",
  },
  {
    question: "¿Está incluido el seguro de viaje?",
    answer:
      "El seguro de viaje básico está incluido en nuestros paquetes Platinum y Diamond. Para otras reservas, recomendamos encarecidamente y podemos facilitar un seguro de viaje premium integral adaptado a tu itinerario específico.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // JSON-LD Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Preguntas Frecuentes | Viajes La Corona</title>
        <meta
          name="description"
          content="Encuentra respuestas a preguntas comunes sobre la reserva de viajes de lujo, paquetes personalizados, destinos y más con Viajes La Corona."
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="pt-40 pb-32 min-h-screen relative">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-ocean-light/40 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6">
              Preguntas{" "}
              <span className="text-gradient-gold italic">Frecuentes</span>
            </h1>
            <p className="text-xl text-offwhite/70">
              Todo lo que necesitas saber sobre tu próximo viaje de lujo.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <h2 className="text-xl font-serif font-medium text-offwhite group-hover:text-gold transition-colors pr-8">
                    {faq.question}
                  </h2>
                  <ChevronDown
                    className={cn(
                      "w-6 h-6 text-gold shrink-0 transition-transform duration-500",
                      openIndex === index ? "rotate-180" : "",
                    )}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 pt-2 text-offwhite/70 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 text-center p-12 glass rounded-[2rem]"
          >
            <h3 className="text-2xl font-serif font-medium mb-4">
              ¿Aún tienes preguntas?
            </h3>
            <p className="text-offwhite/70 mb-8">
              Nuestros conserjes de viajes de lujo están disponibles 24/7 para asistirte.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-light text-ocean font-semibold hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300"
            >
              Contactar Soporte
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
