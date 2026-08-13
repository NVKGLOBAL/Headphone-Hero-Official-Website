
import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleParallaxScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleParallaxScroll);
    return () => window.removeEventListener('scroll', handleParallaxScroll);
  }, []);

  const handleLinkScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.split('#')[1];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="h-screen flex items-center justify-center text-center relative px-4">
      <div
        className="flex flex-col items-center animate-fade-in-up"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      >
        <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider text-glow">
          Headphone Hero
        </h1>
        <p className="font-exo mt-4 text-xl md:text-2xl text-light-blue max-w-2xl">
          Cosmic Soundscapes & Genre-Bending Journeys by Nevik Rountree
        </p>
        <a 
          href="#music" 
          onClick={handleLinkScroll}
          className="mt-10 px-8 py-3 font-bold text-lg font-orbitron uppercase border-2 border-light-blue rounded-md text-light-blue 
                     bg-light-blue/10 backdrop-blur-sm 
                     hover:bg-light-blue hover:text-space-black transition-all duration-300 
                     hover:shadow-[0_0_20px_rgba(173,216,230,0.8)]"
        >
          Explore Discography
        </a>
      </div>
    </section>
  );
};

export default HeroSection;