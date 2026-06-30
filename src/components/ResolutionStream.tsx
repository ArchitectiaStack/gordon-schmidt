import { useState, useEffect } from "react";
import { CASE_RESOLUTIONS } from "../data";
import { ShieldCheck, Calendar, Trophy, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Inline lightweight CountUp component for high fidelity numerical counts
function CountUp({ targetValue, suffix = "" }: { targetValue: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easeOutQuad pacing
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * targetValue);
      
      setDisplayValue(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(targetValue);
      }
    };

    requestAnimationFrame(animate);
  }, [targetValue]);

  // Format value into standard readable million format or similar
  const formatValue = (val: number) => {
    if (val >= 1000000) {
      return `$${(val / 1000000).toFixed(1)}M`;
    }
    return `$${val.toLocaleString()}`;
  };

  return (
    <span className="font-sans font-black text-4xl md:text-5xl tracking-tighter text-brand-red">
      {formatValue(displayValue)}
    </span>
  );
}

export default function ResolutionStream() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="resolutions" className="py-24 bg-[#F8F8FA] border-b border-black/[0.03] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title & Stats Meta */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-brand-red text-xs font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full" />
              <span>Real-Time Case Tracking</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark uppercase">
              Resolution Stream
            </h2>
            <p className="text-brand-grey text-sm leading-relaxed">
              An active ledger of our litigation successes, administrative dismissals, and corporate settlements. Real-time accountability with verified client recovery figures.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-2xl px-6 py-4 flex items-center space-x-6 self-start lg:self-auto shadow-sm">
            <div>
              <div className="text-[10px] font-bold text-brand-grey uppercase tracking-widest">
                Aggregated Recoveries
              </div>
              <div className="text-2xl font-black text-brand-dark tracking-tight">
                $148.5M+
              </div>
            </div>
            <div className="h-10 w-[1px] bg-black/10" />
            <div>
              <div className="text-[10px] font-bold text-brand-grey uppercase tracking-widest">
                Success Ratio
              </div>
              <div className="text-2xl font-black text-brand-dark tracking-tight text-emerald-600">
                98.4%
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Stream Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Timeline Feed (Lg span 7) */}
          <div className="lg:col-span-7 relative">
            {/* Continuous Vertical Crimson Tracking Line */}
            <div className="absolute left-6 md:left-8 top-4 bottom-4 w-0.5 bg-black/[0.06]">
              {/* Active animated tracking segment */}
              <motion.div 
                className="absolute top-0 w-full bg-brand-red rounded-full"
                animate={{ 
                  height: `${((activeIndex + 1) / CASE_RESOLUTIONS.length) * 100}%` 
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>

            {/* Stream cards */}
            <div className="space-y-8">
              {CASE_RESOLUTIONS.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`relative pl-14 md:pl-20 pr-6 py-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? "bg-white border-black/10 shadow-lg shadow-black/[0.02]" 
                        : "bg-transparent border-transparent hover:bg-white/40 hover:border-black/5"
                    }`}
                    whileHover={{ x: isActive ? 0 : 4 }}
                  >
                    {/* Active Timeline Nodes */}
                    <div className="absolute left-[17px] md:left-[25px] top-1/2 -translate-y-1/2 flex items-center justify-center">
                      <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                        isActive 
                          ? "bg-brand-red border-brand-red scale-125 shadow-[0_0_8px_rgba(223,46,46,0.5)]" 
                          : "bg-white border-black/20"
                      }`} />
                    </div>

                    <div className="space-y-3">
                      {/* Badge / Year */}
                      <div className="flex items-center justify-between text-[10px] font-bold tracking-wider uppercase">
                        <span className={`px-2.5 py-0.5 rounded-full ${
                          isActive 
                            ? "bg-brand-red/10 text-brand-red" 
                            : "bg-black/5 text-brand-grey"
                        }`}>
                          {item.badge}
                        </span>
                        <span className="text-brand-grey font-mono">{item.year}</span>
                      </div>

                      {/* Title */}
                      <h3 className={`text-base md:text-lg font-bold transition-colors ${
                        isActive ? "text-brand-dark" : "text-brand-dark/70"
                      }`}>
                        {item.title}
                      </h3>

                      {/* Brief overview */}
                      <p className="text-brand-grey text-xs leading-relaxed line-clamp-2">
                        {item.description}
                      </p>

                      {/* Client identifier tag */}
                      <div className="text-[10px] font-medium text-brand-grey uppercase tracking-widest pt-1">
                        Client: <span className="text-brand-dark font-semibold">{item.clientType}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Active Settlement Detail Board with live count up (Lg span 5) */}
          <div className="lg:col-span-5 sticky top-28 bg-white border border-black/[0.04] p-8 rounded-3xl shadow-xl shadow-black/[0.02]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-brand-grey uppercase tracking-wider bg-brand-light px-2.5 py-1 rounded">
                    Ledger #{CASE_RESOLUTIONS[activeIndex].id}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-bold text-brand-grey uppercase tracking-wider">
                    Total Legal Recovery
                  </div>
                  {/* Dynamic Count Up */}
                  <div className="flex items-baseline space-x-1.5">
                    <CountUp targetValue={CASE_RESOLUTIONS[activeIndex].recoveryValue} />
                    <span className="text-xs font-bold text-brand-grey uppercase tracking-widest font-mono">
                      Settlement
                    </span>
                  </div>
                </div>

                <div className="h-[1px] bg-black/[0.06] w-full" />

                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-brand-dark uppercase tracking-wider">
                    Official Litigation Narrative
                  </h4>
                  <p className="text-brand-grey text-xs leading-relaxed">
                    {CASE_RESOLUTIONS[activeIndex].description}
                  </p>
                </div>

                <div className="bg-brand-light p-4 rounded-xl space-y-2">
                  <div className="flex justify-between text-[11px] font-bold text-brand-grey uppercase tracking-widest">
                    <span>Target Jurisdictions</span>
                    <span>Status</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold text-brand-dark">
                    <span>Delaware Chancery Court</span>
                    <span className="text-emerald-600 flex items-center space-x-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Closed & Executed</span>
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    const next = (activeIndex + 1) % CASE_RESOLUTIONS.length;
                    setActiveIndex(next);
                  }}
                  className="w-full py-3 bg-brand-dark hover:bg-brand-dark/95 text-white rounded-xl text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-300"
                >
                  <span>Examine Next Case Ledger</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
