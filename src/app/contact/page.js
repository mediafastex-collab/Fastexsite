export const metadata = {
  title: "Contact Us | Fastex Media",
  description: "Book a strategy session with Fastex Media to scale your B2B revenue.",
};

export default function Contact() {
  return (
    <div className="page-wrapper">
      <section className="contact section-padding" style={{ paddingTop: "150px", paddingBottom: "150px" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <div className="section-header reveal">
            <h1>
              Book Your <span className="text-orange">Strategy Session</span>
            </h1>
            <p>Select a time below to speak with our growth experts.</p>
          </div>

          <div className="cal-embed-container reveal" style={{ marginTop: "3rem", background: "rgba(255,255,255,0.02)", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
            <iframe 
              src="https://cal.id/aagam-digital/discovery-call" 
              frameBorder="0" 
              allowFullScreen 
              loading="lazy"
              style={{ width: "100%", height: "700px", display: "block" }}
            ></iframe>
          </div>

          <div className="contact-details" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginTop: "4rem", textAlign: "center" }}>
            <div className="contact-card" style={{ padding: "2rem", background: "rgba(30,30,30,0.5)", borderRadius: "20px" }}>
              <i className="ph ph-envelope-simple text-orange" style={{ fontSize: "2.5rem", marginBottom: "1rem" }}></i>
              <h3>Email Us</h3>
              <a href="mailto:hello@fastexmedia.com" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>hello@fastexmedia.com</a>
            </div>
            
            <div className="contact-card" style={{ padding: "2rem", background: "rgba(30,30,30,0.5)", borderRadius: "20px" }}>
              <i className="ph ph-phone text-orange" style={{ fontSize: "2.5rem", marginBottom: "1rem" }}></i>
              <h3>Call Us</h3>
              <a href="tel:+919328680929" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>+91 9328680929</a>
            </div>

            <div className="contact-card" style={{ padding: "2rem", background: "rgba(30,30,30,0.5)", borderRadius: "20px" }}>
              <i className="ph ph-map-pin text-orange" style={{ fontSize: "2.5rem", marginBottom: "1rem" }}></i>
              <h3>Visit Us</h3>
              <p style={{ color: "var(--text-secondary)" }}>10th floor The Junomoneta Tower, Surat, Gujarat 394510</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
