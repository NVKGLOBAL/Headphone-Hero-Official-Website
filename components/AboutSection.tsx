
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-deep-purple/30">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3">
          <img src="https://picsum.photos/seed/artist/600/600" alt="Headphone Hero artist" className="rounded-full w-64 h-64 md:w-full md:h-auto mx-auto object-cover border-4 border-cosmic-blue box-glow" />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-glow">
            About The Artist
          </h2>
          <p className="text-lg text-star-white/90 mb-4 leading-relaxed">
            Headphone Hero is the primary music project of Nevik Elmo Rountree, an artist dedicated to exploring the vast frontiers of sound. The project blends a multitude of genres—from electronic and ambient to jazz fusion and space funk—creating immersive, thematic soundscapes that transport listeners to other worlds. 
          </p>
          <p className="text-lg text-star-white/90 leading-relaxed">
            With an extensive discography that includes the acclaimed "Cosmic Symphony" series and the genre-bending "Nature's Embrace," Headphone Hero consistently pushes creative boundaries. Each release is a new chapter in an ongoing auditory adventure, released under the independent NVK Records label.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
