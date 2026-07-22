import React, { useEffect, useState } from "react";
import { FaRocket, FaFileInvoiceDollar, FaBuilding, FaIdCard, FaArrowRight, FaTimes } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StaticSocialMedia from "../components/staticsocialmedia/StaticSocialMedia";
import CertificationsHero from "../components/CertificationsHero";
import cert1 from "../assets/certificate.png";
import cert2 from "../assets/certificate2.png";
import cert3 from "../assets/Certificate3.png";
import cert4 from "../assets/certificate4.png";

const CERTIFICATIONS = [
  {
    id: 1,
    title: "Startup India Recognition",
    subtitle: "DPIIT, Ministry of Commerce & Industry, Govt of India",
    icon: <FaRocket />,
    color: "#f59e0b", // Yellow
    bg: "#fef3c7",
    link: cert1,
  },
  {
    id: 2,
    title: "GST Registration Certificate",
    subtitle: "Department of Revenue, Ministry of Finance, Govt of India",
    icon: <FaFileInvoiceDollar />,
    color: "#2563eb", // Blue
    bg: "#dbeafe",
    link: cert2,
  },
  {
    id: 4,
    title: "e-Permanent Account Number (e-PAN)",
    subtitle: "Income Tax Department, Government of India",
    icon: <FaIdCard />,
    color: "#ef4444", // Red
    bg: "#fee2e2",
    link: cert4,
  },
  {
    id: 3,
    title: "Certificate of Incorporation",
    subtitle: "Ministry of Corporate Affairs, Govt of India",
    icon: <FaBuilding />,
    color: "#2563eb", // Green
    bg: "#d1fae5",
    link: cert3,
  },
];

const Certifications = () => {
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <CertificationsHero />
      <StaticSocialMedia />
      <div className="cert-page">
        <style>{`
          .cert-page {
            width: 100%;
            min-height: 100vh;
            background: #f8fafc;
            padding: 80px 5%;
            font-family: 'Barlow', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .cert-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
            width: 100%;
            max-width: 1200px;
          }
          .cert-card {
            flex: 1 1 300px;
            max-width: 380px;
            background: #ffffff;
            border-radius: 16px;
            padding: 40px 24px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
            border: 1px solid #f1f5f9;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            overflow: hidden;
            animation: fadeInUp 0.7s ease backwards;
          }

          .cert-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, #2563eb, #2563eb, #f59e0b, #ef4444);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.4s ease;
            z-index: 2;
          }

          .cert-card:hover {
            transform: translateY(-12px);
            box-shadow: 0 25px 50px rgba(37, 99, 235, 0.12);
            border-color: rgba(37, 99, 235, 0.15);
          }

          .cert-card:hover::before {
            transform: scaleX(1);
          }

          .cert-icon-wrapper {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 36px;
            margin-bottom: 24px;
            position: relative;
            background: #fff;
            border: 2px solid;
            transition: all 0.4s ease;
          }

          .cert-card:hover .cert-icon-wrapper {
            transform: scale(1.1) rotate(6deg);
            box-shadow: 0 15px 30px rgba(0,0,0,0.08);
          }

          .cert-icon-inner {
            width: 76px;
            height: 76px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .cert-card-title {
            font-size: 20px;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 12px;
            line-height: 1.3;
          }

          .cert-card-subtitle {
            font-size: 14px;
            color: #64748b;
            line-height: 1.5;
            margin-bottom: 24px;
            flex-grow: 1;
          }

          .cert-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            font-weight: 600;
            color: #2563eb;
            text-decoration: none;
            transition: all 0.3s ease;
            padding: 8px 16px;
            border-radius: 8px;
            background: transparent;
          }

          .cert-card:hover .cert-link {
            gap: 12px;
            background: #f1f5f9;
            color: #2563eb;
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 768px) {
            .cert-title {
              font-size: 32px;
            }
            .cert-page {
              padding: 60px 5%;
            }
          }

          /* MODAL STYLES */
          .cert-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.8);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            animation: fadeIn 0.2s ease;
          }

          .cert-modal-content {
            position: relative;
            background: #fff;
            padding: 10px;
            border-radius: 12px;
            max-width: 90vw;
            max-height: 90vh;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: scaleUp 0.3s ease;
          }

          .cert-modal-img {
            max-width: 100%;
            max-height: calc(90vh - 20px);
            border-radius: 8px;
            object-fit: contain;
          }

          .cert-modal-close {
            position: absolute;
            top: -40px;
            right: 0;
            background: none;
            border: none;
            color: #fff;
            font-size: 28px;
            cursor: pointer;
            transition: color 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .cert-modal-close:hover {
            color: #ef4444;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes scaleUp {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}</style>
        <div className="cert-grid">
          {CERTIFICATIONS.map((cert, index) => (
            <div className="cert-card" key={cert.id} style={{ animationDelay: `${index * 0.15}s` }}>
              <div 
                className="cert-icon-wrapper" 
                style={{ borderColor: cert.color }}
              >
                <div 
                  className="cert-icon-inner"
                  style={{ background: cert.bg, color: cert.color }}
                >
                  {cert.icon}
                </div>
              </div>
              <h3 className="cert-card-title">{cert.title}</h3>
              <p className="cert-card-subtitle">{cert.subtitle}</p>
              <a 
                href={cert.link || "#"} 
                className="cert-link" 
                onClick={(e) => { 
                  e.preventDefault();
                  if (cert.link) setModalImage(cert.link); 
                }}
              >
                Verify Status <FaArrowRight />
              </a>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {modalImage && (
          <div className="cert-modal-overlay" onClick={() => setModalImage(null)}>
            <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="cert-modal-close" onClick={() => setModalImage(null)}>
                <FaTimes />
              </button>
              <img src={modalImage} alt="Certificate Document" className="cert-modal-img" />
            </div>
          </div>
        )}

      </div>
      <Footer />
    </>
  );
};

export default Certifications;
