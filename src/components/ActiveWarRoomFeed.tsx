import { useState, useEffect } from "react";
import { Shield, Eye, Flame, Terminal, Play, Radio, Users, Cpu, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface WarEvent {
  id: string;
  time: string;
  category: "M&A" | "ANTITRUST" | "SEC" | "LITIGATION";
  status: "CRITICAL" | "RESOLVED" | "HEARING" | "VERDICT";
  title: string;
  detail: string;
  leverageIndex: number;
}

export default function ActiveWarRoomFeed() {
  const [activeRoom, setActiveRoom] = useState<"chambers" | "briefing" | "docket">("chambers");
  const [selectedEvent, setSelectedEvent] = useState<WarEvent | null>(null);
  const [timeStr, setTimeStr] = useState("09:00:00 EST");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString("en-US", { hour12: false }) + " EST");
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const warEvents: WarEvent[] = [
    {
      id: "ev-01",
      time: "09:42:15",
      category: "M&A",
      status: "CRITICAL",
      title: "Chevron-Sandridge Acquisition Takeover",
      detail: "Injunction dismissed in federal district court. Harvey Specter has successfully cleared the path for the $14.2 Billion merger. SEC antitrust block dissolved.",
      leverageIndex: 99.8,
    },
    {
      id: "ev-02",
      time: "10:14:03",
      category: "SEC",
      status: "RESOLVED",
      title: "SEC Investigation: Apex Crypto Holdings",
      detail: "All investigations closed without fines or fault. Secured an airtight, pre-emptive safe-harbor declaration for the client.",
      leverageIndex: 100,
    },
    {
      id: "ev-03",
      time: "11:30:00",
      category: "ANTITRUST",
      status: "HEARING",
      title: "Omnicorp Global Trust Restructuring",
      detail: "Louis Litt defending market share thresholds in the Southern District of New York. Opposition settlement requested, refused.",
      leverageIndex: 92.4,
    },
    {
      id: "ev-04",
      time: "13:02:40",
      category: "LITIGATION",
      status: "VERDICT",
      title: "Billion-Dollar Class Action (Stark Pharma)",
      detail: "Jury returned a unanimous defense verdict in favor of our client. Total victory. Zero liability declared.",
      leverageIndex: 100,
    }
  ];

  return (
    <section className="py-24 bg-[#09090B] text-white border-b border-white/[0.04] relative overflow-hidden">
      {/* Background architectural glow */}
      <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] rounded-full bg-gold-accent/[0.02] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[40rem] h-[40rem] rounded-full bg-brand-red/[0.01] blur-[140px] pointer-events-none" />
      
      {/* Delicate horizontal alignment lines */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
              </span>
              <span className="text-[10px] font-black tracking-[0.25em] text-gold-accent uppercase font-mono">
                SPECTER LITT LIVE WAR ROOM FEED
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif uppercase">
              THE WAR ROOM ENGINE
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-xl leading-relaxed">
              Real-time feed from our firm's primary litigation operations. We don't wait for legal briefs; we shape corporate outcomes live in real-time.
            </p>
          </div>
          
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-right font-mono flex items-center space-x-4">
            <div className="text-left">
              <span className="text-[8px] text-gray-500 block font-bold uppercase tracking-widest">SERVER CLOCK</span>
              <span className="text-xs font-bold text-white tracking-wider">{timeStr}</span>
            </div>
            <div className="h-6 w-[1px] bg-white/[0.1]" />
            <div className="text-left">
              <span className="text-[8px] text-gray-500 block font-bold uppercase tracking-widest">ACTIVE SYSTEMS</span>
              <span className="text-xs font-bold text-emerald-400 tracking-wider">ALL SECURED</span>
            </div>
          </div>
        </div>

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COMMAND MENU: Quick Navigation Pills */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <button
              onClick={() => setActiveRoom("chambers")}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between ${
                activeRoom === "chambers" 
                  ? "bg-white/[0.05] border-gold-accent text-white shadow-lg" 
                  : "bg-white/[0.01] border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/[0.02]"
              }`}
            >
              <div className="space-y-1">
                <span className="text-[8px] font-black tracking-widest uppercase block font-mono">ROOM ALPHA</span>
                <span className="text-xs font-bold uppercase">Active Litigation</span>
              </div>
              <Shield className={`w-4 h-4 ${activeRoom === "chambers" ? "text-gold-accent" : "text-gray-600"}`} />
            </button>

            <button
              onClick={() => setActiveRoom("briefing")}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between ${
                activeRoom === "briefing" 
                  ? "bg-white/[0.05] border-gold-accent text-white shadow-lg" 
                  : "bg-white/[0.01] border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/[0.02]"
              }`}
            >
              <div className="space-y-1">
                <span className="text-[8px] font-black tracking-widest uppercase block font-mono">ROOM BETA</span>
                <span className="text-xs font-bold uppercase">Live Media Briefing</span>
              </div>
              <Radio className={`w-4 h-4 ${activeRoom === "briefing" ? "text-gold-accent" : "text-gray-600"}`} />
            </button>

            <button
              onClick={() => setActiveRoom("docket")}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between ${
                activeRoom === "docket" 
                  ? "bg-white/[0.05] border-gold-accent text-white shadow-lg" 
                  : "bg-white/[0.01] border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/[0.02]"
              }`}
            >
              <div className="space-y-1">
                <span className="text-[8px] font-black tracking-widest uppercase block font-mono">ROOM GAMMA</span>
                <span className="text-xs font-bold uppercase">SEC Docket Matrix</span>
              </div>
              <Terminal className={`w-4 h-4 ${activeRoom === "docket" ? "text-gold-accent" : "text-gray-600"}`} />
            </button>

            {/* Simulated Quote */}
            <div className="border border-white/[0.06] bg-white/[0.01] rounded-2xl p-5 mt-4 flex flex-col justify-between flex-grow space-y-4">
              <span className="text-[8px] font-black tracking-[0.2em] text-gold-accent uppercase font-mono block">
                • SPECTER DICTUM
              </span>
              <p className="text-[11px] text-gray-400 italic leading-relaxed">
                "First impressions count. If you start behind the eight ball, you'll never win. We strike first, and we strike clean."
              </p>
              <div className="text-[9px] text-white font-extrabold uppercase tracking-wider block">
                — Harvey Specter, Senior Partner
              </div>
            </div>
          </div>

          {/* MIDDLE COMMAND FEED: The Real-Time Operations List */}
          <div className="lg:col-span-5 bg-white/[0.02] border border-white/[0.06] rounded-3xl p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest font-mono">
                  LATEST DISPATCHES
                </span>
                <span className="text-[8px] text-gold-accent font-bold font-mono">
                  LIVE SECURE TUNNEL
                </span>
              </div>

              <div className="space-y-3.5 max-h-[340px] overflow-y-auto pr-1">
                {warEvents.map((ev) => (
                  <div 
                    key={ev.id}
                    onClick={() => setSelectedEvent(ev)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-300 ${
                      selectedEvent?.id === ev.id 
                        ? "bg-gold-accent/[0.06] border-gold-accent/40" 
                        : "bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.02] hover:border-white/[0.1]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center space-x-2">
                        <span className="text-[8.5px] font-mono text-gray-500">{ev.time}</span>
                        <span className={`text-[8px] font-black tracking-widest px-2 py-0.5 rounded uppercase ${
                          ev.status === "CRITICAL" ? "bg-red-500/20 text-red-400" :
                          ev.status === "RESOLVED" ? "bg-emerald-500/20 text-emerald-400" :
                          ev.status === "VERDICT" ? "bg-gold-accent/20 text-gold-accent" :
                          "bg-blue-500/20 text-blue-400"
                        }`}>
                          {ev.status}
                        </span>
                      </div>
                      <span className="text-[9px] font-bold text-gray-400 font-mono">{ev.category}</span>
                    </div>
                    <h4 className="text-xs font-bold text-white group-hover:text-gold-accent transition-colors">
                      {ev.title}
                    </h4>
                    <p className="text-[10px] text-gray-400 line-clamp-1 mt-1 leading-normal">
                      {ev.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[9px] text-gray-500 font-mono mt-4 pt-3 border-t border-white/[0.04] flex justify-between items-center">
              <span>STATUS: LIVE STREAMING AUTHENTIC CLIENT DATA</span>
              <span>TUNNEL ID: PSL-SECURE-9</span>
            </div>
          </div>

          {/* RIGHT COMMAND ANALYSIS: Selected Event Deep-Dive */}
          <div className="lg:col-span-4 bg-white/[0.02] border border-white/[0.06] rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden">
            {/* Glossy top detail line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold-accent/30 to-transparent" />
            
            <AnimatePresence mode="wait">
              {selectedEvent ? (
                <motion.div
                  key={selectedEvent.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-grow flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold text-gold-accent uppercase tracking-widest font-mono">
                        TACTICAL OVERVIEW // PSL
                      </span>
                      <span className="text-[9px] font-mono text-gray-400">
                        LEVERAGE INDEX: {selectedEvent.leverageIndex}%
                      </span>
                    </div>

                    <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedEvent.leverageIndex}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-brand-red to-gold-accent" 
                      />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-white leading-snug tracking-tight font-serif uppercase">
                        {selectedEvent.title}
                      </h3>
                      <p className="text-xs text-gray-300 leading-relaxed bg-white/[0.01] border border-white/[0.04] p-3.5 rounded-xl">
                        {selectedEvent.detail}
                      </p>
                    </div>

                    {/* Team assigned */}
                    <div className="space-y-2">
                      <span className="text-[8.5px] font-black tracking-widest text-gray-500 uppercase block font-mono">
                        STRATEGIC ADVOCATE ASSIGNED
                      </span>
                      <div className="flex items-center space-x-3 bg-white/[0.02] border border-white/[0.04] p-2.5 rounded-xl">
                        <div className="w-8 h-8 rounded-full border border-white/10 overflow-hidden bg-gray-800">
                          <img 
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=60&h=60" 
                            alt="Harvey Specter Senior Partner"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-white block">Harvey Specter</span>
                          <span className="text-[9px] text-gold-accent uppercase font-black tracking-wider">SENIOR MANAGING PARTNER</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-[9px] font-black text-gray-500 uppercase font-mono">AUTHORIZED VERDICT</span>
                    <button 
                      onClick={() => setSelectedEvent(null)}
                      className="text-[9.5px] font-bold text-gold-accent hover:text-white transition-colors uppercase tracking-wider"
                    >
                      Clear Selection ×
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center space-y-4 my-auto py-12">
                  <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gold-accent">
                    <Terminal className="w-5 h-5 animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Console Operational
                    </h4>
                    <p className="text-[11px] text-gray-400 max-w-[220px] leading-relaxed mx-auto">
                      Select an active dispatch event from the Live Tunnel Feed to perform real-time litigation threat assessments.
                    </p>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
