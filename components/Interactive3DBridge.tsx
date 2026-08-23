import React, { useState } from 'react';

export const Interactive3DBridge: React.FC = () => {
  const [activeNode, setActiveNode] = useState<'character' | 'music' | 'story' | 'commerce'>('character');

  const nodeContent = {
    character: {
      title: "1. Character Identity",
      subtitle: "Headphone Heroes Universe",
      description: "Nevik, Nyx, and Cipher established in Book 1 as foundational IP entities with distinctive personality, visual identity, and voice characteristics.",
      actionLabel: "View Character Profiles",
      targetId: "characters"
    },
    music: {
      title: "2. NVK Records Soundtrack",
      subtitle: "Audio Infrastructure",
      description: "Character themes, tempos, and instrumentation engineered into exclusive NVK Records releases, singles, and cinematic scores.",
      actionLabel: "Explore Soundtracks",
      targetId: "music"
    },
    story: {
      title: "3. Story & Scene Pipeline",
      subtitle: "Narrative Architecture",
      description: "Chapter emotional maps and acoustic requirements feeding future animation, short-form content, and video episodes.",
      actionLabel: "Read Story Chapters",
      targetId: "stories"
    },
    commerce: {
      title: "4. Ecosystem Commerce",
      subtitle: "Monetization & Artifacts",
      description: "Genesis Cans headphones, hardcover books, and holographic apparel connecting fans directly into the NVK Global economy.",
      actionLabel: "Shop Artifacts",
      targetId: "commerce"
    }
  };

  const handleNavigate = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="bridge-3d" className="py-20 md:py-32 bg-space-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-orbitron text-light-blue uppercase tracking-widest bg-light-blue/10 px-4 py-1.5 rounded-full border border-light-blue/20">
            NVK 3D & INTERACTIVE BRIDGE HUD
          </span>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mt-4 mb-6 text-glow">
            The Content Flywheel in Action
          </h2>
          <p className="text-star-white/80 text-lg font-exo">
            Navigate the recursive IP engine. Click any node in the cosmic loop to inspect how story creates music, music creates products, and products expand the universe.
          </p>
        </div>

        {/* Interactive HUD Node Navigator */}
        <div className="max-w-5xl mx-auto bg-deep-purple/40 border border-light-blue/30 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {(['character', 'music', 'story', 'commerce'] as const).map((nodeKey, idx) => (
              <button
                key={nodeKey}
                onClick={() => setActiveNode(nodeKey)}
                className={`p-4 rounded-2xl border text-center transition-all ${
                  activeNode === nodeKey
                    ? 'bg-light-blue text-space-black border-light-blue shadow-lg shadow-light-blue/30 scale-105'
                    : 'bg-space-black/60 border-light-blue/20 text-star-white hover:border-light-blue/50'
                }`}
              >
                <span className="block text-xs font-mono mb-1">NODE 0{idx + 1}</span>
                <span className="font-orbitron font-bold text-sm uppercase">{nodeKey}</span>
              </button>
            ))}
          </div>

          <div className="bg-space-black/80 border border-light-blue/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <span className="text-xs font-mono text-light-blue">{nodeContent[activeNode].subtitle}</span>
              <h3 className="text-2xl font-orbitron font-bold text-star-white">{nodeContent[activeNode].title}</h3>
              <p className="text-star-white/80 font-exo text-sm leading-relaxed">{nodeContent[activeNode].description}</p>
            </div>
            <button
              onClick={() => handleNavigate(nodeContent[activeNode].targetId)}
              className="bg-light-blue text-space-black font-orbitron text-xs font-bold px-8 py-4 rounded-xl hover:bg-star-white transition-colors shadow-lg whitespace-nowrap"
            >
              {nodeContent[activeNode].actionLabel} →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
