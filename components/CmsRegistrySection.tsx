import React, { useState } from 'react';
import { INITIAL_IP_ASSETS, INITIAL_RELATIONSHIPS, ALBUMS } from '../constants';
import type { IPAsset, IPRelationship } from '../types';

export const CmsRegistrySection: React.FC = () => {
  const [assets, setAssets] = useState<IPAsset[]>(INITIAL_IP_ASSETS);
  const [relationships, setRelationships] = useState<IPRelationship[]>(INITIAL_RELATIONSHIPS);
  const [activeTab, setActiveTab] = useState<'assets' | 'relationships' | 'suggest'>('assets');

  // New relationship form state
  const [fromId, setFromId] = useState('ARTIST-01');
  const [toId, setToId] = useState('BOOK-01');
  const [relType, setRelType] = useState<'related_to' | 'soundtrack_for' | 'inspired_by' | 'chapter_reference'>('related_to');
  const [successMsg, setSuccessMsg] = useState('');

  // AI suggestion state
  const [suggestionInput, setSuggestionInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([
    "AI SUGGESTION — NOT CANON: Map Album 'Cosmic Beats & Basslines' as official soundtrack accompaniment to Book 1.",
    "AI SUGGESTION — NOT CANON: Establish thematic linkage between 'Relentless Hustle' and Chapter 1 urban setting."
  ]);

  const handleCreateRelationship = (e: React.FormEvent) => {
    e.preventDefault();
    const newRel: IPRelationship = {
      id: `REL-0${relationships.length + 1}`,
      fromAssetId: fromId,
      toAssetId: toId,
      relationshipType: relType,
      status: 'owner-approved',
      source: { sourceType: 'owner', verificationStatus: 'verified' }
    };
    setRelationships([...relationships, newRel]);
    setSuccessMsg("Relationship successfully created and owner-approved!");
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  return (
    <section id="cms" className="py-20 md:py-32 bg-space-black/95 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-orbitron text-light-blue uppercase tracking-widest bg-light-blue/10 px-4 py-1.5 rounded-full border border-light-blue/20">
            PROVENANCE-AWARE CMS & TRUTH ENGINE
          </span>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mt-4 mb-6 text-glow">
            NVK Truth & Asset Registry
          </h2>
          <p className="text-star-white/80 text-lg font-exo">
            Audit verified assets, manage owner-approved relationships between music and publishing, and review AI suggestions safely.
          </p>
        </div>

        {/* CMS Navigation Tabs */}
        <div className="flex justify-center mb-10 space-x-4">
          <button
            onClick={() => setActiveTab('assets')}
            className={`px-6 py-3 rounded-xl font-orbitron text-xs font-bold transition-all ${
              activeTab === 'assets'
                ? 'bg-light-blue text-space-black shadow-lg'
                : 'bg-deep-purple/60 text-star-white border border-light-blue/20 hover:bg-deep-purple'
            }`}
          >
            📂 VERIFIED ASSETS ({assets.length})
          </button>
          <button
            onClick={() => setActiveTab('relationships')}
            className={`px-6 py-3 rounded-xl font-orbitron text-xs font-bold transition-all ${
              activeTab === 'relationships'
                ? 'bg-light-blue text-space-black shadow-lg'
                : 'bg-deep-purple/60 text-star-white border border-light-blue/20 hover:bg-deep-purple'
            }`}
          >
            🔗 RELATIONSHIP GRAPH ({relationships.length})
          </button>
          <button
            onClick={() => setActiveTab('suggest')}
            className={`px-6 py-3 rounded-xl font-orbitron text-xs font-bold transition-all ${
              activeTab === 'suggest'
                ? 'bg-light-blue text-space-black shadow-lg'
                : 'bg-deep-purple/60 text-star-white border border-light-blue/20 hover:bg-deep-purple'
            }`}
          >
            🤖 AI SUGGESTIONS
          </button>
        </div>

        {/* Tab 1: Assets */}
        {activeTab === 'assets' && (
          <div className="max-w-5xl mx-auto bg-deep-purple/40 border border-light-blue/20 rounded-2xl p-8 backdrop-blur-md shadow-2xl">
            <h3 className="font-orbitron font-bold text-xl text-light-blue mb-6">Verified Public Assets</h3>
            <div className="space-y-4">
              {assets.map((asset) => (
                <div key={asset.id} className="bg-space-black/60 p-6 rounded-xl border border-light-blue/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-xs font-mono text-light-blue">{asset.id}</span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-orbitron font-bold uppercase bg-green-500/20 text-green-400 border border-green-500/30">
                        {asset.provenance}
                      </span>
                    </div>
                    <h4 className="font-orbitron font-bold text-lg text-star-white">{asset.name}</h4>
                    <p className="text-xs text-star-white/70 font-exo mt-1">{asset.description}</p>
                  </div>
                  <div className="text-right text-xs font-mono text-light-blue/80 whitespace-nowrap">
                    <div>Type: {asset.type}</div>
                    <div className="text-green-400">● {asset.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Relationships */}
        {activeTab === 'relationships' && (
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-deep-purple/40 border border-light-blue/20 rounded-2xl p-8 backdrop-blur-md shadow-2xl">
              <h3 className="font-orbitron font-bold text-xl text-light-blue mb-6">Active Relationship Graph</h3>
              <div className="space-y-4">
                {relationships.map((rel) => (
                  <div key={rel.id} className="bg-space-black/60 p-4 rounded-xl border border-light-blue/20 flex items-center justify-between font-exo text-sm">
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-light-blue">{rel.fromAssetId}</span>
                      <span className="text-light-blue">──[{rel.relationshipType}]──►</span>
                      <span className="font-mono text-light-blue">{rel.toAssetId}</span>
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-orbitron font-bold">
                      {rel.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Owner Relationship Creator */}
            <div className="bg-deep-purple/40 border border-light-blue/20 rounded-2xl p-8 backdrop-blur-md shadow-2xl">
              <h3 className="font-orbitron font-bold text-xl text-light-blue mb-2">Create Owner-Approved Relationship</h3>
              <p className="text-xs text-star-white/70 font-exo mb-6">Explicitly connect verified music releases to Book 1 without automated hallucination.</p>
              
              {successMsg && (
                <div className="mb-4 p-4 bg-green-500/20 border border-green-500/40 text-green-400 rounded-xl text-xs font-mono">
                  {successMsg}
                </div>
              )}

              <form onSubmit={handleCreateRelationship} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-orbitron text-light-blue mb-2">From Asset</label>
                  <select
                    value={fromId}
                    onChange={(e) => setFromId(e.target.value)}
                    className="w-full bg-space-black border border-light-blue/30 rounded-xl p-3 text-star-white font-exo text-xs"
                  >
                    <option value="ARTIST-01">Headphone Hero (ARTIST-01)</option>
                    <option value="LABEL-01">NVK Records (LABEL-01)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-orbitron text-light-blue mb-2">Relationship Type</label>
                  <select
                    value={relType}
                    onChange={(e) => setRelType(e.target.value as any)}
                    className="w-full bg-space-black border border-light-blue/30 rounded-xl p-3 text-star-white font-exo text-xs"
                  >
                    <option value="related_to">Related To</option>
                    <option value="soundtrack_for">Soundtrack For</option>
                    <option value="inspired_by">Inspired By</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-orbitron text-light-blue mb-2">To Asset</label>
                  <select
                    value={toId}
                    onChange={(e) => setToId(e.target.value)}
                    className="w-full bg-space-black border border-light-blue/30 rounded-xl p-3 text-star-white font-exo text-xs"
                  >
                    <option value="BOOK-01">Headphone Heroes Book 1 (BOOK-01)</option>
                    <option value="LABEL-01">NVK Records (LABEL-01)</option>
                  </select>
                </div>
                <div className="md:col-span-3 mt-4">
                  <button
                    type="submit"
                    className="w-full bg-light-blue text-space-black font-orbitron text-xs font-bold py-3 rounded-xl hover:bg-star-white transition-colors shadow-lg"
                  >
                    AUTHORIZE & PUBLISH RELATIONSHIP
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Tab 3: AI Suggestions */}
        {activeTab === 'suggest' && (
          <div className="max-w-5xl mx-auto bg-deep-purple/40 border border-light-blue/20 rounded-2xl p-8 backdrop-blur-md shadow-2xl space-y-6">
            <h3 className="font-orbitron font-bold text-xl text-light-blue">AI Assistance & Suggestions</h3>
            <p className="text-xs text-star-white/70 font-exo">
              Per PRD v2.0 mandates, any AI-generated concept is strictly labeled <strong>AI SUGGESTION — NOT CANON</strong> and requires explicit owner approval before becoming part of verified IP.
            </p>

            <div className="space-y-4">
              {suggestions.map((sug, idx) => (
                <div key={idx} className="bg-space-black/60 p-6 rounded-xl border border-yellow-500/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full font-orbitron text-[10px] font-bold mb-2">
                      AI SUGGESTION — NOT CANON
                    </span>
                    <p className="text-star-white text-sm font-exo">{sug}</p>
                  </div>
                  <div className="flex space-x-2 whitespace-nowrap">
                    <button
                      onClick={() => alert("Added to development drafts.")}
                      className="bg-light-blue text-space-black font-orbitron text-xs font-bold px-4 py-2 rounded-lg hover:bg-star-white transition-colors"
                    >
                      [ADD TO DEV]
                    </button>
                    <button
                      onClick={() => setSuggestions(suggestions.filter((_, i) => i !== idx))}
                      className="bg-red-500/20 text-red-400 font-orbitron text-xs font-bold px-4 py-2 rounded-lg hover:bg-red-500/30 transition-colors"
                    >
                      [DISMISS]
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
