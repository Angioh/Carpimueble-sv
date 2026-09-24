import { Home, Drill } from "lucide-react";
import { processSteps } from "../data/content";
import { FaWhatsapp } from "react-icons/fa";

const icons = { whatsapp: FaWhatsapp, home: Home, drill: Drill };

export default function Process() {
  return (
    <section id="proceso" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center text-[#2E3A46]">
          Así es nuestro proceso
        </h2>

        <div className="mt-14 relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {/* Línea punteada de conexión (solo desktop) */}
          <div className="hidden md:block absolute top-8 left-[16.5%] right-[16.5%] border-t-2 border-dashed border-[#74808d]" />

          {processSteps.map((step) => {
            const Icon = icons[step.icon];
            return (
              <div
                key={step.number}
                className="relative text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#cbe0f7] border border-[#aabccf] flex items-center justify-center relative z-10">
                  <Icon
                    className="text-[#2E3A46]"
                    size={26}
                    strokeWidth={1.75}
                  />
                  <span className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-[#2E3A46] text-white text-xs font-semibold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-5 font-display font-semibold text-[#2E3A46]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[#465769] max-w-[220px]">
                  {step.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
