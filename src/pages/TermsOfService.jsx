import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      
      <style>{`
        .terms-page {
          padding: 120px 6% 80px;
          background: #f8fafc;
          min-height: 100vh;
          font-family: 'Barlow', sans-serif;
        }

        .terms-container {
          max-width: 900px;
          margin: 0 auto;
          background: #fff;
          padding: 60px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(8,56,120,0.05);
          border: 1px solid rgba(8,56,120,0.08);
        }

        .terms-title {
          font-size: 42px;
          font-weight: 900;
          color: #083878;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .terms-date {
          font-size: 15px;
          color: #64748b;
          font-weight: 500;
          margin-bottom: 40px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e2e8f0;
        }

        .terms-content h2 {
          font-size: 24px;
          font-weight: 800;
          color: #0a0f1e;
          margin: 40px 0 16px;
        }

        .terms-content p {
          font-size: 16px;
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .terms-content ul {
          list-style: none;
          padding: 0;
          margin: 0 0 24px 0;
        }

        .terms-content ul li {
          position: relative;
          padding-left: 24px;
          font-size: 16px;
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 10px;
        }

        .terms-content ul li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #083878;
          font-weight: bold;
          font-size: 18px;
        }

        .terms-contact {
          background: #f0f4f8;
          padding: 30px;
          border-radius: 12px;
          margin-top: 40px;
          border-left: 4px solid #083878;
        }

        .terms-contact p {
          margin-bottom: 8px;
          font-weight: 500;
        }

        .terms-contact p:last-child {
          margin-bottom: 0;
        }

        .terms-contact a {
          color: #083878;
          text-decoration: none;
          font-weight: 700;
        }

        .terms-contact a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .terms-page { padding: 100px 5% 60px; }
          .terms-container { padding: 40px 24px; }
          .terms-title { font-size: 32px; }
        }
      `}</style>

      <main className="terms-page">
        <div className="terms-container">
          <h1 className="terms-title">Terms & Conditions</h1>
          <p className="terms-date">Last Updated: June 2026</p>

          <div className="terms-content">
            <p>Welcome to <strong>RiDeal Digital Seva</strong>. By accessing our website and services, you agree to the following Terms & Conditions.</p>

            <h2>Acceptance of Terms</h2>
            <p>By using our website or services, you agree to comply with these Terms & Conditions.</p>

            <h2>Services</h2>
            <p>RiDeal Digital Seva provides services including but not limited to:</p>
            <ul>
              <li>Website Development</li>
              <li>Mobile Application Development</li>
              <li>CRM Development</li>
              <li>Digital Marketing</li>
              <li>Software Development</li>
              <li>UI/UX Design</li>
              <li>Business Automation Solutions</li>
              <li>IT Consulting Services</li>
            </ul>

            <h2>Project Requirements</h2>
            <p>Clients are responsible for providing accurate project requirements, content, images, credentials, and approvals required for project completion.</p>

            <h2>Payments</h2>
            <ul>
              <li>Projects may require an advance payment before commencement.</li>
              <li>Remaining payments shall be made according to the agreed project milestones.</li>
              <li>Delayed payments may result in project suspension.</li>
            </ul>

            <h2>Revisions</h2>
            <p>Reasonable revisions are provided according to the agreed project scope. Additional revisions beyond the approved scope may incur extra charges.</p>

            <h2>Intellectual Property</h2>
            <p>Upon full payment, ownership of the completed project will be transferred to the client unless otherwise agreed in writing.</p>
            <p>Third-party assets, plugins, licenses, or software remain subject to their respective licensing terms.</p>

            <h2>Project Delays</h2>
            <p>Project timelines may be affected by delays in content submission, approvals, or client communication.</p>

            <h2>Limitation of Liability</h2>
            <p>RiDeal Digital Seva shall not be liable for:</p>
            <ul>
              <li>Business losses</li>
              <li>Revenue losses</li>
              <li>Data losses caused by third-party services</li>
              <li>Service interruptions beyond our control</li>
            </ul>

            <h2>Hosting & Third-Party Services</h2>
            <p>If hosting, domains, APIs, payment gateways, or third-party tools are used, their availability and performance remain subject to their respective providers.</p>

            <h2>Website Content</h2>
            <p>Clients are responsible for ensuring that submitted content complies with applicable laws and regulations.</p>

            <h2>Termination</h2>
            <p>We reserve the right to suspend or terminate services in cases of non-payment, abuse, fraudulent activities, or violation of these terms.</p>

            <h2>Changes to Terms</h2>
            <p>RiDeal Digital Seva reserves the right to modify these Terms & Conditions at any time without prior notice.</p>

            <h2>Governing Law</h2>
            <p>These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India.</p>

            <h2>Contact Information</h2>
            <div className="terms-contact">
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

export default TermsOfService;
