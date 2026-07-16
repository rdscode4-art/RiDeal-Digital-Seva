import { useEffect, useState } from "react";

const ContactHero = () => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState({
    title: "Contact RiDeal Digital Seva for IT Services",
    subtitle: "Got a question or need a quote? Reach out to our dedicated support team today—we're always here to help.",
    content: {
      eyebrow: "Contact Us",
      bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
    }
  });



  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes chFadeUp   { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        @keyframes chFadeDown { from { opacity:0; transform:translateY(-20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes chPulse    { 0%,100% { transform:scale(1); opacity:1; } 50% { transform:scale(1.35); opacity:0.6; } }
        @keyframes chSpin     { from { transform:translate(-50%,-50%) rotate(0deg); } to { transform:translate(-50%,-50%) rotate(360deg); } }
        @keyframes chFloat    { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-8px); } }
        @keyframes chShimmer  { 0% { background-position:-600px 0; } 100% { background-position:600px 0; } }

        /* ── SECTION ── */
        .ch-section {
          width: 100%;
          min-height: 320px;
          position: relative;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
          display: flex;
          align-items: center;
        }

        /* bg image */
        .ch-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop');
          background-size: cover;
          background-position: center top;
          z-index: 0;
          transform: scale(1.04);
          transition: transform 8s ease;
        }
        .ch-section:hover .ch-bg { transform: scale(1); }

        /* overlay — two-layer for depth */
        .ch-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(10, 15, 30, 0.92) 0%, rgba(10, 15, 30, 0.75) 60%, rgba(37, 99, 235, 0.40) 100%);
          z-index: 1;
        }

        /* ── TOP-LEFT CIRCLES — slow spin ── */
        .ch-circles {
          position: absolute;
          top: -40px; left: -40px;
          width: 220px; height: 220px;
          z-index: 2;
          pointer-events: none;
        }
        .ch-circle {
          position: absolute;
          border-radius: 50%;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
        }
        .ch-circle:nth-child(1) {
          width: 80px; height: 80px;
          border: 1.5px solid rgba(255,255,255,0.25);
          animation: chSpin 18s linear infinite;
        }
        .ch-circle:nth-child(2) {
          width: 130px; height: 130px;
          border: 1.5px solid rgba(255,255,255,0.15);
          animation: chSpin 28s linear infinite reverse;
        }
        .ch-circle:nth-child(3) {
          width: 190px; height: 190px;
          border: 1px solid rgba(255,255,255,0.08);
          animation: chSpin 40s linear infinite;
        }

        /* ── BOTTOM-RIGHT ARCS ── */
        .ch-arc-wrap {
          position: absolute;
          bottom: -20px; right: -20px;
          width: 200px; height: 200px;
          z-index: 2;
          pointer-events: none;
        }
        .ch-arc {
          position: absolute;
          border-radius: 50%;
          bottom: 0; right: 0;
        }
        .ch-arc:nth-child(1) {
          width: 110px; height: 110px;
          border: 16px solid rgba(37, 99, 235, 0.6);
          bottom: -28px; right: -28px;
          animation: chFloat 4s ease-in-out infinite;
        }
        .ch-arc:nth-child(2) {
          width: 170px; height: 170px;
          border: 16px solid rgba(37, 99, 235, 0.35);
          bottom: -55px; right: -55px;
          animation: chFloat 5.5s 0.8s ease-in-out infinite;
        }

        /* ── FLOATING DOTS ── */
        .ch-dot {
          position: absolute;
          border-radius: 50%;
          z-index: 3;
          pointer-events: none;
        }
        .ch-dot-1 {
          width: 12px; height: 12px;
          background: #fff;
          top: 36%; left: 20%;
          animation: chPulse 3s ease-in-out infinite;
        }
        .ch-dot-2 {
          width: 8px; height: 8px;
          background: rgba(255,255,255,0.5);
          bottom: 30%; right: 15%;
          animation: chPulse 4s 1s ease-in-out infinite;
        }
        .ch-dot-3 {
          width: 6px; height: 6px;
          background: rgba(255,255,255,0.3);
          top: 25%; right: 28%;
          animation: chPulse 5s 2s ease-in-out infinite;
        }

        /* ── CONTENT ── */
        .ch-content {
          position: relative;
          z-index: 3;
          width: 100%;
          padding: 140px 6% 72px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
        }

        /* eyebrow */
        .ch-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          opacity: 0;
        }
        .ch-eyebrow.in { animation: chFadeDown 0.6s 0.1s ease forwards; }
        .ch-eyebrow-line {
          width: 30px; height: 1.5px;
          background: rgba(255,255,255,0.4);
          border-radius: 2px;
        }

        /* title */
        .ch-title {
          font-size: 40px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 3px;
          text-transform: uppercase;
          line-height: 1.2;
          max-width: 900px;
          margin: 0;
          opacity: 0;
          /* shimmer effect on text */
          background: linear-gradient(90deg, #fff 0%, #fff 40%, rgba(255,255,255,0.55) 50%, #fff 60%, #fff 100%);
          background-size: 600px 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: chShimmer 3.5s 0.8s linear infinite,
                     chFadeUp   0.7s 0.2s ease forwards;
        }

        /* underline accent */
        .ch-title-line {
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #2563eb, transparent);
          border-radius: 4px;
          transition: width 0.8s 0.9s ease;
          margin: -8px auto 0;
        }
        .ch-title-line.in { width: 220px; }

        /* desc */
        .ch-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.7);
          line-height: 1.8;
          max-width: 460px;
          margin: 0;
          opacity: 0;
        }
        .ch-desc.in { animation: chFadeUp 0.7s 0.45s ease forwards; }

        /* breadcrumb pill */
        .ch-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50px;
          padding: 8px 22px;
          font-size: 14px;
          font-weight: 600;
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          backdrop-filter: blur(6px);
          transition: background 0.25s ease, border-color 0.25s ease,
                      transform 0.25s ease, box-shadow 0.25s ease;
          opacity: 0;
        }
        .ch-breadcrumb.in { animation: chFadeUp 0.7s 0.6s ease forwards; }
        .ch-breadcrumb:hover {
          background: rgba(37, 99, 235, 0.2);
          border-color: rgba(37, 99, 235, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.2);
        }
        .ch-breadcrumb-sep { color: rgba(255,255,255,0.4); font-size: 13px; }
        .ch-breadcrumb-active { color: #fff; font-weight: 800; }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .ch-title { font-size: 34px; letter-spacing: 2px; }
          .ch-desc  { font-size: 14px; }
          .ch-content { padding: 50px 20px; }
        }
        @media (max-width: 480px) {
          .ch-title { font-size: 26px; letter-spacing: 1px; }
          .ch-title-line.in { width: 140px; }
        }
        @media (max-width: 360px) {
          .ch-title { font-size: 22px; }
          .ch-content { padding: 40px 14px; gap: 12px; }
        }
      `}</style>

      <section className="ch-section">
        <div className="ch-bg" style={{ backgroundImage: `url(${data.content?.bgImage || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"})` }} />
        <div className="ch-overlay" />



        {/* floating arcs */}
        <div className="ch-arc-wrap">
          <div className="ch-arc" />
          <div className="ch-arc" />
        </div>

        {/* pulsing dots */}
        <div className="ch-dot ch-dot-1" />
        <div className="ch-dot ch-dot-2" />
        <div className="ch-dot ch-dot-3" />

        <div className="ch-content">
          <div className={`ch-eyebrow ${loaded ? "in" : ""}`}>
            <span className="ch-eyebrow-line" />
            {data.content?.eyebrow || "Get In Touch"}
            <span className="ch-eyebrow-line" />
          </div>

          <h1 className="ch-title">{data.title}</h1>
          <div className={`ch-title-line ${loaded ? "in" : ""}`} />

    <p className={`ch-desc ${loaded ? "in" : ""}`}>
            {data.subtitle}
          </p>

          <a href="/" className={`ch-breadcrumb ${loaded ? "in" : ""}`}>
            Home
            <span className="ch-breadcrumb-sep">→</span>
            <span className="ch-breadcrumb-active">Contact</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default ContactHero;
