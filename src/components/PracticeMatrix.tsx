import { useState } from "react";
import { PRACTICE_AREAS } from "../data";
import * as LucideIcons from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function PracticeMatrix() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  // Helper to dynamically render Lucide icons
  const getIconComponent = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className="w-6 h-6 transition-all duration-300" /> : <LucideIcons.Briefcase className="w-6 h-6" />;
  };

  return (
    <section id="matrix" className="py-24 bg-white border-b border-black/[0.03] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-brand-red text-xs font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full" />
            <span>Practice Segments</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark uppercase">
            The Practice Matrix
          </h2>
          <p className="text-brand-grey text-sm leading-relaxed">
            Surgical expertise at the intersection of venture financing, complex technological IP protection, and multi-jurisdictional commerce.
          </p>
        </div>

        {/* Multi-Column Grid with Invisible Default Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/[0.04] border border-black/[0.04] rounded-2xl overflow-hidden shadow-sm">
          {PRACTICE_AREAS.map((area, idx) => {
            const isHovered = hoveredCard === area.id;
            const isSelected = selectedCard === area.id;

            return (
              <div
                key={area.id}
                onMouseEnter={() => setHoveredCard(area.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedCard(isSelected ? null : area.id)}
                className={`relative p-8 cursor-pointer transition-all duration-500 overflow-hidden ${
                  idx >= 3 ? "lg:border-t lg:border-black/[0.04]" : ""
                }`}
              >
                {/* Glowing Razor-Thin Border that traces around the card on hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      layoutId="cardGlowBorder"
                      className="absolute inset-0 border-2 border-brand-red pointer-events-none z-10 rounded-none shadow-[0_0_15px_rgba(223,46,46,0.15)]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>

                {/* Soft Light-Red Tint Background Transition */}
                <div
                  className={`absolute inset-0 bg-brand-red/[0.015] pointer-events-none transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Content Container */}
                <div className="relative z-20 space-y-6">
                  {/* Chrome metallic icon box */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isHovered
                        ? "bg-brand-red text-white shadow-lg shadow-brand-red/20 transform -translate-y-1 scale-105"
                        : "bg-brand-light text-brand-dark border border-black/[0.03]"
                    }`}
                  >
                    {getIconComponent(area.iconName)}
                  </div>

                  {/* Practice Titles */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest">
                      {area.category}
                    </span>
                    <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-red transition-colors font-sans">
                      {area.title}
                    </h3>
                  </div>

                  <p className="text-brand-grey text-xs font-normal leading-relaxed">
                    {area.description}
                  </p>

                  {/* Interactive Expandable Sub-details Indicator */}
                  <div className="pt-2 flex items-center justify-between text-xs">
                    <span className="text-[10px] font-bold text-brand-dark tracking-wider uppercase group-hover:text-brand-red">
                      {isSelected ? "Hide Structure" : "Expand Matrix Strategy"}
                    </span>
                    <motion.span
                      animate={{ rotate: isSelected ? 180 : 0 }}
                      className="text-brand-red font-bold"
                    >
                      ↓
                    </motion.span>
                  </div>

                  {/* Expandable legal details details */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="pt-4 border-t border-black/[0.05] space-y-2 text-xs text-brand-grey"
                      >
                        <ul className="space-y-1.5">
                          {area.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <span className="w-1 h-1 bg-brand-red rounded-full" />
                              <span className="font-medium text-brand-dark">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info tip */}
        <div className="mt-8 text-center">
          <p className="text-xs text-brand-grey">
            💡 Click on any card matrix to explore specific advisory and litigation items.
          </p>
        </div>

      </div>
    </section>
  );
}
