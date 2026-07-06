import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Counter = ({ end, label, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="stat-box">
      <h3 className="stat-number">{count}{suffix}</h3>
      <p className="stat-label">{label}</p>
    </div>
  );
};

const ShowcaseHero = () => {
  return (
    <section className="showcase-hero">
      <style>{`
        .showcase-hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 100px 5%;
          overflow: hidden;
          background: #051432;
        }

        .hero-bg-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 50%, rgba(8, 56, 120, 0.4) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(10, 71, 153, 0.3) 0%, transparent 50%);
          animation: moveGradients 10s infinite alternate ease-in-out;
          z-index: 1;
        }

        @keyframes moveGradients {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.1) translate(20px, -20px); }
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .hero-title {
          font-family: 'Barlow', sans-serif;
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 30px;
          color: #ffffff;
        }

        .hero-title span {
          background: linear-gradient(90deg, #ffffff, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-ctas {
          display: flex;
          gap: 20px;
          margin-bottom: 60px;
        }

        .cta-primary {
          background: #083878;
          color: white;
          padding: 15px 35px;
          border-radius: 8px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          font-family: 'Barlow', sans-serif;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(8, 56, 120, 0.4);
        }

        .cta-primary:hover {
          background: #0a4799;
          transform: translateY(-2px);
        }

        .cta-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: white;
          padding: 15px 35px;
          border-radius: 8px;
          font-weight: 700;
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          font-family: 'Barlow', sans-serif;
          font-size: 16px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .cta-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .stats-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .stat-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 30px;
          border-radius: 16px;
          backdrop-filter: blur(12px);
          text-align: center;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .stat-box:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(8, 56, 120, 0.5);
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          color: #60a5fa;
          margin-bottom: 10px;
          font-family: 'Barlow', sans-serif;
        }

        .stat-label {
          color: #cbd5e1;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 14px;
        }

        /* Floating Glass Elements */
        .glass-float {
          position: absolute;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          z-index: 5;
        }

        .float-1 { width: 120px; height: 120px; top: 15%; right: 10%; animation: floatY 6s infinite ease-in-out; }
        .float-2 { width: 80px; height: 80px; bottom: 20%; left: 5%; animation: floatY 5s infinite ease-in-out reverse; border-radius: 50%; }

        @keyframes floatY {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
          .hero-ctas { flex-direction: column; }
          .stats-container { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="hero-bg-gradient"></div>
      
      <div className="glass-float float-1"></div>
      <div className="glass-float float-2"></div>

      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Building Digital Experiences <br/>
          <span>for Future Businesses</span>
        </motion.h1>

        <motion.div 
          className="hero-ctas"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button className="cta-primary" onClick={() => document.getElementById('showcase-portfolio').scrollIntoView({behavior: 'smooth'})}>
            View Portfolio
          </button>
          <button className="cta-secondary" onClick={() => document.getElementById('showcase-services').scrollIntoView({behavior: 'smooth'})}>
            Our Services
          </button>
        </motion.div>

        <motion.div 
          className="stats-container"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Counter end={250} label="Projects Completed" suffix="+" />
          <Counter end={120} label="Happy Clients" suffix="+" />
          <Counter end={45} label="Team Members" suffix="+" />
          <Counter end={99} label="Success Rate" suffix="%" />
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseHero;
