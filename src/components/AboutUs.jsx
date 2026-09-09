import { Users, Hammer, ShieldCheck } from "lucide-react";
import { storyPoints } from "../data/content";

const icons = { users: Users, hammer: Hammer, shield: ShieldCheck };

export default function AboutUs() {
  return (
    <section id="historia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.15em] text-[#5b7896] uppercase">
            Quienes somos
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl  text-[#2E3A46] leading-snug">
            Transformamos espacios con diseño, calidad y atención al detalle.
          </h2>
          <p className="mt-4 text-[#465769] leading-relaxed">
            Nos apasiona transformar espacios con muebles a medida. Trabajamos
            sin intermediarios para ofrecerte un trato transparente, materiales
            seleccionados y acabados impecables en cada proyecto.
          </p>

          <ul className="mt-7 space-y-5">
            {storyPoints.map((point) => {
              const Icon = icons[point.icon];
              return (
                <li key={point.title} className="flex items-start gap-3">
                  <Icon
                    className="text-[#2E3A46] shrink-0 mt-0.5"
                    size={20}
                    strokeWidth={1.75}
                  />
                  <div>
                    <p className="font-medium text-[#2E3A46]">{point.title}</p>
                    <p className="text-sm text-[#465769]">{point.subtitle}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="mt-7 font-display italic text-[#2E3A46]">
            — Carpimueble SV
          </p>
        </div>

        <div
          className="h-96 rounded-xl bg-[#112A3A] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ABOUT.webp')" }}
        />
      </div>
    </section>
  );
}
