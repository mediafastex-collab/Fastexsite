export const site = {
  name: "Fastex Media",
  url: "https://www.fastexmedia.com",
  email: "hello@fastexmedia.com",
  phone: "+91 9328680929",
  phoneHref: "tel:+919328680929",
  founded: "June 2025",
  /** Shown in the footer instead of a location. The firm is positioned globally. */
  tagline: "Working with ambitious businesses worldwide.",
  descriptor: "marketing consulting firm",
  /**
   * Registered address. Kept for the Organization schema entity only, it is
   * deliberately not surfaced in page copy, headings or the footer.
   */
  address:
    "10th Floor, The Junomoneta Tower, Besides Rajhans Cinema, Adajan, Hazira Road, Surat, Gujarat 394510",
};

/**
 * The single call to action for the entire site. Every button, link and card
 * CTA resolves here. Changing it changes the site.
 */
export const cta = {
  label: "Book a Strategy Session",
  href: "/strategy-session",
  short: "Book a Session",
};

export const founder = {
  name: "Aagam Shah",
  role: "Founder",
  photo: "/assets/aagam-shah.jpg",
  linkedin: "https://www.linkedin.com/in/shahaagam/",
  x: "https://x.com/shahaagamn",
};

/** Social links. Marks are drawn inline by <SocialIcon>. */
export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/fastex-media-agency/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fastexmedia_/",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/shahaagamn",
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=919328680929&text&type=phone_number&app_absent=0",
  },
];
