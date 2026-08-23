import React, { useState } from 'react';
import { STORY_CHAPTERS } from '../constants';
import type { StoryChapter } from '../types';

export const StorySoundtrackSection: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<StoryChapter>(STORY_CHAPTERS[0]);

  return (
    <section id="stories" className="py-20 md:py-32 bg-space-black/90 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-orbitron text-light-blue uppercase tracking-widest bg-light-blue/10 px-4 py-1.5 rounded-full border border-light-blue/20">
            STORY → SOUNDTRACK PIPELINE
          </span>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mt-4 mb-6 text-glow">
            Scene Breakdown & Emotional Maps
          </h2>
          <p className="text-star-white/80 text-lg font-exo">
            Every major story chapter supports an acoustic score. Discover how narrative beats translate directly into NVK Records productions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Chapter Tabs */}
          <div className="lg:col-span-4 space-y-4">
            {STORY_CHAPTERS.map((ch) => (
              <button
                key={ch.chapterNumber}
                onClick={() => setActiveChapter(ch)}
                className={`w-full text-left p-6 rounded-2xl transition-all border ${
                  activeChapter.chapterNumber === ch.chapterNumber
                    ? 'bg-deep-purple border-light-blue shadow-lg shadow-light-blue/20'
                    : 'bg-space-black/60 border-light-blue/10 hover:border-light-blue/40'
                }`}
              >
                <span className="text-xs font-orbitron text-light-blue uppercase">Chapter {ch.chapterNumber}</span>
                <h4 className="font-orbitron font-bold text-star-white text-lg mt-1">{ch.title}</h4>
              </button>
            ))}
          </div>

          {/* Chapter Details & Soundtrack Requirements */}
          <div className="lg:col-span-8 bg-deep-purple/40 border border-light-blue/20 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-2xl">
            <div className="mb-6">
              <span className="text-xs font-mono text-light-blue">CHAPTER {activeChapter.chapterNumber} CANON ARCHIVE</span>
              <h3 className="text-3xl font-orbitron font-bold text-glow mt-1">{activeChapter.title}</h3>
              <p className="text-star-white/90 font-exo text-base mt-4 leading-relaxed">{activeChapter.summary}</p>
            </div>

            <div className="pt-6 border-t border-light-blue/10">
              <h4 className="font-orbitron text-light-blue text-sm uppercase tracking-wider mb-4">
                🎵 NVK Records Soundtrack Requirements
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-space-black/50 p-4 rounded-xl border border-light-blue/10">
                  <span className="text-xs text-light-blue block font-bold mb-1">Opening Theme</span>
                  <span className="text-sm font-exo text-star-white">{activeChapter.soundtrackRequirements.openingTheme}</span>
                </div>
                <div className="bg-space-black/50 p-4 rounded-xl border border-light-blue/10">
                  <span className="text-xs text-light-blue block font-bold mb-1">Character Theme</span>
                  <span className="text-sm font-exo text-star-white">{activeChapter.soundtrackRequirements.characterTheme}</span>
                </div>
                <div className="bg-space-black/50 p-4 rounded-xl border border-light-blue/10">
                  <span className="text-xs text-light-blue block font-bold mb-1">Adventure Track</span>
                  <span className="text-sm font-exo text-star-white">{activeChapter.soundtrackRequirements.adventureTrack}</span>
                </div>
                <div className="bg-space-black/50 p-4 rounded-xl border border-light-blue/10">
                  <span className="text-xs text-light-blue block font-bold mb-1">Closing Theme</span>
                  <span className="text-sm font-exo text-star-white">{activeChapter.soundtrackRequirements.closingTheme}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
