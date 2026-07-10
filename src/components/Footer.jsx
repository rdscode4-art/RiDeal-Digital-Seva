import {
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Barlow', sans-serif;
        }

        /* ── FOOTER ── */
        .footer {
          width: 100%;
          background: #0a0f1e;
          color: #fff;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* subtle dot-grid overlay */
        .footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        /* glowing orb top-right */
        .footer::after {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 65%);
          top: -180px;
          right: -120px;
          pointer-events: none;
        }

        .footer-container {
          position: relative;
          z-index: 2;
          padding: 72px 6% 0;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.3fr;
          gap: 56px;
          padding-bottom: 56px;
        }

        /* ── COL 1 — BRAND ── */
        .footer-brand {}

        .footer-logo-link {
          display: inline-block;
          margin-bottom: 22px;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
          box-shadow: 0 4px 18px rgba(0,0,0,0.25);
        }

        .footer-logo-link:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 12px 36px rgba(0,0,0,0.35);
          opacity: 0.92;
        }

        .footer-logo-img {
          height: 72px;
          width: auto;
          display: block;
          object-fit: contain;
          border-radius: 12px;
        }

        .footer-desc {
          color: rgba(255,255,255,0.72);
          font-size: 15px;
          line-height: 1.85;
          max-width: 320px;
          margin-bottom: 28px;
        }

        /* Social icons */
        .social-icons {
          display: flex;
          gap: 10px;
        }

        .social-icons a {
          width: 40px;
          height: 40px;
          border: 1.5px solid rgba(255,255,255,0.22);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.8);
          font-size: 15px;
          transition: background 0.25s ease, border-color 0.25s ease,
                      color 0.25s ease, transform 0.25s ease;
          text-decoration: none;
        }

        .social-icons a:hover {
          background: rgba(37, 99, 235, 0.1);
          border-color: #2563eb;
          color: #2563eb;
          transform: translateY(-4px);
        }

        /* ── COLUMN TITLES ── */
        .footer-title {
          font-size: 17px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 24px;
          letter-spacing: 0.3px;
          position: relative;
          padding-bottom: 12px;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 32px;
          height: 2.5px;
          background: linear-gradient(90deg, #2563eb, #2563eb);
          border-radius: 4px;
        }

        /* ── LINKS ── */
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          text-decoration: none;
          color: rgba(255,255,255,0.68);
          font-size: 15px;
          font-weight: 500;
          transition: color 0.22s ease, padding-left 0.22s ease;
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .footer-links a::before {
          content: '›';
          font-size: 17px;
          line-height: 1;
          opacity: 0.5;
          transition: opacity 0.22s ease, transform 0.22s ease;
        }

        .footer-links a:hover {
          color: #2563eb;
          padding-left: 5px;
        }

        .footer-links a:hover::before {
          opacity: 1;
          transform: translateX(2px);
        }

        /* ── CONTACT ── */
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 20px;
        }

        .contact-icon {
          width: 40px;
          height: 40px;
          border: 1.5px solid rgba(255,255,255,0.2);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.85);
          font-size: 15px;
          flex-shrink: 0;
          transition: background 0.25s ease, border-color 0.25s ease;
        }

        .contact-item:hover .contact-icon {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.45);
        }

        .contact-item p {
          color: rgba(255,255,255,0.7);
          font-size: 15px;
          line-height: 1.65;
          padding-top: 8px;
          transition: color 0.22s ease;
        }

        .contact-item:hover p {
          color: #2563eb;
        }

        /* ── DIVIDER ── */
        .footer-divider {
          position: relative;
          z-index: 2;
          height: 1px;
          background: rgba(255,255,255,0.1);
          margin: 0 6%;
        }

        /* ── BOTTOM BAR ── */
        .footer-bottom {
          position: relative;
          z-index: 2;
          padding: 22px 6%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .footer-bottom p {
          color: rgba(255,255,255,0.6);
          font-size: 14px;
        }

        .footer-bottom p span {
          color: #fff;
          font-weight: 700;
        }

        .footer-policy {
          display: flex;
          gap: 24px;
        }

        .footer-policy a {
          text-decoration: none;
          color: rgba(255,255,255,0.6);
          font-size: 14px;
          transition: color 0.22s ease;
        }

        .footer-policy a:hover {
          color: #fff;
        }

        /* ── BACK TO TOP ── */
        .back-top-btn {
          position: fixed;
          bottom: 32px;
          right: 28px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #2563eb;
          color: #0a0f1e;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 6px 22px rgba(37, 99, 235, 0.3);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          z-index: 999;
        }

        .back-top-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(37, 99, 235, 0.5);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 44px;
          }
        }

        @media (max-width: 768px) {
          .footer-container { padding: 52px 20px 0; }

          .footer-top {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .footer-logo-img { height: 58px; }

          .footer-desc { font-size: 14px; max-width: 100%; }

          .footer-title { font-size: 16px; }

          .footer-links a,
          .contact-item p { font-size: 14px; }

          .footer-divider { margin: 0 20px; }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            padding: 20px;
            gap: 12px;
          }

          .footer-policy { flex-wrap: wrap; justify-content: center; gap: 16px; }
        }
      `}</style>

      <footer className="footer">

        <div className="footer-container">
          <div className="footer-top">

            {/* ── COL 1 — BRAND ── */}
            <div className="footer-brand">

              <a href="/" className="footer-logo-link">
                <img
                  src="/logo.jpeg"
                  alt="RiDeal Digital Seva"
                  className="footer-logo-img"
                />
              </a>

              <p className="footer-desc">
                RiDeal Digital Seva delivers innovative IT services, website
                development, ERP solutions, digital marketing, and business
                automation to help companies scale faster and achieve
                long-term success.
              </p>

              <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=61583579480455" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                <a href="https://www.youtube.com/@ridealdigitalseva1" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
                <a href="https://www.linkedin.com/company/rideal-digital-seva/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="https://www.instagram.com/ridealdigitalseva/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              </div>

            </div>

            {/* ── COL 2 — QUICK LINKS ── */}
            <div>
              <h3 className="footer-title">Quick Links</h3>
              <div className="footer-links">
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/services">Our Services</a>
                <a href="/branches">Our Ventures</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact Us</a>
              </div>
            </div>

            {/* ── COL 3 — SERVICES ── */}
            <div>
              <h3 className="footer-title">Services</h3>
              <div className="footer-links">
                <a href="/contact">ERP Solutions</a>
                <a href="/contact">CRM Development</a>
                <a href="/contact">HRMS & Payroll</a>
                <a href="/contact">Web Development</a>
                <a href="/contact">App Development</a>
              </div>
            </div>

            {/* ── COL 4 — CONTACT ── */}
            <div>
              <h3 className="footer-title">Contact Us</h3>

              <div className="contact-item">
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <p>3rd floor, No. 59/60, E Block, Noida Sector 3, Noida, Uttar Pradesh 201301<br /></p>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><FaPhoneAlt /></div>
                <p>+91 90279 53810</p>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><FaEnvelope /></div>
                <p>info@ridealdigitalseva.com</p>
              </div>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© 2026 <span>Rideal Digital Seva</span>. All Rights Reserved.</p>
          <div className="footer-policy">
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollTop}
          aria-label="Back to top"
          style={{
            position: "fixed",
            bottom: "32px",
            right: "28px",
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            background: "#2563eb",
            color: "#0a0f1e",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "17px",
            cursor: "pointer",
            boxShadow: "0 6px 22px rgba(37, 99, 235, 0.3)",
            zIndex: 9999,
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(37, 99, 235, 0.5)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 22px rgba(37, 99, 235, 0.3)";
          }}
        >
          <FaArrowUp />
        </button>

      </footer>
    </>
  );
};

export default Footer;
