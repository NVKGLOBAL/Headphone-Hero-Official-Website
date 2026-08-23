import type { Album, BlogPost, IPAsset, IPRelationship, StoryChapter } from './types';

export const ARTIST_INFO = {
  name: "Headphone Hero",
  creator: "Nevik Elmo Rountree",
  label: "NVK Records",
  tagline: "Cosmic Soundscapes & Genre-Bending Journeys",
  description: "Headphone Hero is the electronic, synthwave, lofi, and guitar-driven music project by artist and producer Nevik Elmo Rountree, released under NVK Records.",
};

export const VERIFIED_BOOKS = [
  {
    id: "HH-BOOK-01",
    title: "Headphone Heroes — Book 1: Symphony of Salvation",
    author: "Nevik Elmo Rountree / NVK",
    releaseStatus: "Published / Verified IP Source",
    description: "The Genesis Asset establishing the transmedia world where sound, music, and alien frequencies collide.",
    chaptersCount: 13,
  }
];

export const ALBUMS: Album[] = [
  {
    title: "Cosmic Beats & Basslines",
    artist: "Headphone Hero",
    year: 2024,
    releaseDate: "June 20, 2024",
    upc: "198675698223",
    genre: "Electronic / Bass",
    hyperfollowUrl: "https://distrokid.com/hyperfollow/headphonehero/cosmic-beats--basslines",
    coverUrl: "https://picsum.photos/seed/CosmicBeatsBasslines/500/500",
    tracklist: [
      "Heartbreaker JCB2Me",
      "Open Your Mind",
      "Dance Of Roses And Thorns",
      "Bassline Beatdown",
      "Electroblade",
      "Nebula Resonance",
      "Sky Worlds",
      "Alien Cult",
      "Fields Of Resolve",
      "Sonic Bloom"
    ]
  },
  {
    title: "Relentless Hustle",
    artist: "Headphone Hero",
    year: 2024,
    releaseDate: "September 20, 2024",
    upc: "198888245825",
    genre: "Hip-Hop / Electronic",
    hyperfollowUrl: "https://distrokid.com/hyperfollow/headphonehero/relentless-hustle",
    coverUrl: "https://picsum.photos/seed/RelentlessHustle/500/500",
    tracklist: [
      "Chasing Ambition",
      "$$$ On My Mind",
      "Relentless Hustle",
      "Empire of Dreams",
      "Keep Watchin' (Radio Edit)",
      "Crowned Hustler",
      "Empire of Wealth",
      "Headphone Hero Here 2 Stay",
      "Wealth in Motion"
    ]
  },
  {
    title: "Seeds Of Change",
    artist: "Headphone Hero",
    year: 2024,
    releaseDate: "September 6, 2024",
    upc: "198890141368",
    genre: "Electronic",
    hyperfollowUrl: "https://distrokid.com/hyperfollow/headphonehero/seeds-of-change",
    coverUrl: "https://picsum.photos/seed/SeedsOfChange/500/500",
    tracklist: [
      "Hustle Hard Anthem",
      "Keep Watchin' No Chit Chat",
      "No Goodbyes",
      "Rising to the Top",
      "Designer Pain",
      "Endless Game",
      "Rising Strength"
    ]
  },
  {
    title: "LoFi Beats For Studying",
    artist: "Headphone Hero",
    year: 2024,
    releaseDate: "July 17, 2024",
    upc: "198668437082",
    genre: "Lofi / Chill",
    hyperfollowUrl: "https://distrokid.com/hyperfollow/headphonehero/lofi-beats-for-studying",
    coverUrl: "https://picsum.photos/seed/LoFiBeatsForStudying/500/500",
    tracklist: [
      "Jazzmellow",
      "Chillax G",
      "Guitar Whispers Love",
      "Got to Keep Goin'",
      "Guitar Study Bliss",
      "Dreams & Chill",
      "Study Groove",
      "Chill Vibes",
      "Coffee and Daydreams",
      "Coffee Shop Serenade"
    ]
  },
  {
    title: "Galactic Conspiracy",
    artist: "Headphone Hero",
    year: 2024,
    releaseDate: "August 1, 2024",
    upc: "198667640988",
    genre: "Synthwave / Electronic",
    hyperfollowUrl: "https://distrokid.com/hyperfollow/headphonehero/galactic-conspiracy",
    coverUrl: "https://picsum.photos/seed/GalacticConspiracy/500/500",
    tracklist: [
      "Need a lil peace n love in the world",
      "Ethereal Mechanism",
      "Galactic Conspiracy",
      "Unleash the Beat",
      "Feel da rhythm hit"
    ]
  },
  {
    title: "YYXXYY",
    artist: "Headphone Hero",
    year: 2024,
    releaseDate: "August 12, 2024",
    upc: "198663618004",
    genre: "Ambient / Electronic",
    hyperfollowUrl: "https://distrokid.com/hyperfollow/headphonehero/yyxxyy",
    coverUrl: "https://picsum.photos/seed/YYXXYY/500/500",
    tracklist: [
      "About Time",
      "Still Alone",
      "TRIP",
      "Ayahuasca",
      "The Ritual Dance",
      "Dim Horizons",
      "Shadows of Defeat",
      "Spirit in the Haze"
    ]
  },
  {
    title: "HHacking the Simulation",
    artist: "Headphone Hero",
    year: 2024,
    releaseDate: "September 11, 2024",
    upc: "198889824043",
    genre: "Cyberpunk / Glitch",
    hyperfollowUrl: "https://distrokid.com/hyperfollow/headphonehero/hhacking-the-simulation",
    coverUrl: "https://picsum.photos/seed/HHackingtheSimulation/500/500",
    tracklist: [
      "Simulated Reality",
      "Feelin Like A Simulation",
      "Living in a Simulation",
      "SIM Slaves",
      "Free Water",
      "Break the Simulation",
      "The Last Song Ever Sung (Bonus Track)"
    ]
  },
  {
    title: "Guitar Odyssey",
    artist: "Headphone Hero",
    year: 2024,
    releaseDate: "August 6, 2024",
    upc: "198665617388",
    genre: "Metal / Instrumental Guitar",
    hyperfollowUrl: "https://distrokid.com/hyperfollow/headphonehero/guitar-odyssey",
    coverUrl: "https://picsum.photos/seed/GuitarOdyssey/500/500",
    tracklist: [
      "Atomic Energy",
      "Battle For The Skys",
      "The Broken Souls",
      "Chasing Shadows",
      "Dreams No More",
      "Echoes of Tomorrow",
      "Edge of the Abyss",
      "Wheelee",
      "Wasteland Wonderland",
      "How I Like My Coffee",
      "Gotta Keep Riding"
    ]
  },
  {
    title: "Guitar Odyssey, Vol. 2",
    artist: "Headphone Hero",
    year: 2024,
    releaseDate: "October 25, 2024",
    upc: "198882410236",
    genre: "Metal / Rock",
    hyperfollowUrl: "https://distrokid.com/hyperfollow/headphonehero/guitar-odyssey-vol-2",
    coverUrl: "https://picsum.photos/seed/GuitarOdysseyVol2/500/500",
    tracklist: [
      "Legacy of Fire",
      "Guitar Odyssey",
      "Inferno's Embrace",
      "Legendary Strings",
      "Fires of Oblivion",
      "Velvet Overdrive",
      "Epic Stardust Riff",
      "Infinity Dive",
      "Desert Outlaw",
      "Phoenix Shredstorm",
      "Midnight Mirage",
      "Desert Cowboys of Metal",
      "Twilight Drifter",
      "Blistering Sands"
    ]
  },
  {
    title: "Guitar Odyssey, Vol. 3",
    artist: "Headphone Hero",
    year: 2025,
    releaseDate: "January 1, 2025",
    upc: "199096834580",
    genre: "Metal / Rock",
    hyperfollowUrl: "https://distrokid.com/hyperfollow/headphonehero/guitar-odyssey-vol-3",
    coverUrl: "https://picsum.photos/seed/GuitarOdysseyVol3/500/500",
    tracklist: [
      "Alien Hearts",
      "Anger of the G",
      "Darkened Hearts",
      "Dead Man Ride",
      "Descent into Madness",
      "Dragon Inferno",
      "Falling Shadows",
      "Final Song",
      "Headphone Power"
    ]
  },
  {
    title: "Guitar Odyssey, Vol. 4",
    artist: "Headphone Hero",
    year: 2025,
    releaseDate: "January 10, 2025",
    upc: "199091849046",
    genre: "Metal / Rock",
    hyperfollowUrl: "https://distrokid.com/hyperfollow/headphonehero/guitar-odyssey-vol-4",
    coverUrl: "https://picsum.photos/seed/GuitarOdysseyVol4/500/500",
    tracklist: [
      "Circus of Fleas",
      "DEVIL OF GUITAR",
      "NEVIK",
      "Eternal Strings",
      "Eyeless Gaze",
      "Feeling Unsainted",
      "Goodbye Forever"
    ]
  },
  {
    title: "Galactic Flex",
    artist: "Headphone Hero",
    year: 2024,
    releaseDate: "August 12, 2024",
    upc: "198663620496",
    genre: "Hip-Hop / Electronic",
    hyperfollowUrl: "https://distrokid.com/hyperfollow/headphonehero/galactic-flex",
    coverUrl: "https://picsum.photos/seed/GalacticFlex/500/500",
    tracklist: [
      "Galactic Flex",
      "NVK HH",
      "Mind is an Open Lever",
      "Cosmic Embrace",
      "Smoke Clears Nothing Left"
    ]
  },
  {
    title: "Let's Go Crazy",
    artist: "Headphone Hero",
    year: 2025,
    releaseDate: "January 24, 2025",
    upc: "199089913902",
    genre: "Bass / Electronic",
    hyperfollowUrl: "https://distrokid.com/hyperfollow/headphonehero/lets-go-crazy",
    coverUrl: "https://picsum.photos/seed/LetsGoCrazy/500/500",
    tracklist: [
      "Let's Go Crazy (Album Show)",
      "Let's Go Crazy (Low Bass Album Show)",
      "Cosmic Invasion",
      "Unleashed Energy",
      "Aggressive Awakening",
      "Ethereal Winter",
      "Night of the Titans",
      "Euphoric Flow",
      "Rhythm of the Pulse"
    ]
  },
  {
    title: "The Hero's Journey",
    artist: "Headphone Hero",
    year: 2024,
    releaseDate: "June 20, 2024",
    upc: "198675563668",
    genre: "Cinematic / Electronic",
    hyperfollowUrl: "https://distrokid.com/hyperfollow/headphonehero/the-heros-journey-2",
    coverUrl: "https://picsum.photos/seed/TheHerosJourney/500/500",
    tracklist: [
      "No Miscommunication (Hero's Journey)",
      "Painting Stars in the Rolls Royce (Hero's Journey)",
      "The Truth Is A Rare Sound (Hero's Journey)",
      "Cloudy Visions (Hero's Journey)",
      "Locked Gate (Hero's Journey)",
      "Borrowed Time (Hero's Journey)",
      "Turn The World Around (Hero's Journey)",
      "Lost In Translation (Hero's Journey)"
    ]
  }
];

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    chapterNumber: 0,
    title: "Prologue: The Signal",
    summary: "A blazing pulse of sound and light carved through the void, carrying with it 50 alien headphones—a lifeline, a warning, and a harbinger of change. They landed silently, their surfaces shimmering like oil under moonlight. The word echoed within them: Listen.\n\nOn a distant world, the last survivors of a lost civilization stood in the ruins of their greatest city. The air pulsed with sound—distant echoes of a war long lost. An elder placed a trembling hand on a console, sending the final transmission. The headphones, their last hope, were already gone—hurtling across space toward an unknown fate.\n\nQR Code: Cosmic Symphony 1: Mystery of Schrödinger's Beat\n“Scan to hear the cosmic pulse that birthed the rebellion.”"
  },
  {
    chapterNumber: 1,
    title: "Chapter 1: The Birth of the Headphone Heroes",
    summary: "Max Carter’s last shift at the construction site felt like a lifetime compressed into fourteen brutal hours. The jackhammer screamed through steel and concrete, each vibration rattling his bones until even his breath felt heavy with dust. His muscles ached, his fingers raw from gripping tools all day, but all he could think about was his sister’s hospital bills stacking higher than the rubble he worked to tear down.\n\nThe storm overhead cracked with lightning, splitting the sky into jagged streaks of white. He slumped against his rust-eaten truck, staring at the cracked screen of his phone: $12.37. A new notification blinked—Payment Overdue. He clenched his jaw, his calloused fingers tightening around the device, the urge to throw it overwhelming. Instead, he exhaled sharply and shoved it into his pocket.\n\nThe wind howled, but beneath it, he heard something… else. A faint hum, rhythmic, pulsing. It wasn’t coming from the storm. It was something deeper. Something just beyond his perception.\n\nHe shook his head and climbed into his truck. Tomorrow would be another fight. But he had no idea how different that fight would be.\n\nQR Code: Guitar Odyssey, Vol. 1\n“Scan to feel the grind of Max’s despair—and the first riff of rebellion.”"
  },
  {
    chapterNumber: 2,
    title: "Chapter 2: The First Mission",
    summary: "Max didn’t remember falling asleep, but he awoke to the sound of something at his doorstep. A faint chime, barely audible over the storm outside.\n\nHe stumbled to the door, half-expecting a late-night package mix-up, but when he opened it, there was no delivery truck, no courier. Just a small, black box pulsing faintly, almost like it was breathing.\n\nHis name wasn’t on it. No return address. Only a single word, etched in silver on the top: Listen.\n\nCuriosity fought exhaustion, but curiosity won. He knelt, hesitating for only a moment before lifting the lid. Inside lay a sleek pair of black headphones, their surface shimmering like oil on water.\n\n“The hell is this?” he muttered.\n\nA whisper passed through his mind. Put them on.\n\nAgainst his better judgment, he did. The moment they settled over his ears, the world around him shattered into light.\n\nQR Code: HHacking the Simulation (Track: Simulated Reality)\nScan Prompt: “Scan to hear the static before the symphony begins.”"
  },
  {
    chapterNumber: 3,
    title: "Chapter 3: The Awakening",
    summary: "A searing light exploded behind Max’s eyelids. His body felt weightless. The couch he’d dragged from a dumpster two years ago—the one that creaked like a dying animal—suddenly felt lighter than air.\n\nHe reached out, gripping the armrest with one hand. It lifted. Effortlessly.\n\n“What the—?” He yanked his hand away, heart hammering. His veins pulsed with orange light, circuits of molten energy spiraling beneath his skin. Sparks flickered at his fingertips.\n\nA thrill shot through him, alien and exhilarating. He clenched his fists, testing his strength. The jackhammer he’d barely controlled yesterday? He could crush it now.\n\nThen, a whisper, curling around his thoughts like a slow-building melody. Welcome.\n\nHis grip tightened on the headphones. Whatever this was—it wasn’t normal. And he wasn’t alone.\n\nQR Code: Guitar Odyssey, Vol. 2 (Track: Guitar Odyssey)\n“Scan to ignite Max’s power—and the rhythm of rebellion.”"
  },
  {
    chapterNumber: 4,
    title: "Chapter 4: The Gathering Storm",
    summary: "The realization hit Max like a tidal wave—he wasn’t the only one. Across the globe, others had received the same headphones, each unlocking abilities unlike anything seen before. Emily Zhang, a student in Shanghai, discovered she could manipulate airwaves to lift herself into the sky. John Martinez, a courier in Mexico City, found he could move at speeds beyond human comprehension. Sarah Thompson, a scientist in London, could bend frequencies to cloak herself in invisibility.\n\nOne by one, they found each other, their signals resonating through the very fabric of sound itself. It wasn’t long before they learned the truth: the headphones were a gift—and a curse. Because something else had been listening, too.\n\nThe Headphone Heroes found themselves standing before the ancient ruins of a lost city, shrouded in mist and mystery. The city was said to hold the key to their origins, and the Headphone Heroes knew that they had to uncover its secrets. As they stepped into the city, they were greeted by the eerie silence of a place long abandoned. The streets were lined with crumbling buildings, covered in vines and moss, and the sky above was obscured by a thick canopy of trees. The Headphone Heroes moved cautiously, aware that the city was filled with dangerous traps and obstacles. They heard strange noises coming from the shadows, and they couldn't shake off the feeling that they were being watched.\n\nAs they ventured deeper into the city, they came across ancient tombs and hidden labs, filled with strange and mysterious artifacts. They knew that this was the answer they had been searching for, but they also felt a sense of unease as they realized the true extent of their creators' power. They stumbled upon a massive chamber at the heart of the ruins containing a towering, ominous structure pulsing with otherworldly energy.\n\n\"Greetings, Headphone Heroes,\" a voice boomed. \"We have been waiting for you.\" The structure shifted into towering, elegant alien beings with crystal heads. \"We are the creators of the Headphone Heroes. You were created for a specific purpose, to protect the earth from an impending threat. A malevolent force from beyond the stars is coming, and it seeks to destroy all life on this planet. You are the only ones who can stop it.\"\n\nOut in Space, the alien leaders gathered aboard their flagship to review invasion plans, testing a new technology designed to control human minds and neutralize resistance. Meanwhile, the Headphone Heroes experienced a strange transmission in their headphones, surging with energizing music as Bret Malinowski, Ben Samurai, Brightlove, and Alex discovered their powers evolving. The Alien Leader watched in disbelief as his secret weapon empowered rather than suppressed the heroes.\n\nQR Code: Relentless Hustle\n“Scan to join the resistance—and march to an empire’s anthem.”"
  },
  {
    chapterNumber: 5,
    title: "Chapter 5: The First Battle",
    summary: "The night the first drones arrived, the sky bled with neon streaks of energy. Sirens blared across major cities as dark, insect-like machines descended upon the streets, their metallic wings slicing through the air with deadly precision. They weren’t here to negotiate. They were hunting.\n\nMax barely had time to react before a drone locked onto him. He dove behind an overturned car as a sonic blast shattered the pavement where he had stood. His heartbeat pounded in sync with the bass-heavy pulse inside his headphones. He focused—then leaped.\n\nThe world slowed. The beat surged through his veins. He slammed his fist into the drone midair, sending it crashing into a nearby building in a burst of sparks.\n\nAcross the city, Emily twisted through the air, dodging blasts with the precision of a dancer, while John blurred between drones, striking faster than the eye could track. Sarah moved unseen, planting disruptors at key points.\n\nBut for every drone they destroyed, more emerged. And then, through their headphones, a chilling voice crackled: “You are not the only ones who listen.”\n\nThe invasion had begun.\n\nQR Code: Borrowed Time\n“Scan to witness the first strike—and the beginning of war.”"
  },
  {
    chapterNumber: 6,
    title: "Chapter 6: The Rising Threat",
    summary: "The heroes were scattered across the world, each fighting their own battles against the growing alien invasion. Reports flooded in—entire cities had gone silent overnight. At first, the news blamed power outages, but the truth was more terrifying. The Sound Nullifier had begun its work.\n\nMax, Emily, Sarah, and John regrouped at their underground hideout, the faint hum of their headphones the only sound keeping the silence at bay. Zorax, the rogue alien scientist, stood before a holographic map of Earth, his expression grim.\n\n\"They’ve deployed phase one,\" Zorax said, his voice heavy with guilt. \"This is just the beginning. Once the primary Nullifier reaches full capacity, your planet will fall into absolute silence.\"\n\nThe realization hit hard. Without sound, they would lose their powers. And without their powers, Earth had no defense.\n\nQR Code: The Truth Is A Rare Sound\n“Scan to feel the weight of the rising war.”"
  },
  {
    chapterNumber: 7,
    title: "Chapter 7: The Resistance Rises",
    summary: "With time running out, the heroes set out to find others like them—those who had also received the alien headphones. From Tokyo to Nairobi, Berlin to São Paulo, they tracked down the remaining heroes:\n\n• Adam – A Berlin sound engineer who could manipulate frequencies, turning sound into force fields.\n• Aisha – A Nairobi scientist who bent sound waves into solid constructs, creating impenetrable barriers.\n• Kai – A Tokyo-based DJ who unleashed sonic shockwaves powerful enough to level buildings.\n\nAs they united, their signals intertwined, amplifying their strength. But the enemy was watching. The moment they activated their powers together, a deafening hum echoed across the globe—the alien fleet had locked onto them."
  },
  {
    chapterNumber: 8,
    title: "Chapter 8: The Invasion Begins",
    summary: "The night sky, once clear, now a serene blanket of darkness wrapped around the earth. A massive vessel, black as obsidian, shaped like nothing anyone had ever seen before, descended over the city. The sound of its engines was a low, ominous hum that seemed to vibrate in the very air.\n\nThe Headphone Heroes stood in awe as the ship landed. Figures emerged—tall, slender aliens with shimmering silver skin and clothing woven from moonlight. One alien stepped forward: \"You are the ones who possess the power of the headphones. We have come to claim what is rightfully ours.\"\n\n\"We won't let you take over our planet,\" the heroes replied. Suddenly, the heroes were hit by a wave of energy so powerful it knocked them to the ground. The Sound Nullifier assaulted their senses.\n\nCities fell silent in waves as the Sound Nullifier expanded its reach. Panic spread. The Headphone Heroes focused all their energy on their music, pushing back against the nullifier. But in the chaos, one of the heroes (Ben) was captured and dragged onto the alien ship as it disappeared into the sky.\n\nQR Code: Let's Go Crazy - Low Bass Album Show\nScan Prompt: “Scan to hear the moment silence took over.”"
  },
  {
    chapterNumber: 9,
    title: "Chapter 9: Breaking the Silence",
    summary: "They looked to each other, unsure of what to do next, when suddenly a small shuttle ship descended from the sky. A figure appeared—Zorax, a rogue alien scientist in a lab coat and glasses.\n\n\"I can help you,\" said Zorax. \"I don't agree with what our leader is doing. I have a device that can disable the sound nullifier, but you'll have to come with me to the ship.\"\n\nKnowing they had no other options, the heroes boarded the shuttle and soared toward the alien mothership. With their powers fading, they turned to Zorax’s artifact—a remnant of his fallen world. When Sarah placed it on her heart, a low hum resonated through their bones, and sound fought back against the silence.\n\nQR Code: Zorax Artifact Frequency\nScan Prompt: “Scan to reignite the battle against silence.”"
  },
  {
    chapterNumber: 10,
    title: "Chapter 10: The Mothership",
    summary: "The heroes launched their final mission—an infiltration of the alien mothership to disable the Sound Nullifier at its core. Navigating labyrinthine corridors, Alex slipped through a small opening to find their friend chained to a cell wall, bruised and bloodied.\n\nSteeling himself, Alex raised his headphones to his ears. As the first notes cascaded forth, majestic melodies intertwined with heart-wrenching harmonies. The aliens found themselves entranced, swaying to the rhythm as if bound by invisible strings. Alex sliced through the cold, unyielding chains and freed his friend.\n\nReinforced by Zorax and the rest of the team, the Headphone Heroes fought their way to the pulsating core where the Alien Leader awaited in a biomechanical exoskeleton, bellowing: \"YOU DARE CHALLENGE ME, SUPREME RULER OF THE COSMOS?\"\n\nQR Code: Mothership Core\n“Scan to face the battle.”"
  },
  {
    chapterNumber: 11,
    title: "Chapter 11: The Final Battle",
    summary: "The alien leader’s voice was a chilling melody of destruction. \"You cannot win. We are harmony. You are noise. And noise must be silenced.\"\n\nThe clash was unlike anything the universe had seen. The alien leader wielded sound as a weapon, distorting reality. Every note the heroes played, he countered with perfect silence. Max’s fists met resistance; Emily’s flight faltered; Sarah disappeared entirely.\n\nThen, Zorax made his move. He slammed the artifact into the core. A single note rang out—pure, defiant, deafening. The Nullifier trembled. The silence cracked.\n\nThe heroes roared, unleashing a unified symphony of sound. The alien leader’s army was decimated, and their leader lay wounded at their feet, whispering, \"Please... spare my life.\"\n\nQR Code: Final Chord\n“Scan to shatter the silence and claim victory.”"
  },
  {
    chapterNumber: 12,
    title: "Chapter 12: The Aftermath",
    summary: "The mothership imploded. The Sound Nullifier collapsed. The world exhaled, and music returned. Cities awoke with the hum of life. The heroes stood together, victorious.\n\nWith the fallen leader pleading for mercy, Zorax stepped forward. \"We cannot let this cycle of violence continue. We must find a way to live in harmony—to work together for the good of all.\" Through negotiation, Zorax became the new leader of the aliens, promising a future of cooperation."
  },
  {
    chapterNumber: 13,
    title: "Chapter 13: Peace On Earth",
    summary: "The air was thick with smoke and ash, the world a shattered apocalyptic wasteland. The Headphone Heroes landed to help survivors in makeshift shelters. Their music had to heal both physical wounds and emotional scars.\n\nWhen they touched down, their arrival was met with cheers and applause. Slowly, humans and former alien foes began to work side by side, rebuilding a world defined not by conflict, but by cooperation and shared culture."
  },
  {
    chapterNumber: 14,
    title: "Epilogue: The Next Signal",
    summary: "Far away, in a forgotten part of the world, a lone headphone pulsed beneath the sand. A child reached for it. Static whispered.\n\n“The next signal is yours to carry.”\n\nQR Code: YYXXYY\n“Scan to glimpse the next chapter.”\n\n(End of Book 1. The sequel awaits.)"
  }
];

export const INITIAL_IP_ASSETS: IPAsset[] = [
  {
    id: "ARTIST-01",
    name: "Headphone Hero",
    type: "artist",
    description: "Verified music project and artist profile by Nevik Elmo Rountree under NVK Records.",
    status: "verified",
    provenance: "verified",
    source: { sourceType: "official-site", verificationStatus: "verified", verifiedAt: "2026-08-23" },
    public: true
  },
  {
    id: "LABEL-01",
    name: "NVK Records",
    type: "organization",
    description: "Parent record label and audio infrastructure distributing Headphone Hero releases worldwide.",
    status: "verified",
    provenance: "verified",
    source: { sourceType: "distribution", verificationStatus: "verified", verifiedAt: "2026-08-23" },
    public: true
  },
  {
    id: "BOOK-01",
    name: "Headphone Heroes — Book 1: Symphony of Salvation",
    type: "book",
    description: "The official verified Genesis Asset and book source documenting the Headphone Heroes story.",
    status: "verified",
    provenance: "verified",
    source: { sourceType: "book", verificationStatus: "verified", verifiedAt: "2026-08-23" },
    public: true
  }
];

export const INITIAL_RELATIONSHIPS: IPRelationship[] = [
  {
    id: "REL-01",
    fromAssetId: "ARTIST-01",
    toAssetId: "LABEL-01",
    relationshipType: "related_to",
    status: "verified",
    source: { sourceType: "official-site", verificationStatus: "verified" }
  },
  {
    id: "REL-02",
    fromAssetId: "ARTIST-01",
    toAssetId: "BOOK-01",
    relationshipType: "related_to",
    status: "owner-approved",
    source: { sourceType: "owner", verificationStatus: "verified" }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Headphone Hero & NVK Records: Real-Asset Bridge v2.0",
    date: "August 23, 2026",
    excerpt: "Transitioning to a truth-grounded, provenance-aware architecture linking verified music catalogs and official book assets without fictional lore.",
    imageUrl: "https://picsum.photos/seed/BridgeV2/600/400"
  },
  {
    title: "Exploring 'Cosmic Beats & Basslines'",
    date: "June 20, 2024",
    excerpt: "A deep dive into Headphone Hero's foundational NVK Records release featuring 10 cosmic tracks and DistroKid distribution.",
    imageUrl: "https://picsum.photos/seed/CosmicBeats/600/400"
  }
];
