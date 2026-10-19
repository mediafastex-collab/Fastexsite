import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import localFont from "next/font/local";

/**
 * Headline face for the main site. Self-hosted: see ./fonts/README.md for
 * why this is a 55 KB file rather than the 271 KB next/font/google would ship.
 * Loaded here, not in the root layout, so campaign pages never fetch it.
 */
const newsreader = localFont({
  src: "./fonts/newsreader-opsz-400.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-newsreader",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

/** Chrome shared by every page of the main site. */
export default function SiteLayout({ children }) {
  return (
    <>
      <div className={`site-wrapper ${newsreader.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
      <Reveal />
    </>
  );
}
