import React from 'react';
import { Megaphone, PenTool, Database, Monitor, CheckCircle2 } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: "WEB DEVELOPMENT",
    icon: <Monitor size={22} />,
    desc: "Build modern, fast, and high-performing websites.",
    features: ["Custom Websites", "E-commerce Platforms", "CMS Development", "Web Applications", "UI/UX Design"]
  },
  {
    id: 2,
    title: "SOCIAL MEDIA",
    icon: <Megaphone size={22} />,
    desc: "Creative strategies that grow your brand online.",
    features: ["Content Creation", "Growth Strategy", "Account Management", "Reels & Post Design", "Paid Ads"]
  },
  {
    id: 3,
    title: "BRANDING",
    icon: <PenTool size={22} />,
    desc: "Unique identity that represents your brand.",
    features: ["Logo Design", "Brand Identity", "Social Media Branding", "Graphic Design", "Brand Guidelines"]
  },
  {
    id: 4,
    title: "CRM SYSTEM",
    icon: <Database size={22} />,
    desc: "Manage customer relationships and sales efficiently.",
    features: ["Customer Data", "Sales Pipeline", "Workflow Automation", "Analytics & Reporting", "API Integration"]
  }
];

const OurServicesSection = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <style>{`
        .oss-section {
          width: 100%;
          padding: 80px 5%;
          background: #ffffff;
          font-family: 'Inter', sans-serif;
        }

        .oss-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .oss-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .oss-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 900;
          color: #111827;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .oss-title span {
          color: #2563eb;
          font-style: italic;
          background: linear-gradient(90deg, #2563eb, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .oss-subtitle {
          font-size: 1.1rem;
          color: #6b7280;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .oss-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .oss-card {
          background: #f9fafb;
          border: 1px solid #f3f4f6;
          border-radius: 24px;
          padding: 32px;
          transition: all 0.3s ease;
        }

        .oss-card:hover {
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
          transform: translateY(-5px);
          border-color: #e5e7eb;
        }

        .oss-card-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
        }

        .oss-icon-box {
          width: 52px;
          height: 52px;
          background: #2563eb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
        }

        .oss-card-title-box {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .oss-card-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #1f2937;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .oss-card-desc {
          font-size: 0.85rem;
          color: #6b7280;
          margin: 0;
          line-height: 1.5;
        }

        .oss-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .oss-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          color: #4b5563;
          font-weight: 600;
        }

        .oss-feature-icon {
          color: #3b82f6;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .oss-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="oss-section">
        <div className="oss-container">
          <div className="oss-header">
            <h2 className="oss-title">
              Our <span>Services</span>
            </h2>
            <p className="oss-subtitle">
              From ERP and CRM to AI-powered tools, logistics, healthcare, and beyond — end-to-end software solutions that simplify complexity and drive measurable growth.
            </p>
          </div>

          <div className="oss-grid">
            {servicesData.map((service) => (
              <div key={service.id} className="oss-card">
                <div className="oss-card-header">
                  <div className="oss-icon-box">{service.icon}</div>
                  <div className="oss-card-title-box">
                    <h3 className="oss-card-title">{service.title}</h3>
                    <p className="oss-card-desc">{service.desc}</p>
                  </div>
                </div>
                <ul className="oss-features">
                  {service.features.map((feature, index) => (
                    <li key={index} className="oss-feature-item">
                      <CheckCircle2 size={18} className="oss-feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServicesSection;
