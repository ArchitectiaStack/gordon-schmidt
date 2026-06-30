import { useState } from "react";
import { Mail, Calendar, Clock, Check, ArrowRight, ShieldCheck, Sparkles, Send, ShieldAlert, Key, Lock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ConsultationPortal() {
  const [email, setEmail] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isBooked, setIsBooked] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [briefAttached, setBriefAttached] = useState(false);
  const [secClearance, setSecClearance] = useState("LEVEL_3_STANDARD");

  const daysAhead = [
    { name: "Mon", date: "Jun 29", desc: "Today Only" },
    { name: "Tue", date: "Jun 30", desc: "Available" },
    { name: "Wed", date: "Jul 01", desc: "Available" },
    { name: "Thu", date: "Jul 02", desc: "Available" },
    { name: "Fri", date: "Jul 03", desc: "Fully Loaded" }
  ];

  const timeSlots = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

  const handleInputClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const validateEmail = (val: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(val);
  };

  const handleBook = () => {
    if (!email) {
      setEmailError("Corporate enterprise email address is required.");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid senior corporate email.");
      return;
    }
    setEmailError("");
    
    if (!selectedDate || !selectedTime) {
      return;
    }

    setIsBooked(true);
  };

  return (
    <section id="consultation" className="py-24 bg-[#09090B] text-white border-b border-white/[0.04] scroll-mt-16 overflow-hidden relative">
      {/* Absolute gold highlight line on top */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-accent/40 to-transparent" />
      
      {/* Background majestic mesh gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-to-tr from-gold-accent/[0.015] to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: Giant stylized overlapping background typography and physical brief metadata card */}
          <div className="lg:col-span-6 relative h-[380px] lg:h-[480px] flex flex-col justify-center select-none">
            
            {/* Giant overlapping wireframe outlined and solid texts */}
            <div className="absolute left-0 top-0 text-[4rem] sm:text-[5.5rem] lg:text-[6.5rem] font-black leading-none uppercase tracking-tighter opacity-[0.02] text-white">
              SPECTER
            </div>
            <div className="absolute left-4 top-[25%] text-[4rem] sm:text-[5.5rem] lg:text-[6.5rem] font-black leading-none uppercase tracking-tighter opacity-[0.04] text-gold-accent">
              LITT
            </div>
            <div className="absolute left-10 top-[50%] text-[4rem] sm:text-[5.5rem] lg:text-[6.5rem] font-black leading-none uppercase tracking-tighter opacity-[0.02] text-white">
              PEARSON
            </div>

            {/* A professional visual card floating above */}
            <div className="relative bg-[#121215] border border-white/[0.06] p-8 sm:p-10 rounded-3xl text-white shadow-2xl shadow-black/80 max-w-lg space-y-6 pointer-events-auto">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black text-gold-accent uppercase tracking-[0.25em] font-mono">
                  • INITIATE ENGAGEMENT MATRIX
                </span>
                <span className="text-[8px] bg-gold-accent/10 border border-gold-accent/20 text-gold-accent px-2 py-0.5 rounded font-mono uppercase font-bold">
                  PRIVILEGED BRIEF
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide leading-tight font-serif text-white">
                COMMENCE THE PRE-EMPTIVE STRATEGY
              </h3>
              
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans">
                At Pearson Specter Litt, we secure legal, corporate, and financial sovereignty before the opposing side realizes they've made a fatal strategic error. Initiate secure briefing now.
              </p>

              <div className="border-t border-white/[0.06] pt-4.5 space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono font-bold text-gray-500">
                  <span>COUNSEL SECURITY RANKING:</span>
                  <span className="text-white">LEVEL 4 SECURE CHAMBERS</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono font-bold text-gray-500">
                  <span>MAXIMUM RESPONSE DURATION:</span>
                  <span className="text-gold-accent">15 MINUTES MAXIMUM</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Interactive Elastic Portal Form (Redesigned & Premium Gold accented) */}
          <div className="lg:col-span-6 z-20">
            <motion.div
              layout
              animate={{ 
                scale: isExpanded ? 1.01 : 1,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`bg-[#0E0E10] border p-6 sm:p-8 rounded-3xl transition-all duration-300 relative overflow-hidden ${
                isExpanded ? "border-gold-accent/30 shadow-2xl shadow-black/40" : "border-white/[0.06] shadow-xl"
              }`}
            >
              {/* Gold visual highlight line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold-accent/40 to-transparent" />

              <AnimatePresence mode="wait">
                {isBooked ? (
                  /* BOOKING CONFIRMED STATE */
                  <motion.div
                    key="booked"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 text-center py-8"
                  >
                    <div className="w-14 h-14 rounded-full bg-gold-accent/10 border border-gold-accent/20 flex items-center justify-center text-gold-accent mx-auto shadow-inner">
                      <ShieldCheck className="w-8 h-8 animate-pulse" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-white uppercase tracking-wider font-serif">
                        APPOINTMENT LOCKED IN RETENTION
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed max-w-sm mx-auto">
                        Your secure strategy session with senior managing counsel is locked for <span className="font-extrabold text-white">{selectedDate}</span> at <span className="font-extrabold text-white">{selectedTime}</span>.
                      </p>
                    </div>

                    <div className="bg-white/[0.02] border border-white/[0.06] p-4 rounded-xl max-w-sm mx-auto text-left space-y-2 text-xs">
                      <div className="text-[9px] font-black text-gold-accent uppercase tracking-widest font-mono">ENCRYPTED CORPORATE DESTINATION</div>
                      <div className="font-semibold text-white">{email}</div>
                      <p className="text-gray-400 text-[10px] pt-1 leading-relaxed">
                        A unique attorney-client privilege cryptographic confirmation key and direct video uplink details have been transmitted to your secure address.
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setIsBooked(false);
                        setIsExpanded(false);
                        setEmail("");
                        setSelectedDate(null);
                        setSelectedTime(null);
                        setBriefAttached(false);
                      }}
                      className="px-6 py-3 bg-white text-brand-dark hover:bg-gold-accent font-black text-[10px] uppercase tracking-widest rounded-full transition-all"
                    >
                      CLEAR & RESET TERMINAL
                    </button>
                  </motion.div>
                ) : (
                  /* PORTAL FORM & SLIDEOUT CALENDAR */
                  <motion.div key="form" className="space-y-6">
                    <div className="space-y-1.5">
                      <div className="flex items-center space-x-2">
                        <Key className="w-3.5 h-3.5 text-gold-accent" />
                        <span className="text-[10px] font-bold text-gold-accent uppercase tracking-widest font-mono">
                          SECURE ESCROW TERMINAL
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white uppercase tracking-wide font-serif">
                        ENTER BRIEF DIRECTORY
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        Provide your executive business address to unlock senior priority consultation slots instantly.
                      </p>
                    </div>

                    {/* Email Input Field */}
                    <div className="space-y-2">
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          type="email"
                          placeholder="name@corporatesovereign.com"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (emailError) setEmailError("");
                          }}
                          onClick={handleInputClick}
                          className="w-full bg-white/[0.02] border border-white/10 rounded-xl py-4.5 pl-11 pr-32 text-xs font-semibold text-white focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all placeholder:text-gray-600"
                        />
                        {/* Interactive trigger button */}
                        {!isExpanded && (
                          <button
                            onClick={handleInputClick}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gold-accent text-brand-dark hover:text-brand-dark text-[9px] font-black uppercase tracking-wider px-4 py-2.5 rounded-lg transition-colors"
                          >
                            OPEN TERMINAL
                          </button>
                        )}
                      </div>
                      {emailError && (
                        <p className="text-brand-red text-[10px] font-semibold pl-2">
                          ⚠️ {emailError}
                        </p>
                      )}
                    </div>

                    {/* Elastic Slide-down Calendar Section */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="space-y-6 pt-5 border-t border-white/[0.06] overflow-hidden"
                        >
                          {/* Calendar Picker Grid */}
                          <div className="space-y-3">
                            <label className="flex items-center space-x-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">
                              <Calendar className="w-3.5 h-3.5 text-gold-accent" />
                              <span>SELECT COURT ENGAGEMENT TIMEFRAME</span>
                            </label>
                            
                            <div className="grid grid-cols-5 gap-2.5">
                              {daysAhead.map((day) => {
                                const isSel = selectedDate === day.date;
                                return (
                                  <button
                                    key={day.date}
                                    onClick={() => setSelectedDate(day.date)}
                                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-between transition-all ${
                                      isSel 
                                        ? "bg-gold-accent text-brand-dark border-gold-accent shadow-md" 
                                        : "bg-white/[0.01] border-white/[0.04] hover:border-white/[0.1] text-gray-300"
                                    }`}
                                  >
                                    <span className={`text-[8px] font-bold uppercase tracking-wider ${isSel ? "text-brand-dark font-black" : "text-gray-500"}`}>
                                      {day.name}
                                    </span>
                                    <span className="text-xs font-black tracking-tight my-1">
                                      {day.date.split(" ")[1]}
                                    </span>
                                    <span className={`text-[7.5px] font-bold leading-none uppercase ${isSel ? "text-brand-dark/80" : "text-gray-500"}`}>
                                      {day.desc}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Time Slots Selector */}
                          <div className="space-y-3">
                            <label className="flex items-center space-x-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">
                              <Clock className="w-3.5 h-3.5 text-gold-accent" />
                              <span>SELECT PRIVATE BRIEFING SEGMENT</span>
                            </label>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                              {timeSlots.map((slot) => {
                                const isSel = selectedTime === slot;
                                return (
                                  <button
                                    key={slot}
                                    onClick={() => setSelectedTime(slot)}
                                    className={`py-2 px-1.5 rounded-lg border text-center font-mono text-[9px] font-bold tracking-wider transition-all ${
                                      isSel 
                                        ? "bg-white text-brand-dark border-white" 
                                        : "bg-white/[0.01] border-white/[0.04] hover:border-white/[0.1] text-gray-400 hover:text-white"
                                    }`}
                                  >
                                    {slot}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* ADDED SPECIAL INTERACTIVE OPTION: Pre-Trial Brief Security Upload */}
                          <div className="space-y-3 bg-white/[0.01] border border-white/[0.04] p-4 rounded-2xl">
                            <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                <span className="text-[9px] font-bold text-gold-accent uppercase tracking-widest font-mono block">
                                  TACTICAL ENCRYPTED DOSSIER ATTACHMENT
                                </span>
                                <p className="text-[10px] text-gray-400 leading-normal">
                                  Do you want to attach high-profile SEC briefs or corporate filings immediately?
                                </p>
                              </div>
                              <button
                                onClick={() => setBriefAttached(!briefAttached)}
                                className={`px-3 py-1.5 rounded-xl text-[8px] font-black uppercase tracking-widest transition-all ${
                                  briefAttached 
                                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" 
                                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                                }`}
                              >
                                {briefAttached ? "✓ ATTACHED" : "ATTACH FILE"}
                              </button>
                            </div>
                            {briefAttached && (
                              <motion.div
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-[9.5px] text-emerald-400 font-mono flex items-center space-x-1.5 bg-emerald-500/[0.02] border border-emerald-500/[0.08] p-2 rounded-lg"
                              >
                                <Lock className="w-3.5 h-3.5" />
                                <span>AES-256 SECURED: brief_dossier_encrypted.pdf linked. Ready for Harvey Specter's review.</span>
                              </motion.div>
                            )}
                          </div>

                          {/* Submit Secure Booking */}
                          <button
                            onClick={handleBook}
                            disabled={!selectedDate || !selectedTime}
                            className={`w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-2 transition-all ${
                              selectedDate && selectedTime
                                ? "bg-gold-accent hover:bg-gold-accent/90 text-brand-dark shadow-lg cursor-pointer"
                                : "bg-white/5 text-gray-600 border border-white/[0.03] cursor-not-allowed"
                            }`}
                          >
                            <span>LOCK ADVISORY ASSIGNMENT</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>

                          <div className="flex items-center justify-center space-x-1.5 text-[8.5px] text-gray-500 font-mono">
                            <ShieldCheck className="w-3.5 h-3.5 text-gold-accent" />
                            <span>100% UNCONDITIONAL CLIENT-ATTORNEY PRIVILEGE PROTECTED</span>
                          </div>

                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
