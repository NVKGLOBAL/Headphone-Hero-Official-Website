import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.split('#')[1];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-space-black/90 backdrop-blur-md border-b border-light-blue/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-light-blue to-nebula-pink flex items-center justify-center font-orbitron font-bold text-space-black text-xs shadow-lg">
            NVK
          </div>
          <div>
            <span className="font-orbitron text-lg font-bold tracking-widest text-glow block">
              HEADPHONE HERO
            </span>
            <span className="text-[10px] font-mono text-light-blue block tracking-widest">× NVK RECORDS • CANON RESTORATION</span>
          </div>
        </a>

        <nav className="hidden xl:flex items-center space-x-6">
          <a href="#home" onClick={handleNavClick} className="font-exo text-sm text-star-white/90 hover:text-light-blue transition-colors">Home</a>
          <a href="#music" onClick={handleNavClick} className="font-exo text-sm text-star-white/90 hover:text-light-blue transition-colors">Discography</a>
          <a href="#book" onClick={handleNavClick} className="font-exo text-sm text-star-white/90 hover:text-light-blue transition-colors">Book 1</a>
          <a href="#bridge" onClick={handleNavClick} className="font-exo text-sm text-star-white/90 hover:text-light-blue transition-colors">Asset Bridge</a>
          <a href="#cms" onClick={handleNavClick} className="font-exo text-sm text-light-blue hover:text-star-white transition-colors font-bold">Truth CMS</a>
          <a href="#blog" onClick={handleNavClick} className="font-exo text-sm text-star-white/90 hover:text-light-blue transition-colors">Journal</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
