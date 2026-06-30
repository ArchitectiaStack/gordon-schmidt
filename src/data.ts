import { PracticeArea, CaseResolution, Testimonial, DiagnosticResult } from "./types";

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "venture-capital",
    title: "Venture Capital & Finance",
    description: "Structuring seed rounds, Series A-E financing, capital allocation, and debt instruments for hyper-growth enterprises.",
    category: "Corporate",
    iconName: "TrendingUp",
    details: ["Term sheet advisory", "Cap table modeling", "LP/GP advisory", "Equity incentive compliance"]
  },
  {
    id: "tech-ip",
    title: "Tech Intellectual Property",
    description: "Defending patents, registering high-value trademarks, managing trade secrets, and drafting strategic cross-licensing.",
    category: "Technology",
    iconName: "ShieldAlert",
    details: ["Patent litigation", "Global copyright filings", "IP audits & due diligence", "Software escrow design"]
  },
  {
    id: "intl-trade",
    title: "International Trade Law",
    description: "Advising multi-national corporations on export controls, sanctions, customs regulations, and tariff-structure shielding.",
    category: "Regulatory",
    iconName: "Globe",
    details: ["OFAC compliance audits", "Customs dispute mitigation", "Cross-border tech transfers", "Supply chain security"]
  },
  {
    id: "m-and-a",
    title: "Mergers & Acquisitions",
    description: "Surgical execution of buy-side and sell-side transactions, asset carve-outs, hostile takeover defense, and joint ventures.",
    category: "Corporate",
    iconName: "Briefcase",
    details: ["Anti-trust clearance", "Strategic integrations", "Post-closing representation", "Leveraged buyouts"]
  },
  {
    id: "corp-compliance",
    title: "Corporate Governance",
    description: "Establishing bulletproof internal controls, Sarbanes-Oxley alignments, ESG structures, and executive board advisory.",
    category: "Governance",
    iconName: "FileCheck",
    details: ["Board policy design", "Crisis management protocol", "Whistleblower system setup", "ESG metrics audits"]
  },
  {
    id: "employment",
    title: "Executive & Employment",
    description: "Crafting non-competes, executive compensation packages, severance terms, and enterprise class-action defense.",
    category: "Labor",
    iconName: "Users",
    details: ["Equity retention packages", "Trade secret covenants", "EEO representation", "Wage & hour structures"]
  }
];

export const CASE_RESOLUTIONS: CaseResolution[] = [
  {
    id: "res-1",
    title: "Venture Capital Capital Call Dispute",
    clientType: "FinTech Enterprise",
    recovery: "$4.2M",
    recoveryValue: 4200000,
    description: "Successfully resolved a complex capital call default among lead general partners, ensuring zero cap table dilution and preserving seed capital structures.",
    year: 2025,
    badge: "Settlement"
  },
  {
    id: "res-2",
    title: "Transnational Trade Sanctions Defense",
    clientType: "Logistics SaaS Group",
    recovery: "$12.8M",
    recoveryValue: 12800000,
    description: "Represented client in complex OFAC tariff enforcement actions, securing complete administrative dismissal and saving key shipping corridors.",
    year: 2025,
    badge: "Arbitration Win"
  },
  {
    id: "res-3",
    title: "Patent Infringement Counter-Claim",
    clientType: "AI Semiconductor Developer",
    recovery: "$8.5M",
    recoveryValue: 8500000,
    description: "Neutralized aggressive non-practicing entity claims with a counter-claim of IP invalidity, leading to structured lifetime licensing royalties.",
    year: 2026,
    badge: "Jury Verdict"
  },
  {
    id: "res-4",
    title: "Hostile Takeover Block & Restructuring",
    clientType: "MedTech Infrastructure Co.",
    recovery: "$21.5M",
    recoveryValue: 21500000,
    description: "Designed multi-tiered shareholder rights plans (poison pills) that forced corporate suitors to negotiate a 42% premium valuation increase.",
    year: 2026,
    badge: "Restructuring"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "The legal strategies designed by Smith Legal Group allowed us to close our Series B and protect our core AI algorithms with zero friction. They aren't just legal advisors—they are operational architects.",
    author: "Elena Rostova",
    company: "Velocity Tech",
    role: "CEO & Co-Founder",
    avatar: "https://i.ibb.co/8nbn1cdB/Locker-Modern-Selbstbewusst-sympathisch-und-professionell-dein-Bewerbungsfoto-sollte-dich.jpg", // Generated female entrepreneur
    audioDuration: "2:45"
  },
  {
    id: "test-2",
    quote: "When facing heavy regulatory crosswinds from European authorities, Arthur Smith mapped out a Compliance Safeguard that saved our supply chain and shielded our board from personal liabilities.",
    author: "David Chen",
    company: "Horizon Trade Corp",
    role: "VP of Global Logistics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150", // Premium clean headshot
    audioDuration: "1:58"
  },
  {
    id: "test-3",
    quote: "In high-stakes venture litigation, every hour of delay costs millions. Smith Legal Group acted within minutes, obtaining an emergency injunction that saved our proprietary database architecture.",
    author: "Marcus Vance",
    company: "Apex Cryptographic",
    role: "General Counsel",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150", // Premium clean headshot
    audioDuration: "3:12"
  }
];

export const DIAGNOSTIC_ATTORNEYS = {
  corporate: {
    attorneyName: "Arthur Smith",
    attorneyTitle: "Managing Partner, Corporate Finance & VC",
    attorneyImage: "https://i.ibb.co/y9jz7Wj/Ein-professionelles-Bewerbungsfoto-ist-der-Schl-ssel-zu-einem-erfolgreichen-Auftreten-im-Job-Der.jpg", // Generated attorney portrait
    matchScore: 98,
    focusArea: "Venture Financing & M&A",
    strategyMessage: "Your profile indicates high demand for sophisticated venture governance and rapid financing coordination. Arthur Smith specializes in structuring high-leverage deals that minimize founder dilution."
  },
  technology: {
    attorneyName: "Elena Vance",
    attorneyTitle: "Senior Partner, AI Patents & Trade Secrets",
    attorneyImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
    matchScore: 95,
    focusArea: "Intellectual Property Defense",
    strategyMessage: "Given your tech-first operational focus, guarding digital proprietary secrets is paramount. Elena Vance provides targeted advice on multi-national licensing frameworks and patent filings."
  },
  regulatory: {
    attorneyName: "Marcus Thorne",
    attorneyTitle: "Senior Partner, Transnational Regulatory Affairs",
    attorneyImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300",
    matchScore: 97,
    focusArea: "OFAC & International Trade Audits",
    strategyMessage: "Operating globally introduces friction with sanctions, customs, and tariff compliance. Marcus Thorne can audit your current supplier agreements and shield your entities from regulatory enforcement actions."
  }
};
