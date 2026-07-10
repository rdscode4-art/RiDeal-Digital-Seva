import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const SmartSolutions = () => {
  return (
    <>
      <style>{`
        .smart-sec {
          width: 100%;
          padding: 100px 5%;
          background-color: #0b0d17;
          background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          font-family: 'Barlow', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .smart-container {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .smart-left {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .smart-title {
          font-size: clamp(2.5rem, 4vw, 4rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin: 0;
        }

        .smart-title span {
          background: linear-gradient(90deg, #2563eb, #2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          display: inline-block;
        }

        .smart-title span::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #2563eb, #2563eb);
          border-radius: 2px;
        }

        .smart-desc {
          font-size: 1.1rem;
          color: #9ca3af;
          line-height: 1.7;
          margin: 0;
          max-width: 90%;
        }

        .smart-list {
          list-style: none;
          padding: 0;
          margin: 10px 0 0 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .smart-list-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.05rem;
          font-weight: 500;
          color: #e5e7eb;
        }

        .smart-list-icon {
          color: #2563eb;
          font-size: 1.2rem;
          flex-shrink: 0;
          filter: drop-shadow(0 0 8px rgba(37, 99, 235, 0.4));
        }

        .smart-right {
          position: relative;
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .smart-img-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex: 1;
        }

        .smart-img {
          width: 100%;
          border-radius: 16px;
          object-fit: cover;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .img-tall {
          height: 500px;
        }

        .img-short {
          height: 240px;
        }

        .smart-badge {
          position: absolute;
          top: 10px;
          right: -20px;
          background: rgba(30, 41, 59, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          padding: 16px 24px;
          border-radius: 12px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
          z-index: 10;
          text-align: center;
        }

        .smart-badge h4 {
          margin: 0;
          font-size: 1.6rem;
          font-weight: 800;
          background: linear-gradient(90deg, #2563eb, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .smart-badge p {
          margin: 0;
          font-size: 0.9rem;
          font-weight: 600;
          white-space: nowrap;
          color: #cbd5e1;
        }

        @media (max-width: 1024px) {
          .smart-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .smart-right {
            padding-right: 20px;
          }
        }

        @media (max-width: 640px) {
          .smart-right {
            flex-direction: column;
          }
          .img-tall {
            height: 300px;
          }
          .smart-badge {
            top: 10px;
            right: 10px;
            padding: 12px 16px;
          }
          .smart-badge h4 {
            font-size: 1.3rem;
          }
          .smart-badge p {
            font-size: 0.8rem;
          }
          .smart-title {
            font-size: 2.2rem;
          }
        }
      `}</style>
      <section className="smart-sec">
        <div className="smart-container">
          
          <div className="smart-left">
            <h2 className="smart-title">
              Powering Businesses <br />
              With Smart Digital <br />
              <span>Solutions</span>
            </h2>
            
            <p className="smart-desc">
              RiDeal Digital Seva combines cutting-edge technology with deep domain expertise to deliver IT services, ERP systems, digital marketing, and AI-driven automation — helping businesses scale faster.
            </p>
            
            <ul className="smart-list">
              <li className="smart-list-item">
                <FaCheckCircle className="smart-list-icon" />
                Certified IT professionals with 10+ years of industry experience
              </li>
              <li className="smart-list-item">
                <FaCheckCircle className="smart-list-icon" />
                End-to-end solutions from strategy to deployment & support
              </li>
              <li className="smart-list-item">
                <FaCheckCircle className="smart-list-icon" />
                Transparent pricing with measurable ROI for every project
              </li>
              <li className="smart-list-item">
                <FaCheckCircle className="smart-list-icon" />
                24/7 dedicated support and proactive monitoring
              </li>
            </ul>
          </div>

          <div className="smart-right">
            <div className="smart-img-col">
              <img 
                src="https://images.unsplash.com/photo-1591789729656-78b17b2b291a?q=80&w=800&auto=format&fit=crop" 
                alt="Technology Board" 
                className="smart-img img-tall" 
              />
            </div>
            <div className="smart-img-col">
              <div className="smart-badge">
                <h4>1000+</h4>
                <p>Projects Delivered</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop" 
                alt="AI Robot" 
                className="smart-img img-short" 
              />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
                alt="Data Analytics" 
                className="smart-img img-short" 
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default SmartSolutions;
