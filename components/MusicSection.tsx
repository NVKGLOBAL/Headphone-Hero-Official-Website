
import React from 'react';
import { ALBUMS } from '../constants';
import AlbumCard from './AlbumCard';

const MusicSection: React.FC = () => {
  return (
    <section id="music" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12 md:mb-16 text-glow">
          Discography
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {ALBUMS.map((album, index) => (
            <AlbumCard key={album.title} album={album} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
