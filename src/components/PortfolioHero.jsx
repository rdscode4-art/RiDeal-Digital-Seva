import { motion } from 'framer-motion';

const PortfolioHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '30+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&display=swap" rel="stylesheet" />
      <style>{`
        .ph-section {
          width: 100%;
          min-height: 80vh;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          background: #0a0f1e;
          overflow: hidden;
          padding: 120px 5% 80px;
        }

        /* Grid dot background */
        .ph-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(37, 99, 235, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.06) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: 0;
        }

        /* Glow blob */
        .ph-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0) 70%);
          top: -150px;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
          z-index: 1;
          animation: phPulse 4s ease-in-out infinite;
        }

        @keyframes phPulse {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.8; }
          50% { transform: translateX(-50%) scale(1.15); opacity: 1; }
        }

        .ph-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 900px;
          width: 100%;
        }

        .ph-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border-radius: 50px;
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.3);
          color: #60a5fa;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .ph-badge-dot {
          width: 7px;
          height: 7px;
          background: #2563eb;
          border-radius: 50%;
          display: inline-block;
          animation: phBlink 1.5s ease-in-out infinite;
          box-shadow: 0 0 8px rgba(37, 99, 235, 0.8);
        }

        @keyframes phBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .ph-title {
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.08;
          margin-bottom: 28px;
          letter-spacing: -0.03em;
        }

        .ph-title-highlight {
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline;
        }

        .ph-subtitle {
          font-size: 1.1rem;
          color: #8899b0;
          line-height: 1.7;
          max-width: 560px;
          margin: 0 auto 50px;
          font-weight: 400;
        }

        /* Stats bar */
        .ph-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0;
          flex-wrap: wrap;
          border: 1px solid rgba(37, 99, 235, 0.15);
          border-radius: 20px;
          overflow: hidden;
          max-width: 720px;
          margin: 0 auto;
          background: rgba(37, 99, 235, 0.04);
          backdrop-filter: blur(20px);
        }

        .ph-stat {
          flex: 1;
          min-width: 150px;
          padding: 28px 20px;
          text-align: center;
          border-right: 1px solid rgba(37, 99, 235, 0.1);
          transition: background 0.3s ease;
        }

        .ph-stat:last-child { border-right: none; }

        .ph-stat:hover {
          background: rgba(37, 99, 235, 0.08);
        }

        .ph-stat-value {
          font-size: 2.2rem;
          font-weight: 900;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }

        .ph-stat-label {
          font-size: 0.78rem;
          color: #5a7096;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        /* Scroll indicator */
        .ph-scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          z-index: 2;
        }

        .ph-scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, #2563eb, transparent);
          animation: phScrollDown 1.8s ease-in-out infinite;
        }

        @keyframes phScrollDown {
          0% { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); transform-origin: top; }
          100% { opacity: 0; transform: scaleY(1); transform-origin: bottom; }
        }

        .ph-scroll-label {
          font-size: 10px;
          color: #3d5a80;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .ph-section { padding: 100px 5% 60px; min-height: 70vh; }
          .ph-stats { border-radius: 16px; }
          .ph-stat { min-width: 130px; padding: 20px 14px; }
          .ph-stat-value { font-size: 1.8rem; }
        }

        @media (max-width: 480px) {
          .ph-stats { max-width: 100%; }
          .ph-stat { min-width: calc(50% - 1px); border-bottom: 1px solid rgba(37, 99, 235, 0.1); }
          .ph-stat:nth-child(2) { border-right: none; }
        }
      `}</style>

      <section className="ph-section">
        <div className="ph-glow" />

        <motion.div
          className="ph-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="ph-badge">
              <span className="ph-badge-dot" />
              Our Portfolio
            </span>
          </motion.div>

          <motion.h1 className="ph-title" variants={itemVariants}>
            Projects That{' '}
            <span className="ph-title-highlight">Define</span>
            <br />
            Digital Excellence
          </motion.h1>

          <motion.p className="ph-subtitle" variants={itemVariants}>
            Har project ek nahi soch ka nateeja hai — we craft digital experiences jo brands ko aage lekar jaati hain aur users ke dilon mein ghar kar jaati hain.
          </motion.p>

          <motion.div className="ph-stats" variants={itemVariants}>
            {stats.map((s, i) => (
              <div className="ph-stat" key={i}>
                <div className="ph-stat-value">{s.value}</div>
                <div className="ph-stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="ph-scroll-indicator">
          <span className="ph-scroll-label">Scroll</span>
          <div className="ph-scroll-line" />
        </div>
      </section>
    </>
  );
};

export default PortfolioHero;
