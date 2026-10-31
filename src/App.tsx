import React from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { Philosophy } from './components/Philosophy';
import { Process } from './components/Process';
import { SelectedWorks } from './components/SelectedWorks';
import { MetricsBento } from './components/MetricsBento';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminModal } from './components/AdminModal';
import { MessageSquare, Settings } from 'lucide-react';

function PortfolioContent() {
  const { data, setIsAdminOpen } = usePortfolio();

  const scrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f8fa] dark:bg-[#0b0c0e] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 selection:bg-brand-lime selection:text-black">
      {/* Navigation */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Content */}
      <main>
        <Hero onContactClick={scrollToContact} />
        <TechMarquee />
        <Philosophy />
        <Process />
        <SelectedWorks />
        <MetricsBento />
        <ContactSection />
      </main>

      {/* Footer & Reviews */}
      <Footer />

      {/* Floating Action Buttons for Mobile screens */}
      <div className="fixed bottom-5 right-5 z-40 sm:hidden flex flex-col items-end gap-2">
        <button
          onClick={() => setIsAdminOpen(true)}
          className="p-3 rounded-full bg-neutral-900/90 dark:bg-neutral-800/90 backdrop-blur-md text-white text-xs font-bold shadow-lg border border-white/10 active:scale-95 transition-transform"
          title="Configurações (Mickael)"
        >
          <Settings className="w-4 h-4 text-brand-lime" />
        </button>

        <a
          href={data.personalInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-neutral-950 dark:bg-brand-lime text-white dark:text-black text-xs font-bold shadow-xl border border-white/20 active:scale-95 transition-transform"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 dark:bg-black animate-pulse" />
          <span>Falar com Mickael</span>
          <MessageSquare className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Password-protected Admin Modal */}
      <AdminModal />
    </div>
  );
}

export function App() {
  return (
    <PortfolioProvider>
      <PortfolioContent />
    </PortfolioProvider>
  );
}

export default App;
