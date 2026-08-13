import React from 'react';
import { SpotifyIcon, AppleMusicIcon, YoutubeIcon, AmazonStoreIcon, OpenSeaIcon } from './Icons';

const SocialLinks: React.FC = () => {
  const links = [
    { href: 'https://open.spotify.com/artist/67YjD6rXsH2SrADS3awYyp', icon: <SpotifyIcon className="w-6 h-6"/>, name: 'Spotify' },
    { href: 'https://music.apple.com/us/artist/nevik-rountree/1635984725', icon: <AppleMusicIcon className="w-6 h-6"/>, name: 'Apple Music' },
    { href: 'https://www.youtube.com/@Headphone_Hero/releases', icon: <YoutubeIcon className="w-6 h-6"/>, name: 'YouTube' },
    { href: 'https://www.amazon.com/Headphone-Heroes-Nevik-Elmo-Rountree/dp/B0DYVH4J3P', icon: <AmazonStoreIcon className="w-6 h-6"/>, name: 'Buy The Book' },
    { href: 'https://opensea.io/collection/nvk-headphone-hero/overview', icon: <OpenSeaIcon className="w-6 h-6"/>, name: 'OpenSea' },
  ];

  return (
    <div className="flex justify-center items-center space-x-6 flex-wrap gap-y-4">
      {links.map(link => (
        <a 
          key={link.name}
          href={link.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label={link.name}
          className="text-star-white/70 hover:text-light-blue hover:scale-110 transition-all duration-300"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;