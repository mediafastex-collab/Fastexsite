/**
 * The AI video work shown on /ai-videos.
 *
 * Files live in public/videos/ai/: an H.264 MP4 compressed for the web and a
 * JPG poster taken from the video, so the page shows a still before anything
 * plays. `w` and `h` are the video's real size; they set each card's shape.
 */
export const aiVideos = [
  {
    slug: "spacepartner",
    title: "SpacePartner",
    kind: "2D character explainer",
    summary:
      "A launch reel for coworking software: the late-night spreadsheet chaos every space manager knows, then the app that ends it. In Hinglish.",
    w: 1080,
    h: 1920,
    duration: 65,
  },
  {
    slug: "11za-hotel",
    title: "11za for Hotels",
    kind: "2D character explainer",
    summary:
      "Milo, a receptionist mascot, shows how WhatsApp Business API handles midnight bookings, guest questions and check-out for hotels. In Hinglish.",
    w: 1080,
    h: 1920,
    duration: 69,
  },
  {
    slug: "sarathi",
    title: "Heaven Solar · Sarathi app",
    kind: "2D app explainer",
    summary:
      "The Sarathi app explained step by step: a free site visit, live project updates, support tickets and refer-and-earn. In Hindi.",
    w: 1080,
    h: 1920,
    duration: 64,
  },
];

/** What we make, in the order the page lists it. */
export const videoFormats = [
  {
    title: "2D animation",
    copy: "Explainers and motion graphics that make a product or a process easy to follow, in your brand's colours and type.",
  },
  {
    title: "3D animation",
    copy: "Product renders, walkthroughs and scenes that show what a camera cannot, without a shoot.",
  },
  {
    title: "Character animation",
    copy: "A mascot or a recurring character who tells your story, so every video feels like part of one series.",
  },
  {
    title: "Short-form reels",
    copy: "Vertical videos cut for Instagram, LinkedIn and YouTube Shorts, with captions that work on mute.",
  },
];

/** How a video gets made. */
export const videoProcess = [
  {
    num: "01",
    title: "Brief and script",
    copy: "We agree the one thing the video has to say, who it is for and where it will run, then write the script.",
  },
  {
    num: "02",
    title: "Look and storyboard",
    copy: "Style frames and a storyboard, so you see the look and every scene before anything is animated.",
  },
  {
    num: "03",
    title: "Animate, voice and sound",
    copy: "AI generation and animation, refined by our team, with voice-over, music and sound design.",
  },
  {
    num: "04",
    title: "Edit and deliver",
    copy: "Final cut in every format you need, from vertical reels to website and presentation versions.",
  },
];
