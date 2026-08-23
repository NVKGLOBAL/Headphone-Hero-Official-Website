import React, { useState } from 'react';
import type { Album } from '../types';
import { InAppBrowserModal } from './InAppBrowserModal';

interface AlbumCardProps {
  album: Album;
  index: number;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const animationDelay = `${index * 100}ms`;

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="bg-deep-purple/50 backdrop-blur-md rounded-lg overflow-hidden group cursor-pointer block transition-all duration-300 hover:scale-105 hover:box-glow animate-fade-in-up"
        style={{ animationDelay }}
        role="button"
        tabIndex={0}
        aria-label={`Listen to ${album.title}`}
      >
        <div className="relative">
          <img src={album.coverUrl} alt={`${album.title} cover`} className="w-full h-auto aspect-square object-cover" />
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-orbitron text-base text-white border-2 border-white rounded-full px-5 py-2">
              Open in In-App Frame
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-orbitron text-xl font-bold text-star-white truncate" title={album.title}>{album.title}</h3>
          <p className="text-light-blue font-exo">{album.year} &bull; {album.genre}</p>
        </div>
      </div>

      <InAppBrowserModal
        url={album.hyperfollowUrl}
        title={`${album.title} - Headphone Hero`}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default AlbumCard;

