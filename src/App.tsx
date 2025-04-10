import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import InsuranceSection from './components/InsuranceSection';
import LocationsSection from './components/LocationsSection';
import ResultsSection from './components/ResultsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <InsuranceSection />
      <LocationsSection />
      <ResultsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;