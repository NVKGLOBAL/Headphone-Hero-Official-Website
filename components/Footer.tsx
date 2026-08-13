
import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-space-black/80 backdrop-blur-sm border-t border-cosmic-blue/30 py-8">
      <div className="container mx-auto px-6 text-center text-star-white/70">
        <div className="mb-6">
          <SocialLinks />
        </div>
        <p className="font-orbitron text-lg mb-2">HEADPHONE HERO</p>
        <p className="font-exo">&copy; {new Date().getFullYear()} NVK Records. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
