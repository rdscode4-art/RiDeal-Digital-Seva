import { Link } from "react-router-dom";
import { FaArrowRight, FaBell } from "react-icons/fa";

const ComingSoon = () => (
  <>
    <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

    <style>{`
      @keyframes csFloat  { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-12px); } }
      @keyframes csPulse  { 0%,100% { box-shadow:0 0 0 0 rgba(37, 99, 235,0.3); } 50% { box-shadow:0 0 0 16px rgba(37, 99, 235,0); } }
      @keyframes csSpin   { to { transform:rotate(360deg); } }
      @keyframes csFadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }

      .cs-soon-section {
        width: 100%;
        min-height: 60vh;
        background: #f0f4ff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Barlow', sans-serif;
        padding: 80px 6%;
        position: relative;
        overflow: hidden;
      }

      /* dot-grid bg */
      .cs-soon-section::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: radial-gradient(rgba(37, 99, 235,0.06) 1px, transparent 1px);
        background-size: 30px 30px;
        pointer-events: none;
      }

      /* glowing orbs */
      .cs-soon-orb {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
      }
      .cs-soon-orb-1 {
        width: 400px; height: 400px;
        background: radial-gradient(circle, rgba(37, 99, 235,0.07) 0%, transparent 65%);
        top: -120px; left: -120px;
      }
      .cs-soon-orb-2 {
        width: 320px; height: 320px;
        background: radial-gradient(circle, rgba(37, 99, 235,0.06) 0%, transparent 65%);
        bottom: -80px; right: -80px;
      }

      .cs-soon-inner {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 24px;
        animation: csFadeUp 0.7s ease both;
      }

      /* icon */
      .cs-soon-icon-wrap {
        width: 100px; height: 100px;
        border-radius: 28px;
        background: linear-gradient(135deg, #2563eb, #2563eb);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 42px;
        color: #fff;
        box-shadow: 0 16px 48px rgba(37, 99, 235,0.3);
        animation: csFloat 4s ease-in-out infinite, csPulse 3s ease-in-out infinite;
      }

      /* spinning ring around icon */
      .cs-soon-ring {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 8px;
      }
      .cs-soon-ring::before {
        content: '';
        position: absolute;
        width: 130px; height: 130px;
        border-radius: 50%;
        border: 2px dashed rgba(37, 99, 235,0.2);
        animation: csSpin 12s linear infinite;
      }
      .cs-soon-ring::after {
        content: '';
        position: absolute;
        width: 155px; height: 155px;
        border-radius: 50%;
        border: 1.5px dashed rgba(37, 99, 235,0.1);
        animation: csSpin 20s linear infinite reverse;
      }

      .cs-soon-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: rgba(37, 99, 235,0.08);
        color: #2563eb;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 2.5px;
        text-transform: uppercase;
        padding: 7px 18px;
        border-radius: 40px;
        border: 1px solid rgba(37, 99, 235,0.15);
      }

      .cs-soon-heading {
        font-size: 56px;
        font-weight: 900;
        color: #0a0f1e;
        line-height: 1.1;
        letter-spacing: 1px;
      }
      .cs-soon-heading span {
        color: #2563eb;
        position: relative;
      }
      .cs-soon-heading span::after {
        content: '';
        position: absolute;
        bottom: -4px; left: 0;
        width: 100%; height: 3px;
        background: linear-gradient(90deg, #2563eb, #2563eb);
        border-radius: 4px;
      }

      .cs-soon-desc {
        font-size: 17px;
        color: #6b7280;
        line-height: 1.8;
        max-width: 520px;
      }

      /* dots row */
      .cs-soon-dots {
        display: flex;
        gap: 10px;
        align-items: center;
      }
      .cs-soon-dot {
        width: 10px; height: 10px;
        border-radius: 50%;
        background: #2563eb;
        opacity: 0.2;
        animation: csPulse 1.8s ease-in-out infinite;
      }
      .cs-soon-dot:nth-child(2) { animation-delay: 0.3s; opacity: 0.5; }
      .cs-soon-dot:nth-child(3) { animation-delay: 0.6s; opacity: 0.8; }

      .cs-soon-btn {
        display: inline-flex;
        align-items: center;
        gap: 9px;
        height: 52px;
        padding: 0 30px;
        background: linear-gradient(135deg, #2563eb, #2563eb);
        color: #fff;
        font-size: 15px;
        font-weight: 700;
        font-family: 'Barlow', sans-serif;
        border-radius: 50px;
        text-decoration: none;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
        box-shadow: 0 8px 28px rgba(37, 99, 235,0.3);
        letter-spacing: 0.2px;
        margin-top: 8px;
      }
      .cs-soon-btn:hover { transform:translateY(-3px); box-shadow:0 16px 40px rgba(37, 99, 235,0.42); }
      .cs-soon-btn svg { transition: transform 0.25s ease; }
      .cs-soon-btn:hover svg { transform: translateX(4px); }

      @media (max-width:768px) {
        .cs-soon-heading { font-size:36px; }
        .cs-soon-desc { font-size:15px; }
        .cs-soon-section { padding:60px 20px; min-height:50vh; }
      }
    `}</style>

    <section className="cs-soon-section">
      <div className="cs-soon-orb cs-soon-orb-1" />
      <div className="cs-soon-orb cs-soon-orb-2" />

      <div className="cs-soon-inner">

        <div className="cs-soon-ring">
          <div className="cs-soon-icon-wrap">
            <FaBell />
          </div>
        </div>

        <div className="cs-soon-badge">
          ✦ Stay Tuned
        </div>

        <h2 className="cs-soon-heading">
          Coming <span>Soon</span>
        </h2>

        <p className="cs-soon-desc">
          We're working hard to bring you insightful articles, industry
          trends, and expert tips on IT, digital marketing, ERP, and more.
          Our blog will be live very soon!
        </p>

        <div className="cs-soon-dots">
          <div className="cs-soon-dot" />
          <div className="cs-soon-dot" />
          <div className="cs-soon-dot" />
        </div>

        <Link to="/contact" className="cs-soon-btn">
          Get Notified <FaArrowRight />
        </Link>

      </div>
    </section>
  </>
);

export default ComingSoon;
