import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkshopGallery } from './components/WorkshopGallery';
import { Services } from './components/Services';
import { AboutWorkshop } from './components/AboutWorkshop';
import { ReviewRiver } from './components/ReviewRiver';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0c0e] text-zinc-100 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WorkshopGallery />
        <Services />
        <AboutWorkshop />
        <ReviewRiver />
        <ContactSection />
      </main>
      <Footer />
      <MobileQuickBar />
    </div>
  );
};

export default App;
