import React from 'react';
import { ARTIST_INFO } from '../constants';

export const RealAssetBridge: React.FC = () => {
  return (
    <section id="bridge" className="py-20 md:py-32 bg-space-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-orbitron text-light-blue uppercase tracking-widest bg-light-blue/10 px-4 py-1.5 rounded-full border border-light-blue/20">
            REAL-ASSET BRIDGE
          </span>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mt-4 mb-6 text-glow">
            Artist, Label & Book Connection
          </h2>
          <p className="text-star-white/80 text-lg font-exo">
            The bridge between the verified music catalog of Headphone Hero, NVK Records, and Book 1 (*Symphony of Salvation*).
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-deep-purple/40 border border-light-blue/30 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">
            
            {/* Node 1 */}
            <div className="bg-space-black/60 border border-light-blue/20 p-8 rounded-2xl shadow-xl space-y-3">
              <div className="w-12 h-12 mx-auto rounded-xl bg-light-blue text-space-black flex items-center justify-center font-orbitron font-bold text-lg">
                01
              </div>
              <h3 className="font-orbitron font-bold text-xl text-star-white">{ARTIST_INFO.name}</h3>
              <p className="text-xs text-light-blue font-mono">{ARTIST_INFO.creator}</p>
              <p className="text-xs text-star-white/70 font-exo">{ARTIST_INFO.tagline}</p>
            </div>

            {/* Connection Arrow */}
            <div className="flex flex-col items-center justify-center space-y-2">
              <span className="text-xs font-mono text-light-blue bg-light-blue/10 px-3 py-1 rounded-full border border-light-blue/20">
                ● VERIFIED ASSETS CONNECTED
              </span>
              <div className="w-full h-0.5 bg-gradient-to-r from-light-blue/20 via-light-blue to-light-blue/20 relative">
                <div className="absolute right-0 -top-1.5 w-3 h-3 border-t-2 border-r-2 border-light-blue transform rotate-45"></div>
              </div>
            </div>

            {/* Node 2 */}
            <div className="bg-space-black/60 border border-light-blue/20 p-8 rounded-2xl shadow-xl space-y-3">
              <div className="w-12 h-12 mx-auto rounded-xl bg-nebula-pink text-space-black flex items-center justify-center font-orbitron font-bold text-lg">
                02
              </div>
              <h3 className="font-orbitron font-bold text-xl text-star-white">Headphone Heroes</h3>
              <p className="text-xs text-light-blue font-mono">Book 1: Symphony of Salvation</p>
              <p className="text-xs text-star-white/70 font-exo">Official verified publishing asset & Genesis story.</p>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-light-blue/20 flex flex-col sm:flex-row items-center justify-between text-xs text-star-white/70 font-exo gap-4">
            <div>
              <span className="font-orbitron text-light-blue font-bold block mb-1">RECORD LABEL INFRASTRUCTURE:</span>
              <span>Distributed globally via NVK Records & DistroKid networks across 14+ verified albums.</span>
            </div>
            <a
              href="#music"
              className="bg-light-blue text-space-black font-orbitron text-xs font-bold px-6 py-3 rounded-xl hover:bg-star-white transition-colors shadow-lg whitespace-nowrap"
            >
              EXPLORE CATALOG →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
