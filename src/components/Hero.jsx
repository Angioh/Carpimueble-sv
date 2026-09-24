import { contact, whatsappMessage } from "../data/content";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const waHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="top" className="relative">
      <div className="relative min-h-[520px] md:min-h-[600px] bg-[#112A3A] flex items-center overflow-hidden">
        <img
          src="/images/hero carpi.webp"
          alt="Muebles a medida para el hogar en El Salvador - Carpimueble SV"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/30 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              Muebles a medida creados con dedicación para tu hogar en El
              Salvador.
            </h1>
            <p className="mt-5 text-white/85 text-base md:text-lg">
              Diseñamos y fabricamos salas, closets y mobiliario exclusivo con
              entrega e instalación en todo el país.
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cotiza tu mueble por WhatsApp"
              className="inline-flex items-center gap-2 bg-forest-500 hover:bg-forest-600 text-white font-display font-semibold px-6 py-3.5 rounded-md mt-7 transition-colors"
            >
              Cotiza tu mueble por WhatsApp <FaWhatsapp size={25} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
