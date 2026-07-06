import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const REVIEWS = [
  {
    name: "Amit Sharma",
    role: "CEO, TechNova",
    text: "The software development team was exceptional. They built a custom CRM for us that completely streamlined our operations. Highly recommended for any IT needs!",
    rating: 5
  },
  {
    name: "Priya Desai",
    role: "Founder, GreenEarth",
    text: "Our new e-commerce website is beautiful and highly functional. The team's attention to detail and SEO expertise resulted in a 40% increase in traffic in just weeks.",
    rating: 5
  },
  {
    name: "Rohan Gupta",
    role: "Marketing Director, BuildFast",
    text: "Outstanding digital marketing services. They managed our campaigns flawlessly and we saw an incredible ROI within just three months. Truly a reliable partner.",
    rating: 5
  },
  {
    name: "Neha Verma",
    role: "Operations Manager, LogiCorp",
    text: "Their ERP solution transformed how we handle our inventory and logistics. It's incredibly intuitive and saved us countless hours.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    role: "Director, EduTech India",
    text: "The custom school management system they developed is top-notch. It bridged the communication gap between teachers, parents, and students seamlessly.",
    rating: 5
  }
];

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <style>{`
        .testimonial-section {
          padding: 80px 6%;
          background: #ffffff;
          font-family: 'Barlow', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .testimonial-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .testi-tag {
          color: #3b82f6;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: inline-block;
        }

        .testi-title {
          font-size: 42px;
          font-weight: 800;
          color: #1e293b;
          line-height: 1.2;
        }

        .testi-vp {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 20px 0;
        }

        .testi-track {
          display: flex;
          width: max-content;
          animation: testiScroll 30s linear infinite;
        }

        .testi-track:hover {
          animation-play-state: paused;
        }

        .testi-group {
          display: flex;
          gap: 30px;
          padding-right: 30px;
        }

        @keyframes testiScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .testi-card {
          width: 380px;
          flex-shrink: 0;
          background: #f8fafc;
          border-radius: 20px;
          padding: 40px 30px;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #e2e8f0;
          white-space: normal;
        }

        .testi-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
          background: #ffffff;
        }

        .testi-quote-icon {
          position: absolute;
          top: 30px;
          right: 30px;
          font-size: 40px;
          color: #e2e8f0;
          opacity: 0.6;
          transition: color 0.3s ease;
        }

        .testi-card:hover .testi-quote-icon {
          color: #3b82f6;
          opacity: 0.2;
        }

        .testi-stars {
          display: flex;
          gap: 4px;
          color: #f59e0b;
          font-size: 18px;
          margin-bottom: 20px;
        }

        .testi-text {
          font-size: 16px;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 30px;
          position: relative;
          z-index: 2;
          font-style: italic;
        }

        .testi-author {
          display: flex;
          align-items: center;
          gap: 16px;
          border-top: 1px solid #e2e8f0;
          padding-top: 20px;
        }

        .testi-info h4 {
          font-size: 17px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 4px;
        }

        .testi-info span {
          font-size: 14px;
          color: #64748b;
        }

        @media (max-width: 768px) {
          .testi-title { font-size: 32px; }
          .testimonial-section { padding: 60px 5%; }
        }
      `}</style>

      <div className="testimonial-header">
        <span className="testi-tag">Client Reviews</span>
        <h2 className="testi-title">What Our Clients Say</h2>
      </div>

      <div className="testi-vp">
        <div className="testi-track">
          <div className="testi-group">
            {REVIEWS.map((review, idx) => (
              <div className="testi-card" key={idx}>
                <FaQuoteLeft className="testi-quote-icon" />
                <div className="testi-stars">
                  {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="testi-text">"{review.text}"</p>
                <div className="testi-author">
                  <div className="testi-info">
                    <h4>{review.name}</h4>
                    <span>{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testi-group" aria-hidden="true">
            {REVIEWS.map((review, idx) => (
              <div className="testi-card" key={`dup-${idx}`}>
                <FaQuoteLeft className="testi-quote-icon" />
                <div className="testi-stars">
                  {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="testi-text">"{review.text}"</p>
                <div className="testi-author">
                  <div className="testi-info">
                    <h4>{review.name}</h4>
                    <span>{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
