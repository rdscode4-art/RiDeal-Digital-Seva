import { useEffect, useState } from "react";

const ServicesHero = () => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState({
    title: "IT Services & Business Solutions",
    subtitle: "Rideal Digital Seva provides ERP solutions, CRM development, AI automation, website development, mobile app development, digital marketing, SEO services, cloud solutions, and custom software development to help businesses grow faster and operate efficiently..",
    content: {
      eyebrow: "What We Offer",
      bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop"
    }
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/sections/services-hero")
      .then(res => res.json())
      .then(resData => {
        if (resData && resData.title) {
          setData(resData);
        }
      })
      .catch(err => console.warn("CMS ServicesHero load failed:", err));
  }, []);

  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes shFadeUp   { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        @keyframes shFadeDown { from { opacity:0; transform:translateY(-20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes shPulse    { 0%,100% { transform:scale(1); opacity:1; } 50% { transform:scale(1.35); opacity:0.6; } }
        @keyframes shSpin     { from { transform:translate(-50%,-50%) rotate(0deg); } to { transform:translate(-50%,-50%) rotate(360deg); } }
        @keyframes shFloat    { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-8px); } }
        @keyframes shShimmer  { 0% { background-position:-600px 0; } 100% { background-position:600px 0; } }

        .sh-section {
          width: 100%;
          min-height: 320px;
          position: relative;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
          display: flex;
          align-items: center;
        }

        .sh-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          z-index: 0;
          transform: scale(1.04);
          transition: transform 8s ease;
        }
        .sh-section:hover .sh-bg { transform: scale(1); }

        .sh-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(10, 15, 30, 0.92) 0%, rgba(10, 15, 30, 0.75) 60%, rgba(37, 99, 235, 0.40) 100%);
          z-index: 1;
        }

        /* spinning circles — top left */
        .sh-circles {
          position: absolute;
          top: -40px; left: -40px;
          width: 220px; height: 220px;
          z-index: 2;
          pointer-events: none;
        }
        .sh-circle {
          position: absolute;
          border-radius: 50%;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
        }
        .sh-circle:nth-child(1) { width:80px;  height:80px;  border:1.5px solid rgba(255,255,255,0.25); animation:shSpin 18s linear infinite; }
        .sh-circle:nth-child(2) { width:130px; height:130px; border:1.5px solid rgba(255,255,255,0.14); animation:shSpin 28s linear infinite reverse; }
        .sh-circle:nth-child(3) { width:190px; height:190px; border:1px   solid rgba(255,255,255,0.07); animation:shSpin 40s linear infinite; }

        /* arcs — bottom right */
        .sh-arc-wrap {
          position: absolute;
          bottom: -20px; right: -20px;
          width: 200px; height: 200px;
          z-index: 2;
          pointer-events: none;
        }
        .sh-arc { position: absolute; border-radius: 50%; bottom: 0; right: 0; }
        .sh-arc:nth-child(1) { width:110px; height:110px; border:16px solid #2563eb; bottom:-28px; right:-28px; animation:shFloat 4s ease-in-out infinite; }
        .sh-arc:nth-child(2) { width:170px; height:170px; border:16px solid rgba(37, 99, 235,0.35); bottom:-55px; right:-55px; animation:shFloat 5.5s 0.8s ease-in-out infinite; }

        /* pulsing dots */
        .sh-dot { position:absolute; border-radius:50%; z-index:3; pointer-events:none; }
        .sh-dot-1 { width:12px; height:12px; background:#fff; top:36%; left:20%; animation:shPulse 3s ease-in-out infinite; }
        .sh-dot-2 { width:8px;  height:8px;  background:rgba(255,255,255,0.5); bottom:30%; right:15%; animation:shPulse 4s 1s ease-in-out infinite; }
        .sh-dot-3 { width:6px;  height:6px;  background:rgba(255,255,255,0.3); top:25%; right:28%; animation:shPulse 5s 2s ease-in-out infinite; }

        /* content */
        .sh-content {
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

        .sh-eyebrow {
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
        .sh-eyebrow.in { animation: shFadeDown 0.6s 0.1s ease forwards; }
        .sh-eyebrow-line { width:30px; height:1.5px; background:rgba(255,255,255,0.4); border-radius:2px; }

        .sh-title {
          font-size: 48px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 4px;
          text-transform: uppercase;
          line-height: 1.1;
          margin: 0;
          opacity: 0;
          background: linear-gradient(90deg, #fff 0%, #fff 40%, rgba(255,255,255,0.55) 50%, #fff 60%, #fff 100%);
          background-size: 600px 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shShimmer 3.5s 0.8s linear infinite, shFadeUp 0.7s 0.2s ease forwards;
        }

        .sh-title-line {
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #2563eb, transparent);
          border-radius: 4px;
          transition: width 0.8s 0.9s ease;
          margin: -8px auto 0;
        }
        .sh-title-line.in { width: 220px; }

        .sh-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.7);
          line-height: 1.8;
          max-width: 500px;
          margin: 0;
          opacity: 0;
        }
        .sh-desc.in { animation: shFadeUp 0.7s 0.45s ease forwards; }

        .sh-breadcrumb {
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
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          opacity: 0;
        }
        .sh-breadcrumb.in { animation: shFadeUp 0.7s 0.6s ease forwards; }
        .sh-breadcrumb:hover { background: rgba(37, 99, 235, 0.2); border-color: rgba(37, 99, 235, 0.5); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37, 99, 235, 0.2); }
        .sh-breadcrumb-sep { color:rgba(255,255,255,0.4); font-size:13px; }
        .sh-breadcrumb-active { color:#fff; font-weight:800; }

        @media (max-width:768px) {
          .sh-title { font-size:38px; letter-spacing:2px; }
          .sh-content { padding:56px 20px; }
        }
        @media (max-width:480px) { .sh-title { font-size:28px; } }
      `}</style>

      <section className="sh-section">
        <div className="sh-bg" style={{ backgroundImage: `url(${data.content?.bgImage || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop"})` }} />
        <div className="sh-overlay" />

        <div className="sh-circles">
          <div className="sh-circle" /><div className="sh-circle" /><div className="sh-circle" />
        </div>

        <div className="sh-arc-wrap">
          <div className="sh-arc" /><div className="sh-arc" />
        </div>

        <div className="sh-dot sh-dot-1" />
        <div className="sh-dot sh-dot-2" />
        <div className="sh-dot sh-dot-3" />

        <div className="sh-content">
          <div className={`sh-eyebrow ${loaded ? "in" : ""}`}>
            <span className="sh-eyebrow-line" />
            {data.content?.eyebrow || "What We Offer"}
            <span className="sh-eyebrow-line" />
          </div>

          <h1 className="sh-title">{data.title}</h1>
          <div className={`sh-title-line ${loaded ? "in" : ""}`} />

          <p className={`sh-desc ${loaded ? "in" : ""}`}>
            {data.subtitle}
          </p>

          <a href="/" className={`sh-breadcrumb ${loaded ? "in" : ""}`}>
            Home
            <span className="sh-breadcrumb-sep">→</span>
            <span className="sh-breadcrumb-active">Services</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default ServicesHero;
