import React, { useState } from 'react';
import { CHARACTERS } from '../constants';
import type { CharacterProfile } from '../types';

export const CharactersBridgeSection: React.FC = () => {
  const [selectedChar, setSelectedChar] = useState<CharacterProfile>(CHARACTERS[0]);

  return (
    <section id="characters" className="py-20 md:py-32 bg-space-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-orbitron text-light-blue uppercase tracking-widest bg-light-blue/10 px-4 py-1.5 rounded-full border border-light-blue/20">
            CHARACTER → MUSIC SYSTEM
          </span>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mt-4 mb-6 text-glow">
            Heroes & Their Soundtracks
          </h2>
          <p className="text-star-white/80 text-lg font-exo">
            Every Headphone Heroes character is engineered with a unique musical identity. Explore how personality becomes melody, theme, and NVK Records release.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Character Selector List */}
          <div className="lg:col-span-4 space-y-4">
            {CHARACTERS.map((char) => (
              <button
                key={char.id}
                onClick={() => setSelectedChar(char)}
                className={`w-full text-left p-5 rounded-2xl transition-all border flex items-center space-x-4 ${
                  selectedChar.id === char.id
                    ? 'bg-deep-purple/80 border-light-blue shadow-lg shadow-light-blue/20'
                    : 'bg-space-black/60 border-light-blue/10 hover:border-light-blue/40'
                }`}
              >
                <img
                  src={char.imageUrl}
                  alt={char.name}
                  className="w-16 h-16 rounded-xl object-cover border border-light-blue/30"
                />
                <div>
                  <span className="text-xs font-mono text-light-blue">{char.id}</span>
                  <h4 className="font-orbitron font-bold text-star-white text-lg">{char.name}</h4>
                  <p className="text-xs text-star-white/60 font-exo">{char.musicalGenre}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Character Detailed Bridge View */}
          <div className="lg:col-span-8 bg-deep-purple/40 border border-light-blue/20 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <img
                src={selectedChar.imageUrl}
                alt={selectedChar.name}
                className="w-40 h-40 rounded-2xl object-cover border-2 border-light-blue/50 shadow-2xl"
              />
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-light-blue/20 text-light-blue rounded-full text-xs font-orbitron font-bold">
                    {selectedChar.id}
                  </span>
                  <span className="text-xs text-star-white/60 font-mono">ORIGIN: {selectedChar.origin}</span>
                </div>
                <h3 className="text-3xl font-orbitron font-bold text-glow">{selectedChar.name}</h3>
                <p className="text-star-white/90 font-exo text-sm leading-relaxed">{selectedChar.story}</p>
              </div>
            </div>

            {/* Musical & Visual Identity Flywheel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-light-blue/10">
              <div className="space-y-4">
                <h4 className="font-orbitron text-light-blue text-sm uppercase tracking-wider">Musical Identity</h4>
                <div className="space-y-2 text-xs text-star-white/80 font-exo">
                  <div className="flex justify-between bg-space-black/40 p-3 rounded-xl border border-light-blue/10">
                    <span className="text-light-blue">Genre:</span>
                    <span className="font-bold">{selectedChar.musicalGenre}</span>
                  </div>
                  <div className="flex justify-between bg-space-black/40 p-3 rounded-xl border border-light-blue/10">
                    <span className="text-light-blue">Tempo:</span>
                    <span className="font-bold">{selectedChar.tempo}</span>
                  </div>
                  <div className="flex justify-between bg-space-black/40 p-3 rounded-xl border border-light-blue/10">
                    <span className="text-light-blue">Instrumentation:</span>
                    <span className="font-bold">{selectedChar.instrumentation.join(', ')}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-orbitron text-light-blue text-sm uppercase tracking-wider">Visual & Voice</h4>
                <div className="space-y-2 text-xs text-star-white/80 font-exo">
                  <div className="bg-space-black/40 p-3 rounded-xl border border-light-blue/10">
                    <span className="text-light-blue block mb-1 font-bold">Visual Identity:</span>
                    <span>{selectedChar.visualIdentity}</span>
                  </div>
                  <div className="bg-space-black/40 p-3 rounded-xl border border-light-blue/10">
                    <span className="text-light-blue block mb-1 font-bold">Voice Identity:</span>
                    <span>{selectedChar.voiceIdentity}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Bridge */}
            <div className="mt-8 pt-6 border-t border-light-blue/10 flex flex-wrap gap-4 items-center justify-between">
              <span className="text-xs font-orbitron text-light-blue">
                🔗 LINKED TO NVK RECORDS RELEASE: <span className="text-star-white font-bold">{selectedChar.themeSongId}</span>
              </span>
              <button
                onClick={() => alert(`Now streaming official NVK Records theme for ${selectedChar.name}!`)}
                className="bg-light-blue text-space-black font-orbitron text-xs font-bold px-6 py-3 rounded-xl hover:bg-star-white transition-colors shadow-lg"
              >
                ▶ LISTEN TO CHARACTER THEME
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
