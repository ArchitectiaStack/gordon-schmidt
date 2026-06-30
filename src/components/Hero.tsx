import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Instagram, Facebook, Twitter, Shield, Layers, TrendingUp } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position state for premium floating parallax
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // range -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5; // range -0.5 to 0.5
      setCoords({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // Set up source motion values for precise typing
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);

  // Soft spring physics for the parallax offsets
  const springConfig = { damping: 25, stiffness: 120 };
  const springX = useSpring(mX, springConfig);
  const springY = useSpring(mY, springConfig);

  useEffect(() => {
    mX.set(coords.x);
    mY.set(coords.y);
  }, [coords, mX, mY]);

  // Map spring coordinates to actual pixel translation
  const statsParallaxX = useTransform(springX, [-0.5, 0.5], [15, -15]);
  const statsParallaxY = useTransform(springY, [-0.5, 0.5], [15, -15]);
  const attorneyParallaxX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const attorneyParallaxY = useTransform(springY, [-0.5, 0.5], [-12, 12]);
  const statueParallaxX = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const statueParallaxY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

  // Lady Justice drawing transition configs
  const [chartTriggered, setChartTriggered] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setChartTriggered(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const [activePlaybook, setActivePlaybook] = useState<"defense" | "arbitration" | "mergers">("defense");

  const playbookDetails = {
    defense: {
      quote: "We don't play to settle. We play to dominate. The best corporate defense is a devastating pre-emptive strike.",
      winRate: "99.4%",
      leverage: "COMMANDING",
      partners: "Harvey Specter, Jessica Pearson",
      metricsHeading: "SEC & CORP DEFENSE",
      svgPathLine: "M 10 50 Q 30 15, 60 40 T 110 20 T 160 10 T 190 5",
      svgPathArea: "M 10 50 Q 30 15, 60 40 T 110 20 T 160 10 T 190 5 L 190 60 L 10 60 Z",
      svgPathEmpty: "M 10 60 L 190 60 Z",
      circleX: "160",
      circleY: "10",
      highlightVal: "142 Wins"
    },
    arbitration: {
      quote: "In high-stakes corporate warfare, we secure supreme legal leverage before the opposition even drafts their first motion.",
      winRate: "98.8%",
      leverage: "ABSOLUTE",
      partners: "Louis Litt, Harvey Specter",
      metricsHeading: "INT'L ARBITRATION",
      svgPathLine: "M 10 45 Q 40 25, 80 20 T 130 15 T 170 12 T 190 10",
      svgPathArea: "M 10 45 Q 40 25, 80 20 T 130 15 T 170 12 T 190 10 L 190 60 L 10 60 Z",
      svgPathEmpty: "M 10 60 L 190 60 Z",
      circleX: "130",
      circleY: "15",
      highlightVal: "98.8% Ratio"
    },
    mergers: {
      quote: "When capital is at war, Specter Litt delivers total corporate sovereignty and billion-dollar verdicts. No compromises.",
      winRate: "100%",
      leverage: "ULTIMATE",
      partners: "Harvey Specter, Alex Williams",
      metricsHeading: "M&A LITIGATION",
      svgPathLine: "M 10 55 Q 30 40, 70 15 T 120 10 T 170 5 T 190 2",
      svgPathArea: "M 10 55 Q 30 40, 70 15 T 120 10 T 170 5 T 190 2 L 190 60 L 10 60 Z",
      svgPathEmpty: "M 10 60 L 190 60 Z",
      circleX: "120",
      circleY: "10",
      highlightVal: "$12.4B Settled"
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCoords({ x: 0, y: 0 });
      }}
      className="relative w-full min-h-[95vh] bg-[#F8F9FB] overflow-hidden px-6 pt-12 pb-24 border-b border-black/[0.04]"
    >
      {/* Decorative architectural grid overlay in subtle opacity */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      
      {/* Subtle light vignette circles in background */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-brand-red/[0.02] to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-red/[0.01] blur-3xl pointer-events-none" />

      {/* Majestic Massive Lady Justice Statue as Background Element (Big, transparent blend, and faded smoothly at edges) */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[50%] xl:w-[45%] pointer-events-none z-0 overflow-hidden opacity-[0.14] select-none">
        <div className="relative w-full h-full flex items-end justify-end">
          <motion.img 
            style={{ y: statueParallaxY, x: statueParallaxX }}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            src="/src/assets/images/lady_justice_statue_1782746795280.jpg" 
            alt="Lady Justice Background" 
            className="w-full h-[120%] object-contain object-bottom select-none mix-blend-multiply filter contrast-[1.10] brightness-[1.03]"
            referrerPolicy="no-referrer"
          />
          {/* Advanced Multi-edge soft gradients for seamless blend into the main grid background */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F8F9FB] via-[#F8F9FB]/40 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#F8F9FB] via-[#F8F9FB]/80 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F8F9FB] to-transparent" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F8F9FB] to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 min-h-[650px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* ================= LEFT COLUMN: Text Copy, CTAs, and Attorney Card ================= */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-12 lg:space-y-0 z-20">
          
          {/* Main Hero Copy Block */}
          <div className="space-y-7 pt-6">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-[5.4rem] font-black tracking-tight text-brand-dark leading-[0.92] uppercase font-sans flex flex-col"
            >
              <span className="text-brand-red font-semibold tracking-[0.25em] text-[10px] sm:text-xs uppercase mb-4 select-none">
                // Gordon Schmidt DISPUTE CHAMBERS
              </span>
              <span>WE DON'T</span>
              <span>COMPROMISE.</span>
              <span className="text-gold-accent font-serif tracking-normal leading-none mt-1">WE WIN.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-brand-grey text-sm sm:text-base max-w-lg font-sans font-normal leading-relaxed tracking-wide border-l-2 border-gold-accent pl-4 py-1"
            >
              Securing absolute corporate dominance for Fortune 500 giants, high-profile leaders, and elite enterprises. When the stakes are global, we deliver absolute victory.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a 
                href="#diagnostic"
                className="shimmer-btn inline-flex items-center space-x-2 bg-brand-red hover:bg-brand-red-hover text-white text-[10px] font-bold tracking-widest uppercase px-8 py-4.5 rounded-full transition-all duration-300 transform active:scale-95 shadow-lg shadow-brand-red/15 group"
              >
                <span>GET STARTED</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="#matrix"
                className="inline-flex items-center text-brand-dark hover:text-brand-red text-[10px] font-bold tracking-widest uppercase bg-white border border-black/10 hover:border-brand-red px-8 py-4.5 rounded-full transition-all duration-300"
              >
                LEARN MORE
              </a>
            </motion.div>
          </div>

          {/* Lower Left Feature Card (Attorney Card) - aligned perfectly at bottom left */}
          <motion.div 
            style={{ x: attorneyParallaxX, y: attorneyParallaxY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-black/[0.04] rounded-2xl p-4 shadow-lg shadow-black/[0.02] w-full sm:max-w-md flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300 relative group"
          >
            {/* Elegant circular arrow badge on the portrait */}
            <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-dark group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>

            {/* Professional Portrait of Male Attorney */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-brand-light flex-shrink-0 relative group">
              <img 
                src="https://i.ibb.co/y9jz7Wj/Ein-professionelles-Bewerbungsfoto-ist-der-Schl-ssel-zu-einem-erfolgreichen-Auftreten-im-Job-Der.jpg" 
                alt="Arthur Smith" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>

            {/* Content info */}
            <div className="flex-grow space-y-1 pr-6">
              <a 
                href="#diagnostic"
                className="flex items-center space-x-1"
              >
                <h4 className="font-extrabold text-xs text-brand-dark uppercase tracking-wider leading-tight group-hover:text-brand-red transition-colors">
                  YOUR RIGHTS IS OUR MISSION
                </h4>
              </a>
              <p className="text-[11px] text-brand-grey leading-relaxed">
                Focused on You, Grounded in Law
              </p>
              <div className="pt-2">
                <a 
                  href="#diagnostic"
                  className="text-[9px] font-bold text-brand-dark tracking-widest uppercase hover:text-brand-red transition-colors relative after:absolute after:-bottom-0.5 after:left-0 after:w-1/2 after:h-[1px] after:bg-brand-red"
                >
                  MORE DETAILS
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ================= RIGHT COLUMN: Pearson Specter Litt Litigation Command Console ================= */}
        <div className="lg:col-span-6 flex flex-col justify-center relative z-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-[#0E0E10] border border-white/[0.08] rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/40 relative overflow-hidden"
          >
            {/* Glossy top-border golden glow */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold-accent/40 to-transparent" />
            
            {/* Console Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/[0.06] pb-4 mb-6 space-y-3 sm:space-y-0">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-gold-accent animate-pulse" />
                  <span className="text-[9px] font-black tracking-[0.25em] text-gold-accent uppercase">
                    VICTORY CONSOLE // PSL
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight font-serif uppercase">
                  LITIGATION MATRIX
                </h3>
              </div>
              
              {/* Dynamic Option Selector Pills */}
              <div className="flex flex-wrap gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.05]">
                {(["defense", "arbitration", "mergers"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActivePlaybook(tab)}
                    className={`text-[8.5px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                      activePlaybook === tab 
                        ? "bg-gold-accent text-brand-dark shadow-md font-black" 
                        : "text-gray-400 hover:text-white hover:bg-white/[0.03]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Playbook Description and Embedded Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-6">
              
              {/* Left inner column: dynamic insights & ratios */}
              <div className="md:col-span-5 flex flex-col justify-between space-y-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePlaybook}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 flex-grow flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <span className="text-[9px] font-bold text-gold-accent uppercase tracking-wider font-mono">
                        {activePlaybook === "defense" && "• ANTITRUST & CORP"}
                        {activePlaybook === "arbitration" && "• INT'L TRADE DISPUTES"}
                        {activePlaybook === "mergers" && "• ACQUISITION WAR"}
                      </span>
                      <p className="text-xs text-gray-300 italic font-medium leading-relaxed border-l-2 border-gold-accent/40 pl-3">
                        "{playbookDetails[activePlaybook].quote}"
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-2">
                        <span className="text-[8px] font-extrabold text-gray-500 uppercase tracking-widest block">
                          Win Ratio
                        </span>
                        <span className="text-base font-black text-white font-sans mt-0.5 block">
                          {playbookDetails[activePlaybook].winRate}
                        </span>
                      </div>
                      <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-2">
                        <span className="text-[8px] font-extrabold text-gray-500 uppercase tracking-widest block">
                          LEVERAGE INDEX
                        </span>
                        <span className="text-base font-black text-gold-accent font-sans mt-0.5 block">
                          {playbookDetails[activePlaybook].leverage}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right inner column: Repositioned & Redesigned "Closure Statistics" Chart */}
              <div className="md:col-span-7 bg-white/[0.02] border border-white/[0.04] rounded-2xl p-4 flex flex-col justify-between relative group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-gold-accent animate-pulse" />
                    <span className="text-[9px] font-extrabold text-white uppercase tracking-widest font-sans">
                      CLOSURE PERFORMANCE
                    </span>
                  </div>
                  <span className="text-[8px] text-gold-accent font-extrabold bg-gold-accent/10 px-1.5 py-0.5 rounded uppercase tracking-wider">
                    {playbookDetails[activePlaybook].metricsHeading}
                  </span>
                </div>

                {/* Dynamic Wave Chart */}
                <div className="relative h-24 w-full mt-3">
                  <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="glowGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#C5A880" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#C5A880" stopOpacity="0.00" />
                      </linearGradient>
                    </defs>

                    {/* Faint reference grid lines */}
                    <line x1="0" y1="30" x2="200" y2="30" stroke="#FFF" strokeOpacity="0.03" strokeWidth="1" strokeDasharray="3,3" />

                    <AnimatePresence mode="wait">
                      <motion.path 
                        key={`${activePlaybook}-area`}
                        initial={{ opacity: 0, d: playbookDetails[activePlaybook].svgPathEmpty }}
                        animate={{ opacity: 1, d: playbookDetails[activePlaybook].svgPathArea }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        fill="url(#glowGrad)"
                      />
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                      <motion.path
                        key={`${activePlaybook}-line`}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.0, ease: "easeInOut" }}
                        d={playbookDetails[activePlaybook].svgPathLine}
                        fill="none"
                        stroke="#C5A880"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </AnimatePresence>

                    {/* Pulse point */}
                    <motion.circle 
                      key={`${activePlaybook}-circle`}
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.5, 1] }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                      cx={playbookDetails[activePlaybook].circleX} 
                      cy={playbookDetails[activePlaybook].circleY} 
                      r="4" 
                      fill="#C5A880" 
                      stroke="#0E0E10" 
                      strokeWidth="1.5"
                      className="cursor-pointer shadow-md"
                    />
                  </svg>

                  {/* Active highlight flag */}
                  <div className="absolute top-0 right-1 bg-gold-accent text-brand-dark text-[8.5px] font-black px-1.5 py-0.5 rounded shadow-lg">
                    {playbookDetails[activePlaybook].highlightVal}
                  </div>
                </div>

                <div className="flex justify-between text-[8px] font-bold text-gray-500 uppercase tracking-wider px-1 mt-2 font-mono">
                  <span>Q1</span>
                  <span>Q2</span>
                  <span>Q3</span>
                  <span>Q4</span>
                </div>
              </div>

            </div>

            {/* Bottom Section: Counsel Assigned and Interactive CTA */}
            <div className="border-t border-white/[0.06] pt-4 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              
              {/* Dynamic senior advisors assigned */}
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full border border-white/10 bg-white overflow-hidden shadow-inner">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=60&h=60" 
                      alt="Harvey Specter partner" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="w-7 h-7 rounded-full border border-white/10 bg-white overflow-hidden shadow-inner">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=60&h=60" 
                      alt="Jessica Pearson partner" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="text-[10px] text-gray-400 font-semibold tracking-wide">
                  Lead Counsel: <span className="text-white font-extrabold">{playbookDetails[activePlaybook].partners}</span>
                </div>
              </div>

              {/* Playbook execution CTA */}
              <a 
                href="#diagnostic" 
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white hover:bg-gold-accent hover:text-brand-dark text-brand-dark text-[9px] font-black tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 transform active:scale-95 shadow-md shadow-white/5"
              >
                <span>INITIATE ENGAGEMENT</span>
                <span>→</span>
              </a>

            </div>

          </motion.div>
        </div>

      </div>

      {/* Floating Card 2: "52K Satisfied Clients" - layers naturally over the background grid and statue */}
      <motion.div 
        style={{ x: statsParallaxX, y: statsParallaxY }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="absolute bottom-12 right-12 hidden xl:block w-full max-w-[260px] z-25 bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-4 shadow-xl shadow-black/[0.02]"
      >
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h3 className="text-3xl font-black text-brand-dark tracking-tighter leading-none font-sans">
              52K
            </h3>
            <p className="text-[9px] font-extrabold text-brand-grey uppercase tracking-wider">
              Satisfied Clients
            </p>
          </div>
          
          {/* Overlay Avatars Stack & Circle Arrow */}
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2 overflow-hidden">
              <img 
                className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" 
                alt="Client Elena" 
                referrerPolicy="no-referrer"
              />
              <img 
                className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" 
                alt="Client David" 
                referrerPolicy="no-referrer"
              />
              <img 
                className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" 
                src="/src/assets/images/testimonial_client_1782746825099.jpg" 
                alt="Client Anna" 
                referrerPolicy="no-referrer"
              />
            </div>

            <a 
              href="#testimonials"
              className="w-7 h-7 rounded-full bg-brand-dark flex items-center justify-center text-white hover:bg-brand-red hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-90"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Social Floating Pill - Center it horizontally at the absolute bottom of the entire hero section, floating independently */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-[#0A0A0C] border border-white/[0.08] px-5 py-2.5 rounded-full shadow-2xl flex items-center space-x-6 transform hover:scale-105 transition-all duration-300"
        >
          {/* Instagram button */}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer" 
            className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white hover:text-gold-accent hover:bg-white/20 transition-all duration-200"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* Facebook */}
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white hover:text-gold-accent font-black text-sm transition-all px-1"
          >
            f
          </a>

          {/* Twitter/X */}
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white hover:text-gold-accent transition-all duration-200"
          >
            <Twitter className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>

    </div>
  </section>
  );
}
