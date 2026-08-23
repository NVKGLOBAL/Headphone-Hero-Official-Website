import React from 'react';

export const CommerceBridgeSection: React.FC = () => {
  const products = [
    {
      id: "HH-PROD-001",
      name: "Genesis Cans - Signature Edition Headphones",
      category: "Hardware",
      price: "$299.99",
      description: "High-fidelity planar magnetic headphones inspired by Book 1 artifact. Engineered with NVK Acoustic tuning.",
      image: "https://picsum.photos/seed/GenesisCans/600/600",
      linkedIP: "Nevik (HH-CHAR-001) / Theme: Hacking the Simulation",
    },
    {
      id: "HH-PROD-002",
      name: "Symphony of Salvation — Hardcover Genesis Edition",
      category: "Books & Media",
      price: "$39.99",
      description: "The official master source book containing world rules, character art, and digital soundtrack download card.",
      image: "https://picsum.photos/seed/BookEdition/600/600",
      linkedIP: "Universe Genesis Asset",
    },
    {
      id: "HH-PROD-003",
      name: "Nebular Spire Holographic Hoodie",
      category: "Apparel",
      price: "$85.00",
      description: "Premium heavyweight cotton hoodie featuring Nyx's prismatic waveform embroidered on sleeve.",
      image: "https://picsum.photos/seed/Hoodie/600/600",
      linkedIP: "Nyx (HH-CHAR-002) / Theme: Nebular Resonance",
    },
  ];

  return (
    <section id="commerce" className="py-20 md:py-32 bg-space-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-orbitron text-light-blue uppercase tracking-widest bg-light-blue/10 px-4 py-1.5 rounded-full border border-light-blue/20">
            COMMERCE BRIDGE
          </span>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mt-4 mb-6 text-glow">
            Products Inspired by Universe & Sound
          </h2>
          <p className="text-star-white/80 text-lg font-exo">
            Every product connects directly to a Headphone Heroes character or NVK Records release. Own the artifact, hear the theme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((prod) => (
            <div
              key={prod.id}
              className="bg-deep-purple/40 border border-light-blue/20 rounded-2xl overflow-hidden backdrop-blur-md shadow-xl flex flex-col justify-between group hover:border-light-blue/60 transition-all duration-300"
            >
              <div>
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-space-black/80 text-light-blue border border-light-blue/30 px-3 py-1 rounded-full text-xs font-orbitron font-bold">
                    {prod.category}
                  </span>
                  <span className="absolute top-4 right-4 bg-light-blue text-space-black px-3 py-1 rounded-full text-xs font-orbitron font-bold">
                    {prod.price}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-xs font-mono text-light-blue">{prod.id}</span>
                  <h3 className="font-orbitron font-bold text-xl text-star-white">{prod.name}</h3>
                  <p className="text-xs text-star-white/70 font-exo leading-relaxed">{prod.description}</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="bg-space-black/60 p-3 rounded-xl border border-light-blue/10 mb-4">
                  <span className="text-[10px] font-mono text-light-blue block uppercase">Connected IP</span>
                  <span className="text-xs text-star-white font-exo">{prod.linkedIP}</span>
                </div>
                <button
                  onClick={() => alert(`Added ${prod.name} to your NVK Global cart!`)}
                  className="w-full bg-light-blue text-space-black font-orbitron text-xs font-bold py-3 rounded-xl hover:bg-star-white transition-colors shadow-lg"
                >
                  ACQUIRE ARTIFACT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
