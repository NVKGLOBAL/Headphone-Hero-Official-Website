import React, { useState, useEffect } from 'react';
import { STORY_CHAPTERS, ALBUMS } from '../constants';
import type { StoryChapter } from '../types';

export const BookSection: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<StoryChapter>(STORY_CHAPTERS[0]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechPaused, setSpeechPaused] = useState(false);

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceUri, setSelectedVoiceUri] = useState<string>('');

  // Cleanup speech synthesis on unmount and load voices
  useEffect(() => {
    if ('speechSynthesis' in window) {
      const updateVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        // Sort voices to put Neural / Online / Google / Natural / Premium voices first
        const scoredVoices = availableVoices.map(v => {
          let score = 0;
          const name = v.name.toLowerCase();
          if (name.includes('natural') || name.includes('neural')) score += 10;
          if (name.includes('online') || name.includes('premium')) score += 8;
          if (name.includes('google') || name.includes('siri') || name.includes('microsoft aria') || name.includes('microsoft zira') || name.includes('enhanced')) score += 6;
          if (v.lang.startsWith('en')) score += 5;
          return { voice: v, score };
        }).sort((a, b) => b.score - a.score);

        const sortedVoices = scoredVoices.map(s => s.voice);
        setVoices(sortedVoices);

        if (sortedVoices.length > 0 && !selectedVoiceUri) {
          setSelectedVoiceUri(sortedVoices[0].voiceURI);
        }
      };

      updateVoices();
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }

    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [selectedVoiceUri]);

  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) {
      alert("Text-to-speech is not supported in your browser.");
      return;
    }

    const synth = window.speechSynthesis;

    if (isSpeaking && !speechPaused) {
      synth.pause();
      setSpeechPaused(true);
      return;
    }

    if (speechPaused) {
      synth.resume();
      setSpeechPaused(false);
      return;
    }

    synth.cancel();
    const textToRead = `${activeChapter.title}. ${activeChapter.summary}`;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 0.95; // Slightly slower for better clarity and natural pacing
    utterance.pitch = 1.0;

    if (selectedVoiceUri && voices.length > 0) {
      const chosenVoice = voices.find(v => v.voiceURI === selectedVoiceUri);
      if (chosenVoice) {
        utterance.voice = chosenVoice;
      }
    }

    utterance.onend = () => {
      setIsSpeaking(false);
      setSpeechPaused(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setSpeechPaused(false);
    };

    synth.speak(utterance);
    setIsSpeaking(true);
    setSpeechPaused(false);
  };

  const handleStopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setSpeechPaused(false);
    }
  };

  const handleDownloadPdf = () => {
    const fullBookText = STORY_CHAPTERS.map(ch => 
      `========================================\n${ch.title.toUpperCase()}\n========================================\n\n${ch.summary}\n\n\n`
    ).join('');

    const catalogLinksText = `OFFICIAL NVK RECORDS CATALOG & DISTROKID HYPERFOLLOW LINKS:\n` +
      ALBUMS.map(a => `- ${a.title}: ${a.hyperfollowUrl}`).join('\n') + `\n\n`;

    const headerInfo = `HEADPHONE HEROES — BOOK 1: SYMPHONY OF SALVATION\nAuthor: Nevik Elmo Rountree / NVK Records\nOfficial Verified IP Asset & Free Community Edition\nFull Chapters, QR Code Prompts & Soundtrack Links\n\n\n`;
    
    const blob = new Blob([headerInfo + catalogLinksText + fullBookText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Headphone_Heroes_Book_1_Symphony_of_Salvation_Official_Edition.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getChapterAlbumMatch = (chapterTitle: string, summary: string) => {
    if (summary.includes("Cosmic Symphony") || chapterTitle.includes("Prologue")) {
      return ALBUMS.find(a => a.title.includes("Cosmic Beats")) || ALBUMS[0];
    }
    if (summary.includes("Guitar Odyssey, Vol. 1") || chapterTitle.includes("Chapter 1")) {
      return ALBUMS.find(a => a.title === "Guitar Odyssey") || ALBUMS[7];
    }
    if (summary.includes("HHacking the Simulation")) {
      return ALBUMS.find(a => a.title.includes("HHacking")) || ALBUMS[6];
    }
    if (summary.includes("Guitar Odyssey, Vol. 2")) {
      return ALBUMS.find(a => a.title.includes("Guitar Odyssey, Vol. 2")) || ALBUMS[8];
    }
    if (summary.includes("Relentless Hustle")) {
      return ALBUMS.find(a => a.title.includes("Relentless Hustle")) || ALBUMS[1];
    }
    if (summary.includes("Borrowed Time") || summary.includes("The Truth Is A Rare Sound")) {
      return ALBUMS.find(a => a.title.includes("Hero's Journey")) || ALBUMS[12];
    }
    if (summary.includes("Let's Go Crazy")) {
      return ALBUMS.find(a => a.title.includes("Let's Go Crazy")) || ALBUMS[11];
    }
    if (summary.includes("Zorax Artifact")) {
      return ALBUMS.find(a => a.title.includes("Galactic Conspiracy")) || ALBUMS[4];
    }
    if (summary.includes("Mothership Core")) {
      return ALBUMS.find(a => a.title.includes("Guitar Odyssey, Vol. 3")) || ALBUMS[9];
    }
    if (summary.includes("Final Chord")) {
      return ALBUMS.find(a => a.title.includes("Guitar Odyssey, Vol. 4")) || ALBUMS[10];
    }
    if (summary.includes("YYXXYY")) {
      return ALBUMS.find(a => a.title.includes("YYXXYY")) || ALBUMS[5];
    }
    return ALBUMS[0];
  };

  const matchedAlbum = getChapterAlbumMatch(activeChapter.title, activeChapter.summary);

  return (
    <section id="book" className="py-20 md:py-32 bg-space-black/90 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-orbitron text-light-blue uppercase tracking-widest bg-light-blue/10 px-4 py-1.5 rounded-full border border-light-blue/20">
            FREE COMMUNITY READING ROOM & VERIFIED PUBLISHING ASSET
          </span>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mt-4 mb-6 text-glow">
            Headphone Heroes — Book 1: Symphony of Salvation
          </h2>
          <p className="text-star-white/80 text-lg font-exo mb-8">
            Read the full book for free, listen with free browser voice narration, stream matching catalog albums via QR codes, and download the official text edition instantly.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleDownloadPdf}
              className="bg-light-blue text-space-black font-orbitron text-xs font-bold px-6 py-3.5 rounded-xl hover:bg-star-white transition-colors shadow-lg flex items-center space-x-2"
            >
              <span>📥 DOWNLOAD OFFICIAL BOOK (FULL TEXT & QR CODES)</span>
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Chapter Selector */}
          <div className="lg:col-span-5 bg-deep-purple/40 border border-light-blue/20 rounded-3xl p-6 backdrop-blur-md max-h-[600px] overflow-y-auto space-y-2 shadow-xl">
            <h3 className="font-orbitron font-bold text-light-blue text-sm mb-4 px-2">📖 COMPLETE CHAPTER ARCHIVE (15 PARTS)</h3>
            {STORY_CHAPTERS.map((ch) => (
              <button
                key={ch.chapterNumber}
                onClick={() => {
                  handleStopSpeech();
                  setActiveChapter(ch);
                }}
                className={`w-full text-left p-4 rounded-xl transition-all border flex items-center justify-between ${
                  activeChapter.chapterNumber === ch.chapterNumber
                    ? 'bg-light-blue text-space-black border-light-blue font-bold shadow-lg'
                    : 'bg-space-black/60 border-light-blue/10 text-star-white hover:border-light-blue/40'
                }`}
              >
                <span className="font-exo text-sm">{ch.title}</span>
                <span className="text-xs font-mono opacity-70">#{ch.chapterNumber}</span>
              </button>
            ))}
          </div>

          {/* Chapter Details & Reader */}
          <div className="lg:col-span-7 bg-deep-purple/40 border border-light-blue/20 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-light-blue/10">
              <div>
                <span className="text-xs font-mono text-light-blue px-3 py-1 bg-light-blue/10 rounded-full border border-light-blue/20">
                  FREE CHAPTER READER
                </span>
                <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-glow mt-3">{activeChapter.title}</h3>
              </div>

              {/* TTS Audio Controls & Free Voice Notice */}
              <div className="flex flex-col items-end gap-2">
                {voices.length > 0 && (
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] font-mono text-light-blue">Voice:</span>
                    <select
                      value={selectedVoiceUri}
                      onChange={(e) => setSelectedVoiceUri(e.target.value)}
                      className="bg-space-black border border-light-blue/30 text-star-white text-xs rounded-xl px-3 py-1.5 focus:outline-none focus:border-light-blue font-exo"
                    >
                      {voices.filter(v => v.lang.startsWith('en')).map(v => (
                        <option key={v.voiceURI} value={v.voiceURI}>
                          {v.name} ({v.lang})
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleSpeak}
                    className="bg-light-blue text-space-black font-orbitron text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-star-white transition-colors shadow-md flex items-center space-x-1"
                  >
                    <span>
                      {isSpeaking && !speechPaused ? "⏸ PAUSE VOICE" : speechPaused ? "▶ RESUME VOICE" : "🔊 LISTEN (FREE VOICE)"}
                    </span>
                  </button>
                  {isSpeaking && (
                    <button
                      onClick={handleStopSpeech}
                      className="bg-red-500/20 text-red-400 border border-red-500/30 font-orbitron text-xs font-bold px-3 py-2.5 rounded-xl hover:bg-red-500/30 transition-colors"
                    >
                      ⏹ STOP
                    </button>
                  )}
                </div>
                <span className="text-[10px] font-mono text-star-white/50">Free Browser Speech Synthesis (High Quality Profiles Enabled)</span>
              </div>
            </div>

            <div className="text-star-white/95 font-exo text-base md:text-lg leading-relaxed bg-space-black/60 p-6 md:p-8 rounded-2xl border border-light-blue/10 max-h-[380px] overflow-y-auto whitespace-pre-line shadow-inner mb-6">
              {activeChapter.summary}
            </div>

            {/* Official QR Code & Matching Catalog Album Link */}
            {matchedAlbum && (
              <div className="bg-deep-purple/60 border border-light-blue/30 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4 mb-6 shadow-md">
                <div className="flex items-center space-x-4">
                  <img
                    src={matchedAlbum.coverUrl}
                    alt={matchedAlbum.title}
                    className="w-14 h-14 rounded-xl object-cover border border-light-blue/30"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-[10px] font-mono text-light-blue uppercase tracking-wider">Matched QR Catalog Soundtrack</span>
                    <h4 className="text-star-white font-orbitron font-bold text-sm">{matchedAlbum.title}</h4>
                    <p className="text-star-white/70 text-xs font-exo">{matchedAlbum.genre} • {matchedAlbum.year}</p>
                  </div>
                </div>
                <a
                  href={matchedAlbum.hyperfollowUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-light-blue text-space-black font-orbitron text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-star-white transition-colors shadow-md flex items-center space-x-1.5"
                >
                  <span>🎧 STREAM ON DISTROKID</span>
                </a>
              </div>
            )}

            <div className="pt-4 border-t border-light-blue/10 flex items-center justify-between text-xs text-star-white/60 font-mono">
              <span>NVK RECORDS • OFFICIAL VERIFIED IP</span>
              <span className="text-green-400">● 100% FREE ACCESS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
