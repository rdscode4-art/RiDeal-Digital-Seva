import React, { useState, useEffect } from 'react';
import { FaCrown, FaMagic, FaBullseye, FaBolt, FaChevronDown } from 'react-icons/fa';

const ValueMatrix = () => {
  const [activeQuad, setActiveQuad] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuad(prev => (prev === 4 ? 1 : prev + 1));
    }, 3000); // Cycle every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .vm-sec {
          width: 100%;
          background: #ffffff;
          padding: 60px 5%;
          font-family: 'Barlow', sans-serif;
          position: relative;
          color: #0a0f1e;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Ambient section glows for white background */
        .vm-sec::before {
          content: '';
          position: absolute;
          top: 50%; left: 0%;
          transform: translateY(-50%);
          width: 400px; height: 600px;
          background: radial-gradient(ellipse, rgba(37, 99, 235, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .vm-sec::after {
          content: '';
          position: absolute;
          top: 50%; right: 0%;
          transform: translateY(-50%);
          width: 400px; height: 600px;
          background: radial-gradient(ellipse, rgba(37, 99, 235, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .vm-wrapper {
          position: relative;
          width: 100%;
          max-width: 1100px;
          padding: 60px;
        }

        /* Main Header */
        .vm-main-header {
          text-align: center;
          margin-bottom: 40px;
          position: relative;
          z-index: 2;
        }
        .vm-main-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: #0a0f1e;
          margin: 0 0 15px 0;
          letter-spacing: -1px;
        }
        .vm-main-title span {
          background: linear-gradient(90deg, #2563eb, #2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-style: italic;
          font-weight: 700;
          padding-right: 10px;
        }
        .vm-main-subtitle {
          font-size: 1.15rem;
          color: #4b5563;
          margin: 0;
        }

        /* Outside Axis Labels */
        .vm-axis-label {
          position: absolute;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 4px;
          color: #4b5563;
          text-transform: uppercase;
        }
        .vm-axis-top { top: 10px; left: 50%; transform: translateX(-50%); }
        .vm-axis-bottom { bottom: 10px; left: 50%; transform: translateX(-50%); }
        .vm-axis-left { left: 10px; top: 50%; transform: translateY(-50%) rotate(-90deg); }
        .vm-axis-right { right: 10px; top: 50%; transform: translateY(-50%) rotate(90deg); }

        /* Matrix Container Area */
        .vm-matrix-area {
          position: relative;
          padding: 30px;
        }

        /* Matrix Container */
        .vm-matrix {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background-color: #0b0d17;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          overflow: hidden;
        }
        
        /* Inner Dot Grid */
        .vm-matrix::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px);
          background-size: 25px 25px;
          pointer-events: none;
          z-index: 0;
          opacity: 0.5;
        }

        /* Center Dot */
        .vm-center-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          background: white;
          border: 3px solid #000;
          border-radius: 50%;
          z-index: 10;
        }

        /* Individual Quadrants */
        .vm-quad {
          padding: 60px 50px;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: background-image 0.6s ease, background-color 0.6s ease;
        }

        /* Quadrant Borders */
        .vm-quad-1 { border-right: 1px solid rgba(255, 255, 255, 0.1); border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
        .vm-quad-2 { border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
        .vm-quad-3 { border-right: 1px solid rgba(255, 255, 255, 0.1); }
        .vm-quad-4 { }

        /* Quadrant Background Glows - Default subtle */
        .vm-quad-1 { background-image: radial-gradient(circle at top left, rgba(29, 78, 216, 0.05) 0%, transparent 70%); }
        .vm-quad-2 { background-image: radial-gradient(circle at top right, rgba(190, 24, 93, 0.05) 0%, transparent 70%); }
        .vm-quad-3 { background-image: radial-gradient(circle at bottom left, rgba(180, 83, 9, 0.05) 0%, transparent 70%); }
        .vm-quad-4 { background-image: radial-gradient(circle at bottom right, rgba(21, 128, 61, 0.05) 0%, transparent 70%); }

        /* Active Auto-Hover states */
        .vm-quad-1.active, .vm-quad-1:hover { background-image: radial-gradient(circle at top left, rgba(29, 78, 216, 0.25) 0%, transparent 80%); }
        .vm-quad-2.active, .vm-quad-2:hover { background-image: radial-gradient(circle at top right, rgba(190, 24, 93, 0.25) 0%, transparent 80%); }
        .vm-quad-3.active, .vm-quad-3:hover { background-image: radial-gradient(circle at bottom left, rgba(180, 83, 9, 0.25) 0%, transparent 80%); }
        .vm-quad-4.active, .vm-quad-4:hover { background-image: radial-gradient(circle at bottom right, rgba(21, 128, 61, 0.25) 0%, transparent 80%); }

        /* Content Styling */
        .vm-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .vm-icon {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          font-size: 14px;
          transition: all 0.4s ease;
        }
        
        .vm-quad-1 .vm-icon { background: rgba(37, 99, 235, 0.1); color: #2563eb; border: 1px solid rgba(37, 99, 235, 0.2); }
        .vm-quad-2 .vm-icon { background: rgba(244, 63, 94, 0.1); color: #fb7185; border: 1px solid rgba(244, 63, 94, 0.2); }
        .vm-quad-3 .vm-icon { background: rgba(245, 158, 11, 0.1); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.2); }
        .vm-quad-4 .vm-icon { background: rgba(34, 197, 94, 0.1); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.2); }

        /* Icon Glows on Active */
        .vm-quad-1.active .vm-icon, .vm-quad-1:hover .vm-icon { transform: scale(1.1); box-shadow: 0 0 15px rgba(37, 99, 235, 0.5); }
        .vm-quad-2.active .vm-icon, .vm-quad-2:hover .vm-icon { transform: scale(1.1); box-shadow: 0 0 15px rgba(244, 63, 94, 0.5); }
        .vm-quad-3.active .vm-icon, .vm-quad-3:hover .vm-icon { transform: scale(1.1); box-shadow: 0 0 15px rgba(245, 158, 11, 0.5); }
        .vm-quad-4.active .vm-icon, .vm-quad-4:hover .vm-icon { transform: scale(1.1); box-shadow: 0 0 15px rgba(34, 197, 94, 0.5); }

        .vm-label {
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #9ca3af;
        }

        .vm-mobile-chevron {
          display: none;
        }.vm-quad-1 .vm-label { color: #2563eb; }
        .vm-quad-2 .vm-label { color: #fb7185; }
        .vm-quad-3 .vm-label { color: #fbbf24; }
        .vm-quad-4 .vm-label { color: #4ade80; }

        .vm-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 15px 0;
          color: #0a0f1e;
        }

        .vm-title span {
          font-style: italic;
          font-weight: 500;
          color: inherit;
        }
        
        /* Unique Title Highlights */
        .vm-quad-1 .vm-title span { color: #93c5fd; }
        .vm-quad-2 .vm-title { color: #9ca3af; }
        .vm-quad-3 .vm-title span { font-weight: 700; color: #9ca3af; }
        .vm-quad-3 .vm-title { color: #6b7280; font-weight: 500; }
        .vm-quad-4 .vm-title span { font-weight: 700; color: #9ca3af; }
        .vm-quad-4 .vm-title { color: #6b7280; font-weight: 500; }

        .vm-mobile-chevron {
          display: none;
        }

        .vm-desc {
          font-size: 1rem;
          line-height: 1.6;
          color: #4b5563;
          margin: 0;
          max-width: 90%;
        }
        
        /* Q1 Floating Layers */
        .vm-layers-widget {
          position: absolute;
          bottom: 35px; right: 40px;
          width: 50px; height: 50px;
          perspective: 200px;
        }
        .vm-layer {
          position: absolute;
          width: 40px; height: 20px;
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.4);
          border-radius: 4px;
          transform: rotateX(60deg) rotateZ(-45deg);
          animation: floatLayer 3s infinite ease-in-out;
        }
        .vm-layer-1 { bottom: 0; animation-delay: 0s; }
        .vm-layer-2 { bottom: 12px; background: rgba(37, 99, 235, 0.3); border-color: rgba(37, 99, 235, 0.7); animation-delay: 0.2s; }
        .vm-layer-3 { bottom: 24px; background: rgba(37, 99, 235, 0.6); border-color: #2563eb; box-shadow: 0 5px 15px rgba(37, 99, 235, 0.8); animation-delay: 0.4s; }

        @keyframes floatLayer {
          0%, 100% { transform: translateY(0) rotateX(60deg) rotateZ(-45deg); }
          50% { transform: translateY(-10px) rotateX(60deg) rotateZ(-45deg); }
        }

        /* Q2 Pulse Network */
        .vm-network-widget {
          position: absolute;
          bottom: 35px; right: 40px;
          width: 60px; height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .vm-node {
          border-radius: 50%;
          background: #fb7185;
          box-shadow: 0 0 10px #fb7185;
        }
        .vm-node-center {
          width: 14px; height: 14px;
          animation: pulseNode 2s infinite;
        }
        .vm-node-orbit {
          position: absolute;
          width: 100%; height: 100%;
          border: 1px dashed rgba(244, 63, 94, 0.3);
          border-radius: 50%;
          animation: spinOrbit 5s linear infinite;
        }
        .vm-node-1 { position: absolute; top: -4px; left: 50%; width: 8px; height: 8px; transform: translateX(-50%); }
        .vm-node-2 { position: absolute; bottom: 8px; right: -2px; width: 6px; height: 6px; }

        @keyframes pulseNode {
          0% { transform: scale(1); box-shadow: 0 0 10px #fb7185; }
          50% { transform: scale(1.3); box-shadow: 0 0 25px rgba(244, 63, 94, 0.8); }
          100% { transform: scale(1); box-shadow: 0 0 10px #fb7185; }
        }
        @keyframes spinOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Q3 Chevron Flow */
        .vm-chevron-widget {
          position: absolute;
          bottom: 45px; right: 45px;
          display: flex;
          gap: 6px;
        }
        .vm-chevron {
          width: 14px; height: 14px;
          border-top: 3px solid #fbbf24;
          border-right: 3px solid #fbbf24;
          transform: rotate(45deg);
          opacity: 0.2;
          animation: chevronFlow 1.5s infinite;
        }
        .vm-chevron.c1 { animation-delay: 0s; }
        .vm-chevron.c2 { animation-delay: 0.2s; }
        .vm-chevron.c3 { animation-delay: 0.4s; }

        @keyframes chevronFlow {
          0% { opacity: 0.2; transform: rotate(45deg) scale(1); }
          50% { opacity: 1; transform: rotate(45deg) scale(1.2); box-shadow: 3px -3px 10px rgba(245, 158, 11, 0.4); }
          100% { opacity: 0.2; transform: rotate(45deg) scale(1); }
        }

        /* Q4 Expanding Ripple */
        .vm-ripple-widget {
          position: absolute;
          bottom: 45px; right: 45px;
          width: 10px; height: 10px;
        }
        .vm-ripple {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          border: 2px solid #4ade80;
          border-radius: 50%;
          animation: rippleExpand 2s infinite cubic-bezier(0.1, 0.8, 0.3, 1);
          opacity: 0;
        }
        .vm-ripple.r1 { animation-delay: 0s; }
        .vm-ripple.r2 { animation-delay: 0.4s; }
        .vm-ripple.r3 { animation-delay: 0.8s; }

        @keyframes rippleExpand {
          0% { width: 0; height: 0; opacity: 1; }
          100% { width: 70px; height: 70px; opacity: 0; border-width: 0px; }
        }

        .vm-slider-dots { display: none; }

        @media (max-width: 768px) {
          .vm-sec { padding: 60px 15px; background: #ffffff; }
          .vm-wrapper { padding: 10px 0; }
          
          .vm-matrix {
            display: flex;
            flex-direction: column;
            gap: 24px;
            width: 100%;
            background: transparent;
            box-shadow: none;
            border: none;
            position: relative;
            padding-left: 36px; /* Space for the timeline */
          }
          
          /* The vertical timeline track */
          .vm-matrix::before {
            content: '';
            position: absolute;
            top: 20px;
            bottom: 20px;
            left: 9px;
            width: 2px;
            background: rgba(0, 0, 0, 0.1);
            display: block;
          }
          
          .vm-center-dot { display: none; }
          .vm-axis-left, .vm-axis-right, .vm-axis-top, .vm-axis-bottom { display: none; }
          
          .vm-quad { 
            width: 100%;
            background-color: #0a0d1c;
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            padding: 24px; 
            transition: all 0.3s ease;
            position: relative;
            overflow: visible; /* Changed to visible for timeline dots */
          }
          
          /* Timeline dots on each quad */
          .vm-quad::before {
            content: '';
            position: absolute;
            left: -33px; /* Center over track at left: 9px */
            top: 36px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #0a0d1c;
            border: 2px solid;
            z-index: 2;
            transition: all 0.3s ease;
          }
          .vm-quad-1::before { border-color: #2563eb; }
          .vm-quad-2::before { border-color: #f43f5e; }
          .vm-quad-3::before { border-color: #f59e0b; }
          .vm-quad-4::before { border-color: #22c55e; }
          
          /* Make dots glow when active */
          .vm-quad-1.active::before { background: #2563eb; box-shadow: 0 0 10px #2563eb; }
          .vm-quad-2.active::before { background: #f43f5e; box-shadow: 0 0 10px #f43f5e; }
          .vm-quad-3.active::before { background: #f59e0b; box-shadow: 0 0 10px #f59e0b; }
          .vm-quad-4.active::before { background: #22c55e; box-shadow: 0 0 10px #22c55e; }
          
          /* All cards have fixed soft glowing borders on mobile */
          .vm-quad-1 { border-color: rgba(37, 99, 235, 0.2); }
          .vm-quad-2 { border-color: rgba(244, 63, 94, 0.2); }
          .vm-quad-3 { border-color: rgba(245, 158, 11, 0.2); }
          .vm-quad-4 { border-color: rgba(34, 197, 94, 0.2); }
          
          /* Active Neon Highlights */
          .vm-quad-1.active { border-color: rgba(37, 99, 235, 0.5); box-shadow: inset 0 20px 40px -20px rgba(37, 99, 235, 0.15); }
          .vm-quad-2.active { border-color: rgba(244, 63, 94, 0.5); box-shadow: inset 0 20px 40px -20px rgba(244, 63, 94, 0.15); }
          .vm-quad-3.active { border-color: rgba(245, 158, 11, 0.5); box-shadow: inset 0 20px 40px -20px rgba(245, 158, 11, 0.15); }
          .vm-quad-4.active { border-color: rgba(34, 197, 94, 0.5); box-shadow: inset 0 20px 40px -20px rgba(34, 197, 94, 0.15); }

          /* All content visible by default (no accordion) */
          .vm-mobile-chevron { display: none; }
          
          .vm-layers-widget, .vm-network-widget, .vm-chevron-widget, .vm-ripple-widget { 
            transform: scale(0.5);
            bottom: 10px; 
            right: 10px;
            transform-origin: bottom right;
          }
          
          .vm-main-title { font-size: 2.2rem; color: #0a0f1e; }
          .vm-main-subtitle { color: #4b5563; }
          .vm-title { font-size: 1.5rem; color: #ffffff; }
          .vm-quad-2 .vm-title, .vm-quad-3 .vm-title, .vm-quad-4 .vm-title { color: #ffffff; }
          .vm-desc { color: #9ca3af; }
        }
      `}</style>
      
      <section className="vm-sec">
        <div className="vm-wrapper">
          
          <div className="vm-main-header">
            <h2 className="vm-main-title">Powering Businesses With <span>Smart Digital Solutions</span></h2>
            <p className="vm-main-subtitle">RiDeal Digital Seva combines cutting-edge technology with deep domain expertise to deliver IT services, ERP systems, digital marketing, and AI-driven automation — helping businesses scale faster.</p>
          </div>

          <div className="vm-matrix-area">
            <div className="vm-axis-label vm-axis-top">Usability</div>
            <div className="vm-axis-label vm-axis-bottom">Performance</div>
            <div className="vm-axis-label vm-axis-left">Human</div>
            <div className="vm-axis-label vm-axis-right">Machine</div>

            <div className="vm-matrix" data-active={activeQuad}>
            <div className="vm-center-dot"></div>

            {/* Q1 */}
            <div 
              className={`vm-quad vm-quad-1 ${activeQuad === 1 ? 'active' : ''}`}
              onMouseEnter={() => setActiveQuad(1)}
              onClick={() => setActiveQuad(1)}
            >
              <div className="vm-header">
                <div className="vm-icon"><FaCrown /></div>
                <div className="vm-label">Expertise</div>
              </div>
              <h3 className="vm-title">Certified <span>Professionals</span></h3>
              <p className="vm-desc">
                We have a team of certified IT professionals offering expert guidance and high-quality development.
              </p>
              {/* New Floating Layers Widget */}
              <div className="vm-layers-widget">
                <div className="vm-layer vm-layer-1"></div>
                <div className="vm-layer vm-layer-2"></div>
                <div className="vm-layer vm-layer-3"></div>
              </div>
            </div>

            {/* Q2 */}
            <div 
              className={`vm-quad vm-quad-2 ${activeQuad === 2 ? 'active' : ''}`}
              onMouseEnter={() => setActiveQuad(2)}
              onClick={() => setActiveQuad(2)}
            >
              <div className="vm-header">
                <div className="vm-icon"><FaMagic /></div>
                <div className="vm-label">Trust</div>
              </div>
              <h3 className="vm-title">Transparent <span>Pricing</span></h3>
              <p className="vm-desc">
                We ensure clear communication with no hidden fees, so you always know what you're paying for.
              </p>
              
              {/* New Pulse Network Widget */}
              <div className="vm-network-widget">
                <div className="vm-node vm-node-center"></div>
                <div className="vm-node-orbit">
                  <div className="vm-node vm-node-1"></div>
                  <div className="vm-node vm-node-2"></div>
                </div>
              </div>
            </div>

            {/* Q3 */}
            <div 
              className={`vm-quad vm-quad-3 ${activeQuad === 3 ? 'active' : ''}`}
              onMouseEnter={() => setActiveQuad(3)}
              onClick={() => setActiveQuad(3)}
            >
              <div className="vm-header">
                <div className="vm-icon"><FaBullseye /></div>
                <div className="vm-label">Delivery</div>
              </div>
              <h3 className="vm-title"><span>Agile</span> Development</h3>
              <p className="vm-desc">
                Our agile approach ensures fast, adaptive, and quality delivery of all your digital projects.
              </p>
              
              {/* New Chevron Flow Widget */}
              <div className="vm-chevron-widget">
                <div className="vm-chevron c1"></div>
                <div className="vm-chevron c2"></div>
                <div className="vm-chevron c3"></div>
              </div>
            </div>

            {/* Q4 */}
            <div 
              className={`vm-quad vm-quad-4 ${activeQuad === 4 ? 'active' : ''}`}
              onMouseEnter={() => setActiveQuad(4)}
              onClick={() => setActiveQuad(4)}
            >
              <div className="vm-header">
                <div className="vm-icon"><FaBolt /></div>
                <div className="vm-label">Reliability</div>
              </div>
              <h3 className="vm-title"><span>24/7</span> Support</h3>
              <p className="vm-desc">
                Our dedicated support team is always available for assistance whenever you need it.
              </p>
              {/* New Expanding Ripple Widget */}
              <div className="vm-ripple-widget">
                <div className="vm-ripple r1"></div>
                <div className="vm-ripple r2"></div>
                <div className="vm-ripple r3"></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ValueMatrix;
