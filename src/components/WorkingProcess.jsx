import { useState, useEffect, useRef } from "react";
import {
  FaRegComments, FaRegCompass, FaCogs, FaHeadset,
} from "react-icons/fa";

const STEPS = [
  {
    step: "01",
    icon: <FaRegComments />,
    title: "Consultation And Assessment",
    desc: "We start by understanding your business needs and challenges, then conduct a thorough assessment to identify the best tailored IT solutions.",
  },
  {
    step: "02",
    icon: <FaRegCompass />,
    title: "Strategy And Planning",
    desc: "Based on the assessment, we create a tailored IT strategy, detailing the technologies needed to enhance your operations, efficiency, and security.",
  },
  {
    step: "03",
    icon: <FaCogs />,
    title: "Implementation And Integration",
    desc: "Our team implements solutions seamlessly, ensuring smooth integration with your existing infrastructure and digital operations.",
  },
  {
    step: "04",
    icon: <FaHeadset />,
    title: "Support And Optimization",
    desc: "After deployment, we offer ongoing support and continuous optimization to keep your systems running efficiently and securely.",
  },
];

const WorkingProcess = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        /* ── SECTION ── */
        .wp-sec {
          width: 100%;
          padding: 90px 6% 100px;
          background: #f8fafc;
          font-family: 'Barlow', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* grid lines or dot-grid */
        .wp-sec::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(8,56,120,0.035) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        /* ── HEADER ── */
        .wp-hd {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 2;
        }

        .wp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #083878;
          margin-bottom: 14px;
        }

        .wp-eyebrow-line {
          width: 24px;
          height: 2px;
          background: #083878;
          border-radius: 2px;
        }

        .wp-title {
          font-size: 46px;
          font-weight: 900;
          color: #0a0f1e;
          line-height: 1.2;
          margin: 0;
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
          font-weight: 900 !important;
        }
        @keyframes shineSweep {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        /* ── GRID ── */
        .wp-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 340px 1fr;
          align-items: center;
          gap: 40px;
          position: relative;
          z-index: 2;
        }

        /* ── CARDS ── */
        .wp-card {
          background: #fff;
          border: 1.5px solid rgba(8,56,120,0.06);
          border-radius: 24px;
          padding: 34px 28px;
          position: relative;
          box-shadow: 0 8px 30px rgba(8,56,120,0.03);
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.35s ease,
                      border-color 0.35s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .wp-sec.visible .wp-card {
          opacity: 1;
          transform: translateY(0);
          transition-property: opacity, transform;
        }

        .wp-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(8,56,120,0.1);
          border-color: rgba(8,56,120,0.18);
        }

        /* Grid Assignments on Desktop */
        .wp-card-1 { grid-column: 1; grid-row: 1; transition-delay: 0.1s; }
        .wp-card-3 { grid-column: 1; grid-row: 2; transition-delay: 0.3s; }
        .wp-card-2 { grid-column: 3; grid-row: 1; transition-delay: 0.2s; }
        .wp-card-4 { grid-column: 3; grid-row: 2; transition-delay: 0.4s; }

        /* Step circle badge */
        .wp-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #00c2ff;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 800;
          box-shadow: 0 4px 12px rgba(0, 194, 255, 0.3);
        }

        /* Cobalt blue icon box */
        .wp-icon-box {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          background: #2f25f6;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          color: #fff;
          margin-bottom: 22px;
          transition: transform 0.3s ease, background 0.3s ease;
          box-shadow: 0 6px 16px rgba(47, 37, 246, 0.25);
        }

        .wp-card:hover .wp-icon-box {
          transform: rotate(-6deg) scale(1.08);
          background: #1a10df;
        }

        .wp-card-title {
          font-size: 19px;
          font-weight: 800;
          color: #0a0f1e;
          margin-bottom: 12px;
          line-height: 1.35;
        }

        .wp-card-desc {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.65;
          margin: 0;
        }

        /* ── CENTER IMAGE ── */
        .wp-img-wrap {
          grid-column: 2;
          grid-row: 1 / 3;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.8s 0.2s ease, transform 0.8s 0.2s ease;
        }

        .wp-sec.visible .wp-img-wrap {
          opacity: 1;
          transform: scale(1);
        }

        .wp-img {
          width: 100%;
          max-width: 320px;
          height: auto;
          display: block;
          mix-blend-mode: multiply;
          animation: wpFloat 6s ease-in-out infinite;
        }

        @keyframes wpFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .wp-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }

          /* Place image at full width center on tablets */
          .wp-img-wrap {
            grid-column: 1 / 3;
            grid-row: 3;
            margin: 20px 0;
            order: 5;
          }

          .wp-card-1 { grid-column: 1; grid-row: 1; }
          .wp-card-2 { grid-column: 2; grid-row: 1; }
          .wp-card-3 { grid-column: 1; grid-row: 2; }
          .wp-card-4 { grid-column: 2; grid-row: 2; }
        }

        @media (max-width: 768px) {
          .wp-sec { padding: 60px 20px; }
          .wp-title { font-size: 32px; }

          .wp-grid {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 24px;
          }

          .wp-card {
            padding: 28px 22px;
          }

          .wp-img-wrap {
            order: 0; /* Show the pointing businessman at the top or center of the flow! */
            margin-bottom: 20px;
          }

          .wp-img {
            max-width: 220px;
          }
        }
      `}</style>

      <section
        className={`wp-sec ${visible ? "visible" : ""}`}
        ref={sectionRef}
      >
        <div className="wp-hd">
          <div className="wp-eyebrow">
            <span className="wp-eyebrow-line" />
            Working Process
            <span className="wp-eyebrow-line" />
          </div>
          <h2 className="wp-title">
            <span className="shiny-text">RiDeal Have Most Unique Working Style</span>
          </h2>
        </div>

        <div className="wp-grid">
          {/* Chronological list of steps in HTML. Grid orders them appropriately on desktop. */}
          {STEPS.map((s, i) => (
            <div
              key={i}
              className={`wp-card wp-card-${s.step}`}
              style={{ transition: visible ? `opacity 0.6s ${i * 0.12}s ease, transform 0.6s ${i * 0.12}s ease` : "" }}
            >
              <span className="wp-badge">{s.step}</span>
              <div className="wp-icon-box">{s.icon}</div>
              <h3 className="wp-card-title">{s.title}</h3>
              <p className="wp-card-desc">{s.desc}</p>
            </div>
          ))}

          {/* Central Pointing Businessman Image */}
          <div className="wp-img-wrap">
            <img
              className="wp-img"
              src="/working-process.png"
              alt="Unique working process"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkingProcess;
