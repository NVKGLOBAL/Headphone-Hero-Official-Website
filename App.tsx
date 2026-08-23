import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MusicSection from './components/MusicSection';
import { BookSection } from './components/BookSection';
import { RealAssetBridge } from './components/RealAssetBridge';
import { CmsRegistrySection } from './components/CmsRegistrySection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import { AudioPlayerBar } from './components/AudioPlayerBar';

const App: React.FC = () => {
  return (
    <div className="bg-space-black text-star-white min-h-screen font-exo relative overflow-x-hidden pb-24">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <MusicSection />
          <BookSection />
          <RealAssetBridge />
          <CmsRegistrySection />
          <BlogSection />
        </main>
        <Footer />
        <AudioPlayerBar />
      </div>
    </div>
  );
};

export default App;
