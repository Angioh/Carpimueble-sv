import { contact, whatsappMessage } from "../data/content";
import { FaWhatsapp } from "react-icons/fa";

export default function CTASection() {
  const waHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="bg-[#112A3A] py-14">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="text-xl md:text-2xl  text-white max-w-md">
            ¿Tienes un espacio que quieres aprovechar al máximo?
          </h2>
          <p className="mt-2 text-white/70 text-sm max-w-md">
            Escríbenos hoy mismo, compártenos tu idea y te enviaremos una
            estimación sin compromiso.
          </p>
        </div>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-forest-500 hover:bg-forest-600 text-white font-semibold px-6 py-4 rounded-md transition-colors shrink-0"
        >
          <FaWhatsapp size={25} />
          <span className="text-left leading-tight text-sm">
            Habla por WhatsApp
            <br />
            con nosotros
          </span>
        </a>
      </div>
    </section>
  );
}
