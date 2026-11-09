import React from 'react';
import MightyLogo from '../components/icons/MightyLogo';

export default function Connect() {
  return (
    <div style={{ fontFamily: "Inter,system-ui,sans-serif", color: "#44403C", minHeight: "100vh", background: "linear-gradient(135deg,#FFF6EE 0%,#FFE9D6 55%,#FFDDBF 100%)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "28px 24px 72px", boxSizing: "border-box" }}>
        <a href="/" aria-label="Mighty Developers" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "56px", height: "56px", borderRadius: "18px", background: "#FFFFFF", border: "1px solid #E7E5E4" }}>
          <MightyLogo width={37} height={28} />
        </a>

        <p style={{ margin: "56px 0 14px", font: "700 12px/1 'JetBrains Mono',monospace", letterSpacing: ".16em", color: "#C2410C" }}>
          COMMUNITY CONNECT
        </p>

        <h1 style={{ margin: "0 0 16px", fontSize: "clamp(38px,5vw,68px)", lineHeight: 1.02, fontWeight: 800, letterSpacing: "-.045em", color: "#2E1065" }}>
          We're on the platforms<br />
          <span style={{ color: "#EA580C" }}>you already use.</span>
        </h1>

        <p style={{ margin: "0 0 44px", maxWidth: "560px", fontSize: "17px", lineHeight: 1.6, color: "#57534E" }}>
          Follow Mighty Developers for hackathon announcements, tasks, mentoring and community stories. Pick the one that suits you, or join all four.
        </p>

        <div className="pc-grid">
          <article className="pc" style={{ background: "linear-gradient(160deg,#FFF1E6,#FFE4CC)", "--i": 0 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span className="pc-ic">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.3" cy="6.7" r=".8" />
                </svg>
              </span>
              <span className="chip">01</span>
            </div>
            <h2 style={{ margin: "22px 0 8px", fontSize: "30px", lineHeight: 1, fontWeight: 800, letterSpacing: "-.03em", color: "#2E1065" }}>Instagram</h2>
            <p style={{ margin: "0 0 28px", fontSize: "15px", lineHeight: 1.5, color: "#57534E" }}>Event photos, reels and announcements.</p>
            <a className="pc-btn" href="https://www.instagram.com/mightydevelopers" target="_blank" rel="noreferrer noopener">
              Follow
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </article>

          <article className="pc" style={{ background: "#FFFFFF", "--i": 1 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span className="pc-ic">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                  <path d="M4 20l1.4-4.2A8 8 0 1 1 8.5 19z" />
                  <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2z" />
                </svg>
              </span>
              <span className="chip">02</span>
            </div>
            <h2 style={{ margin: "22px 0 8px", fontSize: "30px", lineHeight: 1, fontWeight: 800, letterSpacing: "-.03em", color: "#2E1065" }}>WhatsApp</h2>
            <p style={{ margin: "0 0 28px", fontSize: "15px", lineHeight: 1.5, color: "#57534E" }}>Quick updates, reminders and registration alerts.</p>
            <a className="pc-btn" href="https://chat.whatsapp.com/mightydevelopers" target="_blank" rel="noreferrer noopener">
              Join the channel
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </article>

          <article className="pc" style={{ background: "linear-gradient(160deg,#F0FDFA,#CCFBF1)", "--i": 2 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span className="pc-ic">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                  <path d="M7 7h10a4 4 0 0 1 4 4v3a3 3 0 0 1-5.4 1.8L14.5 14h-5l-1.1 1.8A3 3 0 0 1 3 14v-3a4 4 0 0 1 4-4z" />
                  <path d="M7.5 10v3M6 11.5h3" />
                  <circle cx="15.5" cy="11" r=".8" />
                  <circle cx="17" cy="12.8" r=".8" />
                </svg>
              </span>
              <span className="chip">03</span>
            </div>
            <h2 style={{ margin: "22px 0 8px", fontSize: "30px", lineHeight: 1, fontWeight: 800, letterSpacing: "-.03em", color: "#2E1065" }}>Discord</h2>
            <p style={{ margin: "0 0 28px", fontSize: "15px", lineHeight: 1.5, color: "#57534E" }}>Talk to mentors, find teammates and get help on tasks.</p>
            <a className="pc-btn" href="https://discord.gg/mightydevelopers" target="_blank" rel="noreferrer noopener">
              Join the server
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </article>

          <article className="pc" style={{ background: "#FFFFFF", "--i": 3 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span className="pc-ic">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                  <path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5" />
                </svg>
              </span>
              <span className="chip">04</span>
            </div>
            <h2 style={{ margin: "22px 0 8px", fontSize: "30px", lineHeight: 1, fontWeight: 800, letterSpacing: "-.03em", color: "#2E1065" }}>Substack</h2>
            <p style={{ margin: "0 0 28px", fontSize: "15px", lineHeight: 1.5, color: "#57534E" }}>Long-form updates: hackathon recaps and community stories.</p>
            <a className="pc-btn" href="https://mightydevelopers.substack.com/" target="_blank" rel="noreferrer noopener">
              Subscribe
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </article>
        </div>

        <p style={{ margin: "40px 0 0", font: "700 12px/1.6 'JetBrains Mono',monospace", color: "#78716C" }}>
          Questions? hello@mightydevelopers.dev · A developer community under Shadowsphere
        </p>
      </div>
    </div>
  );
}

