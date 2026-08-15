import Link from "next/link";

export const metadata = {
  title: "Pricing | Fastex Media",
  description: "Customized B2B marketing pricing and scalable plans tailored to your specific growth goals.",
};

export default function Pricing() {
  return (
    <div className="page-wrapper">
      <section className="pricing section-padding" style={{ paddingTop: "150px", paddingBottom: "150px" }}>
        <div className="container">
          <div className="section-header reveal">
            <h1>
              Transparent & <span className="text-orange">Tailored</span> Pricing
            </h1>
            <p>We build custom solutions scaled exactly to your revenue goals. No cookie-cutter packages.</p>
          </div>

          <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
            
            {/* Tier 1 */}
            <div className="pricing-card reveal" style={{ background: "rgba(30, 30, 30, 0.4)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px", padding: "2.5rem", position: "relative" }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Starter Growth</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>Perfect for agencies looking to establish their initial outbound engine.</p>
              <div className="price-display" style={{ marginBottom: "2rem" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: "700", color: "var(--primary-color)" }}>Custom</span>
                <span style={{ display: "block", fontSize: "0.9rem", color: "var(--text-secondary)" }}>Based on target volume</span>
              </div>
              <ul className="features-list" style={{ marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li><i className="ph-fill ph-check-circle text-orange"></i> Setup of 1 Outbound Channel</li>
                <li><i className="ph-fill ph-check-circle text-orange"></i> Ideal Customer Profile (ICP) Mapping</li>
                <li><i className="ph-fill ph-check-circle text-orange"></i> Basic Campaign Management</li>
                <li><i className="ph-fill ph-check-circle text-orange"></i> Monthly Reporting</li>
              </ul>
              <Link href="/contact" className="btn btn-outline" style={{ width: "100%", display: "block", textAlign: "center" }}>
                Get a Quote
              </Link>
            </div>

            {/* Tier 2 */}
            <div className="pricing-card reveal" style={{ background: "rgba(255, 126, 51, 0.05)", border: "1px solid var(--primary-color)", borderRadius: "20px", padding: "2.5rem", position: "relative", transform: "scale(1.05)", zIndex: 2 }}>
              <div style={{ position: "absolute", top: "-15px", left: "50%", transform: "translateX(-50%)", background: "var(--primary-color)", color: "#000", padding: "5px 15px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "700" }}>MOST POPULAR</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Scale & Dominate</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>The complete 10X revenue system with omni-channel outreach.</p>
              <div className="price-display" style={{ marginBottom: "2rem" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: "700", color: "var(--primary-color)" }}>Custom</span>
                <span style={{ display: "block", fontSize: "0.9rem", color: "var(--text-secondary)" }}>Tailored to your MRR goals</span>
              </div>
              <ul className="features-list" style={{ marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li><i className="ph-fill ph-check-circle text-orange"></i> Multi-channel (Email, LinkedIn, WA)</li>
                <li><i className="ph-fill ph-check-circle text-orange"></i> Advanced Personalization</li>
                <li><i className="ph-fill ph-check-circle text-orange"></i> Dedicated Account Manager</li>
                <li><i className="ph-fill ph-check-circle text-orange"></i> CRM Integration</li>
                <li><i className="ph-fill ph-check-circle text-orange"></i> Bi-weekly Strategy Calls</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ width: "100%", display: "block", textAlign: "center" }}>
                Book Strategy Call
              </Link>
            </div>

            {/* Tier 3 */}
            <div className="pricing-card reveal" style={{ background: "rgba(30, 30, 30, 0.4)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px", padding: "2.5rem", position: "relative" }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Enterprise Partner</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>For large B2B organizations needing infinite scale and branding.</p>
              <div className="price-display" style={{ marginBottom: "2rem" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: "700", color: "var(--primary-color)" }}>Custom</span>
                <span style={{ display: "block", fontSize: "0.9rem", color: "var(--text-secondary)" }}>Comprehensive Enterprise Scope</span>
              </div>
              <ul className="features-list" style={{ marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li><i className="ph-fill ph-check-circle text-orange"></i> Full "Done-For-You" Infrastructure</li>
                <li><i className="ph-fill ph-check-circle text-orange"></i> Performance Marketing & Ads</li>
                <li><i className="ph-fill ph-check-circle text-orange"></i> Social Media & Branding</li>
                <li><i className="ph-fill ph-check-circle text-orange"></i> Unlimited Lead Capacity</li>
                <li><i className="ph-fill ph-check-circle text-orange"></i> 24/7 Priority Support</li>
              </ul>
              <Link href="/contact" className="btn btn-outline" style={{ width: "100%", display: "block", textAlign: "center" }}>
                Contact Sales
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
