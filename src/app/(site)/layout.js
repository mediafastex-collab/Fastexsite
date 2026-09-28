import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

/** Chrome shared by every page of the main site. */
export default function SiteLayout({ children }) {
  return (
    <>
      <div className="site-wrapper">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
      <Reveal />
    </>
  );
}
