import { Link } from "react-router-dom";
import {
  Compass,
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ocean-light/50 backdrop-blur-3xl border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-[500px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-turquoise/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <Compass className="w-8 h-8 text-gold transition-transform duration-500 group-hover:rotate-45" />
              <span className="font-serif text-2xl font-semibold tracking-wide text-offwhite">
                La Corona
              </span>
            </Link>
            <p className="text-offwhite/70 leading-relaxed">
              Curando viajes inolvidables y experiencias de viaje premium para
              el explorador exigente. Tu próxima aventura te espera.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-offwhite/80 hover:bg-gold hover:text-ocean transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-offwhite/80 hover:bg-gold hover:text-ocean transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-offwhite/80 hover:bg-gold hover:text-ocean transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-medium mb-6 text-gold">
              Explorar
            </h4>
            <ul className="space-y-4">
              {[
                "Destinos",
                "Paquetes",
                "Experiencias",
                "Nosotros",
                "Blog",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "")}`}
                    className="text-offwhite/70 hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif text-xl font-medium mb-6 text-gold">
              Soporte
            </h4>
            <ul className="space-y-4">
              {[
                "Preguntas Frecuentes",
                "Contacto",
                "Planificador de Viajes",
                "Testimonios",
                "Política de Privacidad",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/ /g, "")}`}
                    className="text-offwhite/70 hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-medium mb-6 text-gold">
              Contáctanos
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-offwhite/70">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>
                  Lorem ipsum dolor sit amet,
                  <br />
                  consectetur adipiscing elit.
                </span>
              </li>
              <li className="flex items-center gap-3 text-offwhite/70">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>Lorem ipsum</span>
              </li>
              <li className="flex items-center gap-3 text-offwhite/70">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>lorem@ipsum.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-offwhite/50">
          <p>
            &copy; {new Date().getFullYear()} Viajes La Corona. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-gold transition-colors">
              Términos de Servicio
            </Link>
            <Link to="/privacy" className="hover:text-gold transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
