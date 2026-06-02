import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [ripplePrimary, setRipplePrimary] = useState(null);
  const [rippleSecondary, setRippleSecondary] = useState(null);
  const [visible, setVisible] = useState(false);
  const heroRef = useRef(null);
  const [data, setData] = useState({
    title: "Powering Innovation with Custom Software Solutions",
    subtitle: "RiDeal Digital Seva delivers enterprise-grade IT services, responsive websites, high-performance mobile apps, and scalable ERP systems.",
    content: {
      ctaText: "Get In Touch",
      bgImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600"
    }
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/sections/home-hero")
      .then(res => res.json())
      .then(resData => {
        if (resData && resData.title) {
          setData(resData);
        }
      })
      .catch(err => console.warn("CMS Hero load failed, static fallback active:", err));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fireRipple = (e, setter) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setter({ x, y, id: Date.now() });
    setTimeout(() => setter(null), 700);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&display=swap');

        /* ─── KEYFRAMES ─── */
        @keyframes fadeSlideUp {
          from { opacity:0; transform:translateY(40px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity:0; transform:translateX(50px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes floatUpDown {
          0%,100% { transform:translateY(0); }
          50%      { transform:translateY(-12px); }
        }
        @keyframes blobDrift {
          0%,100% { transform:scale(1) translate(0,0) rotate(0deg); }
          33%      { transform:scale(1.1) translate(25px,-20px) rotate(5deg); }
          66%      { transform:scale(0.92) translate(-18px,22px) rotate(-4deg); }
        }
        @keyframes badgeGlow {
          0%,100% { box-shadow:0 0 0 0 rgba(8,56,120,0.4); }
          50%      { box-shadow:0 0 0 10px rgba(8,56,120,0); }
        }
        @keyframes rippleOut {
          from { transform:scale(0); opacity:0.5; }
          to   { transform:scale(5); opacity:0; }
        }
        @keyframes underlineSlide {
          from { transform:scaleX(0); }
          to   { transform:scaleX(1); }
        }
        @keyframes cardEntrance {
          from { opacity:0; transform:scale(0.85) translateY(20px); }
          to   { opacity:1; transform:scale(1) translateY(0); }
        }
        @keyframes shimmerMove {
          0%   { background-position:-600px 0; }
          100% { background-position:600px 0; }
        }
        @keyframes dotBlink {
          0%,100% { opacity:1; }
          50%      { opacity:0.3; }
        }
        @keyframes borderRotate {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
        }

        /* ─── HERO WRAPPER ─── */
        .hero {
          width:100%;
          min-height:90vh;
          background:linear-gradient(135deg,#f0f4ff 0%,#f5f7fb 50%,#eef9f4 100%);
          display:flex;
          align-items:center;
          padding:40px 6% 60px;
          overflow:hidden;
          position:relative;
          font-family:'Barlow',sans-serif;
        }

        /* ─── BLOBS ─── */
        .h-blob {
          position:absolute;
          border-radius:50%;
          filter:blur(90px);
          pointer-events:none;
          animation:blobDrift 10s ease-in-out infinite;
        }
        .h-blob-1 {
          width:480px; height:480px;
          background:radial-gradient(circle,rgba(8,56,120,0.22),rgba(8,56,120,0.08));
          top:-120px; left:-140px;
          animation-delay:0s;
        }
        .h-blob-2 {
          width:360px; height:360px;
          background:radial-gradient(circle,rgba(34,211,238,0.18),rgba(8,56,120,0.08));
          bottom:-80px; right:5%;
          animation-delay:3.5s;
        }
        .h-blob-3 {
          width:220px; height:220px;
          background:radial-gradient(circle,rgba(52,211,153,0.15),transparent);
          top:45%; left:42%;
          animation-delay:7s;
        }

        /* ─── CONTAINER ─── */
        .hero-container {
          width:100%;
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:60px;
          position:relative;
          z-index:1;
        }

        /* ─── LEFT ─── */
        .hero-left {
          width:50%;
          opacity:0;
          transform:translateY(40px);
          transition:opacity 0.8s ease, transform 0.8s ease;
        }
        .hero-left.visible {
          opacity:1;
          transform:translateY(0);
        }

        /* BADGE */
        .h-badge {
          display:inline-flex;
          align-items:center;
          gap:9px;
          background:#dce8f7;
          color:#083878;
          padding:10px 22px;
          border-radius:40px;
          font-size:15px;
          font-weight:700;
          margin-bottom:24px;
          cursor:default;
          animation:badgeGlow 2.8s ease-in-out infinite;
          transition:background 0.3s, color 0.3s, transform 0.3s;
          border:1.5px solid rgba(8,56,120,0.2);
        }
        .h-badge:hover {
          background:#083878;
          color:#fff;
          transform:scale(1.06) translateY(-2px);
          border-color:transparent;
        }
        .h-badge-dot {
          width:9px; height:9px;
          background:#083878;
          transition:background 0.3s;
          flex-shrink:0;
        }
        .h-badge:hover .h-badge-dot { background:#fff; }

        /* HEADING */
        .hero-heading {
          font-size:62px;
          line-height:1.15;
          color:#111827;
          font-weight:800;
          margin-bottom:24px;
          transition:opacity 0.8s 0.15s ease, transform 0.8s 0.15s ease;
        }
        .h-highlight {
          color:transparent;
          -webkit-text-stroke: 2px #083878;
          text-stroke: 2px #083878;
          position:relative;
          display:inline-block;
        }
        .shiny-text {
          background: linear-gradient(
            120deg,
            #083878 0%,
            #083878 30%,
            #1a6abf 42%,
            #3b82f6 48%,
            #60a5fa 50%,
            #3b82f6 52%,
            #1a6abf 58%,
            #083878 70%,
            #083878 100%
          ) !important;
          background-size: 200% auto !important;
          background-repeat: repeat !important;
          color: transparent !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          animation: shineSweep 10s linear infinite !important;
          display: inline !important;
          font-weight: 800 !important;
        }
        @keyframes shineSweep {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .h-highlight::after {
          content:'';
          position:absolute;
          bottom:-5px; left:0;
          width:100%; height:3px;
          background:linear-gradient(90deg,#083878,#1a6abf,#083878);
          border-radius:4px;
          transform:scaleX(0);
          transform-origin:left;
          transition:transform 0.7s ease;
        }
        .hero-left.visible .h-highlight::after {
          animation:underlineSlide 0.7s 0.9s ease forwards;
        }

        /* DESC */
        .hero-desc {
          font-size:18px;
          line-height:1.9;
          color:#6b7280;
          margin-bottom:36px;
          max-width:680px;
        }

        /* ─── BUTTONS ─── */
        .hero-buttons {
          display:flex;
          gap:18px;
          flex-wrap:wrap;
        }

        /* Primary */
        .h-primary-btn {
          position:relative;
          overflow:hidden;
          background:linear-gradient(135deg,#083878 0%,#1a6abf 100%);
          color:#fff;
          border:none;
          padding:16px 32px;
          border-radius:12px;
          cursor:pointer;
          font-size:16px;
          font-weight:700;
          font-family:'Barlow',sans-serif;
          box-shadow:0 6px 22px rgba(8,56,120,0.38);
          transition:transform 0.3s ease, box-shadow 0.3s ease;
          display:flex;
          align-items:center;
          gap:9px;
        }
        .h-primary-btn:hover {
          transform:translateY(-5px);
          box-shadow:0 16px 40px rgba(8,56,120,0.55);
        }
        .h-primary-btn:active { transform:translateY(-2px); }
        .h-primary-btn .btn-arrow {
          display:inline-block;
          transition:transform 0.3s ease;
        }
        .h-primary-btn:hover .btn-arrow { transform:translateX(5px); }

        /* Secondary */
        .h-secondary-btn {
          position:relative;
          overflow:hidden;
          background:transparent;
          color:#083878;
          border:2px solid #083878;
          padding:16px 32px;
          border-radius:12px;
          cursor:pointer;
          font-size:16px;
          font-weight:700;
          font-family:'Barlow',sans-serif;
          transition:transform 0.3s ease, box-shadow 0.3s ease,
                      background 0.3s ease, color 0.3s ease;
          display:flex;
          align-items:center;
          gap:9px;
        }
        .h-secondary-btn:hover {
          background:#083878;
          color:#fff;
          transform:translateY(-5px);
          box-shadow:0 16px 40px rgba(8,56,120,0.4);
        }
        .h-secondary-btn:active { transform:translateY(-2px); }
        .h-secondary-btn .btn-arrow {
          display:inline-block;
          transition:transform 0.3s ease;
        }
        .h-secondary-btn:hover .btn-arrow { transform:translateX(5px); }

        /* Ripple */
        .h-ripple {
          position:absolute;
          width:14px; height:14px;
          border-radius:50%;
          background:rgba(255,255,255,0.6);
          pointer-events:none;
          transform:scale(0);
          animation:rippleOut 0.7s linear forwards;
          margin-left:-7px;
          margin-top:-7px;
        }

        /* ─── RIGHT ─── */
        .hero-right {
          width:45%;
          display:flex;
          justify-content:center;
          opacity:0;
          transform:translateX(50px);
          transition:opacity 0.9s 0.25s ease, transform 0.9s 0.25s ease;
        }
        .hero-right.visible {
          opacity:1;
          transform:translateX(0);
        }

        /* HERO CARD */
        .hero-card {
          width:100%;
          position:relative;
          background:linear-gradient(145deg,#1f1147,#2d1a6e);
          border-radius:28px;
          padding:22px;
          box-shadow:0 28px 70px rgba(0,0,0,0.28);
          animation:floatUpDown 5.5s ease-in-out infinite;
          transition:box-shadow 0.4s ease, transform 0.4s ease;
        }
        .hero-card:hover {
          box-shadow:0 40px 90px rgba(8,56,120,0.35);
          transform:translateY(-6px) scale(1.015);
          animation-play-state:paused;
        }

        /* Image */
        .hero-image {
          width:100%;
          height:400px;
          object-fit:cover;
          border-radius:20px;
          display:block;
          transition:transform 0.5s ease;
        }
        .hero-card:hover .hero-image { transform:scale(1.04); }

        /* Shimmer overlay on image */
        .hero-image-wrap {
          position:relative;
          border-radius:20px;
          overflow:hidden;
        }
        .hero-image-wrap::after {
          content:'';
          position:absolute;
          inset:0;
          background:linear-gradient(
            105deg,
            transparent 30%,
            rgba(255,255,255,0.12) 50%,
            transparent 70%
          );
          background-size:600px 100%;
          animation:shimmerMove 3.5s linear infinite;
          pointer-events:none;
          border-radius:20px;
        }

        /* ─── FLOATING CARDS ─── */
        .floating-card {
          position:absolute;
          background:#fff;
          padding:14px 18px;
          border-radius:18px;
          display:flex;
          align-items:center;
          gap:14px;
          box-shadow:0 14px 36px rgba(0,0,0,0.14);
          cursor:default;
          border:1.5px solid transparent;
          transition:
            transform 0.4s cubic-bezier(0.34,1.56,0.64,1),
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }
        .floating-card:hover {
          transform:translateY(-10px) scale(1.07) !important;
          box-shadow:0 28px 56px rgba(8,56,120,0.25);
          border-color:rgba(8,56,120,0.35);
          animation-play-state:paused;
        }

        .growth-card {
          top:28px; left:-35px;
          animation:floatUpDown 4.2s 0.4s ease-in-out infinite;
        }
        .client-card {
          bottom:28px; right:-35px;
          animation:floatUpDown 4.8s 1.1s ease-in-out infinite;
        }

        /* Icon box */
        .icon-box {
          width:52px; height:52px;
          background:#dce8f7;
          border-radius:14px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:24px;
          flex-shrink:0;
          transition:background 0.35s ease, transform 0.35s ease;
        }
        .floating-card:hover .icon-box {
          background:linear-gradient(135deg,#083878,#1a6abf);
          transform:rotate(-10deg) scale(1.12);
        }

        .fc-label {
          font-size:13px;
          color:#9ca3af;
          font-weight:600;
          margin-bottom:3px;
          letter-spacing:0.3px;
        }
        .fc-value {
          font-size:26px;
          color:#111827;
          font-weight:800;
          line-height:1;
          transition:color 0.3s ease;
        }
        .floating-card:hover .fc-value { color:#083878; }

        .fc-trend {
          display:inline-flex;
          align-items:center;
          gap:3px;
          font-size:11px;
          font-weight:700;
          color:#16a34a;
          background:#dcfce7;
          padding:3px 8px;
          border-radius:20px;
          margin-top:5px;
        }

        /* ─── RESPONSIVE ─── */
        @media(max-width:1100px){
          .hero-container { flex-direction:column; }
          .hero-left,.hero-right { width:100%; }
          .hero-heading { font-size:48px; }
          .hero-right { margin-top:20px; }
        }
        @media(max-width:768px){
          .hero { padding:30px 20px 60px; min-height:auto; }
          .hero-heading { font-size:32px; }
          .hero-desc { font-size:15px; }
          .hero-buttons { flex-direction:column; width:100%; }
          .h-primary-btn,.h-secondary-btn { width:100%; justify-content:center; }
          .hero-image { height:240px; }
          .floating-card { transform:scale(0.8) !important; }
          .growth-card { left:0; top:10px; }
          .client-card { right:0; bottom:10px; }
          .h-blob-1 { width:200px; height:200px; }
          .h-blob-2 { width:160px; height:160px; }
        }
        @media(max-width:480px){
          .hero { padding:24px 16px 48px; }
          .hero-heading { font-size:26px; }
          .h-badge { font-size:13px; padding:8px 16px; }
          .floating-card { display:none; }
        }
      `}</style>

      <section className="hero">

        {/* Blobs */}
        <div className="h-blob h-blob-1" />
        <div className="h-blob h-blob-2" />
        <div className="h-blob h-blob-3" />

        <div className="hero-container" ref={heroRef}>

          {/* ── LEFT ── */}
          <div className={`hero-left ${visible ? "visible" : ""}`}>

            <div className="h-badge">
              <span className="h-badge-dot" />
              ✔ Trusted Digital IT Solutions Partner
            </div>

            <h1 className="hero-heading">
              {data.title.includes("Custom Software Solutions") ? (
                <>
                  <span className="shiny-text">
                    {data.title.replace("Custom Software Solutions", "")}
                  </span>
                  <br />
                  <span className="h-highlight">Custom Software Solutions</span>
                </>
              ) : (
                <span className="shiny-text">{data.title}</span>
              )}
            </h1>

            <p className="hero-desc">
              {data.subtitle}
            </p>

            <div className="hero-buttons">

              <button
                className="h-primary-btn"
                onClick={(e) => { fireRipple(e, setRipplePrimary); navigate("/contact"); }}
              >
                {ripplePrimary && (
                  <span
                    key={ripplePrimary.id}
                    className="h-ripple"
                    style={{ left: ripplePrimary.x, top: ripplePrimary.y }}
                  />
                )}
                🚀 {data.content?.ctaText || "Get Free Consultation"}
                <span className="btn-arrow">→</span>
              </button>

              <button
                className="h-secondary-btn"
                onClick={(e) => fireRipple(e, setRippleSecondary)}
              >
                {rippleSecondary && (
                  <span
                    key={rippleSecondary.id}
                    className="h-ripple"
                    style={{ left: rippleSecondary.x, top: rippleSecondary.y }}
                  />
                )}
                Explore Services
                <span className="btn-arrow">→</span>
              </button>

            </div>

          </div>

          {/* ── RIGHT ── */}
          <div className={`hero-right ${visible ? "visible" : ""}`}>

            <div className="hero-card">

              <div className="hero-image-wrap">
                <img
                  src={data.content?.bgImage || "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"}
                  alt="Rideal Digital Seva"
                  className="hero-image"
                />
              </div>

              {/* Business Growth */}
              <div className="floating-card growth-card">
                <div className="icon-box">📈</div>
                <div>
                  <p className="fc-label">Business Growth</p>
                  <h3 className="fc-value">+85%</h3>
                  <span className="fc-trend">↑ This Year</span>
                </div>
              </div>

              {/* Happy Clients */}
              <div className="floating-card client-card">
                <div className="icon-box">👥</div>
                <div>
                  <p className="fc-label">Happy Clients</p>
                  <h3 className="fc-value">5K+</h3>
                  <span className="fc-trend">↑ Growing</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default HeroSection;
