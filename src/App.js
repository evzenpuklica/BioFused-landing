import { useState, useEffect, useRef } from "react";

const LOGO_SRC = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAQ4BDgDASIAAhEBAxEB/8QAHAABAAMBAQEBAQAAAAAAAAAAAAUGBwQDAgEI/8QAUhABAAEDAgIECAYNCQcFAQEAAAECAwQFEQYhEjFBUQcTYXGBkbHRFiJzk6HBFBUjMjU2QkRUcpKy4QgzNENSVWJjdBckJkVTgqIlZIPC0qPw/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAKhEBAAICAQMDAwUBAQEAAAAAAAECAxEEEiExEzJRIjNBFCNhcaGBQkP/2gAMAwEAAhEDEQA/AP4yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z";

const useInView = (threshold = 0.12) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const FadeIn = ({ children, delay = 0, className = "", style = {} }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      ...style,
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(30px)",
      transition: `opacity 0.85s ease ${delay}s, transform 0.85s ease ${delay}s`
    }}>
      {children}
    </div>
  );
};

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
  *{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  body{-webkit-font-smoothing:antialiased;}
  ::selection{background:#2d5a3d;color:#f0ece2;}
  .nav-link{font-family:'DM Sans',sans-serif;font-size:0.75rem;font-weight:400;letter-spacing:0.13em;text-transform:uppercase;color:#4a4a42;cursor:pointer;transition:color 0.2s;}
  .nav-link:hover{color:#2d5a3d;}
  .tag{display:inline-block;font-family:'DM Sans',sans-serif;font-size:0.67rem;font-weight:500;letter-spacing:0.16em;text-transform:uppercase;padding:5px 13px;border:1px solid rgba(45,90,61,0.35);color:#2d5a3d;background:transparent;}
  .tag-light{border-color:rgba(240,236,226,0.3) !important;color:rgba(240,236,226,0.7) !important;}
  .btn-p{display:inline-flex;align-items:center;gap:9px;background:#2d5a3d;color:#f0ece2;font-family:'DM Sans',sans-serif;font-size:0.74rem;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;padding:14px 30px;border:none;cursor:pointer;transition:all 0.3s ease;}
  .btn-p:hover{background:#1e3f2b;transform:translateY(-2px);box-shadow:0 10px 28px rgba(45,90,61,0.32);}
  .btn-o{display:inline-flex;align-items:center;gap:9px;background:transparent;color:#2d5a3d;font-family:'DM Sans',sans-serif;font-size:0.74rem;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;padding:13px 30px;border:1.5px solid #2d5a3d;cursor:pointer;transition:all 0.3s ease;}
  .btn-o:hover{background:#2d5a3d;color:#f0ece2;transform:translateY(-2px);}
  .feature-cell{background:#F7F4EE;padding:40px 34px;transition:background 0.25s ease;}
  .feature-cell:hover{background:#eee8db;}
  .card-hover{transition:all 0.3s ease;}
  .card-hover:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,0.1);}
  .sol-card{background:rgba(240,236,226,0.06);border:1px solid rgba(240,236,226,0.1);padding:36px 28px;transition:all 0.3s ease;}
  .sol-card:hover{background:rgba(240,236,226,0.11);border-color:rgba(240,236,226,0.22);}
  .divider{width:38px;height:1px;background:#2d5a3d;}
  .logo-nav{height:32px;width:auto;object-fit:contain;display:block;}
  .logo-footer{height:28px;width:auto;object-fit:contain;display:block;filter:brightness(0) invert(1) opacity(0.7);}
  .logo-footer:hover{filter:brightness(0) invert(1) opacity(1);}
  @media(max-width:900px){
    .hero-right{display:none !important;}
    .two-col{flex-direction:column !important;}
    .feat-grid{grid-template-columns:1fr !important;}
    .nav-links{display:none !important;}
  }
  @media(max-width:640px){
    .cred-strip{flex-direction:column !important;gap:12px !important;}
    .stats-row{gap:28px !important;}
  }
`;

const NAV = ["Problem", "Solution", "Product", "Vision", "Contact"];
const EMAIL = "contact.biofused@gmail.com";

export default function BioFused() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const go = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: "#F7F4EE", color: "#1a1a18", overflowX: "hidden" }}>
      <style>{STYLES}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 68,
        padding: "0 6%", display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(247,244,238,0.96)" : "rgba(247,244,238,0.7)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "none",
        transition: "all 0.4s ease",
      }}>
        {/* Logo */}
        <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={LOGO_SRC} alt="BioFused" className="logo-nav" />
        </div>
        <div className="nav-links" style={{ display: "flex", gap: 34, alignItems: "center" }}>
          {NAV.map(l => <span key={l} className="nav-link" onClick={() => go(l)}>{l}</span>)}
        </div>
        <a href={`mailto:${EMAIL}`} style={{ textDecoration: "none" }}>
          <button className="btn-p" style={{ padding: "10px 22px", fontSize: "0.7rem" }}>
            Get in Touch
          </button>
        </a>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 6% 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 72% 38%, rgba(45,90,61,0.07) 0%, transparent 58%), radial-gradient(ellipse at 18% 82%, rgba(180,158,118,0.09) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: -120, top: "8%", width: 520, height: 520, borderRadius: "50%", border: "1px solid rgba(45,90,61,0.07)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 30, top: "22%", width: 310, height: 310, borderRadius: "50%", border: "1px solid rgba(45,90,61,0.04)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1200, margin: "0 auto" }}>
          <div className="two-col" style={{ display: "flex", alignItems: "center", gap: 80 }}>
            <div style={{ flex: 1, maxWidth: 640 }}>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
                <span className="tag">Early-Stage Material Innovation</span>
                <span className="tag">Built for a Future Beyond Plastic</span>
              </div>
              <h1 style={{ fontSize: "clamp(3rem, 6vw, 5.4rem)", fontWeight: 300, lineHeight: 1.07, letterSpacing: "-0.01em", marginBottom: 26 }}>
                Reinventing<br />
                <em style={{ fontStyle: "italic", color: "#2d5a3d" }}>Single-Use</em><br />
                Plastic.
              </h1>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300, fontSize: "1.02rem", lineHeight: 1.72, color: "#4a4a42", marginBottom: 40, maxWidth: 480 }}>
                BioFused is a student-founded startup from Eindhoven developing biodegradable, potentially edible alternatives to single-use plastic — starting with the everyday spoon. We're building the material science layer for a post-plastic world.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 56 }}>
                <a href={`mailto:${EMAIL}`} style={{ textDecoration: "none" }}>
                  <button className="btn-p">
                    Get in Touch
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </a>
                <button className="btn-o" onClick={() => go("Solution")}>
                  Learn More
                </button>
              </div>
              <div className="stats-row" style={{ display: "flex", gap: 44, flexWrap: "wrap" }}>
                {[["100%", "Biodegradable"], ["0g", "Microplastics"], ["2025", "Founded"]].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontSize: "1.65rem", fontWeight: 300, color: "#2d5a3d", fontStyle: "italic" }}>{n}</div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", letterSpacing: "0.13em", textTransform: "uppercase", color: "#8a8a7e", marginTop: 3 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-right" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "relative", width: 360, height: 430 }}>
                <div style={{
                  position: "absolute", right: 0, top: 24, width: 285, height: 370,
                  background: "linear-gradient(140deg, #2d5a3d 0%, #1a3828 100%)",
                  display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 32
                }}>
                  <div style={{ width: 36, height: 1, background: "rgba(240,236,226,0.35)", marginBottom: 16 }} />
                  <div style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(240,236,226,0.55)", fontSize: "0.65rem", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 8 }}>First Product — 2025</div>
                  <div style={{ color: "#f0ece2", fontSize: "1.8rem", fontWeight: 300 }}>The BioSpoon</div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(240,236,226,0.5)", fontSize: "0.8rem", marginTop: 8, lineHeight: 1.55 }}>Functional. Sustainable.<br />Designed to disappear.</div>
                </div>
                <div style={{
                  position: "absolute", left: 0, top: 48,
                  background: "#f0ece2", border: "1px solid rgba(45,90,61,0.12)",
                  padding: "20px 22px", width: 154,
                  boxShadow: "0 18px 48px rgba(0,0,0,0.1)"
                }}>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a8a7e", marginBottom: 8 }}>Material type</div>
                  <div style={{ fontSize: "0.98rem", color: "#2d5a3d", fontWeight: 400 }}>Bio-based</div>
                  <div style={{ fontSize: "0.88rem", color: "#4a4a42", fontWeight: 300 }}>Compostable</div>
                  <div style={{ fontSize: "0.88rem", color: "#4a4a42", fontWeight: 300 }}>Edible-grade</div>
                </div>
                <div style={{
                  position: "absolute", bottom: 8, left: 8,
                  width: 78, height: 78, borderRadius: "50%",
                  border: "1px solid rgba(45,90,61,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", border: "1px solid rgba(45,90,61,0.28)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#2d5a3d" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#bbb" }}>Scroll</div>
          <div style={{ width: 1, height: 38, background: "linear-gradient(to bottom, #bbb, transparent)" }} />
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <div style={{ background: "#EDEAE2", borderTop: "1px solid rgba(0,0,0,0.07)", borderBottom: "1px solid rgba(0,0,0,0.07)", padding: "18px 6%" }}>
        <div className="cred-strip" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          {["Open to Investors & Partners", "Student-Founded Startup", "Early-Stage · Seed", "Eindhoven, NL · 2025"].map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#2d5a3d" }} />
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.7rem", letterSpacing: "0.11em", textTransform: "uppercase", color: "#6a6a5a" }}>{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <section id="problem" style={{ padding: "120px 6%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 68 }}>
              <span className="tag" style={{ display: "inline-block", marginBottom: 20 }}>The Problem</span>
              <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)", fontWeight: 300, lineHeight: 1.1, maxWidth: 580 }}>
                Plastic didn't solve a problem.<br />
                <em style={{ fontStyle: "italic", color: "#2d5a3d" }}>It became one.</em>
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 1, background: "rgba(45,90,61,0.1)" }}>
            {[
              ["01", "400 Years", "The time it takes a single plastic spoon to decompose. It will outlast buildings, civilisations, and every person alive today."],
              ["02", "40M Tons / Year", "Single-use plastic waste generated globally — with only 9% ever reaching a recycling facility."],
              ["03", "No Real Alternative", "Current biodegradable options are expensive, structurally weak, or dependent on industrial composting infrastructure that barely exists."],
              ["04", "Tightening Regulation", "EU bans, global policy shifts, and corporate ESG commitments are accelerating demand for viable alternatives — now."],
            ].map(([n, title, text]) => (
              <FadeIn key={n} delay={parseInt(n) * 0.07}>
                <div style={{ background: "#F7F4EE", padding: "44px 34px" }}>
                  <div style={{ fontSize: "3.4rem", fontWeight: 300, color: "rgba(45,90,61,0.13)", fontStyle: "italic", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: "1.35rem", fontWeight: 400, margin: "12px 0 10px", lineHeight: 1.2 }}>{title}</div>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.86rem", color: "#6a6a5e", lineHeight: 1.72, fontWeight: 300 }}>{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" style={{ background: "#2d5a3d", padding: "120px 6%", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -90, top: -90, width: 420, height: 420, borderRadius: "50%", border: "1px solid rgba(240,236,226,0.07)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: "4%", bottom: -70, width: 240, height: 240, borderRadius: "50%", border: "1px solid rgba(240,236,226,0.05)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <div style={{ marginBottom: 72 }}>
              <span className="tag tag-light" style={{ display: "inline-block", marginBottom: 20 }}>Our Approach</span>
              <div className="two-col" style={{ display: "flex", gap: 80, alignItems: "flex-end" }}>
                <h2 style={{ color: "#f0ece2", fontSize: "clamp(2.4rem, 4vw, 3.8rem)", fontWeight: 300, lineHeight: 1.1, flex: 1 }}>
                  Material science<br /><em style={{ fontStyle: "italic" }}>meets</em> everyday life.
                </h2>
                <p style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(240,236,226,0.62)", fontSize: "0.98rem", lineHeight: 1.72, fontWeight: 300, flex: 1, maxWidth: 440 }}>
                  BioFused is developing a new class of bio-based materials — fully biodegradable in natural environments, edible-grade in ambition, and designed to match conventional plastic on performance. We start with cutlery and scale toward a complete materials platform.
                </p>
              </div>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[
              { icon: "🌿", title: "Biodegradable by Design", desc: "Materials that break down naturally — no microplastic residue, no industrial composting required." },
              { icon: "🧪", title: "Edible-Grade Potential", desc: "Formulations safe for human consumption, opening radical new possibilities in food service and hospitality." },
              { icon: "⚙️", title: "Functional & Tested", desc: "Our prototype meets structural and thermal requirements of everyday use. Performance is non-negotiable." },
              { icon: "📐", title: "Platform, Not Just Product", desc: "The BioSpoon is an entry point. The underlying technology can replace plastic across entire product categories." },
            ].map(({ icon, title, desc }) => (
              <FadeIn key={title} delay={0.08}>
                <div className="sol-card">
                  <div style={{ fontSize: "1.75rem", marginBottom: 20 }}>{icon}</div>
                  <div style={{ color: "#f0ece2", fontSize: "1.08rem", fontWeight: 400, marginBottom: 10, lineHeight: 1.3 }}>{title}</div>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(240,236,226,0.52)", fontSize: "0.84rem", lineHeight: 1.7, fontWeight: 300 }}>{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section id="product" style={{ padding: "120px 6%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 72, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
              <div>
                <span className="tag" style={{ display: "inline-block", marginBottom: 20 }}>First Product</span>
                <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)", fontWeight: 300, lineHeight: 1.1 }}>
                  Meet the<br /><em style={{ fontStyle: "italic", color: "#2d5a3d" }}>BioSpoon.</em>
                </h2>
              </div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.94rem", color: "#6a6a5e", lineHeight: 1.72, fontWeight: 300, maxWidth: 380 }}>
                A single-use spoon that doesn't betray the planet. Designed for performance, engineered for sustainability, built to prove that green materials don't require compromise.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="feat-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(45,90,61,0.1)", marginBottom: 40 }}>
              {[
                ["Material", "Proprietary bio-blend", "Plant-based + natural binders"],
                ["Decomposition", "Fully natural", "No microplastic residue"],
                ["Durability", "On par with plastic", "Thermal and structural tested"],
                ["End of life", "Compost or consume", "Edible-grade formulation in R&D"],
              ].map(([label, value, note]) => (
                <div key={label} className="feature-cell">
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9a8e", marginBottom: 7 }}>{label}</div>
                  <div style={{ fontSize: "1.28rem", fontWeight: 400, color: "#1a1a18", marginBottom: 4 }}>{value}</div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.8rem", color: "#6a6a5e", fontWeight: 300 }}>{note}</div>
                </div>
              ))}
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 18 }}>
            {[
              ["Lightweight", "Practical for everyday food service without adding bulk or weight."],
              ["Heat-resistant", "Holds form in soups and hot liquids — a key failure point for most bio-alternatives."],
              ["Neutral taste", "No flavour transfer. Clean, food-safe finish. The experience stays uncompromised."],
              ["Production-ready", "Designed for high-volume manufacturing from the earliest stage of material development."],
            ].map(([title, desc]) => (
              <FadeIn key={title} delay={0.05}>
                <div className="card-hover" style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(45,90,61,0.1)", padding: "28px 28px 30px" }}>
                  <div className="divider" style={{ marginBottom: 18 }} />
                  <div style={{ fontSize: "1.02rem", fontWeight: 400, marginBottom: 9 }}>{title}</div>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.82rem", color: "#6a6a5e", lineHeight: 1.65, fontWeight: 300 }}>{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BIOFUSED */}
      <section style={{ background: "#1a1a18", padding: "120px 6%", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 28% 50%, rgba(45,90,61,0.14) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(180,158,118,0.06) 0%, transparent 48%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <div style={{ marginBottom: 72 }}>
              <span className="tag tag-light" style={{ display: "inline-block", marginBottom: 20 }}>Why BioFused</span>
              <h2 style={{ color: "#f0ece2", fontSize: "clamp(2.4rem, 4vw, 3.8rem)", fontWeight: 300, lineHeight: 1.1, maxWidth: 600 }}>
                The case for a<br /><em style={{ fontStyle: "italic", color: "rgba(120,190,140,0.85)" }}>different approach.</em>
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 1, background: "rgba(240,236,226,0.07)" }}>
            {[
              { n: "I", title: "Sustainable by science, not just by label", desc: "We don't greenwash. Our biodegradability claims are grounded in material formulation, not marketing. Every design decision starts with end-of-life in mind." },
              { n: "II", title: "Premium, not compromise", desc: "We reject the assumption that sustainable means inferior. BioFused products are held to the same functional standards as the plastic they replace." },
              { n: "III", title: "Platform-level thinking", desc: "We're not building one product. We're developing a material platform that can scale across cutlery, packaging, and beyond — investable by design." },
              { n: "IV", title: "Right place, right time", desc: "Regulatory tailwinds, rising ESG pressure, and shifting consumer expectations are converging. The market for real alternatives has never been more open." },
            ].map(({ n, title, desc }) => (
              <FadeIn key={n} delay={0.06}>
                <div style={{ background: "#1a1a18", padding: "44px 34px", transition: "background 0.25s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#222220"}
                  onMouseLeave={e => e.currentTarget.style.background = "#1a1a18"}>
                  <div style={{ fontSize: "2.6rem", fontWeight: 300, color: "rgba(45,90,61,0.4)", fontStyle: "italic", marginBottom: 20 }}>{n}</div>
                  <div style={{ color: "#f0ece2", fontSize: "1.08rem", fontWeight: 400, marginBottom: 12, lineHeight: 1.3 }}>{title}</div>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(240,236,226,0.48)", fontSize: "0.84rem", lineHeight: 1.72, fontWeight: 300 }}>{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" style={{ padding: "120px 6%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="two-col" style={{ display: "flex", gap: 80, alignItems: "center" }}>
            <FadeIn style={{ flex: 1 }}>
              <span className="tag" style={{ display: "inline-block", marginBottom: 20 }}>Mission & Vision</span>
              <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)", fontWeight: 300, lineHeight: 1.1, marginBottom: 28 }}>
                Not just replacing<br />spoons.<br />
                <em style={{ fontStyle: "italic", color: "#2d5a3d" }}>Replacing plastic.</em>
              </h2>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.96rem", color: "#4a4a42", lineHeight: 1.74, fontWeight: 300, maxWidth: 480, marginBottom: 40 }}>
                BioFused was founded by students in Eindhoven on a simple conviction: the materials that shape daily life shouldn't outlast civilisation. We're building a smarter materials ecosystem — one product at a time — with the ambition to make petroleum-based single-use plastics obsolete.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  "Reduce plastic dependency at a systemic level",
                  "Develop materials that perform as well as what they replace",
                  "Create a scalable, investable alternative materials platform",
                  "Prove that sustainability and quality are not in conflict",
                ].map(pt => (
                  <div key={pt} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2d5a3d", marginTop: 7, flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.88rem", color: "#4a4a42", lineHeight: 1.6, fontWeight: 300 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.15} style={{ flex: 1 }}>
              <div style={{ background: "#2d5a3d", padding: "52px 44px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", right: -40, bottom: -40, width: 180, height: 180, borderRadius: "50%", border: "1px solid rgba(240,236,226,0.1)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", right: 20, bottom: 20, width: 80, height: 80, borderRadius: "50%", border: "1px solid rgba(240,236,226,0.08)", pointerEvents: "none" }} />
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.65rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(240,236,226,0.5)", marginBottom: 20 }}>Our founding belief</div>
                <blockquote style={{ color: "#f0ece2", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 300, lineHeight: 1.4, fontStyle: "italic", position: "relative", zIndex: 1 }}>
                  "The best material for an object is one that does its job — then disappears."
                </blockquote>
                <div style={{ marginTop: 28, display: "flex", gap: 8, alignItems: "center" }}>
                  <div style={{ width: 28, height: 1, background: "rgba(240,236,226,0.3)" }} />
                  <span style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(240,236,226,0.45)", fontSize: "0.72rem", letterSpacing: "0.1em" }}>BioFused — Founding Principle</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PARTNER STRIP */}
      <div style={{ background: "#EDEAE2", padding: "52px 6%", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 28 }}>
          <div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#8a8a7e", marginBottom: 8 }}>For Partners, Investors &amp; Inquiries</div>
            <div style={{ fontSize: "1.5rem", fontWeight: 300, lineHeight: 1.2 }}>We're building something worth backing.</div>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href={`mailto:${EMAIL}`} style={{ textDecoration: "none" }}>
              <button className="btn-p">Partner with Us</button>
            </a>
            <a href={`mailto:${EMAIL}`} style={{ textDecoration: "none" }}>
              <button className="btn-o">Investor Inquiries</button>
            </a>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <section id="contact" style={{ background: "#1a1a18", padding: "120px 6%", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 60%, rgba(45,90,61,0.16) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <span className="tag tag-light" style={{ display: "inline-block", marginBottom: 24 }}>Get in Touch</span>
            <h2 style={{ color: "#f0ece2", fontSize: "clamp(2.6rem, 5vw, 4.4rem)", fontWeight: 300, lineHeight: 1.08, marginBottom: 24 }}>
              Let's build a<br />
              <em style={{ fontStyle: "italic", color: "rgba(120,190,140,0.85)" }}>plastic-free future.</em>
            </h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(240,236,226,0.55)", fontSize: "0.96rem", lineHeight: 1.72, fontWeight: 300, maxWidth: 500, margin: "0 auto 40px" }}>
              We're a student-founded team from Eindhoven with serious ambitions. Whether you're an investor, potential partner, or simply curious about our materials — we'd love to hear from you.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 44 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4caf70" }} />
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(240,236,226,0.45)" }}>Available for new connections</span>
            </div>
            <a href={`mailto:${EMAIL}`} style={{ textDecoration: "none" }}>
              <button className="btn-p" style={{ padding: "16px 40px", fontSize: "0.8rem", marginBottom: 20 }}>
                Contact Us
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </a>
            <div style={{ marginTop: 16, fontFamily: "'DM Sans',sans-serif", fontSize: "0.78rem", color: "rgba(240,236,226,0.3)", letterSpacing: "0.06em" }}>
              {EMAIL}
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginTop: 24 }}>
              {["Investors", "Partners", "Customers", "Press"].map(t => (
                <span key={t} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(240,236,226,0.35)", padding: "4px 12px", border: "1px solid rgba(240,236,226,0.12)" }}>{t}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111110", padding: "44px 6%", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 28 }}>
          <div>
            {/* Logo in footer — white/inverted version */}
            <div style={{ marginBottom: 14, cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <img src={LOGO_SRC} alt="BioFused" className="logo-footer" />
            </div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.78rem", color: "rgba(240,236,226,0.35)", maxWidth: 240, lineHeight: 1.6, fontWeight: 300 }}>
              Student-founded in Eindhoven. Sustainable material innovation for a post-plastic world. Early-stage · 2025.
            </p>
          </div>
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(240,236,226,0.3)", marginBottom: 14 }}>Navigate</div>
              {NAV.map(l => (
                <div key={l} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.8rem", color: "rgba(240,236,226,0.45)", marginBottom: 8, cursor: "pointer", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#f0ece2"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(240,236,226,0.45)"}
                  onClick={() => go(l)}>{l}</div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(240,236,226,0.3)", marginBottom: 14 }}>Contact</div>
              <a href={`mailto:${EMAIL}`} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.8rem", color: "rgba(240,236,226,0.45)", textDecoration: "none", display: "block", marginBottom: 8, transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#f0ece2"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(240,236,226,0.45)"}>
                {EMAIL}
              </a>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.78rem", color: "rgba(240,236,226,0.28)" }}>Eindhoven, NL</div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: "32px auto 0", paddingTop: 22, borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", color: "rgba(240,236,226,0.22)", letterSpacing: "0.06em" }}>© 2025 BioFused. All rights reserved.</span>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", color: "rgba(240,236,226,0.2)", letterSpacing: "0.06em" }}>Built for a future beyond plastic.</span>
        </div>
      </footer>
    </div>
  );
}
