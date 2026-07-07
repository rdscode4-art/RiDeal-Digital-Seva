import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaLaptopCode, FaCloud, FaDatabase, FaCode } from "react-icons/fa";
import heroImg from "../assets/hero-removebg-preview.png";

const HeroSection = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

        .hero {
          width: 100%;
          min-height: 90vh;
          background: linear-gradient(135deg, #090e17 0%, #16123a 100%);
          display: flex;
          align-items: center;
          padding: 80px 8% 60px;
          overflow: hidden;
          position: relative;
          font-family: 'Outfit', sans-serif;
          color: white;
        }

        /* Ambient Glows */
        .glow-1 {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
          top: -200px;
          left: -200px;
          border-radius: 50%;
          pointer-events: none;
        }
        .glow-2 {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
          bottom: -300px;
          right: -100px;
          border-radius: 50%;
          pointer-events: none;
        }
        
        .hero-container {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 60px;
          position: relative;
          z-index: 2;
        }

        .hero-left {
          width: 50%;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        .hero-left.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .badge {
          display: inline-block;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: #60a5fa;
          backdrop-filter: blur(10px);
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 24px;
          text-transform: uppercase;
        }

        .hero-title {
          font-size: 56px;
          line-height: 1.15;
          font-weight: 800;
          margin-bottom: 24px;
          background: #ffffff;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-desc {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 40px;
          max-width: 90%;
        }

        .cta-button-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 14px 28px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
        }
        
        .cta-button.primary {
          background: linear-gradient(135deg, #4f46e5 0%, #2563eb 100%);
          color: white;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 10px 25px rgba(79, 70, 229, 0.4);
        }
        .cta-button.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(37, 99, 235, 0.4);
        }

        .cta-button.secondary {
          background: transparent;
          color: white;
          border: 1px solid rgba(255,255,255,0.4);
        }
        .cta-button.secondary:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-3px);
          border-color: white;
        }

        .cta-arrow {
          font-size: 16px;
          transition: transform 0.3s ease;
        }
        .cta-button:hover .cta-arrow {
          transform: translateX(4px) translateY(-4px);
        }

        .stats-container {
          display: flex;
          align-items: center;
          margin-top: 60px;
          gap: 40px;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
        }
        .stat-number {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 4px;
        }
        .stat-label {
          font-size: 14px;
          color: rgba(255,255,255,0.7);
        }
        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.2);
        }

        .hero-right {
          width: 50%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s ease 0.2s;
        }
        .hero-right.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .hero-image {
          width: 100%;
          max-width: 550px;
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2));
          animation: floatHero 6s ease-in-out infinite;
        }

        @keyframes floatHero {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        /* Floating elements */
        @keyframes float1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-10deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }

        .float-icon {
          position: absolute;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
          z-index: 3;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }
        .icon-laptop {
          top: 15%;
          left: 5%;
          width: 50px;
          height: 50px;
          font-size: 22px;
          animation: float1 5s ease-in-out infinite;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.8), rgba(37, 99, 235, 0.8));
        }
        .icon-cloud {
          top: 10%;
          right: 15%;
          width: 60px;
          height: 60px;
          font-size: 26px;
          animation: float2 6s ease-in-out infinite;
          transform: rotate(10deg);
          background: linear-gradient(135deg, rgba(14, 165, 233, 0.8), rgba(2, 132, 199, 0.8));
        }
        .icon-code {
          bottom: 30%;
          right: -5%;
          width: 55px;
          height: 55px;
          font-size: 24px;
          animation: float3 4.5s ease-in-out infinite;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.8));
        }
        .icon-database {
          bottom: 25%;
          left: -5%;
          width: 45px;
          height: 45px;
          font-size: 20px;
          animation: float1 5.5s ease-in-out infinite;
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.8), rgba(217, 119, 6, 0.8));
        }

        .tech-card {
          position: absolute;
          bottom: -10px;
          left: 15%;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          z-index: 4;
          animation: float1 7s ease-in-out infinite;
          width: 260px;
        }
        .tech-card h4 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 15px;
          line-height: 1.3;
          color: white;
        }
        .avatars {
          display: flex;
          align-items: center;
        }
        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid white;
          margin-left: -10px;
          background: #e2e8f0;
          object-fit: cover;
        }
        .avatar:first-child { margin-left: 0; }
        .avatar-more {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid white;
          margin-left: -10px;
          background: #4f46e5;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: bold;
        }
        .client-count {
          margin-left: 15px;
          font-size: 12px;
          font-weight: 600;
          color: white;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .client-count-num {
          border-bottom: 1px solid rgba(255,255,255,0.3);
          padding-bottom: 2px;
          font-size: 14px;
        }
        .client-count-text {
          font-size: 12px;
          color: rgba(255,255,255,0.7);
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .hero-container {
            flex-direction: column;
            text-align: center;
          }
          .hero-left, .hero-right { width: 100%; }
          .hero-title { font-size: 48px; }
          .hero-desc { margin: 0 auto 30px; }
          .stats-container {
            justify-content: center;
          }
          .tech-card { left: 50%; transform: translateX(-50%); bottom: -40px; }
        }
        @media (max-width: 768px) {
          .hero { padding: 100px 5% 60px; }
          .hero-title { font-size: 36px; }
          .stats-container { flex-wrap: wrap; gap: 20px; }
          .stat-divider { display: none; }
          .stat-item { flex: 1 1 40%; }
          .icon-target, .icon-megaphone, .icon-check { display: none; }
        }
      `}</style>

      <section className="hero">
        <div className="glow-1"></div>
        <div className="glow-2"></div>

        <div className="hero-container">
          {/* Left Content */}
          <div className={`hero-left ${visible ? 'visible' : ''}`}>
            <div className="badge">
              IT SOLUTIONS FOR A SMARTER FUTURE
            </div>

            <h1 className="hero-title">
              IT Solutions For A<br />Digital-First World
            </h1>

            <p className="hero-desc">
              Empower your business with cutting technology solutions<br />
              tailored to meet your unique needs from cloud computing.
            </p>

            <div className="cta-button-group">
              <button className="cta-button primary" onClick={() => navigate('/contact')}>
                BOOK A FREE CONSULTATION
                <span className="cta-arrow">↗</span>
              </button>
              <button className="cta-button secondary" onClick={() => navigate('/portfolio')}>
                VIEW PORTFOLIO
                <span className="cta-arrow">↗</span>
              </button>
            </div>

            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Total Projects</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Expert Team</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className={`hero-right ${visible ? 'visible' : ''}`}>
            <div className="float-icon icon-laptop"><FaLaptopCode /></div>
            <div className="float-icon icon-cloud"><FaCloud /></div>
            <div className="float-icon icon-code"><FaCode /></div>
            <div className="float-icon icon-database"><FaDatabase /></div>

            <img
              src={heroImg}
              alt="Hero"
              className="hero-image"
            />

            <div className="tech-card">
              <h4>Worked With More Than 100+ Technology</h4>
              <div className="avatars">
                <img src="https://i.pravatar.cc/100?img=1" className="avatar" alt="user" />
                <img src="https://i.pravatar.cc/100?img=2" className="avatar" alt="user" />
                <img src="https://i.pravatar.cc/100?img=3" className="avatar" alt="user" />
                <div className="avatar-more">+</div>
                <div className="client-count">
                  <span className="client-count-num">100+</span>
                  <span className="client-count-text">Clients</span>
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

