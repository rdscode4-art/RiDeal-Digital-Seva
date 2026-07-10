import React, { useRef } from 'react';
import { FaCalendarAlt, FaPaintBrush, FaCode, FaRocket } from 'react-icons/fa';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const SimpleSteps = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  const maskHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  return (
    <>
      <style>{`
        .ss-sec {
          width: 100%;
          background: #0a0f1e;
          padding: 60px 5%;
          font-family: 'Barlow', sans-serif;
          position: relative;
          color: white;
          overflow: hidden;
        }
        
        .ss-sec::before {
          content: '';
          position: absolute;
          top: -20%;
          left: 0%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        /* Dot Grid Pattern */
        .ss-sec::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
          background-size: 30px 30px;
          mask-image: radial-gradient(circle at center, black 60%, transparent 90%);
          -webkit-mask-image: radial-gradient(circle at center, black 60%, transparent 90%);
          pointer-events: none;
          z-index: 0;
        }

        .ss-header {
          text-align: center;
          margin-bottom: 40px;
          position: relative;
          z-index: 2;
        }

        .ss-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: #f3f4f6;
          margin: 0 0 15px 0;
          line-height: 1.1;
        }

        .ss-title span {
          display: inline-block;
          background: linear-gradient(90deg, #2563eb, #2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-style: italic;
          font-weight: 700;
          margin-left: 12px;
        }

        .ss-subtitle {
          color: #9ca3af;
          font-size: 1.1rem;
          margin: 0;
        }

        .ss-timeline {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          padding: 20px 0;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        /* The background track (dim) */
        .ss-timeline-track {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 34px;
          width: 2px;
          background: rgba(255, 255, 255, 0.1);
          z-index: 1;
        }

        /* The glowing foreground line */
        .ss-timeline-progress {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 34px;
          width: 2px;
          background: linear-gradient(180deg, #a855f7, #2563eb);
          z-index: 2;
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.5);
          transform-origin: top;
        }

        .ss-step {
          display: flex;
          align-items: flex-start;
          padding-left: 90px;
          position: relative;
          z-index: 3;
        }

        .ss-node {
          position: absolute;
          left: 27px;
          top: 35px;
          width: 16px; 
          height: 16px;
          border-radius: 50%;
          background: #0a0f1e;
          border: 3px solid;
          z-index: 3;
        }

        .node-1 { border-color: #a855f7; box-shadow: 0 0 12px rgba(168, 85, 247, 0.6); }
        .node-2 { border-color: #8b5cf6; box-shadow: 0 0 12px rgba(139, 92, 246, 0.6); }
        .node-3 { border-color: #6366f1; box-shadow: 0 0 12px rgba(99, 102, 241, 0.6); }
        .node-4 { border-color: #2563eb; box-shadow: 0 0 12px rgba(37, 99, 235, 0.6); }

        .ss-card {
          width: 100%;
          background: #0e1329;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px);
          background-size: 20px 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 30px;
          position: relative;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .ss-card:hover {
          transform: translateY(-6px);
        }

        .card-1:hover { border-color: rgba(168, 85, 247, 0.5); box-shadow: 0 12px 30px rgba(168, 85, 247, 0.15); }
        .card-2:hover { border-color: rgba(139, 92, 246, 0.5); box-shadow: 0 12px 30px rgba(139, 92, 246, 0.15); }
        .card-3:hover { border-color: rgba(99, 102, 241, 0.5); box-shadow: 0 12px 30px rgba(99, 102, 241, 0.15); }
        .card-4:hover { border-color: rgba(37, 99, 235, 0.5); box-shadow: 0 12px 30px rgba(37, 99, 235, 0.15); }

        
        .ss-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 20px;
          transition: all 0.4s ease;
        }
        
        .card-1 .ss-card-icon { color: #a855f7; }
        .card-2 .ss-card-icon { color: #8b5cf6; }
        .card-3 .ss-card-icon { color: #6366f1; }
        .card-4 .ss-card-icon { color: #2563eb; }

        .ss-card:hover .ss-card-icon {
          transform: scale(1.1);
        }
        
        .card-1:hover .ss-card-icon { background: rgba(168, 85, 247, 0.15); border-color: rgba(168, 85, 247, 0.4); }
        .card-2:hover .ss-card-icon { background: rgba(139, 92, 246, 0.15); border-color: rgba(139, 92, 246, 0.4); }
        .card-3:hover .ss-card-icon { background: rgba(99, 102, 241, 0.15); border-color: rgba(99, 102, 241, 0.4); }
        .card-4:hover .ss-card-icon { background: rgba(37, 99, 235, 0.15); border-color: rgba(37, 99, 235, 0.4); }

        .ss-card-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: white;
          margin: 0 0 10px 0;
        }

        .ss-card-title span {
          font-style: italic;
          font-weight: 500;
        }

        .card-1 .ss-card-title span { color: #a855f7; }
        .card-2 .ss-card-title span { color: #8b5cf6; }
        .card-3 .ss-card-title span { color: #6366f1; }
        .card-4 .ss-card-title span { color: #2563eb; }

        .ss-card-desc {
          color: #9ca3af;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }
        
        /* DESKTOP STYLES (Alternating Curved Timeline) */
        @media (min-width: 769px) {
          .ss-timeline {
            height: 1100px;
            display: block;
          }
          .ss-step {
            width: 50%;
            height: 25%;
            position: absolute;
            display: flex;
            align-items: center;
            padding: 0;
          }
          
          .step-1 { top: 0; left: 0; padding-right: 60px; justify-content: flex-end; }
          .step-2 { top: 25%; right: 0; padding-left: 60px; justify-content: flex-start; }
          .step-3 { top: 50%; left: 0; padding-right: 60px; justify-content: flex-end; }
          .step-4 { top: 75%; right: 0; padding-left: 60px; justify-content: flex-start; }

          .ss-card {
            width: 90%;
            max-width: 400px;
          }

          .ss-node {
            top: 50%;
            transform: translateY(-50%);
          }
          
          .step-1 .ss-node, .step-3 .ss-node { right: -9px; left: auto; }
          .step-2 .ss-node, .step-4 .ss-node { left: -9px; right: auto; }

          .ss-timeline-track, .ss-timeline-progress {
            display: none !important;
          }
          .ss-desktop-svg {
            display: block;
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            z-index: 1;
            pointer-events: none;
          }
        }

        /* MOBILE STYLES (Straight Vertical Timeline) */
        @media (max-width: 768px) {
          .ss-desktop-svg { display: none; }
          .ss-step {
            padding-left: 60px;
            gap: 20px;
            position: relative !important;
            width: 100% !important;
            height: auto !important;
            top: auto !important; left: auto !important; right: auto !important;
            justify-content: flex-start !important;
            margin-bottom: 30px;
          }
          .ss-timeline-track, .ss-timeline-progress {
            left: 20px;
            display: block;
          }
          .ss-node {
            left: 13px !important;
            right: auto !important;
            top: 35px !important;
            transform: none !important;
          }
          .ss-title {
            font-size: 2.2rem;
          }
        }

      `}</style>
      
      <section className="ss-sec">
        <div className="ss-header">
          <h2 className="ss-title">
            RiDeal Have Most Unique
            <span>Working Style</span>
          </h2>
          <p className="ss-subtitle">This is how your idea becomes a finished digital product.</p>
        </div>

        <div className="ss-timeline" ref={containerRef}>
          <div className="ss-timeline-track" />
          <motion.div 
            className="ss-timeline-progress" 
            style={{ scaleY: maskHeight }} 
          />
          
          <svg className="ss-desktop-svg" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
            {/* Background faint line */}
            <path 
              d="M 50 12.5 C 120 12.5, 120 37.5, 50 37.5 C -20 37.5, -20 62.5, 50 62.5 C 120 62.5, 120 87.5, 50 87.5"
              stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke"
            />
            {/* Animated glowing line */}
            <motion.path 
              d="M 50 12.5 C 120 12.5, 120 37.5, 50 37.5 C -20 37.5, -20 62.5, 50 62.5 C 120 62.5, 120 87.5, 50 87.5"
              stroke="url(#curveGrad)" strokeWidth="3" fill="none" vectorEffect="non-scaling-stroke"
              style={{ pathLength: smoothProgress, filter: 'drop-shadow(0 0 8px rgba(168,85,247,0.5))' }}
            />
          </svg>

          {/* STEP 1 */}
          <div className="ss-step step-1">
            <div className="ss-node node-1" />
            <div className="ss-card card-1">
              <div className="ss-card-icon">
                <FaCalendarAlt />
              </div>
              <h3 className="ss-card-title">Consultation <span>And Assessment</span></h3>
              <p className="ss-card-desc">
                We begin by understanding your business goals and technical requirements to outline the best path forward.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="ss-step step-2">
            <div className="ss-node node-2" />
            <div className="ss-card card-2">
              <div className="ss-card-icon">
                <FaPaintBrush />
              </div>
              <h3 className="ss-card-title">Strategy <span>And Planning</span></h3>
              <p className="ss-card-desc">
                Our experts craft a detailed roadmap, timeline, and design prototype tailored specifically to your needs.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="ss-step step-3">
            <div className="ss-node node-3" />
            <div className="ss-card card-3">
              <div className="ss-card-icon">
                <FaCode />
              </div>
              <h3 className="ss-card-title">Implementation <span>And Integration</span></h3>
              <p className="ss-card-desc">
                We develop and integrate robust, scalable solutions using the latest technologies and best practices.
              </p>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="ss-step step-4">
            <div className="ss-node node-4" />
            <div className="ss-card card-4">
              <div className="ss-card-icon">
                <FaRocket />
              </div>
              <h3 className="ss-card-title">Support <span>And Optimization</span></h3>
              <p className="ss-card-desc">
                Post-launch, we provide continuous monitoring, support, and updates to ensure peak performance.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default SimpleSteps;
