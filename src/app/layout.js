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

export const metadata = {
  title: {
    default: "B2B Marketing Agency | Fastex Media",
    template: "%s",
  },
  description: "Fastex Media is a premier B2B marketing agency. We help brands build predictable, highly-scalable lead generation systems on autopilot, scaling MRR up to 10X.",
  metadataBase: new URL("https://fastexmedia.com/"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "B2B Marketing Agency | Fastex Media",
    description: "Fastex Media is a premier B2B marketing agency. We help brands build predictable, highly-scalable lead generation systems on autopilot, scaling MRR up to 10X.",
    url: "https://fastexmedia.com/",
    siteName: "Fastex Media",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Marketing Agency | Fastex Media",
    description: "Fastex Media is a premier B2B marketing agency. We help brands build predictable, highly-scalable lead generation systems on autopilot, scaling MRR up to 10X.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Fastex Media",
  url: "https://fastexmedia.com",
  description:
    "B2B marketing agency building predictable outbound systems for IT & software, solar & renewable energy, manufacturing, education and commercial real estate.",
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
  areaServed: "IN",
  sameAs: [
    "https://www.linkedin.com/company/fastex-media-agency/",
    "https://www.instagram.com/fastexmedia_/",
    "https://x.com/shahaagamn",
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
            __html: JSON.stringify(organizationSchema),
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
