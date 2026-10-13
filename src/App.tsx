import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutWorkshop } from './components/AboutWorkshop';
import { ReviewRiver } from './components/ReviewRiver';
import { WorkshopGallery } from './components/WorkshopGallery';
import { Services } from './components/Services';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutWorkshop />
        <ReviewRiver />
        <WorkshopGallery />
        <Services />
        <ContactSection />
      </main>
      <Footer />
      <MobileQuickBar />
    </div>
  );
}

export default App;
