import React, { useState } from 'react';
import { ALBUMS } from '../constants';
import { InAppBrowserModal } from './InAppBrowserModal';

export const DistrokidPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'releases' | 'comingSoon' | 'merch' | 'playlists' | 'stores'>('releases');
  const [browserModal, setBrowserModal] = useState<{ isOpen: boolean; url: string; title: string }>({
    isOpen: false,
    url: '',
    title: '',
  });

  const storesList = [
    "Spotify", "Apple Music", "Amazon Music", "YouTube Music", "Tidal", 
    "Deezer", "Pandora", "SoundCloud", "Bandcamp", "TikTok & ByteDance", 
    "Instagram/Facebook", "Qobuz", "iHeartRadio", "Shazam", "Claro Música"
  ];

  const upcomingReleases = [
    { title: "Cosmic Symphony Vol. 12: The Singularity", type: "Album", releaseDate: "Coming Fall 2026", description: "The next epic progression in the Headphone Hero cinematic electronic journey." },
    { title: "Awakening the Frequency (Acoustic Sessions)", type: "EP", releaseDate: "Coming Q4 2026", description: "Unplugged guitar and ambient synth reinterpretations of core book soundtracks." },
    { title: "NVK Records Sound Lab Vol. 3", type: "Compilation", releaseDate: "Winter 2026", description: "Collaborative ambient and phonk beats featuring underground electronic producers." }
  ];

  const merchandiseItems = [
    { name: "Headphone Hero Neural Hoodie", price: "$65.00", status: "Available Now", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80" },
    { name: "The Cosmic Temple Limited Vinyl LP", price: "$40.00", status: "Pre-Order", image: "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&w=600&q=80" },
    { name: "NVK Records Cyberpunk Tee", price: "$32.00", status: "Available Now", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80" },
    { name: "Signal > Noise Enamel Pin Set", price: "$18.00", status: "Coming Soon", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80" }
  ];

  return (
    <section id="fan-portal" className="py-20 bg-space-black/90 border-y border-light-blue/20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-orbitron text-light-blue uppercase tracking-widest bg-light-blue/10 px-4 py-1.5 rounded-full border border-light-blue/25 shadow">
            OFFICIAL FAN PORTAL & CATALOG
          </span>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mt-4 mb-3 text-glow">
            Headphone Hero Hub
          </h2>
          <p className="text-star-white/80 text-sm font-exo">
            Explore 70+ official music releases, upcoming drops, exclusive merchandise, and global streaming platforms.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'releases', label: 'Official Catalog 🎵', count: ALBUMS.length },
            { id: 'comingSoon', label: 'Coming Soon 🚀', badge: 'New Drops' },
            { id: 'merch', label: 'Merch & Vinyl 👕' },
            { id: 'playlists', label: 'Fan Playlists 🎧' },
            { id: 'stores', label: 'Global Stores 🌍' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl font-orbitron text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-light-blue to-nebula-pink text-space-black shadow-lg scale-105'
                  : 'bg-deep-purple/60 text-star-white/90 border border-light-blue/20 hover:bg-deep-purple'
              }`}
            >
              <span>{tab.label}</span>
              {tab.badge && (
                <span className="bg-light-blue text-space-black text-[9px] px-1.5 py-0.5 rounded-full font-mono font-bold">
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab 1: Official Catalog */}
        {activeTab === 'releases' && (
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-orbitron font-bold text-light-blue">
                Verified Headphone Hero Discography ({ALBUMS.length} Releases)
              </h3>
              <span className="text-xs font-mono text-star-white/60">Available Worldwide</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ALBUMS.map((album, idx) => (
                <div key={idx} className="bg-deep-purple/40 border border-light-blue/20 rounded-2xl p-5 hover:border-light-blue/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-space-black/80 relative border border-light-blue/10 shadow-lg">
                      <img src={album.coverUrl} alt={album.title} className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform" />
                      <div className="absolute top-2 right-2 bg-space-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-light-blue border border-light-blue/25">
                        {album.year}
                      </div>
                    </div>
                    <h4 className="font-orbitron font-bold text-star-white text-base mb-1">{album.title}</h4>
                    <p className="text-xs text-light-blue font-mono mb-3">{album.artist} &bull; {album.genre}</p>
                    <div className="text-xs text-star-white/70 font-exo line-clamp-2 mb-3">
                      Tracks: {album.tracklist.join(', ')}
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => setBrowserModal({
                        isOpen: true,
                        url: album.hyperfollowUrl,
                        title: `${album.title} - Headphone Hero`
                      })}
                      className="block text-center w-full py-2 bg-light-blue/20 hover:bg-light-blue text-light-blue hover:text-space-black font-orbitron font-bold text-xs rounded-xl transition-all border border-light-blue/30"
                    >
                      Listen & Stream ↗
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Coming Soon */}
        {activeTab === 'comingSoon' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-orbitron font-bold text-light-blue">Upcoming Releases & Projects</h3>
              <p className="text-xs text-star-white/70 font-exo mt-2">Get a sneak peek at what Headphone Hero and NVK Records are dropping next.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingReleases.map((item, idx) => (
                <div key={idx} className="bg-deep-purple/40 border border-light-blue/20 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-mono bg-light-blue/20 text-light-blue px-2 py-1 rounded border border-light-blue/30">
                        {item.type}
                      </span>
                      <span className="text-[10px] font-mono text-yellow-400 font-bold">{item.releaseDate}</span>
                    </div>
                    <h4 className="font-orbitron font-bold text-star-white text-base mb-2">{item.title}</h4>
                    <p className="text-xs text-star-white/70 font-exo">{item.description}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-light-blue/10">
                    <button
                      onClick={() => alert(`Pre-save notification registered for "${item.title}"!`)}
                      className="w-full py-2 bg-space-black/60 hover:bg-light-blue hover:text-space-black text-light-blue font-orbitron font-bold text-xs rounded-xl transition-all border border-light-blue/30"
                    >
                      Remind Me / Pre-Save
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Merch & Vinyl */}
        {activeTab === 'merch' && (
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-orbitron font-bold text-light-blue">Official Merchandise & Vinyl</h3>
              <p className="text-xs text-star-white/70 font-exo mt-2">High-quality apparel, limited edition vinyl records, and collectibles.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {merchandiseItems.map((item, idx) => (
                <div key={idx} className="bg-deep-purple/40 border border-light-blue/20 rounded-2xl overflow-hidden backdrop-blur-md flex flex-col justify-between">
                  <div>
                    <div className="aspect-square relative overflow-hidden bg-space-black">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                      <div className="absolute top-2 right-2 bg-space-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-light-blue border border-light-blue/30">
                        {item.status}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-orbitron font-bold text-star-white text-sm mb-1">{item.name}</h4>
                      <div className="text-light-blue font-mono font-bold text-base">{item.price}</div>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <button
                      onClick={() => alert(`Redirecting to secure checkout for ${item.name}...`)}
                      className="w-full py-2 bg-light-blue hover:bg-star-white text-space-black font-orbitron font-bold text-xs rounded-xl transition-all shadow-md"
                    >
                      {item.status === 'Available Now' ? 'Order Now' : 'Join Waitlist'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Fan Playlists */}
        {activeTab === 'playlists' && (
          <div className="max-w-4xl mx-auto bg-deep-purple/40 border border-light-blue/20 rounded-2xl p-8 backdrop-blur-md shadow-2xl text-center space-y-6">
            <h3 className="font-orbitron font-bold text-2xl text-light-blue">Community Fan Playlists & Spotlight</h3>
            <p className="text-star-white/80 font-exo text-sm max-w-2xl mx-auto">
              Listen to curated Headphone Hero mixes, Lo-Fi study sessions, and cinematic synthwave playlists on Spotify and Apple Music.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="bg-space-black/60 p-5 rounded-xl border border-light-blue/20 text-left">
                <div className="text-sm font-orbitron font-bold text-star-white mb-1">24/7 Lo-Fi Focus Zone</div>
                <p className="text-xs text-star-white/70 font-exo mb-3">Study, code, and relax with Headphone Hero's chill instrumental beats.</p>
                <button
                  onClick={() => setBrowserModal({ isOpen: true, url: 'https://spotify.com', title: '24/7 Lo-Fi Focus Playlist' })}
                  className="text-xs text-light-blue font-mono hover:underline"
                >
                  Listen on Spotify ↗
                </button>
              </div>
              <div className="bg-space-black/60 p-5 rounded-xl border border-light-blue/20 text-left">
                <div className="text-sm font-orbitron font-bold text-star-white mb-1">Synthwave Arcade Mix</div>
                <p className="text-xs text-star-white/70 font-exo mb-3">Retro gaming vibes and nostalgic electronic driving anthems.</p>
                <button
                  onClick={() => setBrowserModal({ isOpen: true, url: 'https://spotify.com', title: 'Synthwave Arcade Playlist' })}
                  className="text-xs text-light-blue font-mono hover:underline"
                >
                  Listen on Spotify ↗
                </button>
              </div>
              <div className="bg-space-black/60 p-5 rounded-xl border border-light-blue/20 text-left">
                <div className="text-sm font-orbitron font-bold text-star-white mb-1">Cinematic Cosmic Journey</div>
                <p className="text-xs text-star-white/70 font-exo mb-3">Deep ambient tracks and orchestral soundscapes from Book 1.</p>
                <button
                  onClick={() => setBrowserModal({ isOpen: true, url: 'https://spotify.com', title: 'Cosmic Journey Playlist' })}
                  className="text-xs text-light-blue font-mono hover:underline"
                >
                  Listen on Spotify ↗
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Global Stores */}
        {activeTab === 'stores' && (
          <div className="max-w-4xl mx-auto bg-deep-purple/40 border border-light-blue/20 rounded-2xl p-8 backdrop-blur-md shadow-2xl text-center space-y-6">
            <h3 className="font-orbitron font-bold text-2xl text-light-blue">Global Streaming Availability</h3>
            <p className="text-star-white/80 font-exo text-sm max-w-2xl mx-auto">
              Headphone Hero and NVK Records releases are distributed globally across all major streaming services and digital platforms.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {storesList.map((store, idx) => (
                <span key={idx} className="px-4 py-2 bg-space-black/80 text-star-white font-mono text-xs rounded-xl border border-light-blue/30 shadow-sm flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>{store}</span>
                </span>
              ))}
            </div>
          </div>
        )}

      </div>

      <InAppBrowserModal
        url={browserModal.url}
        title={browserModal.title}
        isOpen={browserModal.isOpen}
        onClose={() => setBrowserModal({ ...browserModal, isOpen: false })}
      />
    </section>
  );
};
