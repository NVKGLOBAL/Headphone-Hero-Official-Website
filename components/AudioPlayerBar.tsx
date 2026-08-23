import React, { useState, useRef } from 'react';

export const AudioPlayerBar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => console.log("Audio play error:", err));
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-space-black/95 border-t border-light-blue/20 backdrop-blur-md px-6 py-3 flex items-center justify-between text-star-white shadow-2xl">
      <audio ref={audioRef} src="https://actions.google.com/sounds/v1/science_fiction/scifi_laser_space_ship.ogg" onEnded={() => setIsPlaying(false)} />
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cosmic-blue to-nebula-pink flex items-center justify-center animate-pulse">
          <span className="font-orbitron text-xs font-bold">NVK</span>
        </div>
        <div>
          <h4 className="text-sm font-bold font-orbitron text-light-blue truncate max-w-[200px] sm:max-w-xs">
            Headphone Hero — Verified Streaming Preview
          </h4>
          <p className="text-xs text-star-white/70">NVK Records Catalog</p>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <button
          onClick={togglePlay}
          className="bg-light-blue text-space-black hover:bg-star-white transition-colors px-5 py-2 rounded-full font-orbitron text-xs font-bold tracking-wider shadow-lg flex items-center space-x-2"
        >
          <span>{isPlaying ? "⏸ PAUSE AUDIO" : "▶ PREVIEW CATALOG AUDIO"}</span>
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-3 text-xs text-light-blue/80 font-mono">
        <span>REAL-ASSET BRIDGE ACTIVE</span>
        <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
      </div>
    </div>
  );
};
