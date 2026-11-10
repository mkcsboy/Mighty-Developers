import React from 'react';
import MightyLogo from './icons/MightyLogo';
import { useDeckScroll } from '../hooks/useDeckScroll';

export default function HeroSection() {
  useDeckScroll();

  return (
    <section aria-label="Stages of Mighty Developers" className="hero-x" style={{ padding: "10px 0 48px" }}>
      <div className="hx-bg" aria-hidden="true">
        <span className="hx-b1"></span>
        <span className="hx-b2"></span>
        <span className="hx-b3"></span>
      </div>

      <div className="wrap">
        {/* Hero Deck */}
        <div className="deck" aria-hidden="true">
          <div className="deck-in">
            <div className="dkc" style={{ "--k": 0, "--x": "-396px", "--y": "81px", "--r": "-21deg", background: "#FFE4CC" }}>
              <div className="dkc-art pt1">
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "14px", background: "#FFFFFF" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                    <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
                  </svg>
                </span>
              </div>
              <span className="mono" style={{ fontSize: "9.5px", fontWeight: 700, letterSpacing: ".12em", color: "#C2410C" }}>01 · SPONSOR</span>
              <span style={{ fontSize: "17px", lineHeight: 1.1, fontWeight: 800, letterSpacing: "-.02em", color: "#2E1065" }}>Hackathons</span>
            </div>

            <div className="dkc" style={{ "--k": 1, "--x": "-264px", "--y": "36px", "--r": "-14deg", background: "#FFFFFF" }}>
              <div className="dkc-art pt0">
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "14px", background: "#FFFFFF" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </span>
              </div>
              <span className="mono" style={{ fontSize: "9.5px", fontWeight: 700, letterSpacing: ".12em", color: "#C2410C" }}>02 · SELECT</span>
              <span style={{ fontSize: "17px", lineHeight: 1.1, fontWeight: 800, letterSpacing: "-.02em", color: "#2E1065" }}>Spot promise</span>
            </div>

            <div className="dkc" style={{ "--k": 2, "--x": "-132px", "--y": "9px", "--r": "-7deg", background: "#F0FDFA" }}>
              <div className="dkc-art pt2">
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "14px", background: "#FFFFFF" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                    <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
                  </svg>
                </span>
              </div>
              <span className="mono" style={{ fontSize: "9.5px", fontWeight: 700, letterSpacing: ".12em", color: "#C2410C" }}>03 · TRAIN</span>
              <span style={{ fontSize: "17px", lineHeight: 1.1, fontWeight: 800, letterSpacing: "-.02em", color: "#2E1065" }}>Small tasks</span>
            </div>

            <div className="dkc" style={{ "--k": 3, "--x": "132px", "--y": "9px", "--r": "7deg", background: "#FFFFFF" }}>
              <div className="dkc-art pt3">
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "14px", background: "#FFFFFF" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                    <path d="M4 20V11M10 20V5M16 20v-6M2 20h20" />
                  </svg>
                </span>
              </div>
              <span className="mono" style={{ fontSize: "9.5px", fontWeight: 700, letterSpacing: ".12em", color: "#C2410C" }}>04 · GROW</span>
              <span style={{ fontSize: "17px", lineHeight: 1.1, fontWeight: 800, letterSpacing: "-.02em", color: "#2E1065" }}>Learn by doing</span>
            </div>

            <div className="dkc" style={{ "--k": 4, "--x": "264px", "--y": "36px", "--r": "14deg", background: "#FFF1E6" }}>
              <div className="dkc-art pt4">
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "14px", background: "#FFFFFF" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                    <rect x="3" y="7" width="18" height="13" rx="2" />
                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
                  </svg>
                </span>
              </div>
              <span className="mono" style={{ fontSize: "9.5px", fontWeight: 700, letterSpacing: ".12em", color: "#C2410C" }}>05 · HIRE</span>
              <span style={{ fontSize: "17px", lineHeight: 1.1, fontWeight: 800, letterSpacing: "-.02em", color: "#2E1065" }}>Join the team</span>
            </div>

            <div className="dkc" style={{ "--k": 5, "--x": "396px", "--y": "81px", "--r": "21deg", background: "#FFFFFF" }}>
              <div className="dkc-art pt5">
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "14px", background: "#FFFFFF" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
                    <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M14 4c3-1 6-1 6-1s0 3-1 6l-6 6-5-5 6-6zM9 10H5l2-3h4M14 15v4l3-2v-4" />
                  </svg>
                </span>
              </div>
              <span className="mono" style={{ fontSize: "9.5px", fontWeight: 700, letterSpacing: ".12em", color: "#C2410C" }}>06 · INCUBATE</span>
              <span style={{ fontSize: "17px", lineHeight: 1.1, fontWeight: 800, letterSpacing: "-.02em", color: "#2E1065" }}>Build a startup</span>
            </div>

            <div className="dkc" style={{ "--k": 3, "--x": "0px", "--y": "-6px", "--r": "0deg", background: "linear-gradient(160deg,#FFF1E6,#FED7AA)", borderColor: "#FDBA74", alignItems: "center", justifyContent: "center", gap: "14px" }}>
              <MightyLogo width={69} height={52} />
              <span className="mono" style={{ fontSize: "9.5px", fontWeight: 700, letterSpacing: ".12em", color: "#9A3412", textAlign: "center" }}>
                MIGHTY<br />DEVELOPERS
              </span>
            </div>

            <span className="deck-tag" style={{ left: "calc(50% - 330px)", top: "6px", "--d": "3.25s", background: "#FFFFFF", color: "#2E1065", border: "1.5px solid #FDBA74" }}>@students</span>
            <span className="deck-tag" style={{ left: "calc(50% + 150px)", top: "0px", "--d": "3.4s", background: "#F97316", color: "#2E1065", border: 0 }}>@mentors</span>
            <span className="deck-tag" style={{ left: "calc(50% + 380px)", top: "70px", "--d": "3.55s", background: "#FFFFFF", color: "#2E1065", border: "1.5px solid #FDBA74" }}>@founders</span>
          </div>

          <span className="deck-hint mono">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M6 13l6 6 6-6" />
            </svg>
            SCROLL TO OPEN THE DECK
          </span>
        </div>
      </div>
    </section>
  );
}
