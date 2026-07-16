import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

import H1 from '../assets/H1.png';
import H2 from '../assets/H2.jpeg';
import H3 from '../assets/H3.jpeg';
import H4 from '../assets/H4.jpeg';

const images = [H2, H3, H4, H1];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Parallax effect values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 2;
    const y = (clientY / window.innerHeight - 0.5) * 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateY = useTransform(smoothX, [-1, 1], [-15, 15]);
  const rotateX = useTransform(smoothY, [-1, 1], [10, -10]);

  // Simple interval to change images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" onMouseMove={handleMouseMove}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&family=Poppins:wght@400;500;600;700;800&display=swap');

        .hero-section {
          min-height: 100vh;
          background-color: #ffffff;
          background-image: radial-gradient(rgba(0, 0, 0, 0.04) 1.5px, transparent 1.5px);
          background-size: 40px 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 5%;
          overflow: hidden;
          position: relative;
          perspective: 1200px;
          -webkit-mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
          mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: -30%;
          right: -10%;
          width: 70vw;
          height: 70vw;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 60%);
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }

        .hero-container {
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          pointer-events: none;
        }
        
        .hero-content * {
          pointer-events: auto;
        }

        .hero-title-wrapper {
          margin-bottom: 25px;
        }

        .hero-title-top {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: clamp(3rem, 5vw, 4.5rem);
          font-weight: 700;
          background: linear-gradient(90deg, #2563eb, #2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.1;
          margin-bottom: 5px;
          padding-right: 10px;
        }

        .hero-title-bottom {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2.5rem, 4.5vw, 4rem);
          font-weight: 800;
          color: #1e293b;
          line-height: 1.1;
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 12px;
        }

        .highlight-word {
          position: relative;
          display: inline-block;
        }

        .highlight-word::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 10px;
          background-image: url("data:image/svg+xml,%3Csvg width='24' height='10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,5 Q6,0 12,5 T24,5' fill='none' stroke='%2310b981' stroke-width='2.5' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: repeat-x;
          background-size: 24px 10px;
        }

        .status-wrapper {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 8px 16px;
          border-radius: 50px;
          margin-bottom: 30px;
          backdrop-filter: blur(10px);
        }

        .status-dot {
          width: 10px;
          height: 10px;
          background: #2563eb;
          border-radius: 50%;
          box-shadow: 0 0 10px #2563eb;
          animation: statusPulse 2s infinite;
        }

        @keyframes statusPulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.5); }
          70% { box-shadow: 0 0 0 10px rgba(37, 99, 235, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
        }

        .status-text {
          color: #475569;
          font-family: 'Poppins', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .hero-description {
          font-family: 'Poppins', sans-serif;
          color: #475569;
          font-size: 1.05rem;
          line-height: 1.6;
          max-width: 480px;
          margin-bottom: 40px;
        }

        .hero-btn-group {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-btn {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          color: #ffffff;
          padding: 16px 32px;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          border: none;
          background: #2563eb;
          box-shadow: 0 0 22px rgba(37, 99, 235, 0.3);
          transition: all 0.3s ease;
        }
        
        .hero-btn:hover {
          background: #1d4ed8;
          box-shadow: 0 0 40px rgba(37, 99, 235, 0.5);
          transform: translateY(-2px);
        }
        .hero-btn:hover svg {
          transform: translate(3px, -3px);
        }
        .hero-btn svg {
          transition: transform 0.3s ease;
        }

        .hero-btn-portfolio {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          color: #2563eb;
          padding: 16px 32px;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1.5px solid rgba(37, 99, 235, 0.5);
          background: rgba(37, 99, 235, 0.07);
          box-shadow: none;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .hero-btn-portfolio:hover {
          background: rgba(37, 99, 235, 0.15);
          border-color: #2563eb;
          box-shadow: 0 0 30px rgba(37, 99, 235, 0.25);
          transform: translateY(-2px);
        }
        .hero-btn-portfolio:hover svg {
          transform: translate(3px, -3px);
        }
        .hero-btn-portfolio svg {
          transition: transform 0.3s ease;
        }

        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          pointer-events: none;
          z-index: 10;
        }

        .image-container {
          width: 100%;
          max-width: 580px;
          aspect-ratio: 16/10;
          border-radius: 16px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1), 0 0 40px rgba(37, 99, 235, 0.05);
          transform-style: preserve-3d;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: transparent;
          position: relative;
          transition: box-shadow 0.4s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .image-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: -150%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%);
          transform: skewX(-25deg);
          z-index: 5;
          pointer-events: none;
        }

        .image-container:hover {
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2), 0 0 80px rgba(37, 99, 235, 0.3);
          border-color: rgba(37, 99, 235, 0.4);
        }

        .image-container:hover::after {
          animation: shine 1.2s ease-in-out;
        }

        @keyframes shine {
          0% { left: -150%; }
          100% { left: 250%; }
        }

        .slide-image {
          width: 100%;
          height: 100%;
          object-fit: fill;
          position: absolute;
          inset: 0;
        }

        @media (max-width: 968px) {
          .hero-container { grid-template-columns: 1fr; text-align: center; }
          .hero-content { align-items: center; }
          .hero-title-bottom { justify-content: center; }
          .hero-description { margin: 0 auto 40px auto; }
          .hero-visual { perspective: none; }
          .image-container { max-width: 100%; margin: 0 auto; transform: none !important; }
        }
      `}</style>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-title-wrapper">
            <div className="hero-title-top">Grow Your Business</div>
            <div className="hero-title-bottom">
              with <span className="highlight-word">AI-Powered</span> Digital Solutions
            </div>
          </div>

          <div className="status-wrapper">
            <div className="status-dot"></div>
            <span className="status-text">Trusted Digital IT Solutions Partner</span>
          </div>

          <p className="hero-description">
            Digital Marketing, Software Development, Business Automation & IT Services — All Under One Roof.
          </p>

          <div className="hero-btn-group">
            <button className="hero-btn" onClick={() => window.location.href = '/contact'}>
              Get Free Consultation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </button>

            <a className="hero-btn-portfolio" href="/portfolio">
              View Portfolio
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
          </div>
        </motion.div>

        <div className="hero-visual">
          <motion.div
            className="image-container"
            style={{ rotateX, rotateY }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Company Graphic"
                className="slide-image"
                initial={{ x: '100%', opacity: 0, scale: 0.95 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: '-100%', opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
