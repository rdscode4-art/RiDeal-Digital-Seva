import { useState } from "react";
import { FaArrowRight, FaEnvelope, FaCheckCircle } from "react-icons/fa";

const TO_EMAIL = "info@ridealdigitalseva.com";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent]   = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    const subject = encodeURIComponent("Newsletter Subscription");
    const body    = encodeURIComponent(`New newsletter subscription request from: ${email}`);
    window.location.href = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 5000);
  };

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

        /* ── SECTION ── */
        .newsletter {
          width: 100%;
          padding: 32px 6%;
          background: linear-gradient(100deg, #2563eb 0%, #0c4a9e 55%, #2563eb 100%);
          position: relative;
          overflow: hidden;
        }

        /* subtle dot-grid overlay */
        .newsletter::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        /* glowing orb */
        .newsletter::after {
          content: '';
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%);
          top: -160px;
          right: -80px;
          pointer-events: none;
        }

        .newsletter-container {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        /* ── LEFT ── */
        .newsletter-left {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .nl-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #fff;
          flex-shrink: 0;
        }

        .nl-text h2 {
          font-size: 20px;
          color: #fff;
          font-weight: 800;
          margin-bottom: 4px;
          line-height: 1.25;
        }

        .nl-text p {
          font-size: 14px;
          color: rgba(255,255,255,0.75);
          line-height: 1.5;
          font-weight: 400;
        }

        /* ── RIGHT ── */
        .newsletter-right {
          flex: 1.1;
        }

        .newsletter-form {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid rgba(255,255,255,0.22);
          border-radius: 10px;
          overflow: hidden;
          transition: border-color 0.25s ease;
        }

        .newsletter-form:focus-within {
          border-color: rgba(255,255,255,0.55);
          background: rgba(255,255,255,0.13);
        }

        .newsletter-form input {
          flex: 1;
          height: 52px;
          border: none;
          outline: none;
          padding: 0 20px;
          background: transparent;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          font-family: 'Barlow', sans-serif;
        }

        .newsletter-form input::placeholder {
          color: rgba(255,255,255,0.5);
        }

        .newsletter-form button {
          height: 52px;
          padding: 0 24px;
          border: none;
          background: #fff;
          color: #2563eb;
          font-size: 14.5px;
          font-weight: 800;
          cursor: pointer;
          transition: background 0.22s ease, transform 0.22s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: 'Barlow', sans-serif;
          white-space: nowrap;
          letter-spacing: 0.2px;
          flex-shrink: 0;
        }

        .newsletter-form button:hover {
          background: #e8f0fe;
          transform: translateX(-1px);
        }

        .newsletter-form button svg {
          transition: transform 0.22s ease;
        }

        .newsletter-form button:hover svg {
          transform: translateX(3px);
        }

        /* Checkbox */
        .newsletter-check {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 10px;
        }

        .newsletter-check input {
          width: 14px;
          height: 14px;
          accent-color: #fff;
          cursor: pointer;
          flex-shrink: 0;
        }

        .newsletter-check label {
          color: rgba(255,255,255,0.65);
          font-size: 13px;
          font-weight: 400;
          cursor: pointer;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 992px) {
          .newsletter-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }

          .nl-text h2 { font-size: 18px; }
        }

        @media (max-width: 768px) {
          .newsletter { padding: 28px 20px; }

          .newsletter-form {
            flex-direction: column;
            border: none;
            background: none;
            gap: 10px;
          }

          .newsletter-form input {
            width: 100%;
            height: 48px;
            border-radius: 8px;
            border: 1.5px solid rgba(255,255,255,0.25);
            background: rgba(255,255,255,0.08);
          }

          .newsletter-form button {
            width: 100%;
            height: 48px;
            border-radius: 8px;
          }
        }
      `}</style>

      <section className="newsletter">
        <div className="newsletter-container">

          {/* LEFT */}
          <div className="newsletter-left">
            <div className="nl-icon-wrap">
              <FaEnvelope />
            </div>
            <div className="nl-text">
              <h2>Subscribe to Our Newsletter</h2>
              <p>Get the latest IT tips, digital marketing insights and updates straight to your inbox.</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="newsletter-right">
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">
                {sent ? <><FaCheckCircle /> Sent!</> : <>Subscribe Now <FaArrowRight /></>}
              </button>
            </form>

            <div className="newsletter-check">
              <input type="checkbox" id="nl-privacy" required />
              <label htmlFor="nl-privacy">
                By subscribing, you accept our Privacy Policy
              </label>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Newsletter;
