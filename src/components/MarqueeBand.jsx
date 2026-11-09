import React from 'react';
import MightyLogo from './icons/MightyLogo';

export default function MarqueeBand() {
  const content = (
    <>
      <span>Start at a hackathon</span>
      <span className="band-chip" aria-hidden="true">
        <MightyLogo width={53} height={40} />
      </span>
      <span>Grow into the team</span>
      <span className="band-chip" aria-hidden="true">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
          <circle cx="9" cy="8" r="3.5" />
          <path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.4.6 4 2.8 4 6" />
        </svg>
      </span>
      <span>Build what's next</span>
      <span className="band-chip" aria-hidden="true">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2E1065" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
          <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M14 4c3-1 6-1 6-1s0 3-1 6l-6 6-5-5 6-6zM9 10H5l2-3h4M14 15v4l3-2v-4" />
        </svg>
      </span>
    </>
  );

  const pills = (
    <div className="band-small">
      <span className="band-pill">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
          <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
        </svg>
        Sponsor
      </span>
      <span className="band-pill">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        Select
      </span>
      <span className="band-pill">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
          <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
        </svg>
        Train
      </span>
      <span className="band-pill">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
          <path d="M4 20V11M10 20V5M16 20v-6M2 20h20" />
        </svg>
        Grow
      </span>
      <span className="band-pill">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
        </svg>
        Hire
      </span>
      <span className="band-pill">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block", flex: "none" }}>
          <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M14 4c3-1 6-1 6-1s0 3-1 6l-6 6-5-5 6-6zM9 10H5l2-3h4M14 15v4l3-2v-4" />
        </svg>
        Incubate
      </span>
    </div>
  );

  return (
    <section aria-label="Start at a hackathon, grow into the team, build what's next" style={{ padding: "24px 0 28px", overflow: "hidden" }}>
      <div className="band band-full band-diag rise-big" data-io>
        <div style={{ padding: "14px 0 8px", overflow: "hidden" }}>
          <div className="mq-sc">
            <div className="mq" style={{ animationDuration: "30s" }}>
              <div className="band-big">{content}</div>
              <div aria-hidden="true" className="band-big">{content}</div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" style={{ padding: "0 0 14px", overflow: "hidden" }}>
          <div className="mq mq-rev" style={{ animationDuration: "26s" }}>
            {pills}
            {pills}
            {pills}
            {pills}
          </div>
        </div>
      </div>
    </section>
  );
}

