import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaClock } from "react-icons/fa";

const BlogDetailsHero = ({ post }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  if (!post) return null;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes bdhFadeUp   { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bdhFadeDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bdhPulse    { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.35); opacity: 0.6; } }
        @keyframes bdhSpin     { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(360deg); } }
        @keyframes bdhFloat    { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }

        .bdh-section {
          width: 100%;
          min-height: 380px;
          position: relative;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
          display: flex;
          align-items: center;
        }

        .bdh-bg {
          position: absolute;
          inset: 0;
          background-image: url('${post.image}');
          background-size: cover;
          background-position: center;
          z-index: 0;
          transform: scale(1.04);
          transition: transform 8s ease;
        }
        .bdh-section:hover .bdh-bg { transform: scale(1); }

        .bdh-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(8,56,120,0.92) 0%, rgba(5,20,50,0.85) 55%, rgba(8,56,120,0.78) 100%);
          z-index: 1;
        }

        .bdh-circles { position: absolute; top: -40px; left: -40px; width: 220px; height: 220px; z-index: 2; pointer-events: none; }
        .bdh-circle  { position: absolute; border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%,-50%); }
        .bdh-circle:nth-child(1) { width: 80px;  height: 80px;  border: 1.5px solid rgba(255,255,255,0.25); animation: bdhSpin 18s linear infinite; }
        .bdh-circle:nth-child(2) { width: 130px; height: 130px; border: 1.5px solid rgba(255,255,255,0.14); animation: bdhSpin 28s linear infinite reverse; }
        .bdh-circle:nth-child(3) { width: 190px; height: 190px; border: 1px   solid rgba(255,255,255,0.07); animation: bdhSpin 40s linear infinite; }

        .bdh-arc-wrap { position: absolute; bottom: -20px; right: -20px; width: 200px; height: 200px; z-index: 2; pointer-events: none; }
        .bdh-arc      { position: absolute; border-radius: 50%; bottom: 0; right: 0; }
        .bdh-arc:nth-child(1) { width: 110px; height: 110px; border: 16px solid #083878; bottom: -28px; right: -28px; animation: bdhFloat 4s ease-in-out infinite; }
        .bdh-arc:nth-child(2) { width: 170px; height: 170px; border: 16px solid rgba(8,56,120,0.35); bottom: -55px; right: -55px; animation: bdhFloat 5.5s 0.8s ease-in-out infinite; }

        .bdh-dot { position: absolute; border-radius: 50%; z-index: 3; pointer-events: none; }
        .bdh-dot-1 { width: 12px; height: 12px; background: #fff; top: 36%; left: 20%; animation: bdhPulse 3s ease-in-out infinite; }
        .bdh-dot-2 { width: 8px;  height: 8px;  background: rgba(255,255,255,0.5); bottom: 30%; right: 15%; animation: bdhPulse 4s 1s ease-in-out infinite; }

        .bdh-content {
          position: relative;
          z-index: 3;
          width: 100%;
          padding: 60px 6%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
        }

        .bdh-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.85);
          opacity: 0;
          background: rgba(255, 255, 255, 0.15);
          padding: 6px 16px;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }
        .bdh-eyebrow.in { animation: bdhFadeDown 0.6s 0.1s ease forwards; }

        .bdh-title {
          font-size: 40px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 1px;
          line-height: 1.2;
          max-width: 900px;
          margin: 0;
          opacity: 0;
          text-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .bdh-title.in { animation: bdhFadeUp 0.7s 0.2s ease forwards; }

        .bdh-title-line {
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #fff, transparent);
          border-radius: 4px;
          transition: width 0.8s 0.9s ease;
          margin: -4px auto 0;
        }
        .bdh-title-line.in { width: 140px; }

        /* Meta style inside hero */
        .bdh-meta {
          display: inline-flex;
          align-items: center;
          gap: 24px;
          font-size: 14px;
          font-weight: 600;
          color: rgba(255,255,255,0.85);
          opacity: 0;
          flex-wrap: wrap;
          justify-content: center;
        }
        .bdh-meta.in { animation: bdhFadeUp 0.7s 0.4s ease forwards; }
        .bdh-meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .bdh-meta-icon {
          color: #fff;
          opacity: 0.8;
        }

        .bdh-breadcrumb {
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
          margin-top: 12px;
        }
        .bdh-breadcrumb.in { animation: bdhFadeUp 0.7s 0.65s ease forwards; }
        .bdh-breadcrumb:hover { background: rgba(255,255,255,0.16); border-color: rgba(255,255,255,0.45); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .bdh-breadcrumb-sep    { color: rgba(255,255,255,0.4); font-size: 13px; }
        .bdh-breadcrumb-active { color: #fff; font-weight: 800; max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

        @media (max-width: 768px) {
          .bdh-title { font-size: 28px; }
          .bdh-content { padding: 48px 20px; }
          .bdh-meta { gap: 14px; font-size: 12px; }
          .bdh-breadcrumb-active { max-width: 150px; }
        }
        @media (max-width: 480px) {
          .bdh-title { font-size: 22px; }
        }
      `}</style>

      <section className="bdh-section">
        <div className="bdh-bg" />
        <div className="bdh-overlay" />

        <div className="bdh-circles">
          <div className="bdh-circle" /><div className="bdh-circle" /><div className="bdh-circle" />
        </div>
        <div className="bdh-arc-wrap">
          <div className="bdh-arc" /><div className="bdh-arc" />
        </div>

        <div className="bdh-dot bdh-dot-1" />
        <div className="bdh-dot bdh-dot-2" />

        <div className="bdh-content">
          <div className={`bdh-eyebrow ${loaded ? "in" : ""}`}>
            {post.category}
          </div>

          <h1 className={`bdh-title ${loaded ? "in" : ""}`}>{post.title}</h1>
          <div className={`bdh-title-line ${loaded ? "in" : ""}`} />

          <div className={`bdh-meta ${loaded ? "in" : ""}`}>
            <span className="bdh-meta-item"><FaUser className="bdh-meta-icon" /> By {post.author}</span>
            <span className="bdh-meta-item"><FaCalendarAlt className="bdh-meta-icon" /> {post.date}</span>
            <span className="bdh-meta-item"><FaClock className="bdh-meta-icon" /> {post.readTime}</span>
          </div>

          <div className={`bdh-breadcrumb ${loaded ? "in" : ""}`}>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
            <span className="bdh-breadcrumb-sep">→</span>
            <Link to="/blog" style={{ color: "inherit", textDecoration: "none" }}>Blog</Link>
            <span className="bdh-breadcrumb-sep">→</span>
            <span className="bdh-breadcrumb-active">{post.title}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsHero;
