import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const BARS = [
  { label: "Web & App Development",   pct: 95 },
  { label: "Digital Marketing & SEO", pct: 90 },
  { label: "ERP & Business Automation", pct: 88 },
  { label: "AI-Powered IT Solutions",  pct: 92 },
  { label: "Branding & UI/UX Design",  pct: 85 },
];

const BULLETS = [
  "Certified IT professionals with 10+ years of industry experience",
  "End-to-end solutions from strategy to deployment & support",
  "Transparent pricing with measurable ROI for every project",
  "24 / 7 dedicated support and proactive monitoring",
];

const WhyChooseUs = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);
  const [data, setData] = useState({
    title: "Powering Businesses With Smart Digital Solutions",
    subtitle: "RiDeal Digital Seva combines cutting-edge technology with deep domain expertise to deliver IT services, ERP systems, digital marketing, and AI-driven automation — helping businesses scale faster.",
    content: {
      bullets: BULLETS,
      bars: BARS,
      happyClients: "5,000+",
      yearsExcellence: "10+"
    }
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/sections/home-choose-us")
      .then(res => res.json())
      .then(resData => {
        if (resData && resData.content) {
          setData(resData);
        }
      })
      .catch(err => console.warn("CMS ChooseUs load failed, static fallback active:", err));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <style>{`
        /* ── SECTION ── */
        .wcu-section {
          width: 100%;
          padding: 90px 6%;
          background: #f0f4ff;
          font-family: 'Barlow', sans-serif;
          overflow: hidden;
          position: relative;
        }

        /* subtle grid bg */
        .wcu-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(8,56,120,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(8,56,120,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .wcu-wrap {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 72px;
        }

        /* ── LEFT ── */
        .wcu-left {
          flex: 1;
          min-width: 0;
        }

        .wcu-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(8,56,120,0.08);
          color: #083878;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          padding: 7px 16px;
          border-radius: 40px;
          margin-bottom: 22px;
          border: 1px solid rgba(8,56,120,0.15);
        }

        .wcu-eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #083878;
          flex-shrink: 0;
        }

        .wcu-heading {
          font-size: 44px;
          font-weight: 800;
          line-height: 1.2;
          color: #0a0f1e;
          margin-bottom: 18px;
        }

        .wcu-heading span {
          color: #083878;
          position: relative;
          display: inline-block;
        }
        .wcu-heading .shiny-text {
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

        .wcu-heading span::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #083878, #1a6abf);
          border-radius: 4px;
        }

        .wcu-desc {
          font-size: 16px;
          line-height: 1.85;
          color: #4b5563;
          margin-bottom: 32px;
          max-width: 540px;
        }

        /* ── BULLETS ── */
        .wcu-bullets {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 36px;
        }

        .wcu-bullet {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 15px;
          color: #1e293b;
          font-weight: 500;
          line-height: 1.5;
        }

        .wcu-bullet svg {
          color: #083878;
          font-size: 16px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* ── PROGRESS BARS ── */
        .wcu-bars {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 40px;
        }

        .wcu-bar-row {}

        .wcu-bar-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 7px;
        }

        .wcu-bar-label {
          font-size: 14px;
          font-weight: 700;
          color: #0a0f1e;
          letter-spacing: 0.1px;
        }

        .wcu-bar-pct {
          font-size: 13px;
          font-weight: 800;
          color: #083878;
          background: rgba(8,56,120,0.08);
          padding: 2px 9px;
          border-radius: 20px;
        }

        .wcu-bar-track {
          width: 100%;
          height: 8px;
          background: rgba(8,56,120,0.1);
          border-radius: 20px;
          overflow: hidden;
        }

        .wcu-bar-fill {
          height: 100%;
          border-radius: 20px;
          background: linear-gradient(90deg, #083878 0%, #1a6abf 60%, #3b82f6 100%);
          width: 0%;
          transition: width 1.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        /* shimmer on fill */
        .wcu-bar-fill::after {
          content: '';
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 40px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent);
          animation: barShimmer 2s ease-in-out infinite;
        }

        @keyframes barShimmer {
          0%   { transform: translateX(-40px); opacity: 0; }
          50%  { opacity: 1; }
          100% { transform: translateX(40px); opacity: 0; }
        }

        /* ── CTA BUTTON ── */
        .wcu-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          height: 50px;
          padding: 0 28px;
          background: linear-gradient(135deg, #083878 0%, #1a6abf 100%);
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          font-family: 'Barlow', sans-serif;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 6px 22px rgba(8,56,120,0.3);
          letter-spacing: 0.2px;
        }

        .wcu-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 36px rgba(8,56,120,0.42);
        }

        .wcu-btn svg {
          transition: transform 0.25s ease;
        }

        .wcu-btn:hover svg {
          transform: translateX(4px);
        }

        /* ── RIGHT ── */
        .wcu-right {
          flex: 1;
          min-width: 0;
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 16px;
        }

        .wcu-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 16px;
          transition: transform 0.45s ease, box-shadow 0.45s ease;
        }

        .wcu-img:hover {
          transform: scale(1.03);
          box-shadow: 0 20px 50px rgba(8,56,120,0.22);
        }

        /* tall left image spans 2 rows */
        .wcu-img-wrap-tall {
          grid-row: 1 / 3;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 12px 36px rgba(8,56,120,0.14);
          min-height: 420px;
        }

        .wcu-img-wrap-tall .wcu-img {
          height: 100%;
          min-height: 420px;
        }

        .wcu-img-wrap {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 12px 36px rgba(8,56,120,0.14);
        }

        .wcu-img-wrap .wcu-img {
          height: 200px;
        }

        /* floating stat card */
        .wcu-stat-card {
          position: absolute;
          bottom: -18px;
          left: -24px;
          background: #fff;
          border-radius: 16px;
          padding: 16px 22px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 16px 48px rgba(8,56,120,0.16);
          border: 1.5px solid rgba(8,56,120,0.08);
          z-index: 2;
          animation: floatCard 4s ease-in-out infinite;
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }

        .wcu-stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #083878, #1a6abf);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }

        .wcu-stat-val {
          font-size: 26px;
          font-weight: 800;
          color: #083878;
          line-height: 1;
        }

        .wcu-stat-lbl {
          font-size: 12px;
          color: #6b7280;
          font-weight: 600;
          margin-top: 3px;
        }

        /* badge top-right */
        .wcu-badge-card {
          position: absolute;
          top: -16px;
          right: -16px;
          background: linear-gradient(135deg, #083878, #1a6abf);
          color: #fff;
          border-radius: 14px;
          padding: 12px 18px;
          font-size: 13px;
          font-weight: 700;
          z-index: 2;
          box-shadow: 0 8px 28px rgba(8,56,120,0.35);
          white-space: nowrap;
          animation: floatCard 5s 1s ease-in-out infinite;
        }

        .wcu-badge-card span {
          display: block;
          font-size: 22px;
          font-weight: 800;
          line-height: 1.1;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .wcu-wrap {
            flex-direction: column;
            gap: 56px;
          }
          .wcu-heading { font-size: 36px; }
          .wcu-right { width: 100%; }
        }

        @media (max-width: 768px) {
          .wcu-section { padding: 60px 20px; }
          .wcu-heading { font-size: 28px; }
          .wcu-desc { font-size: 15px; }
          .wcu-right {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }
          .wcu-img-wrap-tall {
            grid-row: auto;
            min-height: 240px;
          }
          .wcu-img-wrap-tall .wcu-img { min-height: 240px; }
          .wcu-img-wrap .wcu-img { height: 180px; }
          .wcu-stat-card { left: 0; bottom: -12px; }
          .wcu-badge-card { right: 0; top: -12px; }
        }
      `}</style>

      <section className="wcu-section" ref={sectionRef}>
        <div className="wcu-wrap">

          {/* ── LEFT ── */}
          <div className="wcu-left">

            <div className="wcu-eyebrow">
              <span className="wcu-eyebrow-dot" />
              Why Choose Us
            </div>

            <h2 className="wcu-heading">
              <span className="shiny-text">{data.title}</span>
            </h2>

            <p className="wcu-desc">
              {data.subtitle}
            </p>

            {/* Bullet points */}
            <div className="wcu-bullets">
              {Array.isArray(data.content.bullets) && data.content.bullets.map((b, i) => (
                <div className="wcu-bullet" key={i}>
                  <FaCheckCircle />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Animated progress bars */}
            <div className="wcu-bars">
              {Array.isArray(data.content.bars) && data.content.bars.map(({ label, pct }, i) => (
                <div className="wcu-bar-row" key={i}>
                  <div className="wcu-bar-meta">
                    <span className="wcu-bar-label">{label}</span>
                    <span className="wcu-bar-pct">{pct}%</span>
                  </div>
                  <div className="wcu-bar-track">
                    <div
                      className="wcu-bar-fill"
                      style={{
                        width: animated ? `${pct}%` : "0%",
                        transitionDelay: `${i * 0.15}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button className="wcu-btn" onClick={() => navigate("/contact")}>
              Explore Our Services
              <FaArrowRight />
            </button>

          </div>

          {/* ── RIGHT — image grid ── */}
          <div className="wcu-right">

            {/* tall left image — AI dashboard */}
            <div className="wcu-img-wrap-tall">
              <img
                className="wcu-img"
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop"
                alt="AI technology dashboard"
              />
            </div>

            {/* top-right — futuristic data */}
            <div className="wcu-img-wrap">
              <img
                className="wcu-img"
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop"
                alt="Futuristic AI interface"
              />
            </div>

            {/* bottom-right — digital network */}
            <div className="wcu-img-wrap">
              <img
                className="wcu-img"
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&auto=format&fit=crop"
                alt="Digital network technology"
              />
            </div>

            {/* floating stat card */}
            <div className="wcu-stat-card">
              <div className="wcu-stat-icon">🚀</div>
              <div>
                <div className="wcu-stat-val">{data.content.happyClients}</div>
                <div className="wcu-stat-lbl">Happy Clients</div>
              </div>
            </div>

            {/* badge card */}
            <div className="wcu-badge-card">
              <span>{data.content.yearsExcellence}</span>
              Years of Excellence
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
