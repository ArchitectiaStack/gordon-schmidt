import { ArrowUp, ShieldAlert, Sparkles } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-8 px-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Logo & Manifesto Column (Lg span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-2.5">
              <div className="w-7 h-7 bg-brand-red rounded-lg flex items-center justify-center">
                {/* Elegant cross star */}
                <div className="absolute w-4 h-1 bg-white rounded-full"></div>
                <div className="absolute w-1 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-base font-bold tracking-tight">
                Smith Legal Group
              </span>
            </div>
            
            <p className="text-brand-grey text-xs leading-relaxed max-w-sm">
              Helping high-growth enterprises and venture founders navigate complex transactional regulatory environments and defend critical technological assets.
            </p>

            <div className="space-y-1 text-xs">
              <div className="text-brand-grey font-semibold">HQ Address:</div>
              <div className="text-white">600 Montgomery St, San Francisco, CA 94111</div>
            </div>
          </div>

          {/* Directory Column 1: Services (Lg span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Practices
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-grey">
              <li><a href="#matrix" className="hover:text-white transition-colors">Venture Financing</a></li>
              <li><a href="#matrix" className="hover:text-white transition-colors">Patent & IP Defense</a></li>
              <li><a href="#matrix" className="hover:text-white transition-colors">Global Sanctions</a></li>
              <li><a href="#matrix" className="hover:text-white transition-colors">M&A Integrations</a></li>
              <li><a href="#matrix" className="hover:text-white transition-colors">Sarbanes-Oxley Audits</a></li>
            </ul>
          </div>

          {/* Directory Column 2: Firm (Lg span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Firm
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-grey">
              <li><a href="#diagnostic" className="hover:text-white transition-colors">Our Partners</a></li>
              <li><a href="#resolutions" className="hover:text-white transition-colors">Case Ledger</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Client Briefings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career Pathways</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Office</a></li>
            </ul>
          </div>

          {/* Directory Column 3: Contact & Support (Lg span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Secure Communications
            </h4>
            <ul className="space-y-3 text-xs text-brand-grey">
              <li className="flex items-center space-x-2">
                <span className="font-semibold text-white">Advisory Desk:</span>
                <span>+1 (415) 555-0190</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-semibold text-white">Encryption PGPs:</span>
                <span className="font-mono text-[10px] bg-white/5 px-2 py-0.5 rounded text-white/80">0x7B29F4D03</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-semibold text-white">Corporate Brief:</span>
                <span>briefing@smithlegal.com</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={handleScrollToTop}
                className="inline-flex items-center space-x-1.5 text-xs text-white hover:text-brand-red transition-colors font-semibold uppercase tracking-wider"
              >
                <span>Back to Zenith</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Regulatory Disclosures Box */}
        <div className="border-t border-white/10 pt-8 pb-4 space-y-4">
          <div className="flex items-start space-x-2 text-[10px] text-brand-grey leading-relaxed">
            <ShieldAlert className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-white font-semibold">ATTORNEY ADVERTISING NOTICE:</strong> Prior results do not guarantee a similar outcome. Content provided on this digital representation is for foundational informational purposes only and does not establish a binding attorney-client relationship under any California or Federal Bar Association code of professional conduct. Secure client information is guarded with military-grade transport layer encryption protocols.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] text-brand-grey gap-4">
            <span>© 2026 Smith Legal Group LLP. All Rights Shielded.</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Shield</a>
              <a href="#" className="hover:text-white transition-colors">Bar Disclosures</a>
              <a href="#" className="hover:text-white transition-colors">Fee Schedule Agreements</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
