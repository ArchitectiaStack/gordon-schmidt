import { useState } from "react";
import { Award, ShieldAlert, Sparkles, BookOpen, Layers, Lightbulb, ChevronRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PlaybookRule {
  id: string;
  partner: "HARVEY" | "JESSICA" | "LOUIS";
  ruleNumber: string;
  title: string;
  quote: string;
  strategy: string;
  tacticalAction: string;
}

export default function SpecterPlaybook() {
  const [selectedRuleId, setSelectedRuleId] = useState<string>("rule-1");

  const rules: PlaybookRule[] = [
    {
      id: "rule-1",
      partner: "HARVEY",
      ruleNumber: "RULE #01",
      title: "Play the Man, Not the Odds",
      quote: "When a gun is pointed at your head, you take it, or you draw a bigger one, or you call their bluff, or you do any of another hundred and forty-six things.",
      strategy: "In high-stakes corporate trials, the opponent's psychological vulnerabilities are more critical than the generic precedent. We map the opposition counsel's pressure points to force pre-trial resolution.",
      tacticalAction: "Execute an early corporate audit that exposes structural vulnerabilities in opponent holding companies."
    },
    {
      id: "rule-2",
      partner: "JESSICA",
      ruleNumber: "RULE #02",
      title: "Sovereignty is Earned",
      quote: "I don't respond to threats. I make them. If they want to test our resolve, they will learn exactly who owns the ground they stand on.",
      strategy: "The absolute priority in corporate restructuring is preserving unconditional operational sovereignty. We build impenetrable regulatory defense lines that neutralize external hostile takeovers.",
      tacticalAction: "Establish dual-layered shareholder block voting architectures to nullify activist hostile boarding actions."
    },
    {
      id: "rule-3",
      partner: "LOUIS",
      ruleNumber: "RULE #03",
      title: "Absolute Precision & Leverage",
      quote: "You just got Litt up! When they slip, we slide in with the force of ten regulatory bodies. Precision is the absolute master of capital.",
      strategy: "Exploit subtle multi-jurisdictional tax loopholes and minor regulatory filing anomalies to achieve overwhelming negotiation leverage.",
      tacticalAction: "Launch immediate, unannounced statutory audits using administrative tribunal injunctions."
    }
  ];

  const selectedRule = rules.find(r => r.id === selectedRuleId) || rules[0];

  return (
    <section className="py-24 bg-[#F8F9FB] text-brand-dark border-b border-black/[0.03] relative overflow-hidden">
      {/* Background radial architectural grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Decorative large numbers blur */}
      <div className="absolute -right-24 -bottom-24 text-[24rem] font-black text-black/[0.02] select-none pointer-events-none font-sans">
        PSL
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-gold-accent/10 border border-gold-accent/20 px-3 py-1 rounded-full">
            <Zap className="w-3 h-3 text-gold-accent" />
            <span className="text-[9px] font-black tracking-widest text-brand-dark uppercase font-mono">
              THE PLAYBOOK OF SOVEREIGNTY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-serif uppercase text-brand-dark">
            THE CHESSBOARD OF LEVERAGE
          </h2>
          <p className="text-brand-grey text-xs sm:text-sm max-w-xl leading-relaxed font-sans">
            At Specter Litt, we don't follow precedents—we establish them. Explore the core tactical rules our senior partners utilize to secure multi-billion dollar verdicts.
          </p>
        </div>

        {/* Playbook interactive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: Rule Selectors */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {rules.map((rule) => {
              const isActive = rule.id === selectedRuleId;
              return (
                <button
                  key={rule.id}
                  onClick={() => setSelectedRuleId(rule.id)}
                  className={`p-6 rounded-3xl border text-left transition-all duration-500 relative group flex flex-col justify-between overflow-hidden ${
                    isActive 
                      ? "bg-[#0E0E10] text-white border-transparent shadow-2xl" 
                      : "bg-white border-black/[0.04] hover:border-black/10 text-brand-dark"
                  }`}
                >
                  {/* Active highlight color pill */}
                  {isActive && (
                    <div className="absolute top-0 right-0 h-full w-[4px] bg-gradient-to-b from-gold-accent to-brand-red" />
                  )}

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-[9px] font-bold font-mono tracking-wider ${isActive ? "text-gold-accent" : "text-brand-grey"}`}>
                        {rule.ruleNumber}
                      </span>
                      <span className={`text-[8px] font-black tracking-widest px-2 py-0.5 rounded uppercase ${
                        rule.partner === "HARVEY" ? "bg-amber-500/10 text-amber-500" :
                        rule.partner === "JESSICA" ? "bg-purple-500/10 text-purple-500" :
                        "bg-rose-500/10 text-rose-500"
                      }`}>
                        BY {rule.partner}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold tracking-tight font-sans uppercase">
                      {rule.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-black/[0.03] group-hover:border-black/[0.1] transition-colors">
                    <span className={`text-[9px] font-semibold tracking-wider uppercase ${isActive ? "text-gray-400" : "text-brand-grey"}`}>
                      EXAMINE TACTICAL MATRIX
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      isActive ? "text-gold-accent translate-x-1" : "text-brand-grey group-hover:translate-x-1"
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Interactive Tactical Brief Case */}
          <div className="lg:col-span-8 bg-white border border-black/[0.04] rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/[0.01] flex flex-col justify-between relative overflow-hidden">
            {/* Top gold line */}
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-accent/40 to-transparent" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRule.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8 flex-grow flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Rule Header */}
                  <div className="flex items-center justify-between border-b border-black/[0.04] pb-4">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-full bg-gold-accent/10 flex items-center justify-center text-gold-accent font-black text-xs font-mono">
                        {selectedRule.ruleNumber.replace("RULE #", "")}
                      </div>
                      <div>
                        <span className="text-[9px] font-extrabold text-brand-grey uppercase tracking-widest font-mono">SENIOR STRATEGIC MANDATE</span>
                        <h4 className="text-sm font-extrabold text-brand-dark uppercase tracking-tight font-sans mt-0.5">{selectedRule.title}</h4>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-brand-grey font-bold">CASE STATUS: ACTIVE VERDICT</span>
                  </div>

                  {/* High impact quote banner */}
                  <div className="bg-[#0E0E10] text-white p-6 sm:p-8 rounded-2xl relative overflow-hidden shadow-xl shadow-brand-dark/5">
                    {/* Tiny neon decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-accent/[0.02] rounded-full blur-2xl" />
                    
                    <div className="relative z-10 space-y-4">
                      <span className="text-[8px] font-black tracking-[0.25em] text-gold-accent uppercase font-mono block">
                        • DIRECT VERBATIM CITATION
                      </span>
                      <p className="text-sm sm:text-base italic font-serif leading-relaxed text-gray-100">
                        "{selectedRule.quote}"
                      </p>
                      <div className="flex items-center space-x-2 pt-2">
                        <div className="w-5 h-[1px] bg-gold-accent" />
                        <span className="text-[9px] font-extrabold text-gold-accent uppercase tracking-wider font-mono">
                          {selectedRule.partner === "HARVEY" ? "Harvey Specter, Name Partner" :
                           selectedRule.partner === "JESSICA" ? "Jessica Pearson, Managing Partner" :
                           "Louis Litt, Senior Partner"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Strategic application */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-bold text-brand-grey uppercase tracking-widest font-mono block">
                        STRATEGIC DOCTRINE
                      </span>
                      <p className="text-xs text-brand-grey leading-relaxed pr-2">
                        {selectedRule.strategy}
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-bold text-brand-grey uppercase tracking-widest font-mono block">
                        TACTICAL ENGAGEMENT ACTION
                      </span>
                      <p className="text-xs text-brand-dark font-semibold leading-relaxed border-l-2 border-brand-red pl-3 py-0.5">
                        {selectedRule.tacticalAction}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Engagement CTA footer within playbook card */}
                <div className="border-t border-black/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-gold-accent" />
                    <span className="text-[10px] font-semibold text-brand-grey">
                      Securing Supreme Regulatory Leverage For Elite Clients.
                    </span>
                  </div>
                  <a
                    href="#diagnostic"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-brand-dark hover:bg-gold-accent text-white hover:text-brand-dark text-[9px] font-bold tracking-widest uppercase px-6 py-3.5 rounded-full transition-all duration-300"
                  >
                    <span>ANALYZE LEVERAGE RATIO</span>
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
