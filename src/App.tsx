import Header from "./components/Header";
import Hero from "./components/Hero";
import ActiveWarRoomFeed from "./components/ActiveWarRoomFeed";
import PracticeMatrix from "./components/PracticeMatrix";
import SpecterPlaybook from "./components/SpecterPlaybook";
import ResolutionStream from "./components/ResolutionStream";
import ClientSovereignLedger from "./components/ClientSovereignLedger";
import DiagnosticWizard from "./components/DiagnosticWizard";
import Testimonials from "./components/Testimonials";
import ConsultationPortal from "./components/ConsultationPortal";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#F8F8FA] text-brand-dark flex flex-col font-sans selection:bg-gold-accent selection:text-white">
      {/* 1. Header Navigation Bar (Redesigned with top active ticker & Biometric client portal overlay) */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 2. Hero Section (Redesigned with massive Lady Justice blending background & playbooks console) */}
        <Hero />

        {/* 3. NEW SECTION: Live "Active War Room" Dispatch Feed Tracker */}
        <ActiveWarRoomFeed />

        {/* 4. The "Chrome & Grid" Practice Matrix */}
        <PracticeMatrix />

        {/* 5. NEW SECTION: The "Chessboard of Leverage" Interactive Partner Playbooks */}
        <SpecterPlaybook />

        {/* 6. Live "Resolution Stream" Timeline */}
        <ResolutionStream />

        {/* 7. NEW SECTION: "The Sovereign Ledger" Interactive Escrow & Resource Allocation Budget Simulator */}
        <ClientSovereignLedger />

        {/* 8. "The Legal Diagnostic" Interactive Wizard */}
        <DiagnosticWizard />

        {/* 9. "Voice of Security" Testimonials */}
        <Testimonials />

        {/* 10. Consultation Portal (Redesigned with premium gold highlights and dossier file attachments) */}
        <ConsultationPortal />
      </main>

      {/* 11. Institutional Footer */}
      <Footer />
    </div>
  );
}
