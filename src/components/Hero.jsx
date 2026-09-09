import { contact, whatsappMessage } from "../data/content";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const waHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="top" className="relative">
      <div
        className="min-h-[520px] md:min-h-[600px] bg-[#112A3A] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/images/hero carpi.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
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
              className="inline-flex items-center gap-2 bg-forest-500 hover:bg-forest-600 text-white font-semibold px-6 py-3.5 rounded-md mt-7 transition-colors"
            >
              Cotiza tu mueble por WhatsApp <FaWhatsapp size={25} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
