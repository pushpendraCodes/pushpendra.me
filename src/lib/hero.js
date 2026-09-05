export const FRAME_COUNT = 169;

export const framePath = (n) =>
  `/frames/frame_${String(n).padStart(4, "0")}.jpg`;

export const HERO_TEXT_FADE_END = 0.08;

export const DIALOGUES = [
  {
    id: "d1",
    show: 0.1,
    hide: 0.3,
    quote:
      "Pushpendra delivered a production-ready SaaS platform ahead of schedule — clean architecture and clear communication throughout.",
    speaker: "Client Review",
    film: "SAAS PLATFORM",
  },
  {
    id: "d2",
    show: 0.35,
    hide: 0.55,
    quote:
      "From WhatsApp automation to real-time video — full-stack delivery that actually scales with the business.",
    speaker: "Product Partner",
    film: "FULL STACK",
  },
  {
    id: "d3",
    show: 0.6,
    hide: 0.8,
    quote:
      "One9 Tech turned our idea into a live product. Reliable engineering, modern UI, and ongoing support.",
    speaker: "Startup Founder",
    film: "ONE9 TECH",
  },
];
