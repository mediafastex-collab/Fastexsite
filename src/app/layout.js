import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const DESCRIPTION =
  "Fastex Media is a global B2B lead generation agency. We build multi-channel outbound systems — performance marketing, LinkedIn, social media, WhatsApp and cold email — that book qualified sales meetings for B2B companies worldwide.";

const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Fastex Media — B2B lead generation that books meetings",
  type: "image/jpeg",
};

export const metadata = {
  title: {
    default: "B2B Lead Generation Agency | Fastex Media",
    template: "%s",
  },
  description: DESCRIPTION,
  metadataBase: new URL("https://www.fastexmedia.com/"),
  applicationName: "Fastex Media",
  authors: [{ name: "Fastex Media", url: "https://www.fastexmedia.com" }],
  creator: "Fastex Media",
  publisher: "Fastex Media",
  category: "Business",
  alternates: {
    canonical: "/",
    // Single-language site serving a worldwide audience.
    languages: { "x-default": "/", en: "/" },
  },
  openGraph: {
    title: "B2B Lead Generation Agency | Fastex Media",
    description: DESCRIPTION,
    url: "https://www.fastexmedia.com/",
    siteName: "Fastex Media",
    type: "website",
    locale: "en",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Lead Generation Agency | Fastex Media",
    description: DESCRIPTION,
    site: "@shahaagamn",
    creator: "@shahaagamn",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const SITE = "https://www.fastexmedia.com";

/**
 * Site-wide graph. Organization and WebSite carry stable @id values so the
 * per-page schema on service, industry and about pages can reference the same
 * entities instead of redeclaring them.
 */
const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE}/#organization`,
      name: "Fastex Media",
      alternateName: "Fastex Media Agency",
      url: SITE,
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/icon-512.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE}/og-image.jpg`,
      description:
        "Global B2B lead generation agency building predictable outbound systems for IT & software, solar & renewable energy, manufacturing, education and commercial real estate. Working with clients worldwide.",
      slogan: "Design. Scale. Dominate.",
      foundingDate: "2025-06",
      founder: {
        "@type": "Person",
        name: "Aagam Shah",
        jobTitle: "Founder",
        url: "https://www.linkedin.com/in/shahaagam/",
      },
      email: "hello@fastexmedia.com",
      telephone: "+91-9328680929",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "10th Floor, The Junomoneta Tower, Besides Rajhans Cinema, Adajan, Hazira Road",
        addressLocality: "Surat",
        addressRegion: "Gujarat",
        postalCode: "394510",
        addressCountry: "IN",
      },
      areaServed: { "@type": "Place", name: "Worldwide" },
      knowsAbout: [
        "B2B lead generation",
        "Performance marketing",
        "LinkedIn lead generation",
        "Cold email outreach",
        "WhatsApp Business API marketing",
        "B2B social media marketing",
        "Appointment setting",
        "Email deliverability",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@fastexmedia.com",
        telephone: "+91-9328680929",
        availableLanguage: ["English"],
        areaServed: "Worldwide",
      },
      sameAs: [
        "https://www.linkedin.com/company/fastex-media-agency/",
        "https://www.instagram.com/fastexmedia_/",
        "https://x.com/shahaagamn",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Fastex Media",
      description:
        "Global B2B lead generation agency. Outbound systems that book qualified sales meetings.",
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script src="https://unpkg.com/@phosphor-icons/web" defer></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteSchema),
          }}
        />
      </head>
      <body>
        <div className="site-wrapper">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <Reveal />
      </body>
    </html>
  );
}
