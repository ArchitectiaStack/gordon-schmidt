import { useState } from "react";
import { Landmark, TrendingUp, ShieldCheck, HelpCircle, Activity, ChevronRight, Lock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ClientSovereignLedger() {
  const [budget, setBudget] = useState<number>(5); // $5M default
  const [tier, setTier] = useState<"enterprise" | "sovereign" | "elite">("enterprise");

  // Dynamic calculations based on defense budget
  const calculateMetrics = (b: number) => {
    const litigators = Math.min(12, Math.floor(b * 1.5) + 2);
    const responseTime = b >= 8 ? "3 MIN - DIRECT PARTNER HOTLINE" : b >= 4 ? "15 MIN - ADVISORY BRIEF" : "45 MIN - EXECUTIVE COUNSEL";
    const escrowSecured = (b * 1.25).toFixed(1);
    const leverageIndex = Math.min(100, Math.floor(75 + b * 2.5));

    return { litigators, responseTime, escrowSecured, leverageIndex };
  };

  const metrics = calculateMetrics(budget);

  return (
    <section className="py-24 bg-white text-brand-dark border-b border-black/[0.03] relative overflow-hidden">
      {/* Background elegant grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000002_1px,transparent_1px)] [background-size:2rem_2rem] pointer-events-none" />
      
      {/* Absolute background accent line */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center space-x-2">
              <Landmark className="w-4 h-4 text-gold-accent" />
              <span className="text-[10px] font-black tracking-[0.25em] text-brand-dark uppercase font-mono">
                SECURE CLIENT VALUE PLATFORM
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-serif uppercase text-brand-dark">
              THE SOVEREIGN LEDGER
            </h2>
            <p className="text-brand-grey text-xs sm:text-sm max-w-xl leading-relaxed font-sans">
              Experience absolute fiscal clarity. Our exclusive sovereign escrow and resource simulator empowers elite companies to evaluate active litigator saturation and strategic defense allocation in real-time.
            </p>
          </div>
          
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="inline-flex items-center space-x-2.5 bg-brand-light border border-black/[0.05] rounded-full px-4.5 py-2.5 shadow-sm">
              <Lock className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              <span className="text-[9.5px] font-mono font-extrabold text-brand-dark tracking-wider">
                MILITARY-GRADE 256-BIT ENCRYPTION
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: Input controls and sliders */}
          <div className="lg:col-span-6 bg-brand-light border border-black/[0.04] rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-8">
              
              {/* Selector Pills */}
              <div className="space-y-3">
                <label className="text-[9.5px] font-black tracking-widest text-brand-grey uppercase block font-mono">
                  01. SELECT LITIGATION ENGAGEMENT DEPTH
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {(["enterprise", "sovereign", "elite"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        setTier(t);
                        if (t === "enterprise") setBudget(3);
                        if (t === "sovereign") setBudget(6);
                        if (t === "elite") setBudget(10);
                      }}
                      className={`py-3 px-2 rounded-xl border text-center font-bold tracking-widest uppercase text-[9px] transition-all duration-300 ${
                        tier === t
                          ? "bg-[#0E0E10] text-white border-transparent shadow-lg"
                          : "bg-white border-black/[0.04] hover:border-black/10 text-brand-grey hover:text-brand-dark"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider Budget Input */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-[9.5px] font-black tracking-widest text-brand-grey uppercase font-mono">
                    02. ESTIMATED CORPORATE DEFENSE CAPITAL
                  </label>
                  <span className="text-sm font-black font-mono text-gold-accent bg-gold-accent/10 px-2.5 py-1 rounded">
                    ${budget}M USD
                  </span>
                </div>

                <div className="relative pt-2">
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="0.5"
                    value={budget}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      setBudget(val);
                      if (val <= 4) setTier("enterprise");
                      else if (val <= 8) setTier("sovereign");
                      else setTier("elite");
                    }}
                    className="w-full h-1.5 bg-black/[0.08] rounded-full appearance-none cursor-pointer accent-gold-accent"
                  />
                  
                  {/* Slider grid labels */}
                  <div className="flex justify-between text-[8px] font-bold text-brand-grey font-mono mt-2">
                    <span>$1.0M</span>
                    <span>$4.0M</span>
                    <span>$8.0M</span>
                    <span>$12.0M</span>
                  </div>
                </div>
              </div>

              {/* Secure Trust Disclaimer */}
              <div className="bg-white border border-black/[0.03] p-4.5 rounded-2xl flex items-start space-x-3.5 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-extrabold text-brand-dark uppercase tracking-wide font-sans block">
                    ATTORNEY-CLIENT ESCROW SECURITY
                  </span>
                  <p className="text-[10.5px] text-brand-grey leading-relaxed">
                    Sovereign capital is bonded instantly via dual-signature escrow, backed entirely by certified Lloyds of London underwriters. No capital risk.
                  </p>
                </div>
              </div>

            </div>

            <p className="text-[9px] text-brand-grey font-mono mt-8 border-t border-black/[0.04] pt-4">
              *Simulation results are tailored model projections. Final engagement retainers are established by executive counsel approval.
            </p>
          </div>

          {/* RIGHT COLUMN: Real-Time Dynamic Resource Dashboard Panel */}
          <div className="lg:col-span-6 bg-[#0E0E10] border border-white/[0.08] rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-black/30">
            {/* Ambient gold background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-accent/[0.03] rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6">
              
              {/* Header inside display */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="space-y-0.5">
                  <span className="text-[8px] font-black tracking-[0.2em] text-gold-accent uppercase font-mono block">
                    REAL-TIME LEDGER DOCKET // PSL
                  </span>
                  <h3 className="text-base font-extrabold text-white uppercase font-sans">
                    LITIGATION MATRIX RATIO
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[8px] text-gray-500 block font-mono">ENCRYPTED STREAM</span>
                  <span className="text-xs font-mono font-bold text-emerald-400">CONNECTIVITY LIVE</span>
                </div>
              </div>

              {/* Interactive calculated parameters display */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/[0.02] border border-white/[0.04] p-4 rounded-2xl">
                  <span className="text-[8.5px] font-bold text-gray-500 uppercase tracking-widest font-mono block">
                    ESCROW BOND CAPITAL
                  </span>
                  <span className="text-2xl font-black text-white block mt-1 font-sans">
                    ${metrics.escrowSecured}M
                  </span>
                  <span className="text-[8px] text-gold-accent uppercase font-black tracking-wider block mt-0.5 font-mono">
                    SECURED & DEPLOYABLE
                  </span>
                </div>

                <div className="bg-white/[0.02] border border-white/[0.04] p-4 rounded-2xl">
                  <span className="text-[8.5px] font-bold text-gray-500 uppercase tracking-widest font-mono block">
                    ACTIVE LITIGATORS
                  </span>
                  <span className="text-2xl font-black text-white block mt-1 font-sans">
                    {metrics.litigators} Partners
                  </span>
                  <span className="text-[8px] text-emerald-400 uppercase font-black tracking-wider block mt-0.5 font-mono">
                    ROUND-THE-CLOCK DEVOTION
                  </span>
                </div>
              </div>

              {/* Guarantee timeline & leverage index progress */}
              <div className="space-y-4 pt-2">
                <div className="bg-white/[0.02] border border-white/[0.04] p-4 rounded-2xl flex justify-between items-center">
                  <div>
                    <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest block font-mono">
                      RESPONSE TIMELINE
                    </span>
                    <span className="text-xs font-bold text-white uppercase block mt-1 font-sans">
                      {metrics.responseTime}
                    </span>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gold-accent animate-ping" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[9px] font-bold font-mono text-gray-400">
                    <span>LEVERAGE SATURATION LEVEL</span>
                    <span className="text-gold-accent">{metrics.leverageIndex}% SATURATED</span>
                  </div>
                  <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${metrics.leverageIndex}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-brand-red to-gold-accent"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom dynamic buttons */}
            <div className="border-t border-white/[0.06] pt-6 mt-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] text-gray-400">
                  Dual-Signed Multi-Signature Vault Locked
                </span>
              </div>
              <a
                href="#consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white hover:bg-gold-accent text-brand-dark hover:text-brand-dark text-[9px] font-black tracking-widest uppercase px-6 py-3.5 rounded-full transition-all duration-300"
              >
                <span>LOCK IN SOVEREIGNTY</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
