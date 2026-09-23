import { useEffect, useRef, useState } from "react";
import { categories } from "../data/content";
import { IoClose } from "react-icons/io5";
import { FaArrowRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Categories() {
  const [selectedImage, setSelectedImage] = useState(null);
  const carouselRef = useRef(null);

  // Cerrar el visor con ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Bloquear scroll cuando el visor está abierto
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  // Mover el carrusel
  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const card = container.querySelector("button");

    if (!card) return;

    const gap = 24;
    const cardWidth = card.offsetWidth;

    container.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <>
      <section id="catalogo" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-black">
            Mira una parte de nuestro catálogo
          </h2>
          <p className="mt-4 text-[#465769] leading-relaxed text-center">
            Puedes ver mas diseños en nuestro catálogo completo por whatsapp
          </p>

          {/* Carrusel */}
          <div className="relative mt-10">
            {/* Flecha izquierda */}
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              aria-label="Ver categorías anteriores"
              className="
                absolute
                left-0
                top-1/2
                -translate-y-1/2
                -translate-x-1/2
                z-10
                hidden
                lg:flex
                w-11
                h-11
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#2E3A46]
                shadow-lg
                border
                border-[#cbe0f7]
                hover:bg-white
                hover:scale-105
                transition-all
              "
            >
              <FaChevronLeft size={22} />
            </button>

            {/* Contenedor del carrusel */}
            <div
              ref={carouselRef}
              className="
                flex
                gap-6
                overflow-x-auto
                scroll-smooth
                snap-x
                snap-mandatory
                pb-4
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {categories.map((cat) => (
                <button
                  key={cat.title}
                  type="button"
                  onClick={() => setSelectedImage(cat)}
                  className="
                    group
                    shrink-0
                    w-[85%]
                    sm:w-[48%]
                    lg:w-[calc((100%-72px)/4)]
                    text-left
                    rounded-xl
                    overflow-hidden
                    border
                    border-[#cbe0f7]
                    bg-white
                    hover:shadow-lg
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#cbe0f7]
                    snap-start
                  "
                >
                  {/* Imagen */}
                  <div className="h-56 overflow-hidden bg-[#cbe0f7]">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      loading="lazy"
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* Información */}
                  <div className="p-5 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-[#2E3A46]">
                        {cat.title}
                      </h3>

                      <p className="text-sm text-[#2E3A46] mt-1">
                        {cat.subtitle}
                      </p>
                    </div>

                    <FaArrowRight
                      size={18}
                      className="
                        mt-1
                        shrink-0
                        text-[#2E3A46]
                        group-hover:text-[#2E3A46]
                        group-hover:translate-x-1
                        transition-all
                      "
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Flecha derecha */}
            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              aria-label="Ver más categorías"
              className="
                absolute
                right-0
                top-1/2
                -translate-y-1/2
                translate-x-1/2
                z-10
                hidden
                lg:flex
                w-11
                h-11
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#2E3A46]
                shadow-lg
                border
                border-[#cbe0f7]
                hover:bg-white
                hover:scale-105
                transition-all
              "
            >
              <FaChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* Visor de imagen */}
      {selectedImage && (
        <div
          className="
      fixed
      inset-0
      z-[999]
      flex
      items-center
      justify-center
      bg-black/80
      backdrop-blur-sm
      p-4
      md:p-8
    "
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-full max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagen grande */}
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="
          max-w-full
          max-h-[85vh]
          object-contain
          rounded-lg
          shadow-2xl
          block
        "
            />

            {/* Botón cerrar */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar imagen"
              className="
          absolute
          top-3
          right-3
          w-10
          h-10
          flex
          items-center
          justify-center
          rounded-full
          bg-black/60
          hover:bg-black/80
          text-white
          backdrop-blur-md
          shadow-lg
          hover:scale-105
          transition-all
        "
            >
              <IoClose size={20} />
            </button>

            {/* Nombre de la categoría */}
            <div
              className="
          absolute
          bottom-4
          left-1/2
          -translate-x-1/2
          bg-black/60
          backdrop-blur-md
          text-white
          px-5
          py-2
          rounded-full
          text-sm
          whitespace-nowrap
        "
            >
              {selectedImage.title}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
