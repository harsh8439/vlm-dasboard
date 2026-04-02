import React, { useState } from 'react';
import './Dashboard.css';

// --- Shared SVGs & Icons ---
const VlmShieldLogo = () => (
  <svg viewBox="0 0 100 100" width="36" height="36" fill="none">
    <defs>
      <linearGradient id="gold-grad-desk" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF5C3" /><stop offset="50%" stopColor="#D4AF37" /><stop offset="100%" stopColor="#AA7A00" />
      </linearGradient>
    </defs>
    <path d="M 25 75 C 5 50 15 20 30 15" stroke="url(#gold-grad-desk)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M 20 65 Q 25 55 20 45" fill="url(#gold-grad-desk)"/>
    <path d="M 17 50 Q 22 40 17 30" fill="url(#gold-grad-desk)"/>
    <path d="M 22 35 Q 27 25 22 15" fill="url(#gold-grad-desk)"/>
    <path d="M 75 75 C 95 50 85 20 70 15" stroke="url(#gold-grad-desk)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M 80 65 Q 75 55 80 45" fill="url(#gold-grad-desk)"/>
    <path d="M 83 50 Q 78 40 83 30" fill="url(#gold-grad-desk)"/>
    <path d="M 78 35 Q 73 25 78 15" fill="url(#gold-grad-desk)"/>
    <path d="M 35 15 L 50 25 L 65 15 L 65 50 C 65 70 50 85 50 85 C 50 85 35 70 35 50 Z" fill="#152042" stroke="url(#gold-grad-desk)" strokeWidth="3"/>
    <path d="M 42 45 Q 46 40 50 45 Q 54 40 58 45 L 58 55 Q 54 58 50 55 Q 46 58 42 55 Z" fill="url(#gold-grad-desk)"/>
    <line x1="50" y1="45" x2="50" y2="55" stroke="#152042" strokeWidth="1.5"/>
    <path d="M 50 30 Q 54 35 50 40 Q 46 35 50 30" fill="url(#gold-grad-desk)"/>
  </svg>
);

const BackgroundGlows = () => (
  <div className="desk-bg-glows">
    <div className="desk-orb orb-1"></div>
    <div className="desk-orb orb-2"></div>
    <div className="desk-orb orb-3"></div>
    <div className="float-star s1">✦</div><div className="float-star s2">★</div><div className="float-star s3">✦</div><div className="float-star s4">★</div>
    <svg className="desk-net-lines" viewBox="0 0 1440 900" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1.5">
      <circle cx="1200" cy="300" r="100" strokeDasharray="5 10"/>
      <path d="M -100 400 Q 400 200 1500 500" strokeDasharray="5 10"/>
      <path d="M -100 700 Q 600 900 1500 600" strokeDasharray="5 10"/>
      <circle cx="200" cy="600" r="2" fill="rgba(0, 229, 255, 0.5)" filter="drop-shadow(0 0 5px #00E5FF)"/>
      <circle cx="1100" cy="400" r="3" fill="rgba(154, 75, 255, 0.5)" filter="drop-shadow(0 0 5px #9A4BFF)"/>
    </svg>
  </div>
);

// --- Subcomponents ---

const TopHeader = () => (
  <header className="desk-header glass-panel">
    <div className="header-left">
      <div className="logo-section">
        <VlmShieldLogo />
        <span className="brand-text">VLM Academy</span>
        <div className="role-badge">STUDENT</div>
      </div>
    </div>

    <div className="header-center">
      <div className="search-bar glass-input-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" placeholder="Search live classes, short videos, or AI topics..." />
      </div>
    </div>

    <div className="header-right">
      <div className="contact-info">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 2.6 3.41l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <div className="ci-texts">
          <span className="ci-lbl">Teacher Support</span>
          <span className="ci-num">+91-8000-VLM-EDU</span>
        </div>
      </div>
      
      <div className="gift-icon" title="Refer & Earn">
        <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
      </div>

      <button className="btn-outline">Log in</button>
      <button className="btn-solid-cyan">Join for free</button>
    </div>
  </header>
);

const MainNavigation = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs =['Overview', 'Live Classes', 'AI Doubt Solver', 'Video Reels', 'Leaderboard', 'Parent Portal', 'Pricing Plans'];

  return (
    <nav className="main-nav">
      {tabs.map(tab => (
        <div 
          key={tab} 
          className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
    </nav>
  );
};

const FeatureCard = ({ icon, title, desc, highlightColor }) => (
  <div className={`feature-card glass-panel hover-glow-${highlightColor}`}>
     <div className="fc-header">
       <div className={`fc-icon text-${highlightColor}`}>{icon}</div>
       <h3 className="fc-title">{title}</h3>
       <svg className="fc-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
     </div>
     <p className="fc-desc">{desc}</p>
  </div>
);

// --- MAIN DASHBOARD SCREEN ---

export default function DesktopDashboard() {
  return (
    <div className="desktop-layout splash-bg">
      <BackgroundGlows />
      <TopHeader />

      <main className="main-container">
        <MainNavigation />

        {/* Hero Banner tailored to VLM Academy */}
        <section className="hero-banner glass-panel purple-glow-border mt-30">
           <div className="hb-left">
              <h1 className="hb-title">Unlock Limitless Learning with VLM Academy!</h1>
              <div className="hb-pricing mt-20">
                 <div className="hb-price-line">AI + Live Classes at just <span className="text-cyan">₹999/mo</span></div>
                 <div className="hb-price-line">Premium Family Plan at <span className="text-gold">₹4,999/mo</span></div>
              </div>
              <div className="hb-actions mt-30">
                 <button className="btn-solid-purple">Start 3-Day Free Trial</button>
                 <div className="hb-code-box">
                    <span className="code-lbl">Use code</span>
                    <span className="code-val">VLM2026</span>
                 </div>
                 <div className="hb-validity">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    Offer valid till <strong className="text-purple">Midnight</strong>
                 </div>
              </div>
              <div className="hb-terms mt-20">*Applies to all new student & parent registrations.</div>
           </div>
           
           <div className="hb-right">
              <div className="hero-graphic">
                 <div className="hg-text">AI</div>
                 <div className="hg-sub">TUTOR</div>
                 <svg className="hg-rings" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#00E5FF" strokeWidth="2" strokeDasharray="10 15" className="spin-slow" />
                    <circle cx="100" cy="100" r="60" fill="none" stroke="#9A4BFF" strokeWidth="4" strokeDasharray="20 40" className="spin-fast-reverse" />
                 </svg>
              </div>
           </div>
        </section>

        {/* Content Action Area */}
        <section className="action-area mt-40">
           <div className="aa-left">
              <h2 className="aa-title">Master Any Subject with VLM</h2>
              <p className="aa-subtitle">Over <span className="text-cyan font-bold">500,000</span> students trust our AI & Expert Faculty.</p>
           </div>
           <div className="aa-right">
              <div className="aa-buttons-row">
                 <button className="btn-outline-cyan">Try AI Doubt Solver</button>
                 <button className="btn-solid-cyan">View Subscription Plans</button>
              </div>
              <div className="aa-offer-link mt-10 text-gold">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8l4 4-4 4M8 12h8"/></svg>
                 <span>Explore Parent Controls & Analytics</span>
              </div>
           </div>
        </section>

        {/* Features Grid - Populated with VLM specific features */}
        <section className="features-grid mt-40 mb-40">
           <FeatureCard 
             highlightColor="cyan"
             icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>}
             title="24/7 AI Tutor"
             desc="Instant doubt resolution. Snap a photo, send audio, or chat directly with our advanced AI."
           />
           <FeatureCard 
             highlightColor="blue"
             icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>}
             title="Live Classes & Whiteboard"
             desc="Real-time interactive sessions with top faculty, complete with live chat and collaborative whiteboards."
           />
           <FeatureCard 
             highlightColor="purple"
             icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>}
             title="Short Video Reels"
             desc="Master complex topics quickly with 90-second educational reels created by experts."
           />
           <FeatureCard 
             highlightColor="gold"
             icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
             title="Parent Dashboard"
             desc="Track your child's progress, monitor study hours, and set app usage limits in real-time."
           />
           <FeatureCard 
             highlightColor="orange"
             icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>}
             title="Performance Analytics"
             desc="Detailed insights into MCQ accuracy, weak subjects, and class attendance."
           />
           <FeatureCard 
             highlightColor="green"
             icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>}
             title="Gamified Learning"
             desc="Earn points, climb the global leaderboard, and spin the wheel for exclusive VLM rewards."
           />
        </section>

      </main>

      {/* Floating Action Buttons */}
      <div className="fab-container">
         <div className="fab-label-btn glass-panel border-cyan">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>
            <span>Ask AI Tutor</span>
         </div>
         <button className="fab-circle-btn glass-panel border-cyan">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M9 9h6"/><path d="M9 13h4"/></svg>
         </button>
      </div>

    </div>
  );
}