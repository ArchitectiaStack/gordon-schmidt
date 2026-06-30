import { useState, useEffect } from "react";
import { ChevronDown, Globe, Sparkles, Menu, X, Lock, Key, ShieldCheck, Cpu, UserCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  const [langOpen, setLangOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Elite Portal simulation states
  const [showPortal, setShowPortal] = useState(false);
  const [portalStep, setPortalStep] = useState<"enter" | "scanning" | "granted">("enter");
  const [pin, setPin] = useState("");
  const [systemLogs, setSystemLogs] = useState<string[]>([
    "INITIALIZING SECURE LINK...",
    "CHAMBER ENCRYPTION AES-256 ACTIVE."
  ]);

  const handleKeypadPress = (val: string) => {
    if (pin.length < 4) {
      const newPin = pin + val;
      setPin(newPin);
      setSystemLogs(prev => [...prev, `KEY REGISTERED: [${val}]`]);
      
      // Simulate auto-scanning on a specific code or 4 digits
      if (newPin.length === 4) {
        setSystemLogs(prev => [...prev, "PASSCODE VALIDATION INITIATED..."]);
        setTimeout(() => {
          if (newPin === "1483" || newPin === "0007") {
            setPortalStep("granted");
            setSystemLogs(prev => [...prev, "CORRECT PIN.", "WELCOME SENIOR PARTNER GORDON SCHMIDT."]);
          } else {
            // General success mock to keep it delightfully rewarding
            setPortalStep("granted");
            setSystemLogs(prev => [...prev, "SECURE CLIENT ACCESS GRANTED.", "WELCOME BACK."]);
          }
        }, 1000);
      }
    }
  };

  const startBiometricScan = () => {
    setPortalStep("scanning");
    setSystemLogs(prev => [...prev, "INITIALIZING BIOMETRIC SCANNER...", "PLEASE LOCK EYES ON TARGET RETINA MATRIX..."]);
    
    setTimeout(() => {
      setPortalStep("granted");
      setSystemLogs(prev => [...prev, "RETINA RETRIEVAL COMPLETED.", "IDENTITY VERIFIED: GORDON SCHMIDT", "ACCESS LEVEL 5 ENABLED."]);
    }, 2200);
  };

  const resetPortal = () => {
    setPin("");
    setPortalStep("enter");
    setShowPortal(false);
    setSystemLogs([
      "INITIALIZING SECURE LINK...",
      "CHAMBER ENCRYPTION AES-256 ACTIVE."
    ]);
  };

  return (
    <>
      {/* 1. TOP PREMIUM WAR ROOM STATUS TICKER (Absolute prestige and power indicator) */}
      <div className="w-full bg-[#F3F4F6] text-brand-dark text-[8px] sm:text-[9px] font-mono tracking-[0.2em] font-extrabold border-b border-black/[0.05] py-2.5 px-6 flex justify-between items-center select-none overflow-hidden">
        <div className="flex items-center space-x-4 animate-pulse">
          <span className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-brand-grey">CHAMBERS STATUS:</span>
            <span className="text-emerald-600 font-black">SECURE</span>
          </span>
          <span className="hidden md:inline text-black/10">|</span>
          <span className="hidden md:inline text-brand-grey">ACTIVE DOCK: SEC HEARING ON CORPORATE ACQUISITIONS DEFENDANTS INJECTED</span>
        </div>
        <div className="flex items-center space-x-3 text-gold-accent">
          <span>SECURE AT-LAW TUNNEL</span>
          <span className="bg-gold-accent/10 px-2 py-0.5 rounded text-brand-dark border border-gold-accent/20">GSD-ENCRYPTED</span>
        </div>
      </div>

      {/* 2. MAIN NAV HEADER BAR */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-black/[0.06] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          
          {/* Left Side: Navigation Links (Desktop only) */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-semibold tracking-widest uppercase">
            <button
              onClick={() => setActiveTab("Home")}
              className={`transition-colors duration-200 relative pb-1 ${
                activeTab === "Home" ? "text-brand-dark font-extrabold" : "text-brand-grey hover:text-brand-dark"
              }`}
            >
              Home
              {activeTab === "Home" && (
                <motion.span
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-accent rounded-full"
                />
              )}
            </button>
            
            <button
              onClick={() => setActiveTab("About")}
              className={`transition-colors duration-200 relative pb-1 ${
                activeTab === "About" ? "text-brand-dark font-extrabold" : "text-brand-grey hover:text-brand-dark"
              }`}
            >
              About
              {activeTab === "About" && (
                <motion.span
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-accent rounded-full"
                />
              )}
            </button>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className="flex items-center space-x-1 text-brand-grey hover:text-brand-dark transition-colors duration-200 pb-1"
              >
                <span>Sectors</span>
                <ChevronDown className="w-3.5 h-3.5 text-brand-grey" />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute left-0 mt-2 w-56 bg-white border border-black/[0.08] rounded-xl shadow-2xl py-2 z-50 text-brand-dark"
                  >
                    <a href="#matrix" className="block px-4 py-2.5 text-[10px] text-brand-dark hover:bg-brand-light font-bold tracking-wider uppercase transition-colors">
                      Venture Capital & Finance
                    </a>
                    <a href="#matrix" className="block px-4 py-2.5 text-[10px] text-brand-dark hover:bg-brand-light font-bold tracking-wider uppercase transition-colors">
                      Tech Intellectual Property
                    </a>
                    <a href="#matrix" className="block px-4 py-2.5 text-[10px] text-brand-dark hover:bg-brand-light font-bold tracking-wider uppercase transition-colors">
                      International Trade Law
                    </a>
                    <a href="#matrix" className="block px-4 py-2.5 text-[10px] text-brand-dark hover:bg-brand-light font-bold tracking-wider uppercase transition-colors">
                      Mergers & Acquisitions
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* English language switch with globe */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center space-x-1.5 text-brand-grey hover:text-brand-dark transition-colors duration-200 pb-1"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>English</span>
                <ChevronDown className="w-3 h-3 text-brand-grey" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    onMouseLeave={() => setLangOpen(false)}
                    className="absolute left-0 mt-2 w-32 bg-white border border-black/[0.08] rounded-xl shadow-lg py-1 z-50 text-[10px] uppercase tracking-widest font-bold text-brand-dark"
                  >
                    <button className="w-full text-left px-3 py-2 text-brand-dark hover:bg-brand-light">English</button>
                    <button className="w-full text-left px-3 py-2 text-brand-grey hover:bg-brand-light">Deutsch</button>
                    <button className="w-full text-left px-3 py-2 text-brand-grey hover:bg-brand-light">Français</button>
                    <button className="w-full text-left px-3 py-2 text-brand-grey hover:bg-brand-light">Español</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full border border-black/[0.08] flex items-center justify-center text-brand-dark hover:bg-brand-light transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Center Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative w-9 h-9 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <div className="absolute inset-0 bg-gold-accent/20 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-full border border-gold-accent/40 group-hover:border-gold-accent/80 transition-colors duration-500" />
              <div className="absolute inset-[3px] rounded-full border border-black/5" />
              
              <svg viewBox="0 0 40 40" className="w-6 h-6 relative z-10 text-gold-accent group-hover:text-brand-dark transition-colors duration-500">
                <path d="M 10 10 L 20 6 L 30 10 Q 30 24 20 34 Q 10 24 10 10 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <line x1="14" y1="17" x2="26" y2="17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="20" y1="12" x2="20" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 14 17 L 11 23 Q 14 24 17 23 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
                <path d="M 26 17 L 23 23 Q 26 24 29 23 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
                <path d="M 17 26 L 23 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <div className="flex flex-col -space-y-1 select-none">
              <span className="text-sm font-extrabold tracking-[0.2em] text-brand-dark uppercase font-serif group-hover:text-gold-accent transition-colors duration-300">
                GORDON SCHMIDT
              </span>
              <span className="text-[7.5px] font-bold tracking-[0.38em] text-gold-accent/90 uppercase">
                SCHMIDT DISPUTE GROUP
              </span>
            </div>
          </div>

          {/* Right Side: High-Prestige CLIENT PORTAL Trigger */}
          <div>
            <button 
              onClick={() => setShowPortal(true)}
              className="relative group overflow-hidden bg-brand-dark hover:bg-gold-accent text-white hover:text-brand-dark font-black text-[9px] sm:text-[10px] tracking-widest uppercase py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 transform active:scale-95 shadow-lg flex items-center space-x-1.5"
            >
              <Lock className="w-3 h-3 text-white group-hover:text-brand-dark animate-pulse" />
              <span>CLIENT PORTAL</span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              />
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 180 }}
                className="fixed top-0 left-0 bottom-0 w-[280px] bg-white z-50 shadow-2xl p-6 flex flex-col justify-between lg:hidden text-brand-dark"
              >
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-widest uppercase font-serif text-brand-dark">
                      GORDON <span className="text-gold-accent">SCHMIDT</span>
                    </span>
                    <button 
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-8 h-8 rounded-full border border-black/[0.06] flex items-center justify-center text-brand-dark"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <nav className="flex flex-col space-y-5 text-sm font-bold uppercase tracking-wider">
                    <a href="#root" onClick={() => setMobileMenuOpen(false)} className="text-brand-dark hover:text-gold-accent transition-colors py-1 border-b border-black/[0.03]">Home</a>
                    <a href="#matrix" onClick={() => setMobileMenuOpen(false)} className="text-brand-dark hover:text-gold-accent transition-colors py-1 border-b border-black/[0.03]">About Group</a>
                    <a href="#matrix" onClick={() => setMobileMenuOpen(false)} className="text-brand-dark hover:text-gold-accent transition-colors py-1 border-b border-black/[0.03]">Practice Sectors</a>
                    <a href="#resolutions" onClick={() => setMobileMenuOpen(false)} className="text-brand-dark hover:text-gold-accent transition-colors py-1 border-b border-black/[0.03]">Resolutions Stream</a>
                    <a href="#diagnostic" onClick={() => setMobileMenuOpen(false)} className="text-brand-dark hover:text-gold-accent transition-colors py-1 border-b border-black/[0.03]">Case Evaluation</a>
                  </nav>
                </div>

                <div className="space-y-4 border-t border-black/[0.06] pt-6">
                  <p className="text-[9px] font-extrabold uppercase text-brand-grey tracking-widest">Select Language</p>
                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                    <button className="text-left py-1 text-gold-accent font-bold">English</button>
                    <button className="text-left py-1 text-brand-grey">Deutsch</button>
                    <button className="text-left py-1 text-brand-grey">Français</button>
                    <button className="text-left py-1 text-brand-grey">Español</button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* 3. INTERACTIVE CLIENT PORTAL MODAL DIALOG (Unique Power/Charm Feature) */}
      <AnimatePresence>
        {showPortal && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Dark glass backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetPortal}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Terminal Card */}
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-lg bg-[#0A0A0C] border border-white/[0.1] rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col justify-between text-white"
            >
              {/* Glossy top aesthetic gold bar */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold-accent to-transparent" />

              {/* Title & Logs */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <div className="flex items-center space-x-2.5">
                    <Lock className="w-4 h-4 text-gold-accent animate-pulse" />
                    <div>
                      <span className="text-[8px] font-mono font-black tracking-widest text-gold-accent block">SECURE SYSTEM</span>
                      <h3 className="text-sm font-extrabold uppercase font-sans tracking-tight">CLIENT EXTRANET</h3>
                    </div>
                  </div>
                  <button 
                    onClick={resetPortal}
                    className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    ×
                  </button>
                </div>

                {/* Simulated Terminal Status Terminal */}
                <div className="bg-black border border-white/[0.05] p-3 rounded-xl font-mono text-[9px] text-gray-400 space-y-1 h-24 overflow-y-auto select-none">
                  {systemLogs.map((log, index) => (
                    <div key={index} className="flex items-center space-x-1.5">
                      <span className="text-gold-accent font-extrabold">&gt;</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {portalStep === "enter" && (
                    <motion.div 
                      key="enter"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      {/* PIN keypad simulation */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <label className="text-[10px] font-mono font-bold text-gray-400 tracking-wider">
                            ENTER ATTORNEY / CLIENT RETENTION PIN:
                          </label>
                          <span className="text-xs font-black font-mono tracking-[0.3em] text-gold-accent bg-gold-accent/10 px-3 py-1 rounded">
                            {pin ? "••••".substring(0, pin.length) + "    ".substring(0, 4 - pin.length) : "----"}
                          </span>
                        </div>

                        {/* Numeric Grid */}
                        <div className="grid grid-cols-3 gap-2 max-w-[280px] mx-auto">
                          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
                            <button
                              key={num}
                              onClick={() => handleKeypadPress(num)}
                              className="py-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] text-xs font-mono font-bold tracking-widest hover:border-gold-accent/40 active:scale-95 transition-all"
                            >
                              {num}
                            </button>
                          ))}
                          <button 
                            onClick={() => setPin("")}
                            className="py-2.5 rounded-xl bg-red-950/20 text-red-400 border border-red-950/40 text-[9px] font-bold uppercase tracking-widest hover:bg-red-950/40"
                          >
                            CLR
                          </button>
                          <button
                            onClick={() => handleKeypadPress("0")}
                            className="py-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] text-xs font-mono font-bold"
                          >
                            0
                          </button>
                          <button
                            onClick={startBiometricScan}
                            className="py-2.5 rounded-xl bg-gold-accent/10 hover:bg-gold-accent text-gold-accent hover:text-brand-dark border border-gold-accent/20 text-[9px] font-bold uppercase tracking-widest transition-all"
                          >
                            SCAN
                          </button>
                        </div>
                      </div>

                      {/* Interactive instructions */}
                      <div className="text-center pt-2 border-t border-white/[0.05]">
                        <span className="text-[9px] text-gray-500 font-mono">
                          TRY RETAINER PIN: <span className="text-gold-accent font-black">1483</span> TO LOGIN AS GORDON SCHMIDT
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {portalStep === "scanning" && (
                    <motion.div
                      key="scanning"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-6 space-y-6"
                    >
                      {/* Scanner Matrix Ring */}
                      <div className="relative w-28 h-28 flex items-center justify-center rounded-full border border-gold-accent/20 overflow-hidden">
                        {/* Green/Gold laser scanner bar */}
                        <motion.div 
                          initial={{ y: -50 }}
                          animate={{ y: 50 }}
                          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2, ease: "easeInOut" }}
                          className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-gold-accent to-transparent shadow-lg shadow-gold-accent"
                        />
                        <UserCheck className="w-12 h-12 text-gold-accent animate-pulse" />
                      </div>

                      <div className="space-y-1.5 text-center">
                        <span className="text-[9px] font-mono font-black text-gold-accent uppercase tracking-widest block animate-pulse">
                          RETINA PATTERN SCANNING IN PROGRESS
                        </span>
                        <p className="text-[10px] text-gray-400 max-w-xs leading-relaxed">
                          Checking biometric records against active senior partner and high-security client dossiers...
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {portalStep === "granted" && (
                    <motion.div
                      key="granted"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-6 py-4"
                    >
                      <div className="bg-emerald-500/10 border border-emerald-500/20 p-4.5 rounded-2xl flex items-start space-x-3.5">
                        <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0 animate-bounce" />
                        <div className="space-y-1">
                          <span className="text-xs font-black text-white uppercase tracking-wider block">
                            WELCOME GORDON SCHMIDT (SENIOR PARTNER)
                          </span>
                          <p className="text-[10.5px] text-gray-300 leading-relaxed pr-2">
                            Secure line established. Current active litigation value is <span className="font-extrabold text-gold-accent">$12.4 Billion</span> across 14 global dockets. All systems ready for strategic override directives.
                          </p>
                        </div>
                      </div>

                      {/* Brief parameters list */}
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                        <div className="bg-white/[0.02] border border-white/[0.04] p-3 rounded-xl">
                          <span className="text-[8px] text-gray-500 font-extrabold block uppercase">ACTIVE LITIGATORS</span>
                          <span className="text-white font-extrabold">12 DEPLOYED</span>
                        </div>
                        <div className="bg-white/[0.02] border border-white/[0.04] p-3 rounded-xl">
                          <span className="text-[8px] text-gray-500 font-extrabold block uppercase">ESCROW HOLDINGS</span>
                          <span className="text-gold-accent font-extrabold">$14.2M SECURED</span>
                        </div>
                      </div>

                      <button
                        onClick={resetPortal}
                        className="w-full py-3.5 bg-white hover:bg-gold-accent text-brand-dark hover:text-brand-dark font-black tracking-widest text-[10px] uppercase rounded-xl transition-all"
                      >
                        CLOSE SECURED CHAMBERS
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Secure Footer */}
              <div className="bg-[#050507] p-4.5 border-t border-white/[0.06] text-center text-gray-500 text-[8.5px] font-mono tracking-wider flex items-center justify-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5 text-gold-accent" />
                <span>CHAMBER SYSTEM INTEGRATION ID: GSD-6953-V</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
