import React, { useState } from 'react';
import { ALBUMS } from '../constants';
import type { Album } from '../types';

export const MusicSection: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  return (
    <section id="music" className="py-20 md:py-32 bg-space-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-orbitron text-light-blue uppercase tracking-widest bg-light-blue/10 px-4 py-1.5 rounded-full border border-light-blue/20">
            VERIFIED MUSIC CATALOG ({ALBUMS.length} ALBUMS)
          </span>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mt-4 mb-6 text-glow">
            NVK Records Official Discography
          </h2>
          <p className="text-star-white/80 text-lg font-exo">
            Explore Headphone Hero's complete verified releases, tracklists, UPC identifiers, and official DistroKid HyperFollow streaming links.
          </p>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {ALBUMS.map((album, idx) => (
            <div
              key={idx}
              className="bg-deep-purple/40 border border-light-blue/20 rounded-2xl overflow-hidden backdrop-blur-md shadow-xl flex flex-col justify-between group hover:border-light-blue/60 transition-all duration-300"
            >
              <div>
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={album.coverUrl}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-space-black/80 text-light-blue border border-light-blue/30 px-3 py-1 rounded-full text-xs font-orbitron font-bold">
                    {album.genre}
                  </span>
                </div>
                <div className="p-6 space-y-2">
                  <div className="flex justify-between items-center text-xs text-star-white/60 font-mono">
                    <span>{album.releaseDate || album.year}</span>
                    {album.upc && <span>UPC: {album.upc}</span>}
                  </div>
                  <h3 className="font-orbitron font-bold text-xl text-star-white">{album.title}</h3>
                  <p className="text-xs text-light-blue font-exo">Artist: {album.artist || "Headphone Hero"}</p>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-3">
                {album.tracklist && album.tracklist.length > 0 && (
                  <button
                    onClick={() => setSelectedAlbum(album)}
                    className="w-full bg-deep-purple hover:bg-deep-purple/80 border border-light-blue/30 text-light-blue font-orbitron text-xs font-bold py-2.5 rounded-xl transition-colors"
                  >
                    VIEW TRACKLIST ({album.tracklist.length} TRACKS)
                  </button>
                )}
                <a
                  href={album.hyperfollowUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-light-blue text-space-black font-orbitron text-xs font-bold py-3 rounded-xl hover:bg-star-white transition-colors shadow-lg"
                >
                  STREAM / HYPERFOLLOW ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Tracklist Modal */}
        {selectedAlbum && (
          <div className="fixed inset-0 z-50 bg-space-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-deep-purple border border-light-blue/40 rounded-3xl p-8 max-w-xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative">
              <button
                onClick={() => setSelectedAlbum(null)}
                className="absolute top-6 right-6 text-star-white/60 hover:text-star-white font-orbitron text-lg"
              >
                ✕
              </button>

              <span className="text-xs font-mono text-light-blue block mb-1">NVK RECORDS CATALOG</span>
              <h3 className="text-2xl font-orbitron font-bold text-glow mb-2">{selectedAlbum.title}</h3>
              <p className="text-xs text-star-white/70 font-mono mb-6">Released: {selectedAlbum.releaseDate} | UPC: {selectedAlbum.upc}</p>

              <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                {selectedAlbum.tracklist?.map((track, i) => (
                  <div key={i} className="bg-space-black/50 px-4 py-3 rounded-xl border border-light-blue/10 flex items-center justify-between text-xs font-exo">
                    <span className="text-star-white font-medium">{i + 1}. {track}</span>
                    <span className="text-light-blue/70 font-mono">Verified Track</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-light-blue/20 flex justify-end">
                <button
                  onClick={() => setSelectedAlbum(null)}
                  className="bg-light-blue text-space-black font-orbitron text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-star-white transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MusicSection;
