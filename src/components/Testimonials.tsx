import { useState } from "react";
import { TESTIMONIALS } from "../data";
import { Volume2, VolumeX, Sparkles, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeTestimonial = TESTIMONIALS[activeIndex];

  // Simulated audio toggle
  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#F5F5F7] border-b border-black/[0.03] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-brand-red text-xs font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full" />
            <span>Verified Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark uppercase">
            Voice of Security
          </h2>
          <p className="text-brand-grey text-sm leading-relaxed">
            Direct transcripts and audio summaries from corporate founders, venture capitalists, and general counsels who have mapped their strategic trajectories to our defense.
          </p>
        </div>

        {/* Testimonials Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vertical Client Avatar Reel (Lg span 4) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col items-center justify-center lg:justify-start gap-6 lg:gap-8 py-4">
            {TESTIMONIALS.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsPlaying(false); // Reset audio play on switch
                  }}
                  className="group relative focus:outline-none flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4 text-center lg:text-left cursor-pointer"
                >
                  {/* Circular Avatar Container with Hover Glow */}
                  <div className="relative">
                    {/* Ring indicator */}
                    <div className={`absolute -inset-1.5 rounded-full blur-sm transition-all duration-300 ${
                      isActive 
                        ? "bg-brand-red/30 scale-105 opacity-100" 
                        : "bg-transparent opacity-0 group-hover:opacity-45 group-hover:bg-brand-red/10"
                    }`} />
                    
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className={`relative w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 transition-all duration-300 ${
                        isActive 
                          ? "border-brand-red scale-105" 
                          : "border-black/[0.08] filter grayscale group-hover:grayscale-0 group-hover:scale-102"
                      }`}
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Tiny meta for desktop layout */}
                  <div className="hidden lg:block space-y-0.5">
                    <h4 className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                      isActive ? "text-brand-dark" : "text-brand-grey group-hover:text-brand-dark"
                    }`}>
                      {item.author}
                    </h4>
                    <p className="text-[10px] text-brand-grey leading-none">
                      {item.company}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Immersive Quote Board (Lg span 8) */}
          <div className="lg:col-span-8 bg-white border border-black/[0.04] rounded-3xl p-8 md:p-12 shadow-xl shadow-black/[0.01] min-h-[380px] flex flex-col justify-between">
            
            {/* Morphing Quote Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Large quotation character symbol */}
                <div className="text-6xl font-serif text-brand-red opacity-20 -mb-8 leading-none">
                  “
                </div>

                <blockquote className="text-lg md:text-2xl font-medium text-brand-dark italic leading-relaxed font-sans">
                  {activeTestimonial.quote}
                </blockquote>

                {/* Author Info block */}
                <div className="space-y-1">
                  <cite className="not-italic text-sm font-bold text-brand-dark uppercase tracking-wider">
                    {activeTestimonial.author}
                  </cite>
                  <p className="text-xs text-brand-grey font-semibold">
                    {activeTestimonial.role} — <span className="text-brand-red">{activeTestimonial.company}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="h-[1px] bg-black/[0.06] my-8 w-full" />

            {/* Audio Toggle & Soundwave Bar Component */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              
              {/* Play Audio Button */}
              <button
                onClick={toggleAudio}
                className={`inline-flex items-center space-x-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 transform active:scale-95 ${
                  isPlaying 
                    ? "bg-brand-red text-white shadow-md shadow-brand-red/10" 
                    : "bg-brand-light hover:bg-brand-dark hover:text-white text-brand-dark"
                }`}
              >
                {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>{isPlaying ? "Pause Case Summary" : "Listen to Audio Review"}</span>
                <span className="text-[10px] opacity-70 ml-1">({activeTestimonial.audioDuration})</span>
              </button>

              {/* Cinematic Soundwave representation */}
              <div className="flex items-center space-x-1.5 h-8 flex-grow justify-end max-w-xs">
                {/* 14 vertical wave lines styled in dynamic flex */}
                {[2, 4, 3, 5, 2, 6, 4, 3, 5, 2, 4, 3, 5, 2].map((heightScale, idx) => (
                  <motion.div
                    key={idx}
                    className={`w-1 rounded-full ${
                      isPlaying ? "bg-brand-red" : "bg-black/10"
                    }`}
                    style={{ height: `${heightScale * 4}px` }}
                    animate={
                      isPlaying 
                        ? { height: [`${heightScale * 4}px`, `${heightScale * 7}px`, `${heightScale * 3}px`, `${heightScale * 4}px`] } 
                        : { height: `${heightScale * 4}px` }
                    }
                    transition={{
                      duration: 1 + (idx % 3) * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
