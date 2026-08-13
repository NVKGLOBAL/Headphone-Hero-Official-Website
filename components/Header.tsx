
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-space-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-orbitron text-2xl font-bold tracking-widest text-glow transition-transform hover:scale-105">
          HEADPHONE HERO
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#music" onClick={handleNavClick} className="font-exo text-lg text-star-white hover:text-light-blue transition-colors duration-300 hover:text-glow">Music</a>
          <a href="#about" onClick={handleNavClick} className="font-exo text-lg text-star-white hover:text-light-blue transition-colors duration-300 hover:text-glow">About</a>
          <a href="#blog" onClick={handleNavClick} className="font-exo text-lg text-star-white hover:text-light-blue transition-colors duration-300 hover:text-glow">Blog</a>
          <a href="#contact" onClick={handleNavClick} className="font-exo text-lg text-star-white hover:text-light-blue transition-colors duration-300 hover:text-glow">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
