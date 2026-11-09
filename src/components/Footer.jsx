import React from 'react';
import MightyLogo from './icons/MightyLogo';

export default function Footer() {
  const riders = [
    { x: 4, d: "0ms", left: "4%", bottom: "62px", tag: "AI", k: 0, ic: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
      </svg>
    )},
    { x: 11, d: "70ms", left: "11%", bottom: "96px", k: 1, ic: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
        <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
      </svg>
    )},
    { x: 18, d: "140ms", left: "18%", bottom: "70px", k: 2, ic: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
        <path d="M8 4h8v5a4 4 0 0 1-8 0V4zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8M10 17h4v4h-4z" />
      </svg>
    )},
    { x: 25, d: "210ms", left: "25%", bottom: "104px", tag: "AI pair", k: 3, ic: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
        <rect x="4" y="8" width="16" height="11" rx="3" />
        <circle cx="9.5" cy="13.5" r="1.3" />
        <circle cx="14.5" cy="13.5" r="1.3" />
        <path d="M12 4v4M10 17h4" />
        <circle cx="12" cy="3.5" r="1" />
      </svg>
    )},
    { x: 32, d: "280ms", left: "32%", bottom: "66px", k: 4, ic: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
        <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z" />
      </svg>
    )},
    { x: 39, d: "350ms", left: "39%", bottom: "92px", k: 5, ic: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 9l3 3-3 3M12 15h5" />
      </svg>
    )},
    { x: 44, d: "420ms", left: "44%", bottom: "70px", tag: "24h build", k: 6, ic: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l2.5 2M9 2h6" />
      </svg>
    )},
    { x: 61, d: "490ms", left: "61%", bottom: "96px", k: 7, isLogo: true, ic: <MightyLogo width={26} height={20} /> },
    { x: 66, d: "560ms", left: "66%", bottom: "64px", k: 8, ic: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
        <path d="M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4V7z" />
        <path d="M14 7v10" strokeDasharray="2 2" />
      </svg>
    )},
    { x: 72, d: "630ms", left: "72%", bottom: "94px", k: 9, ic: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
        <rect x="4" y="5" width="16" height="11" rx="1.5" />
        <path d="M2 19h20" />
      </svg>
    )},
    { x: 78, d: "700ms", left: "78%", bottom: "70px", tag: "AI assist", k: 10, ic: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
        <path d="M4 20L15 9M14 3l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM19 11l.6 1.4L21 13l-1.4.6L19 15l-.6-1.4L17 13l1.4-.6z" />
      </svg>
    )},
    { x: 84, d: "770ms", left: "84%", bottom: "98px", k: 11, ic: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
        <path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9zM16 10h2a3 3 0 0 1 0 6h-2M8 3v3M12 3v3" />
      </svg>
    )},
    { x: 90, d: "840ms", left: "90%", bottom: "66px", tag: "Demo day", k: 12, ic: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
        <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M14 4c3-1 6-1 6-1s0 3-1 6l-6 6-5-5 6-6zM9 10H5l2-3h4M14 15v4l3-2v-4" />
      </svg>
    )},
    { x: 96, d: "910ms", left: "96%", bottom: "92px", k: 13, ic: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="8" r="2.5" />
        <path d="M6 8.5v7M18 10.5c0 4-6 3-11 6" />
      </svg>
    )},
    { x: 14, d: "980ms", left: "14%", bottom: "128px", k: 14, isLogo: true, ic: <MightyLogo width={26} height={20} /> }
  ];

  return (
    <>
      <section aria-label="Find us on Instagram, WhatsApp, Discord and Substack" style={{ padding: "20px 0 16px", overflow: "hidden" }}>
        <div className="band band-full band-diag2" style={{ padding: "14px 0" }}>
          <div style={{ overflow: "hidden" }}>
            <div className="mq" style={{ animationDuration: "24s" }}>
              {[0, 1, 2, 3].map((idx) => (
                <div key={idx} className="band-small">
                  <span className="band-pill" style={{ background: "#2E1065", color: "#FFFFFF", borderColor: "#2E1065" }}>Find us on</span>
                  <span className="band-pill">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.3" cy="6.7" r=".8" />
                    </svg>
                    Instagram
                  </span>
                  <span className="band-pill">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                      <path d="M4 20l1.4-4.2A8 8 0 1 1 8.5 19z" />
                      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2z" />
                    </svg>
                    WhatsApp
                  </span>
                  <span className="band-pill">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                      <path d="M7 7h10a4 4 0 0 1 4 4v3a3 3 0 0 1-5.4 1.8L14.5 14h-5l-1.1 1.8A3 3 0 0 1 3 14v-3a4 4 0 0 1 4-4z" />
                      <path d="M7.5 10v3M6 11.5h3" />
                      <circle cx="15.5" cy="11" r=".8" />
                      <circle cx="17" cy="12.8" r=".8" />
                    </svg>
                    Discord
                  </span>
                  <span className="band-pill">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                      <path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5" />
                    </svg>
                    Substack
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="fwv" data-io style={{ overflow: "hidden" }}>
        <div className="waves" aria-hidden="true">
          <div className="wv wv1">
            <div className="wv-in">
              <svg viewBox="0 0 1440 160" preserveAspectRatio="none" style={{ display: "block", width: "50%", height: "100%", flex: "none" }}>
                <path fill="#FED7AA" d="M0 80 C120 40 240 40 360 80 S600 120 720 80 S960 40 1080 80 S1320 120 1440 80 V160 H0 Z" />
              </svg>
              <svg viewBox="0 0 1440 160" preserveAspectRatio="none" style={{ display: "block", width: "50%", height: "100%", flex: "none" }}>
                <path fill="#FED7AA" d="M0 80 C120 40 240 40 360 80 S600 120 720 80 S960 40 1080 80 S1320 120 1440 80 V160 H0 Z" />
              </svg>
            </div>
          </div>

          <div className="wv wv2">
            <div className="wv-in">
              <svg viewBox="0 0 1440 160" preserveAspectRatio="none" style={{ display: "block", width: "50%", height: "100%", flex: "none" }}>
                <path fill="#FFEDD5" d="M0 80 C120 40 240 40 360 80 S600 120 720 80 S960 40 1080 80 S1320 120 1440 80 V160 H0 Z" />
              </svg>
              <svg viewBox="0 0 1440 160" preserveAspectRatio="none" style={{ display: "block", width: "50%", height: "100%", flex: "none" }}>
                <path fill="#FFEDD5" d="M0 80 C120 40 240 40 360 80 S600 120 720 80 S960 40 1080 80 S1320 120 1440 80 V160 H0 Z" />
              </svg>
            </div>
          </div>

          <div className="riders">
            {riders.map((r, i) => (
              <span
                key={i}
                className={`ride ${r.isLogo ? "ride-logo-s" : ""}`}
                style={{ "--x": r.x, "--d": r.d, left: r.left, bottom: r.bottom }}
              >
                <span className="ride-in" style={{ "--k": r.k }}>
                  {r.tag && <span className="ride-tag">{r.tag}</span>}
                  <span className="ride-c">{r.ic}</span>
                </span>
              </span>
            ))}

            <span className="ride ride-hero" style={{ "--x": 52, "--d": "200ms", left: "52%", bottom: "58px" }}>
              <span className="ride-hero-in">
                <span className="ride-tag" style={{ background: "#2E1065", color: "#FFFFFF" }}>Mighty Developers</span>
                <span className="ride-c ride-c-hero">
                  <MightyLogo width={58} height={44} />
                </span>
                <span className="spark s1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                    <path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />
                  </svg>
                </span>
                <span className="spark s2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                    <path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />
                  </svg>
                </span>
                <span className="spark s3">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                    <path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />
                  </svg>
                </span>
              </span>
            </span>
          </div>

          <div className="wv wv3">
            <div className="wv-in">
              <svg viewBox="0 0 1440 160" preserveAspectRatio="none" style={{ display: "block", width: "50%", height: "100%", flex: "none" }}>
                <path fill="#FFE4CC" d="M0 80 C120 40 240 40 360 80 S600 120 720 80 S960 40 1080 80 S1320 120 1440 80 V160 H0 Z" />
              </svg>
              <svg viewBox="0 0 1440 160" preserveAspectRatio="none" style={{ display: "block", width: "50%", height: "100%", flex: "none" }}>
                <path fill="#FFE4CC" d="M0 80 C120 40 240 40 360 80 S600 120 720 80 S960 40 1080 80 S1320 120 1440 80 V160 H0 Z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="fbody">
          <div className="wrap" style={{ paddingTop: "48px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "28px" }}>
              <div style={{ minWidth: 0, maxWidth: "380px" }}>
                <a href="#top" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#2E1065", fontWeight: 800, fontSize: "18px", minHeight: "44px" }}>
                  <MightyLogo width={32} height={24} />
                  Mighty Developers
                </a>
                <p style={{ margin: "6px 0 0", fontSize: "15px", color: "#57534E" }}>
                  A developer community under Shadowsphere. Built from hackathons, grown into a talent pipeline and a startup incubator.
                </p>
              </div>

              <nav aria-label="Footer" style={{ display: "flex", flexWrap: "wrap", gap: "4px 28px", fontWeight: 600, fontSize: "15px" }}>
                <a className="nav-a" href="#hackathons" style={{ fontSize: "15px" }}>Hackathons</a>
                <a className="nav-a" href="#tasks" style={{ fontSize: "15px" }}>Tasks</a>
                <a className="nav-a" href="#loop" style={{ fontSize: "15px" }}>The loop</a>
                <a className="nav-a" href="#paths" style={{ fontSize: "15px" }}>Paths</a>
                <a className="nav-a" href="#community" style={{ fontSize: "15px" }}>Community</a>
              </nav>
            </div>
          </div>

          <div className="fw" data-io aria-hidden="true">
            <svg viewBox="0 0 1000 74" width="100%" style={{ display: "block", overflow: "visible" }}>
              <text x="2" y="71" textLength="996" lengthAdjust="spacingAndGlyphs" style={{ fontFamily: "Inter,system-ui,sans-serif", fontWeight: 800, fontSize: "97px", letterSpacing: "-3px" }}>
                MIGHTY DEVELOPERS
              </text>
            </svg>
          </div>

          <div className="wrap" style={{ paddingBottom: "24px" }}>
            <div className="mono" style={{ paddingTop: "16px", borderTop: "1px solid rgba(249,115,22,.25)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px 24px", fontSize: "12px", color: "#9A3412" }}>
              <span>© 2026 Mighty Developers</span>
              <span>SPONSOR → SELECT → TRAIN → GROW → HIRE / INCUBATE</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

