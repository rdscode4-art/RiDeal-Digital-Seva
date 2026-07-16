import { useEffect, useState } from "react";

const ShowcaseHero = () => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState({
    title: "Our Work & Portfolio",
    subtitle: "Explore our premium portfolio of projects and services. We build AI-powered digital experiences, custom ERP solutions, and stunning mobile apps for future businesses.",
    content: {
      eyebrow: "Featured Projects",
      bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
    }
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/sections/showcase-hero")
      .then(res => res.json())
      .then(resData => {
        if (resData && resData.title) {
          setData(resData);
        }
      })
      .catch(err => console.warn("CMS ShowcaseHero load failed:", err));
  }, []);

  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes schFadeUp   { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        @keyframes schFadeDown { from { opacity:0; transform:translateY(-20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes schPulse    { 0%,100% { transform:scale(1); opacity:1; } 50% { transform:scale(1.35); opacity:0.6; } }
        @keyframes schSpin     { from { transform:translate(-50%,-50%) rotate(0deg); } to { transform:translate(-50%,-50%) rotate(360deg); } }
        @keyframes schFloat    { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-8px); } }
        @keyframes schShimmer  { 0% { background-position:-600px 0; } 100% { background-position:600px 0; } }

        .sch-section {
          width: 100%;
          min-height: 320px;
          position: relative;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
          display: flex;
          align-items: center;
        }

        .sch-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          z-index: 0;
          transform: scale(1.04);
          transition: transform 8s ease;
        }
        .sch-section:hover .sch-bg { transform: scale(1); }

        .sch-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(10, 15, 30, 0.92) 0%, rgba(10, 15, 30, 0.75) 60%, rgba(37, 99, 235, 0.40) 100%);
          z-index: 1;
        }

        .sch-circles { position:absolute; top:-40px; left:-40px; width:220px; height:220px; z-index:2; pointer-events:none; }
        .sch-circle  { position:absolute; border-radius:50%; top:50%; left:50%; transform:translate(-50%,-50%); }
        .sch-circle:nth-child(1) { width:80px;  height:80px;  border:1.5px solid rgba(255,255,255,0.25); animation:schSpin 18s linear infinite; }
        .sch-circle:nth-child(2) { width:130px; height:130px; border:1.5px solid rgba(255,255,255,0.14); animation:schSpin 28s linear infinite reverse; }
        .sch-circle:nth-child(3) { width:190px; height:190px; border:1px   solid rgba(255,255,255,0.07); animation:schSpin 40s linear infinite; }

        .sch-arc-wrap { position:absolute; bottom:-20px; right:-20px; width:200px; height:200px; z-index:2; pointer-events:none; }
        .sch-arc      { position:absolute; border-radius:50%; bottom:0; right:0; }
        .sch-arc:nth-child(1) { width:110px; height:110px; border:16px solid #2563eb; bottom:-28px; right:-28px; animation:schFloat 4s ease-in-out infinite; }
        .sch-arc:nth-child(2) { width:170px; height:170px; border:16px solid rgba(37, 99, 235,0.35); bottom:-55px; right:-55px; animation:schFloat 5.5s 0.8s ease-in-out infinite; }

        .sch-dot { position:absolute; border-radius:50%; z-index:3; pointer-events:none; }
        .sch-dot-1 { width:12px; height:12px; background:#fff; top:36%; left:20%; animation:schPulse 3s ease-in-out infinite; }
        .sch-dot-2 { width:8px;  height:8px;  background:rgba(255,255,255,0.5); bottom:30%; right:15%; animation:schPulse 4s 1s ease-in-out infinite; }
        .sch-dot-3 { width:6px;  height:6px;  background:rgba(255,255,255,0.3); top:25%; right:28%; animation:schPulse 5s 2s ease-in-out infinite; }

        .sch-content {
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

        .sch-eyebrow {
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
        .sch-eyebrow.in { animation: schFadeDown 0.6s 0.1s ease forwards; }
        .sch-eyebrow-line { width:30px; height:1.5px; background:rgba(255,255,255,0.4); border-radius:2px; }

        .sch-title {
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
          animation: schShimmer 3.5s 0.8s linear infinite, schFadeUp 0.7s 0.2s ease forwards;
        }

        .sch-title-line {
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #2563eb, transparent);
          border-radius: 4px;
          transition: width 0.8s 0.9s ease;
          margin: -8px auto 0;
        }
        .sch-title-line.in { width: 180px; }

        .sch-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.7);
          line-height: 1.8;
          max-width: 460px;
          margin: 0;
          opacity: 0;
        }
        .sch-desc.in { animation: schFadeUp 0.7s 0.45s ease forwards; }

        .sch-breadcrumb {
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
        .sch-breadcrumb.in { animation: schFadeUp 0.7s 0.6s ease forwards; }
        .sch-breadcrumb:hover { background: rgba(37, 99, 235, 0.2); border-color: rgba(37, 99, 235, 0.5); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37, 99, 235, 0.2); }
        .sch-breadcrumb-sep    { color:rgba(255,255,255,0.4); font-size:13px; }
        .sch-breadcrumb-active { color:#fff; font-weight:800; }

        @media (max-width:768px) { .sch-title { font-size:38px; letter-spacing:2px; } .sch-content { padding:56px 20px; } }
        @media (max-width:480px) { .sch-title { font-size:28px; } }
      `}</style>

      <section className="sch-section">
        <div className="sch-bg" style={{ backgroundImage: `url(${data.content?.bgImage || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"})` }} />
        <div className="sch-overlay" />


        <div className="sch-arc-wrap">
          <div className="sch-arc" /><div className="sch-arc" />
        </div>

        <div className="sch-dot sch-dot-1" />
        <div className="sch-dot sch-dot-2" />
        <div className="sch-dot sch-dot-3" />

        <div className="sch-content">
          <div className={`sch-eyebrow ${loaded ? "in" : ""}`}>
            <span className="sch-eyebrow-line" />
            {data.content?.eyebrow || "Featured Projects"}
            <span className="sch-eyebrow-line" />
          </div>

          <h1 className="sch-title">{data.title}</h1>
          <div className={`sch-title-line ${loaded ? "in" : ""}`} />

          <p className={`sch-desc ${loaded ? "in" : ""}`}>
            {data.subtitle}
          </p>

          <a href="/" className={`sch-breadcrumb ${loaded ? "in" : ""}`}>
            Home
            <span className="sch-breadcrumb-sep">→</span>
            <span className="sch-breadcrumb-active">Portfolio</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default ShowcaseHero;
