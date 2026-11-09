import React from 'react';
import MightyLogo from './icons/MightyLogo';

export default function HackathonWall() {
  const col1Cards = (
    <>
      <article className="wc" style={{ background: "#FFFFFF", borderColor: "#FDBA74", minHeight: "300px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
          <span className="wc-tag">
            <span className="wc-av" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                <path d="M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4V7z" />
                <path d="M14 7v10" strokeDasharray="2 2" />
              </svg>
            </span>
            Next hackathon
          </span>
          <span className="wc-dot" aria-hidden="true"></span>
        </div>
        <div>
          <p style={{ margin: "0 0 8px", fontSize: "22px", lineHeight: 1.1, fontWeight: 800, letterSpacing: "-.02em", color: "#2E1065" }}>[EVENT NAME]</p>
          <p style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45, fontWeight: 600, color: "#2E1065" }}>[DATE · TIME] · [COLLEGE]</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "12px", borderTop: "1.5px dashed #FDBA74" }}>
          <span className="mono" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "58px", height: "58px", borderRadius: "12px", border: "1.5px solid #2E1065", fontSize: "11px", fontWeight: 700, color: "#2E1065", flex: "none" }}>
            [QR]
          </span>
          <span style={{ fontSize: "12.5px", lineHeight: 1.4, color: "#57534E" }}>Scan for the full program details.</span>
        </div>
      </article>

      <article className="wc" style={{ background: "#FFFFFF", borderColor: "#F1EFEC", minHeight: "220px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
          <span className="wc-tag">
            <span className="wc-av" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
              </svg>
            </span>
            Venue
          </span>
          <span className="wc-dot" aria-hidden="true"></span>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 0", borderTop: "1px dashed #FDE3CC" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
              <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
            </svg>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", fontWeight: 700, letterSpacing: ".1em", color: "#9A3412", width: "72px" }}>VENUE</span>
            <span style={{ fontSize: "13.5px", lineHeight: 1.45, fontWeight: 600, color: "#2E1065" }}>[VENUE]</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 0", borderTop: "1px dashed #FDE3CC" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
              <circle cx="9" cy="8" r="3.5" />
              <path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.4.6 4 2.8 4 6" />
            </svg>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", fontWeight: 700, letterSpacing: ".1em", color: "#9A3412", width: "72px" }}>COLLEGE</span>
            <span style={{ fontSize: "13.5px", lineHeight: 1.45, fontWeight: 600, color: "#2E1065" }}>[COLLEGE · CITY]</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 0", borderTop: "1px dashed #FDE3CC" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", fontWeight: 700, letterSpacing: ".1em", color: "#9A3412", width: "72px" }}>DATE</span>
            <span style={{ fontSize: "13.5px", lineHeight: 1.45, fontWeight: 600, color: "#2E1065" }}>[DATE]</span>
          </div>
        </div>
      </article>

      <article className="wc" style={{ background: "linear-gradient(170deg,#FFF7ED,#FED7AA)", borderColor: "#FDBA74", minHeight: "200px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
          <span className="wc-tag">
            <span className="wc-av" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5" />
              </svg>
            </span>
            Tracks
          </span>
          <span className="wc-dot" aria-hidden="true"></span>
        </div>
        <div>
          <p style={{ margin: "0 0 12px", fontSize: "22px", lineHeight: 1.1, fontWeight: 800, letterSpacing: "-.02em", color: "#2E1065" }}>Pick a track</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            <span className="chip" style={{ background: "#FFFFFF", color: "#2E1065", border: "1px solid #FDBA74" }}>[TRACK 1]</span>
            <span className="chip" style={{ background: "#FFFFFF", color: "#2E1065", border: "1px solid #FDBA74" }}>[TRACK 2]</span>
            <span className="chip" style={{ background: "#FFFFFF", color: "#2E1065", border: "1px solid #FDBA74" }}>[TRACK 3]</span>
          </div>
        </div>
      </article>

      <article className="wc" style={{ background: "#FFFFFF", borderColor: "#F1EFEC", minHeight: "200px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
          <span className="wc-tag">
            <span className="wc-av" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                <path d="M8 4h8v5a4 4 0 0 1-8 0V4zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8M10 17h4v4h-4z" />
              </svg>
            </span>
            Prizes
          </span>
          <span className="wc-dot" aria-hidden="true"></span>
        </div>
        <div>
          <p style={{ margin: "0 0 6px", fontSize: "22px", lineHeight: 1.1, fontWeight: 800, letterSpacing: "-.02em", color: "#2E1065" }}>[PRIZES]</p>
          <p style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45, color: "#57534E" }}>Plus a first conversation with the Mighty Developers team.</p>
        </div>
      </article>

      <article className="wc" style={{ background: "#FFFFFF", borderColor: "#F1EFEC", minHeight: "150px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
          <span className="wc-tag">
            <span className="wc-av" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </span>
            Questions
          </span>
          <span className="wc-dot" aria-hidden="true"></span>
        </div>
        <div>
          <p style={{ margin: "0 0 6px", fontSize: "17px", fontWeight: 800, color: "#2E1065" }}>Talk to the organisers</p>
          <p className="mono" style={{ margin: 0, fontSize: "12.5px", color: "#57534E" }}>[CONTACT EMAIL]</p>
        </div>
      </article>
    </>
  );

  const col2Cards = (
    <>
      <article className="wc" style={{ background: "linear-gradient(170deg,#FFF1E6,#FFE4CC)", borderColor: "#FDE3CC", minHeight: "230px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
          <span className="wc-tag">
            <span className="wc-av" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </span>
            Registrations
          </span>
          <span className="wc-dot" aria-hidden="true"></span>
        </div>
        <div>
          <p style={{ margin: "0 0 6px", fontSize: "22px", lineHeight: 1.1, fontWeight: 800, letterSpacing: "-.02em", color: "#2E1065" }}>Registrations open</p>
          <p style={{ margin: "0 0 14px", fontSize: "13.5px", lineHeight: 1.45, fontWeight: 600, color: "#2E1065" }}>[OPEN DATE] → [CLOSE DATE]</p>
          <a className="pill pill-o" href="#apply" style={{ minHeight: "38px", fontSize: "13px", padding: "0 14px" }}>Register now</a>
        </div>
      </article>

      <article className="wc" style={{ background: "linear-gradient(170deg,#F0FDFA,#CCFBF1)", borderColor: "#99F6E4", minHeight: "230px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
          <span className="wc-tag">
            <span className="wc-av" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                <circle cx="12" cy="13" r="8" />
                <path d="M12 9v4l2.5 2M9 2h6" />
              </svg>
            </span>
            Schedule
          </span>
          <span className="wc-dot" aria-hidden="true"></span>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 0", borderTop: "1px dashed #FDE3CC" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
              <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
            </svg>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", fontWeight: 700, letterSpacing: ".1em", color: "#9A3412", width: "72px" }}>KICK-OFF</span>
            <span style={{ fontSize: "13.5px", lineHeight: 1.45, fontWeight: 600, color: "#2E1065" }}>[TIME]</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 0", borderTop: "1px dashed #FDE3CC" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
              <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
            </svg>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", fontWeight: 700, letterSpacing: ".1em", color: "#9A3412", width: "72px" }}>BUILD</span>
            <span style={{ fontSize: "13.5px", lineHeight: 1.45, fontWeight: 600, color: "#2E1065" }}>[DURATION]</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 0", borderTop: "1px dashed #FDE3CC" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
              <path d="M8 4h8v5a4 4 0 0 1-8 0V4zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8M10 17h4v4h-4z" />
            </svg>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", fontWeight: 700, letterSpacing: ".1em", color: "#9A3412", width: "72px" }}>DEMOS</span>
            <span style={{ fontSize: "13.5px", lineHeight: 1.45, fontWeight: 600, color: "#2E1065" }}>[TIME]</span>
          </div>
        </div>
      </article>

      <article className="wc" style={{ background: "#FFFFFF", borderColor: "#F1EFEC", minHeight: "170px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
          <span className="wc-tag">
            <span className="wc-av" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                <circle cx="9" cy="8" r="3.5" />
                <path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.4.6 4 2.8 4 6" />
              </svg>
            </span>
            Teams
          </span>
          <span className="wc-dot" aria-hidden="true"></span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "10px" }}>
          <div>
            <p style={{ margin: "0 0 4px", fontSize: "22px", lineHeight: 1.1, fontWeight: 800, letterSpacing: "-.02em", color: "#2E1065" }}>[TEAM SIZE]</p>
            <p style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45, fontWeight: 600, color: "#2E1065" }}>members per team</p>
          </div>
          <span style={{ display: "flex" }}>
            <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#FFE4CC", border: "2px solid #FFFFFF", marginLeft: "-8px" }}></span>
            <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#FED7AA", border: "2px solid #FFFFFF", marginLeft: "-8px" }}></span>
            <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#FDBA74", border: "2px solid #FFFFFF", marginLeft: "-8px" }}></span>
            <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#F97316", border: "2px solid #FFFFFF", marginLeft: "-8px" }}></span>
          </span>
        </div>
      </article>

      <article className="wc" style={{ background: "#FFFFFF", borderColor: "#FDBA74", minHeight: "170px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
          <span className="wc-tag">
            <span className="wc-av" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                <path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />
              </svg>
            </span>
            Sponsored by
          </span>
          <span className="wc-dot" aria-hidden="true"></span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "52px", height: "52px", borderRadius: "16px", background: "#FFF1E6", border: "1.5px solid #FDBA74", flex: "none" }}>
            <MightyLogo width={34} height={26} />
          </span>
          <div>
            <p style={{ margin: "0 0 2px", fontSize: "17px", fontWeight: 800, color: "#2E1065" }}>Mighty Developers</p>
            <p style={{ margin: 0, fontSize: "13px", color: "#57534E" }}>Meet the team at the event.</p>
          </div>
        </div>
      </article>

      <article className="wc" style={{ background: "linear-gradient(170deg,#FFF1E6,#FFE4CC)", borderColor: "#FDE3CC", minHeight: "210px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
          <span className="wc-tag">
            <span className="wc-av" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                <path d="M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4V7z" />
                <path d="M14 7v10" strokeDasharray="2 2" />
              </svg>
            </span>
            Coming up
          </span>
          <span className="wc-dot" aria-hidden="true"></span>
        </div>
        <div>
          <p style={{ margin: "0 0 8px", fontSize: "22px", lineHeight: 1.1, fontWeight: 800, letterSpacing: "-.02em", color: "#2E1065" }}>[EVENT NAME]</p>
          <p style={{ margin: "0 0 14px", fontSize: "13.5px", lineHeight: 1.45, fontWeight: 600, color: "#2E1065" }}>[DATE] · [COLLEGE]</p>
          <span className="chip" style={{ background: "#FFFFFF", color: "#C2410C", border: "1px solid #FDBA74" }}>DETAILS SOON</span>
        </div>
      </article>
    </>
  );

  return (
    <section id="hackathons" aria-labelledby="hack-h" style={{ padding: "60px 0 80px" }}>
      <div className="wrap">
        <div className="hk">
          <div className="hk-l">
            <h2 id="hack-h" className="io-w" data-io style={{ margin: "0 0 18px", fontSize: "clamp(34px,4.2vw,58px)", lineHeight: 1.04, fontWeight: 800, letterSpacing: "-.045em", color: "#2E1065" }}>
              <span className="w" style={{ "--i": 0 }}>Hackathons</span>{" "}
              <span className="w" style={{ "--i": 1 }}>are</span>{" "}
              <span className="w" style={{ "--i": 2 }}>our</span>{" "}
              <span style={{ color: "#EA580C" }}>
                <span className="w" style={{ "--i": 3 }}>front</span>{" "}
                <span className="w" style={{ "--i": 4 }}>door.</span>
              </span>
            </h2>
            <p style={{ margin: "0 0 26px", maxWidth: "440px", fontSize: "16.5px", lineHeight: 1.6, color: "#57534E" }}>
              Sponsoring a hackathon gives us a presence at the event, direct contact with participants, and a first look at who can build, collaborate and finish under pressure. Small colleges first: talented students there often get fewer opportunities.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
              <a className="pill pill-o" href="#apply">
                Register for the hackathon
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a className="pill pill-w" href="#apply">
                Host one at your college
              </a>
            </div>
          </div>

          <div className="hk-r" role="list" aria-label="Upcoming hackathon details">
            <div className="wcol">
              <div className="wtrack">
                {col1Cards}
                <div aria-hidden="true" className="wdup">
                  {col1Cards}
                </div>
              </div>
            </div>

            <div className="wcol">
              <div className="wtrack wtrack-rev">
                {col2Cards}
                <div aria-hidden="true" className="wdup">
                  {col2Cards}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

