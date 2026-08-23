import React, { useState } from 'react';

export const UniverseGenesisSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bible' | 'genesis' | 'canon'>('genesis');

  return (
    <section id="universe" className="py-20 md:py-32 bg-space-black/80 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-orbitron text-light-blue uppercase tracking-widest bg-light-blue/10 px-4 py-1.5 rounded-full border border-light-blue/20">
            HEADPHONE HEROES UNIVERSE
          </span>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mt-4 mb-6 text-glow">
            Genesis Asset & Universe Bible
          </h2>
          <p className="text-star-white/80 text-lg font-exo">
            Headphone Heroes is not an isolated book or mascot—it is a scalable entertainment IP engine powered by NVK Records audio architecture.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12 space-x-2 sm:space-x-4">
          <button
            onClick={() => setActiveTab('genesis')}
            className={`px-6 py-3 rounded-xl font-orbitron text-xs font-bold transition-all ${
              activeTab === 'genesis'
                ? 'bg-light-blue text-space-black shadow-lg shadow-light-blue/20'
                : 'bg-deep-purple/60 text-star-white hover:bg-deep-purple border border-light-blue/20'
            }`}
          >
            📖 BOOK 1: GENESIS ASSET
          </button>
          <button
            onClick={() => setActiveTab('bible')}
            className={`px-6 py-3 rounded-xl font-orbitron text-xs font-bold transition-all ${
              activeTab === 'bible'
                ? 'bg-light-blue text-space-black shadow-lg shadow-light-blue/20'
                : 'bg-deep-purple/60 text-star-white hover:bg-deep-purple border border-light-blue/20'
            }`}
          >
            🏛️ UNIVERSE BIBLE
          </button>
          <button
            onClick={() => setActiveTab('canon')}
            className={`px-6 py-3 rounded-xl font-orbitron text-xs font-bold transition-all ${
              activeTab === 'canon'
                ? 'bg-light-blue text-space-black shadow-lg shadow-light-blue/20'
                : 'bg-deep-purple/60 text-star-white hover:bg-deep-purple border border-light-blue/20'
            }`}
          >
            🛡️ CANON MANAGEMENT
          </button>
        </div>

        {/* Tab Content */}
        <div className="max-w-5xl mx-auto bg-deep-purple/40 border border-light-blue/20 rounded-2xl p-8 md:p-12 backdrop-blur-md shadow-2xl">
          {activeTab === 'genesis' && (
            <div className="space-y-8 animate-fade-in-up">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="rounded-2xl overflow-hidden border-2 border-light-blue/40 shadow-2xl group relative aspect-[3/4]">
                    <img
                      src="https://picsum.photos/seed/GenesisBook1/600/800"
                      alt="Headphone Heroes Book 1"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <span className="text-xs font-orbitron text-light-blue uppercase">Master Source IP</span>
                      <h4 className="text-lg font-orbitron font-bold">Symphony of Salvation</h4>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-2xl font-orbitron font-bold text-light-blue">
                    Book 1 as the Genesis Asset
                  </h3>
                  <p className="text-star-white/95 leading-relaxed font-exo">
                    Rather than treating Book 1 as a standalone PDF, the system treats it as the <strong>source IP document</strong> from which future characters, soundtracks, merchandise, and animated adaptations are generated.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-space-black/50 p-4 rounded-xl border border-light-blue/10">
                      <h5 className="font-orbitron text-sm text-light-blue mb-1">World Rules</h5>
                      <p className="text-xs text-star-white/70">Acoustic resonance as gravitational power.</p>
                    </div>
                    <div className="bg-space-black/50 p-4 rounded-xl border border-light-blue/10">
                      <h5 className="font-orbitron text-sm text-light-blue mb-1">Music Pipeline</h5>
                      <p className="text-xs text-star-white/70">Every chapter maps directly to NVK Records themes.</p>
                    </div>
                    <div className="bg-space-black/50 p-4 rounded-xl border border-light-blue/10">
                      <h5 className="font-orbitron text-sm text-light-blue mb-1">Character Registry</h5>
                      <p className="text-xs text-star-white/70">Unique object IDs tracking every persona and voice.</p>
                    </div>
                    <div className="bg-space-black/50 p-4 rounded-xl border border-light-blue/10">
                      <h5 className="font-orbitron text-sm text-light-blue mb-1">Merchandise Expansion</h5>
                      <p className="text-xs text-star-white/70">Genesis Cans hardware & collectible apparel.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bible' && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-orbitron font-bold text-light-blue mb-4">
                Headphone Heroes Universe Bible
              </h3>
              <p className="text-star-white/90 font-exo mb-6">
                The canonical source of truth governing all media, music releases, and narrative arcs across NVK Global.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-space-black/60 p-6 rounded-xl border border-light-blue/20">
                  <h4 className="font-orbitron text-lg text-light-blue mb-2">🌍 World & Lore</h4>
                  <ul className="text-xs space-y-2 text-star-white/80">
                    <li>• Sector 7 Orbital Arrays</li>
                    <li>• The Silence Syndicate Threat</li>
                    <li>• Acoustic Resonance Physics</li>
                    <li>• Nebular Spire Sanctuaries</li>
                  </ul>
                </div>
                <div className="bg-space-black/60 p-6 rounded-xl border border-light-blue/20">
                  <h4 className="font-orbitron text-lg text-light-blue mb-2">👥 Character Canon</h4>
                  <ul className="text-xs space-y-2 text-star-white/80">
                    <li>• Nevik: Synthesis & Gravitation</li>
                    <li>• Nyx: Harmonic Defense & Spire</li>
                    <li>• Cipher: Undercity Glitch Code</li>
                    <li>• Strict voice & personality profiles</li>
                  </ul>
                </div>
                <div className="bg-space-black/60 p-6 rounded-xl border border-light-blue/20">
                  <h4 className="font-orbitron text-lg text-light-blue mb-2">🎵 Soundtrack Rules</h4>
                  <ul className="text-xs space-y-2 text-star-white/80">
                    <li>• NVK Records exclusive audio</li>
                    <li>• Scene emotional mapping</li>
                    <li>• Character signature tempos</li>
                    <li>• Mastering for Dolby Atmos & Vinyl</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'canon' && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-orbitron font-bold text-light-blue mb-4">
                Canon Management System
              </h3>
              <p className="text-star-white/90 font-exo mb-6">
                Ensuring that generated content, community contributions, and experimental drafts never silently overwrite canonical IP.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-space-black/50 rounded-xl border border-green-500/30">
                  <div>
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full font-orbitron text-xs font-bold mb-1">CANON</span>
                    <h5 className="font-bold text-star-white">Book 1 & Core Character Profiles</h5>
                  </div>
                  <span className="text-xs text-green-400 font-mono">APPROVED / LOCKED</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-space-black/50 rounded-xl border border-yellow-500/30">
                  <div>
                    <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full font-orbitron text-xs font-bold mb-1">DRAFT / AI ASSISTED</span>
                    <h5 className="font-bold text-star-white">Episode 4 Expansion Script</h5>
                  </div>
                  <span className="text-xs text-yellow-400 font-mono">PENDING REVIEW</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-space-black/50 rounded-xl border border-blue-500/30">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full font-orbitron text-xs font-bold mb-1">ALTERNATE / EXPERIMENTAL</span>
                    <h5 className="font-bold text-star-white">Lo-Fi Remix Soundscapes</h5>
                  </div>
                  <span className="text-xs text-blue-400 font-mono">NON-CANON COLLAB</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
