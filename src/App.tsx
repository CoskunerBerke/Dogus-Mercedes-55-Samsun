import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicePlanner } from './components/ServicePlanner';
import { SparePartsSection } from './components/SparePartsSection';
import { VideoSection } from './components/VideoSection';
import { ReviewRiver } from './components/ReviewRiver';
import { WorkshopGallery } from './components/WorkshopGallery';
import { Services } from './components/Services';
import { AboutWorkshop } from './components/AboutWorkshop';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export const App: React.FC = () => {
  const [selectedChassis, setSelectedChassis] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#06080c] text-slate-100 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero onSelectChassis={setSelectedChassis} />
        <ServicePlanner preselectedSeriesId={selectedChassis} />
        <SparePartsSection />
        <VideoSection />
        <ReviewRiver />
        <WorkshopGallery />
        <Services />
        <AboutWorkshop />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileQuickBar />
    </div>
  );
};

export default App;
