import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { ReviewRiver } from './components/ReviewRiver';
import { WorkshopGallery } from './components/WorkshopGallery';
import { Services } from './components/Services';
import { AboutWorkshop } from './components/AboutWorkshop';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0d12] text-slate-100 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <VideoSection />
        <ReviewRiver />
        <WorkshopGallery />
        <Services />
        <AboutWorkshop />
        <ContactSection />
      </main>
      <Footer />
      <MobileQuickBar />
    </div>
  );
};

export default App;
