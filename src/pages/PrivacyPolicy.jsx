import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StaticSocialMedia from "../components/staticsocialmedia/StaticSocialMedia";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <StaticSocialMedia />
      
      <style>{`
        .privacy-page {
          padding: 120px 6% 80px;
          background: #f8fafc;
          min-height: 100vh;
          font-family: 'Barlow', sans-serif;
        }

        .privacy-container {
          max-width: 900px;
          margin: 0 auto;
          background: #fff;
          padding: 60px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(37, 99, 235,0.05);
          border: 1px solid rgba(37, 99, 235,0.08);
        }

        .privacy-title {
          font-size: 42px;
          font-weight: 900;
          color: #2563eb;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .privacy-date {
          font-size: 15px;
          color: #64748b;
          font-weight: 500;
          margin-bottom: 40px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e2e8f0;
        }

        .privacy-content h2 {
          font-size: 24px;
          font-weight: 800;
          color: #0a0f1e;
          margin: 40px 0 16px;
        }

        .privacy-content p {
          font-size: 16px;
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .privacy-content ul {
          list-style: none;
          padding: 0;
          margin: 0 0 24px 0;
        }

        .privacy-content ul li {
          position: relative;
          padding-left: 24px;
          font-size: 16px;
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 10px;
        }

        .privacy-content ul li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #2563eb;
          font-weight: bold;
          font-size: 18px;
        }

        .privacy-contact {
          background: #f0f4f8;
          padding: 30px;
          border-radius: 12px;
          margin-top: 40px;
          border-left: 4px solid #2563eb;
        }

        .privacy-contact p {
          margin-bottom: 8px;
          font-weight: 500;
        }

        .privacy-contact p:last-child {
          margin-bottom: 0;
        }

        .privacy-contact a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 700;
        }

        .privacy-contact a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .privacy-page { padding: 100px 5% 60px; }
          .privacy-container { padding: 40px 24px; }
          .privacy-title { font-size: 32px; }
        }
      `}</style>

      <main className="privacy-page">
        <div className="privacy-container">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-date">Last Updated: June 2026</p>

          <div className="privacy-content">
            <p>Welcome to <strong>RiDeal Digital Seva</strong> ("Company", "we", "our", "us"). We respect your privacy and are committed to protecting the personal information you share with us.</p>

            <h2>Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul>
              <li>Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Company Name</li>
              <li>Business Information</li>
              <li>Website Information</li>
              <li>Project Requirements</li>
              <li>IP Address and Browser Information</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide our services</li>
              <li>Respond to inquiries and support requests</li>
              <li>Deliver project updates</li>
              <li>Improve our website and services</li>
              <li>Send important business communications</li>
              <li>Process payments and invoices</li>
            </ul>

            <h2>Information Security</h2>
            <p>We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or misuse.</p>

            <h2>Third-Party Services</h2>
            <p>We may use trusted third-party services including:</p>
            <ul>
              <li>Google Analytics</li>
              <li>Google Ads</li>
              <li>Payment Gateways</li>
              <li>Cloud Hosting Providers</li>
              <li>Email Marketing Platforms</li>
            </ul>
            <p>These providers may collect information according to their own privacy policies.</p>

            <h2>Data Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. Information may only be shared when required by law or for service delivery purposes.</p>

            <h2>Cookies</h2>
            <p>Our website may use cookies to improve user experience, analyze website traffic, and enhance functionality.</p>

            <h2>External Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of external websites.</p>

            <h2>Your Rights</h2>
            <p>You may request:</p>
            <ul>
              <li>Access to your data</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Withdrawal of consent where applicable</li>
            </ul>

            <h2>Contact Us</h2>
            <p>If you have any questions regarding this Privacy Policy, please contact us:</p>
            <div className="privacy-contact">
              <p><strong>RiDeal Digital Seva</strong></p>
              <p>Email: <a href="mailto:info@ridealdigitalseva.com">info@ridealdigitalseva.com</a></p>
              <p>Phone: <a href="tel:+919027953810">+91 90279 53810</a></p>
              <p>Website: <a href="https://ridealdigitalseva.com">https://ridealdigitalseva.com</a></p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
