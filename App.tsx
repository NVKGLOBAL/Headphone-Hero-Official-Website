
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MusicSection from './components/MusicSection';
import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {
  return (
    <div className="bg-space-black text-star-white min-h-screen font-exo relative overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <MusicSection />
          <AboutSection />
          <BlogSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
