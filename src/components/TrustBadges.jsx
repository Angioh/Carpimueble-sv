import { Truck, Ruler, ShieldCheck } from "lucide-react";
import { trustBadges } from "../data/content";

const icons = { truck: Truck, ruler: Ruler, shield: ShieldCheck };

export default function TrustBadges() {
  return (
    <section className="bg-[#cbe0f7] py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {trustBadges.map((badge) => {
          const Icon = icons[badge.icon];
          return (
            <div
              key={badge.title}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              <Icon
                className="text-[#2E3A46] shrink-0"
                size={26}
                strokeWidth={1.75}
              />
              <p className="text-sm text-[#2E3A46] leading-snug">
                <span className="block font-medium">{badge.title}</span>
                <span className="block">{badge.subtitle}</span>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
