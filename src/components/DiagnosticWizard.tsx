import { useState } from "react";
import { DIAGNOSTIC_ATTORNEYS } from "../data";
import { Sparkles, RefreshCw, PhoneCall, ShieldAlert, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function DiagnosticWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [scale, setScale] = useState(2); // 1: 1-10, 2: 11-100, 3: 101-500, 4: 500+
  const [industry, setIndustry] = useState(0); // 0: Tech, 1: FinTech, 2: Healthcare, 3: Global Trade
  const [concern, setConcern] = useState(0); // 0: Funding Rounds, 1: IP Infringement, 2: Customs Tariff, 3: Class Action

  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Labels lists
  const scaleLabels = [
    { value: 1, label: "Seed-Stage (1-10)", desc: "Founder-led setup, focus on IP & cap structures" },
    { value: 2, label: "Growth-Stage (11-100)", desc: "Series funding rounds, corporate expansion & employment" },
    { value: 3, label: "Middle-Market (101-500)", desc: "Corporate governance, M&A operations & compliance" },
    { value: 4, label: "Enterprise (500+)", desc: "Global trade regulations, complex litigation, anti-trust defense" }
  ];

  const industryLabels = [
    { id: "tech", label: "Artificial Intelligence & SaaS", category: "technology" },
    { id: "fintech", label: "FinTech & Digital Assets", category: "corporate" },
    { id: "healthcare", label: "MedTech & Health Infrastructure", category: "technology" },
    { id: "trade", label: "Global Trade & Logistics", category: "regulatory" }
  ];

  const concernLabels = [
    { id: "venture", label: "Securing Funding Rounds & Equity Issuance", category: "corporate" },
    { id: "patent", label: "Filing or Defending Patent/Trademark Secrets", category: "technology" },
    { id: "sanctions", label: "Customs Inspections & Export Sanctions Audits", category: "regulatory" },
    { id: "governance", label: "Board Restructuring & Internal SOX Audits", category: "corporate" }
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      runMatchingAlgorithm();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const runMatchingAlgorithm = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setShowResult(true);
    }, 1800); // Luxury loading delay representation
  };

  const getMatchedProfile = () => {
    // Determine match based on selections
    const selectedIndustryObj = industryLabels[industry];
    const selectedConcernObj = concernLabels[concern];
    
    // Simple robust classification mapping
    if (selectedIndustryObj.category === "regulatory" || selectedConcernObj.category === "regulatory") {
      return DIAGNOSTIC_ATTORNEYS.regulatory;
    } else if (selectedIndustryObj.category === "technology" || selectedConcernObj.category === "technology") {
      return DIAGNOSTIC_ATTORNEYS.technology;
    } else {
      return DIAGNOSTIC_ATTORNEYS.corporate;
    }
  };

  const resetWizard = () => {
    setCurrentStep(1);
    setScale(2);
    setIndustry(0);
    setConcern(0);
    setShowResult(false);
  };

  const matchedAttorney = getMatchedProfile();

  return (
    <section id="diagnostic" className="py-24 bg-white border-b border-black/[0.03] scroll-mt-16">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-brand-red text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-brand-red animate-spin" style={{ animationDuration: "3s" }} />
            <span>Onboarding Technology</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark uppercase">
            The Legal Diagnostic
          </h2>
          <p className="text-brand-grey text-sm max-w-xl mx-auto leading-relaxed">
            Specify your structural scale, industry, and legal risk parameters to instantaneously match with the optimal advisory team and partner architect.
          </p>
        </div>

        {/* Wizard Container with smooth card layout */}
        <div className="bg-[#F8F8FA] border border-black/[0.04] p-8 md:p-10 rounded-3xl shadow-xl shadow-black/[0.01] relative min-h-[440px] flex flex-col justify-between">
          
          <AnimatePresence mode="wait">
            
            {/* CALCULATING STATE */}
            {isCalculating && (
              <motion.div
                key="calculating"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#F8F8FA] rounded-3xl flex flex-col items-center justify-center p-8 z-30 space-y-6 text-center"
              >
                <RefreshCw className="w-12 h-12 text-brand-red animate-spin" />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-brand-dark uppercase tracking-wider">
                    Synthesizing Legal Vector
                  </h3>
                  <p className="text-brand-grey text-xs max-w-xs leading-relaxed">
                    Analyzing corporate governance guidelines, IP conflict matrixes, and local jurisdictional precedents...
                  </p>
                </div>
                <div className="w-48 h-1 bg-black/[0.08] rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-brand-red"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.6, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            )}

            {/* RESULTS VIEW */}
            {showResult ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  {/* Matching Attorney Image */}
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-white border border-black/10 flex-shrink-0 relative">
                    <img 
                      src={matchedAttorney.attorneyImage} 
                      alt={matchedAttorney.attorneyName} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 right-2 bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                      {matchedAttorney.matchScore}% Match
                    </div>
                  </div>

                  {/* Attorney Credentials */}
                  <div className="flex-grow space-y-4 text-center md:text-left">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest">
                        Your Assigned Lead Partner
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-brand-dark">
                        {matchedAttorney.attorneyName}
                      </h3>
                      <p className="text-xs font-semibold text-brand-grey">
                        {matchedAttorney.attorneyTitle}
                      </p>
                    </div>

                    <div className="bg-white border border-black/[0.03] p-4 rounded-xl text-left">
                      <div className="text-[10px] font-bold text-brand-dark uppercase tracking-wider mb-1">
                        Tailored Strategic Focus: <span className="text-brand-red">{matchedAttorney.focusArea}</span>
                      </div>
                      <p className="text-brand-grey text-xs leading-relaxed">
                        {matchedAttorney.strategyMessage}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] bg-black/[0.06] w-full" />

                {/* Next Actions Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-2 text-emerald-600">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">Diagnostic Profile Confirmed</span>
                  </div>

                  <div className="flex items-center space-x-3 w-full sm:w-auto">
                    <button
                      onClick={resetWizard}
                      className="flex-1 sm:flex-initial px-5 py-3 border border-black/10 hover:border-brand-dark text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors"
                    >
                      Run Diagnostic Again
                    </button>
                    <a
                      href="#consultation"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 px-6 py-3 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md shadow-brand-red/10"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Book Consultation</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* ACTIVE STEP VIEWS */
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                {/* Step Indicators */}
                <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                  <span className="text-[10px] font-mono text-brand-grey uppercase tracking-widest">
                    Step {currentStep} of 3
                  </span>
                  <div className="flex space-x-1.5">
                    {[1, 2, 3].map((step) => (
                      <div 
                        key={step} 
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          currentStep === step ? "w-6 bg-brand-red" : "w-1.5 bg-black/10"
                        }`} 
                      />
                    ))}
                  </div>
                </div>

                {/* STEP 1: SCALE OF OPERATIONS */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="space-y-1.5">
                      <h3 className="text-base md:text-lg font-bold text-brand-dark uppercase tracking-wide">
                        1. What is the active scale of your corporate operations?
                      </h3>
                      <p className="text-brand-grey text-xs">
                        Slide to match the legal threshold requirements corresponding to your headcount and lifecycle.
                      </p>
                    </div>

                    {/* Highly custom crimson slider bar */}
                    <div className="space-y-8 pt-4">
                      <div className="relative">
                        <input
                          type="range"
                          min="1"
                          max="4"
                          value={scale}
                          onChange={(e) => setScale(parseInt(e.target.value))}
                          className="w-full h-2 bg-black/[0.08] rounded-lg appearance-none cursor-pointer accent-brand-red"
                        />
                        {/* Tick indicators */}
                        <div className="absolute top-4 left-0 right-0 flex justify-between px-1 text-[10px] text-brand-grey font-semibold">
                          <span>Seed</span>
                          <span>Growth</span>
                          <span>Mid-Market</span>
                          <span>Enterprise</span>
                        </div>
                      </div>

                      {/* Display current active slider selection */}
                      <div className="bg-white border border-black/[0.03] p-5 rounded-2xl flex items-start space-x-4">
                        <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-xs text-brand-dark uppercase tracking-wider">
                            {scaleLabels[scale - 1].label}
                          </h4>
                          <p className="text-brand-grey text-[11px] leading-relaxed mt-1">
                            {scaleLabels[scale - 1].desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: OPERATIONAL INDUSTRY */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="space-y-1.5">
                      <h3 className="text-base md:text-lg font-bold text-brand-dark uppercase tracking-wide">
                        2. Select your principal operating sector:
                      </h3>
                      <p className="text-brand-grey text-xs">
                        Aligning your legal diagnostic vectors to specific technological or regulatory frameworks.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {industryLabels.map((ind, index) => {
                        const isSel = industry === index;
                        return (
                          <div
                            key={ind.id}
                            onClick={() => setIndustry(index)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all ${
                              isSel 
                                ? "bg-white border-brand-red shadow-md shadow-brand-red/[0.02]" 
                                : "bg-white/50 border-black/[0.04] hover:bg-white hover:border-black/10"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-3 h-3 rounded-full border flex items-center justify-center ${
                                isSel ? "border-brand-red bg-brand-red" : "border-black/20"
                              }`}>
                                {isSel && <div className="w-1 h-1 bg-white rounded-full" />}
                              </div>
                              <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                                {ind.label}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 3: PRIMARY LEGAL CONCERN */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-1.5">
                      <h3 className="text-base md:text-lg font-bold text-brand-dark uppercase tracking-wide">
                        3. State your immediate corporate or risk objective:
                      </h3>
                      <p className="text-brand-grey text-xs">
                        This locks the jurisdictional urgency matrix and maps your profile directly to our specialist general partners.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 pt-2">
                      {concernLabels.map((con, index) => {
                        const isSel = concern === index;
                        return (
                          <div
                            key={con.id}
                            onClick={() => setConcern(index)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                              isSel 
                                ? "bg-white border-brand-red shadow-md" 
                                : "bg-white/50 border-black/[0.04] hover:bg-white hover:border-black/10"
                            }`}
                          >
                            <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                              {con.label}
                            </span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSel ? "border-brand-red bg-brand-red text-white" : "border-black/20"
                            }`}>
                              {isSel && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Back / Next Buttons Row */}
                <div className="flex items-center justify-between pt-6 border-t border-black/[0.06]">
                  <button
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className={`flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                      currentStep === 1 
                        ? "text-brand-grey/30 cursor-not-allowed" 
                        : "text-brand-dark hover:text-brand-red"
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    onClick={handleNext}
                    className="inline-flex items-center space-x-1.5 px-6 py-3 bg-brand-dark hover:bg-brand-red text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-sm"
                  >
                    <span>{currentStep === 3 ? "Run Diagnostic" : "Continue"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
