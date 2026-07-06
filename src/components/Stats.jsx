import { useEffect, useRef, useState } from "react";
import {
  FaAward, FaUsers, FaSmile, FaLaptopCode,
} from "react-icons/fa";

const STATS = [
  {
    icon: <FaAward />,
    value: 500,
    suffix: "+",
    label: "Clients",
    color: "#083878",
  },
  {
    icon: <FaUsers />,
    value: 1000,
    suffix: "+",
    label: "Projects",
    color: "#0d4fa0",
  },
  {
    icon: <FaSmile />,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    color: "#1560c0",
  },
  {
    icon: <FaLaptopCode />,
    value: 24,
    suffix: "/7",
    label: "Support",
    color: "#083878",
  },
];

/* animated counter hook */
const useCounter = (target, active, duration = 1800) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
};

const StatCard = ({ icon, value, suffix, label, color, active, delay }) => {
  const count = useCounter(value, active);
  return (
    <div className={`st-card${active ? " visible" : ""}`} style={{ animationDelay: delay }}>
      {/* top accent */}
      <div className="st-accent" style={{ background: color }} />

      {/* icon */}
      <div className="st-icon-wrap" style={{ background: `${color}14`, color }}>
        {icon}
      </div>

      {/* number */}
      <div className="st-number" style={{ color }}>
        {count}{suffix}
      </div>

      {/* label */}
      <div className="st-label">{label}</div>

      {/* bottom glow */}
      <div className="st-glow" style={{ background: `radial-gradient(circle, ${color}18 0%, transparent 70%)` }} />
    </div>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/sections/home-stats")
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data.content)) {
          const icons = [<FaAward />, <FaUsers />, <FaSmile />, <FaLaptopCode />];
          const enriched = data.content.map((item, idx) => ({
            ...item,
            icon: icons[idx] || <FaLaptopCode />
          }));
          setStats(enriched);
        } else {
          setStats(STATS);
        }
      })
      .catch(err => {
        console.warn("CMS Stats loading failed, using static fallback:", err);
        setStats(STATS);
      });
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes stCardIn {
          from { opacity:0; transform:translateY(32px) scale(0.96); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes stPulse {
          0%,100% { transform:scale(1); }
          50%      { transform:scale(1.08); }
        }

        .st-section {
          width: 100%;
          background: #fff;
          padding: 70px 6%;
          font-family: 'Barlow', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* subtle dot grid */
        .st-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(8,56,120,0.05) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        .st-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── CARD ── */
        .st-card {
          background: #fff;
          border: 1.5px solid rgba(8,56,120,0.08);
          border-radius: 20px;
          padding: 36px 24px 28px;
          text-align: center;
          position: relative;
          overflow: hidden;
          opacity: 0;
          cursor: default;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.3s ease,
                      border-color 0.3s ease;
        }

        .st-card.visible {
          animation: stCardIn 0.55s ease both;
        }

        .st-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(8,56,120,0.12);
          border-color: rgba(8,56,120,0.2);
        }

        /* top accent bar */
        .st-accent {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 20px 20px 0 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .st-card:hover .st-accent { transform: scaleX(1); }

        /* bottom glow */
        .st-glow {
          position: absolute;
          bottom: -40px; left: 50%;
          transform: translateX(-50%);
          width: 180px; height: 180px;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .st-card:hover .st-glow { opacity: 1; }

        /* icon */
        .st-icon-wrap {
          width: 64px; height: 64px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          margin: 0 auto 20px;
          transition: transform 0.3s ease, background 0.3s ease;
          position: relative;
          z-index: 1;
        }
        .st-card:hover .st-icon-wrap {
          transform: rotate(-8deg) scale(1.12);
          animation: stPulse 1.5s ease-in-out infinite;
        }

        /* number */
        .st-number {
          font-size: 46px;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
          letter-spacing: -1px;
        }

        /* label */
        .st-label {
          font-size: 15px;
          font-weight: 600;
          color: #6b7280;
          letter-spacing: 0.2px;
          position: relative;
          z-index: 1;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .st-grid { grid-template-columns: repeat(2, 1fr); }
          .st-number { font-size: 38px; }
        }
        @media (max-width: 500px) {
          .st-section { padding: 44px 16px; }
          .st-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .st-number { font-size: 30px; }
          .st-icon-wrap { width: 52px; height: 52px; font-size: 22px; }
        }
        @media (max-width: 360px) {
          .st-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="st-section" ref={ref}>
        <div className="st-grid">
        {stats.map((s, i) => (
            <StatCard
              key={i}
              {...s}
              active={active}
              delay={`${i * 0.1}s`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Stats;
