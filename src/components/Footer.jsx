import { Clock } from "lucide-react";
import { contact } from "../data/content";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#112A3A] text-white/80 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/public/images/Logo.webp"
              className="h-10 w-15 rounded-sm flex items-center justify-center"
              alt="Carpimueble SV Logo"
            />
            <div className="leading-tight">
              <p className="font-display font-semibold tracking-wide text-white text-sm">
                CARPIMUEBLE SV
              </p>
              <p className="text-[10px] tracking-[0.2em] text-white/40">
                DISEÑO Y CALIDAD
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
            Muebles a medida diseñados y fabricados para transformar tu hogar.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white mb-3">Horario</p>
          <div className="flex gap-2 text-sm text-white/60 mt-3">
            <Clock size={16} className="shrink-0 mt-0.5" />
            <div>
              {contact.hours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white mb-3">
            Síguenos en redes sociales
          </p>
          <div className="flex gap-3">
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href={contact.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Franja Inferior: Copyright + Enlaces Legales */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <p>
          © {new Date().getFullYear()} Carpimueble SV. Todos los derechos
          reservados.
        </p>

        <div className="flex items-center gap-4 text-white/60">
          <Link
            to="/privacidad"
            className="hover:text-white transition-colors hover:underline"
          >
            Política de Privacidad
          </Link>
          <span>•</span>
          <Link
            to="/politica-cookies"
            className="hover:text-white transition-colors hover:underline"
          >
            Política de Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
