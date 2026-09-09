import { useEffect, useState } from "react";
import { contact, whatsappMessage } from "../data/content";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [showButton, setShowButton] = useState(false);

  const waHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  useEffect(() => {
    const hero = document.getElementById("top");

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButton(!entry.isIntersecting);
      },
      {
        threshold: 0,
      },
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!showButton) return null;

  return (
    <a
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        w-14
        h-14
        rounded-full
        bg-forest-500
        hover:bg-forest-600
        text-white
        flex
        items-center
        justify-center
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
      "
    >
      <FaWhatsapp className="size-8" />
    </a>
  );
}
