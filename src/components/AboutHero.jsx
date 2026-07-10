import { useEffect, useState } from "react";

const AboutHero = () => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState({
    title: "Custom Software Development & IT Solutions Company in India",
    subtitle: "RiDeal Digital Seva is a leading custom software development company in India specializing in website development, mobile app development, ERP software solutions, CRM systems, SEO services, digital marketing, AI-powered applications, and business automation solutions. We help startups, small businesses, and enterprises accelerate growth through innovative technology solutions.",
    content: {
      eyebrow: "Trusted IT Solutions Partner",
      bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
    }
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/sections/about-hero")
      .then(res => res.json())
      .then(resData => {
        if (resData && resData.title) {
          setData(resData);
        }
      })
      .catch(err => console.warn("CMS AboutHero load failed:", err));
  }, []);

  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes ahFadeUp   { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        @keyframes ahFadeDown { from { opacity:0; transform:translateY(-20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes ahPulse    { 0%,100% { transform:scale(1); opacity:1; } 50% { transform:scale(1.4); opacity:0.5; } }
        @keyframes ahSpin     { from { transform:translate(-50%,-50%) rotate(0deg); } to { transform:translate(-50%,-50%) rotate(360deg); } }
        @keyframes ahFloat    { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-9px); } }
        @keyframes ahShimmer  { 0% { background-position:-600px 0; } 100% { background-position:600px 0; } }

        .ah-section {
          width: 100%;
          min-height: 320px;
          position: relative;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
          display: flex;
          align-items: center;
        }

        .ah-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          z-index: 0;
          transform: scale(1.04);
          transition: transform 8s ease;
        }
        .ah-section:hover .ah-bg { transform: scale(1); }

        .ah-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(10, 15, 30, 0.92) 0%, rgba(10, 15, 30, 0.75) 60%, rgba(37, 99, 235, 0.40) 100%);
          z-index: 1;
        }

        /* spinning circles — top left */
        .ah-circles {
          position: absolute;
          top: -40px; left: -40px;
          width: 220px; height: 220px;
          z-index: 2;
          pointer-events: none;
        }
        .ah-circle {
          position: absolute;
          border-radius: 50%;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
        }
        .ah-circle:nth-child(1) { width:80px;  height:80px;  border:1.5px solid rgba(255,255,255,0.25); animation:ahSpin 18s linear infinite; }
        .ah-circle:nth-child(2) { width:130px; height:130px; border:1.5px solid rgba(255,255,255,0.14); animation:ahSpin 28s linear infinite reverse; }
        .ah-circle:nth-child(3) { width:190px; height:190px; border:1px   solid rgba(255,255,255,0.07); animation:ahSpin 40s linear infinite; }

        /* arcs — bottom right */
        .ah-arc-wrap {
          position: absolute;
          bottom: -20px; right: -20px;
          width: 200px; height: 200px;
          z-index: 2;
          pointer-events: none;
        }
        .ah-arc {
          position: absolute;
          border-radius: 50%;
          bottom: 0; right: 0;
        }
        .ah-arc:nth-child(1) { width:110px; height:110px; border:16px solid #2563eb; bottom:-28px; right:-28px; animation:ahFloat 4s ease-in-out infinite; }
        .ah-arc:nth-child(2) { width:170px; height:170px; border:16px solid rgba(37, 99, 235,0.35); bottom:-55px; right:-55px; animation:ahFloat 5.5s 0.8s ease-in-out infinite; }

        /* pulsing dots */
        .ah-dot { position:absolute; border-radius:50%; z-index:3; pointer-events:none; }
        .ah-dot-1 { width:12px; height:12px; background:#fff; top:36%; left:20%; animation:ahPulse 3s ease-in-out infinite; }
        .ah-dot-2 { width:8px;  height:8px;  background:rgba(255,255,255,0.5); bottom:30%; right:15%; animation:ahPulse 4s 1s ease-in-out infinite; }
        .ah-dot-3 { width:6px;  height:6px;  background:rgba(255,255,255,0.3); top:25%; right:28%; animation:ahPulse 5s 2s ease-in-out infinite; }

        /* content */
        .ah-content {
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

        .ah-eyebrow {
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
        .ah-eyebrow.in { animation: ahFadeDown 0.6s 0.1s ease forwards; }
        .ah-eyebrow-line { width:30px; height:1.5px; background:rgba(255,255,255,0.4); border-radius:2px; }

        .ah-title {
          font-size: 40px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 3px;
          text-transform: uppercase;
          line-height: 1.2;
          max-width: 900px;
          margin: 0;
          opacity: 0;
          background: linear-gradient(90deg, #fff 0%, #fff 40%, rgba(255,255,255,0.55) 50%, #fff 60%, #fff 100%);
          background-size: 600px 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: ahShimmer 3.5s 0.8s linear infinite, ahFadeUp 0.7s 0.2s ease forwards;
        }

        .ah-title-line {
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #2563eb, transparent);
          border-radius: 4px;
          transition: width 0.8s 0.9s ease;
          margin: -4px auto 0;
        }
        .ah-title-line.in { width: 200px; }

        .ah-desc {
          font-size: 16px;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          max-width: 800px;
          margin: 0;
          opacity: 0;
        }
        .ah-desc.in { animation: ahFadeUp 0.7s 0.45s ease forwards; }

        .ah-breadcrumb {
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
        .ah-breadcrumb.in { animation: ahFadeUp 0.7s 0.6s ease forwards; }
        .ah-breadcrumb:hover { background: rgba(37, 99, 235, 0.2); border-color: rgba(37, 99, 235, 0.5); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37, 99, 235, 0.2); }
        .ah-breadcrumb-sep { color:rgba(255,255,255,0.4); font-size:13px; }
        .ah-breadcrumb-active { color:#fff; font-weight:800; }

        @media (max-width:768px) { .ah-title { font-size:34px; letter-spacing:2px; } .ah-content { padding:50px 20px; } }
        @media (max-width:480px) { .ah-title { font-size:26px; letter-spacing:1px; } .ah-title-line.in { width:140px; } }
        @media (max-width:360px) { .ah-title { font-size:22px; } .ah-content { padding:40px 14px; } }
      `}</style>

      <section className="ah-section">
        <div className="ah-bg" style={{ backgroundImage: `url('${data.content?.bgImage || "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"}')` }} />
        <div className="ah-overlay" />

        <div className="ah-circles">
          <div className="ah-circle" /><div className="ah-circle" /><div className="ah-circle" />
        </div>

        <div className="ah-arc-wrap">
          <div className="ah-arc" /><div className="ah-arc" />
        </div>

        <div className="ah-dot ah-dot-1" />
        <div className="ah-dot ah-dot-2" />
        <div className="ah-dot ah-dot-3" />

        <div className="ah-content">
          <div className={`ah-eyebrow ${loaded ? "in" : ""}`}>
            <span className="ah-eyebrow-line" />
            {data.content?.eyebrow || "Who We Are"}
            <span className="ah-eyebrow-line" />
          </div>

          <h1 className="ah-title">{data.title}</h1>
          <div className={`ah-title-line ${loaded ? "in" : ""}`} />

          <p className={`ah-desc ${loaded ? "in" : ""}`}>
            {data.subtitle}
          </p>

          <a href="/" className={`ah-breadcrumb ${loaded ? "in" : ""}`}>
            Home
            <span className="ah-breadcrumb-sep">→</span>
            <span className="ah-breadcrumb-active">About Us</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
