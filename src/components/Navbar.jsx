// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, contact, whatsappMessage } from "../data/content";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const waHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const getTargetRoute = (href) => {
    if (href.startsWith("#")) {
      return `/${href}`; //
    }
    return `/#${href}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#112A3A] backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/Logo.webp"
            width={60}
            height={40}
            alt="CARPIMUEBLE SV"
            className="size-16 rounded-sm object-contain"
          />

          <div className="leading-tight">
            <p className="font-display font-bold tracking-wide text-white text-sm">
              CARPIMUEBLE SV
            </p>

            <p className=" text-[10px] tracking-[0.2em] text-white/70">
              DISEÑO Y CALIDAD
            </p>
          </div>
        </Link>

        {/* MENU + BOTON */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-sm font-medium text-white">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={getTargetRoute(link.href)}
                  className="hover:text-white/50 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-forest-500 hover:bg-forest-600 text-white text-sm font-display font-semibold px-5 py-2.5 rounded-md transition-colors"
          >
            Contáctanos
            <FaWhatsapp size={20} />
          </a>
        </div>

        {/* MENU MOBILE */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 border-t bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={getTargetRoute(link.href)}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-black py-1"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 bg-forest-500 text-white text-sm font-display font-semibold px-5 py-2.5 rounded-md mt-2"
          >
            Contacta con nosotros
            <FaWhatsapp size={20} />
          </a>
        </div>
      )}
    </header>
  );
}
