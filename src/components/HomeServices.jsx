import { Code, Megaphone, PenTool, CheckCircle2, Database, Smartphone, Users, BookOpen } from 'lucide-react';
import serviceWeb from '../assets/service_web.png';
import serviceSocial from '../assets/service_social.png';
import serviceBranding from '../assets/service_branding.png';
import serviceCrm from '../assets/service_crm.png';
import serviceApp from '../assets/service_app.png';
import serviceHrms from '../assets/service_hrms.png';
import serviceLms from '../assets/service_lms.png';

const servicesData = [
  {
    title: "WEB DEVELOPMENT",
    desc: "Modern, responsive and high-performing websites.",
    icon: <Code size={30} strokeWidth={2.5} />,
    items: ["Business Websites", "E-commerce Stores", "Landing Pages", "Custom Websites", "Website Maintenance"],
    img: serviceWeb
  },
  {
    title: "SOCIAL MEDIA",
    desc: "Creative strategies that grow your brand online.",
    icon: <Megaphone size={30} strokeWidth={2.5} />,
    items: ["Content Creation", "Growth Strategy", "Account Management", "Reels & Post Design", "Paid Ads"],
    img: serviceSocial
  },
  {
    title: "BRANDING",
    desc: "Unique identity that represents your brand.",
    icon: <PenTool size={30} strokeWidth={2.5} />,
    items: ["Logo Design", "Brand Identity", "Social Media Branding", "Graphic Design", "Brand Guidelines"],
    img: serviceBranding
  },
  {
    title: "CRM SYSTEM",
    desc: "Manage customer relationships and sales efficiently.",
    icon: <Database size={30} strokeWidth={2.5} />,
    items: ["Customer Data", "Sales Pipeline", "Workflow Automation", "Analytics & Reporting", "API Integration"],
    img: serviceCrm
  },
  {
    title: "APP DEVELOPMENT",
    desc: "Custom iOS and Android mobile applications.",
    icon: <Smartphone size={30} strokeWidth={2.5} />,
    items: ["iOS App Development", "Android App Development", "Cross-Platform Apps", "UI/UX App Design", "App Maintenance"],
    img: serviceApp
  },
  {
    title: "HRMS",
    desc: "Streamline human resources and employee management.",
    icon: <Users size={30} strokeWidth={2.5} />,
    items: ["Payroll Management", "Attendance Tracking", "Employee Onboarding", "Performance Reviews", "Leave Management"],
    img: serviceHrms
  },
  {
    title: "LMS",
    desc: "Advanced learning and lead management systems.",
    icon: <BookOpen size={30} strokeWidth={2.5} />,
    items: ["Course Management", "Student Portals", "Lead Tracking", "Progress Analytics", "Automated Follow-ups"],
    img: serviceLms
  }
];

const HomeServices = () => {
  return (
    <section className="home-services-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .home-services-section {
          padding: 60px 0; /* Removed side padding for full-width marquee */
          background: #ffffff;
          font-family: 'Inter', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
        }

        .hs-header {
          text-align: center;
          margin-bottom: 40px;
          padding: 0 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .hs-title {
          font-size: 48px;
          font-weight: 900;
          color: #0f172a;
          margin: 0;
          letter-spacing: -1px;
          line-height: 1.2;
        }

        .hs-title em {
          color: #2563eb;
          font-style: italic;
          font-weight: 900;
        }

        .hs-subtitle {
          font-size: 18px;
          color: #64748b;
          font-weight: 400;
          margin: 0;
        }

        /* Marquee Styles */
        .hs-marquee-container {
          display: flex;
          gap: 30px;
          width: 100vw;
          overflow: hidden;
          padding: 20px 0;
          position: relative;
        }

        /* Gradient mask for smooth fade effect at edges */
        .hs-marquee-container::before,
        .hs-marquee-container::after {
          content: "";
          position: absolute;
          top: 0;
          width: 100px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }
        .hs-marquee-container::before {
          left: 0;
          background: linear-gradient(to right, #ffffff, transparent);
        }
        .hs-marquee-container::after {
          right: 0;
          background: linear-gradient(to left, #ffffff, transparent);
        }

        .hs-marquee-group {
          display: flex;
          gap: 30px;
          animation: marqueeScroll 45s linear infinite;
          padding-left: 15px; /* Half of gap */
          padding-right: 15px;
        }

        .hs-marquee-container:hover .hs-marquee-group {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 30px)); }
        }

        .hs-card {
          width: 300px;
          flex-shrink: 0;
          background: #fafafc;
          border-radius: 20px;
          padding: 20px;
          border: 1px solid #f0f0f5;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hs-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
          background: #ffffff;
        }

        .hs-card-header {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 30px;
        }

        .hs-icon-box {
          width: 55px;
          height: 55px;
          background: #2563eb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #ffffff;
        }

        .hs-header-text {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .hs-card-title {
          font-size: 16px;
          font-weight: 800;
          color: #1f2937;
          margin: 0;
          line-height: 1.2;
        }

        .hs-card-desc {
          font-size: 13px;
          color: #6b7280;
          margin: 0;
          line-height: 1.5;
        }

        .hs-list {
          list-style: none;
          padding: 0;
          margin: 0 0 25px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .hs-list-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 600;
          color: #4b5563;
        }

        .hs-check {
          color: #2563eb; /* Brand Green */
          flex-shrink: 0;
        }

        .hs-image-box {
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          background: transparent;
          margin-top: auto; /* Push image to bottom */
        }

        .hs-image {
          width: 100%;
          height: auto;
          object-fit: contain;
          mix-blend-mode: multiply;
        }

        @media (max-width: 768px) {
          .hs-title {
            font-size: 32px;
          }
          .hs-card {
            width: 260px;
            padding: 15px;
          }
        }
      `}</style>

      <div className="hs-header">
        <h2 className="hs-title">Our <em>Services</em></h2>
        <span className="hs-subtitle">From ERP and CRM to AI-powered tools, logistics, healthcare, and beyond — end-to-end software solutions that simplify complexity and drive measurable growth.</span>
      </div>

      <div className="hs-marquee-container">
        {/* Original Group */}
        <div className="hs-marquee-group">
          {servicesData.map((service, index) => (
            <div className="hs-card" key={`org-${index}`}>
              <div className="hs-card-header">
                <div className="hs-icon-box">
                  {service.icon}
                </div>
                <div className="hs-header-text">
                  <h3 className="hs-card-title">{service.title}</h3>
                  <p className="hs-card-desc">{service.desc}</p>
                </div>
              </div>
              <ul className="hs-list">
                {service.items.map((item, i) => (
                  <li className="hs-list-item" key={i}>
                    <CheckCircle2 size={18} className="hs-check" /> {item}
                  </li>
                ))}
              </ul>
              <div className="hs-image-box">
                <img src={service.img} alt={service.title} className="hs-image" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Duplicated Group for Infinite Loop */}
        <div className="hs-marquee-group" aria-hidden="true">
          {servicesData.map((service, index) => (
            <div className="hs-card" key={`dup-${index}`}>
              <div className="hs-card-header">
                <div className="hs-icon-box">
                  {service.icon}
                </div>
                <div className="hs-header-text">
                  <h3 className="hs-card-title">{service.title}</h3>
                  <p className="hs-card-desc">{service.desc}</p>
                </div>
              </div>
              <ul className="hs-list">
                {service.items.map((item, i) => (
                  <li className="hs-list-item" key={i}>
                    <CheckCircle2 size={18} className="hs-check" /> {item}
                  </li>
                ))}
              </ul>
              <div className="hs-image-box">
                <img src={service.img} alt={service.title} className="hs-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
